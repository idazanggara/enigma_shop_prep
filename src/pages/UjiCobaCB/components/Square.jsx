import { useState } from "react"
import Callback from "./Callback"

// parent
export default function Square() {
  const [UIcolor, setUIcolor] = useState(null)
  const test = useState(null)
  console.log("🚀 ~ Square ~ useState:", test)


  // callback funtion
  const getColorFunc = (color) => {
    setUIcolor(color)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'green'
    }}>
      <div
        className="app_color_container"
        style={{
          background: `${UIcolor}`,
          height: "100px",
          width: "100px",
          // backgroundColor: 'lightblue'
        }}
      ></div>
      <Callback getColor={getColorFunc} />
    </div>
  )
}