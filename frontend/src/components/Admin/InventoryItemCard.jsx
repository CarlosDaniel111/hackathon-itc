import { useState } from 'react';

export const InventoryItemCard = ({ item, onEdit }) => {
  const getItemNameInSpanish = (name) => {
    const names = {
      'table': 'Mesa',
      'chair': 'Silla',
      'flowers': 'Flores',
      'dish': 'Plato',
      'glasses': 'Vasos',
      'tablecloth': 'Mantel',
      'other': 'Otro'
    };
    return names[name] || name;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{getItemNameInSpanish(item.item_name)}</h3>
          <p className="text-gray-600">Cantidad disponible: {item.quantity}</p>
        </div>
        <button
          onClick={() => onEdit(item)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Editar
        </button>
      </div>
    </div>
  );
};
