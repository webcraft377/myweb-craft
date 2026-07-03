export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1>Website Profesional yang Membantu Bisnis Anda Tumbuh</h1>
          <p className="lead">Bangun kepercayaan pelanggan melalui website modern, cepat, dan dirancang sesuai kebutuhan bisnis Anda — dari UMKM hingga toko online.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="https://wa.me/62895405049964?text=Saya%20ingin%20konsultasi%20website">Konsultasi Gratis</a>
            <a className="btn btn-outline" href="#portfolio">Lihat Portfolio</a>
          </div>
          <ul className="benefits">
            <li>Desain Modern & Responsif</li>
            <li>SEO Friendly</li>
            <li>Loading Cepat</li>
            <li>Mobile Friendly</li>
            <li>Gratis Konsultasi</li>
          </ul>
        </div>
        <div className="hero-media">
          <img src="/assets/portfolio/indoprint-screenshot.svg" alt="Contoh proyek Indoprint"/>
        </div>
      </div>
    </section>
  )
}
