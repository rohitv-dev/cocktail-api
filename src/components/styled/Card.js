import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  position: relative;
  width: 200px;
  height: 300px;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1rem;
  box-shadow: 0 0 8px white;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }
`

export const Image = styled.img`
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`

export const Title = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.4rem;
  padding: 0.1rem 0.2rem;
  max-width: 140px;
  background-color: rgba(125,6,144,1);
  z-index: 10;
  font-size: 1rem;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  overflow: hidden;
`