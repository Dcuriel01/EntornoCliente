/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './componentes/estilos.css'
import Cabecera from './componentes/Cabecera'
import Menu from './componentes/Menu'
import Pie from './componentes/Pie'

function App() {

  return (
    <>
    <Cabecera></Cabecera>
    <Menu></Menu>
    <Pie></Pie>
    </>
  )
}

export default App
