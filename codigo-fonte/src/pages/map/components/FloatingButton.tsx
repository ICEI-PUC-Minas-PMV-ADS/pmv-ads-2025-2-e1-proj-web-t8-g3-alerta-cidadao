import React from 'react';
import { Plus } from 'lucide-react';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-7 left-7 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 flex items-center gap-2 group"
      title="Adicionar Incidencia"
    >
      <Plus className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        Adicionar Incidencia
      </span>
    </button>
  );
};

export default FloatingButton;
