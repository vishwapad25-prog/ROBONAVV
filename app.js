const $=s=>document.querySelector(s);
const W=200,H=102,CS=5,MPP=.012,DEMO=2;
const G=new Uint8Array(W*H);{const b=atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAABB//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAB///+AAAAAAAAAAAAAAAAAAAAAAAAAAAF/////gAAAAAAAAAAAAAAAAAAAAAAAAAB//////8AAAAAAAAAAAAAAAAAAA8AAAAAB///////AAAAAAAAAAAAAAAAAAAPAAAABh///////wAAAAAAAAAAAAAAAAAAD4AAA/////////8AAAAAAAAAAAAAAAAAAA+AAAf/////////gAAAAAAAAAAAAAAAAAAHwAA//////////4AAAAAAAAAAAAAAAAAAB+AAf/////////8AAAAAAAAAAAAAAAAAAAfwA///////////AAAAAAAAAAAAAAAAAAAH+Af//////gf//wAAAAAAAAAAAAAAAAAAB/wP+f////gD//8AAAAAAAAAAAAAAAAAAAf//8B////wAf//gAAAAAAAAAAAAAAAAAAH/+AAH///4AD//4AAAAAAAAAAAAAAAAAAD/wAAA///8AA//8AAAAAAAAAAAAAAAAAAB8AAAAP4f/AAP//gAAAAAAAAAAAAAAAAAB+AAAAB8B/wAD//4AAAAfAAAAAAAAAAAAP/AAAAAeAP8AAf/+AAAB/wAAAAAAAAAAH//gAAAAHgB/AAH//gAAAf8AAAAAAAAAD///wAAAABwAOAAB//8AAAH/AAAAAAAAA////8AAAAAcAAAAAf//AAAD/wAAAAAAAf/////AAAAADAAAAAH//wAAA/+AAAAAAP//////wAAAAAwAAAAB//8AAAP/gAAAAD///////4AAAAAMAAAAAH//gAAB/4AAAAf////////AAAAADAAAAAA//8AAAf/AAAH/////////wAAAAA4AAAAAP//AAAH/wAD///////+Af8AAAAAOAAAAAD//wAAA//Af//////8AAD/gAAAADgAAAAA//8AAAP/////////AAAA/8AAAAA4AAAAAP//AAAD////////wAAAAH/AAAAAOAAAAAD//wAAAf//////kgAAAAB/4AAAADwAAAAB//8AAAP/////4AAAAAAAf+AAAAA8AAAAA//+AAAAf///8AAAAAAAAH/gAAAAfAAAAAP//wAAAD///gAAAAAAAAB/4AAAAP4AAAAD//8AAAA//+AAAAAAAAAAf/AAAAH+AAAAB///AAAAH//AAAAAAAAAAP/wAAAB/wDwAB///wAAAB//wAAAAAAAAAD/8AAAAf//+AD///8AAAAf/4AAAAAAAAAB//AAAAH///4/////AAAAD/+AAAAAAAAAA//wAAAD/////////wAAAA//gAAAAAAAAH//+AAAA/////////+AAAAf/4AAAAAAAAf///gAAAf/////////wAAAH/+AAAAAAAA////+AAAP/////////8AAAD//wAAAAAAD/////wAAP//////////AAAAf/8AAAAAAB//////AH//////4H///wAAAH//AAAAAAH/////////////4AA///8AAAB//4AAAYAD////////////8AAAH///AAAAf/8AAAHAB////////////AAAAA//wAAAAD//AAAB/4///////////4AAAAAP+AAAAAA//4AAA////////////8cAAAAAD+AAAAAAP/+AAAP//////////8AAAAAAAA/AAAAAAD//gAAP//////////gAAAAAAAAPgAAAAAA//8APf///////AP+AAAAAAAAADwAAAAAAP//wf///////wAB/AAAAAAAAAAAAAAAAAB//////////4AAAPwAAAAAAAAAAAAAAAAAf////////+AAAAD4AAAAAAAAAAAAAAAAAP////////wAAAAAeAAAAAAAAAAAAAAAAAD///////wAAAAAAHgAAAAAAAAAAAAAAAAA//////+AAAAAAAB4AAAAAAAAAAAAAAAAAP/////gAAAAAAAAeAAAAAAAAAAAAAAAAAD////4AAAAAAAAAHwAAAAAAAAAAAAAAAAA////gAAAAAAAAAA+AAAAAAAAAAAAAAAAAP//wAAAAAAAAAAAMAAAAAAAAAAAAAAAAAD/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");for(let i=0;i<W*H;i++)G[i]=(b.charCodeAt(i>>3)>>(7-(i&7)))&1}
const ok=(x,y)=>{const gx=x/CS|0,gy=y/CS|0;return x>=0&&y>=0&&gx<W&&gy<H&&G[gy*W+gx]===1};
function snap(x,y){if(ok(x,y))return{x,y};let b=null,bd=1e9;const cx=x/CS|0,cy=y/CS|0;
 for(let j=cy-30;j<=cy+30;j++)for(let i=cx-30;i<=cx+30;i++){if(i<0||j<0||i>=W||j>=H||!G[j*W+i])continue;const d=(i-cx)**2+(j-cy)**2;if(d<bd){bd=d;b={x:i*CS+2,y:j*CS+2}}}
 return b}
function los(a,b){const n=Math.ceil(Math.hypot(b.x-a.x,b.y-a.y));for(let i=0;i<=n;i++)if(!ok(a.x+(b.x-a.x)*i/n,a.y+(b.y-a.y)*i/n))return false;return true}
function plan(a,b){
 const s=snap(a.x,a.y),g=snap(b.x,b.y);if(!s||!g)return null;
 const sx=s.x/CS|0,sy=s.y/CS|0,gx=g.x/CS|0,gy=g.y/CS|0,N=W*H;
 const cost=new Float32Array(N).fill(1e9),prev=new Int32Array(N).fill(-1),done=new Uint8Array(N);
 const h=(i,j)=>{const dx=Math.abs(i-gx),dy=Math.abs(j-gy);return Math.max(dx,dy)+.414*Math.min(dx,dy)};
 const open=[[h(sx,sy),sy*W+sx]];cost[sy*W+sx]=0;
 while(open.length){let k=0;for(let m=1;m<open.length;m++)if(open[m][0]<open[k][0])k=m;
  const c=open.splice(k,1)[0][1];if(done[c])continue;done[c]=1;const cx=c%W,cy=c/W|0;
  if(cx===gx&&cy===gy)break;
  for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){if(!dx&&!dy)continue;const nx=cx+dx,ny=cy+dy;
   if(nx<0||ny<0||nx>=W||ny>=H||!G[ny*W+nx])continue;
   if(dx&&dy&&(!G[cy*W+nx]||!G[ny*W+cx]))continue;
   const n=ny*W+nx,nc=cost[c]+(dx&&dy?1.414:1);if(nc<cost[n]){cost[n]=nc;prev[n]=c;open.push([nc+h(nx,ny),n])}}}
 const gi=gy*W+gx;if(prev[gi]<0&&gi!==sy*W+sx)return null;
 const cells=[];for(let c=gi;c>=0;c=prev[c])cells.push({x:(c%W)*CS+2,y:(c/W|0)*CS+2});cells.reverse();
 const pts=[{x:a.x,y:a.y},...cells.slice(1,-1),{x:g.x,y:g.y}];
 const out=[pts[0]];let i=0;while(i<pts.length-1){let j=pts.length-1;while(j>i+1&&!los(pts[i],pts[j]))j--;out.push(pts[j]);i=j}
 return out}
const plen=p=>p.reduce((s,q,i)=>i?s+Math.hypot(q.x-p[i-1].x,q.y-p[i-1].y):0,0);

/* ---------- state ---------- */
let robot={x:507,y:317,a:180},locs,sel=null,route=null,pend=null,J=null,mode="",draft=null;
const sys=[{id:"home",n:"Home",x:152,y:342,t:"home"},{id:"chg",n:"Charging Station",x:902,y:272,t:"chg"}];
const defUser=[{id:"u1",n:"Location 1",x:342,y:362,t:"user"},{id:"u2",n:"Location 2",x:702,y:132,t:"user"}];
let userLocs=defUser;try{const s=JSON.parse(localStorage.getItem("robonav_locs")||"null");if(Array.isArray(s))userLocs=s}catch(e){}
const all=()=>[...sys,...userLocs];
const save=()=>{try{localStorage.setItem("robonav_locs",JSON.stringify(userLocs))}catch(e){}};
const pct=(el,x,y)=>{el.style.left=x/10+"%";el.style.top=y/5.12+"%"};

/* ---------- map layers ---------- */
const plane=$("#plane"),stage=$("#stage");
for(let i=0;i<7;i++){const d=document.createElement("div");d.className="wl"+(i==6?" top":"");d.style.setProperty("--z",(4+i*4)+"px");plane.insertBefore(d,$(".pth"))}
for(let i=0;i<4;i++){const d=document.createElement("div");d.className="rb"+(i==3?" t":"");d.style.setProperty("--z",(i*3)+"px");$("#rot").appendChild(d)}
const setU=()=>plane.style.setProperty("--u",plane.clientWidth/1000+"px");
new ResizeObserver(setU).observe($("#mapbox"));setU();
function drawRobot(){pct($("#rbt"),robot.x,robot.y);$("#rot").style.transform=`rotate(${robot.a}deg)`}
function renderPins(){const p=$("#pins");p.innerHTML="";all().forEach(l=>{const d=document.createElement("div");d.className="bb";pct(d,l.x,l.y);
 d.innerHTML=`<div class="tag"><span class="lb"></span><i class="pd ${l.t}"></i></div>`;d.querySelector(".lb").textContent=l.n;p.appendChild(d)})}
function renderDests(){const d=$("#dests");d.innerHTML="";all().forEach(l=>{const b=document.createElement("div");b.className="dest"+(l.t=="chg"?" chg":"")+(l.id===sel?" sel":"");b.tabIndex=0;
 b.innerHTML=`<span>${l.t=="home"?"⌂":l.t=="chg"?"▮":"⌖"}</span><span class="n"></span>`;b.querySelector(".n").textContent=l.n;
 if(l.t=="user"){const x=document.createElement("button");x.className="x";x.textContent="×";x.title="Delete "+l.n;x.onclick=e=>{e.stopPropagation();userLocs=userLocs.filter(u=>u.id!==l.id);save();if(sel===l.id){sel=null;clearRoute()}renderPins();renderDests();refreshStart();toast(l.n+" deleted")};b.appendChild(x)}
 b.onclick=()=>selectLoc(l.id);b.onkeydown=e=>{if(e.key==="Enter")selectLoc(l.id)};d.appendChild(b)})}

/* ---------- helpers ---------- */
let tt;function toast(m){const t=$("#toast");t.textContent=m;t.style.display="block";clearTimeout(tt);tt=setTimeout(()=>t.style.display="none",2600)}
const log=t=>{const d=new Date(),h=String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");
 $("#log").insertAdjacentHTML("afterbegin",`<div><time>${h}</time><span class="tk">✓</span><span></span></div>`);$("#log").firstChild.lastChild.textContent=t;const l=$("#log").children;while(l.length>4)l[l.length-1].remove()};
const setStatus=(a,b)=>{$("#status").textContent=a;$("#statusSub").textContent=b};
const speed=()=>+$("#sp").value/100;
const nearest=()=>{let b=null,bd=70;all().forEach(l=>{const d=Math.hypot(l.x-robot.x,l.y-robot.y);if(d<bd){bd=d;b=l.n}});return b||"Lab"};
const drawPath=p=>$("#path").setAttribute("d",p?"M"+p.map(q=>q.x.toFixed(0)+" "+q.y.toFixed(0)).join(" L"):"");
function showGoal(p){const g=$("#goal");if(!p){g.style.display="none";return}pct(g,p.x,p.y);g.style.display="block"}
function clearRoute(){route=null;pend=null;drawPath(null);showGoal(null);$("#ask").style.display="none"}
function refreshStart(){const b=$("#start"),w=$("#why");
 if(J){b.disabled=true;w.textContent="On the way. Press STOP ROBOT to cancel."}
 else if(sel==null){b.disabled=true;w.textContent="Pick a destination to enable Start."}
 else if(!route){b.disabled=true;w.textContent="No safe route found to this place."}
 else{b.disabled=false;w.textContent=`Safe route found · ${(plen(route)*MPP).toFixed(1)} m`}}

/* ---------- destinations ---------- */
function selectLoc(id){if(J)return toast("Stop the robot first");const l=all().find(x=>x.id===id);sel=id;pend=null;$("#ask").style.display="none";
 route=plan(robot,l);drawPath(route);showGoal(l);renderDests();refreshStart();if(!route)toast("No safe route to "+l.n)}
$("#start").onclick=()=>{const l=all().find(x=>x.id===sel);if(l)begin(plan(robot,l),l.n)};
function begin(p,name){if(!p)return toast("No safe route found");
 const cum=[0];for(let i=1;i<p.length;i++)cum.push(cum[i-1]+Math.hypot(p[i].x-p[i-1].x,p[i].y-p[i-1].y));
 J={p,cum,L:cum[cum.length-1],d:0,name};$("#ask").style.display="none";setStatus("Driving","Following a safe path");log("Going to "+name);refreshStart()}
function endJourney(msg,sub,arrived){const n=J&&J.name;J=null;drawPath(null);showGoal(null);$("#pb").style.width="0";$("#pp").textContent="0%";
 setStatus("Ready","No errors");$("#pt").textContent=msg;$("#ps").textContent=sub;if(arrived){log("Reached "+n)}$("#loc").textContent=nearest();sel=null;route=null;renderDests();refreshStart()}
$("#stop").onclick=()=>{if(J){endJourney("Stopped","Safe stop applied");log("Stopped by student")}else{keys.clear();toast("Robot is already stopped")}};

/* ---------- click on map ---------- */
let dragged=false;
$("#floor").addEventListener("click",e=>{if(dragged)return;const f=$("#floor");
 const x=e.offsetX/f.clientWidth*1000,y=e.offsetY/f.clientHeight*512;
 if(mode==="add")return placeDraft(x,y);
 if(J)return toast("Stop the robot first");
 const s=snap(x,y);if(!s)return toast("Pick a spot on the open floor");
 if(!ok(x,y))toast("Moved to the nearest open spot");
 sel=null;renderDests();pend=s;route=plan(robot,s);drawPath(route);showGoal(s);refreshStart();
 if(!route){$("#ask").style.display="none";return toast("No safe route found")}
 $("#askTxt").textContent=`Go here? ${(plen(route)*MPP).toFixed(1)} m`;$("#ask").style.display="flex"});
$("#no").onclick=()=>clearRoute();
$("#yes").onclick=()=>begin(route,"selected point");

/* ---------- add location ---------- */
function addMode(on){mode=on?"add":"";$("#mapbox").classList.toggle("pick",on);$("#addbar").style.display=on?"flex":"none";$("#ab1").style.display="flex";$("#ab2").style.display="none";if(on){clearRoute();sel=null;renderDests();refreshStart()}else{draft=null;showGoal(null)}}
function placeDraft(x,y){const s=snap(x,y);if(!s||!ok(x,y)&&Math.hypot(s.x-x,s.y-y)>40)return toast("Pick a spot on the open floor");
 draft=s;showGoal(s);$("#ab1").style.display="none";$("#ab2").style.display="flex";
 let n=1;const names=all().map(l=>l.n);while(names.includes("Location "+n))n++;$("#abName").value="Location "+n;$("#abName").focus();$("#abName").select()}
$("#addBtn").onclick=()=>{if(J)return toast("Stop the robot first");addMode(true)};
$("#abCancel").onclick=$("#abCancel2").onclick=()=>addMode(false);
$("#abRobot").onclick=()=>placeDraft(robot.x,robot.y);
function saveDraft(){const n=$("#abName").value.trim();if(!n||!draft)return toast("Type a name first");
 if(all().some(l=>l.n.toLowerCase()===n.toLowerCase()))return toast("That name is already used");
 const l={id:"u"+Date.now(),n,x:draft.x,y:draft.y,t:"user"};userLocs.push(l);save();addMode(false);renderPins();renderDests();selectLoc(l.id);toast(n+" saved")}
$("#abSave").onclick=saveDraft;
$("#abName").onkeydown=e=>{if(e.key==="Enter")saveDraft();if(e.key==="Escape")addMode(false)};

/* ---------- 2D / 3D view ---------- */
let v3=false,rx=58,rz=-12,zk=1;
function applyView(){plane.style.setProperty("--rx",(v3?rx:0)+"deg");plane.style.setProperty("--rz",(v3?rz:0)+"deg");plane.style.setProperty("--zm",(v3?.82:1)*zk);stage.classList.toggle("d3",v3);$("#hint3").style.display=v3?"flex":"none"}
document.querySelectorAll("#seg button").forEach(b=>b.onclick=()=>{v3=b.dataset.v==="3";document.querySelectorAll("#seg button").forEach(x=>x.classList.toggle("on",x===b));applyView()});
$("#zi").onclick=()=>{zk=Math.min(2,zk*1.2);applyView()};$("#zo").onclick=()=>{zk=Math.max(.7,zk/1.2);applyView()};
$("#rv").onclick=()=>{rx=58;rz=-12;zk=1;applyView()};
stage.addEventListener("pointerdown",e=>{if(!v3)return;const s={x:e.clientX,y:e.clientY,rz,rx};dragged=false;
 const mv=ev=>{const dx=ev.clientX-s.x,dy=ev.clientY-s.y;if(Math.hypot(dx,dy)>5)dragged=true;if(dragged){plane.style.transition="none";rz=s.rz+dx*.4;rx=Math.max(25,Math.min(75,s.rx-dy*.3));applyView()}};
 const up=()=>{removeEventListener("pointermove",mv);removeEventListener("pointerup",up);plane.style.transition="";setTimeout(()=>dragged=false,0)};
 addEventListener("pointermove",mv);addEventListener("pointerup",up)});

/* ---------- manual drive + journey loop ---------- */
const keys=new Set();let last=performance.now(),wasManual=false,warn=0;
function setKey(k,on){on?keys.add(k):keys.delete(k);const b=document.querySelector(`#pad [data-k="${k}"]`);if(b)b.classList.toggle("held",on)}
document.querySelectorAll("#pad button[data-k]").forEach(b=>{const k=b.dataset.k;b.onpointerdown=e=>{e.preventDefault();setKey(k,true)};b.onpointerup=b.onpointerleave=b.onpointercancel=()=>setKey(k,false)});
addEventListener("keydown",e=>{if(!e.key.startsWith("Arrow")||/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName))return;e.preventDefault();setKey(e.key,true)});
addEventListener("keyup",e=>{if(e.key.startsWith("Arrow"))setKey(e.key,false)});
addEventListener("blur",()=>[...keys].forEach(k=>setKey(k,false)));
const norm=a=>((a+540)%360)-180;
function frame(t){const dt=Math.min(.05,(t-last)/1000);last=t;
 if(keys.size){
  if(J)endJourney("Manual control","You took over from the path");
  const rot=(keys.has("ArrowRight")?1:0)-(keys.has("ArrowLeft")?1:0),mv=(keys.has("ArrowUp")?1:0)-(keys.has("ArrowDown")?1:0);
  robot.a=norm(robot.a+rot*110*dt);
  if(mv){const st=mv*speed()/MPP*DEMO*dt,r=robot.a*Math.PI/180,nx=robot.x+Math.cos(r)*st,ny=robot.y+Math.sin(r)*st;
   if(ok(nx,ny)){robot.x=nx;robot.y=ny;warn=0;setStatus("Moving","Manual control")}
   else{setStatus("Blocked","Obstacle ahead");if(t-warn>1500){toast("Obstacle ahead. Turn or back up.");warn=t}}}
  else if(rot)setStatus("Turning","Manual control");
  wasManual=true;
 }else if(wasManual){wasManual=false;setStatus("Ready","No errors");$("#loc").textContent=nearest()}
 if(J){const pps=speed()/MPP*DEMO;J.d=Math.min(J.L,J.d+pps*dt);let i=1;while(i<J.cum.length-1&&J.cum[i]<J.d)i++;
  const seg=J.cum[i]-J.cum[i-1]||1,u=Math.min(1,(J.d-J.cum[i-1])/seg),a=J.p[i-1],b=J.p[i];
  robot.x=a.x+(b.x-a.x)*u;robot.y=a.y+(b.y-a.y)*u;
  const ta=Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI;robot.a=norm(robot.a+norm(ta-robot.a)*Math.min(1,dt*8));
  drawPath([{x:robot.x,y:robot.y},...J.p.slice(i)]);
  const rem=J.L-J.d,pr=J.d/J.L*100;$("#pb").style.width=pr+"%";$("#pp").textContent=Math.round(pr)+"%";
  $("#pt").textContent="Going to "+J.name;$("#ps").textContent=`Distance: ${(rem*MPP).toFixed(1)} m | ETA: ${Math.ceil(rem/pps)} sec`;
  if(J.d>=J.L){const n=J.name;endJourney("Arrived at "+n,"Ready for the next trip",true)}}
 drawRobot();requestAnimationFrame(frame)}
requestAnimationFrame(frame);
$("#sp").oninput=e=>$("#spv").textContent=(e.target.value/100).toFixed(2)+" m/s";

/* ---------- misc ---------- */
$("#mode").onchange=e=>$("#set").style.display=e.target.value==="Engineer Mode"?"block":"none";
$("#setLink").onclick=e=>{e.preventDefault();$("#mode").value="Engineer Mode";$("#set").style.display="block";$("#set").scrollIntoView({behavior:"smooth"})};
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.querySelectorAll("#nav a").forEach(x=>x.classList.toggle("on",x===a))));
$("#theme").onclick=()=>{const r=document.documentElement;r.dataset.theme=r.dataset.theme==="light"?"dark":"light"};
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;let rec=null,listening=false;
function speak(t){if(!$("#vo").checked||!window.speechSynthesis)return;try{speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(t))}catch(e){}}
function reply(t){$("#vreply").textContent=t;speak(t)}
function run(txt){$("#vheard").textContent="“"+txt+"”";reply(command(txt))}
const NUM={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9};
function nudge(k,ms){if(J)return "Say stop first, then I can drive manually.";setKey(k,true);setTimeout(()=>setKey(k,false),ms);return "OK."}
function command(raw){
 const q=raw.toLowerCase().replace(/[.,!?]/g,"").replace(/\b(one|two|three|four|five|six|seven|eight|nine)\b/g,m=>NUM[m]).trim();
 if(!q)return "I didn't catch that.";const has=(...w)=>w.some(x=>q.includes(x));
 const byName=all().slice().sort((a,b)=>b.n.length-a.n.length).find(l=>q.includes(l.n.toLowerCase()));
 if(has("stop","halt","cancel","emergency")){if(J){endJourney("Stopped","Safe stop applied");log("Stopped by voice");return "Stopped."}keys.clear();return "I'm already stopped."}
 if(has("save","add location","add a location","remember this")){
  const m=q.match(/(?:\bas\b|called|named)\s+(.+)$/);let n=m?m[1].trim():"";n=n.replace(/\b\w/g,c=>c.toUpperCase()).slice(0,24);
  if(!n){let i=1;const names=all().map(l=>l.n);while(names.includes("Location "+i))i++;n="Location "+i}
  if(all().some(l=>l.n.toLowerCase()===n.toLowerCase()))return n+" already exists. Try another name.";
  const s=snap(robot.x,robot.y);const l={id:"u"+Date.now(),n,x:s.x,y:s.y,t:"user"};userLocs.push(l);save();renderPins();renderDests();return "Saved this spot as "+n+"."}
 if(has("delete","remove")){if(byName&&byName.t==="user"){userLocs=userLocs.filter(u=>u.id!==byName.id);save();if(sel===byName.id){sel=null;clearRoute()}renderPins();renderDests();refreshStart();return byName.n+" deleted."}
  return byName?"I can't delete "+byName.n+".":"Which location should I delete?"}
 if(has("list","show locations","show places","what locations","what places","saved"))return "Saved places: "+all().map(l=>l.n).join(", ")+"."
 if(has("where"))return (nearest()==="Lab"?"I'm in the lab.":"I'm near "+nearest()+".")+" Status: "+$("#status").textContent.toLowerCase()+".";
 if(has("battery","charge level"))return "Battery is 82 percent, about 2 hours 15 minutes left.";
 if(has("3d","3 d","three d")){$('#seg [data-v="3"]').click();return "Showing the 3D map."}
 if(has("2d","2 d","two d","flat")){$('#seg [data-v="2"]').click();return "Showing the 2D map."}
 if(has("faster","speed up")){$("#sp").value=Math.min(50,+$("#sp").value+10);$("#sp").oninput({target:$("#sp")});return "Speed is now "+$("#spv").textContent+"."}
 if(has("slower","slow down")){$("#sp").value=Math.max(5,+$("#sp").value-10);$("#sp").oninput({target:$("#sp")});return "Speed is now "+$("#spv").textContent+"."}
 if(has("turn around"))return nudge("ArrowRight",1650);
 if(has("turn left","go left"))return nudge("ArrowLeft",450);
 if(has("turn right","go right"))return nudge("ArrowRight",450);
 if(has("forward","ahead"))return nudge("ArrowUp",1000);
 if(has("back up","backward","reverse"))return nudge("ArrowDown",1000);
 if(has("go","drive","take me","navigate","send","charg","dock","head","move to")){
  const d=byName||(has("charg","dock")?all().find(l=>l.id==="chg"):has("home")?all().find(l=>l.id==="home"):null);
  if(!d)return "Which place? Say a saved name, like "+all()[0].n+".";
  if(J)return "I'm already driving. Say stop first.";
  selectLoc(d.id);if(!route)return "I can't find a safe route to "+d.n+".";
  const m=(plen(route)*MPP).toFixed(1);begin(route,d.n);return "Heading to "+d.n+". It is "+m+" meters away."}
 if(has("help","what can you do"))return "Try: go to Home, send to charging, save this spot as Lab Door, delete Location 1, turn left, faster, show 3D, or stop.";
 return "Sorry, I didn't understand. Say help to hear what I can do."}
$("#mic").onclick=()=>{
 if(!SR)return reply("Voice input isn't supported in this browser. Type a command below, or try Chrome or Edge.");
 if(listening){rec.stop();return}
 rec=new SR();rec.lang=navigator.language||"en-US";rec.interimResults=true;rec.continuous=false;
 rec.onstart=()=>{listening=true;$("#mic").classList.add("on");$("#vsub").textContent="Listening...";try{speechSynthesis.cancel()}catch(e){}};
 rec.onresult=e=>{let t="";for(const r of e.results)t+=r[0].transcript;$("#vheard").textContent="“"+t+"”";if(e.results[e.results.length-1].isFinal)run(t)};
 rec.onerror=e=>reply(e.error==="not-allowed"||e.error==="service-not-allowed"?"The microphone is blocked here. Allow it in your browser, or type a command below.":e.error==="no-speech"?"I didn't hear anything. Tap the mic and try again.":"Voice error: "+e.error);
 rec.onend=()=>{listening=false;$("#mic").classList.remove("on");$("#vsub").textContent="Tap the mic and speak"};
 try{rec.start()}catch(e){}};
document.querySelectorAll("#chips button").forEach(b=>b.onclick=()=>run(b.textContent));
$("#ms").onclick=()=>{const v=$("#mi").value.trim();if(v){run(v);$("#mi").value=""}};
$("#mi").onkeydown=e=>{if(e.key==="Enter")$("#ms").click()};
renderPins();renderDests();drawRobot();applyView();
