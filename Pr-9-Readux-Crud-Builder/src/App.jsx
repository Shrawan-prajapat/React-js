import React from 'react';
import Add from './pages/Add';
import View from './pages/View';
import './style.css';

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/image.png" alt="Google Keep" />
        <h3>Google Keep</h3>
      </header>
      
      <div className="add-container">
        <Add />
      </div>
      
      <div className="view-container">
        <View />
      </div>
      <footer><span>Copyrights 2024</span></footer>
    </div>
  );
}

export default App;
