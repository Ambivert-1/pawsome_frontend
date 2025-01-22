import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const petMarkers = [
  { id: 1, position: [28.2096, 83.9856], name: "Bella", type: "Dog", breed: "Labrador", age: 3, vaccinationStatus: "Vaccinated", location: "Pokhara", image: "https://via.placeholder.com/150", description: "Friendly and playful dog." },
  { id: 2, position: [28.2964, 83.8882], name: "Kitty", type: "Cat", breed: "Siamese", age: 2, vaccinationStatus: "Vaccinated", location: "Phedi", image: "https://via.placeholder.com/150", description: "Loves to cuddle and play." },
  // Add more pet markers as needed
];

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const FindPet = () => {
  const [currentLocation, setCurrentLocation] = useState([28.2096, 83.9856]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Error getting current location: ", error);
      }
    );
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden pt-16">
        {/* Map Section */}
        <div className="w-1/2 h-full">
          <MapContainer 
            center={currentLocation} 
            zoom={12} 
            scrollWheelZoom={true}
            className="h-full w-full"
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {petMarkers.map(pet => (
              <Marker key={pet.id} position={pet.position}>
                <Popup>
                  <div className="p-2">
                    <img src={pet.image} alt={pet.name} className="w-full h-32 object-cover mb-2 rounded-md" />
                    <h3 className="font-bold text-lg">{pet.name}</h3>
                    <p className="text-sm text-gray-600">Type: {pet.type}</p>
                    <p className="text-sm text-gray-600">Breed: {pet.breed}</p>
                    <p className="text-sm text-gray-600">Age: {pet.age} years</p>
                    <p className="text-sm text-gray-600">Vaccination: {pet.vaccinationStatus}</p>
                    <p className="text-sm text-gray-600">{pet.description}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Pet Cards Section */}
        <div className="w-1/2 h-full overflow-y-auto p-4 bg-gray-50">
          {petMarkers.map(pet => (
            <div key={pet.id} className="p-4 mb-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <img src={pet.image} alt={pet.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <div>
                <h3 className="text-xl font-bold text-pink-500">{pet.name}</h3>
                <p className="text-sm text-gray-600">Type: {pet.type}</p>
                <p className="text-sm text-gray-600">Breed: {pet.breed}</p>
                <p className="text-sm text-gray-600">Age: {pet.age} years</p>
                <p className="text-sm text-gray-600">Vaccination: {pet.vaccinationStatus}</p>
                <p className="text-sm text-gray-600">Location: {pet.location}</p>
                <p className="text-sm text-gray-600">{pet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindPet;