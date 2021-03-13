import React, { Component } from 'react'
import styled from 'styled-components'

class ScrollToTop extends Component {
	state = {
	  isVisible: false
	}

	componentDidMount = () => {
	  const scroll = this
	  document.addEventListener('scroll', () => {
	    scroll.toggleVisibility()
	  })
	}

	toggleVisibility = () => {
	  if (window.pageYOffset > 300) {
	    this.setState({ isVisible: true })
	  } else {
	    this.setState({ isVisible: false })
	  }
	}

	scrollToTop = () => {
	  window.scrollTo({
	    top: 0,
	    behavior: 'smooth'
	  })
	}

	render() {
	  const { isVisible } = this.state
	  return (
	    <div>
	      {
	        isVisible && (
	          <Arrow className='scroll-to-top' onClick={() => this.scrollToTop()}>
	            <div className='top' />
	            <div className='post' />
	          </Arrow>
	        )
	      }
	    </div>
	  )
	}
}

export default ScrollToTop

const Arrow = styled.div`
	width: 100%;
	height: 100%;
	border: 7px double var(--teal-5);
	border-radius: 12px;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	.top {
		width: 0;
		height: 0;
		border-left: 12px solid transparent;
		border-right: 12px solid transparent;
		border-bottom: 12px solid var(--teal-4);
	}
	.post {
		width: 10px;
		height: 25px;
		background-color: var(--teal-4);
	}
`
