import { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

class AutoScroll extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate(prevProps) {
    // console.log('autoscroll')
    // const { pathname } = this.props.location
    // console.log(pathname)
    // console.log(prevProps)
    // if (pathname !== prevProps.location.pathname) {
    //   console.log('need to autoscroll')
    //   window.scrollTo(0, 0)
    // }
  }

  render() {
    const { children } = this.props
    return children
  }
}

export default withRouter(AutoScroll)
