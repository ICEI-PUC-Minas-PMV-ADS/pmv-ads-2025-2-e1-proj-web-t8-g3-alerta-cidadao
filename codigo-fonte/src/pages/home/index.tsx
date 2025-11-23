import { Link } from 'react-router-dom';
import { getCurrentUser } from 'utils/auth';

const HomePage: React.FC = () => {
  const currentUser = getCurrentUser();

  return (
    <div className="flex">
      <div className="w-full py-8">
        <div className="text-4xl font-semibold py-5">
          <h2>Enchente?</h2>
          <h2>Conte pra gente</h2>
        </div>
        <div className="py-5">
          O Alerta Cidadão é um monitor descentralizado de enchentes, em tempo
          real e 24h/dia!
        </div>
        <div className="py-5 flex gap-3">
          <Link
            to="/map"
            className="px-6 py-2 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Informe-se
          </Link>
          {!currentUser && (
            <Link
              to="/auth/login"
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-all duration-200"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
      <div className="w-full">
        <div className="w-[50vh] h-[50vh] rounded-xl overflow-hidden ml-auto">
          <img
            src="https://img.freepik.com/premium-vector/city-map-with-pins_102902-2952.jpg"
            alt="map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
