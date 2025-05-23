import { useState } from 'react';

export const EditInventoryModal = ({ item, onClose, onSave }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Asegurarnos de que quantity sea un número válido
    const validQuantity = parseInt(quantity) || 0;
    if (validQuantity < 0) {
      alert('La cantidad no puede ser negativa');
      return;
    }
    setQuantity(validQuantity);
    setShowConfirmation(true);
  };

  const confirmSave = () => {
    const updatedItem = {
      ...item,
      quantity: parseInt(quantity) || 0
    };
    onSave(updatedItem);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    // Permitir string vacío para mejor UX mientras se escribe
    if (value === '') {
      setQuantity('');
    } else {
      const numValue = parseInt(value);
      if (!isNaN(numValue)) {
        setQuantity(numValue);
      }
    }
  };

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
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        {!showConfirmation ? (
          <>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Editar {getItemNameInSpanish(item.item_name)}</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Cantidad
                </label>
                <input
                  type="number"
                  min="0"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">¿Confirmar cambios?</h3>
            <p className="mb-6">
              ¿Estás seguro de que deseas cambiar la cantidad de {getItemNameInSpanish(item.item_name)} a {quantity}?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancelar
              </button>
              <button
                onClick={confirmSave}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
