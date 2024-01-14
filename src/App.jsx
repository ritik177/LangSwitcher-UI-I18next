import { useTranslation } from 'react-i18next'
import './App.css'
import Navbar from './components/Navbar';
import Login from './components/Login/Login';

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Login/>
    </div>
  )
}

export default App
