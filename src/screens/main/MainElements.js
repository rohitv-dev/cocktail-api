import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.5rem 1rem;
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`

export const Card = styled.div`
  display: block;
  border: 0.5px solid black;
  margin: 1rem;
  align-items: center;
  justifyContent: space-evenly;
  width: 200px;
  height: 250px;
  box-shadow: 0 0 10px black;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px black;
    transform: translateY(-1rem);
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`

export const CardName = styled.div`
  padding: 0.5rem 0 0 0;
  font-size: 1rem;
  text-align: center;
  text-overflow: ellipsis;
`