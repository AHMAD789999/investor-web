import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
export const metadata = {
  title: 'CapitalOven',
  description: 'Venture Capital Firm Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-black text-white antialiased'>
      <body className='bg-black text-white font-sans antialiased'>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
