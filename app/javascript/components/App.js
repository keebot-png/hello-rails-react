// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './greeting';

const App = () => (
  <Routes>
    <Route path="/" element={<Greeting />} />
  </Routes>
);

export default App;
