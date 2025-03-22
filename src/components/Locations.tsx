'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { images } from '@/config/images';

export default function Locations() {
  const t = useTranslations('Locations');
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize the map
      const map = L.map('map', {
        zoomControl: false // Disable default zoom control
      }).setView([24.7136, 46.6753], 6);
      mapRef.current = map;

      // Add the tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Create custom icons
      const createIcon = (color: string) => {
        return L.icon({
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
        { name: t('location1.name'), lat: 24.7136, lng: 46.6753, color: 'red' },
        { name: t('location2.name'), lat: 21.4858, lng: 39.1925, color: 'blue' },
        { name: t('location3.name'), lat: 26.3927, lng: 50.1095, color: 'green' },
        { name: t('location4.name'), lat: 24.7136, lng: 46.6753, color: 'yellow' }
      ];

      locations.forEach(location => {
        L.marker([location.lat, location.lng], {
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
  }, [t]);

  return (
    <section className="py-20 bg-gray-50 relative z-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t('title')}</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        
        
        <div id="map" className="h-[500px] rounded-lg shadow-lg relative z-0"></div>
      </div>
    </section>
  );
} 