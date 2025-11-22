import Layout from 'components/Layout';
import AuthScreens from 'pages/auth';
import HomePage from 'pages/home';
import IncidentPage from 'pages/incident';
import MapComponent from 'pages/map';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="incident/:id" element={<IncidentPage />} />
          <Route path="map" element={<MapComponent />} />

          {/* Se acessar /auth → redireciona para /auth/login */}
          <Route path="auth" element={<Navigate to="/auth/login" replace />} />

          {/* Rotas internas de autenticação */}
          <Route path="auth/*" element={<AuthScreens />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
