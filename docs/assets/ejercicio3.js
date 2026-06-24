import "./Header.js";
import { P as PanelEjercicio, r as renderEjercicio } from "./PanelEjercicio.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react.js";
function Ejercicio3() {
  const [texto, setTexto] = reactExports.useState("");
  const [elementos, setElementos] = reactExports.useState([]);
  const [mensaje, setMensaje] = reactExports.useState("La lista está vacía.");
  const [hayError, setHayError] = reactExports.useState(false);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    PanelEjercicio,
    {
      titulo: "Lista dinámica",
      descripcion: "Escribe un elemento, agrégalo a la lista y bórralo cuando quieras.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "new-item", children: "Nuevo elemento" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "new-item",
                type: "text",
                placeholder: "Ejemplo: repasar eventos",
                value: texto,
                onChange: (event) => setTexto(event.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: agregarElemento, children: "Agregar" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: hayError ? "message error" : "message", children: mensaje }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "item-list", children: elementos.map((elemento, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: elemento }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => eliminarElemento(index), children: "Eliminar" })
        ] }, `${elemento}-${index}`)) })
      ]
    }
  );
}
renderEjercicio({ id: 3, titulo: "Lista dinámica" }, Ejercicio3);
