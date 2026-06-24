import { useState } from "react";
import PanelEjercicio from "../components/PanelEjercicio.jsx";

export default function Ejercicio3() {
  const [texto, setTexto] = useState("");
  const [elementos, setElementos] = useState([]);
  const [mensaje, setMensaje] = useState("La lista está vacía.");
  const [hayError, setHayError] = useState(false);

  function agregarElemento() {
    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
      setMensaje("Escribe un texto antes de agregar.");
      setHayError(true);
      return;
    }

    const nuevaLista = [...elementos, textoLimpio];
    setElementos(nuevaLista);
    setTexto("");
    setMensaje(`Elementos en la lista: ${nuevaLista.length}`);
    setHayError(false);
  }

  function eliminarElemento(posicion) {
    const nuevaLista = elementos.filter((_, index) => index !== posicion);
    setElementos(nuevaLista);
    setMensaje(nuevaLista.length === 0 ? "La lista está vacía." : `Elementos en la lista: ${nuevaLista.length}`);
    setHayError(false);
  }

  return (
    <PanelEjercicio
      titulo="Lista dinámica"
      descripcion="Escribe un elemento, agrégalo a la lista y bórralo cuando quieras."
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="new-item">Nuevo elemento</label>
          <input
            id="new-item"
            type="text"
            placeholder="Ejemplo: repasar eventos"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
          />
        </div>
        <button type="button" onClick={agregarElemento}>
          Agregar
        </button>
      </div>
      <p className={hayError ? "message error" : "message"}>{mensaje}</p>
      <ul className="item-list">
        {elementos.map((elemento, index) => (
          <li key={`${elemento}-${index}`}>
            <span>{elemento}</span>
            <button type="button" onClick={() => eliminarElemento(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </PanelEjercicio>
  );
}
