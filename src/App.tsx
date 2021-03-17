import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {

  useEffect(() => {
   const fetchData = async () => {
    const data =  await fetch('http://localhost:8000/products');
    const res = await data.json()
    console.log(res)
  }
  fetchData() 
  }, [])

  return (
    <Layout>
     <Home />
    </Layout>
  );
}

export default App;
