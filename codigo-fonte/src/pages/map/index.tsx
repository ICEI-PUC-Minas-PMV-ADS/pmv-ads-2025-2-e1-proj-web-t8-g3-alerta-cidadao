import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import useGeoLocation from './hooks/useGeoLocation';
import FloatingButton from './components/FloatingButton';
import LocationModal from './components/LocationModal';

interface MarkerPosition {
  lat: number;
  lng: number;
}

const MapComponent: React.FC = () => {
  const { location, error, loading } = useGeoLocation();
  const GOOGLE_MAPS_API_KEY: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '80vh'
  };

  const defaultCenter: MarkerPosition = {
    lat: -19.9167,
    lng: -43.9345
  };

  const [center, setCenter] = useState<MarkerPosition>(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState<MarkerPosition>(defaultCenter);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (location) {
      const userLocation: MarkerPosition = {
        lat: location.latitude,
        lng: location.longitude
      };
      setCenter(userLocation);
      setMarkerPosition(userLocation);
      
      if (mapInstance) {
        mapInstance.panTo(userLocation);
      }
    }
  }, [location, mapInstance]);

  const handleMapClick = useCallback((event: google.maps.MapMouseEvent): void => {
    if (event.latLng) {
      setMarkerPosition({
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      });
    }
  }, []);

  const handleMapLoad = useCallback((map: google.maps.Map) => {
    setMapInstance(map);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const mapOptions: google.maps.MapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: true,
    fullscreenControl: true,
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">Mapa Interativo</h1>
        
        {loading && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-2">
            <p className="text-blue-700">
              🔍 Obtendo sua localização...
            </p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-2">
            <p className="text-red-700">
              ⚠️ Erro ao obter localização: {error}
            </p>
            <p className="text-sm text-red-600 mt-1">
              Verifique se você permitiu o acesso à localização no navegador.
            </p>
          </div>
        )}
        
        {location && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
            <p className="text-green-700">
              ✓ Localização obtida com sucesso
            </p>
            <p className="text-sm text-green-600">
              Precisão: ~{location.accuracy.toFixed(0)}m
            </p>
          </div>
        )}
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
          <p className="text-gray-700 font-medium">
            💡 Dica: Clique no mapa para adicionar um marcador
          </p>
          
          {markerPosition && (
            <div className="mt-2 text-sm text-gray-600">
              <p className="font-semibold">Posição do marcador:</p>
              <p className="font-mono">
                Lat: {markerPosition.lat.toFixed(6)}° | 
                Lng: {markerPosition.lng.toFixed(6)}°
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-300">
        {GOOGLE_MAPS_API_KEY ? (
          <>
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={location ? 15 : 12}
                options={mapOptions}
                onClick={handleMapClick}
                onLoad={handleMapLoad}
              >
                <Marker 
                  position={markerPosition}
                />
              </GoogleMap>
            </LoadScript>

            <FloatingButton onClick={handleOpenModal} />
          </>
        ) : (
          <div className="flex items-center justify-center h-[80vh] bg-gray-100">
            <div className="text-center p-6">
              <p className="text-red-600 font-semibold text-lg mb-2">
                ⚠️ API Key do Google Maps não encontrada
              </p>
              <p className="text-gray-600">
                Adicione a variável VITE_GOOGLE_MAPS_API_KEY no seu arquivo .env
              </p>
            </div>
          </div>
        )}
      </div>

      <LocationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        markerPosition={markerPosition}
      />
    </div>
  );
};

export default MapComponent;
