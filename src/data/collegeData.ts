export type College = {
  name: string;
  location: string;
  programs: string[];
  fees: string;
  additionalInfo?: string;
}

export type ZoneData = {
  [key: string]: College[];
}

export const collegeData: ZoneData = {
  kolkata: [
    {
      name: "BIBS",
      location: "18D, Lake View Rd, Inke Terrace, Ballygunge, Kolkata, West Bengal 700029",
      programs: [
        "MBA - Marketing/Finance/HR, Digital Marketing",
        "MBA - Data Science"
      ],
      fees: "698,000 - 748,000"
    },
    {
      name: "EIILM",
      location: "9, Waterloo St, Esplanade, Chowringhee North, Bow Barracks, Kolkata 700069",
      programs: ["MBA - MENTI FIN, HR OPRESVS M, HR, Retail, Pharma, Logistics & Supply Chain"],
      fees: "645,000"
    },
    {
      name: "St. Xaviers University",
      location: "Action Area III, B, Newtown, New Town, West Bengal 700160",
      programs: ["MBA"],
      fees: "1,080,000 + 40,000 admission fee + 5000 caution money + 5015 alumni fee"
    },
    {
      name: "Praxis",
      location: "Bakrahat Road, Rasapunja, 24 Parganas South, Kolkata 700104",
      programs: ["PGDM-Marketing/Finance,HR,Systems&Operations"],
      fees: "951,000 + 30,000 caution deposit"
    },
    {
      name: "CBS",
      location: "D.H. Road, Opp. Nilgiri Cinema Hall, Kolkata, West Bengal",
      programs: ["PGDM-Marketing/Finance,HR,Operations"],
      fees: "745,000"
    },
    {
      name: "IMI",
      location: "2/4 C Judges Court Rd, Alipore, Kolkata 700027",
      programs: ["PGDM-Marketing,Finance,HRM,Info.r&Operations, Strategy"],
      fees: "1,450,000"
    },
    {
      name: "MDI",
      location: "Kolkata P.O – Uttar Panchanna Gram",
      programs: ["MARKETING, FINANCE, HR,SUPPLY CHAIN"],
      fees: "1,551,500"
    },
    {
      name: "Techno India (Meghnad Saha)",
      location: "Behind Urbana Complex Near Ruby General Hospital, Kolkata 700150",
      programs: ["MBA"],
      fees: "517,000"
    },
    {
      name: "Globsyn",
      location: "JL No. 101, Mouza Chandi, P.S. Bishnupur, Kolkata",
      programs: ["Finance,HR,Operations,Marketing Information System"],
      fees: "PGDM-₹85000 MBA-₹62000"
    },
    {
      name: "IEM",
      location: "450 SDF Building, Saltlake Electronics Complex, Kolkata 700091",
      programs: ["PGDM-Marketing,Finance,HR,Business Analytics, Operations Mgmt."],
      fees: "175000 x 4 = 700000"
    },
    {
      name: "BRAINWARE UNIVERSITY",
      location: "398, Ramkrishnapur Rd, Kolkata 700125",
      programs: ["MBA-Marketing,Finance,HR"],
      fees: "450,000"
    },
    {
      name: "UNITED WORLD",
      location: "Plot No. G1, 10th Floor, Infinity Benchmark Tower, Kolkata 700091",
      programs: [
        "MBA-Digital Marketing,Banking&Strategic Finance",
        "Retail&Supply Mgmt, HRM Marketing"
      ],
      fees: "680,000"
    },
    {
      name: "FUTURE, SONARPUR",
      location: "Sonarpur Station Road, Kolkata",
      programs: ["MBA-MARKETING, FINANCE,HR"],
      fees: "517,000"
    }
  ],
  delhi: [
    {
      name: "ITS",
      location: "Mohan Nagar, Ghaziabad, UP 201007",
      programs: ["PGDM-M,F,HR,International Business, Operations,IT"],
      fees: "610,000"
    },
    {
      name: "Fostima",
      location: "Plot No: H.P-1, Dwarka Sector 9, New Delhi 110077",
      programs: ["PGDM-M,F,HR,Operations"],
      fees: "1,095,000"
    },
    {
      name: "GI Bajaj",
      location: "Plot No. 2, APJ Abdul Kalam Rd, Knowledge Park III, Greater Noida",
      programs: [
        "PGDM-Human Resource Management",
        "Finance Marketing",
        "Information Technology",
        "International Business Operations Management"
      ],
      fees: "N/A"
    },
    {
      name: "ASIA PACIFIC INST.OF MGMT",
      location: "Delhi",
      programs: ["PGDM-Marketing,HR,Information&Business,Operations,Data Analytics"],
      fees: "Self Sponsored ₹1,130,000, Company Sponsored ₹1,800,000"
    },
    {
      name: "JAIPURIA",
      location: "Delhi",
      programs: ["PGDM-M,F,HR,Business Comm.,Strategy,Inf.System, ExcelR"],
      fees: "1,575,000"
    },
    {
      name: "IIILM University",
      location: "Knowledge Center, Golf Course Rd, Sector 53, Gurugram",
      programs: [
        "MBA-Accounting&Finance,Economics,HR&Public Policy",
        "Innovation&Strategy,M,HR,Operations,Entrepreneurship Mgmt"
      ],
      fees: "12,10,000"
    },
    {
      name: "GNIOT",
      location: "Plot No. 7, Knowledge Park II, Greater Noida",
      programs: ["PGDM"],
      fees: "837,000"
    }
  ],
  bangalore: [
    {
      name: "RCM",
      location: "Plot No 98/3 and 94/5, Madiwala, Devanahalli",
      programs: ["MBA-Marketing,HRM,Finance,IT,Entrepreneurship"],
      fees: "840,000"
    },
    {
      name: "IBA",
      location: "Lalbagh Siddapura Post, Bangalore 560082",
      programs: ["PGDM-Markt.,HR,Prod&Bus Analysis"],
      fees: "978,000"
    },
    {
      name: "ISME",
      location: "CAP-1, EOIZ, Export Promotion Industrial Park, Whitefield",
      programs: ["PGDM/AICTE-Marketing,Finance&Banking"],
      fees: "940,000"
    },
    {
      name: "IIBS",
      location: "Kanakpura, R.T. Nagar, Pant, Bangalore",
      programs: [
        "MBA-Marketing,Finance,HR,International Business",
        "PGDM-Marketing,Finance&Banking"
      ],
      fees: "945,000"
    },
    {
      name: "ABBS",
      location: "Off Magadi Road, S. Acharya College Main Rd, Bangalore",
      programs: [
        "MBA-Finance,Marketing,HR,Healthcare,Business",
        "PGDM-GLOBAL IMMERSION"
      ],
      fees: "990,000 - 1,005,000"
    }
  ],
  pune: [
    {
      name: "RIIM",
      location: "Behind Crystal Honda Showroom, Bhunde Vasti, Bavdhan, Pune, Maharashtra 411021",
      programs: [
        "MBA+Employability",
        "MBA+Employability+MDP",
        "PGDM+BEP-Dubai"
      ],
      fees: "540,000 - 975,000"
    },
    {
      name: "PIBM",
      location: "Tel - Mobile, GLD No. 605/1, Lavasa Road, Pirangut, Maharashtra 412115",
      programs: ["PGDM"],
      fees: "7.95L (50L+9.75L+3.7L)"
    },
    {
      name: "ISMS",
      location: "S.No 9/1/1, Wadgaon Budruk, Sinhgad Rd, Pune, Maharashtra 411041",
      programs: [
        "MBA with Triple Certificate",
        "MBA International",
        "PGDM"
      ],
      fees: "650,000 - 690,000"
    },
    {
      name: "D.Y.PATIL",
      location: "Pune",
      programs: ["PGDM"],
      fees: "7.95L (997500*2)"
    },
    {
      name: "WELINGKAR",
      location: "Pune",
      programs: ["PGDM"],
      fees: "1,400,000"
    },
    {
      name: "ATLAS UNIVERSITY",
      location: "Equinox Business Park, Ambedkar Nagar, Kurla West, Mumbai, Maharashtra",
      programs: ["PGDM"],
      fees: "10,46,500"
    },
    {
      name: "MILE",
      location: "Lexicon Group Of Institutes, GAT no 726, Near Rd, Wagholi, Pune, Maharashtra 412207",
      programs: ["PGDM"],
      fees: "1,000,000"
    },
    {
      name: "PBS",
      location: "Pune Business School, Sector No.26, Pradhikaran, Nigdi, Pune, Maharashtra 411044",
      programs: [
        "GENERAL PGDM",
        "AGRI PGDM"
      ],
      fees: "275000*2 = 550000 - 590,000"
    }
  ],
  hyderabad: [
    {
      name: "Siva Sivani Institute of Management",
      location: "NH 44, Ruby Block, Kompally, Secunderabad, Hyderabad, Telangana 500100",
      programs: ["PGDM"],
      fees: "690,000"
    },
    {
      name: "VIGNANA JYOTI INSTITUTE",
      location: "Miyapur Rd, Nizampet, Bachupally, Hyderabad, Telangana 500090",
      programs: ["PGDM"],
      fees: "775,000"
    }
  ]
};
