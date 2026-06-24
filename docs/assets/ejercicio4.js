import "./Header.js";
import { P as PanelEjercicio, r as renderEjercicio } from "./PanelEjercicio.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react.js";
const animales = ["Perro", "Gato", "Pez", "Caballo", "Canario", "Conejo"];
function Ejercicio4() {
  const [busqueda, setBusqueda] = reactExports.useState("");
  const animalesFiltrados = animales.filter((animal) => animal.toLowerCase().includes(busqueda.toLowerCase()));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    PanelEjercicio,
    {
      titulo: "Filtro de búsqueda en tiempo real",
      descripcion: "Escribe en el campo para mostrar solo los elementos que contienen ese texto.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "search", children: "Buscar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "search",
            type: "text",
            placeholder: "Prueba con Ga",
            value: busqueda,
            onChange: (event) => setBusqueda(event.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "item-list", children: animalesFiltrados.map((animal) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: animal }, animal)) })
      ]
    }
  );
}
renderEjercicio({ id: 4, titulo: "Filtro de búsqueda" }, Ejercicio4);
