/**
 * SAP EXPRESS - DATASET (BERSIH / READY UNTUK DATA PRODUKSI)
 * Data master karyawan dan kasus potongan siap disuntik melalui:
 * 1. Upload Master Karyawan (12 Kolom) di menu Input Data
 * 2. Upload Kasus Potongan Massal (9 Kolom) atau Input Satuan
 * 3. Upload Sisa Gaji & Deposit (16 Kolom) oleh Admin Payroll
 */

const SAP_DATA_SEED = {
  employees: [],
  cases: [],
  payments: [],
  seq: 1,
  pseq: 1
};
