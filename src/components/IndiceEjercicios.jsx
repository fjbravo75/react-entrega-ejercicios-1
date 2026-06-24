export default function IndiceEjercicios({ ejercicios }) {
  return (
    <section className="exercise-grid" aria-label="Índice de ejercicios">
      {ejercicios.map((ejercicio) => (
        <a
          className="exercise-card"
          href={ejercicio.url}
          key={ejercicio.id}
        >
          <span>Ejercicio {ejercicio.id}</span>
          <strong>{ejercicio.titulo}</strong>
          <p>{ejercicio.descripcion}</p>
        </a>
      ))}
    </section>
  );
}
