import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Main from './MainContainer';
import MainContainer from './MainContainer';

const App=()=>{
  return <div className='app'>
    <Navbar/>
    <MainContainer/>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

