import { useState } from 'react';

export const AddInventoryModal = ({ onClose, onSave }) => {
  const [itemData, setItemData] = useState({
    item_name: 'table',
    quantity: 0,
    custom_name: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemData.item_name === 'other' && !itemData.custom_name.trim()) {
      setError('Por favor, ingresa un nombre para el item');
      return;
    }
    
    onSave({ 
      ...itemData, 
      id: Date.now(),
      item_name: itemData.item_name === 'other' ? itemData.custom_name : itemData.item_name 
    });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold">Agregar Nuevo Item</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tipo de Item
            </label>
            <select
              value={itemData.item_name}
              onChange={(e) => {
                setItemData({ 
                  ...itemData, 
                  item_name: e.target.value,
                  custom_name: '' // Limpiar nombre personalizado al cambiar de opción
                });
                setError(''); // Limpiar error al cambiar
              }}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="table">Mesa</option>
              <option value="chair">Silla</option>
              <option value="flowers">Flores</option>
              <option value="dish">Plato</option>
              <option value="glasses">Vasos</option>
              <option value="tablecloth">Mantel</option>
              <option value="other">Otro</option>
            </select>
          </div>

          {itemData.item_name === 'other' && (
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nombre del Item
              </label>
              <input
                type="text"
                value={itemData.custom_name}
                onChange={(e) => {
                  setItemData({ ...itemData, custom_name: e.target.value });
                  setError('');
                }}
                placeholder="Ingresa el nombre del item"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
            </div>
          )}

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Cantidad
            </label>
            <input
              type="number"
              min="0"
              value={itemData.quantity}
              onChange={(e) => setItemData({ ...itemData, quantity: parseInt(e.target.value) })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
