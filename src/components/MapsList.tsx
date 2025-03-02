import React from 'react';
import { Map } from '../types';

interface MapsListProps {
  maps: Map[];
  selectedMap: string;
  onSelectMap: (mapId: string) => void;
}

const MapsList: React.FC<MapsListProps> = ({ maps, selectedMap, onSelectMap }) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {maps.length > 0 ? (
        maps.map((map) => (
          <button
            key={map.id}
            className={`flex items-center p-3 rounded-md text-left transition-colors ${
              selectedMap === map.id
                ? 'bg-red-600 text-white'
                : 'bg-zinc-700 text-zinc-100 hover:bg-zinc-600'
            }`}
            onClick={() => onSelectMap(map.id)}
          >
            <img 
              src={map.imageUrl} 
              alt={map.name} 
              className="w-8 h-8 object-cover rounded mr-3"
            />
            <span>{map.name}</span>
          </button>
        ))
      ) : (
        <p className="text-zinc-400 p-3">No maps found</p>
      )}
    </div>
  );
};

export default MapsList;