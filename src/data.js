// Ubah isi file ini kalau ada data baru. Tampilan akan ikut berubah otomatis.
const BASE = import.meta.env.BASE_URL
const img = (name) => `${BASE}projects/${name}` // gambar proyek ada di public/projects

export const profile = {
  logo: 'trisinusgulo',
  name: 'Trisinus Gulo',
  role: 'Full Stack Developer',
  company: '',
  companyUrl: '#',
  intro: 'Lulusan D4 Teknik Informatika dengan pengalaman 1 tahun membangun aplikasi web di PT PAL Indonesia dan AirNav Indonesia.',
  photo: `${BASE}foto.png`,
  about: [
    'Saya lulusan D4 Teknik Informatika yang berminat di Full Stack Development. Saya terbiasa membangun frontend dan backend, merancang antarmuka, mengelola database, dan mengintegrasikan API dengan Laravel, React.js, PHP, JavaScript, dan MySQL.',
    'Saya teliti, bertanggung jawab, mudah berkolaborasi, dan cepat belajar. Saya siap berkontribusi sebagai Full Stack Developer.',
  ],
  email: 'trisinusgulo6@gmail.com',
  github: 'https://github.com/Trisinus123',
  linkedin: 'https://www.linkedin.com/in/trisinus-gulo',
  instagram: 'https://www.instagram.com/trisinus_gln/',
}

export const nav = [
  ['beranda', 'Beranda'], ['tentang', 'Tentang Saya'], ['project', 'Project'],
  ['pendidikan', 'Pendidikan'], ['sertifikasi', 'Sertifikasi'], ['pengalaman', 'Pengalaman'], ['kontak', 'Kontak'],
]

export const skills = [
  'PHP', 'JavaScript', 'TypeScript', 'Java', 'Python', 'Laravel', 'React.js', 'Angular',
  'Tailwind CSS', 'Bootstrap', 'MySQL', 'REST API', 'Flutter', 'ESP32 / MQTT',
  'Git', 'Postman', 'Figma', 'Google Cloud',
]

export const filters = [['semua', 'Semua'], ['web', 'Web'], ['iot', 'IoT & Mobile']]

const GH = 'https://github.com/Trisinus123'

// image = nama file di folder public/projects. link kosong = tombol tidak muncul.
export const projects = [
  {
    title: 'Operational Safety Dashboard',
    type: 'web',
    image: img('safety-login.jpg'),
    desc: 'Aplikasi web yang memvisualisasikan data Operational Safety internal AirNav Indonesia, membantu pemangku kepentingan memantau tren keselamatan dan mengambil keputusan berbasis data. Dilengkapi grafik, tabel, dan peta interaktif, serta ringkasan 10.036 data kejadian dari 28 lokasi dan 63 kategori.',
    link: '',
    linkText: '',
  },
  {
    title: 'CV Omega Art Inventory System',
    type: 'web',
    image: img('omega-art.jpg'),
    desc: 'Aplikasi web untuk mengelola sistem inventaris CV Omega Art. Mengatur dan memantau barang masuk dan keluar untuk mendukung keputusan pengadaan dan penjualan, dengan akses berbasis peran untuk Admin, Staf Gudang, dan Estimator.',
    link: '',
    linkText: '',
  },
  {
    title: 'Smart Door Lock',
    type: 'iot',
    image: img('doorlock.jpg'),
    desc: 'Kunci pintu berbasis Internet of Things (IoT). PIN pintu dikelola jarak jauh lewat website admin, dengan manajemen pintu dan akses pengguna, log aktivitas dengan pencarian dan filter tanggal, serta dialog konfirmasi sebelum data diperbarui.',
    link: GH,
    linkText: 'Lihat GitHub',
  },
  {
    title: 'Website Lowongan Kerja UPA PKK',
    type: 'web',
    image: img('upa-login.jpg'),
    desc: 'Platform informasi lowongan kerja UPA PKK Politeknik Negeri Malang dengan tiga peran: mahasiswa, perusahaan, dan admin. Mencakup alur lamaran dengan upload CV, verifikasi lowongan oleh admin, dan notifikasi WhatsApp otomatis.',
    link: GH,
    linkText: 'Lihat GitHub',
  },
]

export const education = [
  {
    title: 'D4 Teknik Informatika',
    place: 'Politeknik Negeri Malang, Agustus 2021 – Juli 2025',
    desc: 'IPK 3,41 dari 4,00.',
    logo: `${BASE}logos/polinema.png`,
  },
]

// Isi link dengan alamat sertifikat/kredensial kalau ada. Kosong = tombol "Lihat" tidak muncul.
export const certificates = [
  { title: 'AI Basics', issuer: 'Dicoding Indonesia', year: '2024', link: '' },
  { title: 'JavaScript Programming Basics', issuer: 'Dicoding Indonesia', year: '2024', link: '' },
  { title: 'Web Front-End Development', issuer: 'Dicoding Indonesia', year: '2024', link: '' },
  { title: 'Web Programming', issuer: 'Dicoding Indonesia', year: '2024', link: '' },
  { title: 'Sertifikat Magang Web Developer', issuer: 'PT PAL Indonesia', year: '2024', link: '' },
  { title: 'Guide to Learn Python with AI', issuer: 'DQLab', year: '2023', link: '' },
  { title: 'Data Analysis Python', issuer: 'DQLab', year: '2023', link: '' },
  { title: 'Table Top Exercise Cyber Incident Perum LPPNPI', issuer: 'AirNav Indonesia', year: '2026', link: '' },
]

export const experience = [
  { title: 'Full Stack Developer (Magang), AirNav Indonesia', date: 'Oktober 2025 – April 2026', desc: 'Membangun dashboard pelaporan data keselamatan penerbangan dengan React.js, Laravel, dan MySQL. Mendesain UI/UX NavEvent di Figma, lalu men-deploy aplikasi ke Google Cloud (Compute Engine) dengan Nginx, PHP-FPM, dan MariaDB.' },
  { title: 'Web Developer (Magang), PT PAL Indonesia', date: 'Agustus 2024 – Desember 2024', desc: 'Mengembangkan sistem informasi kesehatan Bengkel PAL dengan Laravel. Merancang skema database (ERD, CDM, PDM), membuat autentikasi dan otorisasi, serta enkripsi AES-256.' },
  { title: 'KDO Division Expert Staff, Formation Polynema', date: '2021 – 2023', desc: 'Membantu kepala divisi menjalankan program kerja dan membimbing pengurus junior.' },
]

export const posts = [] 