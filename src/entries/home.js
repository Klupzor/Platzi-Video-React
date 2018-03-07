import React from 'react'
import {render} from 'react-dom'
import data from '../api.json'
import Home from '../pages/containers/home';


const app = document.getElementById('app')
// ReactDOM.render(que voy a renderizar, donde lo hare)
// const ms = <h1>hola mundo!!</h1>
render(<Home data= {data}/>, app)
