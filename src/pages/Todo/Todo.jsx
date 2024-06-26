import { IconRefresh } from '@tabler/icons-react'
import { IconTrash } from '@tabler/icons-react'
import { IconEdit } from '@tabler/icons-react'
import { IconDeviceFloppy } from '@tabler/icons-react'
import { Component } from 'react'

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
    }
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
      this.setState({ todos: todos })
    } else {
      // TODO: Create
      const todo = {
        ...this.state.form,
        id: new Date().getMilliseconds().toString()
      }
      todos.push(todo)
      this.setState({
        todos: todos
      })
    }

    this.clearForm()
    // event.target.reset()
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
    console.log("🚀 ~ Todo ~ checked:", event.target.checked)
    console.log("🚀 ~ Todo ~ name:-", event.target.name)

    this.setState({
      form: {
        ...this.state.form,
        status: event.target.checked
      }
    })
  }

  // ini untuk text
  handleChange = (event) => {
    // console.log("🚀 ~ Todo ~ value:", event.target.name)
    const { name, value } = event.target
    console.log("🚀 ~ Todo ~ value:", value)
    console.log("🚀 ~ Todo ~ name:", name)

    this.setState({
      form: {
        ...this.state.form, // inget ini nimpa, jadi harus di spread data lamanya. kalau tanpa ini jadi kereplace
        // task: event.target.value,
        // description: event.target.value
        [name]: value, // keynya dinamis
      }
    })
  }

  // ini untuk delete
  handleDelete = (id) => {
    if (!confirm(`Apakah yakin ingin menghapus todo ini ${id}?`)) return
    const todos = this.state.todos.filter((todo) => todo.id !== id)
    // ID yg dikirim 1
    // id yg dimiliki 1,2,3
    // maka yg berbeda adalah 2,3
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
    })
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
  render() {
    console.log("🚀 ~ Todo ~ todos:", this.state.todos)

    return (
      <div className="container-fluid pt-4 px-4">
        <h2>Todo</h2>
        {/* Form */}
        <form onSubmit={this.handleSubmit} className="shadow-sm p-4 rounded-2">
          <h3>Form Todo</h3>
          <div className="mb-3">
            <label htmlFor="task" className="form-label">Tugas</label>
            <input
              // onChange={this.handleChangeTask}
              onChange={this.handleChange}
              value={this.state.form.task}
              type="text" className={`form-control ${this.state.errors.task && "is-invalid"}`}
              id="task" placeholder="Tugas yg berat dan kita kesana dengan seorang anak" name="task"
            />
            {/* validasi */}
            <div
              id="validationServerUsernameFeedback"
              className="invalid-feedback"
            >
              Deskripsi wajib di isi!.
            </div>

          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Deskripsi</label>
            <textarea
              // onChange={this.handleChangeDescription}
              onChange={this.handleChange}
              value={this.state.form.description}

              className={`form-control ${this.state.errors.task && "is-invalid"}`}
              id="description" rows="3" name="description"
            >
            </textarea>
            {/* validasi */}
            <div
              id="validationServerUsernameFeedback"
              className="invalid-feedback"
            >
              Deskripsi wajib di isi!.
            </div>
          </div>
          <div className="form-check">
            <input
              onChange={this.handleChangeStatus}
              checked={this.state.form.status}
              className="form-check-input" type="checkbox" id="status" name='status' />
            <label className="form-check-label" htmlFor="status">
              Selesai
            </label>
          </div>
          <div className="d-flex gap-2 mt-4">
            <button type="submit" className="btn btn-primary"> <i><IconDeviceFloppy /></i> Submit</button>
            <button type="reset" className="btn btn-secondary" ><i><IconRefresh /></i> Reset</button>
          </div>
        </form>

        {/* List */}
        <div className="shadow-sm p-4 rounded-2 mt-4">
          <h3>List Todo</h3>
          <table className="table table-responsive">
            <thead className="text-center">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Tugas</th>
                <th scope="col">Deskripsi</th>
                <th scope="col">Selesai</th>
                <th scope="col">Aksi</th>

              </tr>
            </thead>
            <tbody className="text-center align-middle">
              {/* <tr>
                <th scope="row">0</th>
                <td>Makan</td>
                <td>Makan Kangkung</td>
                <td>
                  <span className="badge text-white text-bg-success">Selesai</span>
                </td>
                <td>
                  <div className="d-flex gap-2 d-flex justify-content-center">
                    <button
                      className="btn btn-primary"
                    >
                      <IconEdit size={22} />
                    </button>
                    <button
                      className="btn btn-danger text-white"
                    >
                      <IconTrash size={22} />
                    </button>
                  </div>
                </td>
              </tr> */}
              {
                this.state.todos.map((todo, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1} {todo.id}</th>
                      <td>{todo.task}</td>
                      <td>{todo.description}</td>
                      <td>
                        <span className={`badge text-white ${todo.status ? "text-bg-success" : "text-bg-danger"}`}>
                          {todo.status ? "Selesai" : "Belum Selesai"}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 d-flex justify-content-center">
                          <button
                            onClick={() => this.setState({ form: todo })}
                            className="btn btn-primary"
                          >
                            <IconEdit size={22} />
                          </button>
                          <button
                            // (event) -> this.handleDelete(event)
                            onClick={() => this.handleDelete(todo.id)}
                            className="btn btn-danger text-white"
                          >
                            <IconTrash size={22} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Todo