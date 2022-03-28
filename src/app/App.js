import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../features/Album/Pages'
// import TodoFeature from '../features/Todo/Pages';
import AlbumFeature from '../features/Album/Pages';

function App() {
  return (
    <div className='App'>
    <header className='App-header'>
      <img src={logo} className = "App-logo" alt='logo' ></img>
      <AlbumFeature/>
    </header>
  </div>
  );
}

export default App;
