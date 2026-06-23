import { Routes, Route } from 'react-router-dom';
import './styles/index.css';
import HomePage from './pages/HomePage';
import VibesPage from './pages/VibesPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vibes" element={<VibesPage />} />
    </Routes>
  );
}
