import { useState } from "react";
import PanelEjercicio from "../components/PanelEjercicio.jsx";

function contarCaracteres(texto) {
  let total = 0;

  for (let i = 0; i < texto.length; i += 1) {
    if (texto[i] !== " " && texto[i] !== "\n") {
      total += 1;
    }
  }

  return total;
}

function contarPalabras(texto) {
  const textoLimpio = texto.trim();

  if (textoLimpio === "") {
    return 0;
  }

  return textoLimpio.split(" ").filter((palabra) => palabra !== "").length;
}

export default function Ejercicio8() {
  const [texto, setTexto] = useState("");

  return (
    <PanelEjercicio
      titulo="Contador de palabras y caracteres"
      descripcion="Escribe un párrafo para ver los contadores actualizados en tiempo real."
    >
      <label htmlFor="text-counter">Texto</label>
      <textarea
        id="text-counter"
        placeholder="Escribe aquí tu texto"
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
      />
      <div className="result">
        <p>Caracteres sin espacios: {contarCaracteres(texto)}</p>
        <p>Palabras: {contarPalabras(texto)}</p>
      </div>
      <p className="small-note">Los espacios y saltos de línea no cuentan como caracteres.</p>
    </PanelEjercicio>
  );
}
