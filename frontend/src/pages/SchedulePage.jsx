import { NavBar } from "../components/NavBar"
import { MyFooter } from "../components/MyFooter"
import { SalonList } from "../components/Schedule/SalonList";
import { PackageList } from "../components/Schedule/PackageList";
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const SchedulePage = () => {

  const [salonList, setSalonList] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000" + `/salons`).then((response) => {
      setSalonList(response.data)
    });
  }, [])

  const [fechaHora, setFechaHora] = useState(new Date());
  const [packageSelected, setPackageSelected] = useState(null);
  const [salonSelected, setSalonSelected] = useState(null)
  const [duracion, setDuracion] = useState(1);

  const calcularPrecio = () => {
    const salon = salonList.find(salon => salon.id === salonSelected);
    const packagePrice = packageSelected === 1 ? 7500 : packageSelected === 2 ? 10000 : packageSelected === 3 ? 15000 : packageSelected === 4 ? 5000 : packageSelected === 5 ? 12000 : 0;
    return `$${(salon.price * duracion) + packagePrice} MXN`;
  }
  const getSalon = () => {
    const salon = salonList.find(salon => salon.id === salonSelected);
    return salon ? salon.name : "No seleccionado";
  }
  const getPackage = () => {
    return packageSelected === 1 ? "Paquete Elegancia" : packageSelected === 2 ? "Paquete Fiesta" : packageSelected === 3 ? "Paquete Premium" : packageSelected === 4 ? "Paquete Básico" : packageSelected === 5 ? "Paquete Corporativo" : "No seleccionado";
  }
  return (
    <>
      <NavBar />
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Selecciona fecha y hora</h2>

        <label className="block text-gray-700 mb-2">Fecha y hora del evento:</label>
        <DatePicker
          selected={fechaHora}
          onChange={(date) => {
            if (date >= new Date()) {
              setFechaHora(date)
            }
          }
          }
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
          salonList={salonList}
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
              <p><span className="font-semibold">Salón:</span> {getSalon()}</p>
              <p><span className="font-semibold">Paquete:</span> {getPackage()} </p>
              <p><span className="font-semibold">Precio total:</span> {calcularPrecio()}</p>
            </div>

            <button
              onClick={() => {
                alert("Evento agendado con éxito");
              }}
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
