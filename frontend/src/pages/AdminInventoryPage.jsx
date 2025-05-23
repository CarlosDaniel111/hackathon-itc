import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { MyFooter } from "../components/MyFooter";
import { InventoryItemCard } from "../components/Admin/InventoryItemCard";
import { EditInventoryModal } from "../components/Admin/EditInventoryModal";
import { AddInventoryModal } from "../components/Admin/AddInventoryModal";

export const AdminInventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // all, low, out

  useEffect(() => {
    // Mock data - reemplazar con llamada a API real
    const mockInventory = [
      {
        id: 1,
        item_name: 'Mesa',
        quantity: 50
      },
      {
        id: 2,
        item_name: 'Silla',
        quantity: 500
      },
      {
        id: 3,
        item_name: 'Flores',
        quantity: 10
      },
      {
        id: 4,
        item_name: 'Plato',
        quantity: 600
      },
      {
        id: 5,
        item_name: 'Vasos',
        quantity: 0
      },
      {
        id: 6,
        item_name: 'Mantel',
        quantity: 50
      }
    ];
    setInventory(mockInventory);
  }, []);

  const handleEditClick = (item) => {
    setSelectedItem(item);
  };

  const handleSave = (updatedItem) => {
    // Aquí iría la llamada a la API para actualizar el inventario
    setInventory(inventory.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
    setSelectedItem(null);
  };

  const handleAddItem = (newItem) => {
    // Aquí iría la llamada a la API para crear el nuevo item
    setInventory([...inventory, newItem]);
    setShowAddModal(false);
  };

  // Función para filtrar inventario
  const getFilteredInventory = () => {
    return inventory.filter(item => {
      const matchesSearch = item.item_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = 
        filterStatus === "all" ? true :
        filterStatus === "low" ? item.quantity < 100 && item.quantity > 0 :
        filterStatus === "out" ? item.quantity === 0 : true;
      
      return matchesSearch && matchesFilter;
    });
  };

  // Calcular estadísticas
  const stats = {
    total: inventory.length,
    lowStock: inventory.filter(item => item.quantity < 100 && item.quantity > 0).length,
    outOfStock: inventory.filter(item => item.quantity === 0).length,
    totalItems: inventory.reduce((sum, item) => sum + item.quantity, 0)
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Gestión de Inventario</h1>
            <button 
              onClick={() => setShowAddModal(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Agregar Nuevo
            </button>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Total de Items</h3>
              <p className="text-2xl font-bold">{stats.total}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Items Bajos</h3>
              <p className="text-2xl font-bold text-yellow-600">{stats.lowStock}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Agotados</h3>
              <p className="text-2xl font-bold text-red-600">{stats.outOfStock}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Total Unidades</h3>
              <p className="text-2xl font-bold text-blue-600">{stats.totalItems}</p>
            </div>
          </div>

          {/* Filtros y Búsqueda */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="all">Todos los items</option>
              <option value="low">Stock bajo</option>
              <option value="out">Agotados</option>
            </select>
          </div>

          {/* Lista de inventario */}
          <div className="space-y-4">
            {getFilteredInventory().map(item => (
              <InventoryItemCard
                key={item.id}
                item={item}
                onEdit={handleEditClick}
              />
            ))}
            {getFilteredInventory().length === 0 && (
              <p className="text-center text-gray-500 py-4">No se encontraron items que coincidan con los filtros.</p>
            )}
          </div>
        </div>
      </div>

      {selectedItem && (
        <EditInventoryModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onSave={handleSave}
        />
      )}

      {showAddModal && (
        <AddInventoryModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddItem}
        />
      )}

      <MyFooter />
    </>
  );
};
