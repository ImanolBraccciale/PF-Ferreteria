import NavBar from './componentes/NavBar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ROFE Ferretería'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Providers>
        <body className={inter.className}><NavBar />{children}</body>
      </Providers>
    </html>
  )
}
