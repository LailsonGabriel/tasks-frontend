import { useEffect, useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [rodal, setRodal] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem('userInfos'));
    if (getUser !== null) {
      setUser(getUser);
    }
  }, []);

  function show() {
    setRodal(true);
  }

  function hide() {
    setRodal(false);
  }

  const reveal = { show, hide, rodal, events, setEvents, user };

  return <MyContext.Provider value={reveal}>{children}</MyContext.Provider>;
}

export default MyProvider;
