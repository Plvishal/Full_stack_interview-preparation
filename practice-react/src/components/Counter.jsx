import { useCounter } from '../context/CounterContext';

function Counter() {
  const { setCount } = useCounter();
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment </button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
}

export default Counter;
