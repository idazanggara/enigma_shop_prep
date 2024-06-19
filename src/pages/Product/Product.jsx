import { Component } from 'react'
import ListProduct from './components/ListProduct'
// import Navbar from '../Home/components/Navbar'
// '@/pages' ini artinya seperti di dibawah
// 'src/pages'
// '@/' === 'src/
// import Navbar from '@/pages/Home/components/Navbar' // ini sama seperti di line 3
class Product extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <ListProduct />
      </>
    )
  }
}

export default Product
