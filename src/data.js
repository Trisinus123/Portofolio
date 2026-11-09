// Ubah isi file ini kalau ada data baru. Tampilan akan ikut berubah otomatis.
export const profile = {
  logo: 'trisinusgulo',
  name: 'Trisinus Gulo',
  role: 'Full Stack Developer',
  company: '',
  companyUrl: '#',
  intro: 'Lulusan D4 Teknik Informatika dengan pengalaman 1 tahun membangun aplikasi web di PT PAL Indonesia dan AirNav Indonesia.',
  photo: `${import.meta.env.BASE_URL}foto.png`, 
  about: [
    'Saya lulusan D4 Teknik Informatika yang berminat di Full Stack Development. Saya terbiasa membangun frontend dan backend, merancang antarmuka, mengelola database, dan mengintegrasikan API dengan Laravel, React.js, PHP, JavaScript, dan MySQL.',
    'Saya teliti, bertanggung jawab, mudah berkolaborasi, dan cepat belajar. Saya siap berkontribusi sebagai Full Stack Developer.',
  ],
  email: 'trisinusgulo6@gmail.com',
  github: 'https://github.com/Trisinus123',
  linkedin: 'https://www.linkedin.com/in/trisinus-gulo',
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
export const projects = [
  { title: 'Dashboard Keselamatan Penerbangan', type: 'web', desc: 'Dashboard pelaporan data safety untuk divisi operasional AirNav, dengan grafik dan peta real-time dari laporan Excel dan Google Sheets.', stack: 'React.js, Laravel, MySQL, Google Sheets API', link: '', linkText: '' },
  { title: 'NavEvent', type: 'web', desc: 'Desain UI/UX platform manajemen acara internal AirNav: wireframe dan prototype di Figma.', stack: 'Figma', link: '', linkText: '' },
  { title: 'Sistem Informasi Kesehatan Bengkel PAL', type: 'web', desc: 'Sistem kesehatan personel dengan dashboard analitik, CRUD, middleware otorisasi, dan enkripsi AES-256 untuk dokumen rahasia.', stack: 'Laravel, MySQL', link: '', linkText: '' },
  { title: 'Website Lowongan Kerja UPA PKK', type: 'web', desc: 'Platform lowongan kerja dengan tiga peran (mahasiswa, perusahaan, admin), upload CV, verifikasi admin, dan notifikasi WhatsApp otomatis.', stack: 'Laravel, MySQL', link: GH, linkText: 'Lihat GitHub' },
  { title: 'Smart Door Lock', type: 'iot', desc: 'Sistem keamanan pintu dengan kamera dan PIN: IoT ESP32, REST API, website React, dan aplikasi Flutter. Di-deploy dengan CI/CD di Google Cloud.', stack: 'ESP32, MQTT, React.js, Flutter', link: GH, linkText: 'Lihat GitHub' },
]

export const education = [
  { title: 'D4 Teknik Informatika', place: 'Politeknik Negeri Malang, Agustus 2021 – Juli 2025', desc: 'IPK 3,41 dari 4,00.' },
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