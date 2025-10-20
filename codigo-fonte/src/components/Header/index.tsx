import { routes } from 'common/Route';
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">Alerta Cidadão</h1>

        <nav>
          <ul className="flex gap-6">
            {Object.values(routes).map((route) => (
              <li>
                <Link
                  to={route.pathname}
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  {route.Label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
