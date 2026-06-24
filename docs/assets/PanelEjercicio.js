import { c as clientExports, j as jsxRuntimeExports, r as reactExports } from "./react.js";
import { H as Header } from "./Header.js";
function renderEjercicio(ejercicio, ComponenteEjercicio) {
  clientExports.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-shell", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { ejercicio }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "page", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "back-link", href: "./index.html", children: "Volver al índice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ComponenteEjercicio, {})
      ] })
    ] }) })
  );
}
function PanelEjercicio({ children, descripcion, titulo }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "exercise-panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: titulo }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: descripcion }),
    children
  ] });
}
export {
  PanelEjercicio as P,
  renderEjercicio as r
};
