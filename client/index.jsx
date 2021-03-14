import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/app'
import AutoScroll from './components/UI/autoScroll'
import GlobalStyles from './global-styles'

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <AutoScroll>
    	<App />
    </AutoScroll>
  </Router>,
  document.querySelector('#root')
)
