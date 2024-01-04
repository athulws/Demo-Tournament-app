import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import Knockout from './Components/Knockout';
import Fixtures from './Components/Fixtures';
import Table from './Components/Table';
import Overview from './Components/Overview';
import SelectExample from './Components/SelectExample';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/fixtures' element={<Fixtures />} />
          <Route path='/table' element={<Table />} />
          <Route path='/dashboard' element={<Knockout />} />
          <Route path='/overview/:id' element={<Overview />} />
          <Route path='/selectExample' element={<SelectExample/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
