import { useState } from "react";
import PanelEjercicio from "../components/PanelEjercicio.jsx";

const animales = ["Perro", "Gato", "Pez", "Caballo", "Canario", "Conejo"];

export default function Ejercicio4() {
  const [busqueda, setBusqueda] = useState("");
  const animalesFiltrados = animales.filter((animal) => animal.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <PanelEjercicio
      titulo="Filtro de búsqueda en tiempo real"
      descripcion="Escribe en el campo para mostrar solo los elementos que contienen ese texto."
    >
      <label htmlFor="search">Buscar</label>
      <input
        id="search"
        type="text"
        placeholder="Prueba con Ga"
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />
      <ul className="item-list">
        {animalesFiltrados.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </PanelEjercicio>
  );
}
