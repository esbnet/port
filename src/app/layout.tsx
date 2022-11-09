import Footer from "components/Footer"
import { ReactNode } from "react"
import Header from "../components/Header"

import "../styles/global.css"

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
