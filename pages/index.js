import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "main dark" : "main"}>
      <Head>
        <title>PPDB Online Ponpes Condong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <Link href="/">
          <div className="link logo">
            Ponpes<span>Condong</span>
          </div>
        </Link>
        <nav className="navbar">
          <Link href="/">
            <div className="link">Informasi</div>
          </Link>
          <Link href="/">
            <div className="link">Registrasi</div>
          </Link>
          <Link href="/">
            <div className="link">Login</div>
          </Link>
        </nav>
        <div className="btn-theme" onClick={() => setDarkMode(!darkMode)}>
          <svg
            width="13"
            height="19"
            viewBox="0 0 13 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.399902"
              width="12.6"
              height="16.2"
              rx="6.3"
              fill="#E5E5E5"
            />
            <rect
              x="4"
              y="14.5"
              width="5.4"
              height="4.5"
              rx="2.25"
              fill="#E5E5E5"
            />
          </svg>
        </div>
        <div className="btn-menu">
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="23" height="3" rx="1.5" fill="#E5E5E5" />
            <rect x="9" y="7" width="14" height="3" rx="1.5" fill="#E5E5E5" />
            <rect x="4" y="15" width="19" height="3" rx="1.5" fill="#E5E5E5" />
          </svg>
        </div>
      </header>

      <div className="left">
        <div
          className="item"
          style={{ flexWrap: "nowrap", overflowX: "scroll" }}
        >
          {darkMode ? (
            <img className="item" src="/Dark Mode.jpg" alt="slider" />
          ) : (
            <img className="item" src="/Light Mode.jpg" alt="slider" />
          )}
          {darkMode ? (
            <img className="item" src="/Dark Mode.jpg" alt="slider" />
          ) : (
            <img className="item" src="/Light Mode.jpg" alt="slider" />
          )}
        </div>
        <div className="item treerow">
          <div className="item">
            Pendaftar
            <b className="text-right">10.000</b>
          </div>
          <div className="item">
            Mengisi Formulir
            <b className="text-right">8000</b>
          </div>
          <div className="item">
            Diterima
            <b className="text-right">3.000</b>
          </div>
        </div>

        <div className="item">
          <h1 className="item">Gelombang 1</h1>
          <p className="item">
            Pendaftaran dimulai pada tanggal 01 November 2020 s/d 31 Januari
            2021 Pelaksanaan tes seleksi dibagi tiga kelompok.
          </p>
          <div className="item">
            <ol className="list">
              <li>
                a) Kelompok I - 06 Desember 2020
                <br />
                Bagi peserta yang daftar dari tanggal 1 November - 30 November
                2020
              </li>
              <li>
                b) Kelompok II - 03 Januari 2021
                <br />
                Bagi peserta yang daftar dari tanggal 1 Desember - 27 Desember
                2020
              </li>
              <li>
                c) Kelompok III - 07 Februari 2021
                <br />
                Bagi peserta yang daftar dari tanggal 27 Desember - 31 Januari
                2021
              </li>
            </ol>
          </div>

          <p className="item">
            Tes seleksi akan dilaksanakan pukul 08.00 – 09.00 (tulis) dan 09.30
            – 12.00 (lisan) Ujian lisan dilaksanakan secara daring melalui
            WhatsApp Video Call. Ujian lisan dilaksanakan secara daring melalu
            aplikasi “ujian online pesantren condong” atau boleh mengunjungi
            website https://ujian.pesantren-condong.net/ Pengumuman kelulusan
            akan dilaksanakan secara online pada hari Minggu, 14 Februari 2021
            Daftar ulang bisa dilakukan mulai dari hari Minggu, 14 Februari 2021
            s/d 28 Februari 2021 Rapat walisantri akan dilaksanakan secara
            daring pada hari Minggu, 07 Maret 2021, pukul 08.00 s/d selesai
            (teknis akan diinformasikan sebelum pelaksanaan)
          </p>
        </div>

        <div className="item">
          <h1 className="item">Gelombang 2</h1>

          <p className="item">
            Pendaftaran dimulai pada tanggal 01 Februari 2020 s/d 20 April 2021
            Pelaksanaan tes seleksi dibagi dua kelompok.
          </p>

          <div className="item">
            <ol className="list">
              <li>
                a) Kelompok I – 07 Maret 2021
                <br />
                Bagi peserta yang daftar dari tanggal 01 Februari 2021 - 28
                Februari 2021
                <br />
                Pengumuman kelulusan akan dilaksanakan secara online pada hari
                Senin, 15 Maret 2021 Daftar ulang bisa dilakukan mulai dari hari
                Senin, 15 Maret 2021 s/d 31 Maret 2021
              </li>
              <li>
                b) Kelompok II – 25 April 2021
                <br />
                Bagi peserta yang daftar dari tanggal 1 Maret 2021 - 20 April
                2020
              </li>
            </ol>
          </div>

          <p className="item">
            Tes seleksi akan dilaksanakan pukul 08.00 – 09.00 (tulis) dan 09.30
            – 12.00 (lisan) Ujian lisan dilaksanakan secara daring melalui
            WhatsApp Video Call. Ujian lisan dilaksanakan secara daring melalu
            aplikasi “ujian online pesantren condong” atau boleh mengunjungi
            website https://ujian.pesantren-condong.net/ Pengumuman kelulusan
            akan dilaksanakan secara online pada hari Minggu, 02 Mei 2021 Daftar
            ulang bisa dilakukan mulai dari hari Minggu, 02 Mei 2021 s/d 23 Mei
            2021 Rapat walisantri akan dilaksanakan secara daring pada hari
            Minggu, 23 Mei 2021, pukul 08.00 s/d selesai (teknis akan
            diinformasikan sebelum pelaksanaan)
          </p>
        </div>
        <div className="item">
          <h1 className="item">Gelombang 3</h1>

          <p className="item">
            Dibuka apabila kuota santri masih tersedia Pengumuman kelulusan akan
            disiarkan lewat WA, website dan IG resmi pondok.
          </p>
        </div>
      </div>
      <div className="right" style={{ textAlign: "center" }}>
        <div className="item">
          <h3 className="item">Alur Pendaftaran</h3>
          <div className="item">1. Buat Akun PPDB Online</div>
          <div className="item">2. Bayar Biaya Pendaftaran</div>
          <div className="item">3. Konfirmasi Pembayaran</div>
          <div className="item">4. Mendapatkan ID dan PIN</div>
          <div className="item">5. Login Akun PPDB Online</div>
          <div className="item">6. Isi & Print Formulir PPDB</div>

          <div className="item">7. Mengikuti Tes Masuk</div>

          <div className="item">8. Lihat Hasil Penerimaan</div>

          <div className="item">9. Daftar Ulang & Setor Berkas</div>

          <div className="item">10. Membayar Biaya Sekolah</div>

          <div className="item">11. Mengikuti Pendidikan</div>
        </div>

        <div className="item">
          <h3 className="item">Contact :</h3>
          <div className="item">+62 ........</div>
          <div className="item">+62 ........</div>
        </div>
        <div className="item">
          <h3 className="item">Follow Kita di</h3>
          <div className="item">Instagram</div>
          <div className="item">Facebook</div>
          <div className="item">Twitter</div>
          <div className="item">Youtube</div>
        </div>
      </div>
    </div>
  );
}
