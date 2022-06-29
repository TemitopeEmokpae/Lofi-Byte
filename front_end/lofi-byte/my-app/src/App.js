import logo from './logo.svg';
import './App.css';
import { Fullscreen } from '@mui/icons-material';
import { flexbox } from '@mui/system';


function App() {
  return (
    <div>
      <div 
      style={
        {backgroundColor: '#36454F',
        display: 'flex',
        width: '100',
        height: '1000px'}}
        >
          <div className='header'>
            <div className='logo'>
            <h1 style={{color: 'white', paddingLeft: '20px'}}>Lofi-byte</h1>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
