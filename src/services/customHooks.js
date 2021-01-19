import { useState, useEffect, useRef } from 'react'

export const extractJSON = async (url) => {
  try {
    let res = await fetch(url)
    let jRes = await res.json()
    return jRes.drinks
  } catch (error) {
    console.error(error)
    return [] 
  }
}

export const useGetRandom = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRandom = async () => {
      try {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

        let res = await fetch(url)
        let jRes = await res.json()
        setData(jRes.drinks[0])
        setLoading(false)

      } catch(error) {
        setData({})
        setLoading(true)
        console.log(error)
      }
    }

    fetchRandom()
  }, [])

  return [data, loading]
}

export const useGetFilters = () => {
  const [data, setData] = useState({'i': [], 'g': [], 'a': [], 'c': []})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const urls = ['i', 'g', 'a', 'c'].map((char) => [char, `https://www.thecocktaildb.com/api/json/v1/1/list.php?${char}=list`])
      
        const responses = await Promise.all(
          urls.map((url) => fetch(url[1]).then(async (res) => await res.json().then((json) => [url[0], json])))
        )

        let mappedResponse = {}
        responses.forEach((res) => {
          mappedResponse[res[0]] = res[1].drinks
        })
    
        setData(mappedResponse)
        setLoading(false)
      } catch (error) { 
        setLoading(true)
      }
    }
    
    fetchFilters()
  }, [])

  return [data, loading]
}

export const useGetDrink = (filters, name) => {
  const [filterCat, fLoading] = useGetFilters()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const cache = useRef({})
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let chars = ['i', 'a', 'c']
        let [temp, rowTemp, idData, finalData, result] = [[], [], [], [], []]
        
        //Caching data
        for (let char of chars) {
          if (filters[char].length !== 0) {
            for (let val of filters[char]) {
              if (cache.current[val]) {
                rowTemp = [...rowTemp, ...cache.current[val]]
              } else {
                let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${char}=${val}`
                let drinkData = await extractJSON(url)
                cache.current[val] = drinkData
                rowTemp = [...rowTemp, ...drinkData]  
              }
            }
          }
          if (rowTemp.length !== 0) temp.push(rowTemp)
          rowTemp = []
        }

        //Mapping to drink name
        if (temp.length !== 0) {
          for (let row of temp) {
            idData.push(row.map((i) => i.idDrink))
          }
        }

        if (idData.length !== 0) {
          //Returning common occurences
          result = idData.shift().filter(function(v) {
          return idData.every(function(a) {
              return a.indexOf(v) !== -1;
          })
        })
        }

        //Obtaining corresponding object
        for (let id of result) {
          for (let row of temp) {
            let val = row.filter((drink) => drink.idDrink === id)
            if (val.length !== 0) {
              finalData.push(val[0])
              break
            }
          }
        }

        //RegExp to match drink names
        if (name !== '') {
          let re = new RegExp(name, 'i')
          finalData = finalData.filter((data) => data.strDrink.search(re) === 0)
        }

        setData(finalData)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(true)
        setData([])
      }
    }

    fetchData()
  }, [filters, name])

  return [filterCat, fLoading, data, loading]
}

export const useGetByID = (id) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const cache = useRef({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== '') {
          if (cache.current[id]) {
            setData(cache.current[id])
          } else {
            let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            let res = await fetch(url)
            let jRes = await res.json()
            setData(jRes["drinks"][0])
            setLoading(false)
          }   
        } 
      } catch (error) {
        setData({})
        setLoading(true)
      }
    } 

    fetchData()
  }, [id])

  return [data, loading]
}