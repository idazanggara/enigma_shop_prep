/* eslint-disable react/prop-types */
import { Component } from 'react'
export default function withLoading(WrappedComponent) {
  return class HOC extends Component {
    state = {
      isLoading: true,
    };

    showLoading = () => {
      this.setState({
        isLoading: true,
      })
    };

    hideLoading = () => {
      this.setState({
        isLoading: false,
      })
    };
    render() {
      return (
        // WrappedComponent ini childnya
        // jadi anggaplah WrappedComponent ini si Todonya
        <>
          <WrappedComponent
            {...this.props} // kita tranfer propsnya parent ke chidnya
            isLoading={this.state.isLoading}
            showLoading={this.showLoading}
            hideLoading={this.hideLoading}
          />
          {/* {this.props.test} */}
        </>
      )
    }
  }
}

// function withLoading2(WrappedComponent) {
//     return function HOC(props) {
//         const [isLoading, setLoading] = useState(false);

//         const handleShowLoading = () => {
//             setLoading(true)
//           };

//           const handleHideLoading = () => {
//             setLoading(false);
//           };

//           <WrappedComponent
//           {...props}
//           isLoading={isLoading}
//           showLoading={handleShowLoading}
//           hideLoading={handleHideLoading}
//         />
//     }
// }

// function Tes() {
//     // hooks
//     const [state, setState] = useState();

//     // componentDidMount, componentDidUpdate, componentWillUnmount
//     useEffect();

//     return <h1></h1>
// }
