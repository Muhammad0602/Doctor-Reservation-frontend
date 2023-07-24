import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import DeleteDoctor from './components/DeleteDoctor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delete" element={<DeleteDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
