import "./Header.js";
import { P as PanelEjercicio, r as renderEjercicio } from "./PanelEjercicio.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react.js";
function Ejercicio5() {
  const [primerNumero, setPrimerNumero] = reactExports.useState("");
  const [segundoNumero, setSegundoNumero] = reactExports.useState("");
  const [resultado, setResultado] = reactExports.useState("Resultado: pendiente");
  const [hayError, setHayError] = reactExports.useState(false);
  function mostrarResultado(mensaje, esError) {
    setResultado(mensaje);
    setHayError(esError);
  }
  function calcular(operacion) {
    if (primerNumero === "" || segundoNumero === "") {
      mostrarResultado("Introduce los dos números.", true);
      return;
    }
    const numero1 = Number(primerNumero);
    const numero2 = Number(segundoNumero);
    let total = 0;
    if (operacion === "sumar") {
      total = numero1 + numero2;
    } else if (operacion === "restar") {
      total = numero1 - numero2;
    } else if (operacion === "multiplicar") {
      total = numero1 * numero2;
    } else if (operacion === "dividir") {
      if (numero2 === 0) {
        mostrarResultado("No se puede dividir entre cero.", true);
        return;
      }
      total = numero1 / numero2;
    }
    mostrarResultado(`Resultado: ${total}`, false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    PanelEjercicio,
    {
      titulo: "Calculadora sencilla",
      descripcion: "Introduce dos números y elige la operación que quieres realizar.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "first-number", children: "Primer número" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "first-number",
                type: "number",
                step: "any",
                value: primerNumero,
                onChange: (event) => setPrimerNumero(event.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "second-number", children: "Segundo número" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "second-number",
                type: "number",
                step: "any",
                value: segundoNumero,
                onChange: (event) => setSegundoNumero(event.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "button-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => calcular("sumar"), children: "Sumar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => calcular("restar"), children: "Restar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => calcular("multiplicar"), children: "Multiplicar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => calcular("dividir"), children: "Dividir" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: hayError ? "result message error" : "result", children: resultado })
      ]
    }
  );
}
renderEjercicio({ id: 5, titulo: "Calculadora sencilla" }, Ejercicio5);
