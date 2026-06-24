import Header from "./components/Header.jsx";
import IndiceEjercicios from "./components/IndiceEjercicios.jsx";
import ejercicios from "./datosEjercicios.js";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page">
        <IndiceEjercicios ejercicios={ejercicios} />
      </main>
    </div>
  );
}
