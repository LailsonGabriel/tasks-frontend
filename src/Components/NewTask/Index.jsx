import { useContext } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import MyContext from '../../Context/MyContext';
import InputReusable from '../Input/Index';

function NewTaskModal() {
  const { hide, rodal } = useContext(MyContext);

  return (
    <Rodal visible={rodal} onClose={hide}>
      <div>
        <InputReusable type='text' />
      </div>
    </Rodal>
  );
}

export default NewTaskModal;
