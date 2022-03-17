import CalendarComponent from '../../Components/Calendar/Index';
import { logout } from '../../services/auth';

function HomePage() {
  return (
    <div>
      <button type='button' onClick={async () => logout()}>
        Sair
      </button>
      <CalendarComponent />
    </div>
  );
}

export default HomePage;
