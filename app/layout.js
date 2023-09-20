import './globals.scss'

export const metadata = {
  title: 'Polla App',
  description: 'Polla de liga chilena'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
