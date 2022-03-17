import { useEffect } from 'react';
import { getTasks } from '../services/tasks';

function UseEvents(setState) {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfos'));
    const response = async () => {
      const tasks = await getTasks(user.id);
      setState(tasks);
    };
    response();
  }, [setState]);
}

export default UseEvents;
