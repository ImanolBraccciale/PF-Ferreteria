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

// export const Providers = ({ children }) => {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return <> {children}</>;

//   return <ThemeProvider attribute="class">{children}</ThemeProvider>;
// };

// const inter = Inter({ subsets: ["latin"] });

//

// export default function RootLayout({ children }) {
//   return (
//     <html lang="es">
//       <Provider store={store}>
//         <body className={inter.className}>
//           <Providers>
//             <NavBar />
//             {children}
//             <Footer />
//           </Providers>
//         </body>
//       </Provider>
//     </html>
//   );
// }
