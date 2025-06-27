import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'CapitalOven',
  description: 'Venture Capital Firm Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
