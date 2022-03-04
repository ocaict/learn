
const courseArray = [
    {
        title: "Jamb CBT Practice",
        requirements: ["Ability to Read", "Learning Spirit", "Computer (Optional)"],
        topics: ["JAMB CBT Practice with real questions"],
        participants: ["Anyone who want to  master how to operate Computer before writing JAMB or Any other CBT Exams"],
        price: "4000"
    },
    {
        title: "JAMB CBT Practice & Computer Training",
        requirements: ["Ability to Read", "Learning Spirit", "Computer (Optional)"],
        topics: ["JAMB CBT Practice with real Jamb Questions", "Introduction To Computer", "Typing Skill", "Operating System", "Files and Folder", "Ms Pain", "Introduction to command line Interface (CLI)"],
        participants: ["Anyone who want to learn computer from scratch, Refresher, students, Teachers", "And More..."],
        price: "15000"
    },
    {
        title: "Certificate In  Computer Application",
        requirements: ["Ability to Read", "Learning Spirit", "Computer (Optional)"],
        topics: ["Introduction To Computer", "Typing Skill", "Operating System", "Files and Folder", "Ms Pain", "Introduction to command line Interface (CLI)"],
        participants: ["Those hho are preparing for JAMB ", "Anyone who want to learn computer from scratch, Refresher, students, Teachers", "And More..."],
        price: "12000"
    },
    {
        title: "Word Processing(Ms Word)",
        requirements: ["Basic of Computer", "Typing Skill"],
        topics: ["Introduction Word processing", "create proffessional doc", "Create Resume, Cv",],
        participants: ["Anyone who want to master Word Proccessing with MS Word", "Students and Teachers", "Writers and Authors", "Educationists", "Entrepreneurs"],
        price: "8000"
    },
    {
        title: "Presentation (MS Powerpoint)",
        requirements: ["Basic of Computer", "Typing Skill"],
        topics: ["Learn how to create present professioanl presentation"],
        participants: ["Anyone who want to perform proffessional presentation", "Students and Teachers", ""],
        price: "8000"
    },
    {
        title: "SpreadSheet (MS Excel)",
        requirements: ["Basic of Computer", "Typing Skill"],
        topics: ["Learn data analysis", "Data presentation"],
        participants: ["Anyone who want to master and perform data analysis with spreadsheet", "students and teachers", "School Proprietors", "Business Owners", "Data Analists"],
        price: "12000"
    },
    {
        title: "Desktop Publishing (DTP)",
        requirements: ["Basic of Computer", "Typing Skill"],
        topics: ["Learn How to create publication (books, brochure, magazine, newspaper, etc)", "Learn industrial standard application"],
        participants: ["Anyone who want to master and craete professional publications", "Authors", "Writers", "Journalists"],
        price: "10000"
    },
    {
        title: "Database Management Systenm (MS Access)",
        requirements: ["Basic of Computer", "Typing Skill"],
        topics: ["Learn How to craete RBMS with MS Access", "Form Design", "Query", "Inroduction to SQL", ""],
        participants: ["Anyone who want master Database Design with MS Access", "students, teachers", "School Proprietors", "Business Owners"],
        price: "15000"
    },
    {
        title: "CorelDraw Graphic Design",
        requirements: ["Basic of Computer", "Typing Skill"],
        topics: ["Master the art of  Graphic Design for Publication, web,  etc with CorelDraw", "Learn Logo Dseign", "Bill Board"],
        participants: ["Anyone who want master Graphic Desin with CorelDraw", "students, teachers", "School Proprietors", "Business Owners", "and More..."],
        price: "10000"
    },

    {
        title: "Internet/Networking",
        requirements: ["Basic of Computer", "Typing Skill"],
        topics: ["Learn everything you to know about internet & networking", "Understanding and application of Cloud Computing", "Email Management"],
        participants: ["Anyone who want master how to use internet effectively and productively in daily activites", "students, teachers", "School Proprietors", "Business Owners", "and More..."],
        price: "10000"
    },

    {
        title: "Website Design (WordPress CMS)",
        requirements: ["Computer Operation", "Typing Skill", "Basics of Graphic Design", "Computer with Internet Access"],
        topics: ["Introduction to CMS", "Set up Development Environment", "Download & Installation of WordPress"],
        participants: ["Anyone who want design professional websites of all kinds without writing a code", "Anyone who want to becomer web designer", "Wed Designer who want to learn new techniques", "Students and Teachers", "School Proprietors", "Business Owners", "and More..."],
        price: "20000"
    },
    {
        title: "Moodle LMS",
        requirements: ["Basics of Computer", "Typing Skill", "Basics of Graphic Design", "Computer with Internet Access"],
        topics: ["Introduction to LMS", "Set up Development Environment", "Download & Installation of Moodle"],
        participants: ["Anyone who want create professional couress, reporting system, etc with moodle LMS", "Students & Teachers", "School Proprietors", "Entrepreneurs", "Business Owners"],
        price: "25000"
    },
    {
        title: "Web Development (HTML, CSS & JavaScript)",
        requirements: ["Basics of Computer", "Typing Skill", "Basics of Graphic Design", "Computer with Internet Access"],
        topics: ["Introduction to Web Developmet", "Set up Development Environment", "Download & Installation of Software", "Learn Everything you need to know about the structure of website", "Apply styling to create intuitive appearance with CSS ", "Learn how to make website dynamic with Javascript", "introduction to Ajax JSON"],
        participants: ["Anyone who want develop professional website from scratch using HTML, CSS & JavaScript", "Anyone who want to learn new skill of Front End Development", "students and Teachers", "School Proprietors", "Business Owners", "industries"],
        price: "30000"
    },
    {
        title: "CSS Library (BootStrap)",
        requirements: ["HTML, CSS, JS", "Basics of Graphic Design", "Computer with Internet Access"],
        topics: ["Learn BootStrap CSS Library", "Set up Development Environment", "Download & Installation of Software"],
        participants: ["Front End web developer who want to learn BootStrap"],
        price: "10000"
    },
    {
        title: "Modern JavaScript (ES6+)",
        requirements: ["HTML, CSS, JS", "Basics of Graphic Design", "Computer with Internet Access"],
        topics: ["Learn Modern Javascript ES6+", "Set up Development Environment", "Download & Installation of Software"],
        participants: ["Front End web developer who want to learn advance JS ES6+"],
        price: "20000"
    },
    {
        title: "jQuery",
        requirements: ["HTML, CSS, JS", "Basics of Graphic Design", "Computer with Internet Access"],
        topics: ["Learn jQuery"],
        participants: ["Front End web developer who want to learn jQuery JS Libray"],
        price: "15000"
    },
    {
        title: "Node JS",
        requirements: ["HTML, CSS, JS", "Basics of Graphic Design", "Computer with Internet Access"],
        topics: ["Learn NodeJs and Express Framework"],
        participants: ["Front End web developer who want to learn server side programming with Node Js and Express and Other frameworks"],
        price: "30000"
    },
    {
        title: "PHP",
        requirements: ["HTML, CSS, JS", "Basics of Graphic Design", "Computer with Internet Access"],
        topics: ["Learn PHP Server Programming"],
        participants: ["Front End web developer who want to learn server side programming with PHP"],
        price: "30000"
    },
    {
        title: "SQL/MYSQL/SQLITE",
        requirements: ["Back-End Development", "Computer with Internet Access"],
        topics: ["Learn Relational Database Managenment System"],
        participants: ["Front End and Back End developer who want to learn server side Database integration with RBMS"],
        price: "25000"
    },
    {
        title: "Mongodb/Firebase Firestore",
        requirements: ["Back-End Development", "Computer with Internet Access"],
        topics: ["Learn Non Relational Database Managenment System ", "Learn MongoDB and Integration"],
        participants: ["Front End and Back End developer who want to learn server side Database integration with No SQL Database"],
        price: "20000"
    },
    {
        title: "React JS",
        requirements: ["HTML, CSS and JS esp es6+", "Computer with Internet Access"],
        topics: ["Learn Front End Development React JS"],
        participants: ["Front End and Back End developer who want to website and web app with React JS"],
        price: "25000"
    },
    {
        title: "React Native",
        requirements: ["HTML, CSS and JS esp es6+", "React JS", "Computer with Internet Access"],
        topics: ["Learn Mobile Development with React Native"],
        participants: ["Web Developer who want to develop mobile App with React Native"],
        price: "38000"
    },
    {
        title: "Ionic FrameWork",
        requirements: ["HTML, CSS and JS esp es6+", "Optional Angular, React, Vue,", "Computer with Internet Access"],
        topics: ["Learn Mobile App Development with Ionic and Capacitor"],
        participants: ["Web Developer who want to develop mobile App with Ionic FrameWork"],
        price: "35000"
    },
    {
        title: "Capacitor/Cordova",
        requirements: ["HTML, CSS and JS esp es6+", "Optional Angular, React, Vue,", "Computer with Internet Access"],
        topics: ["Learn Mobile App Development with capacitor/cordova"],
        participants: ["Web Developer who want to develop mobile App with Ionic Capacitor or Cordova"],
        price: "35000"
    },
    {
        title: "Electron JS",
        requirements: ["HTML, CSS and JS esp es6+", "Node JS", "Optional Angular, React, Vue,", "Computer with Internet Access"],
        topics: ["Learn Desktop App Development with Electron"],
        participants: ["Web Developer who want to develop Desktop App with Ionic Electron JS"],
        price: "45000"
    },
    {
        title: "eLearning Design/Development",
        requirements: ["Basics of Computer", "Typing Skill", "Graphic Knowledge", "Computer with Internet Access"],
        topics: ["Learn to create instructional eLearning Material"],
        participants: ["students and teachers", "educationists", "entrepreneurs", "Business People", "and More.."],
        price: "40000"
    },


]








