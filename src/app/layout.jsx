"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import store from './redux/store/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ROFE Ferretería'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Provider store={store}>
        <body className={inter.className}>
          {children}
        </body>
      </Provider>
    </html >
  )
}
