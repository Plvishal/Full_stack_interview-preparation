import './App.css';
import { useCounterContext } from './context/Counter';

function App() {
  const { count } = useCounterContext();
  return (
    <>
      <h1>Hello : {count}</h1>
    </>
  );
}

export default App;
