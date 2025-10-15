import AuthScreens from 'pages/auth';
import HomePage from 'pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
