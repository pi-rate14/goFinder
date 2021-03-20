import NewData from './result'

export const categories = [
  'Electrical',
  'Industrial Engineering',
  'Textile',
  'Pharmaceutical',
  'IT and Services',
  'Chemical',
  'Automobile',
]
export const companies = {
  Electrical: ['EuroSMC S.A.'],
  'Industrial Engineering': ['Sintex a/s'],
  Textile: ['White Cross Rubber Products', 'Textiles Industry Affairs'],
  Pharmaceutical: [
    'Pharmaceutical Industry',
    'Pharmaceutical Industry Association',
  ],
  'IT and Services': ['IBM'],
  Chemical: ['Bayer', 'BASF'],
  Automobile: ['Daimler AG', 'Lear Corporation'],
}
export const positions = {
  'EuroSMC S.A.': [
    {
      Name: 'Christa Langner',
      Position: 'Logistics Head',
      Linkedin: 'linkedin.com/in/christa-langner-9a6a3965',
      location: 'Greater Madrid Metropolitan Area',
      allSkills: 'Microsoft Office, English, Spanish',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQGiF0XAF5lasw/profile-displayphoto-shrink_800_800/0/1517246223709?e=1621468800&v=beta&t=pc2PhV5SKuwcFaWyBYXGXmUoggg3TT43nn1KA6sUTVw',
      headline: 'Responsable Logistica en EuroSMC S.A.',
    },
    {
      Name: 'Eduardo Marchesi',
      Position: 'CEO',
      Linkedin: 'linkedin.com/in/eduardo-marchesi-47527511',
      location: 'Greater Madrid Metropolitan Area',
      allSkills:
        'Relays, Electrical Engineering, Substation, Power Distribution, Power Systems, Commissioning',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQFOUu3_ufcBEg/profile-displayphoto-shrink_800_800/0/1517750582404?e=1621468800&v=beta&t=DPNYwwgh7bwlr11O6zTnE9jxrz1AMRANHK8hIfmxTEw',
    },
  ],
  'Sintex a/s': [
    {
      Name: 'Thomas Soerensen',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C4D03AQEqf8H-xzUPGA/profile-displayphoto-shrink_800_800/0/1544354522686?e=1621468800&v=beta&t=sBH4Ma9HLXkVPjT8CBqDYFWNbFgLFthYgdZ3JmB-Xm4',
      Position: 'Managing Director',
      allSkills:
        'Change Management, Supply Chain Management, Operations Management, Manufacturing',
      location: 'Ålborg, North Jutland, Denmark',
      Linkedin: 'https://www.linkedin.com/in/thomas-soerensen-54b86a9/',
    },
  ],

  'White Cross Rubber Products': [
    {
      Name: 'Paul Graham',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQEHsKFrkFPeVw/profile-displayphoto-shrink_800_800/0/1517469768175?e=1621468800&v=beta&t=oAqMeEnlgvoN9ovttEolyJKR48VOo0mHaqNxq2hDUsU',
      location: 'Lancaster, England, United Kingdom',
      Position: 'General Manager',
      allSkills: '',
      Linkedin: 'https://www.linkedin.com/in/paul-graham-445a5047/',
    },
    {
      Name: 'Philip Harper',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C4E03AQFaj8iODzo93g/profile-displayphoto-shrink_800_800/0/1517661640762?e=1621468800&v=beta&t=YdFt7ixXVY_xdlkW7uoK0huXB0OQIt-kSSgoQnUIWfA',
      location: 'Lancaster, England, United Kingdom',
      connections: '500+ connections',
      Position: 'Managing Director',
      allSkills: '',
      Linkedin: 'https://www.linkedin.com/in/philip-harper-961b313/',
    },
  ],
  'Textiles Industry Affairs': [
    {
      Name: 'Bhavesh Jain',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQHB81MigZP9DQ/profile-displayphoto-shrink_800_800/0/1516956032439?e=1621468800&v=beta&t=uf0MaEOAb46dSKmQUSETX_9t2oc_fS0bG7XoqmB0aZI',
      location: 'Surat, Gujarat, India',
      Position: 'Owner',
      allSkills: '',
      Linkedin: 'https://www.linkedin.com/in/bhavesh-jain-4271a6bb/',
    },
  ],
  'Pharmaceutical Industry': [
    {
      Name: 'Kate Williams',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQFjpeeCkVEI8w/profile-displayphoto-shrink_800_800/0/1610645154321?e=1621468800&v=beta&t=QYakd_rJ3rb4T2FfnmwVsk0Xu9etMBLbT-Mji_x1AUU',
      location: 'Bristol, England, United Kingdom',
      Position: 'Research & Developement Maneger',
      allSkills: '',
      Linkedin: 'https://www.linkedin.com/in/kate-williams-35901719a/',
    },
  ],
  'Pharmaceutical Industry Association': [
    {
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C4D03AQFJ6goHHr4yow/profile-displayphoto-shrink_800_800/0/1516238652637?e=1621468800&v=beta&t=jqsWtPnt20GvPEKTfpEp7odQNs7fmq2iZStBPjhDe6M',
      location: 'Guaynabo, Puerto Rico',
      Name: 'Priscilla B',
      allSkills:
        'Pharmaceutical Industry, Sales Effectiveness, Strategy, Competitive Intelligence',
      Position: 'General Manager',
      Linkedin: 'https://www.linkedin.com/in/priscilla-b-684526/',
    },
  ],

  IBM: [
    {
      Name: 'Ganapathy Sankar Subramanian',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5103AQFabsPvgKbF8A/profile-displayphoto-shrink_800_800/0/1586760825166?e=1621468800&v=beta&t=HOldHZhwAZLDWUZauuyRuxDXR107ak67Mwvgx2mlMhs',
      location: 'Tiruvallur, Tamil Nadu, India',
      Position: 'Project Manager',
      allSkills:
        'Team Management, Project Management, Management, Vendor Management, SDLC',
      Linkedin:
        'https://www.linkedin.com/in/ganapathy-sankar-subramanian-pmp%C2%AE-pmi-acp%C2%AE-prince2%C2%AE-itil-msp%C2%AE-mor%C2%AE-asm-a863b115/',
    },
    {
      Name: 'Kunal Bajaj',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5103AQHtb9t37FHZKg/profile-displayphoto-shrink_800_800/0/1553056552225?e=1621468800&v=beta&t=5DurD0FYKpXmjGJ7uv5YUWxdNsMF6Rk7zEjPI3FIL8c',
      location: 'Mumbai, Maharashtra, India',
      Position: 'Principal CEO',
      Linkedin: 'https://www.linkedin.com/in/kunal-bajaj-79294b182/',
      allSkills: '',
    },
  ],
  Bayer: [
    {
      Name: 'Klaus Eckstein',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C4E03AQFz0sMQKDrCXw/profile-displayphoto-shrink_200_200/0/1516858384897?e=1621468800&v=beta&t=8MTg6CIByVI02mO7Sb5lTPQ8FsURalc_CpHmFN3yZck',
      location: 'City of Johannesburg, Gauteng, South Africa',

      Position: 'CEO Bayer Pty. LTD. South Africa',
      Linkedin: 'https://www.linkedin.com/in/klaus-eckstein-b8396897//',
      allSkills: '',
    },
    {
      Name: 'Dmitry Kirpatovskiy',
      Position: 'Logistics Head',
      Linkedin: 'https://www.linkedin.com/in/dmitry-kirpatovskiy-1b044843/',
    },
  ],
  BASF: [
    {
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQEg9XEUdPcV5w/profile-displayphoto-shrink_200_200/0/1517664122435?e=1621468800&v=beta&t=r8tVc77jbNGLS91RAa6-c61t1wTb8VLI4493yd6bK6k',
      location: 'Ukraine',
      Name: 'Andreas L',
      Position: 'Managing Director (CEO)',
      allSkills: 'Business Strategy, Management, Leadership, Business Planning',
      Linkedin: 'https://www.linkedin.com/in/andreas-l-b147219/',
    },
    {
      Name: 'Kevin Levey',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQEW77VJSV3Z1w/profile-displayphoto-shrink_800_800/0/1517247760559?e=1621468800&v=beta&t=z7XtqC0F4h_LWb07BZsPFuwmdRtcAWfHNiCVdil6U_s',
      Position: 'Head of Procurement',
      allSkills: '',
      location: 'Port Elizabeth, Eastern Cape, South Africa',
      Linkedin: 'https://www.linkedin.com/in/kevin-levey-478aa365/',
    },
  ],
  'Daimler AG': [
    {
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C4E03AQHr-qhhC_M4xw/profile-displayphoto-shrink_800_800/0/1601705479018?e=1621468800&v=beta&t=Q7hIgoIb8fkm7jNl1PLSzWPYgzD0fIug0JTLgrcU92w',
      location: 'Singapore, Singapore',
      Name: 'Claudius Steinhoff',
      Position: 'CEO Daimler South East Asia',
      allSkills:
        'Marketing, Treasury, Automobilindustrie, Vertrieb, Produktentwicklung, Produktmanagement, Englisch, Projektmanagement, Produktlebenszyklusmanagement, Digitalisierung, Emotionale Intelligenz, Projektleitung, Fahrzeuge, Produkteinführung, Kraftfahrzeuge',

      Linkedin: 'https://www.linkedin.com/in/claudius-steinhoff-69812611b/',
    },
    {
      Name: 'Peter Gierse',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGhV9AnufVpnQ/profile-displayphoto-shrink_800_800/0/1595334341374?e=1621468800&v=beta&t=Ttax5PvSHJ14hDVeEeBYa5TvGLdDLCnBw7KpIKLrBfc',
      location: 'Argentina',
      Position: 'Logistics Head',
      allSkills: '',

      Linkedin: 'https://www.linkedin.com/in/peter-gierse-1a335311/',
    },
    {
      Name: 'Amit Sharma',
      allSkills:
        'Supply Chain Management, Global Sourcing, Cross-functional Team Leadership, Automotive',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C4D03AQHE7XWbr7KMkA/profile-displayphoto-shrink_800_800/0/1516268571862?e=1621468800&v=beta&t=a8gokuoQbl5_nc8Byz7Uz7OhfwOuoacOlGIPSSQ6rf4',
      location: 'India',
      Position: 'Head of Procurement',
      Linkedin: 'https://www.linkedin.com/in/amitsharma28/',
    },
  ],
  'Lear Corporation': [
    {
      Name: 'Manikandan Thirumeni',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQEfxl9JCQ7URQ/profile-displayphoto-shrink_800_800/0/1584522783460?e=1621468800&v=beta&t=KltD9ooo0qkcDVqZpJ3ueU2Pt0lJJ726hZUTe8vlnds',
      location: 'Chennai, Tamil Nadu, India',
      Position: 'Head Of Operations',
      allSkills: '',
      Linkedin: 'https://www.linkedin.com/in/manikandanthirumeni/',
    },
    {
      Name: 'Deepak Tiwar',
      imgUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQEmxghCHJQlSQ/profile-displayphoto-shrink_800_800/0/1517516915153?e=1621468800&v=beta&t=LupnuZgHsQB1hPPw0xZirjSySLyUtHSPypRC4VHTroU',
      location: 'Pune, Maharashtra, India',
      Position: 'Senior Manager',
      allSkills:
        'Manufacturing, Kaizen, Quality Management, Automotive, TPM, ISO, Continuous Improvement',
      Linkedin: 'https://www.linkedin.com/in/deepak-tiwari-b6707471/',
    },
  ],
}
