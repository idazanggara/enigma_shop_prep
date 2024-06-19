import { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="container">
          <a className="navbar-brand fs-3 text-white" href="#">
            <i><b>Enigma</b> Shop</i>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5 column-gap-4 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tentang-kami">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimoni">
                  Testimoni
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kontak-kami">
                  Kontak kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
