import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Profile from './profile/Profile.js';

function App() {
  return (
    <div className="App">
          <Profile  fullName="Trichilli Montassar" profession="développeur Web" bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
    <img src="/pdf.jpg" style={{ width: '200px',height:'200px' }}/>
    </Profile>

    </div>
  );
}

export default App;
