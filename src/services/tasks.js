import api from './api';

const getTasks = async (id) => {
  try {
    const { data } = await api.get(`/tasks/user/${String(id)}`);
    return data;
  } catch (err) {
    return { err };
  }
};

const createTask = async (body) => {
  try {
    const { data } = await api.post(`/tasks`);
    return data;
  } catch (err) {
    return { err };
  }
};

export { getTasks, createTask };
