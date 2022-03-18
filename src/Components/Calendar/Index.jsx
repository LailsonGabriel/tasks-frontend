import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'moment/locale/pt-br';
import { messages } from './configMessages';
import NewTaskModal from '../TaskCreateAndEdit/Index';
import { useContext, useState } from 'react';
import MyContext from '../../Context/MyContext';
import UseEvents from '../../Hooks/useEvents';
import { Button } from 'react-bootstrap';
import ViewTaskModal from '../ViewTask/Index';

function CalendarComponent() {
  const { show, events, setEvents } = useContext(MyContext);
  const [viewTask, setViewTask] = useState(false);
  const [taskCurrent, setTaskCurrent] = useState({});
  const localizer = momentLocalizer(moment);

  const handleSelected = (event) => {
    setViewTask(true);
    setTaskCurrent(event);
  };

  UseEvents(setEvents);

  const transformEvent = events.map((event) => {
    return { ...event, dateAndHour: new Date(event.dateAndHour) };
  });

  return (
    <div>
      <Button type='button' onClick={show}>
        Nova Tarefa
      </Button>
      <NewTaskModal />
      <ViewTaskModal
        task={taskCurrent}
        visible={viewTask}
        setView={setViewTask}
        hide={() => setViewTask(false)}
      />
      <Calendar
        onSelectEvent={handleSelected}
        localizer={localizer}
        events={transformEvent}
        startAccessor='dateAndHour'
        endAccessor='dateAndHour'
        style={{ height: 500, margin: '50px' }}
        messages={messages}
      />
    </div>
  );
}

export default CalendarComponent;
