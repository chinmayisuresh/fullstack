import logo from './logo.svg';
import './App.css';
import { Dashboard } from './components/Dashboard';
import {Test} from './components/Test';
import {Login} from './components/Login';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
      <div>
        <Routes>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Tests/:name' element={<Test/>}></Route>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
      
    
      </div>
      
  );
}

export default App;
