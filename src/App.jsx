import React from 'react'
import Counter from './components/counter'
import { Provider } from 'react-redux'
import store from './store/index.js'

export default function App() {
  return (
    <>
    <Provider store={ store } >
    <Counter/>
    </Provider>
    </>
  )
}
