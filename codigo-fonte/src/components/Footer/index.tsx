import { routes } from 'common/Route';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-xl font-semibold text-white">Alerta Cidadão</h2>

        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
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

        <p className="text-xs text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Alerta Cidadão. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
