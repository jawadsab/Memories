import React from 'react';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="grid-layout">
        <div className="item-left">
          <Form />
        </div>
        <div className="item-center"></div>
      </div>
    </div>
  );
};

export default App;
