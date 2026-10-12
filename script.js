// const memories = [
//   { image: "images/pic 1.jpeg", title: "A Beautiful Beginning", language: "Gujarati",
//     quote: "તમારો સાથ જ જીવનની સૌથી સુંદર ભેટ છે. ❤️", note: "Some memories never grow old." },
//   { image: "images/pic 2.jpeg", title: "Smiles Together", language: "Hindi",
//     quote: "साथ आपका हो, तो हर रास्ता खूबसूरत लगता है। ❤️", note: "Look at that smile, Mumma! 😍" },
//   { image: "images/pic 3.jpeg", title: "Growing Together", language: "English",
//     quote: "Growing older together, but never growing apart.", note: "Your love story is proof that true love doesn't fade with time; it only grows more beautiful with every passing year.💕" },
//   { image: "images/pic 4.jpeg", title: "Peaceful Moments", language: "Gujarati",
//     quote: "हर तस्वीर में प्यार, हर याद में मुस्कान, और हर जन्म में आपका साथ। 💕", note: "Sitting side by side, just like always." },
//   { image: "images/pic 5.jpeg", title: "Waves of Love", language: "Hindi",
//     quote: "ચાંદની રાતમાં ચમકતા તારાની જેમ, તું મારા જીવનમાં ચમકે છે પ્રેમની જેમ.તારા વિના અધૂરી છે મારી દરેક ખુશી, તું જ છે મારા જીવનની સૌથી સુંદર ખુશી.💗", note: "Papa, nice pose! 😜" },
//   { image: "images/pic 6.jpeg", title: "Our Little Family", language: "Gujarati",
//     quote: "Through every season, through every high and low, My love for you will only continue to grow.", note: "The home you built with love is my favourite place." },
//   { image: "images/pic 7.jpeg", title: "Festive Colours", language: "Hindi",
//     quote: "तुम मेरा आज, तुम मेरा कल, तुमसे ही खूबसूरत मेरा हर पल। ❤️", note: "Matching in yellow, matching in love! 💛" },
//   { image: "images/pic 8.jpeg", title: "Cool Couple", language: "English",
//     quote: "Still posing like it's your first date. So cute! 😎", note: "Your togetherness is one of life's most beautiful gifts." },
//   { image: "images/pic 9.jpeg", title: "Hand in Hand", language: "Gujarati",
//     quote: "જીવનની દરેક સફર સુંદર બની જાય, જ્યારે સાથ તમારો હોય.", note: "Thank you for showing me what love looks like." }
// ];

// const $ = id => document.getElementById(id);
// const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

// /* ---------- Page switching ---------- */
// function show(id){
//   document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
//   $(id).classList.add("active");
//   window.scrollTo({top:0});
// }

// /* ---------- Floating hearts, petals, sparkles ---------- */
// const fx = $("fx");
// function float(cls, chars, dur){
//   const e = document.createElement("span");
//   e.className = cls;
//   e.textContent = chars[Math.floor(Math.random()*chars.length)];
//   e.style.left = Math.random()*100 + "vw";
//   e.style.fontSize = (14 + Math.random()*22) + "px";
//   e.style.animationDuration = (dur + Math.random()*6) + "s";
//   fx.appendChild(e);
//   setTimeout(() => e.remove(), (dur+7)*1000);
// }
// if(!reduce){
//   setInterval(() => float("fl", ["💖","❤️","💕","💗"], 9), 1200);
//   setInterval(() => float("pt", ["🌸","🌹","🌺"], 11), 1700);
// }
// for(let i=0;i<14;i++){
//   const s = document.createElement("span");
//   s.className = "spark"; s.textContent = "✨";
//   s.style.cssText = `left:${Math.random()*100}vw;top:${Math.random()*100}vh;font-size:${10+Math.random()*12}px;animation-delay:${Math.random()*2.4}s`;
//   fx.appendChild(s);
// }

// /* ---------- Page 1: YES / NO ---------- */
// $("open").onclick = () => $("arena").scrollIntoView({behavior:"smooth", block:"center"});

// function confetti(){
//   const bits = ["💖","🎉","✨","🌹","❤️","🎊","💕"];
//   for(let i=0;i<60;i++){
//     const c = document.createElement("span");
//     c.className = "conf"; c.textContent = bits[i % bits.length];
//     c.style.left = Math.random()*100 + "vw";
//     c.style.fontSize = (16 + Math.random()*20) + "px";
//     c.style.animationDuration = (1.8 + Math.random()*1.6) + "s";
//     c.style.animationDelay = Math.random()*.5 + "s";
//     document.body.appendChild(c);
//     setTimeout(() => c.remove(), 4000);
//   }
// }
// $("yes").onclick = () => { confetti(); setTimeout(() => show("intro"), 1800); };

// const arena = $("arena"), no = $("no"), yes = $("yes"), bubble = $("bubble");
// const msgs = ["Arre! You can't say NO! 😂","Nice try, Papa! 😜","No option available in true love! ❤️",
//   "Mumma, please help Papa click YES! 😂","Haha! Try again! 💕"];
// let last = -1, lastEsc = 0;

// function escape(){
//   const now = Date.now(); if(now - lastEsc < 180) return; lastEsc = now;
//   const a = arena.getBoundingClientRect(), y = yes.getBoundingClientRect();
//   const w = no.offsetWidth, h = no.offsetHeight;
//   let x, t, ok = false;
//   for(let i=0;i<40 && !ok;i++){
//     x = Math.random()*(a.width - w); t = Math.random()*(a.height - h);
//     const L = a.left+x, T = a.top+t, pad = 12;       // keep clear of YES button
//     ok = L > y.right+pad || L+w < y.left-pad || T > y.bottom+pad || T+h < y.top-pad;
//   }
//   if(!ok){ x = a.width - w - 4; t = a.height - h - 4; }
//   no.style.left = x + "px"; no.style.top = t + "px";
//   let k; do{ k = Math.floor(Math.random()*msgs.length); }while(k === last); last = k;
//   bubble.textContent = msgs[k];
//   bubble.style.left = Math.max(4, Math.min(x - 20, a.width - 250)) + "px";
//   bubble.style.top = (t > a.height/2 ? t - 34 : t + h + 6) + "px";
//   bubble.classList.add("show");
//   clearTimeout(escape.t); escape.t = setTimeout(() => bubble.classList.remove("show"), 1600);
// }
// ["mouseenter","pointerdown","touchstart","click","focus"].forEach(ev =>
//   no.addEventListener(ev, e => { e.preventDefault(); escape(); }, {passive:false}));
// arena.addEventListener("pointermove", e => {           // run away when approached
//   const r = no.getBoundingClientRect();
//   const d = Math.hypot(e.clientX-(r.left+r.width/2), e.clientY-(r.top+r.height/2));
//   if(d < 90) escape();
// });

// /* ---------- Page 2 -> Journey ---------- */
// let idx = 0;
// $("begin").onclick = () => { idx = 0; show("journey"); render(); };

// function render(){
//   const m = memories[idx], img = $("photo"), fr = $("frame");
//   $("missing").hidden = true; img.style.display = "";
//   img.onerror = () => { img.style.display = "none"; $("missing").hidden = false; };
//   img.src = m.image; img.alt = m.title;
//   $("mtitle").textContent = m.title;
//   const q = $("quote"); q.textContent = m.quote; q.lang = {Gujarati:"gu",Hindi:"hi"}[m.language] || "en";
//   $("note").textContent = m.note || "";
//   $("progress").textContent = `Memory ${idx+1} of ${memories.length} ❤️`;
//   $("prev").style.visibility = idx === 0 ? "hidden" : "visible";
//   $("next").textContent = idx === memories.length-1 ? "See the Final Surprise 💝" : "Next Memory →";
//   [fr, q, $("mtitle")].forEach(el => { el.classList.remove("turn","fade"); void el.offsetWidth; el.classList.add(el === fr ? "turn" : "fade"); });
// }
// $("next").onclick = () => { if(idx < memories.length-1){ idx++; render(); } else { show("final"); confetti(); } };
// $("prev").onclick = () => { if(idx > 0){ idx--; render(); } };
// document.addEventListener("keydown", e => {
//   if(!$("journey").classList.contains("active")) return;
//   if(e.key === "ArrowRight") $("next").click();
//   if(e.key === "ArrowLeft") $("prev").click();
// });

// /* ---------- Final page ---------- */
// $("replay").onclick = () => { idx = 0; show("journey"); render(); };
// $("home").onclick = () => show("welcome");

// /* ---------- Music (optional, never autoplays) ---------- */
// const audio = $("audio"), mbtn = $("music");
// mbtn.onclick = async () => {
//   try{
//     if(audio.paused){ await audio.play(); mbtn.textContent = "🎶"; mbtn.classList.add("on"); }
//     else{ audio.pause(); mbtn.textContent = "🎵"; mbtn.classList.remove("on"); }
//   }catch(err){ mbtn.title = "Add music/anniversary.mp3 to enable music"; mbtn.textContent = "🔇"; }
// };

/* =====================================================
   MEMORIES — the ORDER of this array IS the order shown.
   No sorting or shuffling anywhere. To add a photo: put the
   file in /images and add one object. To reorder: move objects.
   ===================================================== */
const memories = [
  { image: "images/pic 1.jpeg", title: "A Beautiful Beginning", language: "Gujarati",
    quote: "તમારો સાથ જ જીવનની સૌથી સુંદર ભેટ છે. ❤️", note: "Some memories never grow old." },
  { image: "images/pic 2.jpeg", title: "Smiles Together", language: "Hindi",
    quote: "साथ आपका हो, तो हर रास्ता खूबसूरत लगता है। ❤️", note: "Look at that smile, Mumma! 😍" },
  { image: "images/pic 3.jpeg", title: "Growing Together", language: "English",
    quote: "Growing older together, but never growing apart.", note: "Your story is one of my favourite stories." },
  { image: "images/pic 4.jpeg", title: "Peaceful Moments", language: "Gujarati",
    quote: "हर तस्वीर में प्यार, हर याद में मुस्कान, और हर जन्म में आपका साथ", note: "Sitting side by side, just like always." },
  { image: "images/pic 5.jpeg", title: "Waves of Love", language: "Hindi",
    quote: "ચાંદની રાતમાં ચમકતા તારાની જેમ, તું મારા જીવનમાં ચમકે છે પ્રેમની જેમ.તારા વિના અધૂરી છે મારી દરેક ખુશી, તું જ છે મારા જીવનની સૌથી સુંદર ખુશી.💗", note: "Papa, nice pose! 😜" },
  { image: "images/pic 6.jpeg", title: "Our Little Family", language: "Gujarati",
    quote: "Through every season, through every high and low, My love for you will only continue to grow.", note: "The home you built with love is my favourite place." },
  { image: "images/pic 7.jpeg", title: "Festive Colours", language: "Hindi",
    quote: "तुम मेरा आज, तुम मेरा कल, तुमसे ही खूबसूरत मेरा हर पल। ❤️", note: "Matching in yellow, matching in love! 💛" },
  { image: "images/pic 8.jpeg", title: "Cool Couple", language: "English",
    quote: "Still posing like it's your first date. So cute! 😎", note: "Your togetherness is one of life's most beautiful gifts." },
  { image: "images/pic 9.jpeg", title: "Hand in Hand", language: "Gujarati",
    quote: "જીવનની દરેક સફર સુંદર બની જાય, જ્યારે સાથ તમારો હોય.", note: "Thank you for showing me what love looks like." }
];

const $ = id => document.getElementById(id);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Page switching ---------- */
function show(id){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top:0});
}

/* ---------- Floating hearts, petals, sparkles ---------- */
const fx = $("fx");
function float(cls, chars, dur){
  const e = document.createElement("span");
  e.className = cls;
  e.textContent = chars[Math.floor(Math.random()*chars.length)];
  e.style.left = Math.random()*100 + "vw";
  e.style.fontSize = (14 + Math.random()*22) + "px";
  e.style.animationDuration = (dur + Math.random()*6) + "s";
  fx.appendChild(e);
  setTimeout(() => e.remove(), (dur+7)*1000);
}
if(!reduce){
  setInterval(() => float("fl", ["♥"], 9), 1200);
  setInterval(() => float("pt", [""], 11), 1700);
}
for(let i=0;i<14;i++){
  const s = document.createElement("span");
  s.className = "spark"; s.textContent = "✦";
  s.style.cssText = `left:${Math.random()*100}vw;top:${Math.random()*100}vh;font-size:${10+Math.random()*12}px;animation-delay:${Math.random()*2.4}s`;
  fx.appendChild(s);
}

/* ---------- Page 1: YES / NO ---------- */
$("open").onclick = () => $("arena").scrollIntoView({behavior:"smooth", block:"center"});

function confetti(){
  const bits = ["♥","✦","●","♦"], cols = ["#ff4f87","#ffd9e5","#f2c9a0","#ff9ab8","#fff"];
  for(let i=0;i<60;i++){
    const c = document.createElement("span");
    c.className = "conf"; c.textContent = bits[i % bits.length]; c.style.color = cols[i % cols.length];
    c.style.left = Math.random()*100 + "vw";
    c.style.fontSize = (16 + Math.random()*20) + "px";
    c.style.animationDuration = (1.8 + Math.random()*1.6) + "s";
    c.style.animationDelay = Math.random()*.5 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}
$("yes").onclick = () => { confetti(); setTimeout(() => show("intro"), 1800); };

const arena = $("arena"), no = $("no"), yes = $("yes"), bubble = $("bubble");
const msgs = ["Arre! You can't say NO! 😂","Nice try, Papa! 😜","No option available in true love! ❤️",
  "Mumma, please help Papa click YES! 😂","Haha! Try again! 💕"];
let last = -1, lastEsc = 0;

function escape(){
  const now = Date.now(); if(now - lastEsc < 180) return; lastEsc = now;
  const a = arena.getBoundingClientRect(), y = yes.getBoundingClientRect();
  const w = no.offsetWidth, h = no.offsetHeight;
  let x, t, ok = false;
  for(let i=0;i<40 && !ok;i++){
    x = Math.random()*(a.width - w); t = Math.random()*(a.height - h);
    const L = a.left+x, T = a.top+t, pad = 12;       // keep clear of YES button
    ok = L > y.right+pad || L+w < y.left-pad || T > y.bottom+pad || T+h < y.top-pad;
  }
  if(!ok){ x = a.width - w - 4; t = a.height - h - 4; }
  no.style.left = x + "px"; no.style.top = t + "px";
  let k; do{ k = Math.floor(Math.random()*msgs.length); }while(k === last); last = k;
  bubble.textContent = msgs[k];
  bubble.style.left = Math.max(4, Math.min(x - 20, a.width - 250)) + "px";
  bubble.style.top = (t > a.height/2 ? t - 34 : t + h + 6) + "px";
  bubble.classList.add("show");
  clearTimeout(escape.t); escape.t = setTimeout(() => bubble.classList.remove("show"), 1600);
}
["mouseenter","pointerdown","touchstart","click","focus"].forEach(ev =>
  no.addEventListener(ev, e => { e.preventDefault(); escape(); }, {passive:false}));
arena.addEventListener("pointermove", e => {           // run away when approached
  const r = no.getBoundingClientRect();
  const d = Math.hypot(e.clientX-(r.left+r.width/2), e.clientY-(r.top+r.height/2));
  if(d < 90) escape();
});

/* ---------- Page 2 -> Journey ---------- */
let idx = 0;
$("begin").onclick = () => { idx = 0; show("journey"); render(); };

function render(){
  const m = memories[idx], img = $("photo"), fr = $("frame");
  $("missing").hidden = true; img.style.display = "";
  img.onerror = () => { img.style.display = "none"; $("missing").hidden = false; };
  img.src = m.image; img.alt = m.title;
  $("mtitle").textContent = m.title;
  const q = $("quote"); q.textContent = m.quote; q.lang = {Gujarati:"gu",Hindi:"hi"}[m.language] || "en";
  $("note").textContent = m.note || "";
  $("progress").textContent = `Memory ${idx+1} of ${memories.length} ❤️`;
  $("bar").style.width = ((idx+1)/memories.length*100) + "%";
  $("prev").style.visibility = idx === 0 ? "hidden" : "visible";
  $("next").textContent = idx === memories.length-1 ? "See the Final Surprise 💝" : "Next Memory →";
  [fr, q, $("mtitle")].forEach(el => { el.classList.remove("turn","fade"); void el.offsetWidth; el.classList.add(el === fr ? "turn" : "fade"); });
}
$("next").onclick = () => { if(idx < memories.length-1){ idx++; render(); } else { show("final"); confetti(); } };
$("prev").onclick = () => { if(idx > 0){ idx--; render(); } };
document.addEventListener("keydown", e => {
  if(!$("journey").classList.contains("active")) return;
  if(e.key === "ArrowRight") $("next").click();
  if(e.key === "ArrowLeft") $("prev").click();
});

/* ---------- Final page ---------- */
$("replay").onclick = () => { idx = 0; show("journey"); render(); };
$("home").onclick = () => show("welcome");

/* ---------- Music (optional, never autoplays) ---------- */
const audio = $("audio"), mbtn = $("music");
mbtn.onclick = async () => {
  try{
    if(audio.paused){ await audio.play(); mbtn.textContent = "🎶"; mbtn.classList.add("on"); }
    else{ audio.pause(); mbtn.textContent = "🎵"; mbtn.classList.remove("on"); }
  }catch(err){ mbtn.title = "Add music/anniversary.mp3 to enable music"; mbtn.textContent = "🔇"; }
};