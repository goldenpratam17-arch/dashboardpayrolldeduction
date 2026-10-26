/**
 * SAP EXPRESS - SEED DATASET (DEMO RINGAN - 5 KARYAWAN)
 * Representasi 4 Skenario Pengujian:
 * 1. Aktif / Sisa Gaji Kurang (Mulyadi Jahir)
 * 2. Aktif / Sisa Gaji Cukup (Ifan Ismawan Muhdi)
 * 3. Resign / Sisa Gaji Cukup (Nofrizal)
 * 4. Resign / Sisa Gaji Tidak Cukup - Multi Divisi (Moch. Faris Prasetiyo)
 * 5. Resign / Saldo Gaji Nol (Asep Paghi Saepuloh)
 */

const SAP_DATA_SEED = {
  employees: [
    {
      id: "0425.17070",
      name: "Mulyadi Jahir",
      status: "AKTIF",
      salary: null, // Rahasia HR - Tidak disimpan di sistem
      branch: "Koordinator Operational - INDOTIM"
    },
    {
      id: "0525.17262",
      name: "Ifan Ismawan Muhdi",
      status: "AKTIF",
      salary: null, // Rahasia HR - Tidak disimpan di sistem
      branch: "Operational - INDOTIM"
    },
    {
      id: "0121.9468",
      name: "Nofrizal",
      status: "RESIGN",
      salary: 3000000, // Hak akhir clearance
      branch: "Leader Kurir - Banda Aceh"
    },
    {
      id: "0120.7666",
      name: "Moch. Faris Prasetiyo",
      status: "RESIGN",
      salary: 1500000, // Hak akhir clearance
      branch: "Koordinator Operational - Jakarta"
    },
    {
      id: "0122.10869",
      name: "Asep Paghi Saepuloh",
      status: "RESIGN",
      salary: 0, // Saldo clearance habis/nol
      branch: "Kurir Kontrak - Karawang"
    },
    // Rekan Kerja Aktif di Cabang (Untuk Penanggung Beban Cabang Karyawan Resign)
    {
      id: "0125.13445",
      name: "Dedi Supriadi",
      status: "AKTIF",
      salary: null,
      branch: "Leader Kurir - Karawang"
    },
    {
      id: "0124.12334",
      name: "Budi Santoso",
      status: "AKTIF",
      salary: null,
      branch: "Staff Operational - Jakarta"
    },
    {
      id: "0123.11223",
      name: "Rahmat Hidayat",
      status: "AKTIF",
      salary: null,
      branch: "Kurir - Banda Aceh"
    },
    // Tim Sales Komersial (Dukungan Pemotongan RC vs Gaji)
    {
      id: "0322.15501",
      name: "Dimas Anggara",
      status: "AKTIF",
      dept: "Sales",
      salary: null,
      branch: "Account Executive (Sales) - Jakarta"
    },
    {
      id: "0323.16780",
      name: "Siti Rahmawati",
      status: "AKTIF",
      dept: "Sales",
      salary: null,
      branch: "Corporate Sales Executive - Jakarta"
    },
    {
      id: "0324.18902",
      name: "Fajar Pratama",
      status: "AKTIF",
      dept: "Sales",
      salary: null,
      branch: "Senior Sales Specialist - Karawang"
    },
    // Entitas Institusional Beban Perusahaan
    {
      id: "CORP-SAP",
      name: "PT SAP Express (Beban Perusahaan)",
      status: "PERUSAHAAN",
      dept: "Corporate",
      salary: null,
      branch: "Kantor Pusat - Biaya Operasional Perusahaan"
    }
  ],
  cases: [
    // 1. Kasus untuk Mulyadi Jahir (AKTIF - Total Tagihan 2.700.000: COD lunas 1.200.000, CX terpotong 800.000, sisa 700.000 rollover)
    {
      id: "D0001",
      npk: "0425.17070",
      division: "CX",
      type: "Barang Rusak",
      ref: "AWB-1100405195",
      amount: 1500000,
      date: "2026-09-28",
      status: "PARTIAL"
    },
    {
      id: "D0002",
      npk: "0425.17070",
      division: "COD",
      type: "Selisih Setoran",
      ref: "COD-JKT-1002",
      amount: 1200000,
      date: "2026-09-30",
      status: "PAID"
    },

    // 2. Kasus untuk Ifan Ismawan Muhdi (AKTIF - Baru didaftarkan, Menunggu Cut-off Payroll)
    {
      id: "D0003",
      npk: "0525.17262",
      division: "CX",
      type: "Barang Hilang",
      ref: "AWB-1100405201",
      amount: 350000,
      date: "2026-09-25",
      status: "PENDING"
    },
    {
      id: "D0004",
      npk: "0525.17262",
      division: "QSE",
      type: "Pelanggaran SOP",
      ref: "QSE-SOP-201",
      amount: 250000,
      date: "2026-09-29",
      status: "PENDING"
    },

    // 3. Kasus untuk Nofrizal (RESIGN - Saldo Clearance 3.000.000, Total Tagihan 1.500.000 -> Tertutup Clearance)
    {
      id: "D0005",
      npk: "0121.9468",
      division: "CX",
      type: "Barang Hilang",
      ref: "AWB-MGT0022921",
      amount: 850000,
      date: "2026-09-26",
      status: "PAID"
    },
    {
      id: "D0006",
      npk: "0121.9468",
      division: "Koperasi",
      type: "Pinjaman Karyawan",
      ref: "KOP-8821",
      amount: 650000,
      date: "2026-09-27",
      status: "PAID"
    },

    // 4. Kasus untuk Moch. Faris Prasetiyo (RESIGN - Saldo Clearance 1.500.000, Total Tagihan 2.500.000 -> COD & CX terpotong, Treasury & QSE Beban Cabang)
    {
      id: "D0007",
      npk: "0120.7666",
      division: "COD",
      type: "Fraud COD",
      ref: "CGK-COD-7701",
      amount: 1000000,
      date: "2026-09-25"
    },
    {
      id: "D0008",
      npk: "0120.7666",
      division: "CX",
      type: "Barang Hilang",
      ref: "AWB-CGK0579270",
      amount: 800000,
      date: "2026-09-27"
    },
    {
      id: "D0009",
      npk: "0120.7666",
      division: "Treasury",
      type: "Selisih Kas",
      ref: "TRS-2026-901",
      amount: 450000,
      date: "2026-09-28"
    },
    {
      id: "D0010",
      npk: "0120.7666",
      division: "QSE",
      type: "Denda SOP Keselamatan",
      ref: "QSE-SOP-404",
      amount: 250000,
      date: "2026-09-29"
    },

    // 5. Kasus untuk Asep Paghi Saepuloh (RESIGN - Saldo Clearance 0, Total Tagihan 1.250.000 -> Langsung Beban Cabang)
    {
      id: "D0011",
      npk: "0122.10869",
      division: "COD",
      type: "Fraud COD",
      ref: "KRW-COD-1102",
      amount: 950000,
      date: "2026-09-28"
    },
    {
      id: "D0012",
      npk: "0122.10869",
      division: "CX",
      type: "Barang Rusak",
      ref: "AWB-KRW0021992",
      amount: 300000,
      date: "2026-09-30"
    },
    // Kasus Beban Cabang hasil pelimpahan dari Moch. Faris Prasetiyo
    {
      id: "D0013",
      npk: "0124.12334",
      division: "CX",
      type: "Barang Hilang (Beban Cabang)",
      ref: "AWB-CGK0579270-CBG1",
      amount: 150000,
      date: "2026-10-16",
      note: "Pelimpahan dari Moch. Faris Prasetiyo (Resign) — SK Beban Cabang"
    },
    {
      id: "D0014",
      npk: "0125.13445",
      division: "CX",
      type: "Barang Hilang (Beban Cabang)",
      ref: "AWB-CGK0579270-CBG2",
      amount: 150000,
      date: "2026-10-16",
      note: "Pelimpahan dari Moch. Faris Prasetiyo (Resign) — SK Beban Cabang"
    }
  ],
  payments: [
    // Riwayat Eksekusi Payroll HR untuk Karyawan Aktif (Mulyadi Jahir)
    {
      id: "P00001",
      caseId: "D0002",
      npk: "0425.17070",
      division: "COD",
      amount: 1200000,
      date: "2026-10-01",
      by: "Eksekusi Payroll HRD (Lunas)",
      period: "2026-09",
      note: "Potongan Rutin Payroll HR (Lunas)"
    },
    {
      id: "P00002",
      caseId: "D0001",
      npk: "0425.17070",
      division: "CX",
      amount: 800000,
      date: "2026-10-01",
      by: "Eksekusi Payroll HRD (Sebagian)",
      period: "2026-09",
      note: "Potongan Rutin Payroll HR (Sebagian, Rollover Sisa Rp 700.000)"
    },
    // Riwayat Pemotongan Hak Akhir & Pelimpahan Cabang (Moch. Faris Prasetiyo)
    {
      id: "P00003",
      caseId: "D0007",
      npk: "0120.7666",
      division: "COD",
      amount: 1000000,
      date: "2026-10-16",
      by: "Auto-Deduct Prioritas",
      period: "2026-10",
      note: "Potongan Hak Akhir (Clearance Resign)"
    },
    {
      id: "P00004",
      caseId: "D0008",
      npk: "0120.7666",
      division: "CX",
      amount: 500000,
      date: "2026-10-16",
      by: "Auto-Deduct Prioritas",
      period: "2026-10",
      note: "Potongan Hak Akhir (Sebagian - Saldo Clearance Habis)"
    },
    {
      id: "P00005",
      caseId: "D0008",
      npk: "0120.7666",
      division: "CX",
      amount: 300000,
      date: "2026-10-16",
      by: "Pelimpahan Cabang (Admin Payroll)",
      period: "2026-10",
      transferredTo: "Dilimpahkan ke: Budi Santoso [NPK: 0124.12334] Rp 150.000; Dedi Supriadi [NPK: 0125.13445] Rp 150.000 (SK Beban Cabang)",
      note: "Dialihkan ke Cabang via SK Beban Cabang: Budi Santoso [NPK: 0124.12334] Rp 150.000; Dedi Supriadi [NPK: 0125.13445] Rp 150.000"
    }
  ],
  seq: 15,
  pseq: 6
};
