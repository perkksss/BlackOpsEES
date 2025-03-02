import React from 'react';
import { Game } from '../types';

interface GameSelectorProps {
  games: Game[];
  selectedGame: string;
  onSelectGame: (gameId: string) => void;
}

const GameSelector: React.FC<GameSelectorProps> = ({ games, selectedGame, onSelectGame }) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {games.map((game) => (
        <button
          key={game.id}
          className={`p-3 rounded-md text-left transition-colors ${
            selectedGame === game.id
              ? 'bg-red-600 text-white'
              : 'bg-zinc-700 text-zinc-100 hover:bg-zinc-600'
          }`}
          onClick={() => onSelectGame(game.id)}
        >
          {game.name}
        </button>
      ))}
    </div>
  );
};

export default GameSelector;