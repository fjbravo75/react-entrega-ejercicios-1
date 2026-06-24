import { useEffect, useState } from "react";
import PanelEjercicio from "../components/PanelEjercicio.jsx";

const claveLocalStorage = "react_entrega_1_tareas";

function cargarTareasGuardadas() {
  const tareasGuardadas = window.localStorage.getItem(claveLocalStorage);

  if (tareasGuardadas === null) {
    return [];
  }

  try {
    return JSON.parse(tareasGuardadas);
  } catch {
    return [];
  }
}

export default function Ejercicio9() {
  const [textoTarea, setTextoTarea] = useState("");
  const [tareas, setTareas] = useState(cargarTareasGuardadas);
  const [mensaje, setMensaje] = useState("No hay tareas guardadas.");
  const [hayError, setHayError] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(claveLocalStorage, JSON.stringify(tareas));

    if (!hayError) {
      setMensaje(tareas.length === 0 ? "No hay tareas guardadas." : `Tareas guardadas: ${tareas.length}`);
    }
  }, [tareas, hayError]);

  function agregarTarea() {
    const textoLimpio = textoTarea.trim();

    if (textoLimpio === "") {
      setMensaje("Escribe una tarea antes de agregar.");
      setHayError(true);
      return;
    }

    setTareas([...tareas, { text: textoLimpio, completed: false }]);
    setTextoTarea("");
    setHayError(false);
  }

  function cambiarEstadoTarea(posicion) {
    const nuevasTareas = tareas.map((tarea, index) => {
      if (index === posicion) {
        return { ...tarea, completed: !tarea.completed };
      }

      return tarea;
    });

    setTareas(nuevasTareas);
    setHayError(false);
  }

  function limpiarCompletadas() {
    const tareasPendientes = tareas.filter((tarea) => !tarea.completed);
    setTareas(tareasPendientes);
    setHayError(false);
  }

  return (
    <PanelEjercicio
      titulo="Lista de tareas con localStorage"
      descripcion="Agrega tareas, márcalas como completadas y conserva los datos al recargar la página."
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="todo-text">Nueva tarea</label>
          <input
            id="todo-text"
            type="text"
            placeholder="Ejemplo: practicar localStorage"
            value={textoTarea}
            onChange={(event) => setTextoTarea(event.target.value)}
          />
        </div>
        <button type="button" onClick={agregarTarea}>
          Agregar tarea
        </button>
      </div>
      <ul className="item-list">
        {tareas.map((tarea, index) => (
          <li key={`${tarea.text}-${index}`}>
            <label className="todo-label">
              <input type="checkbox" checked={tarea.completed} onChange={() => cambiarEstadoTarea(index)} />
              <span className={tarea.completed ? "todo-text completed" : "todo-text"}>{tarea.text}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className={hayError ? "message error" : "message"}>{mensaje}</p>
      <div className="button-row">
        <button className="secondary" type="button" onClick={limpiarCompletadas}>
          Limpiar completadas
        </button>
      </div>
    </PanelEjercicio>
  );
}
