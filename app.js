// ===== App state =====
const state = {
  user: null,
  view: "dashboard",
  lang: "en",
  search: "",
  filters: { field: "All Fields", sub: "All", mode: "All", price: "All" },
  participationCount: 7, // mock, drives badge level
  sectionTab: "listings", // listings | qa | faq (per current section)
  voiceReplies: true,
};

// ===== Section registry — every category owns its own data + Q&A + FAQ =====
const SECTIONS = {
  competitions:  { data: ()=>COMPETITIONS,  cat:"Competitions",         hasSub:true  },
  internships:   { data: ()=>INTERNSHIPS,   cat:"Internships",          hasSub:true  },
  freelance:     { data: ()=>FREELANCE,     cat:"Freelance",            hasSub:true  },
  scholarships:  { data: ()=>SCHOLARSHIPS,  cat:"Scholarships",         hasSub:false },
  research:      { data: ()=>RESEARCH,      cat:"Research",             hasSub:true  },
  volunteering:  { data: ()=>VOLUNTEERING,  cat:"Volunteering",         hasSub:false },
  fellowships:   { data: ()=>FELLOWSHIPS,   cat:"Fellowships",          hasSub:false },
  debateconf:    { data: ()=>DEBATE_CONF,   cat:"Debate & Conferences", hasSub:true  },
  lectures:      { data: ()=>LECTURES,      cat:"Lectures",             hasSub:true  },
  workshops:     { data: ()=>WORKSHOPS,     cat:"Workshops",            hasSub:true  },
  resources:     { data: ()=>RESOURCES,     cat:"Resources",            hasSub:true  },
};

const LABELS = {
  en: { dashboard:"Dashboard", competitions:"Competitions", internships:"Internships", freelance:"Freelance",
        scholarships:"Scholarships", research:"Research", volunteering:"Volunteering", fellowships:"Fellowships",
        debateconf:"Debate & Conferences", lectures:"Lectures", workshops:"Workshops", exams:"Certifications",
        resources:"Resources", profile:"Profile & Badges", search:"Search opportunities, hosts, tags…", apply:"Apply now",
        eligible:"Eligible for you", welcome:"Welcome back", tabListings:"Listings", tabQA:"Q&A", tabFAQ:"FAQ",
        askPlaceholder:"Ask your own question about this section…", post:"Post", noQA:"No questions yet — be the first to ask.",
        sidebarStats:"Section snapshot", topFaq:"Most asked", eligibilityLbl:"Eligibility" },
  tanglish: { dashboard:"Dashboard", competitions:"Podigalu (Competitions)", internships:"Internship-ku", freelance:"Freelance Gigs",
        scholarships:"Scholarship info", research:"Research work", volunteering:"Volunteer panni", fellowships:"Fellowship",
        debateconf:"Debate & Conference", lectures:"Lectures", workshops:"Workshops", exams:"Exam/Certificate",
        resources:"Resources (Padikura Material)", profile:"En Profile", search:"Opportunity thedunga…", apply:"Ippove Apply pannunga",
        eligible:"Unga profile-ku match aagura", welcome:"Vanakkam, thirumba vandhutinga", tabListings:"Listings", tabQA:"Kேள்vi-Pதில்",
        tabFAQ:"FAQ", askPlaceholder:"Unga kேள்vi type pannunga…", post:"Post pannu", noQA:"Innum kேள்vi illa — first-a nீங்க kேளுங்க.",
        sidebarStats:"Section summary", topFaq:"Athigama kேட்கப்படும்", eligibilityLbl:"Yaruku eligible" },
  ta: { dashboard:"முகப்பு பலகை", competitions:"போட்டிகள்", internships:"இன்டர்ன்ஷிப்கள்", freelance:"ஃப்ரீலான்ஸ் வேலைகள்",
        scholarships:"உதவித்தொகைகள்", research:"ஆராய்ச்சி", volunteering:"தன்னார்வப் பணி", fellowships:"பெல்லோஷிப்கள்",
        debateconf:"விவாதம் & மாநாடுகள்", lectures:"விரிவுரைகள்", workshops:"பயிலரங்குகள்", exams:"சான்றிதழ்கள்",
        resources:"கல்வி வளங்கள்", profile:"சுயவிவரம் & பேட்ஜ்கள்", search:"வாய்ப்புகளைத் தேடுங்கள்…", apply:"இப்போது விண்ணப்பிக்கவும்",
        eligible:"உங்களுக்குப் பொருந்தும்", welcome:"மீண்டும் வரவேற்கிறோம்", tabListings:"பட்டியல்", tabQA:"கேள்வி-பதில்",
        tabFAQ:"அடிக்கடி கேட்கப்படும் கேள்விகள்", askPlaceholder:"உங்கள் கேள்வியை இங்கே கேளுங்கள்…", post:"பதிவிடு",
        noQA:"இன்னும் கேள்விகள் இல்லை — முதலில் நீங்கள் கேளுங்கள்.", sidebarStats:"பிரிவு சுருக்கம்", topFaq:"அதிகம் கேட்கப்படுவது",
        eligibilityLbl:"தகுதி" },
};

function t(key){ return (LABELS[state.lang] && LABELS[state.lang][key]) || LABELS.en[key] || key; }

// ===== Login =====
document.getElementById("loginForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  state.user = {
    name: document.getElementById("fName").value.trim() || "Student",
    email: document.getElementById("fEmail").value.trim(),
    field: document.getElementById("fField").value,
  };
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.remove("hidden");
  document.getElementById("topName").textContent = state.user.name;
  document.getElementById("topField").textContent = state.user.field;
  document.getElementById("avatarInitial").textContent = state.user.name[0].toUpperCase();
  state.filters.field = state.user.field;
  renderView();
});

// ===== Nav =====
document.getElementById("sideNav").addEventListener("click", (e)=>{
  const btn = e.target.closest(".nav-item");
  if(!btn) return;
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  state.view = btn.dataset.view;
  state.filters = { field: "All Fields", sub: "All", mode: "All", price: "All" };
  state.sectionTab = "listings";
  renderView();
});

document.querySelectorAll(".lang-btn").forEach(b=>{
  b.addEventListener("click", ()=>{
    document.querySelectorAll(".lang-btn").forEach(x=>x.classList.remove("active"));
    b.classList.add("active");
    state.lang = b.dataset.lang;
    renderView();
  });
});

document.getElementById("globalSearch").addEventListener("input", (e)=>{
  state.search = e.target.value.toLowerCase();
  renderView();
});

// ===== Notifications =====
const NOTIFS = [
  {text:"CodeSprint registration closes in 9 days", level:"soon"},
  {text:"New match: AI for Bharat — Student ML Challenge", level:"new"},
  {text:"Coastal Clean-up Drive is this weekend", level:"soon"},
];
document.getElementById("notifBtn").addEventListener("click", ()=>{
  const p = document.getElementById("notifPanel");
  p.classList.toggle("hidden");
  p.innerHTML = NOTIFS.map(n=>`<div class="n">${n.text} ${n.level==="soon"?"<b>· deadline risk</b>":"<b style='color:var(--teal)'>· new match</b>"}</div>`).join("");
});

// ===== Voice search (speech-to-text) =====
document.getElementById("voiceBtn").addEventListener("click", ()=>{
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!SR){ alert("Voice search isn't supported in this browser. Try Chrome."); return; }
  const rec = new SR();
  rec.lang = state.lang === "ta" ? "ta-IN" : "en-IN";
  rec.onresult = (e)=>{
    const text = e.results[0][0].transcript;
    document.getElementById("globalSearch").value = text;
    state.search = text.toLowerCase();
    renderView();
  };
  rec.start();
});

// ===== Voice reply (text-to-speech) for the AI assistant =====
function speak(text){
  if(!state.voiceReplies) return;
  const synth = window.speechSynthesis;
  if(!synth) return;
  synth.cancel();
  const clean = text.replace(/[#*_`]/g, "");
  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = state.lang === "ta" ? "ta-IN" : "en-IN";
  utter.rate = 0.98;
  synth.speak(utter);
}

// ===== Helpers =====
function daysLeft(dateStr){
  const d = new Date(dateStr) - new Date();
  return Math.ceil(d / (1000*60*60*24));
}
function currentBadge(count){
  let b = null;
  for(const badge of BADGES){ if(count >= badge.min) b = badge; }
  return b;
}
function priceBand(fee){
  if(fee === 0) return "Free";
  if(fee <= 100) return "0-100";
  if(fee <= 300) return "100-300";
  return "300+";
}
function matchesFilters(item){
  const f = state.filters;
  if(f.field !== "All Fields" && item.field && item.field !== "All Fields" && item.field !== f.field) return false;
  if(f.sub !== "All" && item.sub !== f.sub) return false;
  if(f.mode !== "All" && item.mode && item.mode !== f.mode) return false;
  if(f.price !== "All" && priceBand(item.fee||0) !== f.price) return false;
  if(state.search){
    const hay = (item.title+" "+(item.host||"")+" "+(item.field||"")+" "+(item.sub||"")).toLowerCase();
    if(!hay.includes(state.search)) return false;
  }
  return true;
}

// ===== Card rendering =====
function oppCard(item, categoryLabel){
  const dl = item.deadline ? daysLeft(item.deadline) : null;
  const dlClass = dl !== null ? (dl <= 7 ? "soon" : "ok") : "";
  const dlText = dl !== null ? (dl >= 0 ? `${dl}d left` : "Closed") : "";
  return `
  <div class="opp-card" data-id="${item.id}" data-cat="${categoryLabel}">
    <div class="opp-top">
      <span class="opp-tag">${item.sub || categoryLabel}</span>
      ${item.mode ? `<span class="meta-pill">${item.mode}</span>` : ""}
    </div>
    <h3>${item.title}</h3>
    <div class="opp-host">${item.host}</div>
    <div class="opp-meta">
      <span class="meta-pill">${item.field}</span>
      <span class="meta-pill">${item.fee === 0 ? "Free" : "₹"+item.fee}</span>
      ${item.eligibility ? `<span class="meta-pill elig-pill">${t("eligibilityLbl")}: ${item.eligibility}</span>` : ""}
    </div>
    <div class="opp-bottom">
      <span class="prize">${item.prize || ""}</span>
      ${dlText ? `<span class="deadline ${dlClass}">${dlText}</span>` : ""}
    </div>
  </div>`;
}

function filterBar(subOptions){
  return `
  <div class="filter-bar">
    <select id="filField">
      ${FIELDS.map(f=>`<option ${state.filters.field===f?"selected":""}>${f}</option>`).join("")}
    </select>
    ${subOptions ? `<select id="filSub"><option ${state.filters.sub==="All"?"selected":""}>All</option>${subOptions.map(s=>`<option ${state.filters.sub===s?"selected":""}>${s}</option>`).join("")}</select>` : ""}
    <select id="filMode"><option ${state.filters.mode==="All"?"selected":""}>All</option><option>Online</option><option>Offline</option></select>
    <select id="filPrice"><option ${state.filters.price==="All"?"selected":""}>All</option><option>Free</option><option>0-100</option><option>100-300</option><option>300+</option></select>
  </div>`;
}

function bindFilterBar(sub){
  document.getElementById("filField").addEventListener("change", e=>{state.filters.field=e.target.value; renderView();});
  if(sub) document.getElementById("filSub")?.addEventListener("change", e=>{state.filters.sub=e.target.value; renderView();});
  document.getElementById("filMode").addEventListener("change", e=>{state.filters.mode=e.target.value; renderView();});
  document.getElementById("filPrice").addEventListener("change", e=>{state.filters.price=e.target.value; renderView();});
}

function bindCards(){
  document.querySelectorAll(".opp-card").forEach(c=>{
    c.addEventListener("click", ()=> openDetail(c.dataset.id, c.dataset.cat));
  });
}

// ===== Views =====
function renderDashboard(){
  const badge = currentBadge(state.participationCount);
  const allOpps = [...COMPETITIONS, ...INTERNSHIPS, ...FREELANCE, ...SCHOLARSHIPS, ...RESEARCH, ...DEBATE_CONF, ...LECTURES, ...WORKSHOPS];
  const eligible = allOpps.filter(i => i.field === state.user.field || i.field === "All Fields").slice(0, 8);
  const totalLive = COMPETITIONS.length+INTERNSHIPS.length+FREELANCE.length+SCHOLARSHIPS.length+RESEARCH.length+VOLUNTEERING.length+FELLOWSHIPS.length+DEBATE_CONF.length+LECTURES.length+WORKSHOPS.length+RESOURCES.length;
  return `
    <div class="dash-hero">
      <div>
        <p class="eyebrow" style="color:var(--marigold)">${t("welcome")}</p>
        <h2>${state.user.name}, here's what fits you today</h2>
        <p>${t("eligible")}: ${state.user.field}. ${eligible.length} live matches across competitions, internships, freelance gigs, scholarships &amp; more.</p>
      </div>
      <div class="eligible-ring" style="background:conic-gradient(var(--marigold) ${eligible.length*8}%, #34335c 0)">${eligible.length} 🎯</div>
    </div>
    <div class="stat-row">
      <div class="stat-card"><div class="num">${totalLive}</div><div class="lbl">Total live opportunities</div></div>
      <div class="stat-card"><div class="num">${badge ? badge.icon+" "+badge.name : "Unranked"}</div><div class="lbl">Your badge (${state.participationCount} participations)</div></div>
      <div class="stat-card"><div class="num">${NOTIFS.length}</div><div class="lbl">Active deadline alerts</div></div>
      <div class="stat-card"><div class="num">${Object.keys(SECTIONS).length+2}</div><div class="lbl">Sections with their own Q&amp;A + FAQ</div></div>
    </div>
    <div class="view-head"><div><h2>Matched for you</h2><p>Based on your field: ${state.user.field}</p></div></div>
    <div class="card-grid">${eligible.map(i=>{
      let cat="Opportunity";
      for(const k in SECTIONS){ if(SECTIONS[k].data().includes(i)) cat = SECTIONS[k].cat; }
      return oppCard(i, cat);
    }).join("")}</div>
  `;
}

function sectionTabs(view){
  return `
  <div class="sec-tabs">
    <button class="sec-tab ${state.sectionTab==="listings"?"active":""}" data-tab="listings">📋 ${t("tabListings")}</button>
    <button class="sec-tab ${state.sectionTab==="qa"?"active":""}" data-tab="qa">💬 ${t("tabQA")}</button>
    <button class="sec-tab ${state.sectionTab==="faq"?"active":""}" data-tab="faq">❓ ${t("tabFAQ")}</button>
  </div>`;
}

function sectionSidebar(view, items){
  const faqs = SECTION_FAQ[view] || [];
  const qas = SECTION_QA[view] || [];
  const withDeadline = items.filter(i=>i.deadline);
  const nextDeadline = withDeadline.length ? withDeadline.reduce((a,b)=> daysLeft(a.deadline) < daysLeft(b.deadline) ? a : b) : null;
  return `
  <aside class="sec-sidebar">
    <div class="sidebar-block">
      <div class="sidebar-title">${t("sidebarStats")}</div>
      <div class="mini-stat"><span>Live listings</span><b>${items.length}</b></div>
      <div class="mini-stat"><span>Open Q&amp;A threads</span><b>${qas.length}</b></div>
      ${nextDeadline ? `<div class="mini-stat"><span>Closest deadline</span><b>${Math.max(daysLeft(nextDeadline.deadline),0)}d</b></div>` : ""}
    </div>
    ${faqs.length ? `
    <div class="sidebar-block">
      <div class="sidebar-title">${t("topFaq")}</div>
      <div class="mini-faq-q">${faqs[0].q}</div>
      <div class="mini-faq-a">${faqs[0].a}</div>
      <button class="sidebar-link" data-tab="faq">${t("tabFAQ")} →</button>
    </div>` : ""}
    ${qas.length ? `
    <div class="sidebar-block">
      <div class="sidebar-title">Latest question</div>
      <div class="mini-faq-q">${qas[0].who} <span class="badge-mini">${qas[0].badge}</span></div>
      <div class="mini-faq-a">${qas[0].text}</div>
      <button class="sidebar-link" data-tab="qa">${t("tabQA")} →</button>
    </div>` : ""}
  </aside>`;
}

function renderQAPanel(view){
  const qas = SECTION_QA[view] || (SECTION_QA[view] = []);
  return `
    <div class="qa-hub-item-wrap">
      ${qas.length ? qas.map(q=>`<div class="qa-hub-item"><div class="q-head"><span>${q.who} <span class="badge-mini">${q.badge}</span></span></div><p>${q.text}</p><div class="replies">${q.replies||0} replies</div></div>`).join("") : `<p style="color:var(--muted)">${t("noQA")}</p>`}
    </div>
    <div class="qa-ask"><input id="sectionQaInput" placeholder="${t("askPlaceholder")}"><button id="sectionQaBtn">${t("post")}</button></div>
  `;
}

function renderFAQPanel(view){
  const faqs = SECTION_FAQ[view] || [];
  return `<div class="faq-list">${faqs.map(f=>`<div class="faq-item"><div class="faq-q">Q. ${f.q}</div><div class="faq-a">A. ${f.a}</div></div>`).join("")}</div>`;
}

function renderOpportunitySection(view){
  const cfg = SECTIONS[view];
  const items = cfg.data();
  const subOptions = cfg.hasSub ? [...new Set(items.map(i=>i.sub))] : null;
  const filtered = items.filter(matchesFilters);
  let mainHtml = "";
  if(state.sectionTab === "listings"){
    mainHtml = `
      ${filterBar(subOptions)}
      ${subOptions ? `<div class="chip-row">${["All",...subOptions].map(s=>`<span class="chip ${state.filters.sub===s?"active":""}" data-sub="${s}">${s}</span>`).join("")}</div>` : ""}
      <div class="card-grid">${filtered.length ? filtered.map(i=>oppCard(i, cfg.cat)).join("") : "<p style='color:var(--muted)'>No matches — try widening your filters.</p>"}</div>
    `;
  } else if(state.sectionTab === "qa"){
    mainHtml = renderQAPanel(view);
  } else {
    mainHtml = renderFAQPanel(view);
  }
  return `
    <div class="view-head"><div><h2>${t(view)}</h2><p>${items.length} live entries · own Q&amp;A + FAQ for this section</p></div></div>
    ${sectionTabs(view)}
    <div class="section-layout">
      <div class="section-main">${mainHtml}</div>
      ${sectionSidebar(view, items)}
    </div>
  `;
}

function renderExams(){
  const items = EXAMS;
  let mainHtml = "";
  if(state.sectionTab === "listings"){
    mainHtml = items.map(e=>`<div class="exam-row"><div><h4>${e.title}</h4><div class="exam-meta">${e.host} · ${e.field}</div></div><div class="exam-meta">${e.window}<br>${e.exam}</div></div>`).join("");
  } else if(state.sectionTab === "qa"){
    mainHtml = renderQAPanel("exams");
  } else {
    mainHtml = renderFAQPanel("exams");
  }
  return `
    <div class="view-head"><div><h2>${t("exams")}</h2><p>NPTEL and domain certifications with live registration windows</p></div></div>
    ${sectionTabs("exams")}
    <div class="section-layout">
      <div class="section-main">${mainHtml}</div>
      ${sectionSidebar("exams", items)}
    </div>
  `;
}

function renderProfile(){
  const badge = currentBadge(state.participationCount);
  return `
    <div class="view-head"><div><h2>${t("profile")}</h2><p>${state.user.name} · ${state.user.field}</p></div></div>
    <div class="badge-grid">
      ${BADGES.map(b=>`<div class="badge-card ${state.participationCount>=b.min?"":"locked"}"><div class="badge-icon" style="background:${b.color}22">${b.icon}</div><div class="badge-name">${b.name}</div><div class="badge-desc">${b.desc}</div></div>`).join("")}
    </div>
    <div class="view-head"><div><h2>Participation history (mock)</h2></div></div>
    <div class="card-grid">${COMPETITIONS.slice(0,3).map(i=>oppCard(i,"Competitions")).join("")}</div>
  `;
}

function renderView(){
  const root = document.getElementById("viewRoot");
  let html = "";
  let subOptions = null;
  if(state.view === "dashboard"){ html = renderDashboard(); }
  else if(state.view === "exams"){ html = renderExams(); }
  else if(state.view === "profile"){ html = renderProfile(); }
  else if(SECTIONS[state.view]){
    html = renderOpportunitySection(state.view);
    if(SECTIONS[state.view].hasSub) subOptions = [...new Set(SECTIONS[state.view].data().map(i=>i.sub))];
  }
  root.innerHTML = html;
  bindCards();
  if(document.getElementById("filField")) bindFilterBar(subOptions);
  document.querySelectorAll(".chip[data-sub]").forEach(c=>{
    c.addEventListener("click", ()=>{ state.filters.sub = c.dataset.sub; renderView(); });
  });
  document.querySelectorAll(".sec-tab").forEach(b=>{
    b.addEventListener("click", ()=>{ state.sectionTab = b.dataset.tab; renderView(); });
  });
  document.querySelectorAll(".sidebar-link").forEach(b=>{
    b.addEventListener("click", ()=>{ state.sectionTab = b.dataset.tab; renderView(); });
  });
  document.getElementById("sectionQaBtn")?.addEventListener("click", ()=>{
    const val = document.getElementById("sectionQaInput").value.trim();
    if(!val) return;
    const arr = SECTION_QA[state.view] || (SECTION_QA[state.view] = []);
    arr.unshift({who:state.user.name, badge:(currentBadge(state.participationCount)||{name:"New"}).name, text:val, replies:0});
    renderView();
  });
}

// ===== Detail modal =====
function findItem(id){
  const all = [...COMPETITIONS, ...INTERNSHIPS, ...FREELANCE, ...SCHOLARSHIPS, ...RESEARCH, ...VOLUNTEERING, ...FELLOWSHIPS, ...DEBATE_CONF, ...LECTURES, ...WORKSHOPS, ...RESOURCES];
  return all.find(i=>i.id===id);
}
function openDetail(id, cat){
  const item = findItem(id);
  if(!item) return;
  const thread = QA_SEED[id] || [];
  document.getElementById("modalBody").innerHTML = `
    <span class="opp-tag">${cat}${item.sub? " · "+item.sub:""}</span>
    <h2>${item.title}</h2>
    <div class="opp-host">${item.host} · ${item.field}</div>
    <div class="opp-meta" style="margin-top:8px">
      <span class="meta-pill">${item.mode||""}</span>
      <span class="meta-pill">${item.fee===0?"Free":"₹"+item.fee}</span>
      ${item.deadline ? `<span class="meta-pill">Deadline: ${item.deadline}</span>`:""}
      ${item.eligibility ? `<span class="meta-pill elig-pill">${t("eligibilityLbl")}: ${item.eligibility}</span>`:""}
    </div>
    <p style="margin-top:12px;font-weight:700;color:var(--ink)">${item.prize||""}</p>
    ${item.lat ? `<div id="detailMap" class="modal-map"></div>` : ""}
    <div class="apply-row">
      <a class="btn-apply" href="${item.apply}" target="_blank" rel="noopener">${t("apply")} ↗</a>
      <span class="btn-ghost">Contact: ${item.contact}</span>
    </div>
    <div class="modal-section-title">Q&amp;A for this opportunity</div>
    <div class="qa-thread">
      ${thread.length ? thread.map(q=>`<div class="qa-item"><div class="who">${q.who} <span class="badge-mini">${q.badge}</span></div>${q.text}</div>`).join("") : "<p style='color:var(--muted);font-size:13px'>No answers yet — be the first to ask.</p>"}
    </div>
    <div class="qa-ask"><input id="detailQaInput" placeholder="Ask a question about this…"><button id="detailQaBtn">Ask</button></div>
  `;
  document.getElementById("detailModal").classList.remove("hidden");
  if(item.lat){
    setTimeout(()=>{
      const map = L.map("detailMap", {zoomControl:false, attributionControl:false}).setView([item.lat, item.lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      L.marker([item.lat, item.lng]).addTo(map);
    }, 50);
  }
  document.getElementById("detailQaBtn").addEventListener("click", ()=>{
    const val = document.getElementById("detailQaInput").value.trim();
    if(!val) return;
    QA_SEED[id] = QA_SEED[id] || [];
    QA_SEED[id].push({who: state.user.name, badge: (currentBadge(state.participationCount)||{name:"New"}).name, text: val});
    openDetail(id, cat);
  });
}
document.getElementById("modalClose").addEventListener("click", ()=> document.getElementById("detailModal").classList.add("hidden"));
document.getElementById("detailModal").addEventListener("click", (e)=>{ if(e.target.id==="detailModal") return; });

// ===== Chatbot (rule-based, replies in speech + text, EN / Tamil / Tanglish) =====
const chatToggle = document.getElementById("chatToggle");
const chatWidget = document.getElementById("chatWidget");
chatToggle.addEventListener("click", ()=> chatWidget.classList.toggle("hidden"));
document.getElementById("chatClose").addEventListener("click", ()=> chatWidget.classList.add("hidden"));
document.getElementById("voiceMuteBtn")?.addEventListener("click", (e)=>{
  state.voiceReplies = !state.voiceReplies;
  e.target.textContent = state.voiceReplies ? "🔊" : "🔇";
  if(!state.voiceReplies && window.speechSynthesis) window.speechSynthesis.cancel();
});

const BOT_REPLIES = {
  en: {
    badge:"Badges are Bronze (1+), Silver (5+), Gold (10+) and Elite (20+) verified participations. Check the Profile & Badges tab.",
    deadline:"Tap the bell icon in the top bar for live deadline-risk alerts, or check the countdown on each opportunity card.",
    scholarship:"Open the Scholarships tab — every card shows its exact eligibility criteria, so you can check in seconds.",
    freelance:"Open the Freelance tab for gig work like content writing, design, web dev, video editing and tutoring.",
    filter:"Use the filter bar at the top of each section: field, sub-category, online or offline, and price band.",
    map:"Every opportunity's detail page includes an exact location map — click any card to open it.",
    voice:"Tap the microphone icon next to the search bar and speak your query. I reply back in speech too.",
    qa:"Each section has its own Q&A tab — post a question there and it stays with that section, not mixed with others.",
    faq:"Every section has its own FAQ tab with quick answers, separate from the peer Q&A.",
    resources:"The Resources section has peer-sourced books, courses and tools, with its own Q&A and FAQ.",
    default:"I can help with badges, deadlines, filters, maps, scholarships, freelance gigs, or the Q&A and FAQ in any section — what do you need?",
  },
  tanglish: {
    badge:"Badges na Bronze (1+), Silver (5+), Gold (10+) matrum Elite (20+) verified participations. Profile & Badges tab paakunga.",
    deadline:"Top bar la bell icon click pannunga deadline alerts-ku, illa ஒவ்வொரு card layum countdown paakalam.",
    scholarship:"Scholarships tab open pannunga — ஒவ்வொரு card-layum eligibility clear-a irukum.",
    freelance:"Freelance tab-la content writing, design, web dev, video editing, tutoring gigs irukku.",
    filter:"Filter bar use pannunga: field, sub-category, online/offline, price band nu.",
    map:"Ovvoru opportunity-oda detail page-la exact location map irukum.",
    voice:"Mic icon click panni pேசுங்க, naan speech-layum பதில் sொல்லுவேன்.",
    qa:"Ovvoru section-kum thani Q&A tab irukku — question mattum andha section-la than irukum.",
    faq:"Ovvoru section-kum thani FAQ tab irukku, Q&A-ku separate-a.",
    resources:"Resources section-la books, courses, tools irukum, adhukum thani Q&A + FAQ irukum.",
    default:"Badges, deadlines, filters, maps, scholarships, freelance, Q&A, FAQ — edhu venumnalum kேளுங்க!",
  },
  ta: {
    badge:"பேட்ஜ்கள்: வெண்கலம் (1+), வெள்ளி (5+), தங்கம் (10+), எலைட் (20+) பங்கேற்புகள். சுயவிவரம் & பேட்ஜ்கள் பகுதியில் பாருங்கள்.",
    deadline:"மேலே உள்ள மணி ஐகானைத் தட்டி காலக்கெடு எச்சரிக்கைகளைப் பாருங்கள், அல்லது ஒவ்வொரு அட்டையிலும் நாள் எண்ணிக்கை உள்ளது.",
    scholarship:"உதவித்தொகைகள் பகுதியைத் திறக்கவும் — ஒவ்வொரு அட்டையிலும் தகுதி விவரம் தெளிவாக உள்ளது.",
    freelance:"ஃப்ரீலான்ஸ் பகுதியில் எழுத்து, வடிவமைப்பு, வலை உருவாக்கம், காணொளி எடிட்டிங், டியூஷன் வேலைகள் உள்ளன.",
    filter:"ஒவ்வொரு பகுதியிலும் மேலே உள்ள வடிகட்டியைப் பயன்படுத்தி துறை, உப-பிரிவு, ஆன்லைன்/ஆஃப்லைன், கட்டணத்தைத் தேர்ந்தெடுக்கலாம்.",
    map:"ஒவ்வொரு வாய்ப்பின் விவரப் பக்கத்திலும் சரியான இட வரைபடம் உள்ளது.",
    voice:"தேடல் பட்டியின் அருகே உள்ள மைக் ஐகானைத் தட்டி பேசுங்கள், நான் குரலிலும் பதில் சொல்வேன்.",
    qa:"ஒவ்வொரு பகுதிக்கும் அதற்கே உரிய கேள்வி-பதில் தாவல் உள்ளது — கலவாமல் தனித்தனியாக.",
    faq:"ஒவ்வொரு பகுதிக்கும் அதற்கே உரிய அடிக்கடி கேட்கப்படும் கேள்விகள் தாவல் உள்ளது.",
    resources:"வளங்கள் பகுதியில் புத்தகங்கள், பாடநெறிகள், கருவிகள் உள்ளன — அதற்கும் தனி கேள்வி-பதில் & FAQ உண்டு.",
    default:"பேட்ஜ், காலக்கெடு, வடிகட்டி, வரைபடம், உதவித்தொகை, ஃப்ரீலான்ஸ், கேள்வி-பதில் — எதைப் பற்றி வேண்டுமானாலும் கேளுங்கள்!",
  },
};

function botReply(msg){
  const m = msg.toLowerCase();
  const R = BOT_REPLIES[state.lang] || BOT_REPLIES.en;
  if(m.includes("badge")) return R.badge;
  if(m.includes("deadline")) return R.deadline;
  if(m.includes("freelance") || m.includes("gig")) return R.freelance;
  if(m.includes("scholarship")) return R.scholarship;
  if(m.includes("resource") || m.includes("book")) return R.resources;
  if(m.includes("faq")) return R.faq;
  if(m.includes("q&a") || m.includes("question") || m.includes("qa")) return R.qa;
  if(m.includes("filter")) return R.filter;
  if(m.includes("map") || m.includes("location")) return R.map;
  if(m.includes("voice")) return R.voice;
  return R.default;
}
document.getElementById("chatForm").addEventListener("submit", (e)=>{
  e.preventDefault();
  const input = document.getElementById("chatInput");
  const val = input.value.trim();
  if(!val) return;
  const log = document.getElementById("chatLog");
  log.innerHTML += `<div class="chat-msg user">${val}</div>`;
  const reply = botReply(val);
  log.innerHTML += `<div class="chat-msg bot">${reply}</div>`;
  log.scrollTop = log.scrollHeight;
  input.value = "";
  speak(reply);
});
