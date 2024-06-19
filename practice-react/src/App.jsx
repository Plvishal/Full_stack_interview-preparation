import './App.css';
import Counter from './components/Counter';
import { useCounter } from './context/CounterContext';

function App() {
  const { count } = useCounter();
  return (
    <>
      <h1> {count}</h1>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
