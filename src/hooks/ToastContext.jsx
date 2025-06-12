import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  // Duración total del toast (visible + animación de salida)
  const DURATION = 2000; // ms
  const ANIMATION = 400; // ms (debe coincidir con el CSS)

  function removeToast(id) {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, visible: false } : toast
      )
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, ANIMATION);
  }

  function addToast(message) {
    const id = generateId();
    setToasts((prev) => [...prev, { id, message, visible: true }]);
    setTimeout(() => removeToast(id), DURATION);
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "flex-end",
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`toast-anim${
              toast.visible ? " toast-in" : " toast-out"
            }`}
            style={{
              background: "#a0522d",
              color: "#fff",
              padding: "16px 24px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              minWidth: "220px",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
              opacity: toast.visible ? 1 : 0,
              transform: toast.visible ? "translateX(0)" : "translateX(120%)",
            }}
          >
            <span>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "1.2rem",
                cursor: "pointer",
                marginLeft: "auto",
              }}
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <style>
        {`
        .toast-anim {
          will-change: opacity, transform;
        }
        .toast-in {
          opacity: 1;
          transform: translateX(0);
        }
        .toast-out {
          opacity: 0;
          transform: translateX(120%);
        }
        `}
      </style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}