import React from 'react'

interface TButton {
    name : string;
}

const Button: React.FC<TButton> = ({name}) => {
  return (
    <button className='px-4 py-2 rounded-md text-white' style={{
        backgroundColor: "#2C9CF0",
        fontWeight: 600
    }}>{name}</button>
  )
}

export default Button