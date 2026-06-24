export default function Header({ ejercicio }) {
  return (
    <header className="site-header">
      <h1>{ejercicio ? `Ejercicio ${ejercicio.id}` : "Entrega React - Ejercicios 1"}</h1>
      <p>{ejercicio ? ejercicio.titulo : "Página inicial con los nueve ejercicios resueltos con React."}</p>
    </header>
  );
}
