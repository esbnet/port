import { ReactNode } from 'react'
import Header from '../components/Header'
import '../styles/globals.css'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}