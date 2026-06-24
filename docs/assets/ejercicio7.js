import "./Header.js";
import { P as PanelEjercicio, r as renderEjercicio } from "./PanelEjercicio.js";
import { r as reactExports, j as jsxRuntimeExports } from "./react.js";
const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
function Ejercicio7() {
  const [longitud, setLongitud] = reactExports.useState("");
  const [mensaje, setMensaje] = reactExports.useState("Contraseña: pendiente");
  const [hayError, setHayError] = reactExports.useState(false);
  function generarContrasena() {
    const totalCaracteres = Number(longitud);
    if (longitud === "" || totalCaracteres < 4) {
      setMensaje("La longitud debe ser mayor o igual que 4.");
      setHayError(true);
      return;
    }
    let contrasena = "";
    for (let i = 0; i < totalCaracteres; i += 1) {
      const posicion = Math.floor(Math.random() * caracteres.length);
      contrasena += caracteres.charAt(posicion);
    }
    setMensaje(`Contraseña: ${contrasena}`);
    setHayError(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    PanelEjercicio,
    {
      titulo: "Generador de contraseñas aleatorias",
      descripcion: "Indica una longitud de 4 caracteres o más y genera una contraseña.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password-length", children: "Longitud" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "password-length",
                type: "number",
                min: "4",
                placeholder: "Ejemplo: 12",
                value: longitud,
                onChange: (event) => setLongitud(event.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: generarContrasena, children: "Generar contraseña" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: hayError ? "result message error" : "result", children: mensaje })
      ]
    }
  );
}
renderEjercicio({ id: 7, titulo: "Generador de contraseñas" }, Ejercicio7);
