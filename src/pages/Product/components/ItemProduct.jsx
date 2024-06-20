import { Component } from 'react'
import { IconHeart, IconShoppingCart, IconHeartFilled } from '@tabler/icons-react'
import PropTypes from "prop-types"

export default class ItemProduct extends Component {
  // untuk props
  // constructor(props) {
  //   super(props)
  //   console.log("🚀 ~ ItemProduct ~ constructor ~ props:", props)
  // }
  // cara lama menggunakan state di class component
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 10
  //   }
  //   // di comment setelah arrow
  //   // this.handleDecrement = this.handleDecrement.bind(this)
  //   // this.handleIncrement = this.handleIncrement.bind(this)
  // }
  // cara baru menggunakan state di class component
  state = {
    count: 20,
    isSaved: false
  }
  // cara lama untuk ngiket, antara method handleDecrement ini dengan ItemProductnya
  // constructor(props) {
  //   super(props)
  //   this.handleDecrement = this.handleDecrement.bind(this)
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }
  //* cara lama error karena function memiliki this
  // handleDecrement() {
  //   console.log("🚀 ~ ItemProduct ~ handleDecrement ~ this:", this)
  //   //! validasi jika 0 stop decrement?
  //   // guard close, cari yg negative dulu
  //   if (this.state.count === 0) return
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  // }
  // handleIncrement() {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }
  //* ubah jadi arrow
  handleDecrement = () => {
    if (this.state.count === 0) return
    this.setState({
      count: this.state.count - 1
    })
  }
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleChangeSaved = () => {
    console.log("🚀 ~ ItemProduct ~ this.state.isSaved:", this.state.isSaved)
    this.setState({ isSaved: !this.state.isSaved }, () => {
      if (this.state.isSaved) {
        const callback = this.props.changeSavedCount
        // this.props.changeSavedCount(1)
        callback(1)
      } else {
        this.props.changeSavedCount(-1)
      }
    })
    // nilai awalnya itu akan false, karena sifatnya setState async
    // if (!this.state.isSaved) {
    //   this.props.changeSavedCount(1)
    // } else {
    //   this.props.changeSavedCount(-1)
    // }
  };


  render() {
    const { image, title, price } = this.props // udah ada property props bawaan dari component
    // console.log("🚀 ~ ItemProduct ~ render ~ this.props:", this.props)
    // console.log("🚀 ~ ItemProduct ~ render ~ this:", this)
    return (
      <>
        <div className="card shadow-sm h-100">
          <img
            // src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-10906782/beng-beng_beng-beng-coklat-wafer-20g_full01.jpg"
            src={image}
            alt="product-image"
            className="card-img-top h-50 object-fit-contain"
          />
          <div className="card-body">
            <h5 className="card-title fw-light">{title}</h5>
            <p className="fw-bold">Rp. {price}</p>
          </div>
          {/* .d-flex.justify-content-between.p-2>.d-flex.align-items-center.justify-content-start.column-gap-4>button.d-flex.align-items-center.column-gap-2.btn.btn-primary{Tambah Keranjang}+button.btn.btn-primary{-}+span{0}+button.btn.btn-primary{+}^button.btn.btn-link>i{IconHeart} */}
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex align-items-center justify-content-start column-gap-4">
              {this.state.count === 0 ? (
                <button
                  onClick={this.handleIncrement}
                  className="d-flex align-items-center column-gap-2 btn btn-primary"
                >
                  <IconShoppingCart /> Tambah Keranjang
                </button>
              ) : (
                <>
                  <button
                    onClick={this.handleDecrement}
                    className="btn btn-primary">
                    -
                  </button>
                  <span>{this.state.count === 20 ? 'Gokil' : this.state.count}</span>
                  <button
                    onClick={this.handleIncrement}
                    className="btn btn-primary">
                    +
                  </button>
                </>
              )}
            </div>
            <button onClick={this.handleChangeSaved} className="btn btn-link" >
              <i>{this.state.isSaved ? <IconHeartFilled /> : <IconHeart />}</i>
            </button>
          </div>
        </div>
      </>
    )
  }
}

ItemProduct.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // price: [PropTypes.number, PropTypes.string]
  changeSavedCount: PropTypes.func.isRequired,
}