import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MyReservations from './components/MyReservations';
import Reserve from './components/Reserve';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-reservations" element={<MyReservations />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </div>
  );
}

export default App;
