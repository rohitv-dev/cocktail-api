import React from 'react'
import styled, { keyframes } from 'styled-components'

const loadingAnimation = keyframes`
  0% { height: 100px; width: 100px; }
  30% { height: 400px; width: 400px; opacity: 1 }
  40% { height: 405px; width: 405px; opacity: 0.3; }
  100% { height: 100px; width: 100px; opacity: 0.6; }
`

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`

const LoadingCircle = styled.div`
  height: 100px;
  width: 100px;
  border: 5px solid black;
  border-radius: 50%;
  animation-name: ${loadingAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`

function Loading() {

  return (
    <LoadingContainer>
      <LoadingCircle></LoadingCircle>
    </LoadingContainer>
  )
}

export default Loading