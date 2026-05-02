// ══════════════════════════════════════════════════════════════════
//  CorpConnect — Shared Data Store & Helpers
//  All pages include this file.
// ══════════════════════════════════════════════════════════════════

const SEED = {
  users: [
    {id:1,name:"Arjun Kapoor",   email:"arjun.kapoor@innotech.com",   password:"manager123",role:"manager", profile_complete:1},
    {id:2,name:"Neha Sinha",     email:"neha.sinha@innotech.com",     password:"manager123",role:"manager", profile_complete:1},
    {id:3,name:"Priya Sharma",   email:"priya.sharma@innotech.com",   password:"emp123",   role:"employee",profile_complete:1},
    {id:4,name:"Rohan Mehta",    email:"rohan.mehta@innotech.com",    password:"emp123",   role:"employee",profile_complete:1},
    {id:5,name:"Isha Verma",     email:"isha.verma@innotech.com",     password:"emp123",   role:"employee",profile_complete:1},
    {id:6,name:"Karan Joshi",    email:"karan.joshi@innotech.com",    password:"emp123",   role:"employee",profile_complete:1},
    {id:7,name:"Ananya Patel",   email:"ananya.patel@innotech.com",   password:"emp123",   role:"employee",profile_complete:1},
    {id:8,name:"Vikram Singh",   email:"vikram.singh@innotech.com",   password:"emp123",   role:"employee",profile_complete:1},
    {id:9,name:"Meera Nair",     email:"meera.nair@innotech.com",     password:"emp123",   role:"employee",profile_complete:1},
    {id:10,name:"Aakash Gupta",  email:"aakash.gupta@innotech.com",   password:"emp123",   role:"employee",profile_complete:1},
    {id:11,name:"Tanvi Desai",   email:"tanvi.desai@innotech.com",    password:"emp123",   role:"employee",profile_complete:1},
    {id:12,name:"Siddharth Rao", email:"siddharth.rao@innotech.com",  password:"emp123",   role:"employee",profile_complete:1},
    {id:13,name:"Pooja Iyer",    email:"pooja.iyer@innotech.com",     password:"emp123",   role:"employee",profile_complete:1},
    {id:14,name:"Rahul Khanna",  email:"rahul.khanna@innotech.com",   password:"emp123",   role:"employee",profile_complete:0},
    {id:15,name:"Divya Malhotra",email:"divya.malhotra@innotech.com", password:"emp123",   role:"employee",profile_complete:1},
  ],
  profiles: [
    {user_id:1, job_title:"Engineering Manager",       dob:"1985-03-12",phone:"+91-9801234567",location:"Bangalore", bio:"15 years in enterprise software. Passionate about building high-performance teams."},
    {user_id:2, job_title:"HR Manager",                dob:"1988-07-25",phone:"+91-9812345678",location:"Mumbai",    bio:"HR leader focused on talent acquisition and employee growth."},
    {user_id:3, job_title:"Senior Frontend Developer", dob:"1997-09-04",phone:"+91-9823456789",location:"Bangalore", bio:"React enthusiast. Love building beautiful and functional UIs."},
    {user_id:4, job_title:"Full Stack Developer",      dob:"1996-11-20",phone:"+91-9834567890",location:"Hyderabad", bio:"Node.js and React developer with a knack for clean code."},
    {user_id:5, job_title:"Data Scientist",            dob:"1998-02-14",phone:"+91-9845678901",location:"Pune",      bio:"Turning raw data into actionable insights using ML and Python."},
    {user_id:6, job_title:"Backend Developer",         dob:"1995-05-30",phone:"+91-9856789012",location:"Chennai",   bio:"Microservices and cloud-native applications specialist."},
    {user_id:7, job_title:"UI/UX Designer",            dob:"1999-08-18",phone:"+91-9867890123",location:"Bangalore", bio:"Designing user-first experiences with Figma and research."},
    {user_id:8, job_title:"DevOps Engineer",           dob:"1994-12-05",phone:"+91-9878901234",location:"Delhi",     bio:"CI/CD pipelines, Kubernetes, and cloud infrastructure."},
    {user_id:9, job_title:"Mobile Developer",          dob:"1997-03-22",phone:"+91-9889012345",location:"Kolkata",   bio:"Flutter and React Native developer. Cross-platform enthusiast."},
    {user_id:10,job_title:"ML Engineer",               dob:"1996-06-15",phone:"+91-9890123456",location:"Bangalore", bio:"Deep learning models for NLP and computer vision."},
    {user_id:11,job_title:"QA Engineer",               dob:"1998-10-08",phone:"+91-9801234568",location:"Hyderabad", bio:"Ensuring product quality through automation and manual testing."},
    {user_id:12,job_title:"Cloud Architect",           dob:"1993-01-28",phone:"+91-9812345679",location:"Mumbai",    bio:"AWS and Azure certified cloud solutions architect."},
    {user_id:13,job_title:"Product Manager",           dob:"1995-04-11",phone:"+91-9823456780",location:"Bangalore", bio:"Bridging business and tech to ship impactful products."},
    {user_id:14,job_title:"Junior Developer",          dob:"2001-07-19",phone:"+91-9834567891",location:"Jaipur",    bio:"Fresh grad, eager to learn and contribute."},
    {user_id:15,job_title:"Cybersecurity Analyst",     dob:"1996-09-03",phone:"+91-9845678902",location:"Chennai",   bio:"Penetration testing, threat analysis, and security audits."},
  ],
  skills: [
    {id:1,user_id:3,skill:"React"},{id:2,user_id:3,skill:"TypeScript"},{id:3,user_id:3,skill:"CSS"},{id:4,user_id:3,skill:"Figma"},
    {id:5,user_id:4,skill:"Node.js"},{id:6,user_id:4,skill:"React"},{id:7,user_id:4,skill:"MongoDB"},{id:8,user_id:4,skill:"Express.js"},
    {id:9,user_id:5,skill:"Python"},{id:10,user_id:5,skill:"Machine Learning"},{id:11,user_id:5,skill:"Pandas"},{id:12,user_id:5,skill:"TensorFlow"},
    {id:13,user_id:6,skill:"Python"},{id:14,user_id:6,skill:"Django"},{id:15,user_id:6,skill:"PostgreSQL"},{id:16,user_id:6,skill:"Docker"},
    {id:17,user_id:7,skill:"Figma"},{id:18,user_id:7,skill:"UI/UX"},{id:19,user_id:7,skill:"Adobe XD"},{id:20,user_id:7,skill:"CSS"},
    {id:21,user_id:8,skill:"Docker"},{id:22,user_id:8,skill:"Kubernetes"},{id:23,user_id:8,skill:"AWS"},{id:24,user_id:8,skill:"CI/CD"},
    {id:25,user_id:9,skill:"Flutter"},{id:26,user_id:9,skill:"React Native"},{id:27,user_id:9,skill:"Dart"},{id:28,user_id:9,skill:"Firebase"},
    {id:29,user_id:10,skill:"Python"},{id:30,user_id:10,skill:"TensorFlow"},{id:31,user_id:10,skill:"NLP"},{id:32,user_id:10,skill:"PyTorch"},
    {id:33,user_id:11,skill:"Selenium"},{id:34,user_id:11,skill:"Cypress"},{id:35,user_id:11,skill:"JIRA"},{id:36,user_id:11,skill:"API Testing"},
    {id:37,user_id:12,skill:"AWS"},{id:38,user_id:12,skill:"Azure"},{id:39,user_id:12,skill:"Terraform"},{id:40,user_id:12,skill:"Kubernetes"},
    {id:41,user_id:13,skill:"Product Strategy"},{id:42,user_id:13,skill:"Agile"},{id:43,user_id:13,skill:"Figma"},{id:44,user_id:13,skill:"SQL"},
    {id:45,user_id:14,skill:"JavaScript"},{id:46,user_id:14,skill:"HTML"},{id:47,user_id:14,skill:"CSS"},
    {id:48,user_id:15,skill:"Penetration Testing"},{id:49,user_id:15,skill:"VAPT"},{id:50,user_id:15,skill:"Python"},{id:51,user_id:15,skill:"Network Security"},
  ],
  education: [
    {id:1,user_id:3, level:"B.Tech",institution:"IIT Delhi",        field:"Computer Science",   start_year:"2015",end_year:"2019",grade:"9.1 CGPA"},
    {id:2,user_id:4, level:"B.Tech",institution:"NIT Warangal",     field:"IT",                 start_year:"2014",end_year:"2018",grade:"8.8 CGPA"},
    {id:3,user_id:5, level:"M.Tech",institution:"IISc Bangalore",   field:"Data Science",       start_year:"2019",end_year:"2021",grade:"9.4 CGPA"},
    {id:4,user_id:6, level:"B.Tech",institution:"VIT Chennai",      field:"Computer Science",   start_year:"2013",end_year:"2017",grade:"8.5 CGPA"},
    {id:5,user_id:7, level:"B.Des", institution:"NID Ahmedabad",    field:"Interaction Design", start_year:"2017",end_year:"2021",grade:"A Grade"},
    {id:6,user_id:8, level:"B.Tech",institution:"DTU Delhi",        field:"Information Tech",   start_year:"2012",end_year:"2016",grade:"7.9 CGPA"},
    {id:7,user_id:9, level:"BCA",   institution:"Jadavpur Univ",    field:"Computer Apps",      start_year:"2016",end_year:"2019",grade:"8.2 CGPA"},
    {id:8,user_id:10,level:"M.S.",  institution:"IIT Bombay",       field:"AI & ML",            start_year:"2018",end_year:"2020",grade:"9.2 CGPA"},
    {id:9,user_id:12,level:"B.Tech",institution:"BITS Pilani",      field:"Computer Science",   start_year:"2011",end_year:"2015",grade:"8.9 CGPA"},
    {id:10,user_id:15,level:"B.Tech",institution:"Amity University",field:"Cybersecurity",      start_year:"2014",end_year:"2018",grade:"8.3 CGPA"},
  ],
  experience: [
    {id:1,user_id:3,company:"Flipkart",         role:"Frontend Developer",   start_date:"2019-07",end_date:"2022-03",is_current:0,description:"Built React components for the seller dashboard."},
    {id:2,user_id:3,company:"InnoTech Solutions",role:"Senior Frontend Dev",  start_date:"2022-04",end_date:"",       is_current:1,description:"Leading frontend for CorpConnect platform."},
    {id:3,user_id:4,company:"Zomato",           role:"Backend Developer",    start_date:"2018-06",end_date:"2021-11",is_current:0,description:"Microservices for food delivery platform."},
    {id:4,user_id:4,company:"InnoTech Solutions",role:"Full Stack Developer", start_date:"2021-12",end_date:"",       is_current:1,description:"Full stack development across enterprise projects."},
    {id:5,user_id:5,company:"Mu Sigma",         role:"Data Analyst",         start_date:"2021-07",end_date:"2023-02",is_current:0,description:"Statistical modeling for FMCG clients."},
    {id:6,user_id:5,company:"InnoTech Solutions",role:"Data Scientist",       start_date:"2023-03",end_date:"",       is_current:1,description:"Building ML pipelines for predictive analytics."},
    {id:7,user_id:8,company:"Infosys",          role:"DevOps Engineer",      start_date:"2016-08",end_date:"2020-05",is_current:0,description:"CI/CD and cloud infra for enterprise clients."},
    {id:8,user_id:8,company:"InnoTech Solutions",role:"DevOps Engineer",      start_date:"2020-06",end_date:"",       is_current:1,description:"Managing all cloud infrastructure and deployments."},
  ],
  personal_projects: [
    {id:1,user_id:3, name:"PortfolioGen",  description:"React-based portfolio generator",          status:"completed",tech_stack:"React, TailwindCSS, Firebase",  url:"github.com/priya/portfoliogen"},
    {id:2,user_id:4, name:"ChefBot",       description:"AI chatbot for recipe recommendations",    status:"ongoing",  tech_stack:"Node.js, OpenAI, MongoDB",        url:"github.com/rohan/chefbot"},
    {id:3,user_id:5, name:"StockSense",    description:"Stock prediction using LSTM networks",      status:"completed",tech_stack:"Python, TensorFlow, Pandas",       url:"github.com/isha/stocksense"},
    {id:4,user_id:7, name:"DesignSystem",  description:"Open-source component design system",      status:"ongoing",  tech_stack:"Figma, React, Storybook",          url:"github.com/ananya/ds"},
    {id:5,user_id:9, name:"TaskBuddy",     description:"Cross-platform task manager mobile app",   status:"completed",tech_stack:"Flutter, Firebase, Dart",           url:"github.com/meera/taskbuddy"},
    {id:6,user_id:10,name:"SentimentAI",   description:"Real-time Twitter sentiment dashboard",    status:"ongoing",  tech_stack:"Python, PyTorch, NLP, FastAPI",    url:"github.com/aakash/sentimentai"},
  ],
  company_projects: [
    {id:1,manager_id:1,name:"CorpConnect Platform",        description:"Enterprise corporate collaboration and project management platform connecting employees and managers for efficient skill-based project allocation.",                                  status:"active",   required_skills:"React,Node.js,PostgreSQL,UI/UX",             weekly_hours:40,team_size:5,team_head:"Priya Sharma",   start_date:"2024-01-15",end_date:"2025-06-30"},
    {id:2,manager_id:1,name:"AI Analytics Dashboard",      description:"Machine learning powered business intelligence dashboard for real-time KPI tracking and predictive analytics across all business units.",                                          status:"active",   required_skills:"Python,Machine Learning,React,TensorFlow",   weekly_hours:35,team_size:4,team_head:"Isha Verma",     start_date:"2024-03-01",end_date:"2025-03-31"},
    {id:3,manager_id:1,name:"Cloud Migration Initiative",  description:"Migrating legacy on-premise infrastructure to AWS cloud for improved scalability, reliability, and cost efficiency across all services.",                                          status:"upcoming", required_skills:"AWS,Docker,Kubernetes,Terraform",            weekly_hours:40,team_size:3,team_head:"Vikram Singh",   start_date:"2025-02-01",end_date:"2025-08-31"},
    {id:4,manager_id:2,name:"Mobile App — InnoHR",         description:"Cross-platform mobile HR management app for employees to manage leaves, payroll, performance reviews, and team communication.",                                                    status:"active",   required_skills:"Flutter,React Native,Firebase,UI/UX",        weekly_hours:30,team_size:3,team_head:"Meera Nair",     start_date:"2024-06-01",end_date:"2025-04-30"},
    {id:5,manager_id:1,name:"Cybersecurity Audit 2025",    description:"Comprehensive VAPT and security audit across all InnoTech digital products, APIs, and cloud infrastructure to ensure regulatory compliance.",                                      status:"upcoming", required_skills:"Penetration Testing,VAPT,Network Security,Python",weekly_hours:35,team_size:2,team_head:"Divya Malhotra",start_date:"2025-03-01",end_date:"2025-07-31"},
    {id:6,manager_id:2,name:"ERP System Upgrade",          description:"Upgrading legacy ERP system to modern microservices architecture with improved reporting, real-time data sync, and role-based access control.",                                    status:"completed",required_skills:"Django,PostgreSQL,Docker,CI/CD",             weekly_hours:40,team_size:4,team_head:"Karan Joshi",    start_date:"2023-08-01",end_date:"2024-12-31"},
    {id:7,manager_id:1,name:"Customer Portal v2",          description:"Redesigned self-service customer portal with improved UX, account management features, and real-time order tracking dashboard.",                                                    status:"upcoming", required_skills:"React,TypeScript,Figma,CSS",                weekly_hours:30,team_size:3,team_head:"Priya Sharma",   start_date:"2025-04-01",end_date:"2025-09-30"},
    {id:8,manager_id:2,name:"Data Warehouse Setup",        description:"Building a centralized enterprise data warehouse for cross-department analytics, automated reporting pipelines, and executive dashboards.",                                        status:"active",   required_skills:"Python,SQL,AWS,Machine Learning",            weekly_hours:35,team_size:3,team_head:"Aakash Gupta",   start_date:"2024-09-01",end_date:"2025-05-31"},
  ],
  project_assignments: [
    {id:1, project_id:1,employee_id:3, allocated_hours:40},{id:2, project_id:1,employee_id:4, allocated_hours:40},
    {id:3, project_id:1,employee_id:7, allocated_hours:30},{id:4, project_id:1,employee_id:11,allocated_hours:20},
    {id:5, project_id:2,employee_id:5, allocated_hours:35},{id:6, project_id:2,employee_id:10,allocated_hours:35},
    {id:7, project_id:2,employee_id:3, allocated_hours:20},{id:8, project_id:3,employee_id:8, allocated_hours:40},
    {id:9, project_id:3,employee_id:12,allocated_hours:40},{id:10,project_id:4,employee_id:9, allocated_hours:30},
    {id:11,project_id:4,employee_id:7, allocated_hours:25},{id:12,project_id:6,employee_id:6, allocated_hours:40},
    {id:13,project_id:6,employee_id:8, allocated_hours:30},{id:14,project_id:8,employee_id:5, allocated_hours:20},
    {id:15,project_id:8,employee_id:10,allocated_hours:35},
  ],
  time_logs: [
    {id:1, user_id:3, project_id:1,date:"2025-04-20",hours:8,notes:"Built nav component and routing"},
    {id:2, user_id:3, project_id:1,date:"2025-04-21",hours:7,notes:"Dashboard wireframes implementation"},
    {id:3, user_id:3, project_id:1,date:"2025-04-22",hours:8,notes:"Auth flow and login page"},
    {id:4, user_id:3, project_id:2,date:"2025-04-22",hours:4,notes:"ML results visualization"},
    {id:5, user_id:4, project_id:1,date:"2025-04-20",hours:8,notes:"REST API for user profiles"},
    {id:6, user_id:4, project_id:1,date:"2025-04-21",hours:8,notes:"Database schema and migrations"},
    {id:7, user_id:5, project_id:2,date:"2025-04-19",hours:7,notes:"Feature engineering pipeline"},
    {id:8, user_id:5, project_id:2,date:"2025-04-20",hours:8,notes:"Model training and evaluation"},
    {id:9, user_id:5, project_id:2,date:"2025-04-21",hours:6,notes:"Dashboard integration"},
    {id:10,user_id:8, project_id:3,date:"2025-04-18",hours:8,notes:"AWS architecture planning"},
    {id:11,user_id:8, project_id:3,date:"2025-04-19",hours:7,notes:"VPC and security groups setup"},
    {id:12,user_id:9, project_id:4,date:"2025-04-20",hours:6,notes:"Leave management screens"},
    {id:13,user_id:9, project_id:4,date:"2025-04-21",hours:7,notes:"Push notifications integration"},
    {id:14,user_id:10,project_id:8,date:"2025-04-20",hours:8,notes:"Data pipeline setup"},
    {id:15,user_id:3, project_id:1,date:"2025-04-23",hours:7,notes:"Profile edit form and API"},
    {id:16,user_id:3, project_id:1,date:"2025-04-24",hours:8,notes:"Notifications and messaging"},
    {id:17,user_id:6, project_id:6,date:"2025-04-15",hours:8,notes:"Django rest framework endpoints"},
    {id:18,user_id:12,project_id:3,date:"2025-04-22",hours:6,notes:"Terraform scripts for staging env"},
  ],
  messages: [
    {id:1, sender_id:1,receiver_id:3,content:"Hi Priya, great work on the dashboard. Can you add mobile responsiveness this week?",   ts:"2025-04-20 09:15"},
    {id:2, sender_id:3,receiver_id:1,content:"Sure Arjun! I'll have it ready by Thursday. Should I also review Figma designs for v2?", ts:"2025-04-20 09:42"},
    {id:3, sender_id:1,receiver_id:3,content:"Yes please! Ananya has shared the Figma link. Coordinate with her.",                     ts:"2025-04-20 10:05"},
    {id:4, sender_id:3,receiver_id:7,content:"Hey Ananya, do you have the Figma link for Customer Portal v2?",                          ts:"2025-04-21 11:00"},
    {id:5, sender_id:7,receiver_id:3,content:"Of course! Sending it over. Also love to sync on the design system components.",          ts:"2025-04-21 11:22"},
    {id:6, sender_id:1,receiver_id:4,content:"Rohan, can you finish the assignments API today? It's blocking the frontend team.",       ts:"2025-04-22 08:30"},
    {id:7, sender_id:4,receiver_id:1,content:"On it! Should be done by 5 PM. Will ping you once deployed to staging.",                 ts:"2025-04-22 08:45"},
    {id:8, sender_id:2,receiver_id:5,content:"Isha, the analytics dashboard looks amazing. Can we schedule a demo for leadership?",     ts:"2025-04-22 14:00"},
    {id:9, sender_id:5,receiver_id:2,content:"Absolutely! How about Tuesday 3 PM? I'll prepare the ML metrics walkthrough.",           ts:"2025-04-22 14:20"},
    {id:10,sender_id:1,receiver_id:8,content:"Vikram, what's the status on the cloud migration? We need an update for the board.",     ts:"2025-04-23 09:00"},
    {id:11,sender_id:8,receiver_id:1,content:"On track. VPC setup done, working on RDS migration this week. ETA end of month.",        ts:"2025-04-23 09:30"},
  ],
  notifications: [
    {id:1, user_id:3, type:"assignment",title:"Assigned to CorpConnect Platform",          body:"Added to Project #1. Allocated: 40 hrs/week.",    read:false,ts:"2024-01-16"},
    {id:2, user_id:3, type:"message",   title:"New message from Arjun Kapoor",             body:"Hi Priya, great work on the dashboard...",         read:true, ts:"2025-04-20"},
    {id:3, user_id:3, type:"assignment",title:"Assigned to AI Analytics Dashboard",        body:"Added to Project #2. Allocated: 20 hrs/week.",    read:false,ts:"2024-03-02"},
    {id:4, user_id:4, type:"assignment",title:"Assigned to CorpConnect Platform",          body:"Added to Project #1. Allocated: 40 hrs/week.",    read:true, ts:"2024-01-16"},
    {id:5, user_id:5, type:"assignment",title:"Assigned to AI Analytics Dashboard",        body:"Added to Project #2. Allocated: 35 hrs/week.",    read:false,ts:"2024-03-02"},
    {id:6, user_id:8, type:"assignment",title:"Assigned to Cloud Migration Initiative",    body:"Added to Project #3. Allocated: 40 hrs/week.",    read:false,ts:"2024-10-01"},
    {id:7, user_id:1, type:"welcome",   title:"Welcome to CorpConnect!",                  body:"You're set up as Engineering Manager.",            read:true, ts:"2023-12-01"},
    {id:8, user_id:3, type:"welcome",   title:"Welcome to CorpConnect, Priya!",           body:"Complete your profile to get discovered.",         read:true, ts:"2022-04-01"},
    {id:9, user_id:9, type:"assignment",title:"Assigned to Mobile App — InnoHR",          body:"Added to Project #4. Allocated: 30 hrs/week.",    read:false,ts:"2024-06-02"},
    {id:10,user_id:7, type:"assignment",title:"Assigned to CorpConnect Platform",         body:"Added to Project #1. Allocated: 30 hrs/week.",    read:true, ts:"2024-01-16"},
    {id:11,user_id:7, type:"assignment",title:"Assigned to Mobile App — InnoHR",          body:"Added to Project #4. Allocated: 25 hrs/week.",    read:false,ts:"2024-06-02"},
    {id:12,user_id:10,type:"assignment",title:"Assigned to AI Analytics Dashboard",       body:"Added to Project #2. Allocated: 35 hrs/week.",    read:false,ts:"2024-03-02"},
    {id:13,user_id:2, type:"welcome",   title:"Welcome to CorpConnect!",                  body:"You're set up as HR Manager.",                    read:true, ts:"2023-12-01"},
  ]
};

// ── LocalStorage-backed DB ──────────────────────────────────────────────────
function initDB() {
  if (!localStorage.getItem('cc_seeded')) {
    Object.keys(SEED).forEach(k => localStorage.setItem('cc_' + k, JSON.stringify(SEED[k])));
    localStorage.setItem('cc_seeded', '1');
    // next-ids
    localStorage.setItem('cc_nid', JSON.stringify({
      users:16,skills:52,education:11,experience:9,
      personal_projects:7,company_projects:9,
      project_assignments:16,time_logs:19,messages:12,notifications:14
    }));
  }
}

function getTable(name)       { return JSON.parse(localStorage.getItem('cc_' + name) || '[]'); }
function setTable(name, data) { localStorage.setItem('cc_' + name, JSON.stringify(data)); }
function nid(table) {
  const nids = JSON.parse(localStorage.getItem('cc_nid') || '{}');
  const id = (nids[table] || 1);
  nids[table] = id + 1;
  localStorage.setItem('cc_nid', JSON.stringify(nids));
  return id;
}

// ── Session ─────────────────────────────────────────────────────────────────
function getSession()         { return JSON.parse(sessionStorage.getItem('cc_session') || 'null'); }
function setSession(user)     { sessionStorage.setItem('cc_session', JSON.stringify(user)); }
function clearSession()       { sessionStorage.removeItem('cc_session'); }
function requireAuth(role) {
  const s = getSession();
  if (!s) { window.location.href = 'index.html'; return null; }
  if (role && s.role !== role) { window.location.href = 'dashboard.html'; return null; }
  return s;
}
function requireManager() { return requireAuth('manager'); }

// ── Query helpers ────────────────────────────────────────────────────────────
const DB = {
  get users()               { return getTable('users'); },
  get profiles()            { return getTable('profiles'); },
  get skills()              { return getTable('skills'); },
  get education()           { return getTable('education'); },
  get experience()          { return getTable('experience'); },
  get personal_projects()   { return getTable('personal_projects'); },
  get company_projects()    { return getTable('company_projects'); },
  get project_assignments() { return getTable('project_assignments'); },
  get time_logs()           { return getTable('time_logs'); },
  get messages()            { return getTable('messages'); },
  get notifications()       { return getTable('notifications'); },
};

function userById(id)   { return DB.users.find(u => u.id === +id) || {name:'Unknown',id}; }
function profileOf(uid) { return DB.profiles.find(p => p.user_id === +uid) || {}; }
function skillsOf(uid)  { return DB.skills.filter(s => s.user_id === +uid).map(s => s.skill); }
function assignedOf(uid){ return DB.project_assignments.filter(a => a.employee_id === +uid); }
function teamOf(pid)    { return DB.project_assignments.filter(a => a.project_id === +pid); }
function unreadCount(uid){ return DB.notifications.filter(n => n.user_id === +uid && !n.read).length; }
function todayStr()     { return new Date().toISOString().split('T')[0]; }
function daysAgo(n)     { const d=new Date(); d.setDate(d.getDate()-n); return d.toISOString().split('T')[0]; }

// ── Mutations ────────────────────────────────────────────────────────────────
const Mutate = {
  addNotification(user_id, type, title, body) {
    const n = getTable('notifications');
    n.push({id:nid('notifications'),user_id:+user_id,type,title,body,read:false,ts:todayStr()});
    setTable('notifications',n);
  },
  assignEmployee(project_id, employee_id, allocated_hours) {
    const t = getTable('project_assignments');
    const existing = t.find(a=>a.project_id===+project_id&&a.employee_id===+employee_id);
    if(existing){ existing.allocated_hours=+allocated_hours; setTable('project_assignments',t); return 'updated'; }
    t.push({id:nid('project_assignments'),project_id:+project_id,employee_id:+employee_id,allocated_hours:+allocated_hours});
    setTable('project_assignments',t);
    const proj = DB.company_projects.find(p=>p.id===+project_id);
    const emp  = userById(employee_id);
    this.addNotification(employee_id,'assignment',`Assigned to "${proj?.name||'project'}"`,`Allocated: ${allocated_hours} hrs/week`);
    return 'assigned';
  },
  removeAssignment(project_id, employee_id) {
    const t = getTable('project_assignments').filter(a=>!(a.project_id===+project_id&&a.employee_id===+employee_id));
    setTable('project_assignments',t);
  },
  sendMessage(sender_id, receiver_id, content) {
    const m = getTable('messages');
    const ts = new Date().toLocaleString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false,day:'2-digit',month:'2-digit'});
    m.push({id:nid('messages'),sender_id:+sender_id,receiver_id:+receiver_id,content,ts});
    setTable('messages',m);
    const sender = userById(sender_id);
    this.addNotification(receiver_id,'message',`Message from ${sender.name}`,content.slice(0,80));
  },
  logTime(user_id, project_id, date, hours, notes) {
    const t = getTable('time_logs');
    t.push({id:nid('time_logs'),user_id:+user_id,project_id:+project_id,date,hours:+hours,notes});
    setTable('time_logs',t);
  },
  deleteTimeLog(id) {
    setTable('time_logs', getTable('time_logs').filter(l=>l.id!==+id));
  },
  markAllRead(uid) {
    const n = getTable('notifications').map(x => x.user_id===+uid ? {...x,read:true} : x);
    setTable('notifications',n);
  },
  createProject(data) {
    const t = getTable('company_projects');
    const p = {...data, id:nid('company_projects')};
    t.push(p); setTable('company_projects',t); return p;
  },
  updateProject(id, data) {
    const t = getTable('company_projects').map(p => p.id===+id ? {...p,...data} : p);
    setTable('company_projects',t);
  },
  deleteProject(id) {
    setTable('company_projects', getTable('company_projects').filter(p=>p.id!==+id));
    setTable('project_assignments', getTable('project_assignments').filter(a=>a.project_id!==+id));
  },
  updateProfile(uid, data) {
    const t = getTable('profiles');
    const idx = t.findIndex(p=>p.user_id===+uid);
    if(idx>=0) t[idx]={...t[idx],...data}; else t.push({user_id:+uid,...data});
    setTable('profiles',t);
    // mark profile_complete
    const u = getTable('users').map(u => u.id===+uid ? {...u,profile_complete:1} : u);
    setTable('users',u);
    const s = getSession(); if(s&&s.id===+uid){ s.profile_complete=1; setSession(s); }
  },
  updateSkills(uid, skillList) {
    const t = getTable('skills').filter(s=>s.user_id!==+uid);
    skillList.forEach(sk => { if(sk.trim()) t.push({id:nid('skills'),user_id:+uid,skill:sk.trim()}); });
    setTable('skills',t);
  },
  addEducation(uid, data) {
    const t = getTable('education');
    t.push({id:nid('education'),user_id:+uid,...data});
    setTable('education',t);
  },
  addExperience(uid, data) {
    const t = getTable('experience');
    t.push({id:nid('experience'),user_id:+uid,...data});
    setTable('experience',t);
  },
  addPersonalProject(uid, data) {
    const t = getTable('personal_projects');
    t.push({id:nid('personal_projects'),user_id:+uid,...data});
    setTable('personal_projects',t);
  },
  signup(name,email,password,role) {
    const t = getTable('users');
    if(t.find(u=>u.email.toLowerCase()===email.toLowerCase())) return null;
    const uid = nid('users');
    const user = {id:uid,name,email:email.toLowerCase(),password,role,profile_complete:0};
    t.push(user); setTable('users',t);
    const p = getTable('profiles');
    p.push({user_id:uid,job_title:'',dob:'',phone:'',location:'',bio:''});
    setTable('profiles',p);
    this.addNotification(uid,'welcome',`Welcome to CorpConnect, ${name}!`,'Complete your profile to get discovered by managers.');
    return user;
  }
};

// ── UI Helpers ───────────────────────────────────────────────────────────────
function avatarHtml(name, size=36) {
  const colors = ['#c9a84c','#3b7dd8','#3dba78','#e05555','#9b59b6','#e67e22','#1abc9c'];
  const c = colors[name.charCodeAt(0) % colors.length];
  const fg = c==='#c9a84c'?'#0a0e1a':'#ffffff';
  const initials = name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${c};color:${fg};display:grid;place-items:center;font-weight:700;font-size:${Math.round(size*0.38)}px;flex-shrink:0">${initials}</div>`;
}
function badgeHtml(status) {
  const map = {active:'badge-active',upcoming:'badge-upcoming',completed:'badge-completed',ongoing:'badge-ongoing'};
  return `<span class="badge ${map[status]||'badge-gold'}">${status}</span>`;
}
function chipsHtml(arr) {
  return `<div class="chips">${arr.map(s=>`<span class="chip">${s}</span>`).join('')}</div>`;
}
function toast(msg, type='success') {
  const c = document.getElementById('toast-container');
  if(!c) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  c.appendChild(t);
  setTimeout(()=>t.remove(), 3500);
}
function qs(selector)     { return document.querySelector(selector); }
function param(key)       { return new URLSearchParams(location.search).get(key); }

// ── Sidebar renderer ─────────────────────────────────────────────────────────
function renderSidebar(active) {
  const s = getSession();
  if(!s) return;
  const unc = unreadCount(s.id);
  const employeeLinks = [
    {href:'dashboard.html',   icon:'⊞', label:'Dashboard'},
    {href:'profile.html',     icon:'◎', label:'My Profile'},
    {href:'projects.html',    icon:'◈', label:'Projects'},
    {href:'timelogs.html',    icon:'◷', label:'Time Logs'},
    {href:'messages.html',    icon:'◻', label:'Messages'},
    {href:'notifications.html',icon:'◬',label:'Notifications', badge: unc},
  ];
  const managerLinks = [
    {href:'dashboard.html',    icon:'⊞', label:'Dashboard'},
    {href:'projects.html',     icon:'◈', label:'Projects'},
    {href:'employees.html',    icon:'◉', label:'Employees'},
    {href:'timelogs.html',     icon:'◷', label:'Time Logs'},
    {href:'messages.html',     icon:'◻', label:'Messages'},
    {href:'notifications.html',icon:'◬', label:'Notifications', badge: unc},
  ];
  const links = s.role==='manager' ? managerLinks : employeeLinks;
  const el = document.getElementById('sidebar');
  if(!el) return;
  el.innerHTML = `
    <div class="sb-logo">
      <div class="sb-logo-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <span class="sb-logo-text">Corp<em>Connect</em></span>
    </div>
    <nav class="sb-nav">
      ${links.map(l=>`
        <a href="${l.href}" class="sb-link ${active===l.href?'active':''}">
          <span class="sb-icon">${l.icon}</span>
          <span>${l.label}</span>
          ${l.badge ? `<span class="sb-badge">${l.badge}</span>` : ''}
        </a>
      `).join('')}
    </nav>
    <div class="sb-user">
      ${avatarHtml(s.name, 34)}
      <div class="sb-user-info">
        <div class="sb-user-name">${s.name}</div>
        <span class="role-pill ${s.role}">${s.role}</span>
      </div>
      <a href="#" onclick="doLogout()" class="sb-logout" title="Sign out">⏻</a>
    </div>`;
}
function doLogout() { clearSession(); window.location.href = 'index.html'; }

// ── Boot ─────────────────────────────────────────────────────────────────────
initDB();
