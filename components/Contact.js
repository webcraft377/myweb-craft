export default function Contact(){
  return (
    <section id="contact" className="section container contact-section">
      <h2>Kontak</h2>
      <p>Siap membangun website profesional Anda? Hubungi kami untuk konsultasi gratis atau kirim pesan lewat formulir di bawah.</p>
      <form className="contact-form" action="https://formsubmit.co/info@webcraftdevelopment.com" method="POST">
        <input type="hidden" name="_subject" value="Permintaan Konsultasi WebCraft" />
        <input type="hidden" name="_next" value="https://myweb-craft.co.id/#contact" />
        <input type="hidden" name="_captcha" value="false" />
        <label>Nama<input type="text" name="name" required placeholder="Nama Anda"/></label>
        <label>Email<input type="email" name="email" required placeholder="email@domain.com"/></label>
        <label>Pesan<textarea name="message" rows="5" required placeholder="Jelaskan kebutuhan website Anda..."></textarea></label>
        <div className="form-actions"><button className="btn btn-primary" type="submit">Kirim Pesan</button><a className="btn btn-outline" href="https://wa.me/62895405049964?text=Saya%20ingin%20konsultasi%20website">Atau Konsultasi via WhatsApp</a></div>
      </form>
      <ul className="contact-list"><li>📞 WhatsApp: <a href="https://wa.me/62895405049964">0895-4050-49964</a></li><li>📧 Email: <a href="mailto:info@webcraftdevelopment.com">info@webcraftdevelopment.com</a></li></ul>
    </section>
  )
}
