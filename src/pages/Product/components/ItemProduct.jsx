import { Component } from 'react'
import { IconHeart } from '@tabler/icons-react'


class ItemProduct extends Component {
  render() {
    return (
      <>
        <div className="card shadow-sm h-100">
          <img
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-10906782/beng-beng_beng-beng-coklat-wafer-20g_full01.jpg"
            alt="product-image"
            className="card-img-top h-50 object-fit-contain"
          />
          <div className="card-body">
            <h5 className="card-title fw-light">Beng Beng</h5>
            <p className="fw-bold">Rp. 30.000</p>
          </div>
          {/* .d-flex.justify-content-between.p-2>.d-flex.align-items-center.justify-content-start.column-gap-4>button.d-flex.align-items-center.column-gap-2.btn.btn-primary{Tambah Keranjang}+button.btn.btn-primary{-}+span{0}+button.btn.btn-primary{+}^button.btn.btn-link>i{IconHeart} */}
          <div className="d-flex justify-content-between p-2">
            <div className="d-flex align-items-center justify-content-start column-gap-4">
              <button className="d-flex align-items-center column-gap-2 btn btn-primary">
                Tambah Keranjang
              </button>
              <button className="btn btn-primary">
                -
              </button>
              <span>0</span>
              <button className="btn btn-primary">
                +
              </button>
            </div>
            <button className="btn btn-link">
              <i><IconHeart /></i>
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default ItemProduct
