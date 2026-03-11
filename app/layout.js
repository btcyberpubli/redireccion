import './globals.css'

export const metadata = {
  title: 'WhatsApp Redirect',
  description: 'Redirect a WhatsApp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
