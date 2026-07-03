export default function Portfolio(){
  return (
    <section id="portfolio" className="section container">
      <h2>Portfolio</h2>
      <p className="muted">Beberapa proyek yang telah kami kerjakan.</p>
      <div className="grid portfolio-grid">
        <figure className="portfolio-item">
          <img src="/assets/portfolio/indoprint-screenshot.svg" alt="Indoprint screenshot"/>
          <figcaption>1) Indoprint — Website Company Profile (Screenshot provided)</figcaption>
        </figure>
        <figure className="portfolio-item">
          <img src="/assets/portfolio/sepulang-screenshot.svg" alt="Sepulang screenshot"/>
          <figcaption>2) Sepulang — Landing Page (Screenshot provided)</figcaption>
        </figure>
      </div>
    </section>
  )
}
