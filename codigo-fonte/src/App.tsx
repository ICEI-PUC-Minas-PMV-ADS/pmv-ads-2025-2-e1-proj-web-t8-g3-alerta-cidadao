import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import AuthScreens from './pages/auth';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthScreens />} />
      </Routes>
    </BrowserRouter>
  );
}
