import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu'
import MainRoute from './components/page/MainRoute'

function App() {
  return (
      <div>
        <MainMenu/>
            <MainRoute/>
      </div>
  );
}

export default App;
