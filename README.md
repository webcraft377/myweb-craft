/* Updated README: note about uploaded screenshots, next steps */
# WebCraft Development

Website Profesional yang Membantu Bisnis Anda Tumbuh

Perubahan terbaru di repo:

- Menambahkan dan mempersiapkan screenshot portfolio nyata. Tempat file yang digunakan di situs:
  - assets/portfolio/indoprint-real.jpg
  - assets/portfolio/sepulang-real.jpg

  CATATAN: Silakan unggah file gambar asli ke folder tersebut dengan nama yang sama. Saya telah menyiapkan referensi di index.html; jika Anda mengupload file PNG/JPG, saya akan mengoptimasi dan membuat thumbnail.

- Menambahkan file CNAME dengan placeholder `REPLACE_WITH_YOUR_DOMAIN`. Jika Anda ingin domain kustom, ganti isinya dengan domain Anda (mis. example.com) dan ikuti instruksi DNS di bawah.

- Menambahkan starter Next.js di folder `nextjs/` untuk kemampuan dinamis dan pengembangan lebih lanjut.

Cara mengganti screenshot dengan gambar asli (langkah cepat):
1. Siapkan file gambar dengan ukuran rekomendasi 1200×630 px (untuk OG) — format JPG atau WebP.
2. Upload ke folder `assets/portfolio/` dan beri nama `indoprint-real.jpg` dan `sepulang-real.jpg`.
3. (Opsional) Saya bisa mengoptimasi gambar dan menambahkan atribut `srcset` jika Anda mau.

Domain kustom (GitHub Pages + HTTPS):
1. Ganti isi file CNAME dengan domain Anda, mis. `example.com`, lalu commit.
2. Di provider domain, tambahkan A records berikut (untuk apex domain):
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
   Atau buat CNAME untuk subdomain (www) yang mengarah ke `webcraft377.github.io`.
3. Di GitHub → Settings → Pages, pastikan branch `main` dan folder `/` dipilih.
4. Setelah DNS dipropagasi, GitHub Pages akan menerbitkan sertifikat HTTPS otomatis.

Next steps saya bisa lakukan:
- Upload gambar yang Anda kirim (saya akan mengoptimasi dan commit) — jika setuju, saya akan ambil file yang Anda lampirkan pada pesan sebelumnya.
- Ganti CNAME dengan domain Anda dan validasi DNS.
- Lengkapi Next.js starter supaya mencerminkan seluruh halaman statis (konversi semua komponen).

