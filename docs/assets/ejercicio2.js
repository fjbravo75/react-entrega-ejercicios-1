import "./Header.js";
import { P as PanelEjercicio, r as renderEjercicio } from "./PanelEjercicio.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react.js";
function Ejercicio2() {
  const [clics, setClics] = reactExports.useState(0);
  function contarClic() {
    setClics(clics + 1);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PanelEjercicio, { titulo: "Contador de clics", descripcion: "Cada pulsación actualiza el contador total.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "controls", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: contarClic, children: "Contar clics" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "counter-box", children: [
      "Clics: ",
      clics
    ] })
  ] });
}
renderEjercicio({ id: 2, titulo: "Contador de clics" }, Ejercicio2);
