import React from 'react'
import Product from './pages/Product/Product'


class AppTest extends React.Component {
  // react lifecycle
  constructor(props) {
    super(props)
    console.log("Called from Constructor")
  }

  // ini sering digunakan pada saat fetch data menggunakan API
  componentDidMount() {
    console.log("Called from componentDidMount")
  }

  // ini ketika ada perubahan state
  componentDidUpdate() {
    console.log("Called from componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("Called from componentWillUnmount")
  }


  render() {
    console.log("Called from render")
    return (
      <>
        <Product />
      </>
    )
  }
}

export default AppTest
