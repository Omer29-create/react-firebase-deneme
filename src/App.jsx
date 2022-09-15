import React from 'react';
import Todo from './components/Todo';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
