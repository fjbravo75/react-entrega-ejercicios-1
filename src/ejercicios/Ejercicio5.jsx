import { useState } from "react";
import PanelEjercicio from "../components/PanelEjercicio.jsx";

export default function Ejercicio5() {
  const [primerNumero, setPrimerNumero] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");
  const [resultado, setResultado] = useState("Resultado: pendiente");
  const [hayError, setHayError] = useState(false);

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

  return (
    <PanelEjercicio
      titulo="Calculadora sencilla"
      descripcion="Introduce dos números y elige la operación que quieres realizar."
    >
      <div className="form-row">
        <div className="field">
          <label htmlFor="first-number">Primer número</label>
          <input
            id="first-number"
            type="number"
            step="any"
            value={primerNumero}
            onChange={(event) => setPrimerNumero(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="second-number">Segundo número</label>
          <input
            id="second-number"
            type="number"
            step="any"
            value={segundoNumero}
            onChange={(event) => setSegundoNumero(event.target.value)}
          />
        </div>
      </div>
      <div className="button-row">
        <button type="button" onClick={() => calcular("sumar")}>
          Sumar
        </button>
        <button type="button" onClick={() => calcular("restar")}>
          Restar
        </button>
        <button type="button" onClick={() => calcular("multiplicar")}>
          Multiplicar
        </button>
        <button type="button" onClick={() => calcular("dividir")}>
          Dividir
        </button>
      </div>
      <p className={hayError ? "result message error" : "result"}>{resultado}</p>
    </PanelEjercicio>
  );
}
