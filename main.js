import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import reducers from './reducers/index.js'

let store = createStore(reducers)
let rootElement = document.getElementById('app')

render(
   <Provider store = {store}>
      <App />
   </Provider>,
	
   rootElement
)
