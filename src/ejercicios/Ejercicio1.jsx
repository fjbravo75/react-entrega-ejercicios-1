import { useEffect, useState } from "react";
import PanelEjercicio from "../components/PanelEjercicio.jsx";

function obtenerColorAleatorio() {
  const rojo = Math.floor(Math.random() * 256);
  const verde = Math.floor(Math.random() * 256);
  const azul = Math.floor(Math.random() * 256);

  return `rgb(${rojo}, ${verde}, ${azul})`;
}

export default function Ejercicio1() {
  const [color, setColor] = useState("sin cambiar");

  useEffect(() => {
    document.body.style.backgroundColor = color === "sin cambiar" ? "#eef3f8" : color;

    return () => {
      document.body.style.backgroundColor = "#eef3f8";
    };
  }, [color]);

  function cambiarColor() {
    setColor(obtenerColorAleatorio());
  }

  return (
    <PanelEjercicio
      titulo="Cambiador de color de fondo"
      descripcion="Pulsa el botón para cambiar el color de fondo de la página de forma aleatoria."
    >
      <div className="controls">
        <button type="button" onClick={cambiarColor}>
          Cambiar color
        </button>
      </div>
      <p className="result">
        Color actual: <strong>{color}</strong>
      </p>
    </PanelEjercicio>
  );
}
