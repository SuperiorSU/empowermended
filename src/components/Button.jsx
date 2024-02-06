import React from 'react'

const Button = (props) => {
    const name = props.name
    const style = props.style
  return (
    <button className={`border border-black rounded-[5px] hover:bg-black hover:text-white py-1 px-5 ${style}`} >{name}</button>
  )
}

export default Button