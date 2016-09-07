import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import store from './store'
import CounterContainer from './CounterContainer'

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
)
