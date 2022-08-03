
import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Todo from './Components/Todo'

const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
<Route path='/' element={<Todo/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App