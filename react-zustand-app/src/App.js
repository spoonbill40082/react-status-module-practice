import { useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { useUserStore } from './store/useUserStore';

function App() {

  const { fetch, user } = useUserStore()
  console.log('user', user)
  useEffect(() => {
    fetch(1)
  }, [fetch])



  return (
    <div className="App" >
      <header className='App-header'>
        <Counter />
        <TodoList />
        <div style={{ lineHeight: 0.5, fontSize: '1.3rem' }}>
          <p>{user.name}</p>
          <p>
            {user.address.street},{" "}
            {user.address.suite},{" "}
            {user.address.city},{" "}
            {user.address.zipcode}
          </p>
          <p>{user.username}</p>
          <p>{user.phone}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
