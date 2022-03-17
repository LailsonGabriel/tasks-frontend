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
    const { data } = await api.post(`/tasks`, { ...body });
    return data;
  } catch (err) {
    return { err };
  }
};

const updateTask = async (id, body) => {
  try {
    const { data } = await api.put(`/tasks/${id}`, { ...body });
    return data;
  } catch (err) {
    return { err };
  }
};

const deleteTask = async (id) => {
  try {
    const { data } = await api.delete(`/tasks/${id}`);
    return data;
  } catch (err) {
    return { err };
  }
};

export { getTasks, createTask, updateTask, deleteTask };
