import CalendarComponent from '../../Components/Calendar/Index';
import { logout } from '../../services/auth';
import { Button } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
      <Button type='button' variant='danger' onClick={async () => logout()}>
        Sair
      </Button>
      <CalendarComponent />
    </div>
  );
}

export default HomePage;
