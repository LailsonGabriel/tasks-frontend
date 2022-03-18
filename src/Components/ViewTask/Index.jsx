import { useContext, useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import MyContext from '../../Context/MyContext';
import { deleteTask, updateTask } from '../../services/tasks';
import CreateAndEdit from '../TaskCreateAndEdit/CreateAndEdit';
import InputHandler from '../../utils/InputHandler';
import ViewTask from './ViewTask';

function ViewTaskModal({ hide, visible, task, setView }) {
  const { events, setEvents, editedTask, setEditedTask } =
    useContext(MyContext);
  const [edit, setEdit] = useState(false);

  const confirmDeleteTask = async () => {
    await deleteTask(task.id);
    const newEvents = events.filter((event) => event.id !== task.id);
    setEvents(newEvents);
    setView(false);
  };

  const closeTask = () => {
    setEdit(false);
    hide();
  };

  const editTask = async () => {
    setEdit(true);
    setEditedTask(task);
  };

  const handleEditTask = (e) => {
    InputHandler(e, editedTask, setEditedTask);
  };

  const submitEditTask = async () => {
    const newTasks = events.filter((event) => event.id !== task.id);
    setEvents([...newTasks, editedTask]);
    await updateTask(task.id, editedTask);
    closeTask();
  };

  return (
    <Rodal visible={visible} onClose={closeTask} width={550} height={400}>
      {!edit ? (
        <ViewTask
          task={task}
          editTask={editTask}
          confirmDeleteTask={confirmDeleteTask}
        />
      ) : (
        <CreateAndEdit
          newTask={editedTask}
          setNewTask={setEditedTask}
          hide={closeTask}
          submitNewTask={submitEditTask}
          handleTask={handleEditTask}
          edit={true}
        />
      )}
    </Rodal>
  );
}

export default ViewTaskModal;
