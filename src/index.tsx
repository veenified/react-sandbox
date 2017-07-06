import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, Store as ReduxStore } from 'redux'

import { reducers, Store } from './reducers'
import { incrementCounter, resetCounter } from './actions'
import { Hello } from './components/Hello'

const store: ReduxStore<Store.All> = createStore(reducers)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCounter(1)) // { counter: { value: 1 } }
store.dispatch(incrementCounter(1)) // { counter: { value: 2 } }
store.dispatch(incrementCounter(1)) // { counter: { value: 3 } }
store.dispatch(resetCounter())      // { counter: { value: 0 } }
store.dispatch(incrementCounter(1)) // { counter: { value: 1 } }


ReactDOM.render(
    <Hello compiler='TypeScript' framework='React' />,
    document.getElementById('root'),
)