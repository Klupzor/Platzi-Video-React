import React from 'react'
import {render} from 'react-dom'
import Media from './src/playlist/components/media'

const app = document.getElementById('app')
// ReactDOM.render(que voy a renderizar, donde lo hare)
// const ms = <h1>hola mundo!!</h1>
render(<Media />, app)
