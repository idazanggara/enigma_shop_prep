import { Component } from 'react'

class SubLifecycle extends Component {
  // componentWillUnmount dipanggil pada saat component hilang dari DOM
  componentWillUnmount() {
    console.log("Called from componentWillUnmount")
    // eslint-disable-next-line react/prop-types
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
