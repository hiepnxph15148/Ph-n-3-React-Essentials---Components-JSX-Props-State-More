import React from 'react'


const Tab = ({children , button,ButtonsContainer = 'menu'}) => {
  return (
    <>
        <ButtonsContainer>{button}</ButtonsContainer>
        {children}
    </>
  )
}

export default Tab