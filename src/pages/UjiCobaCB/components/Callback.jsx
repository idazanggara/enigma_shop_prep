import { useState } from 'react'

export default function Callback({ getColor }) {
  const [activeColor, setActiveColor] = useState("green")

  const handleChange = (e) => {
    const { value } = e.target
    console.log("🚀 ~ handleChange ~ value:", value)

    setActiveColor(value)
    getColor(value)
  }

  return (
    <input
      type='text'
      id='input'
      aria-label='input'
      onChange={handleChange}
      value={activeColor}

    />
  )
}