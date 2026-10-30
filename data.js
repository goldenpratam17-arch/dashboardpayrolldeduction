/**
 * SAP EXPRESS - DATASET SEED MINIMAL (PRODUCTION CLOUD-DRIVEN)
 * Seluruh dataset riil produksi tersimpan 100% di Supabase Cloud PostgreSQL.
 * Periode: Januari s.d. September 2026 (98.642 Kasus Klaim, 92.037 Pembayaran Realisasi)
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
    "totalCases": 98642,
    "activeCasesCount": 98468,
    "totalAmount": 2490315071,
    "totalPaid": 1895266450,
    "totalOutstanding": 774086348,
    "pendingCasesCount": 6704,
    "rolledOverCasesCount": 174,
    "rolledOverAmount": 8392265,
    "lunasCasesCount": 91764,
    "divisionSums": [
        {
            "name": "Treasury",
            "amount": 306148308
        },
        {
            "name": "COD",
            "amount": 356749427
        },
        {
            "name": "CX",
            "amount": 1466154144
        },
        {
            "name": "QSE",
            "amount": 291049998
        },
        {
            "name": "Controller",
            "amount": 70213194
        }
    ],
    "divisionPaidSums": [
        {
            "name": "CX",
            "amount": 1012458426
        },
        {
            "name": "COD",
            "amount": 254523707
        },
        {
            "name": "QSE",
            "amount": 196249998
        },
        {
            "name": "Treasury",
            "amount": 253959968
        },
        {
            "name": "Controller",
            "amount": 47168621
        }
    ],
    "totalEmployees": 24995,
    "totalResign": 20638,
    "monthlyRealization": {
        "Mei 2026": {
            "caseCount": 11307,
            "divisions": {
                "CX": 150486635,
                "COD": 15563302,
                "QSE": 8500000,
                "Treasury": 3783860,
                "Controller": 6514885
            },
            "monthCode": "05 - MEI",
            "kurirCount": 1209,
            "payrollTotal": 184848682,
            "caseDivisions": {
                "CX": 150486635,
                "COD": 15563302,
                "QSE": 8500000,
                "Treasury": 3783860,
                "Controller": 6514885
            },
            "casePaidTotal": 184848682,
            "submissionCases": 12597,
            "submissionTotal": 237203866,
            "submissionDivisions": {
                "CX": 179892252,
                "COD": 29367515,
                "QSE": 11100000,
                "Treasury": 8708860,
                "Controller": 8135239
            }
        },
        "Juli 2026": {
            "caseCount": 11361,
            "divisions": {
                "CX": 127365009,
                "COD": 65015437,
                "QSE": 47000000,
                "Treasury": 27213982,
                "Controller": 9510645
            },
            "monthCode": "07 - JULI",
            "kurirCount": 1487,
            "payrollTotal": 276105073,
            "caseDivisions": {
                "CX": 127365009,
                "COD": 65015437,
                "QSE": 47000000,
                "Treasury": 27213982,
                "Controller": 9510645
            },
            "casePaidTotal": 276105073,
            "submissionCases": 12091,
            "submissionTotal": 298263057,
            "submissionDivisions": {
                "CX": 144909413,
                "COD": 65015437,
                "QSE": 47000000,
                "Treasury": 29921315,
                "Controller": 11416892
            }
        },
        "Juni 2026": {
            "caseCount": 5186,
            "divisions": {
                "CX": 96159323,
                "COD": 18476313,
                "QSE": 9200000,
                "Treasury": 7918500,
                "Controller": 2590287
            },
            "monthCode": "06 - JUNI",
            "kurirCount": 1182,
            "payrollTotal": 134344423,
            "caseDivisions": {
                "CX": 96159323,
                "COD": 18476313,
                "QSE": 9200000,
                "Treasury": 7918500,
                "Controller": 2590287
            },
            "casePaidTotal": 134344423,
            "submissionCases": 5743,
            "submissionTotal": 183214454,
            "submissionDivisions": {
                "CX": 116466182,
                "COD": 33521417,
                "QSE": 10700000,
                "Treasury": 11493500,
                "Controller": 11033355
            }
        },
        "April 2026": {
            "caseCount": 12777,
            "divisions": {
                "CX": 96192337,
                "COD": 40025253,
                "QSE": 0,
                "Treasury": 11494333,
                "Controller": 6639069
            },
            "monthCode": "04 - APRIL",
            "kurirCount": 1318,
            "payrollTotal": 154350992,
            "caseDivisions": {
                "CX": 89121590,
                "COD": 30667724,
                "QSE": 0,
                "Treasury": 7948100,
                "Controller": 5550973
            },
            "casePaidTotal": 133288387,
            "submissionCases": 13616,
            "submissionTotal": 290178039,
            "submissionDivisions": {
                "CX": 190079234,
                "COD": 60524879,
                "QSE": 13300000,
                "Treasury": 20503000,
                "Controller": 5770926
            }
        },
        "Maret 2026": {
            "caseCount": 10200,
            "divisions": {
                "CX": 87388090,
                "COD": 37476502,
                "QSE": 0,
                "Treasury": 11624699,
                "Controller": 8357872
            },
            "monthCode": "03 - MARET",
            "kurirCount": 1108,
            "payrollTotal": 144847163,
            "caseDivisions": {
                "CX": 81749938,
                "COD": 25263080,
                "QSE": 0,
                "Treasury": 6221867,
                "Controller": 391205
            },
            "casePaidTotal": 113626090,
            "submissionCases": 11127,
            "submissionTotal": 249999514,
            "submissionDivisions": {
                "CX": 185630766,
                "COD": 36306976,
                "QSE": 16300000,
                "Treasury": 11583067,
                "Controller": 178705
            }
        },
        "Agustus 2026": {
            "caseCount": 5258,
            "divisions": {
                "CX": 126043467,
                "COD": 15375009,
                "QSE": 55999999,
                "Treasury": 1885075,
                "Controller": 6931470
            },
            "monthCode": "08 - AGUSTUS",
            "kurirCount": 1121,
            "payrollTotal": 206235020,
            "caseDivisions": {
                "CX": 126043467,
                "COD": 15375009,
                "QSE": 55999999,
                "Treasury": 1885075,
                "Controller": 6931470
            },
            "casePaidTotal": 206235020,
            "submissionCases": 6090,
            "submissionTotal": 254118971,
            "submissionDivisions": {
                "CX": 152218968,
                "COD": 26459564,
                "QSE": 62199999,
                "Treasury": 1885075,
                "Controller": 11355365
            }
        },
        "Januari 2026": {
            "caseCount": 10373,
            "divisions": {
                "CX": 122807986,
                "COD": 39185615,
                "QSE": 0,
                "Treasury": 19430476,
                "Controller": 9725169
            },
            "monthCode": "01 - JANUARI",
            "kurirCount": 1183,
            "payrollTotal": 191149246,
            "caseDivisions": {
                "CX": 109491167,
                "COD": 18609977,
                "QSE": 0,
                "Treasury": 7896717,
                "Controller": 5562500
            },
            "casePaidTotal": 141560361,
            "submissionCases": 11033,
            "submissionTotal": 258148759,
            "submissionDivisions": {
                "CX": 174571804,
                "COD": 31148155,
                "QSE": 32100000,
                "Treasury": 13828800,
                "Controller": 6500000
            }
        },
        "Februari 2026": {
            "caseCount": 18566,
            "divisions": {
                "CX": 118678726,
                "COD": 27673565,
                "QSE": 0,
                "Treasury": 11719303,
                "Controller": 5199777
            },
            "monthCode": "02 - FEBRUARI",
            "kurirCount": 1302,
            "payrollTotal": 163271371,
            "caseDivisions": {
                "CX": 111607977,
                "COD": 12920957,
                "QSE": 0,
                "Treasury": 5226159,
                "Controller": 4483111
            },
            "casePaidTotal": 134238204,
            "submissionCases": 19406,
            "submissionTotal": 270453260,
            "submissionDivisions": {
                "CX": 199478833,
                "COD": 21773576,
                "QSE": 21800000,
                "Treasury": 20154715,
                "Controller": 7246136
            }
        },
        "September 2026": {
            "caseCount": 7009,
            "divisions": {
                "CX": 120433320,
                "COD": 52631908,
                "QSE": 75549999,
                "Treasury": 185865708,
                "Controller": 5633545
            },
            "monthCode": "09 - SEPTEMBER",
            "kurirCount": 1306,
            "payrollTotal": 440114480,
            "caseDivisions": {
                "CX": 120433320,
                "COD": 52631908,
                "QSE": 75549999,
                "Treasury": 185865708,
                "Controller": 5633545
            },
            "casePaidTotal": 440114480,
            "submissionCases": 7336,
            "submissionTotal": 460680388,
            "submissionDivisions": {
                "CX": 134851929,
                "COD": 52631908,
                "QSE": 76549999,
                "Treasury": 188069976,
                "Controller": 8576576
            }
        }
    },
    "updatedAt": "2026-10-30 17:20:46"
}
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SAP_DATA_SEED;
}
