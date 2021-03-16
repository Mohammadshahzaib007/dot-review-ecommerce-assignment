import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
   const fetchData = async () => {
    const data =  await fetch('http://localhost:8000/posts');
    const res = await data.json()
    console.log(res)
  }
  fetchData() 
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
