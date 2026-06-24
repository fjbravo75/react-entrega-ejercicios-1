import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";

export default function renderEjercicio(ejercicio, ComponenteEjercicio) {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <div className="app-shell">
        <Header ejercicio={ejercicio} />
        <main className="page">
          <a className="back-link" href="./index.html">
            Volver al índice
          </a>
          <ComponenteEjercicio />
        </main>
      </div>
    </StrictMode>
  );
}
