import "./Header.js";
import { P as PanelEjercicio, r as renderEjercicio } from "./PanelEjercicio.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react.js";
function obtenerColorAleatorio() {
  const rojo = Math.floor(Math.random() * 256);
  const verde = Math.floor(Math.random() * 256);
  const azul = Math.floor(Math.random() * 256);
  return `rgb(${rojo}, ${verde}, ${azul})`;
}
function Ejercicio1() {
  const [color, setColor] = reactExports.useState("sin cambiar");
  reactExports.useEffect(() => {
    document.body.style.backgroundColor = color === "sin cambiar" ? "#eef3f8" : color;
    return () => {
      document.body.style.backgroundColor = "#eef3f8";
    };
  }, [color]);
  function cambiarColor() {
    setColor(obtenerColorAleatorio());
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    PanelEjercicio,
    {
      titulo: "Cambiador de color de fondo",
      descripcion: "Pulsa el botón para cambiar el color de fondo de la página de forma aleatoria.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "controls", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: cambiarColor, children: "Cambiar color" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "result", children: [
          "Color actual: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: color })
        ] })
      ]
    }
  );
}
renderEjercicio({ id: 1, titulo: "Cambiador de color" }, Ejercicio1);
