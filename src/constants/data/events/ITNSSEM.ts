import { HiOutlineSpeakerphone } from "react-icons/hi"
import { IoDocumentTextOutline } from "react-icons/io5"
import { LuCalendarDays, LuCircleCheckBig } from "react-icons/lu"

export const ConferenceSessionsList =[
  {
    key:1,
    title:'Networked Computing & Data Analytics',
    sessionsList:[
        'Data Analytics & IoT in Smart Systems',
        'Machine Learning & Artificial Intelligence in Networking',
        'Cloud Computing & Edge Computing',
        'Distributed Systems & Blockchain Technologies',
        'Real-Time Data Streaming & Analytics',
        'Data Visualization & Interactive Systems',
        ]
  },{
    key:2,
    title:'Intelligent Energy Management & Control',
    sessionsList:[
       'Intelligent Control & Optimization (Neural Networks, Fuzzy Logic, MPC)',
       'Smart Microgrids & Residential Energy Networks',
       'Integration of Renewable Energy (Solar PV, Wind)',
       'Energy Storage Systems & Electric Vehicles',
       'Smart Grid Technologies'
    ]
  },
  {
    key:3,
    title:'Technology Integration in Business Management',
    sessionsList:[
    'Digital Twins for Energy Systems',
    'Smart Buildings & HVAC Optimization',
    'Urban & Industrial Energy Management',
    'CO₂ Reduction Strategies & Efficiency Enhancement',
    'AI-based Energy Monitoring Systems',
     'IT Governance, Risk, and Compliance in Modern Enterprises',
     'Leveraging Technology for Supply Chain and Operations Management'
    ]
  },
  {
    key:4,
    title:'Network Security & Advanced Technologies',
    sessionsList:[
      'Network Security & Cryptography',
      'Quantum Computing for Networked Systems',
      '5G & Next-Generation Wireless Networks',
      'Autonomous Systems & Networking',
      'Computer Vision over Networks'
    ]
  },
  
  {
    key:5,
    title:'Engineering, Design & Materials',
    sessionsList:[
      'Electronic Chip Design for Network Systems',
      'VLSI & Embedded Systems for Monitoring',
      'Advanced Materials & Nanotechnology',
      'AI-Optimized Lightweight Materials'
    ]
  },
  {
    key:6,
    title:' Techno-Economic & Management Perspectives',
    sessionsList:[
    'Techno-Economic Analysis of Smart Grids',
    'Cost-Benefit Analysis of Hybrid Energy Systems',
    'Policy & Regulatory Frameworks',
    'Sustainable Development & Energy Economics',
    'Business Models for Smart Energy Solutions'
    ]
  },
  
]


export const ImportantDateList = [
    {
        key:1,
        title:'Submission of Abstract (up to 500 words)',
        date:'8th August 2026',
        // status:'Extended',
        Icon:LuCalendarDays,
    },
    {
        key:2,
        title:'Decision on Abstract',
        date:'30th July 2026',
        // status:'Onward',
        Icon:LuCircleCheckBig
        
    },
    {
        key:3,
        title:'Final Paper Submission',
        date:'20th August 2026',
        status:'Tentative',
        Icon:IoDocumentTextOutline
    },
    {
        key:4,
        title:'Decision on Full Paper',
        date:'28th August 2026',
        status:'',
        Icon:HiOutlineSpeakerphone
    }
]


export const GuestList = [
    // {
    //     key:1,
    //     title:'Guest of Honor',
    //     GuestList: [
    //         {
    //             key:1,
    //             image:'/assets/images/ITNSSEM/xx.jpg',
    //             name:'Government officials (they will confirm at the time of the event)',
    //             role:'xx',
    //             location:'India'
    //         }
    //     ]
    // },
    // {
    //     key:2,
    //     title:'Chief Guest',
    //     GuestList: [
    //         {
    //             key:1,
    //             image:'/assets/images/ITNSSEM/xx.jpg',
    //             name:'Government officials (they will confirm at the time of the event)',
    //             role:'xx',
    //             location:'India'
    //         }
    //     ]
    // },
    {
        key:3,
        title:'Keynote Speakers',
        GuestList: [
             {
                key:1,
                image:'/assets/images/ITNSSEM/kath.jpg',
                name:'Prof. (Dr.) Kathrin G Kind',
                role:'Member World Economic Forum, Paris School of Management',
                location:'Switzerland'
            },
            {
                key:2,
                image:'/assets/images/ITNSSEM/Tareq.jpg',
                name:'Prof. (Dr.) Tareq Hashem',
                role:'Applied Science Private University',
                location:'Jordan'
            },
            {
                key:3,
                image:'/assets/images/ITNSSEM/AR.jpg',
                name:'Prof. (Dr.) Alvaro Rocha',
                role:'World Top 1% Scientist',
                location:'Portugal'
            },
            {
                key:4,
                image:'/assets/images/ITNSSEM/ashokan.jpg',
                name:'Prof. (Dr.) Asokan Vasudevan',
                role:'INTI International University',
                location:'Malaysia'
            },
            // {
            //     key:5,
            //     image:'/assets/images/ITNSSEM/Dr.-Lanita-WInata.jpg',
            //     name:'Prof. Dr. Goran Ilik',
            //     role:'Vice-Rector, University St. Kliment Ohridski in Bitola (yet to confirm)',
            //     location:'North Macedonia '
            // },
            // {
            //     key:6,
            //     image:'/assets/images/ITNSSEM/Dr.Pushan-Kumar-D-scaled.png',
            //     name:'xx',
            //     role:'INTI International University',
            //     location:'Malaysia'
            // },
            // {
            //     key:7,
            //     image:'/assets/images/ITNSSEM/Dr.-Sabyasachi-Saha.jpeg',
            //     name:'xx',
            //     role:'INTI International University',
            //     location:'Malaysia'
            // },
            // {
            //     key:8,
            //     image:'/assets/images//ITNSSEM//Anuj-kumra-1.webp',
            //     name:'xx',
            //     role:'INTI International University',
            //     location:'Malaysia'
            // },
    
        ],
        
    },
    {
        key:4,
        title:'Top Industry Leaders',
        GuestList: [
            {
                key:1,
                image:'/assets/images/ITNSSEM/AT.jpg',
                name:'Mr. Amit Talwar',
                role:'Country Director/India Leader- Agco Corporation',
                location:'Pune, India'
            },
            {
                key:2,
                image:'/assets/images/ITNSSEM/ST.jpg',
                name:'Mr. Sitaram Tadepalli',
                role:'Senior Vice President, DBS Bank',
                location:'India'
            },
            {
                key:3,
                image:'/assets/images/ITNSSEM/RR.jpg',
                name:'Mr. Rinoo Rajesh',
                role:'Head Business and Digital Transformation, Digitide',
                location:'India'
            },
            {
                key:4,
                image:'/assets/images/ITNSSEM/KM.jpg',
                name:'Mr. Kailash Maisekar',
                role:'Country Director & Board Member, Idox Plc.',
                location:'India'
            },
            ]
            
    },
]

export const ChiefPatronList =[
            {
                key:1,
                image:'/assets/images/ITNSSEM/vp.jpg',
                name:'Dr.Vanki Penchalaiah',
                detail:'Founder, Audisankara Deemed to be University, Nellore'
            },
            {
                key:2,
                image:'/assets/images/ITNSSEM/AV.jpg',
                name:'Mrs. Aravinda Vanki',
                detail:'Chancellor, Audisankara Deemed to be University, Nellore'
            },
        ]


export const PatronList =[
            {
                key:1,
                image:'/assets/images/ITNSSEM/xx.jpg',
                name:'Dr. A. Mohan Babu',
                detail:'Pro Vice Chancellor, Audisankara Deemed to be University, Nellore'
            },
            {
                key:2,
                image:'/assets/images/ITNSSEM/nishu.jpg',
                name:'Prof. (Dr.) Nishu Ayedee',
                detail:'Confab 360 Degree, India'
            },
            {
                key:3,
                image:'/assets/images/ITNSSEM/ak.jpg',
                name:'Prof. (Dr.) Anuj Kumar',
                detail:'Rushford Business School, Switzerland'
            },
            {
                key:4,
                image:'/assets/images/ITNSSEM/ashokan.jpg',
                name:'Prof. (Dr.) Asokan Vasudevan',
                detail:'Dean, INTI International University, Malaysia'
            },
        ]

export const ConvenerList =[
            {
                key:1,
                image:'/assets/images/ITNSSEM/rajaiah.jpg',
                name:'Dr. M. Rajaiah',
                detail:'Audisankara Deemed to be University, Nellore'
            },
            // {
            //     key:2,
            //     image:'/assets/images/ITNSSEM/XX.jpg',
            //     name:'XX',
            //     detail:'INTI International University, Malaysia'
            // },
        ]
    

export const Coconvenerlist =[
            {
                key:1,
                // image:'/assets/images/ITNSSEM/Dhanumjaya.jpg',
                name:'Dr. K. Dhanumjaya',
                detail:'Dean School of Engg. & Tech., Audisankara Deemed to be University, Nellore'
            },
            {
                key:2,
                // image:'/assets/images/ITNSSEM/Evelyn.jpg',
                name:'Dr. V. Evelyn Brinda',
                detail:'Dean Academics., Audisankara Deemed to be University, Nellore'
            },
            // {
            //     key:3,
            //     // image:'/assets/images/ITNSSEM/xx.jpg',
            //     name:'xx',
            //     detail:'xx, Audisankara Deemed to be University, Nellore'
            // },
            // {
            //     key:4,
            //     // image:'/assets/images/ITNSSEM/xx.jpg',
            //     name:'xx',
            //     detail:'xx, Audisankara Deemed to be University, Nellore'
            // },
            // {
            //     key:5,
            //     // image:'/assets/images/ITNSSEM/xx.jpg',
            //     name:'xx',
            //     detail:'xx, Confab 360 Degree'
            // },
        ]

export const InternationalAdvisoryList = [
  'Prof. (Dr.) Anoj Kumar, Rushford Business School, Switzerland',
  'Prof. (Dr.) Fernando Ortiz-Rodriguez, Universidad Autónoma de Tamaulipas, Mexico',
  'Dr. Miguel Sahagun, High Point University, North Carolina, USA',
  'Prof. (Dr.) Bhupinder Chahal, Yorkville University, Canada',
  'Dr. Jawid Nazir Mohamed Iqbal, Manipal Academy of Higher Education, UAE',
  'Dr. Kavita Tiwari, Manipal Academy of Higher Education, UAE',
  'Dr. Haiping Liu, Coventry University, United Kingdom',
  'Prof. (Dr.) Leo Paul Dana, Ecole de management de la Sorbonne, France',
  'Prof. (Dr.) Tareq Hashem, Applied Science Private University, Jordan',
  'Prof. (Dr.) Alvaro Rocha, ISEG Lisbon School of Economics and Management, Portugal',
  'Prof. (Dr.) A.K. Haghi, University of Guilan, Iran',
  'Dr. Sidar Atalay Simsek, Batman University, Türkiye',
  'Dr. Mostafa Mohammad, Zayed University, UAE',
  'Prof. (Dr.) Marko Peris, University of Rijeka, Croatia',
  'Dr. Jose Melchor Medina-Quintero, Universidad Autónoma de Tamaulipas, Mexico',
  'Dr. Norma Angelica Pedraza Melo, Universidad Autónoma de Tamaulipas, Mexico',
  'Dr. Shaista Anwar, Lowe College, UAE',
  'Dr. Shahd Ahmad Khan, University of Buraimi, Oman',
  'Dr. Wajieva Shakib, Yazd University, Iran',
  'Dr. Devi Manikeswar, School of Business, Bahrain',
  'Dr. Kasheedul Haque, Malaya University, Malaysia',
  'Dr. Sinisa Bogdan, University of Rijeka, Croatia',
  'Dr. Arati Nath, European Global Institute of Innovation and Technology, Malta',
  'Dr. Ahmad Alsarhan, Near East University of Technology and Innovation, Malaysia',
  'Prof. (Dr.) Rahat Ahmed, Bangladesh University of Professionals, Bangladesh',
  'Dr. Mitin Vyas, IIT Madras, Chennai, India',
  'Dr. Rashil Tagger, Shri Mata Vaishno Devi University, Jammu, India',
  'Prof. (Dr.) A. Ramendra Chanu, Reckland University, Assam, India',
  'Prof. (Dr.) Anoop Pandey, HNB Garhwal University, Uttarakhand, India',
  'Prof. (Dr.) Deepali Singhagat, Amity University, Rajasthan, India',
  'Prof. (Dr.) Sharath Thori, IILM University, Haryana, India',
  'Prof. (Dr.) Punit Pajari, Vijay Patil School of Management, Maharashtra, India',
  'Prof. (Dr.) Deepshikha Katia, MERI, New Delhi, India',
  'Prof. (Dr.) Gagandeep Kaur Nagra, Amity University, Maharashtra, India',
  'Prof. (Dr.) Kamal Kant Sharma, Chandigarh University, Punjab, India',
  'Dr. Shirmila T., Madras Christian College, Chennai, India',
  'Dr. Sonal Trivedi, VIT Bhopal University, Sehore, India',
  'Dr. Pushan Kumar Dutta, Amity University, Kolkata, India',
  'Dr. Sadhna Bagchi, AFT University of Media and Art, Chhattisgarh, India',
  'Dr. Birendra Kumar Saraswat, RGGIT, Uttar Pradesh, India',
  'Dr. Venkata Naga Manjula, P. Roots Degree College, Hyderabad, India',
  'Dr. Shreyas J., Manipal Institute of Technology, Karnataka, India',
  'Dr. Gurpreet Kaur Chhabra, MERI College, New Delhi, India'
]

export const ProgramCommitteeList = [
    {
        key: 1,
        image:'/assets/images/ITNSSEM/xx.jpg',
        name: 'Dr. SV Padmavathi Devi',
        detail: 'CSE (AI & ML)'
    },
    {
        key: 2,
        image:'/assets/images/ITNSSEM/xx.jpg',
        name: 'Dr. BVS Uma Prathyusha',
        detail: 'HoD, CSE(DS) and AI & DS'
    },
    {
        key: 3,
        image: '/assets/images/ITNSSEM/xx.jpg',
        name: 'Dr. N. Penchalaiah',
        detail: 'Professor, Dept. of CSE'
    },
    {
        key: 4,
        image: '/assets/images/ITNSSEM/xx.jpg',
        name: 'Dr. Kishore Mohan K.B',
        detail: 'HoD, ECE'
    },
    {
        key: 5,
        image: '/assets/images/ITNSSEM/xx.jpg',
        name: 'Dr. SA. Sivasankari',
        detail: 'Professor, Dept. of ECE'
    },
    {
        key: 6,
        image:'/assets/images/ITNSSEM/xx.jpg',
        name: 'Dr. P. Sreelakshmi',
        detail: 'Professor, Dept. of ECE'
    },
    {
        key: 7,
        image: '/assets/images/ITNSSEM/xx.jpg',
        name: 'Dr. G. V. Narayana',
        detail: 'Professor, Dept. of EEE'
    },
    {
        key: 8,
        image:'/assets/images/ITNSSEM/xx.jpg',
        name: 'Dr. Y. Harnadh',
        detail: 'HoD, Freshmen Engineering'
    },
    {
        key: 9,
        image:'/assets/images/ITNSSEM/xx.jpg',
        name: 'Dr. K. Vijaya Nirmala',
        detail: 'Dean School of Management Studies'
    },
    {
        key: 10,
        image:'/assets/images/ITNSSEM/xx.jpg',
        name: 'Dr. PMJ Stalin, Professor',
        detail: 'Dept. of MEC'
    },
    {
        key: 11,
        image:'/assets/images/ITNSSEM/xx.jpg',
        name: 'Prof. J. Suresh',
        detail: 'HoD, EEE'
    },
    {
        key: 12,
        image:'/assets/images/ITNSSEM/xx.jpg',
        name: 'Prof. G. Pranay Kumar',
        detail: 'HoD, CE'
    }
]

export const publicationsList = [
    {
        key:1,
        image:'/assets/images/ICAILIHMI/Indian-Journal-of-Environmental-Protection-1.png',
        title:'Indian Journal of Environmental Protection',
        para:'Scopus'
    },
    {
        key:2,
        image:'/assets/images/ICAILIHMI/Igi-global-2.webp',
        title:'IGI Global',
        para:'Will go for Scopus Indexing'
    },
    {
        key:3,
        image:'/assets/images/ICAILIHMI/Journal-of-Statistics-and-Management-Systems-1.png',
        title:'Journal of Statistics and Management Systems',
        para:'Scopus Q2'
    },
    {
        key:4,
        image:'/assets/images/ICAILIHMI/International-Journal-of-Engineering-Pedagogy-1.png',
        title:'International Journal of Engineering Pedagogy',
        para:''
    },{
        key:5,
        image:'/assets/images/ICAILIHMI/Journal-of-Information-and-Optimization-Sciences-1.png',
        title:'Journal of Information and Optimization Sciences',
        para:'Scopus Q2'
    },
    {
        key:6,
        image:'/assets/images/ICAILIHMI/scopusLogo-600.png',
        title:'Scopus',
        para:'Will go for Scopus Indexing'
    }
]
