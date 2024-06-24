import { IconLoader } from '@tabler/icons-react'
import { Component } from 'react'
import SubLifecycle from './SubLifecycle'

class Lifecycle extends Component {
  state = {
    todo: 'Rebahan',
    isLoading: false,
    isShow: false,
  }

  // lebih cocok pada saat pemanggilan API
  componentDidMount() {
    console.log("Called from componentDidMount")
    // ini kita set, kita buat jadi loading halamnya
    this.setState({ isLoading: true })
    this.getTodo()
      .then((todoParam) => {
        this.setState({ todo: todoParam, isLoading: false })
        // this.setState({ isLoading: false })
      })

  }

  // seakan-akan simulasi API lah si getTodos ini
  getTodo = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Makan')
      }, 3000)
    })
  }
  // render() {
  // console.log("Called from render");
  //   return (
  //     <div>
  //       <h1>Todos {this.state.todo}</h1>
  //     </div>
  //   )
  // }

  // render() {
  //   return (
  //     <div>
  //       <h1>{this.state.isLoading ? "Loading..." : "Todos " + this.state.todo}</h1>
  //     </div>
  //   )
  // }

  handleChangeValue = todoParam => {
    this.setState({ todo: todoParam })
  }

  render() {
    console.log("Called from render")
    if (this.state.isLoading) {
      return (
        <div className="spinner-container">
          <IconLoader size={48} stroke={1.5} style={{
            animation: 'spin 2s linear infinite'
          }} />
        </div>
      )
    }
    return (
      <div>
        <h1>{"Todos " + this.state.todo}</h1>

        {/* Button untuk menampilkan dan menghilangkan component SubLifecycle, seperti tombol saklar, agar bisa simulasi willUnmount*/}
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>Show Child Component</button>
        {/* <SubLifecycle changeValue={this.handleChangeValue} /> */}
        {/*
            && Short circuit yang digunakan untuk mempersingkat kondisi
            || Short circuit digunakan untuk memberikan default value
        */}
        {/* ketika truthy maka tampilkan ini, atau conditional rendering*/}
        {this.state.isShow && <SubLifecycle changeValue={this.handleChangeValue} />}
        {/* {null || "Ini ada sebelah kanan"} */}
        {/* {"Ini ada sebelah kiri" || "Ini ada sebelah kanan"} */}
        {/* Default valuenya sebelah kanan, kalau kirinya bukan truthy */}


      </div>
    )
  }
}

export default Lifecycle
