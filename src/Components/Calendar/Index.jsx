import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import { messages } from './configMessages';
import NewTaskModal from '../NewTask/Index';
import { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import UseEvents from '../../Hooks/useEvents';

function CalendarComponent() {
  const { show, events, setEvents } = useContext(MyContext);
  const localizer = momentLocalizer(moment);
  const handleSelected = (event) => {
    console.log(event);
  };

  UseEvents(setEvents);

  return (
    <div>
      <button type='button' onClick={show}>
        Nova Tarefa
      </button>
      <NewTaskModal />
      <Calendar
        onSelectEvent={handleSelected}
        localizer={localizer}
        events={events}
        startAccessor='dateAndHour'
        endAccessor='dateAndHour'
        style={{ height: 500, margin: '50px' }}
        messages={messages}
      />
    </div>
  );
}

export default CalendarComponent;
