// ===== Mock data — swap for a real API later =====

const FIELDS = ["Computer Science","Medical","Commerce / CA","Pure Science","Arts & Design","Environment","NGO / Social","All Fields"];

const BADGES = [
  {id:"bronze", name:"Bronze", min:1, icon:"🥉", color:"#CD7F32", desc:"1+ verified participation"},
  {id:"silver", name:"Silver", min:5, icon:"🥈", color:"#B9C0C6", desc:"5+ verified participations"},
  {id:"gold",   name:"Gold",   min:10, icon:"🥇", color:"#F5A623", desc:"10+ verified participations"},
  {id:"elite",  name:"Elite",  min:20, icon:"💎", color:"#0E7C7B", desc:"20+ verified participations, top answer rate"},
];

// ===== Competitions — 7+ subcategories, 15+ listings (all subcategories represented) =====
const COMPETITIONS = [
  {id:"c1", sub:"Technical", title:"National Hackathon — BuildIndia 2026", host:"IIT Madras E-Cell", field:"Computer Science", mode:"Offline", fee:0, prize:"₹1,50,000", deadline:"2026-09-10", lat:13.0827,lng:80.2707, apply:"https://example.com/buildindia", contact:"events@iitm-ecell.in"},
  {id:"c2", sub:"Technical", title:"CodeSprint — Inter-College Coding Cup", host:"SRM Institute", field:"Computer Science", mode:"Online", fee:0, prize:"₹40,000", deadline:"2026-08-25", lat:12.9250,lng:80.0421, apply:"https://example.com/codesprint", contact:"cs-cup@srmist.edu.in"},
  {id:"c3", sub:"VJ/RJ", title:"Campus RJ Hunt Season 4", host:"Loyola College Media Club", field:"Arts & Design", mode:"Offline", fee:100, prize:"₹15,000 + Radio Internship", deadline:"2026-09-02", lat:13.0067,lng:80.2569, apply:"https://example.com/rjhunt", contact:"media@loyolacollege.edu"},
  {id:"c4", sub:"VJ/RJ", title:"VJ Star — Youth Video Jockey Contest", host:"Anna University Media Cell", field:"Arts & Design", mode:"Offline", fee:150, prize:"₹20,000", deadline:"2026-09-18", lat:13.0107,lng:80.2350, apply:"https://example.com/vjstar", contact:"vjstar@annauniv.edu"},
  {id:"c5", sub:"Mime", title:"Silent Voices — State Mime Championship", host:"Stella Maris College", field:"Arts & Design", mode:"Offline", fee:0, prize:"₹12,000", deadline:"2026-08-30", lat:13.0369,lng:80.2707, apply:"https://example.com/mime", contact:"culturals@stellamaris.edu.in"},
  {id:"c6", sub:"Essay Writing", title:"Young Writers' Essay Prize — Climate Futures", host:"WWF India Campus Chapter", field:"Environment", mode:"Online", fee:0, prize:"₹10,000 + Publication", deadline:"2026-09-05", lat:28.6139,lng:77.2090, apply:"https://example.com/essay-climate", contact:"campus@wwfindia.org"},
  {id:"c7", sub:"Oratorical/Debate", title:"Inter-Zonal Parliamentary Debate", host:"Madras Debating Union", field:"All Fields", mode:"Offline", fee:200, prize:"₹25,000", deadline:"2026-09-12", lat:13.0604,lng:80.2496, apply:"https://example.com/debate", contact:"info@madrasdebate.org"},
  {id:"c8", sub:"Dance", title:"Rhythm Nation — Open Dance Battle", host:"Chennai Dance Collective", field:"Arts & Design", mode:"Offline", fee:100, prize:"₹18,000", deadline:"2026-08-28", lat:13.0475,lng:80.2824, apply:"https://example.com/rhythm-nation", contact:"battle@cdc.in"},
  {id:"c9", sub:"Singing", title:"Sur Sangam — Playback Singing Contest", host:"Ethiraj College", field:"Arts & Design", mode:"Offline", fee:50, prize:"₹15,000 + Studio Session", deadline:"2026-09-08", lat:13.0641,lng:80.2610, apply:"https://example.com/sursangam", contact:"music@ethirajcollege.edu.in"},
  {id:"c10", sub:"Arts & Crafts", title:"Recycled Reverie — Sustainable Art Challenge", host:"DakshinaChitra Foundation", field:"Environment", mode:"Offline", fee:0, prize:"₹8,000", deadline:"2026-09-20", lat:12.8230,lng:80.2440, apply:"https://example.com/recycled-art", contact:"programs@dakshinachitra.net"},
  {id:"c11", sub:"Short Films", title:"1-Minute Reel Fest — Campus Stories", host:"Loyola-ICAM College of Engineering", field:"Arts & Design", mode:"Online", fee:0, prize:"₹22,000", deadline:"2026-09-15", lat:13.0450,lng:80.1900, apply:"https://example.com/reelfest", contact:"film@licet.ac.in"},
  {id:"c12", sub:"Story Writing", title:"Tamil-English Bilingual Short Story Prize", host:"Sahitya Circle", field:"Arts & Design", mode:"Online", fee:0, prize:"₹10,000", deadline:"2026-09-22", lat:13.0827,lng:80.2707, apply:"https://example.com/story-prize", contact:"editor@sahityacircle.in"},
  {id:"c13", sub:"Sports · Outdoor", title:"Inter-College Athletics Meet", host:"Tamil Nadu Sports Board", field:"All Fields", mode:"Offline", fee:0, prize:"Medals + Kit Sponsorship", deadline:"2026-09-01", lat:13.0674,lng:80.2376, apply:"https://example.com/athletics", contact:"sports@tnsportsboard.gov.in"},
  {id:"c14", sub:"Sports · Outdoor", title:"Kabaddi Premier Cup — Collegiate", host:"Chennai Kabaddi Association", field:"All Fields", mode:"Offline", fee:0, prize:"₹30,000 team prize", deadline:"2026-09-14", lat:13.0358,lng:80.2297, apply:"https://example.com/kabaddi", contact:"office@cka.in"},
  {id:"c15", sub:"Sports · Indoor", title:"State Collegiate Chess Championship", host:"Tamil Nadu Chess Association", field:"All Fields", mode:"Offline", fee:100, prize:"₹20,000 + Trophy", deadline:"2026-09-06", lat:13.0475,lng:80.2100, apply:"https://example.com/chess", contact:"tnca@chessindia.org"},
  {id:"c16", sub:"Sports · Indoor", title:"Carrom Clash — Online Qualifiers", host:"India Carrom Federation", field:"All Fields", mode:"Online", fee:0, prize:"₹5,000", deadline:"2026-08-27", lat:13.0827,lng:80.2707, apply:"https://example.com/carrom", contact:"play@carromfed.in"},
  {id:"c17", sub:"Technical", title:"AI for Bharat — Student ML Challenge", host:"NASSCOM Campus Connect", field:"Computer Science", mode:"Online", fee:0, prize:"₹75,000 + Internship offers", deadline:"2026-09-25", lat:12.9716,lng:77.5946, apply:"https://example.com/ai-bharat", contact:"campus@nasscom.in"},
];

// ===== Internships — 9 listings across fields =====
const INTERNSHIPS = [
  {id:"i1", sub:"Software", title:"Frontend Engineering Intern", host:"Freshworks", field:"Computer Science", mode:"Offline", fee:0, prize:"₹18,000/mo stipend", deadline:"2026-08-29", lat:13.0067,lng:80.2206, apply:"https://example.com/freshworks-fe", contact:"campus@freshworks.com"},
  {id:"i2", sub:"Clinical", title:"Clinical Research Intern", host:"Apollo Hospitals", field:"Medical", mode:"Offline", fee:0, prize:"₹10,000/mo stipend", deadline:"2026-09-03", lat:13.0358,lng:80.2496, apply:"https://example.com/apollo-clinical", contact:"research@apollohospitals.com"},
  {id:"i3", sub:"Audit/Finance", title:"Audit Trainee — Summer Internship", host:"Deloitte India", field:"Commerce / CA", mode:"Offline", fee:0, prize:"₹15,000/mo stipend", deadline:"2026-09-11", lat:13.0067,lng:80.2569, apply:"https://example.com/deloitte-audit", contact:"campus.in@deloitte.com"},
  {id:"i4", sub:"Data Science", title:"Remote Data Science Internship (Chennai-friendly)", host:"GreenAI Labs", field:"Computer Science", mode:"Online", fee:0, prize:"₹12,000/mo stipend", deadline:"2026-08-31", lat:13.0827,lng:80.2707, apply:"https://example.com/greenai-ds", contact:"hr@greenailabs.io"},
  {id:"i5", sub:"Field Research", title:"Environmental Field Research Intern", host:"Care Earth Trust", field:"Environment", mode:"Offline", fee:0, prize:"Unpaid + certificate", deadline:"2026-09-07", lat:13.0475,lng:80.2200, apply:"https://example.com/careearth", contact:"volunteer@careearth.org"},
  {id:"i6", sub:"Lab Assistant", title:"Pure Science Lab Assistant Internship", host:"IIT Madras Physics Dept", field:"Pure Science", mode:"Offline", fee:0, prize:"₹8,000/mo stipend", deadline:"2026-09-16", lat:12.9915,lng:80.2337, apply:"https://example.com/iitm-physics", contact:"physics-intern@iitm.ac.in"},
  {id:"i7", sub:"Marketing", title:"Digital Marketing Intern", host:"Zoho Corporation", field:"Commerce / CA", mode:"Online", fee:0, prize:"₹10,000/mo stipend", deadline:"2026-09-12", lat:12.9698,lng:79.1560, apply:"https://example.com/zoho-marketing", contact:"careers@zohocorp.com"},
  {id:"i8", sub:"UI/UX Design", title:"UI/UX Design Internship", host:"Chargebee", field:"Arts & Design", mode:"Offline", fee:0, prize:"₹15,000/mo stipend", deadline:"2026-09-20", lat:13.0012,lng:80.2565, apply:"https://example.com/chargebee-uiux", contact:"design@chargebee.com"},
  {id:"i9", sub:"Content Writing", title:"Content Writing Intern — EdTech", host:"BYJU'S", field:"Arts & Design", mode:"Online", fee:0, prize:"₹8,000/mo stipend", deadline:"2026-09-05", lat:12.9352,lng:77.6146, apply:"https://example.com/byjus-content", contact:"intern@byjus.com"},
];

// ===== Freelance — 9 listings across gig subcategories =====
const FREELANCE = [
  {id:"fl1", sub:"Content Writing", title:"Blog Content Writer — Tech Niche", host:"WriteWorks Agency", field:"Arts & Design", mode:"Online", fee:0, prize:"₹3–₹6/word, per article", deadline:"2026-09-15", lat:13.0827,lng:80.2707, apply:"https://example.com/freelance-content", contact:"gigs@writeworks.in"},
  {id:"fl2", sub:"Graphic Design", title:"Logo & Poster Design Gigs", host:"PixelCraft Studio", field:"Arts & Design", mode:"Online", fee:0, prize:"₹500–₹3,000 per project", deadline:"2026-09-18", lat:13.0475,lng:80.2200, apply:"https://example.com/freelance-design", contact:"hire@pixelcraft.in"},
  {id:"fl3", sub:"Web Development", title:"Landing Page Builder — Small Business Clients", host:"CodeCanopy Freelance Network", field:"Computer Science", mode:"Online", fee:0, prize:"₹4,000–₹12,000 per site", deadline:"2026-09-25", lat:12.9716,lng:77.5946, apply:"https://example.com/freelance-webdev", contact:"projects@codecanopy.io"},
  {id:"fl4", sub:"Video Editing", title:"Reels & Short-Form Video Editor", host:"ClipCrate Creators Collective", field:"Arts & Design", mode:"Online", fee:0, prize:"₹800–₹2,500 per reel", deadline:"2026-09-10", lat:13.0641,lng:80.2610, apply:"https://example.com/freelance-video", contact:"edit@clipcrate.in"},
  {id:"fl5", sub:"Data Entry", title:"Remote Data Entry & Cleanup Gigs", host:"DataDost Services", field:"Commerce / CA", mode:"Online", fee:0, prize:"₹300–₹800 per batch", deadline:"2026-09-08", lat:13.0067,lng:80.2569, apply:"https://example.com/freelance-dataentry", contact:"work@datadost.in"},
  {id:"fl6", sub:"Translation", title:"Tamil-English Translation Projects", host:"BhashaBridge", field:"Arts & Design", mode:"Online", fee:0, prize:"₹1–₹2/word", deadline:"2026-09-22", lat:13.0369,lng:80.2707, apply:"https://example.com/freelance-translation", contact:"jobs@bhashabridge.com"},
  {id:"fl7", sub:"Social Media", title:"Social Media Management — Campus Startups", host:"BuzzBoard Freelancers", field:"Commerce / CA", mode:"Online", fee:0, prize:"₹2,000–₹5,000/month", deadline:"2026-09-14", lat:13.0107,lng:80.2350, apply:"https://example.com/freelance-social", contact:"team@buzzboard.in"},
  {id:"fl8", sub:"Voiceover", title:"Regional Language Voiceover Gigs", host:"VoiceVerse Studio", field:"Arts & Design", mode:"Online", fee:0, prize:"₹500–₹2,000 per clip", deadline:"2026-09-19", lat:13.0450,lng:80.1900, apply:"https://example.com/freelance-voiceover", contact:"cast@voiceverse.in"},
  {id:"fl9", sub:"Online Tutoring", title:"Peer Tutoring — School Maths & Science", host:"LearnLoop Freelance Tutors", field:"Pure Science", mode:"Online", fee:0, prize:"₹200–₹400/hour", deadline:"2026-09-28", lat:13.0827,lng:80.2707, apply:"https://example.com/freelance-tutoring", contact:"tutors@learnloop.in"},
];

// ===== Scholarships — 9 listings, every entry has explicit eligibility =====
const SCHOLARSHIPS = [
  {id:"s1", title:"National Merit Scholarship", host:"Govt. of Tamil Nadu", field:"All Fields", mode:"Online", fee:0, prize:"₹50,000/year", deadline:"2026-09-30", lat:13.0827,lng:80.2707, apply:"https://example.com/tn-merit", contact:"scholarships@tn.gov.in", eligibility:"Family income below ₹2.5L/year, 85%+ marks in last exam"},
  {id:"s2", title:"First-Generation Learner Scholarship", host:"Private Trust — Sundaram Foundation", field:"All Fields", mode:"Online", fee:0, prize:"Full tuition waiver", deadline:"2026-09-18", lat:13.0067,lng:80.2569, apply:"https://example.com/sundaram-fg", contact:"grants@sundaramfoundation.in", eligibility:"First graduate in family, enrolled in a recognised UG/PG program"},
  {id:"s3", title:"Sports Scholarship — Athletics Kit Sponsorship", host:"SAI Regional Centre", field:"All Fields", mode:"Offline", fee:0, prize:"Kit + ₹20,000/year", deadline:"2026-09-05", lat:13.0674,lng:80.2376, apply:"https://example.com/sai-kit", contact:"regional@sportsauthority.gov.in", eligibility:"State-level medal or higher in last 2 years, active team/college certificate"},
  {id:"s4", title:"Women in STEM Scholarship", host:"College Internal Fund", field:"Pure Science", mode:"Online", fee:0, prize:"₹30,000/year", deadline:"2026-09-25", lat:13.0369,lng:80.2707, apply:"https://example.com/women-stem", contact:"deanoffice@college.edu", eligibility:"Female student, STEM major, 75%+ marks, no other active scholarship"},
  {id:"s5", title:"Minority Community Education Grant", host:"Govt. of India — Ministry of Minority Affairs", field:"All Fields", mode:"Online", fee:0, prize:"₹35,000/year", deadline:"2026-10-05", lat:28.6139,lng:77.2090, apply:"https://example.com/minority-grant", contact:"help@minorityaffairs.gov.in", eligibility:"Belongs to a notified minority community, family income below ₹2L/year"},
  {id:"s6", title:"Differently-Abled Student Support Scholarship", host:"Tamil Nadu Higher Education Dept.", field:"All Fields", mode:"Offline", fee:0, prize:"₹40,000/year + assistive devices", deadline:"2026-09-27", lat:13.0827,lng:80.2707, apply:"https://example.com/pwd-scholarship", contact:"support@tnhed.gov.in", eligibility:"40%+ disability certificate, enrolled full-time in a recognised institution"},
  {id:"s7", title:"Rural Talent Scholarship", host:"Rural Upliftment Foundation", field:"All Fields", mode:"Online", fee:0, prize:"₹25,000/year", deadline:"2026-09-16", lat:11.6643,lng:78.1460, apply:"https://example.com/rural-talent", contact:"grants@ruraluplift.org", eligibility:"Studied 10th & 12th in a rural/govt. school, 70%+ marks"},
  {id:"s8", title:"Commerce & CA Foundation Scholarship", host:"ICAI Alumni Trust", field:"Commerce / CA", mode:"Online", fee:0, prize:"₹20,000 one-time", deadline:"2026-09-21", lat:13.0067,lng:80.2569, apply:"https://example.com/ca-foundation-scholar", contact:"trust@icaialumni.in", eligibility:"Registered for CA Foundation/Inter, 60%+ in last qualifying exam"},
  {id:"s9", title:"Arts & Design Creative Grant", host:"DakshinaChitra Foundation", field:"Arts & Design", mode:"Online", fee:0, prize:"₹15,000 + mentorship", deadline:"2026-09-29", lat:12.8230,lng:80.2440, apply:"https://example.com/arts-creative-grant", contact:"grants@dakshinachitra.net", eligibility:"Enrolled in a fine arts/design program, portfolio submission required"},
];

const RESEARCH = [
  {id:"r1", sub:"Genomics", title:"Summer Research Fellowship in Genomics", host:"CCMB Hyderabad", field:"Medical", mode:"Offline", fee:0, prize:"₹12,000/mo + housing", deadline:"2026-09-09", lat:17.4126,lng:78.4482, apply:"https://example.com/ccmb-genomics", contact:"outreach@ccmb.res.in"},
  {id:"r2", sub:"NLP", title:"Undergrad Research Assistantship — NLP", host:"IIIT Hyderabad", field:"Computer Science", mode:"Offline", fee:0, prize:"₹10,000/mo", deadline:"2026-09-13", lat:17.4457,lng:78.3489, apply:"https://example.com/iiith-nlp", contact:"nlp-lab@iiit.ac.in"},
  {id:"r3", sub:"Public Policy", title:"Commerce & Public Policy Research Program", host:"Madras School of Economics", field:"Commerce / CA", mode:"Offline", fee:0, prize:"₹8,000/mo", deadline:"2026-09-19", lat:12.9906,lng:80.2415, apply:"https://example.com/mse-policy", contact:"research@mse.ac.in"},
  {id:"r4", sub:"Materials Science", title:"Undergrad Materials Science Research Program", host:"IIT Madras Metallurgy Dept.", field:"Pure Science", mode:"Offline", fee:0, prize:"₹9,000/mo", deadline:"2026-09-23", lat:12.9915,lng:80.2337, apply:"https://example.com/iitm-materials", contact:"mme-research@iitm.ac.in"},
  {id:"r5", sub:"Public Health", title:"Community Public Health Research Assistantship", host:"Tamil Nadu Health Systems Project", field:"Medical", mode:"Offline", fee:0, prize:"₹7,500/mo", deadline:"2026-09-17", lat:13.0827,lng:80.2707, apply:"https://example.com/tnhsp-publichealth", contact:"research@tnhsp.gov.in"},
];

const VOLUNTEERING = [
  {id:"v1", title:"Coastal Clean-up Drive — Marina Beach", host:"Chennai Trekking Club", field:"Environment", mode:"Offline", fee:0, prize:"Certificate + badges", deadline:"2026-08-24", lat:13.0500,lng:80.2824, apply:"https://example.com/coastal-cleanup", contact:"volunteer@chennaitrek.org"},
  {id:"v2", title:"College Fest Volunteer — Registration Desk", host:"SRM Fest Committee", field:"All Fields", mode:"Offline", fee:0, prize:"Certificate + fest pass", deadline:"2026-09-02", lat:12.9250,lng:80.0421, apply:"https://example.com/srm-fest-vol", contact:"fest@srmist.edu.in"},
  {id:"v3", title:"NGO Literacy Program Volunteer — Weekend Teaching", host:"Teach for Change NGO", field:"NGO / Social", mode:"Offline", fee:0, prize:"Certificate", deadline:"2026-09-21", lat:13.0827,lng:80.2707, apply:"https://example.com/tfc-literacy", contact:"join@teachforchange.org"},
  {id:"v4", title:"Tree Plantation Drive — Green Chennai", host:"Nizhal Trust", field:"Environment", mode:"Offline", fee:0, prize:"Certificate", deadline:"2026-09-06", lat:13.0369,lng:80.2707, apply:"https://example.com/nizhal-plantation", contact:"volunteer@nizhal.org"},
  {id:"v5", title:"Online Awareness Content Volunteer — Mental Health", host:"MannMitra NGO", field:"NGO / Social", mode:"Online", fee:0, prize:"Certificate", deadline:"2026-09-24", lat:13.0827,lng:80.2707, apply:"https://example.com/mannmitra-content", contact:"volunteer@mannmitra.org"},
];

const FELLOWSHIPS = [
  {id:"f1", title:"Young India Policy Fellowship", host:"Observer Research Foundation", field:"All Fields", mode:"Offline", fee:0, prize:"₹25,000/mo, 6 months", deadline:"2026-09-28", lat:28.6139,lng:77.2090, apply:"https://example.com/orf-fellowship", contact:"fellowships@orfonline.org"},
  {id:"f2", title:"Climate Action Fellowship", host:"Centre for Environment Education", field:"Environment", mode:"Online", fee:0, prize:"₹15,000/mo, 3 months", deadline:"2026-09-14", lat:23.0225,lng:72.5714, apply:"https://example.com/cee-fellowship", contact:"fellows@ceeindia.org"},
  {id:"f3", title:"Public Health Leadership Fellowship", host:"Tamil Nadu Public Health Dept.", field:"Medical", mode:"Offline", fee:0, prize:"₹18,000/mo, 4 months", deadline:"2026-09-20", lat:13.0827,lng:80.2707, apply:"https://example.com/tn-publichealth-fellow", contact:"fellowship@tnhealth.gov.in"},
  {id:"f4", title:"Youth Entrepreneurship Fellowship", host:"Startup TN", field:"Commerce / CA", mode:"Offline", fee:0, prize:"₹20,000/mo, 6 months", deadline:"2026-09-26", lat:13.0475,lng:80.2200, apply:"https://example.com/startuptn-fellow", contact:"fellowship@startuptn.in"},
  {id:"f5", title:"Creative Arts Fellowship", host:"Sahitya Kala Parishad", field:"Arts & Design", mode:"Offline", fee:0, prize:"₹12,000/mo, 3 months", deadline:"2026-09-11", lat:13.0067,lng:80.2569, apply:"https://example.com/sahitya-fellow", contact:"fellowship@sahityakala.org"},
];

const EXAMS = [
  {id:"e1", title:"NPTEL — Data Structures & Algorithms", host:"IIT/NPTEL", field:"Computer Science", window:"Registration open till 2026-09-05", exam:"Exam on 2026-10-25"},
  {id:"e2", title:"NPTEL — Financial Accounting Fundamentals", host:"IIT/NPTEL", field:"Commerce / CA", window:"Registration open till 2026-09-05", exam:"Exam on 2026-10-25"},
  {id:"e3", title:"NEET-PG Mock Certification Series", host:"National Board of Examinations", field:"Medical", window:"Registration open till 2026-09-30", exam:"Rolling monthly mocks"},
  {id:"e4", title:"CA Foundation — May attempt registration", host:"ICAI", field:"Commerce / CA", window:"Registration open till 2026-10-01", exam:"Exam in May 2027"},
  {id:"e5", title:"NPTEL — Environmental Science & Sustainability", host:"IIT/NPTEL", field:"Environment", window:"Registration open till 2026-09-12", exam:"Exam on 2026-10-25"},
  {id:"e6", title:"NPTEL — Introduction to Modern Physics", host:"IIT/NPTEL", field:"Pure Science", window:"Registration open till 2026-09-12", exam:"Exam on 2026-10-25"},
];

// ===== Debate & Conferences — separate section, 9 listings =====
const DEBATE_CONF = [
  {id:"d1", sub:"Debate", title:"Inter-Zonal Parliamentary Debate", host:"Madras Debating Union", field:"All Fields", mode:"Offline", fee:200, prize:"₹25,000", deadline:"2026-09-12", lat:13.0604,lng:80.2496, apply:"https://example.com/pd-debate", contact:"info@madrasdebate.org"},
  {id:"d2", sub:"Debate", title:"Asian Parliamentary Debate Open", host:"Chennai Debate Society", field:"All Fields", mode:"Offline", fee:250, prize:"₹30,000", deadline:"2026-09-19", lat:13.0369,lng:80.2707, apply:"https://example.com/apd-open", contact:"office@chennaidebate.in"},
  {id:"d3", sub:"Model UN", title:"Chennai Model United Nations 2026", host:"Loyola College MUN Society", field:"All Fields", mode:"Offline", fee:500, prize:"Best Delegate Trophy + Certificates", deadline:"2026-09-25", lat:13.0067,lng:80.2569, apply:"https://example.com/chennai-mun", contact:"mun@loyolacollege.edu"},
  {id:"d4", sub:"Quiz", title:"Pan-India Collegiate Quiz Championship", host:"Quiz Federation of India", field:"All Fields", mode:"Online", fee:0, prize:"₹15,000", deadline:"2026-09-08", lat:12.9716,lng:77.5946, apply:"https://example.com/quiz-champ", contact:"contact@quizfed.in"},
  {id:"d5", sub:"Symposium", title:"National Tech Symposium — Emerging Systems", host:"Anna University", field:"Computer Science", mode:"Offline", fee:150, prize:"Best Paper Award + ₹10,000", deadline:"2026-09-14", lat:13.0107,lng:80.2350, apply:"https://example.com/tech-symposium", contact:"symposium@annauniv.edu"},
  {id:"d6", sub:"Conference", title:"Student Healthcare Innovation Conference", host:"Apollo Hospitals Education Wing", field:"Medical", mode:"Offline", fee:0, prize:"Best Poster Award", deadline:"2026-09-21", lat:13.0358,lng:80.2496, apply:"https://example.com/health-conf", contact:"education@apollohospitals.com"},
  {id:"d7", sub:"Conference", title:"Youth Climate Conclave", host:"WWF India Campus Chapter", field:"Environment", mode:"Offline", fee:0, prize:"Travel grants for top delegates", deadline:"2026-09-27", lat:28.6139,lng:77.2090, apply:"https://example.com/climate-conclave", contact:"campus@wwfindia.org"},
  {id:"d8", sub:"Debate", title:"Commerce Case-Study Debate Cup", host:"Madras School of Economics", field:"Commerce / CA", mode:"Offline", fee:100, prize:"₹12,000", deadline:"2026-09-16", lat:12.9906,lng:80.2415, apply:"https://example.com/case-debate", contact:"events@mse.ac.in"},
  {id:"d9", sub:"Symposium", title:"Arts & Design Ideation Symposium", host:"DakshinaChitra Foundation", field:"Arts & Design", mode:"Offline", fee:0, prize:"Feature in showcase exhibit", deadline:"2026-09-23", lat:12.8230,lng:80.2440, apply:"https://example.com/design-symposium", contact:"programs@dakshinachitra.net"},
];

// ===== Lectures — separate section, 9 listings =====
const LECTURES = [
  {id:"l1", sub:"Guest Lecture", title:"Guest Lecture — Generative AI in Industry", host:"IIT Madras CSE Dept.", field:"Computer Science", mode:"Online", fee:0, prize:"E-certificate", deadline:"2026-08-30", lat:12.9915,lng:80.2337, apply:"https://example.com/lecture-genai", contact:"cse-events@iitm.ac.in"},
  {id:"l2", sub:"Expert Talk", title:"Expert Talk — Careers in Clinical Research", host:"Apollo Hospitals Education Wing", field:"Medical", mode:"Offline", fee:0, prize:"Certificate of attendance", deadline:"2026-09-04", lat:13.0358,lng:80.2496, apply:"https://example.com/lecture-clinical", contact:"education@apollohospitals.com"},
  {id:"l3", sub:"Finance Talk", title:"Understanding Union Budget — Student Edition", host:"Madras School of Economics", field:"Commerce / CA", mode:"Online", fee:0, prize:"E-certificate", deadline:"2026-09-09", lat:12.9906,lng:80.2415, apply:"https://example.com/lecture-budget", contact:"outreach@mse.ac.in"},
  {id:"l4", sub:"Science Talk", title:"Frontiers of Astrophysics — Public Lecture", host:"IIT Madras Physics Dept.", field:"Pure Science", mode:"Offline", fee:0, prize:"Certificate of attendance", deadline:"2026-09-13", lat:12.9915,lng:80.2337, apply:"https://example.com/lecture-astro", contact:"physics-outreach@iitm.ac.in"},
  {id:"l5", sub:"Arts Talk", title:"The Business of Indie Filmmaking", host:"Loyola-ICAM College of Engineering", field:"Arts & Design", mode:"Online", fee:0, prize:"E-certificate", deadline:"2026-09-17", lat:13.0450,lng:80.1900, apply:"https://example.com/lecture-film", contact:"film@licet.ac.in"},
  {id:"l6", sub:"Environment Talk", title:"Climate Resilience for Coastal Cities", host:"Care Earth Trust", field:"Environment", mode:"Online", fee:0, prize:"E-certificate", deadline:"2026-09-21", lat:13.0475,lng:80.2200, apply:"https://example.com/lecture-climate", contact:"outreach@careearth.org"},
  {id:"l7", sub:"Entrepreneurship Talk", title:"From Campus to Startup — Founder Fireside Chat", host:"Startup TN", field:"Commerce / CA", mode:"Offline", fee:0, prize:"Networking pass", deadline:"2026-09-24", lat:13.0475,lng:80.2200, apply:"https://example.com/lecture-startup", contact:"events@startuptn.in"},
  {id:"l8", sub:"Career Guidance", title:"Career Guidance Lecture — Cracking Campus Placements", host:"Anna University Placement Cell", field:"All Fields", mode:"Offline", fee:0, prize:"Resource kit", deadline:"2026-09-06", lat:13.0107,lng:80.2350, apply:"https://example.com/lecture-placements", contact:"placements@annauniv.edu"},
  {id:"l9", sub:"Law Awareness", title:"Know Your Rights — Student Legal Awareness Lecture", host:"Madras Bar Association Outreach", field:"All Fields", mode:"Online", fee:0, prize:"E-certificate", deadline:"2026-09-28", lat:13.0827,lng:80.2707, apply:"https://example.com/lecture-legal", contact:"outreach@madrasbar.org"},
];

// ===== Workshops — separate section, 9 listings =====
const WORKSHOPS = [
  {id:"w1", sub:"Coding", title:"Hands-on Python for Data Analysis Workshop", host:"SRM Institute CS Dept.", field:"Computer Science", mode:"Offline", fee:0, prize:"Certificate + project files", deadline:"2026-09-02", lat:12.9250,lng:80.0421, apply:"https://example.com/workshop-python", contact:"cs-workshops@srmist.edu.in"},
  {id:"w2", sub:"Robotics", title:"Intro to Robotics & Arduino Workshop", host:"Anna University Robotics Club", field:"Computer Science", mode:"Offline", fee:150, prize:"Certificate + starter kit discount", deadline:"2026-09-10", lat:13.0107,lng:80.2350, apply:"https://example.com/workshop-robotics", contact:"robotics@annauniv.edu"},
  {id:"w3", sub:"Soft Skills", title:"Public Speaking & Confidence Building Workshop", host:"Toastmasters Chennai Campus Chapter", field:"All Fields", mode:"Offline", fee:0, prize:"Certificate", deadline:"2026-09-05", lat:13.0475,lng:80.2824, apply:"https://example.com/workshop-publicspeaking", contact:"chennaicampus@toastmasters.org"},
  {id:"w4", sub:"Career Skills", title:"Resume & LinkedIn Building Workshop", host:"Anna University Placement Cell", field:"All Fields", mode:"Online", fee:0, prize:"Resource templates", deadline:"2026-09-08", lat:13.0107,lng:80.2350, apply:"https://example.com/workshop-resume", contact:"placements@annauniv.edu"},
  {id:"w5", sub:"Photography", title:"Mobile Photography & Editing Workshop", host:"Chennai Photowalk Collective", field:"Arts & Design", mode:"Offline", fee:100, prize:"Certificate + feature on page", deadline:"2026-09-14", lat:13.0475,lng:80.2824, apply:"https://example.com/workshop-photography", contact:"team@chennaiphotowalk.in"},
  {id:"w6", sub:"First Aid", title:"Basic Life Support & First Aid Workshop", host:"Apollo Hospitals Education Wing", field:"Medical", mode:"Offline", fee:0, prize:"BLS Certificate", deadline:"2026-09-18", lat:13.0358,lng:80.2496, apply:"https://example.com/workshop-firstaid", contact:"education@apollohospitals.com"},
  {id:"w7", sub:"Entrepreneurship", title:"Idea to Pitch-Deck Workshop", host:"Startup TN", field:"Commerce / CA", mode:"Offline", fee:0, prize:"Mentor feedback session", deadline:"2026-09-21", lat:13.0475,lng:80.2200, apply:"https://example.com/workshop-pitch", contact:"events@startuptn.in"},
  {id:"w8", sub:"Content Creation", title:"Reels & Content Creation Bootcamp", host:"Chennai Dance Collective", field:"Arts & Design", mode:"Offline", fee:0, prize:"Certificate", deadline:"2026-09-25", lat:13.0475,lng:80.2824, apply:"https://example.com/workshop-content", contact:"team@cdc.in"},
  {id:"w9", sub:"Data Analytics", title:"Excel & Data Analytics for Commerce Students", host:"Madras School of Economics", field:"Commerce / CA", mode:"Online", fee:0, prize:"Certificate + dataset kit", deadline:"2026-09-29", lat:12.9906,lng:80.2415, apply:"https://example.com/workshop-excel", contact:"outreach@mse.ac.in"},
];

// ===== Resources — separate section, peer-sourced study resources =====
const RESOURCES = [
  {id:"res1", sub:"Book", title:"Introduction to Algorithms (CLRS) — Used Copy", host:"Campus Book Exchange", field:"Computer Science", mode:"Offline", fee:0, prize:"Budget: under ₹500", apply:"https://example.com/resource-clrs", contact:"exchange@campusbooks.in"},
  {id:"res2", sub:"Course", title:"Free NPTEL Course Bundle — Core CS", host:"NPTEL Swayam", field:"Computer Science", mode:"Online", fee:0, prize:"Budget: Free", apply:"https://example.com/resource-nptel-cs", contact:"support@nptel.ac.in"},
  {id:"res3", sub:"Book", title:"Robbins Basic Pathology — Rental Available", host:"MedBooks Rental Library", field:"Medical", mode:"Offline", fee:0, prize:"Budget: ₹300/month rental", apply:"https://example.com/resource-pathology", contact:"rentals@medbooks.in"},
  {id:"res4", sub:"Tool", title:"Free Statistical Software for Commerce Projects", host:"Open Campus Tools Directory", field:"Commerce / CA", mode:"Online", fee:0, prize:"Budget: Free (student license)", apply:"https://example.com/resource-stats-tool", contact:"help@opencampustools.org"},
  {id:"res5", sub:"Notes", title:"Shared Lecture Notes — Organic Chemistry", host:"Pure Science Study Circle", field:"Pure Science", mode:"Online", fee:0, prize:"Budget: Free", apply:"https://example.com/resource-chem-notes", contact:"circle@puresciencestudy.in"},
  {id:"res6", sub:"Course", title:"Beginner Design Software Course Bundle", host:"Creative Commons Learning", field:"Arts & Design", mode:"Online", fee:0, prize:"Budget: under ₹200", apply:"https://example.com/resource-design-course", contact:"info@cclearning.org"},
  {id:"res7", sub:"Book", title:"Environmental Science NCERT + Reference Set", host:"Green Reads Co-op", field:"Environment", mode:"Offline", fee:0, prize:"Budget: under ₹400", apply:"https://example.com/resource-envsci", contact:"coop@greenreads.in"},
  {id:"res8", sub:"Tool", title:"Free Grant-Writing Template Pack — NGO Projects", host:"NGO Resource Hub", field:"NGO / Social", mode:"Online", fee:0, prize:"Budget: Free", apply:"https://example.com/resource-grant-templates", contact:"hub@ngoresource.org"},
  {id:"res9", sub:"Course", title:"Spoken Tamil & English Bridge Course", host:"BhashaBridge Learning", field:"All Fields", mode:"Online", fee:0, prize:"Budget: under ₹150", apply:"https://example.com/resource-bridge-course", contact:"learn@bhashabridge.com"},
];

// ===== Per-opportunity Q&A seeds (shown inside the detail modal) =====
const QA_SEED = {
  c1:[{who:"Arjun S.",badge:"Gold",text:"Team size is up to 4. They allow first-years too — I went last year."}],
  i1:[{who:"Divya R.",badge:"Elite",text:"Interview was mostly React basics + one live coding round."}],
  s1:[{who:"Karthik M.",badge:"Silver",text:"Income certificate from Taluk office is enough, no need for notarised copy."}],
};

// ===== Per-section Q&A — each section owns its own thread, never shared =====
const SECTION_QA = {
  competitions:[{who:"Rahul V.",badge:"Silver",text:"Anyone tried the Rhythm Nation dance battle — is it solo or group only?",replies:1}],
  internships:[{who:"Heidi",badge:"Bronze",text:"Looking for a free internship near Chennai — any leads?",replies:3}],
  freelance:[{who:"Aisha K.",badge:"Gold",text:"Which platform pays fastest for content-writing gigs?",replies:2}],
  scholarships:[{who:"Naveen K.",badge:"Silver",text:"Does the TN Merit Scholarship count 12th marks or first-year college marks?",replies:2}],
  research:[{who:"Sanjay R.",badge:"Elite",text:"Is coding experience required for the NLP research assistantship?",replies:1}],
  volunteering:[{who:"Priya D.",badge:"Bronze",text:"Is the coastal clean-up drive suitable for first-years?",replies:1}],
  fellowships:[{who:"Meera S.",badge:"Gold",text:"How long is the selection process for the Policy Fellowship?",replies:2}],
  exams:[{who:"Vignesh T.",badge:"Silver",text:"Is the NPTEL DSA exam proctored online or offline?",replies:1}],
  debateconf:[{who:"Kavya N.",badge:"Gold",text:"Is the Parliamentary Debate solo or team-based?",replies:1}],
  lectures:[{who:"Arun P.",badge:"Bronze",text:"Will the Generative AI lecture be recorded for later viewing?",replies:0}],
  workshops:[{who:"Divya R.",badge:"Silver",text:"Do we need to bring our own laptop for the Python workshop?",replies:2}],
  resources:[{who:"Meena P.",badge:"Silver",text:"Where can I get a used copy of 'Introduction to Algorithms' under ₹500?",replies:5}],
};

// ===== Per-section FAQ — static, curated answers, separate from peer Q&A =====
const SECTION_FAQ = {
  competitions:[
    {q:"Can first-year students participate?", a:"Yes — most competitions are open to all years unless a listing states otherwise."},
    {q:"Is there a team size limit?", a:"It varies per competition. Check the Apply section on each card for exact team rules."},
    {q:"Are all competitions paid to enter?", a:"No, many are free — paid ones show the entry fee right on the card."},
  ],
  internships:[
    {q:"Do internships pay a stipend?", a:"Most listed internships pay a stipend; unpaid ones are clearly marked with a certificate note."},
    {q:"Can I apply while still in college?", a:"Yes, every internship here is open to current students unless noted."},
    {q:"How long does an internship usually run?", a:"Typically 6–12 weeks — exact duration is on the host's application page."},
  ],
  freelance:[
    {q:"Do I need prior experience for freelance gigs?", a:"Most gigs are entry-level and beginner-friendly; a small portfolio helps."},
    {q:"How and when do I get paid?", a:"Payment terms are set by each client or platform — check the listing before starting."},
    {q:"Does freelance work count toward my badge?", a:"Yes, verified freelance gigs count toward your participation record."},
  ],
  scholarships:[
    {q:"What documents are usually needed?", a:"Income certificate, mark sheets, and ID proof are common — see each listing's eligibility line."},
    {q:"Can I apply for more than one scholarship?", a:"Yes, as long as you meet each one's eligibility criteria."},
    {q:"Are sports scholarships different?", a:"Yes — they usually need proof of state/national-level participation instead of income proof."},
  ],
  research:[
    {q:"Do I need prior research experience?", a:"No, most undergraduate research programs train you from scratch."},
    {q:"Are these positions paid?", a:"Many include a monthly stipend; some also cover housing."},
    {q:"Can I do research alongside my semester?", a:"Yes — most are structured as summer or part-time programs."},
  ],
  volunteering:[
    {q:"Is volunteering paid?", a:"No, but most give certificates and count toward your participation badge."},
    {q:"Can I volunteer remotely?", a:"Some drives are online (content, awareness campaigns); most fieldwork is offline."},
    {q:"Do I need a long-term commitment?", a:"No, most are one-time drives or weekend commitments."},
  ],
  fellowships:[
    {q:"Who can apply for fellowships?", a:"Most are open to undergraduates and recent graduates — check each listing."},
    {q:"Do fellowships pay a stipend?", a:"Yes, most listed fellowships include a monthly stipend."},
    {q:"How competitive are fellowships?", a:"They're selective — a strong statement of purpose helps."},
  ],
  exams:[
    {q:"Are NPTEL certificates valued by employers?", a:"Yes, especially for Computer Science and core engineering roles."},
    {q:"Can I retake an exam if I fail?", a:"NPTEL runs rolling batches — you can re-register for the next cycle."},
    {q:"Is there a fee for certification exams?", a:"Enrollment is usually free; the final proctored exam has a small fee."},
  ],
  debateconf:[
    {q:"Are debate formats standardized?", a:"Most follow Parliamentary or Asian formats — details are on each listing."},
    {q:"Can I attend a conference without presenting?", a:"Yes, most conferences allow delegate/attendee-only registration."},
    {q:"Is prior debate experience required?", a:"No, many events run a beginner track alongside the open one."},
  ],
  lectures:[
    {q:"Are lectures recorded?", a:"Some are — check the listing for a 'recording available' note."},
    {q:"Do I need to register in advance?", a:"Yes, most lectures need free registration for entry or the online link."},
    {q:"Are lectures open to all fields?", a:"Most are open to everyone, even outside the speaker's core field."},
  ],
  workshops:[
    {q:"Do workshops give certificates?", a:"Yes, most issue a participation or completion certificate."},
    {q:"Are workshops hands-on?", a:"Yes, most are practical, hands-on sessions rather than lectures."},
    {q:"What should I bring?", a:"A laptop is usually needed for technical workshops — check each listing."},
  ],
  resources:[
    {q:"Are these resources free?", a:"It's a mix — budget is shown on each card, including free options."},
    {q:"Can I suggest a resource?", a:"Yes, post it in this section's Q&A tab and it gets reviewed for the list."},
    {q:"Are resources field-specific?", a:"Yes, each is tagged by field so you can filter to yours."},
  ],
};
