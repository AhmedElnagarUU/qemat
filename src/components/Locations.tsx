'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { images } from '@/config/images';

export default function Locations() {
  const t = useTranslations('Locations');
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Import Leaflet dynamically
    import('leaflet').then((L) => {
      if (typeof window !== 'undefined') {
        // Initialize the map
        const map = L.default.map('map', {
          zoomControl: false // Disable default zoom control
        }).setView([24.7136, 46.6753], 6);
        mapRef.current = map;

        // Add the tile layer
        L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Create custom icons
        const createIcon = (color: string) => {
          return L.default.icon({
            iconUrl: images.locations.markers[color as keyof typeof images.locations.markers],
            shadowUrl: images.locations.shadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          });
        };

        // Add markers for each location
        const locations = [
        
          { name: t('riyadh'), lat: 24.765426, lng: 46.833517, color: 'yellow' },
          { name: t('riyadh'), lat: 24.778976, lng: 46.603668, color: 'yellow' },
        ];

        locations.forEach(location => {
          L.default.marker([location.lat, location.lng], {
            icon: createIcon(location.color)
          })
            .bindPopup(location.name)
            .addTo(map);
        });

        // Cleanup function
        return () => {
          if (mapRef.current) {
            mapRef.current.remove();
          }
        };
      }
    });
  }, [t]);

  return (
    <section className="py-20 bg-gray-50 relative z-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t('title')}</h2>
        
        <p className="text-center mb-6">{t('riyadhAddress')}</p>
        <p className="text-center mb-6">{t('riyadhAddress2')}</p>
        <p className="text-center mb-6">{t('riyadhPhone')}</p>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        
        
        <div id="map" className="h-[500px] rounded-lg shadow-lg relative z-0"></div>
      </div>
    </section>
  );
} 