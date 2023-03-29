import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Greeting from './greeting';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Greeting />} />
  </Route>
))

const App = () => {


  return (
    
    <div>App</div>
  )
}

export default App