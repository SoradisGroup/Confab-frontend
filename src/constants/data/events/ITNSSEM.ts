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
    title:'Sustainable Management, Innovation, and Entrepreneurship',
    sessionsList:[
    'Sustainable business strategies and corporate responsibility',
    'Green innovation and eco-friendly technologies',
    'Entrepreneurship for sustainability and social impact',
    'Circular economy and sustainable value chains',
    'Startups and innovation ecosystems in sustainability',
    'Policy, governance, and financing for sustainable ventures',
    'Digital transformation for sustainable enterprises'
    ]
  },
  {
    key:4,
    title:'Sustainable Infrastructure & Smart Systems',
    sessionsList:[
    'Digital Twins for Energy Systems',
    'Smart Buildings & HVAC Optimization',
    'Urban & Industrial Energy Management',
    'CO₂ Reduction Strategies & Efficiency Enhancement',
    'AI-based Energy Monitoring Systems'
    ]
  },

  {
    key:5,
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
    key:6,
    title:'Engineering, Design & Materials',
    sessionsList:[
      'Electronic Chip Design for Network Systems',
      'VLSI & Embedded Systems for Monitoring',
      'Advanced Materials & Nanotechnology',
      'AI-Optimized Lightweight Materials'
    ]
  },
  {
    key:7,
    title:'Techno-Economic & Management Perspectives',
    sessionsList:[
    'Techno-Economic Analysis of Smart Grids',
    'Cost-Benefit Analysis of Hybrid Energy Systems',
    'Policy & Regulatory Frameworks',
    'Sustainable Development & Energy Economics',
    'Business Models for Smart Energy Solutions'
    ]
  },
  
    {
    key:8,
    title:'Mobile and Interactive Technologies for Smart Environments',
    sessionsList:[
    'Mobile applications for sustainability awareness and behavior change',
    'Human-computer interaction in smart systems',
    'Augmented reality (AR) and virtual reality (VR) for environmental education',
    'Edge computing and mobile IoT integration',
    'Context-aware and adaptive mobile systems',
    'Interactive platforms for real-time monitoring and decision support'
]

  },

    {
    key:9,
    title:'Engineering Pedagogy for Intelligent and Sustainable Systems',
    sessionsList:[
    'Curriculum development for sustainable engineering and smart technologies',
    'Outcome-based education and competency-driven learning',
    'Integration of AI, IoT, and data analytics in engineering education',
    'Experiential learning, project-based learning, and industry collaboration',
    'Use of virtual labs, simulations, and digital twins in teaching',
    'Engineering education for sustainable development and green skills',
    'Assessment strategies for innovation and problem-solving skills'
    ]
  },

    {
    key:10,
    title:'Artificial Intelligence–Led Engineering, Science, and Management',
    sessionsList:[
    'AI applications in engineering design, automation, and optimization',
    'Machine learning and deep learning in scientific research',
    'Intelligent decision support systems and predictive analytics',
    'AI-driven project and operations management',
    'Smart manufacturing and Industry 4.0 technologies',
    'Data-driven business strategies and organizational intelligence'
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
            {
                key:5,
                image:'/assets/images/ITNSSEM/ARaj.jpg',
                name:'Assoc. Prof. Dr. Anantha Raj A. Arokiasamy',
                role:'INTI International University',
                location:'Malaysia'
            },
            {
                key:6,
                image:'/assets/images/ITNSSEM/SRahman.jpg',
                name:'Assoc. Prof. Dr. Sophia Rahaman',
                role:'Manipal Academy of Higher Education, Dubai Campus',
                location:'UAE'
            },
            {
                key:7,
                image:'/assets/images/ITNSSEM/blank.webp',
                name:'Assoc. Prof. Dr. Vikineswaran A. Maniam',
                role:'INTI International University',
                location:'Malaysia'
            },
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
        title:'Industry Leaders',
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
                role:'HFounder & Director Enrich TSPL" and President & CEO - PMI Pune Deccan',
                location:'India'
            },
            {
                key:4,
                image:'/assets/images/ITNSSEM/KM.jpg',
                name:'Mr. Kailash Maisekar',
                role:'Country Director & Board Member, Idox Plc.',
                location:'India'
            },
            {
                key:5,
                image:'/assets/images/ITNSSEM/AS.jpg',
                name:'Mr. Avinash Samrit',
                role:'President/Country Manager, Clean Harbors',
                location:'India'
            },
            {
                key:4,
                image:'/assets/images/ITNSSEM/VD.jpg',
                name:'Mr. Vikram Avinash Dusane',
                role:'Senior Manager Global IT Programs, AGCO Corporation',
                location:'India'
            },
            {
                key:4,
                image:'/assets/images/ITNSSEM/YB.jpg',
                name:'Mr. Yakub Bhetasiwala',
                role:'Managing Director, Sharon Controls India Pvt Ltd',
                location:'India'
            },
            ]
            
    },
]

export const ChiefPatronList =[
            {
                key:1,
                image:'/assets/images/ITNSSEM/fchairman.jpg',
                name:'Dr.Vanki Penchalaiah',
                detail:'Founder, Audisankara Deemed to be University, Nellore'
            },
            {
                key:2,
                image:'/assets/images/ITNSSEM/AVanki.jpg',
                name:'Mrs. Aravinda Vanki',
                detail:'Chancellor, Audisankara Deemed to be University, Nellore'
            },
            {
                key:3,
                image:'/assets/images/ITNSSEM/kWen.jpg',
                name:'Prof. (Dr.). Goh Khang Wen',
                detail:'PhD, Pro Vice Chancellor, Global Engagement, International Relations and Collaborations Centre (IRCC), INTI International University, Malaysia'
            },
        ]


export const PatronList =[
            {
                key:1,
                image:'/assets/images/ITNSSEM/AMohan.jpg',
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
                image:'/assets/images/ITNSSEM/anuj.webp',
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
            {
                key:2,
                image:'/assets/images/ITNSSEM/DR.jpg',
                name:'Dr. Debabrata Roy',
                detail:'NSHM Knowledge Campus, Durgapur, India'
            },
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
            {
                key:3,
                // image:'/assets/images/ITNSSEM/xx.jpg',
                name:'Mr. Puspanathan Doraisingam',
                detail:'INTI International University, Malaysia'
            },
            
        ]

export const SCIntlList = [
  'Prof. Joe Houghton, UCD Michael Smurfit Graduate Business School, Dublin, Ireland',
  'Prof. (Dr.) Fernando Ortiz-Rodríguez, Universidad Autónoma de Tamaulipas, Mexico',
  'Prof. (Dr.) Asokan Vasudevan, INTI International University, Malaysia',
  'Prof. (Dr.) Anuj Kumar, Rushford Business School, Switzerland',
  'Prof. (Dr.) Arshi Naim, London Institute of Sustainable Development, United Kingdom',
  'Prof. (Dr.) Azlan Ali, Management and Science University, Malaysia',
  'Prof. (Dr.) Tareq Hashem, Applied Science University, Jordan',
  'Dr. Aryan Chaudhary, Thematic Working Group Member – Policy, Governance & Financing, World Health Organization, Denmark',
  'Dr. Miguel Sahagun, High-Point University, USA',
  'Assoc. Prof. Dr. Sophia Rahaman, Manipal Academy of Higher Education, Dubai Campus, UAE',
  'Assoc. Prof. Dr. Vikineswaran A. Maniam, INTI International University, Malaysia',
  'Assoc. Prof Dr. Anantha Raj A. Arokiasamy, INTI International University, Malaysia',
  'Assoc. Prof. Dr. Prabha Kiran, Westminster International University, Tashkent, Uzbekistan',
  'Assoc. Prof. Dr. Vu Thanh Huong, Vietnam National University, Hanoi, Vietnam',
  'Dr. Mulliati, S, Pd., M. Hum., M. Ed, Bosowa University, Indonesia',
  'Dr. Firman Menne, Bosowa University, Indonesia',
  'Dr. Rahaman Hasan, Canterbury Christ Church University, United Kingdom',
  'Dr. Haipeng Liu, Universidad Santa Paula, Costa RRica',
  'Dr. Lanita Winata, Griffith University, Australia',
  'Dr. Naim Ahmad, King Khalid University, Saudi Arabia',
  'Dr. Rasheedul Haque, MILA University, Malaysia',
  'Dr. Shaista Anwar, Liwa University, Abu Dhabi, United Arab Emirates',
  'Dr. Quang Minh Le, Vietnam National University, Hanoi, Vietnam',
  'Dr. Ahmad Shaheen, Arab Academy for Science, Technology and Maritime Transport, Egypt',
  'Dr. Abdullah M. Khataan, Arab Academy for Science, Technology and Maritime Transport, Egypt'

]

export const ERList = [
    'Prof. (Dr.) Chetan Choudhary, Sankalchand Patel University, Visnagar, India',
    'Dr. Shubham Singhania, Fore School of Management, New Delhi',
    'Dr. Millo Yaja, IIT Madras, Chennai, India',
    'Dr. Nikita Jain, Poornima College of Engineering, Jaipur, India',
    'Prof. (Dr.) Alok Satsangi, NSHM Knowledge Campus, Durgapur, India',
    'Prof. (Dr.) Deepshika Kalra, MERI, Delhi, India',
    'Prof. (Dr.) Kamal Kant Sharma, Chandigarh University, India',
    'Prof. (Dr.) Shamik Tiwari, IILM University, Gurugram, India',
    'Prof. (Dr.) Deepali Bhatnagar, Amity University Jaipur, India',
    'Prof. (Dr.) Purvi Pujari, Vijay Patil School of Management, Navi Mumbai, India',
    'Prof. (Dr.) Sunil Patel, Unitedworld School of Business, Karnavati University, India',
    'Prof. (Dr.) Aftab Haider Rizvi, Vijay Patil School of Management, Navi Mumbai, India',
    'Prof. (Dr.) Jayanta Chakraborti, Kirloskar Institute of Management, Pune, India',
    'Dr. Sri Sakuntala, Malla Reddy University, Hyderabad, India',
    'Dr. Sindhu Ravindranath, IBS Business School, Hyderabad, India',
    'Dr. Venkata Naga Manjula. P, IBS Hyderabad, IFHE Foundation, Hyderabad, India',
    'Dr. Gurpreet Kaur Chhabra, MERI College, Delhi, India',
    'Dr. Rashi Taggar, Shri Mata Vaishno Devi University, Jammu, India',
    'Assoc. Prof. Dr. Shirmila T., Madras Christian College, Chennai, India',
    'Assoc. Prof. Dr. Debasis Dash, SVKMs NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai, India',
    'Assoc. Prof. Dr. Asmat Ara Shaikh, Nutan Maharashtra Institute of Engineering & Technology, Talegaon, Pune',
    'Dr. Kuldeep Bhalerao, Bharati Vidyapeeths Institute of Management Studies & Research, Navi Mumbai, India',
    'Dr. Shreyas J., Manipal Institute of Technology, MAHE, Karnataka, India',
    'Dr. P. Johanna Jasmine, Madras Christian College, Chennai, India',
    'Dr. Jolly Masih, School of Management, BML Munjal University, Haryana, India',
    'Dr. Sonal Trivedi, Manav Rachna University, Faridabad, Haryana, India',
    'Dr. Pushan Kumar Dutta, Amity University Kolkata, India',
    'Dr. Prashant Chaudhary, Dr. Vishwanath Karad MIT World Peace University, Pune, India',
    'Dr. Sukhmeet Kaur, Dr. Vishwanath Karad MIT World Peace University, Pune, India',
    'Dr. Anjani Srivastava, Manav Rachna International Institute of Research and Studies, Haryana, India',
    'Dr. Arya Kumar, KIIT Deemed to be University, Odisha, India',
    'Dr. Sweta Leena Hota, KIIT Deemed to be University, Odisha, India',
    'Dr. Birendra Kumar Saraswat, GL Bajaj Institute of Technology and Management, Greater Noida, India',
    'Dr. Chirag Patel, Sankalchand Patel University, Visnagar, India',
    'Prof. (Dr.) A. Ibemcha Chanu, Bodoland University, Assam, India',
    'Dr. Sunny Nanade, SVKMs NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai, India'
]

export const InternationalAdvisoryList = [
  'Prof. (Dr.) Chetan Choudhary, Sankalchand Patel University, Visnagar, India',
  'Dr. Shubham Singhania, Fore School of Management, New Delhi',
  'Dr. Millo Yaja, IIT Madras, Chennai, India',
  'Dr. Nikita Jain, Poornima College of Engineering, Jaipur, India',
  'Prof. (Dr.) Alok Satsangi, NSHM Knowledge Campus, Durgapur, India',
  'Prof. (Dr.) Deepshika Kalra, MERI, Delhi, India',
  'Prof. (Dr.) Kamal Kant Sharma, Chandigarh University, India',
  'Prof. (Dr.) Shamik Tiwari, IILM University, Gurugram, India',
  'Prof. (Dr.) Deepali Bhatnagar, Amity University Jaipur, India',
  'Prof. (Dr.) Purvi Pujari, Vijay Patil School of Management, Navi Mumbai, India',
  'Prof. (Dr.) Sunil Patel, Unitedworld School of Business, Karnavati University, India',
  'Prof. (Dr.) Aftab Haider Rizvi, Vijay Patil School of Management, Navi Mumbai, India',
  'Prof. (Dr.) Jayanta Chakraborti, Kirloskar Institute of Management, Pune, India',
  'Dr. Sri Sakuntala, Malla Reddy University, Hyderabad, India',
  'Dr. Sindhu Ravindranath, IBS Business School, Hyderabad, India',
  'Dr. Venkata Naga Manjula. P, IBS Hyderabad, IFHE Foundation, Hyderabad, India',
  'Dr. Gurpreet Kaur Chhabra, MERI College, Delhi, India',
  'Dr. Rashi Taggar, Shri Mata Vaishno Devi University, Jammu, India',
  'Assoc. Prof. Dr. Shirmila T., Madras Christian College, Chennai, India',
  'Assoc. Prof. Dr. Debasis Dash, SVKMs NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai, India',
  'Assoc. Prof. Dr. Asmat Ara Shaikh, Nutan Maharashtra Institute of Engineering & Technology, Talegaon, Pune',
  'Dr. Kuldeep Bhalerao, Bharati Vidyapeeths Institute of Management Studies & Research, Navi Mumbai, India',
  'Dr. Shreyas J., Manipal Institute of Technology, MAHE, Karnataka, India',
  'Dr. P. Johanna Jasmine, Madras Christian College, Chennai, India',
  'Dr. Jolly Masih, School of Management, BML Munjal University, Haryana, India',
  'Dr. Sonal Trivedi, Manav Rachna University, Faridabad, Haryana, India',
  'Dr. Pushan Kumar Dutta, Amity University Kolkata, India',
  'Dr. Prashant Chaudhary, Dr. Vishwanath Karad MIT World Peace University, Pune, India',
  'Dr. Sukhmeet Kaur, Dr. Vishwanath Karad MIT World Peace University, Pune, India',
  'Dr. Anjani Srivastava, Manav Rachna International Institute of Research and Studies, Haryana, India',
  'Dr. Arya Kumar, KIIT Deemed to be University, Odisha, India',
  'Dr. Sweta Leena Hota, KIIT Deemed to be University, Odisha, India',
  'Dr. Birendra Kumar Saraswat, GL Bajaj Institute of Technology and Management, Greater Noida, India',
  'Dr. Chirag Patel, Sankalchand Patel University, Visnagar, India',
  'Dr. Sunny Nanade, SVKMs NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai, India'
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
    key: 1,
    image: '/assets/images/ITNSSEM/scopusLogo-600.png',
    title: 'Conference Proceedings',
    para: 'ISBN & Scopus Indexed'
  },
  {
    key: 2,
    image: '/assets/images/ITNSSEM/images.png',
    title: 'International Journal of Interactive Mobile Technologies',
    para: 'Scopus Indexed'
  },
  {
    key: 3,
    image: '/assets/images/ITNSSEM/sustainability-logo.png',
    title: 'Sustainability – MDPI',
    para: 'Scopus & SSCI Indexed'
  },
  {
    key: 4,
    image: '/assets/images/ITNSSEM/images1.jpg',
    title: 'Innovation and Emerging Technologies Journal',
    para: 'Scopus Indexed'
  },
  {
    key: 5,
    image: '/assets/images/ITNSSEM/images2.jpg',
    title: 'International Journal of Innovative Technology and Interdisciplinary Sciences',
    para: 'Scopus Indexed'
  },
  {
    key: 6,
    image: '/assets/images/ITNSSEM/images3.jpg',
    title: 'Journal of International Students',
    para: 'Scopus & Web of Science Indexed'
  },
  {
    key: 7,
    image: '/assets/images/ITNSSEM/International-Journal-of-Engineering-Pedagogy-1.png',
    title: 'International Journal of Engineering Pedagogy',
    para: 'Scopus Indexed'
  },
  {
    key: 8,
    image: '/assets/images/ITNSSEM/Journal-of-Information-and-Optimization-Sciences-1.png',
    title: 'Journal of Information and Optimization Sciences',
    para: 'Web of Science & ABDC Indexed'
  },
  {
    key: 9,
    image: '/assets/images/ITNSSEM/Journal-of-Statistics-and-Management-Systems-1.png',
    title: 'Journal of Statistics and Management Systems',
    para: 'ABDC Indexed'
  },
  {
    key: 10,
    image: '/assets/images/ITNSSEM/scopusLogo-600.png',
    title: 'Edited Books',
    para: 'Scopus Indexed'
  },
]
