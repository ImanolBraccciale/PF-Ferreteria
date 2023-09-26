"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const inter = Inter({ subsets: ["latin"] });

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Desactivar Modo Oscuro" : "Activar Modo Oscuro"}
    </button>
  );
};

export const metadata = {
  title: "ROFE Ferretería",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Provider store={store}>
        <body className={inter.className}>
          <DarkModeButton />
          {children}
        </body>
      </Provider>
    </html>
  );
}
