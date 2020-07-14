import './styles.css'
import {rootReducer} from "./redux/rootReducer"
import {createStore} from "./createStore"
import {increment, decrement} from "./redux/actions"


const store = createStore(rootReducer, 0)

window.store = store

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})
asyncBtn.addEventListener('click', () => {
  setTimeout(() => {
    store.dispatch(increment())
  }, 2000)
})

store.subscribe(() => {
  counter.textContent = store.getState()
})

store.dispatch({type: 'INIT_APPLICATION'})

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})