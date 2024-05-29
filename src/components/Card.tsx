import React from 'react'

const Card = ({children}: {children: React.ReactNode}) => {

  const cardStyles = {
    border: 'thin solid red',
    margin: '1rem auto',
    padding: '1rem'
  }

  return (
    <div style={cardStyles}>{children}</div>
  )
}

export default Card