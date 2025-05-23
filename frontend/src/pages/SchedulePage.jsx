import { NavBar } from "../components/NavBar"
import { MyFooter } from "../components/MyFooter"
import { ListSalon } from "../components/Schedule/ListSalon";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const SchedulePage = () => {
  const [fechaHora, setFechaHora] = useState(new Date());
  return (
    <>
      <NavBar />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Selecciona fecha y hora</h2>

        <label className="block text-gray-700 mb-2">Fecha y hora del evento:</label>
        <DatePicker
          selected={fechaHora}
          onChange={(date) => setFechaHora(date)}
          showTimeSelect
          timeIntervals={30}
          timeCaption="Hora"
          dateFormat="dd/MM/yyyy h:mm aa"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
        />

        {/* Duracion */}
        <label className="block text-gray-700 mb-2 mt-4">Duración del evento:</label>
        <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black">
          <option value="1">1 hora</option>
          <option value="2">2 horas</option>
          <option value="3">3 horas</option>
          <option value="4">4 horas</option>
          <option value="5">5 horas</option>
          <option value="6">6 horas</option>
          <option value="7">7 horas</option>
          <option value="8">8 horas</option>
        </select>

        <p className="mt-4 text-sm text-gray-500">
          Fecha seleccionada: {fechaHora.toLocaleString()}
        </p>
      </div>

      {/* Seleccionar salon por cuadros de card*/}
      <div className="w-full mx-auto mt-8 mx-2 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Selecciona un salón</h2>
        <ListSalon />
      </div>
      <MyFooter />
    </>
  )
}
