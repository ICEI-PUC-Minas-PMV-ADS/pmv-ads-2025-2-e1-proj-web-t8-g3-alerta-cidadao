import React from 'react';
import { Plus } from 'lucide-react';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-7 left-7 bg-blue-600 text-white rounded-full p-4 shadow-lg flex items-center gap-2"
      title="Adicionar Incidente"
    >
      <Plus className="w-6 h-6" />
      <span className="whitespace-nowrap">
        Adicionar Incidente
      </span>
    </button>
  );
};

export default FloatingButton;
