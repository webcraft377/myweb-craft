import Link from 'next/link'
export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand"><img src="/assets/logo.svg" alt="WebCraft Development" className="logo"/></Link>
        <nav className="nav" aria-label="Main navigation">
          <a href="#services">Layanan</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Paket</a>
          <a href="#contact">Kontak</a>
        </nav>
        <div className="actions">
          <a className="btn btn-ghost" href="#contact">Konsultasi Gratis</a>
          <a className="btn btn-primary" id="whatsapp-btn" href="https://wa.me/62895405049964?text=Saya%20ingin%20konsultasi%20website">Hubungi via WhatsApp</a>
        </div>
        <button className="nav-toggle" aria-label="Toggle navigation">☰</button>
      </div>
    </header>
  )
}
