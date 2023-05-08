import React, { useState } from 'react';
import './App.scss';
import MyRoute from './routes/MyRoute';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [statusLink, setStatusLink] = useState(1)

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar statusLink={statusLink} setStatusLink={setStatusLink} />
        <MyRoute statusLink={statusLink} setStatusLink={setStatusLink} />
      </div>
    </BrowserRouter>
  );
}

export default App;
