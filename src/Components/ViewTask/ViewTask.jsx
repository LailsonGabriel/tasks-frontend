import { Button } from 'react-bootstrap';

function ViewTask({ task, confirmDeleteTask, editTask }) {
  const childDivs =
    'd-flex flex-column justify-content-center d-flex align-items-center';

  return (
    <div className='w-100 d-flex flex-column justify-content-center'>
      <div className={childDivs}>
        <h3>Título: </h3>
        <h4>{task.title}</h4>
      </div>
      <div className={childDivs}>
        <h3>Descrição: </h3>
        <h4>{task.description}</h4>
      </div>
      <div className={childDivs}>
        <h3>Duração: </h3>
        <h4>{task.duration}</h4>
      </div>
      <div className={childDivs}>
        <h3>Finalizado: </h3>
        <h4>{task.resolved ? 'Sim' : 'Não'}</h4>
      </div>
      <div className='d-flex justify-content-center'>
        <Button variant='danger' onClick={confirmDeleteTask}>
          Excluir
        </Button>
        <Button variant='info' onClick={editTask}>
          Editar
        </Button>
      </div>
    </div>
  );
}

export default ViewTask;
