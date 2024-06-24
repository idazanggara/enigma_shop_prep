import { Component } from 'react'

class SubLifecycle extends Component {
  // componentWillUnmount dipanggil pada saat component hilang dari DOM
  componentWillUnmount() {
    console.log("Called from componentWillUnmount")
    this.props.changeValue('Ngoding')

  }
  render() {
    return (
      <div>
        <h1>Ini dari Child Component</h1>
      </div>
    )
  }
}

export default SubLifecycle
