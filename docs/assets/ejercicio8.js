import "./Header.js";
import { P as PanelEjercicio, r as renderEjercicio } from "./PanelEjercicio.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react.js";
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
function Ejercicio8() {
  const [texto, setTexto] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    PanelEjercicio,
    {
      titulo: "Contador de palabras y caracteres",
      descripcion: "Escribe un párrafo para ver los contadores actualizados en tiempo real.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "text-counter", children: "Texto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            id: "text-counter",
            placeholder: "Escribe aquí tu texto",
            value: texto,
            onChange: (event) => setTexto(event.target.value)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "result", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Caracteres sin espacios: ",
            contarCaracteres(texto)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Palabras: ",
            contarPalabras(texto)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "small-note", children: "Los espacios y saltos de línea no cuentan como caracteres." })
      ]
    }
  );
}
renderEjercicio({ id: 8, titulo: "Contador de palabras" }, Ejercicio8);
