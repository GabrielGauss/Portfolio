import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import CardContainer from './Components/CardContainer';
import Tech from './Components/Tech';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <section className="container-full">
      <CardContainer  />
      </section>
      <section className="container-logo" > 
      < h1> technologies & skills</h1>
            <Tech/ >
      <div className='bubbles-container'>
          <span className='bubble1'></span>
          <span className='bubble2'></span>
          <span className='bubble3'></span>
      </div>
      </section>
    </div>
  );
}

export default App;
