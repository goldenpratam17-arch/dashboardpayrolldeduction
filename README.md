# SAP Express — Payroll Deduction Control System

> **Sistem Manajemen & Kontrol Potongan Gaji Karyawan Berbasis Hierarki Prioritas, Pelimpahan Beban Cabang Hybrid, dan Rekonsiliasi Payroll Tertutup (*Closed-Loop HR*).**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![LocalStorage](https://img.shields.io/badge/Storage-LocalStorage-blueviolet?style=for-the-badge)

---

## 📌 Ringkasan Sistem

Dashboard ini dirancang khusus untuk memfasilitasi kebutuhan operasional **SAP Express** dalam mengelola, memantau, dan mengeksekusi pemotongan gaji akibat klaim operasional (*Fraud COD, Paket Hilang/Rusak CX, Selisih Kas Treasury, Audit Operasional Controller, Pelanggaran SOP QSE, dan Pinjaman Koperasi*).

Sistem ini memisahkan secara tegas mekanisme pemrosesan antara **Karyawan AKTIF** (menjaga privasi gaji 100% via antrean cut-off bulanan) dan **Karyawan RESIGN** (alokasi instan dari hak clearance akhir & skema pelimpahan beban ke cabang).

---

## 🚀 Fitur-Fitur Utama

### 1. Hierarki Prioritas Resmi SAP Express
Pemotongan gaji kurir resign dilakukan secara berjenjang dan otomatis mengikuti urutan prioritas resmi:
$$\text{1. COD} \longrightarrow \text{2. CX} \longrightarrow \text{3. Treasury} \longrightarrow \text{4. Controller} \longrightarrow \text{5. QSE} \longrightarrow \text{6. Koperasi}$$
* **Prinsip FIFO:** Pengajuan dalam divisi yang sama dipotong berdasarkan tanggal pengajuan terlama lebih dulu.
* **Preemption (Hak Sela Prioritas):** Jika masuk pengajuan baru dari divisi prioritas lebih tinggi (misal COD) untuk karyawan resign yang sisa gajinya terbatas, sistem otomatis merebut alokasi gaji dari divisi berprioritas lebih rendah (misal QSE), dan kasus yang tergeser otomatis ditandai `Ketendang (COD)` untuk dialihkan ke Cabang.

### 2. Pemisahan Alur Kerja Karyawan
* **🟢 Karyawan AKTIF (Closed-Loop HR):**
  - Gaji dirahasiakan 100% (tidak disimpan di sistem).
  - Kasus masuk ke antrean cut-off payroll (`Menunggu Cut-Off`).
  - Fitur **Download Cut-Off Payroll (CSV)** untuk diserahkan ke Tim Payroll HR.
  - Fitur **Update Hasil HR** untuk merekonsiliasi potongan nyata (*Lunas, Cicilan Bulanan, Terpotong Sebagian, atau Gagal Potong*). Kasus yang belum lunas otomatis di-rollover ke bulan berikutnya.
* **🔴 Karyawan RESIGN (Clearance & Pelimpahan Cabang):**
  - Dipotong langsung dari saldo hak clearance akhir.
  - Tagihan yang tidak tertutup gaji otomatis masuk ke menu **Outstanding** sebagai **Beban Cabang**.

### 3. Pelimpahan Beban Cabang Hybrid (*Hybrid Branch Burden Transfer*)
Solusi fleksibel saat sisa beban cabang kurir resign dialihkan:
* **Dapat dialihkan ke Rekan Resign Bersaldo (`salaryLeft > 0`):** Otomatis dipotong langsung dari sisa hak clearance miliknya (*instant auto-deduct*, tanpa cicilan).
* **Dapat dialihkan ke Karyawan Aktif:** Dapat dibayar lunas (*lump-sum*) atau diangsur bertahap melalui **Skema Cicilan Cabang (2 s.d. 12 bulan)**.
* **Split Allocation:** Sebagian ditanggung rekan resign bersaldo dan sisanya dicicil oleh karyawan aktif.
* **Validasi Cerdas:** Sistem memvalidasi agar nominal rekan resign tidak melebihi sisa saldo hak clearance yang tersedia.

### 4. Searchable Custom Dropdown (Live Search & Filter Chips)
Pemilihan personil penanggung cabang dilengkapi:
* **Pencarian Real-Time:** Mengetik NPK, nama, atau cabang seketika memfilter opsi dengan *yellow text highlight*.
* **Filter Chips:** Tombol filter instan `Semua`, `🟠 Resign Bersaldo`, dan `🟢 Aktif`.
* **Dukungan Multi-Penanggung:** Setiap baris penanggung memiliki kotak pencarian independen.

### 5. Validasi Duplikasi & Bulk Upload CSV Cerdas
* **Pencegahan Duplikat Identik:** Menolak otomatis input data yang No. AWB, NPK, Divisi, dan Nominalnya sama persis.
* **Modal Konfirmasi Perbandingan:** Jika nomor AWB sama namun terdapat perbedaan atribut, sistem menampilkan modal perbandingan data lama vs baru dengan opsi update (YES/NO).
* **Pembersihan Otomatis Excel:** Normalisasi otomatis format NPK berkutip/formula (`="0425.17070"`) dan format tanggal `DD/MM/YYYY`.

### 6. Buku Panduan Terpadu (*Manual Book* — Menu Informasi & Panduan)
Pusat dokumentasi dan SOP internal yang berisi:
1. Urutan Hierarki Prioritas Resmi & Alasan Kebijakan
2. SOP Komparasi Karyawan Aktif vs Resign
3. Panduan Input Manual & Impor Massal CSV
4. Petunjuk Eksekusi Skema Cicilan Cabang & Kurir Aktif
5. Standar Audit Trail & Rumus Akuntansi Rekapitulasi
6. Tanya Jawab Cepat (FAQ Accordion)

---

## 💻 Cara Menjalankan

Aplikasi ini dibangun menggunakan arsitektur *Zero-Dependency Web Application* (Native HTML5, CSS3, dan Vanilla JavaScript ES6+) sehingga dapat langsung dijalankan tanpa perlu instalasi Node.js atau web server tambahan:

1. **Kloning Repository:**
   ```bash
   git clone https://github.com/goldenpratam17-arch/dashboardpayrolldeduction.git
   cd dashboardpayrolldeduction
   ```
2. **Buka Aplikasi:**
   * Cukup klik ganda (*double click*) file `index.html` untuk membuka di browser Google Chrome, Microsoft Edge, atau Mozilla Firefox.
   * Atau jalankan melalui web server lokal:
     ```bash
     python -m http.server 8000
     ```
     Lalu akses di browser: `http://localhost:8000`

---

## 📁 Struktur Berkas

```
├── index.html                      # Aplikasi Dashboard Utama (UI, Layout, Logika Bisnis & Mesin Alokasi)
├── data.js                         # Dataset Seed Awal (Master Karyawan, Kasus Potongan & Pembayaran)
├── sap-express-logo.svg            # Asset Logo Resmi SAP Express
├── dashboard_potongan_gaji.html     # Versi Prototype Standalone Awal
├── control_sheet.xlsx              # Dokumen Kontrol Master Spreadsheet Operasional
└── README.md                       # Dokumentasi Proyek
```

---

## 👥 Pengembang & Hak Cipta

* **Sistem:** SAP Express Payroll Deduction System
* **Divisi Terkait:** COD, CX, Treasury, Controller, QSE, Koperasi, & Human Capital (Payroll)
