import api from './api';

const getTasks = async (id) => {
  try {
    const { data } = await api.get(`/tasks/user/${String(id)}`);
    return data;
  } catch (err) {
    return { err };
  }
};

export { getTasks };
