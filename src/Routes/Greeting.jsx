import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greeting/greetingSlice.js';

const isObjEmpty = (object) => Object.keys(object).length === 0 && object.constructor === Object;

export default function Greeting() {
  const dispatch = useDispatch();
  const { greeting, status, error } = useSelector((store) => store.greeting);

  useEffect(() => {
    if (status !== 'idle') return;
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  let display = 'Loading...';
  switch (status) {
    case 'fulfilled':
      if (isObjEmpty(greeting)) {
        display = 'There are no greetings in the database yet!';
        break;
      }
      display = greeting?.message;
      break;
    case 'rejected':
      display = error;
      break;
    default:
      display = '';
  }

  return <h1>{display}</h1>;
}
