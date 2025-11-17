import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import useGeoLocation from './hooks/useGeoLocation';
import FloatingButton from './components/FloatingButton';
import LocationModal from './components/LocationModal';

interface MarkerPosition {
  lat: number;
  lng: number;
}

interface Address {
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  formatted: string;
}

const MapComponent: React.FC = () => {
  const { location, error, loading } = useGeoLocation();
  const GOOGLE_MAPS_API_KEY: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyB7YczKVyJ7XeL0csncpSRqnhLrmtiGEFM';

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
  const [address, setAddress] = useState<Address | null>(null);
  const [loadingAddress, setLoadingAddress] = useState(false);

  // Função para fazer Geocoding Reverso
  const getAddressFromCoordinates = async (lat: number, lng: number) => {
    setLoadingAddress(true);
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}&language=pt-BR`
      );
      const data = await response.json();

      if (data.status === 'OK' && data.results[0]) {
        const result = data.results[0];
        const addressComponents = result.address_components;

        // Extrair componentes do endereço
        const rua = addressComponents.find((c: any) => 
          c.types.includes('route'))?.long_name || '';
        
        const bairro = addressComponents.find((c: any) => 
          c.types.includes('sublocality') || c.types.includes('neighborhood'))?.long_name || '';
        
        const cidade = addressComponents.find((c: any) => 
          c.types.includes('administrative_area_level_2'))?.long_name || '';
        
        const estado = addressComponents.find((c: any) => 
          c.types.includes('administrative_area_level_1'))?.short_name || '';

        setAddress({
          rua,
          bairro,
          cidade,
          estado,
          formatted: result.formatted_address
        });
      } else {
        setAddress(null);
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
      setAddress(null);
    } finally {
      setLoadingAddress(false);
    }
  };

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

  // Buscar endereço quando a posição do marcador mudar
  useEffect(() => {
    if (markerPosition) {
      getAddressFromCoordinates(markerPosition.lat, markerPosition.lng);
    }
  }, [markerPosition]);

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
              
              {loadingAddress && (
                <p className="mt-2 text-blue-600 animate-pulse">
                  🔄 Buscando endereço...
                </p>
              )}
              
              {address && !loadingAddress && (
                <div className="mt-3 p-3 bg-white rounded border border-gray-300">
                  <p className="font-semibold text-gray-800 mb-1">📍 Endereço:</p>
                  {address.rua && <p><strong>Rua:</strong> {address.rua}</p>}
                  {address.bairro && <p><strong>Bairro:</strong> {address.bairro}</p>}
                  {address.cidade && <p><strong>Cidade:</strong> {address.cidade}</p>}
                  {address.estado && <p><strong>Estado:</strong> {address.estado}</p>}
                </div>
              )}
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
        address={address}
      />
    </div>
  );
};

export default MapComponent;