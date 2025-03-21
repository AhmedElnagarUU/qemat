'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { MapPin, Phone } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { LatLngExpression } from 'leaflet';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

interface Location {
  city: string;
  address: string;
  phone: string;
  position: LatLngExpression;
}

const Locations = () => {
  const t = useTranslations('Locations');

  const locations: Location[] = [
    {
      city: t('riyadh'),
      address: t('riyadhAddress'),
      phone: t('riyadhPhone'),
      position: [24.7136, 46.6753] as LatLngExpression
    },
    {
      city: t('jeddah'),
      address: t('jeddahAddress'),
      phone: t('jeddahPhone'),
      position: [21.5433, 39.1728] as LatLngExpression
    },
    {
      city: t('dammam'),
      address: t('dammamAddress'),
      phone: t('dammamPhone'),
      position: [26.4207, 50.0888] as LatLngExpression
    }
  ];

  // Fix for the missing icon issue in Leaflet when using Next.js
  useEffect(() => {
    const L = require('leaflet');
    
    // Create custom icon
    const customIcon = new L.Icon({
      iconUrl: '/leaflet/marker-icon.png',
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      shadowUrl: '/leaflet/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Set as default icon
    L.Marker.prototype.options.icon = customIcon;
  }, []);

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-100 hover:border-yellow-500/20 group transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {location.city}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-500 mt-1 mr-3 shrink-0" />
                  <p className="text-gray-600 text-sm">{location.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-500 mr-3 shrink-0" />
                  <p className="text-gray-600 text-sm">{location.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="border border-gray-100 h-[500px] relative">
          <MapContainer
            center={[24.7136, 46.6753] as LatLngExpression}
            zoom={6}
            style={{ height: '100%', width: '100%' }}
            className="z-10"
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((location) => (
              <Marker 
                key={location.city} 
                position={location.position}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold mb-1">{location.city}</h3>
                    <p className="text-sm text-gray-600">{location.address}</p>
                    <p className="text-sm text-gray-600">{location.phone}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Locations; 