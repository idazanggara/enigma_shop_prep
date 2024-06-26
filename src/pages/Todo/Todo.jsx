import { Component } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const obj = {
  id: 1,
  task: "Belanja",
  "description data": "Belanja kesukaanmu",
}

console.log(obj["id"])
console.log(obj["description data"])

class Todo extends Component {
  state = {
    form: {
      id: "",
      task: "",
      description: "",
      status: false,
    },
    todos: [],
    errors: {
      task: "",
      description: "",
    },
    message: ""
  };
  handleChangeTask = (event) => {
    this.setState({
      form: {
        ...this.state.form, // inget ini nimpa, jadi harus di spread data lamanya. kalau tanpa ini jadi kereplace
        task: event.target.value
      }
    })
  }
  handleSubmit = (event) => {
    event.preventDefault() // tanpa ini kerefresh, jadi enggak SPA

    let errors = {}

    if (this.state.form.task === "") {
      errors.task = "Tugas wajib di isi"
    }
    if (this.state.form.description === "") {
      errors.description = "Deskripsi wajib di isi"
    }

    this.setState({
      errors: errors,
    })
    // error
    if (Object.keys(errors).length > 0) return

    const todos = this.state.todos

    // console.log(this.state.form, "check data formnya") // kalau buat data baru ada idnya enggak? kalau edit ada idnya enggak?
    // kalau ada bisa kita validasi kan ya
    if (this.state.form.id) {
      // TODO: Update
      const index = todos.findIndex((todo) => todo.id === this.state.form.id) // cari index yg idnya sesuai
      const todo = {
        ...this.state.form
      }
      todos.splice(index, 1, todo)
      this.setState({ todos: todos, message: "Berhasil edit Todo!" })
    } else {
      // TODO: Create
      const todo = {
        ...this.state.form,
        id: new Date().getMilliseconds().toString()
      }
      todos.push(todo)
      this.setState({
        todos: todos,
        message: "Berhasil tambah Todo!"
      })
    }

    this.clearForm()
  }
  handleChangeDescription = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        description: event.target.value
      }
    })
  }

  handleChangeStatus = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        status: event.target.checked
      }
    })
  }

  // ini untuk text
  handleChange = (event) => {
    const { name, value } = event.target


    this.setState({
      form: {
        ...this.state.form, // inget ini nimpa, jadi harus di spread data lamanya. kalau tanpa ini jadi kereplace
        [name]: value, // keynya dinamis
      }
    })
  }

  // ini untuk delete
  handleDelete = (id) => {
    if (!confirm(`Apakah yakin ingin menghapus todo ini ${id}?`)) return
    const todos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({ todos: todos })
    // this.setState({isLoading : true})
    // this.props.handleShowLoading()
    // setTimeout(() => {
    //   const todos = this.state.todos.filter((todo) => todo.id !== id)
    //   this.setState({ todos: todos })
    //   // this.props.handleHide()
    // }, 2000)
  };
  clearForm = () => {
    this.setState({
      form: {
        id: "",
        task: "",
        description: "",
        status: false,
      },
      // message: ""
    },
      () => {
        setTimeout(() => {
          this.setState({
            message: ""
          })
        }, 2000)
      }
    )
  };


  //1. ketika tombol edit di click, form di is   i dengan data existing
  //2. onsubmit jika ada id di state.form maka update, jika tidak ada maka save

  // UPDATE m_todo SET task = 'Makan' description = ''  WHERE id = ?

  // pertama kita kasih inisialisasi nilai
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        todos: [
          {
            id: "1",
            task: "Makan",
            description: "Makan Lele",
            status: true,
          },
        ]
      })
    }, 3000)
  }

  handleSelectedTodo = (todo) => {
    this.setState({
      form: todo
    })

  }
  render() {
    console.log("🚀 ~ Todo ~ todos:", this.state.todos)

    return (
      <div className="container-fluid pt-4 px-4 position-relative">
        {/* Toasts */}
        {/* untuk menampilkan di tambahkan show           */}
        <div className={`${this.state.message && "show"} toast position-absolute top-0 end-0 me-4 mt-4 align-items-center text-bg-primary border-0`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              {this.state.message}
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
        {/* end toasts */}
        <h2>Todo</h2>
        {/* Form */}
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleChangeStatus={this.handleChangeStatus}
          clearForm={this.clearForm}
          form={this.state.form}
          errors={this.state.errors}
        />

        {/* List */}
        <TodoList
          handleSelectedTodo={this.handleSelectedTodo}
          handleDelete={this.handleDelete}
          todos={this.state.todos}
        />

      </div>
    )
  }
}

export default Todo