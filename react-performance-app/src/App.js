import './App.css';
import React, { useEffect, useState } from 'react'
import A from './components/A';
import B from './components/B';

function App() {
  const [value, setValue] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts))
  }, [])


  return (
    <div style={{ padding: '1rem' }}>
      <input
        value={value}
        onChange={e => setValue(e.target.value)} //input에 타이핑을 하면 그 내용이 e.target.value로 담겨서 setValue에 들어가고, 그것이 value={value}로 들어간다.
      />

      <div style={{ display: 'flex' }}>
        <A
          message={value}
          posts={posts}
        />
        <B
          message={value}
          posts={posts}
        />
      </div>

    </div>
  );
}

export default App;


