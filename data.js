/**
 * SAP EXPRESS - DATASET SEED MINIMAL (PRODUCTION CLOUD-DRIVEN)
 * Seluruh dataset riil produksi tersimpan 100% di Supabase Cloud PostgreSQL.
 */

const SAP_DATA_SEED = {
  employees: [
    { id: 'CORP-SAP', name: 'PT SAP Express (Beban Perusahaan)', status: 'PERUSAHAAN', dept: 'Kantor Pusat', branch: 'Head Office', salary: null },
    { id: 'SALES_DEPT', name: 'Sales Department (RC Buffer)', status: 'SALES', dept: 'Commercial', branch: 'Head Office', salary: null }
  ],
  cases: [],
  payments: [],
  preemptionAlerts: [],
  summary: {
    totalAmount: 1068779572,
    totalCases: 54785,
    totalPaid: 653618772,
    casePaidTotal: 522713042,
    totalOutstanding: 415160800,
    pendingCasesCount: 3142,
    totalEmployees: 24994,
    totalResign: 20638,
    divisionSums: [
      { name: 'CX', amount: 749760637 },
      { name: 'COD', amount: 149753586 },
      { name: 'QSE', amount: 83500000 },
      { name: 'Treasury', amount: 66069582 },
      { name: 'Controller', amount: 19695767 }
    ],
    divisionPaidSums: [
      { name: 'CX', amount: 425067139 },
      { name: 'COD', amount: 144360935 },
      { name: 'QSE', amount: 0 },
      { name: 'Treasury', amount: 54268611 },
      { name: 'Controller', amount: 29921887 }
    ],
    monthlyRealization: {
      'April 2026': {
        monthCode: '04 - APRIL',
        payrollTotal: 154350992,
        kurirCount: 1318,
        casePaidTotal: 133288387,
        caseCount: 12777,
        submissionTotal: 290178039,
        submissionCases: 13616,
        divisions: { CX: 96192337, COD: 40025253, Treasury: 11494333, Controller: 6639069, QSE: 0 },
        caseDivisions: { CX: 89121590, COD: 30667724, Treasury: 7948100, Controller: 5550973, QSE: 0 },
        submissionDivisions: { CX: 190079234, COD: 60524879, Treasury: 20503000, Controller: 5770926, QSE: 13300000 }
      },
      'Maret 2026': {
        monthCode: '03 - MARET',
        payrollTotal: 144847163,
        kurirCount: 1108,
        casePaidTotal: 113626090,
        caseCount: 10200,
        submissionTotal: 249999514,
        submissionCases: 11127,
        divisions: { CX: 87388090, COD: 37476502, Treasury: 11624699, Controller: 8357872, QSE: 0 },
        caseDivisions: { CX: 81749938, COD: 25263080, Treasury: 6221867, Controller: 391205, QSE: 0 },
        submissionDivisions: { CX: 185630766, COD: 36306976, Treasury: 11583067, Controller: 178705, QSE: 16300000 }
      },
      'Februari 2026': {
        monthCode: '02 - FEBRUARI',
        payrollTotal: 163271371,
        kurirCount: 1302,
        casePaidTotal: 134238204,
        caseCount: 18566,
        submissionTotal: 270453260,
        submissionCases: 19406,
        divisions: { CX: 118678726, COD: 27673565, Treasury: 11719303, Controller: 5199777, QSE: 0 },
        caseDivisions: { CX: 111607977, COD: 12920957, Treasury: 5226159, Controller: 4483111, QSE: 0 },
        submissionDivisions: { CX: 199478833, COD: 21773576, Treasury: 20154715, Controller: 7246136, QSE: 21800000 }
      },
      'Januari 2026': {
        monthCode: '01 - JANUARI',
        payrollTotal: 191149246,
        kurirCount: 1183,
        casePaidTotal: 141560361,
        caseCount: 10373,
        submissionTotal: 258148759,
        submissionCases: 11033,
        divisions: { CX: 122807986, COD: 39185615, Treasury: 19430476, Controller: 9725169, QSE: 0 },
        caseDivisions: { CX: 109491167, COD: 18609977, Treasury: 7896717, Controller: 5562500, QSE: 0 },
        submissionDivisions: { CX: 174571804, COD: 31148155, Treasury: 13828800, Controller: 6500000, QSE: 32100000 }
      }
    }
  },
  seq: 60001,
  pseq: 51917
};
