import './App.css';
import Home from './Home';
import { Routes, Route } from 'react-router-dom'
import About from './components/About'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
