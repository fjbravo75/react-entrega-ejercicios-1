import "./Header.js";
import { P as PanelEjercicio, r as renderEjercicio } from "./PanelEjercicio.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react.js";
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
function Ejercicio9() {
  const [textoTarea, setTextoTarea] = reactExports.useState("");
  const [tareas, setTareas] = reactExports.useState(cargarTareasGuardadas);
  const [mensaje, setMensaje] = reactExports.useState("No hay tareas guardadas.");
  const [hayError, setHayError] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    PanelEjercicio,
    {
      titulo: "Lista de tareas con localStorage",
      descripcion: "Agrega tareas, márcalas como completadas y conserva los datos al recargar la página.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "todo-text", children: "Nueva tarea" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "todo-text",
                type: "text",
                placeholder: "Ejemplo: practicar localStorage",
                value: textoTarea,
                onChange: (event) => setTextoTarea(event.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: agregarTarea, children: "Agregar tarea" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "item-list", children: tareas.map((tarea, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "todo-label", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: tarea.completed, onChange: () => cambiarEstadoTarea(index) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: tarea.completed ? "todo-text completed" : "todo-text", children: tarea.text })
        ] }) }, `${tarea.text}-${index}`)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: hayError ? "message error" : "message", children: mensaje }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "button-row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "secondary", type: "button", onClick: limpiarCompletadas, children: "Limpiar completadas" }) })
      ]
    }
  );
}
renderEjercicio({ id: 9, titulo: "Tareas con localStorage" }, Ejercicio9);
