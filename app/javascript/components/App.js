import React from 'react';
import { createRoutesFromElements, Route, Router } from 'react-router-dom';
import Greeting from './greeting';

const router = createRoutesFromElements(
    <Route path='/' element={<Greeting />} />
)

const App = () => {
  return (
    <Router routes={router} />
  );
}

export default App