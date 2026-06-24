import { useEffect, useState } from "react";
import PanelEjercicio from "../components/PanelEjercicio.jsx";

function dosDigitos(numero) {
  return numero < 10 ? `0${numero}` : `${numero}`;
}

function formatearTiempo(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  return `${dosDigitos(horas)}:${dosDigitos(minutos)}:${dosDigitos(segundos)}`;
}

export default function Ejercicio6() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    if (!activo) {
      return undefined;
    }

    const intervalo = window.setInterval(() => {
      setSegundos((segundosActuales) => segundosActuales + 1);
    }, 1000);

    return () => window.clearInterval(intervalo);
  }, [activo]);

  function reiniciar() {
    setActivo(false);
    setSegundos(0);
  }

  return (
    <PanelEjercicio titulo="Temporizador" descripcion="Controla el temporizador con los tres botones.">
      <div className="timer">{formatearTiempo(segundos)}</div>
      <div className="button-row">
        <button type="button" onClick={() => setActivo(true)}>
          Iniciar
        </button>
        <button className="secondary" type="button" onClick={() => setActivo(false)}>
          Pausar
        </button>
        <button className="secondary" type="button" onClick={reiniciar}>
          Reiniciar
        </button>
      </div>
    </PanelEjercicio>
  );
}
