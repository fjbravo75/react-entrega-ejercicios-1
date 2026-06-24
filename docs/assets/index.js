import { H as Header } from "./Header.js";
import { j as jsxRuntimeExports, c as clientExports, r as reactExports } from "./react.js";
function IndiceEjercicios({ ejercicios: ejercicios2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "exercise-grid", "aria-label": "Índice de ejercicios", children: ejercicios2.map((ejercicio) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      className: "exercise-card",
      href: ejercicio.url,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Ejercicio ",
          ejercicio.id
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ejercicio.titulo }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: ejercicio.descripcion })
      ]
    },
    ejercicio.id
  )) });
}
const ejercicios = [
  {
    id: 1,
    titulo: "Cambiador de color",
    descripcion: "Cambia el color de fondo con un botón y un color aleatorio.",
    url: "./ejercicio-1.html"
  },
  {
    id: 2,
    titulo: "Contador de clics",
    descripcion: "Cuenta y muestra el número total de clics realizados.",
    url: "./ejercicio-2.html"
  },
  {
    id: 3,
    titulo: "Lista dinámica",
    descripcion: "Agrega elementos a una lista y permite eliminarlos.",
    url: "./ejercicio-3.html"
  },
  {
    id: 4,
    titulo: "Filtro de búsqueda",
    descripcion: "Filtra una lista en tiempo real según el texto escrito.",
    url: "./ejercicio-4.html"
  },
  {
    id: 5,
    titulo: "Calculadora sencilla",
    descripcion: "Realiza suma, resta, multiplicación y división con validación.",
    url: "./ejercicio-5.html"
  },
  {
    id: 6,
    titulo: "Temporizador",
    descripcion: "Controla un temporizador con inicio, pausa y reinicio.",
    url: "./ejercicio-6.html"
  },
  {
    id: 7,
    titulo: "Generador de contraseñas",
    descripcion: "Genera una contraseña aleatoria a partir de una longitud indicada.",
    url: "./ejercicio-7.html"
  },
  {
    id: 8,
    titulo: "Contador de palabras",
    descripcion: "Cuenta caracteres y palabras mientras el usuario escribe.",
    url: "./ejercicio-8.html"
  },
  {
    id: 9,
    titulo: "Tareas con localStorage",
    descripcion: "Guarda tareas y su estado para conservarlas al recargar.",
    url: "./ejercicio-9.html"
  }
];
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-shell", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "page", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IndiceEjercicios, { ejercicios }) })
  ] });
}
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
