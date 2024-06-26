/* eslint-disable no-unused-vars */
import React from 'react'
import Home from '@/pages/Home/Home'
import Login from './pages/Authentication/Login'
import Register from './pages/Authentication/Register'
import Product from './pages/Product/Product'
import Lifecycle from './pages/Lifecycle/Lifecycle'
import Header from './shared/components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Sidebar from '@/shared/components/Sidebar/Sidebar'
import Todo from './pages/Todo/Todo'


class App extends React.Component {
  state = {
    page: <Todo />,
  }

  navigateTo = (page) => {
    this.setState({ page })
  }
  render() {
    return (
      <>
        <div className="d-flex">
          <Sidebar navigateTo={this.navigateTo} />
          <main className="w-100 flex-grow-1">
            <Header />
            {this.state.page}
          </main>
        </div>

        {/* <button onClick={() => this.setState({ page: <Home /> })}>Show Home</button>
        <button onClick={() => this.setState({ page: <Lifecycle /> })}>Show Lifecycle</button>
        <button onClick={() => this.setState({ page: <Product /> })}>Show Product</button>
        <button onClick={() => this.setState({ page: <Login /> })}>Show Login</button>
        <button onClick={() => this.setState({ page: <Register /> })}>Show Register</button>
        {this.state.page} */}
        {/* <Lifecycle />
        <Product />
        <Home />
        <Login />
        <Register /> */}
      </>
    )
  }
}









// eslint-disable-next-line no-unused-vars
class AppOne extends React.Component {
  // method render ini dari class React.Conponent
  render() {
    const styleH1 = {
      color: 'red',
      // background-color: 'black',
      backgroundColor: 'black',
    }
    return (
      <>
        {/* <h1 style="color:red;">Hallo Inline CSS</h1> */}
        <h2 style={styleH1}>Hallo Jakarta</h2>
        <h2 style={{
          color: 'blue',
          backgroundColor: 'green',
        }}>Hallo 16</h2>
        <Hello />
        <Carousel />
        <Toasts />
        <DropDown />
      </>
    )
  }
}

function Hello() {
  return (
    <>
      <h1>Hello Jkt</h1>
      <h2>Hello Batch 16</h2>
    </>
  )
}

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}



function Toasts() {
  // useEffect(() => {
  //   const toastEl = document.getElementById('liveToast')
  //   if (toastEl) {
  //     // eslint-disable-next-line no-undef
  //     const toast = new bootstrap.Toast(toastEl) // Inisialisasi toast
  //     const toastBtn = document.getElementById('liveToastBtn')
  //     toastBtn.addEventListener('click', () => toast.show()) // Menampilkan toast saat tombol diklik
  //   }
  // }, [])

  // Fungsi untuk menampilkan toast
  const showToast = () => {
    const toastEl = document.getElementById('liveToast')
    // eslint-disable-next-line no-undef
    const toast = new bootstrap.Toast(toastEl) // Inisialisasi toast
    toast.show() // Menampilkan toast
  }
  return (
    <>
      <button type="button" className="btn btn-primary" id="liveToastBtn" onClick={showToast} >Show live toast</button>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded me-2 w-25 h-25" alt="Toasts" />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </>
  )
}

function DropDown() {
  return (
    <>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </>
  )
}



export default App
