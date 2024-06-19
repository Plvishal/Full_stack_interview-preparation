import './App.css';
import Counter from './components/Counter';
import { useCounter } from './context/CounterContext';
import Cart from './components/Cart';
import { useCart } from './context/Cart';

function App() {
  const { count } = useCounter();
  const { items } = useCart();
  console.log(items);
  return (
    <>
      <h1> {count}</h1>
      <h1>Total Cart Items :{items.length}</h1>
      <Counter />
      <Counter />
      <Counter />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <Cart title="Mango" price={30} />
        <Cart title="Tomato" price={320} />
        <Cart title="Onion" price={50} />
        <Cart title="Potato" price={40} />
        <Cart title="Peanut" price={90} />
        <Cart title="Banana" price={40} />
        <Cart title="Grapes" price={50} />
      </div>
    </>
  );
}

export default App;
