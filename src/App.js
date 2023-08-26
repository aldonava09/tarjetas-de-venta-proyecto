import React from 'react';
import './styles/App.css';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import Footer from './components/footer/Footer.js';
import upDecoration from './images/up-decoration.svg';
import downDecoration from './images/down-decoration.svg';

function App() {
  return (
      <div className="App">
          <img className='App_up-decoration' src={upDecoration} alt='backgrond decoration'/>
          <Header/>
          <Main/>
          <Footer/>
          <img className='App_down-decoration' src={downDecoration} alt='backgrond decoration'/>
      </div>
  );
}

export default App;
