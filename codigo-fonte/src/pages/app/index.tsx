import AuthScreens from 'pages/auth';
import HomePage from 'pages/home';
import MapComponent from 'pages/map';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthScreens />} />
        <Route path="/map" element={<MapComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
