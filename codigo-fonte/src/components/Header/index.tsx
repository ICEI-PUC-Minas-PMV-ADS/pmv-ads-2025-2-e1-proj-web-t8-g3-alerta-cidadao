import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { getCurrentUser, logoutUser } from "../../utils/auth";

const Header: React.FC = () => {
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, [location.pathname]);

  // fecha o menu quando troca de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /** Ocultar avatar em todas as páginas de auth */
  const hideAvatar =
    location.pathname.startsWith("/auth") ||
    location.pathname.includes("login") ||
    location.pathname.includes("register") ||
    location.pathname.includes("forgot-password");

  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
          <Link to="/">Alerta Cidadão</Link>
        </h1>

        <nav className="flex items-center gap-6">
          <ul className="flex gap-6 mr-4">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/map"
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Mapa
              </Link>
            </li>

            {!currentUser && (
              <li>
                <Link
                  to="/auth/login"
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  Entrar
                </Link>
              </li>
            )}
          </ul>

          {/* AVATAR + DROPDOWN */}
          {!hideAvatar && currentUser && (
            <div className="relative">
              {/* Avatar */}
              <div
                className="w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center cursor-pointer select-none"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {currentUser.name
                  ? currentUser.name.charAt(0).toUpperCase()
                  : currentUser.email.charAt(0).toUpperCase()}
              </div>

              {/* Menu */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 flex flex-col bg-white text-black rounded-md shadow-md py-2 w-40 z-50">
                  <p className="px-4 py-1 text-sm border-b font-medium">
                    {currentUser.name || currentUser.email}
                  </p>

                  <button
                    className="text-left px-4 py-2 text-sm hover:bg-gray-200"
                    onClick={() => {
                      logoutUser();
                      navigate("/auth/login");
                    }}
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
