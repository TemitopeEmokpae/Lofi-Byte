import logo from './logo.svg';
import './css/App.css';
import { Fullscreen } from '@mui/icons-material';
import { flexbox } from '@mui/system';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Songs from './components/Songs';
import Albums from './components/Albums';
import Artists from './components/Artists';
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <div>
      
      <div 
      style={
        {backgroundColor: '#4A65AD',
        width: '100',
        height: '1000px'}}
        >
          <NavBar></NavBar>
          <Routes>
            <Route path='/Home' element ={<Home/>} />
            <Route path='/Songs' element ={<Songs/>} />
            <Route path='/Albums' element ={<Albums/>} />
            <Route path='/Artists' element ={<Artists/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;

