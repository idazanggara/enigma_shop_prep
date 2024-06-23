import React from 'react'
// eslint-disable-next-line no-unused-vars
import Product from './pages/Product/Product'
import UjiCobaCB from './pages/UjiCobaCB/UjiCobaCB'


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
        {/* <Product /> */}
        <UjiCobaCB />
      </>
    )
  }
}

export default AppTest
