"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import Providers from "./Providers";
import store from "./redux/store/store";
import NavBar from "./componentes/NavBar/NavBar";
import Footer from "./componentes/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "ROFE Ferretería",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Provider store={store}>
          <Providers>
            {children}
            <Footer />
          </Providers>
        </Provider>
      </body>
    </html>
  );
}

