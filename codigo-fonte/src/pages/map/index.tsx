import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import useGeoLocation from '../../hooks/useGeoLocation';

interface MarkerPosition {
  lat: number;
  lng: number;
}

const MapComponent: React.FC = () => {
  // Hook de geolocalização
  const { location, error, loading } = useGeoLocation();

  // Substitua pela sua API Key do Google Maps
  const GOOGLE_MAPS_API_KEY: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  // Configuração do container do mapa
  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '80vh'
  };

  // Posição inicial do mapa (Belo Horizonte, MG) - fallback
  const defaultCenter: MarkerPosition = {
    lat: -19.9167,
    lng: -43.9345
  };

  // Estado para gerenciar o centro do mapa e a posição do marcador
  const [center, setCenter] = useState<MarkerPosition>(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState<MarkerPosition>(defaultCenter);

  // Atualiza o centro e marcador quando a geolocalização estiver disponível
  useEffect(() => {
    if (location) {
      const userLocation: MarkerPosition = {
        lat: location.latitude,
        lng: location.longitude
      };
      setCenter(userLocation);
      setMarkerPosition(userLocation);
    }
  }, [location]);

  // Função para adicionar marcador ao clicar no mapa
  const handleMapClick = (event: google.maps.MapMouseEvent): void => {
    if (event.latLng) {
      setMarkerPosition({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      });
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">Mapa Interativo</h1>
        
        {loading && (
          <p className="text-blue-600 mb-2">
            🔍 Obtendo sua localização...
          </p>
        )}
        
        {error && (
          <p className="text-red-600 mb-2">
            ⚠️ Erro ao obter localização: {error}
          </p>
        )}
        
        {location && (
          <p className="text-green-600 mb-2">
            ✓ Localização obtida com sucesso (precisão: {location.accuracy.toFixed(0)}m)
          </p>
        )}
        
        <p className="text-gray-600">
          Clique no mapa para adicionar um marcador
        </p>
        
        {markerPosition && (
          <p className="text-sm text-gray-500 mt-2">
            Posição do marcador: {markerPosition.lat.toFixed(4)}, {markerPosition.lng.toFixed(4)}
          </p>
        )}
      </div>

      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={location ? 15 : 12}
          onClick={handleMapClick}
        >
          {/* Marcador na posição selecionada */}
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;