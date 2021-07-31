import React from 'react'

function Info({ title, description, image }) {
  return (
    <>
      <img width={120} src={image} alt="box" />
      <h4>{title}</h4>
      <p>{description}</p>
    </>      
  )
}

export default Info;