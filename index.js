import React from 'react'
import {render} from 'react-dom'
import data from './src/api.json'
import Playlist from './src/playlist/components/playlist';


const app = document.getElementById('app')
// ReactDOM.render(que voy a renderizar, donde lo hare)
// const ms = <h1>hola mundo!!</h1>
render(<Playlist data={data} />, app)
