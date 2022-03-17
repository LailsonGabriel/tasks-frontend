import api from './api';

const getTasks = async (id) => {
  try {
    const data = await api.get(`/user/${id}`);
    return data;
  } catch (err) {
    return { err };
  }
};

export { getTasks };
