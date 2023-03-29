import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const greet = useSelector(selectGreeting);


  return (
    <div>greeting</div>
  )
}

export default Greeting