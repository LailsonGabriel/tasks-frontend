import { useContext, useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import MyContext from '../../Context/MyContext';
import 'react-datepicker/dist/react-datepicker.css';
import InputHandler from '../../utils/InputHandler';
import { createTask } from '../../services/tasks';
import moment from 'moment';
import CreateAndEdit from './CreateAndEdit';

function NewTaskModal() {
  const { hide, rodal, events, setEvents, user } = useContext(MyContext);
  const defaultState = {
    description: '',
    dateAndHour: new Date(),
    duration: '',
    title: '',
  };
  const [newTask, setNewTask] = useState(defaultState);

  const handleNewTask = (e) => {
    InputHandler(e, newTask, setNewTask);
  };

  const submitNewTask = async () => {
    let momentObj = moment(new Date(newTask.dateAndHour));
    const data = await createTask({
      ...newTask,
      idUser: user.id,
      dateAndHour: momentObj._d,
    });
    setEvents([...events, data]);
    setNewTask(defaultState);
    hide();
  };

  return (
    <Rodal visible={rodal} onClose={hide} width={550} height={400}>
      <CreateAndEdit
        handleTask={handleNewTask}
        submitNewTask={submitNewTask}
        newTask={newTask}
        setNewTask={setNewTask}
        hide={hide}
      />
    </Rodal>
  );
}

export default NewTaskModal;
