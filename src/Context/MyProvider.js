import { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [rodal, setRodal] = useState(false);

  function show() {
    setRodal(true);
  }

  function hide() {
    setRodal(false);
  }

  const reveal = { show, hide, rodal, events, setEvents };

  return <MyContext.Provider value={reveal}>{children}</MyContext.Provider>;
}

export default MyProvider;
