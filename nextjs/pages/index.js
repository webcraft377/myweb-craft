import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WebCraft Development</title>
        <meta name="description" content="WebCraft Development — Jasa pembuatan website profesional" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>WebCraft Development</h1>
        <p className={styles.description}>Website profesional untuk UMKM, company profile, landing page, dan toko online.</p>
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Konsultasi &rarr;</h3>
            <p>Hubungi kami untuk mulai proyek Anda.</p>
          </a>
          <a href="#" className={styles.card}>
            <h3>Portfolio &rarr;</h3>
            <p>Lihat beberapa proyek kami.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        © 2026 WebCraft Development
      </footer>
    </div>
  )
}
