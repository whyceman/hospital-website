import './App.css';
import { useMode } from './hooks/useMode';
import { Route, Routes, useNavigate, BrowserRouter } from 'react-router-dom'
import About from './pages/about/About';
import Homepage from './pages/homepage/Homepage';
import Appointment from './pages/appointment/Appointment';
function App() {
  const { mode } = useMode()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Appointment />} path='/appointment' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
