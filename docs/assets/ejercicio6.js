import "./Header.js";
import { P as PanelEjercicio, r as renderEjercicio } from "./PanelEjercicio.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react.js";
function dosDigitos(numero) {
  return numero < 10 ? `0${numero}` : `${numero}`;
}
function formatearTiempo(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor(totalSegundos % 3600 / 60);
  const segundos = totalSegundos % 60;
  return `${dosDigitos(horas)}:${dosDigitos(minutos)}:${dosDigitos(segundos)}`;
}
function Ejercicio6() {
  const [segundos, setSegundos] = reactExports.useState(0);
  const [activo, setActivo] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!activo) {
      return void 0;
    }
    const intervalo = window.setInterval(() => {
      setSegundos((segundosActuales) => segundosActuales + 1);
    }, 1e3);
    return () => window.clearInterval(intervalo);
  }, [activo]);
  function reiniciar() {
    setActivo(false);
    setSegundos(0);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PanelEjercicio, { titulo: "Temporizador", descripcion: "Controla el temporizador con los tres botones.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timer", children: formatearTiempo(segundos) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "button-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActivo(true), children: "Iniciar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "secondary", type: "button", onClick: () => setActivo(false), children: "Pausar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "secondary", type: "button", onClick: reiniciar, children: "Reiniciar" })
    ] })
  ] });
}
renderEjercicio({ id: 6, titulo: "Temporizador" }, Ejercicio6);
