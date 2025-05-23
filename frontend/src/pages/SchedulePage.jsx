import { NavBar } from "../components/NavBar"
import { MyFooter } from "../components/MyFooter"
import { SalonList } from "../components/Schedule/SalonList";
import { PackageList } from "../components/Schedule/PackageList";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const SchedulePage = () => {
  const [fechaHora, setFechaHora] = useState(new Date());
  const [packageSelected, setPackageSelected] = useState(null);
  const [salonSelected, setSalonSelected] = useState(null)
  const [duracion, setDuracion] = useState(1);
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
        <select
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black">
          <option value="1">1 hora</option>
          <option value="2">2 horas</option>
          <option value="3">3 horas</option>
          <option value="4">4 horas</option>
          <option value="5">5 horas</option>
          <option value="6">6 horas</option>
          <option value="7">7 horas</option>
          <option value="8">8 horas</option>
        </select>
      </div>

      {/* Seleccionar salon por cuadros de card*/}
      <div className="w-full mx-auto mt-8 mx-2 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Selecciona un salón</h2>
        <SalonList
          salonSelected={salonSelected}
          setSalonSelected={setSalonSelected}
        />
      </div>

      {/* Seleccionar un paquete */}
      <div className="w-full mx-auto mt-8 mx-2 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Selecciona un paquete</h2>
        <PackageList
          packageSelected={packageSelected}
          setPackageSelected={setPackageSelected}
        />
      </div>

      {/*Resumen del evento*/}

      {
        salonSelected === null || packageSelected === null
          ? <div className="w-full mx-auto mt-8 mx-2 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Resumen del evento</h2>
            <p className="text-center text-gray-500">Por favor selecciona un salón y un paquete para continuar.</p>
          </div>
          :
          <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
            <h2 className="text-2xl font-bold mb-4">Resumen del Evento</h2>

            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Fecha:</span> {fechaHora.toLocaleDateString()} </p>
              <p><span className="font-semibold">Hora:</span> {fechaHora.toLocaleTimeString()} </p>
              <p><span className="font-semibold">Duración:</span> {duracion} hora{duracion != 1 ? "s" : ""}</p>
              <p><span className="font-semibold">Salón:</span> {salonSelected}</p>
              <p><span className="font-semibold">Paquete:</span> {packageSelected} </p>
              <p><span className="font-semibold">Precio total:</span> </p>
            </div>

            <button
              className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
            >
              Continuar con el pago
            </button>
          </div>
      }



      <MyFooter />
    </>
  )
}
