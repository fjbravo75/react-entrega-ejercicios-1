export default function PanelEjercicio({ children, descripcion, titulo }) {
  return (
    <section className="exercise-panel">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      {children}
    </section>
  );
}
