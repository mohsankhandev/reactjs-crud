import logo from './logo.svg';
import './App.css';
import Create from './componet/Create';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Read from './componet/Read';
import Update from './componet/Update';

function App() {
  return (
      <BrowserRouter>
         <Routes>

      <Route excat path='/' element={<Create />}></Route>
      <Route excat path='/read' element={<Read />}></Route>
      <Route excat path='/update' element={<Update />}></Route>


      </Routes>
      </BrowserRouter>

  );
}

export default App;
