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
    totalAmount: 1065226600,
    totalCases: 54785,
    totalPaid: 660098818,
    totalOutstanding: 405127782,
    pendingCasesCount: 3142,
    totalEmployees: 24994,
    totalResign: 20638,
    divisionSums: [
      { name: 'CX', amount: 746200000 },
      { name: 'COD', amount: 149700000 },
      { name: 'QSE', amount: 83500000 },
      { name: 'Treasury', amount: 66000000 },
      { name: 'Controller', amount: 19700000 }
    ],
    divisionPaidSums: [
      { name: 'CX', amount: 462550000 },
      { name: 'COD', amount: 92800000 },
      { name: 'QSE', amount: 51770000 },
      { name: 'Treasury', amount: 40920000 },
      { name: 'Controller', amount: 12210000 }
    ]
  },
  seq: 5040708051,
  pseq: 55431
};
