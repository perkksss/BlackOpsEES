import React, { useState } from 'react';
import { Skull, Menu, X, ChevronDown, ChevronUp, Search } from 'lucide-react';
import GameSelector from './components/GameSelector';
import MapsList from './components/MapsList';
import EasterEggSteps from './components/EasterEggSteps';
import { games } from './data/zombiesData';

function App() {
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const [selectedMap, setSelectedMap] = useState(selectedGame.maps[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleGameChange = (gameId: string) => {
    const game = games.find(g => g.id === gameId) || games[0];
    setSelectedGame(game);
    setSelectedMap(game.maps[0]);
  };

  const handleMapChange = (mapId: string) => {
    const map = selectedGame.maps.find(m => m.id === mapId) || selectedGame.maps[0];
    setSelectedMap(map);
    setMobileMenuOpen(false);
  };

  const filteredMaps = selectedGame.maps.filter(map => 
    map.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col">
      {/* Header */}
      <header className="bg-black py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Skull className="text-red-600 h-8 w-8" />
            <h1 className="text-2xl font-bold text-red-600">COD Zombies Easter Eggs</h1>
          </div>
          <button 
            className="md:hidden text-zinc-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex flex-col w-80 bg-zinc-800 p-4 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-red-500">Select Game</h2>
            <GameSelector 
              games={games} 
              selectedGame={selectedGame.id} 
              onSelectGame={handleGameChange} 
            />
          </div>
          
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
              <input
                type="text"
                placeholder="Search maps..."
                className="w-full bg-zinc-700 text-zinc-100 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-red-500">Maps</h2>
            <MapsList 
              maps={filteredMaps} 
              selectedMap={selectedMap.id} 
              onSelectMap={handleMapChange} 
            />
          </div>
        </aside>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-red-500">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={24} className="text-zinc-100" />
                </button>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4 text-red-500">Select Game</h2>
                <GameSelector 
                  games={games} 
                  selectedGame={selectedGame.id} 
                  onSelectGame={handleGameChange} 
                />
              </div>
              
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search maps..."
                    className="w-full bg-zinc-700 text-zinc-100 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4 text-red-500">Maps</h2>
                <MapsList 
                  maps={filteredMaps} 
                  selectedMap={selectedMap.id} 
                  onSelectMap={handleMapChange} 
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="container mx-auto">
            <div className="md:hidden mb-4">
              <button 
                className="flex items-center justify-between w-full bg-zinc-800 p-3 rounded-md"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span>Select Game/Map</span>
                <ChevronDown size={20} />
              </button>
            </div>

            <div className="bg-zinc-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <img 
                  src={selectedMap.imageUrl} 
                  alt={selectedMap.name} 
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-2xl font-bold text-red-500">{selectedMap.name}</h2>
                  <p className="text-zinc-400">{selectedGame.name}</p>
                </div>
              </div>
              
              <EasterEggSteps steps={selectedMap.easterEggSteps} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;