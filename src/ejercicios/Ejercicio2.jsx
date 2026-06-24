import { useState } from "react";
import PanelEjercicio from "../components/PanelEjercicio.jsx";

export default function Ejercicio2() {
  const [clics, setClics] = useState(0);

  function contarClic() {
    setClics(clics + 1);
  }

  return (
    <PanelEjercicio titulo="Contador de clics" descripcion="Cada pulsación actualiza el contador total.">
      <div className="controls">
        <button type="button" onClick={contarClic}>
          Contar clics
        </button>
      </div>
      <p className="counter-box">Clics: {clics}</p>
    </PanelEjercicio>
  );
}
