import { useContext, useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import MyContext from '../../Context/MyContext';
import InputReusable from '../Input/Index';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputHandler from '../../utils/InputHandler';
import { Button, Form } from 'react-bootstrap';

function NewTaskModal() {
  const [newTask, setNewTask] = useState({
    resolved: '',
    description: '',
    dateAndHour: new Date(),
    duration: '',
    title: '',
  });
  const { hide, rodal } = useContext(MyContext);

  const handleNewTask = (e) => {
    InputHandler(e, newTask, setNewTask);
  };

  return (
    <Rodal visible={rodal} onClose={hide} width={550} height={400}>
      <div className='w-75 p-3 mx-auto'>
        <div className='d-flex flex-md-column justify-content-center align-items-center mt-4'>
          <Form.Control
            type='text'
            name='title'
            className='mt-2'
            placeholder='Título da Task'
            onChange={handleNewTask}
            value={newTask.title}
          />
          <Form.Control
            type='text'
            className='mt-2 mb-2'
            name='description'
            placeholder='Descrição'
            value={newTask.description}
          />
          <div className='d-flex justify-content-center align-items-center'>
            <span>Data:</span>
            <DatePicker
              selected={newTask.dateAndHour}
              onChange={(date) => setNewTask({ ...newTask, dateAndHour: date })}
            />
          </div>
          <Form.Control
            type='text'
            name='duration'
            className='mt-2'
            placeholder='Duração em min | Ex: 60'
            value={newTask.duration}
          />
          <div className='d-flex flex-md-row justify-content-center mt-3'>
            <Button variant='success'>Criar Tarefa</Button>
            <Button variant='danger' onClick={hide}>
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </Rodal>
  );
}

export default NewTaskModal;
