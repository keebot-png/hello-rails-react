import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGreeting, selectError, selectStatus, getGreeting } from '../redux/greeting/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch()
  const greet = useSelector(selectGreeting);
  const greetStatus = useSelector(selectStatus);
  const greetError = useSelector(selectError);

  const handleClick = () => {
    dispatch(getGreeting)
  }

  if(greetError){
    return <div>Error: {greetError.message}</div>
  }
  
  useEffect(() => {
    if(greetStatus === 'idle'){
      dispatch(getGreeting());
    }
  }, [greetStatus, dispatch]);
  
  console.log(greet);

  return (
  <div>
    <h2>{greet.data}</h2>
    <button onClick={handleClick}>Change</button>
  </div>
  )
}

export default Greeting;