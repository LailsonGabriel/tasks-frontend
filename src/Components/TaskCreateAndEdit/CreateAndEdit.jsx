import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

function CreateAndEdit({
  handleTask,
  newTask,
  setNewTask,
  submitNewTask,
  hide,
  edit,
}) {
  return (
    <div className='w-75 p-3 mx-auto'>
      <div className='d-flex flex-md-column justify-content-center align-items-center mt-4'>
        <Form.Control
          type='text'
          name='title'
          className='mt-2'
          placeholder='Título da Task'
          onChange={handleTask}
          value={newTask.title}
        />
        <Form.Control
          type='text'
          className='mt-2 mb-2'
          name='description'
          placeholder='Descrição'
          onChange={handleTask}
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
          onChange={handleTask}
          placeholder='Duração em min | Ex: 60'
          value={newTask.duration}
        />
        <div className='d-flex flex-md-row justify-content-center mt-3'>
          <Button variant='success' onClick={submitNewTask}>
            {!edit ? 'Criar Tarefa' : 'Editar Tarefa'}
          </Button>
          <Button variant='danger' onClick={hide}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateAndEdit;
