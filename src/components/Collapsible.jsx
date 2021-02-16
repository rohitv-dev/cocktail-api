import React, { useState } from 'react'
import * as CP from './styled/Collapsible'

function Collapsible({ title, filterData }) {
  const [open, setOpen] = useState(false)
  console.log(filterData)
  return (
    <>
      <CP.Collapsible>
        <CP.Title  
          onClick={() => setOpen(!open)}
        >{ title }</CP.Title>
        <CP.Content
          initial={{ height: open ? 0 : "100%" }}
          animate={{ height: open ? 0 : "100%" }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          { open && 
            <>
              <ul>
                {filterData.map((drink, index) => 
                  <li style={{color: 'white'}}>{ drink.strCategory ?? '' }</li>
                )}
              </ul>
            </>  
          }
        </CP.Content>
      </CP.Collapsible>
    </>
  )
}

export default Collapsible
