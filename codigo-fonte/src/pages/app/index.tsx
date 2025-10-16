import Layout from 'components/Layout';
import AuthScreens from 'pages/auth';
import HomePage from 'pages/home';
import IncidentPage from 'pages/incident';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="incident/:id" element={<IncidentPage />} />
        </Route>
        <Route path="/auth" element={<AuthScreens />} />
      </Routes>
    </BrowserRouter>
  );
}
