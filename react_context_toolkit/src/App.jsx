import './App.css';
import { useUser } from './context/UserContext';

function App() {
  const { user, login, logout } = useUser();
  const handleLogin = () => {
    login('vishalpal1501@gmail.com', 'vishal123');
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      {user ? (
        <div>
          <h1> Welcome to the : {user.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please Login</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </>
  );
}

export default App;
