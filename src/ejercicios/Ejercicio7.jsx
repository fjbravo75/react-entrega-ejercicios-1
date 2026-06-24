import { useState } from "react";
import PanelEjercicio from "../components/PanelEjercicio.jsx";

const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

export default function Ejercicio7() {
  const [longitud, setLongitud] = useState("");
  const [mensaje, setMensaje] = useState("Contraseña: pendiente");
  const [hayError, setHayError] = useState(false);

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

  return (
    <PanelEjercicio
      titulo="Generador de contraseñas aleatorias"
      descripcion="Indica una longitud de 4 caracteres o más y genera una contraseña."
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="password-length">Longitud</label>
          <input
            id="password-length"
            type="number"
            min="4"
            placeholder="Ejemplo: 12"
            value={longitud}
            onChange={(event) => setLongitud(event.target.value)}
          />
        </div>
        <button type="button" onClick={generarContrasena}>
          Generar contraseña
        </button>
      </div>
      <p className={hayError ? "result message error" : "result"}>{mensaje}</p>
    </PanelEjercicio>
  );
}
