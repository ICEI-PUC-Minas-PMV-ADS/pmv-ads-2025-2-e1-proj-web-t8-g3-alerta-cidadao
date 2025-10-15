
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MarkerPosition {
  lat: number;
  lng: number;
}

const MapComponent: React.FC = () => {
  // Substitua pela sua API Key do Google Maps
  const GOOGLE_MAPS_API_KEY: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  // Configuração do container do mapa
  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '80vh'
  };

  // Posição inicial do mapa (Belo Horizonte, MG)
  const center: MarkerPosition = {
    lat: -19.9167,
    lng: -43.9345
  };

  // Estado para gerenciar a posição do marcador
  const [markerPosition, setMarkerPosition] = useState<MarkerPosition>(center);

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
          zoom={12}
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
