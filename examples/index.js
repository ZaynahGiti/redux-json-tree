import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import {data} from './data'
import {simplify} from 'simplifr'

const store = configureStore(simplify(data))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)




