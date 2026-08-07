(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,68834,e=>{"use strict";var t=e.i(71645);let a=e=>{let t,a=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),a.forEach(a=>a(t,e))}},i=()=>t,h={setState:r,getState:i,getInitialState:()=>l,subscribe:e=>(a.add(e),()=>a.delete(e))},l=t=e(r,i,h);return h},r=e=>{let r=e?a(e):a,i=e=>(function(e,a=e=>e){let r=t.default.useSyncExternalStore(e.subscribe,t.default.useCallback(()=>a(e.getState()),[e,a]),t.default.useCallback(()=>a(e.getInitialState()),[e,a]));return t.default.useDebugValue(r),r})(r,e);return Object.assign(i,r),i};e.s(["create",0,e=>e?r(e):r],68834)},68003,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(74080),i=e.i(30200),h=e.i(96640),l=e.i(59544),n=e.i(33278),d=e.i(87287);e.s(["StreamPreviewModal",0,function({channel:e,onClose:s}){let o=(0,d.useMounted)(),[c,v]=(0,a.useState)(null),[m,p]=(0,a.useState)(!0),[f,z]=(0,a.useState)(.8),[g,u]=(0,a.useState)(!1),[x,b]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{if(!e)return;let t=!1;return n.channelsService.getChannelStream(e.id).then(e=>{t||v(e)}).catch(e=>{console.error(e)}),()=>{t=!0}},[e]),!e||!o)return null;let y=e=>{navigator.clipboard.writeText(e),b(!0),setTimeout(()=>b(!1),2e3)},M="live"===e.status;return(0,r.createPortal)((0,t.jsx)("div",{style:{position:"fixed",inset:0,zIndex:99999,background:"rgba(0, 0, 0, 0.75)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,overflow:"auto"},onClick:s,children:(0,t.jsxs)("div",{style:{width:"100%",maxWidth:760,margin:"auto",background:"var(--surface)",borderRadius:16,border:"1px solid var(--border)",boxShadow:"0 24px 48px rgba(0,0,0,0.5)",overflow:"hidden",display:"flex",flexDirection:"column",animation:"modalIn 0.2s cubic-bezier(0.16,1,0.3,1)"},onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)("div",{style:{padding:"16px 20px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.images?.logo?(0,t.jsx)("img",{src:e.images.logo,alt:e.name,style:{width:32,height:32,borderRadius:6,objectFit:"contain",background:"var(--surface-2)",padding:2}}):(0,t.jsx)("div",{style:{width:32,height:32,borderRadius:6,background:"var(--accent-dim)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(i.Icon,{name:"tv",size:18,color:"var(--accent)"})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{fontSize:16,fontWeight:700,color:"var(--text-1)",display:"flex",alignItems:"center",gap:8},children:[e.name,(0,t.jsx)(h.Badge,{variant:M?"success":"scheduled_maintenance"===e.status?"warning":"danger",dot:!0,children:e.status.replace("_"," ")})]}),(0,t.jsxs)("div",{style:{fontSize:12,color:"var(--text-3)"},children:["Channel #",e.number??"—"," • ",e.category||"General"," • ",e.language?.toUpperCase()||"EN"]})]})]}),(0,t.jsx)("button",{onClick:s,style:{width:32,height:32,borderRadius:8,border:"none",background:"var(--surface-2)",color:"var(--text-2)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(i.Icon,{name:"x",size:16})})]}),(0,t.jsxs)("div",{style:{position:"relative",width:"100%",aspectRatio:"16/9",background:"#000",overflow:"hidden"},children:[e.images?.banner||e.images?.thumbnail?(0,t.jsx)("img",{src:e.images?.banner||e.images?.thumbnail,alt:"Stream artwork",style:{width:"100%",height:"100%",objectFit:"cover",opacity:M&&m?.85:.4,filter:m?"none":"grayscale(60%)",transition:"opacity 0.3s, filter 0.3s"}}):(0,t.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#64748b"},children:(0,t.jsx)(i.Icon,{name:"tv",size:64})}),(0,t.jsxs)("div",{style:{position:"absolute",top:12,left:12,display:"flex",gap:8,alignItems:"center"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,background:"rgba(0,0,0,0.7)",backdropFilter:"blur(8px)",padding:"4px 10px",borderRadius:20},children:[M&&(0,t.jsx)("div",{className:"live-dot",style:{width:8,height:8}}),(0,t.jsx)("span",{style:{fontSize:11,fontWeight:800,color:"#fff",letterSpacing:"0.05em"},children:M?"LIVE":"OFFLINE"})]}),(0,t.jsx)("div",{style:{background:"rgba(0,0,0,0.7)",backdropFilter:"blur(8px)",padding:"4px 10px",borderRadius:20,fontSize:11,fontWeight:700,color:"#e2e8f0",fontFamily:"var(--font-mono)"},children:"1080p60 • HLS"}),e.drm_required&&(0,t.jsx)("div",{style:{background:"rgba(16,185,129,0.2)",border:"1px solid rgba(16,185,129,0.5)",backdropFilter:"blur(8px)",padding:"4px 10px",borderRadius:20,fontSize:11,fontWeight:700,color:"#34d399"},children:"DRM PROTECTED"})]}),!M&&(0,t.jsxs)("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,background:"rgba(0,0,0,0.6)"},children:[(0,t.jsx)("div",{style:{width:52,height:52,borderRadius:"50%",background:"rgba(239,68,68,0.2)",border:"1.5px solid #ef4444",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(i.Icon,{name:"x",size:24,color:"#ef4444"})}),(0,t.jsx)("div",{style:{fontSize:16,fontWeight:700,color:"#fff"},children:"Channel Signal Offline"}),(0,t.jsx)("div",{style:{fontSize:13,color:"#94a3b8"},children:"Bring channel online to resume live stream playback"})]}),M&&(0,t.jsxs)("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"12px 16px",background:"linear-gradient(to top, rgba(0,0,0,0.9), transparent)",display:"flex",alignItems:"center",justifyContent:"space-between",color:"#fff"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:14},children:[(0,t.jsx)("button",{onClick:()=>p(!m),style:{background:"none",border:"none",color:"#fff",cursor:"pointer",padding:0},children:(0,t.jsx)(i.Icon,{name:m?"pause":"play",size:20})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("button",{onClick:()=>u(!g),style:{background:"none",border:"none",color:"#fff",cursor:"pointer",padding:0},children:(0,t.jsx)(i.Icon,{name:g?"x":"volume",size:18})}),(0,t.jsx)("input",{type:"range",min:"0",max:"1",step:"0.05",value:g?0:f,onChange:e=>{z(parseFloat(e.target.value)),u(!1)},style:{width:70,accentColor:"var(--accent)",cursor:"pointer"}})]}),(0,t.jsxs)("div",{style:{fontSize:12,color:"#cbd5e1",fontWeight:600},children:["Live Stream Streamer ID: ",(0,t.jsx)("span",{style:{fontFamily:"var(--font-mono)"},children:c?.session_id?.slice(0,8)||"preview"})]})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,fontSize:11,color:"#94a3b8"},children:[(0,t.jsxs)("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:[(0,t.jsx)("span",{style:{width:6,height:6,borderRadius:"50%",background:"#22c55e"}}),"6.4 Mbps"]}),(0,t.jsx)("span",{children:"•"}),(0,t.jsx)("span",{children:"AAC Audio"})]})]})]}),(0,t.jsxs)("div",{style:{padding:20,background:"var(--surface)",display:"flex",flexDirection:"column",gap:12},children:[(0,t.jsx)("div",{style:{fontSize:12,fontWeight:700,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.07em"},children:"Live Stream Endpoint Specs"}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[(0,t.jsxs)("div",{style:{background:"var(--surface-2)",padding:12,borderRadius:10,border:"1px solid var(--border)"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:"var(--text-3)",marginBottom:4},children:"HLS Manifest URL"}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,t.jsx)("input",{readOnly:!0,value:c?.hls_url||"https://stream.encorastream.com/live/hls/playlist.m3u8",style:{flex:1,background:"transparent",border:"none",fontSize:12,fontFamily:"var(--font-mono)",color:"var(--text-1)",outline:"none",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}),(0,t.jsx)(l.Btn,{size:"xs",variant:"ghost",onClick:()=>y(c?.hls_url||""),children:x?"Copied":"Copy"})]})]}),(0,t.jsxs)("div",{style:{background:"var(--surface-2)",padding:12,borderRadius:10,border:"1px solid var(--border)"},children:[(0,t.jsx)("div",{style:{fontSize:11,color:"var(--text-3)",marginBottom:4},children:"MPEG-DASH Manifest URL"}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,t.jsx)("input",{readOnly:!0,value:c?.dash_url||"https://stream.encorastream.com/live/dash/manifest.mpd",style:{flex:1,background:"transparent",border:"none",fontSize:12,fontFamily:"var(--font-mono)",color:"var(--text-1)",outline:"none",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}),(0,t.jsx)(l.Btn,{size:"xs",variant:"ghost",onClick:()=>y(c?.dash_url||""),children:"Copy"})]})]})]})]})]})}),document.body)}])},33232,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(30200);e.s(["FilterPill",0,function({label:e,active:a,onClick:r}){return(0,t.jsx)("button",{onClick:r,style:{padding:"6px 16px",borderRadius:20,border:"1px solid",borderColor:a?"var(--accent)":"var(--border)",background:a?"var(--accent-dim)":"var(--surface)",color:a?"var(--accent)":"var(--text-2)",fontSize:12,fontWeight:a?600:500,cursor:"pointer",fontFamily:"var(--font)",letterSpacing:"-0.005em",whiteSpace:"nowrap",flexShrink:0,transform:a?"scale(1.03)":"scale(1)",transition:"all 0.16s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:e=>{a||(e.currentTarget.style.borderColor="var(--border-2)",e.currentTarget.style.color="var(--text-1)")},onMouseLeave:e=>{a||(e.currentTarget.style.borderColor="var(--border)",e.currentTarget.style.color="var(--text-2)")},children:e})},"LabelRow",0,function({label:e,children:a}){return(0,t.jsxs)("div",{style:{marginBottom:14},children:[(0,t.jsx)("div",{style:{fontSize:10.5,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:5},children:e}),a]})},"ProgressBar",0,function({value:e,max:r=100,color:i="var(--accent)",height:h=6,animated:l=!0,delay:n=0}){let d=Math.min(100,e/r*100),s=(0,a.useRef)(null),[o,c]=(0,a.useState)(l?0:d);return(0,a.useEffect)(()=>{if(!l)return void c(d);let e=s.current;if(!e)return;let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(setTimeout(()=>c(d),n),t.disconnect())},{threshold:.2});return t.observe(e),()=>t.disconnect()},[d,l,n]),(0,t.jsx)("div",{ref:s,style:{background:"var(--surface-3)",borderRadius:h,height:h,overflow:"hidden"},children:(0,t.jsx)("div",{style:{background:i,width:`${o}%`,height:"100%",borderRadius:h,transition:`width 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${n}ms`}})})},"StatMini",0,function({label:e,value:a,color:r}){return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:"var(--text-3)",marginBottom:3,letterSpacing:"-0.005em"},children:e}),(0,t.jsx)("div",{style:{fontSize:22,fontWeight:800,color:r||"var(--text-1)",letterSpacing:"-0.025em",animation:"cardIn 0.5s cubic-bezier(0.16,1,0.3,1) both"},children:a})]})},"TabBar",0,function({tabs:e,active:i,activeTab:h,onChange:l,fadeBorder:n}){let d=h||i||e[0]&&e[0].id||"",[s,o]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{requestAnimationFrame(()=>o(!0))},[]),(0,t.jsx)("div",{className:"no-scrollbar",style:{display:"flex",gap:0,borderBottom:n?"none":"1px solid var(--border)",marginBottom:22,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:e.map((e,a)=>{let i=d===e.id;return(0,t.jsxs)("button",{onClick:()=>l(e.id),style:{padding:"11px 20px",border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:i?600:400,color:i?"var(--accent)":"var(--text-3)",borderBottom:i?"2px solid var(--accent)":"2px solid transparent",marginBottom:-1,transition:"color 0.18s ease, border-color 0.18s ease, transform 0.15s ease",fontFamily:"var(--font)",display:"flex",alignItems:"center",gap:7,whiteSpace:"nowrap",transform:s?"translateY(0)":"translateY(4px)",opacity:+!!s,transitionDelay:`${35*a}ms`,letterSpacing:"-0.01em"},onMouseEnter:e=>{i||(e.currentTarget.style.color="var(--text-1)")},onMouseLeave:e=>{i||(e.currentTarget.style.color="var(--text-3)")},children:[e.icon&&(0,t.jsx)(r.Icon,{name:e.icon,size:13,color:"currentColor",strokeWidth:2}),e.iconEmoji&&(0,t.jsx)("span",{children:e.iconEmoji}),e.label,null!=e.count&&(0,t.jsx)("span",{style:{fontSize:10.5,background:i?"var(--accent-dim)":"var(--surface-3)",color:i?"var(--accent)":"var(--text-3)",borderRadius:20,padding:"1px 7px",fontWeight:600,transition:"background 0.18s, color 0.18s"},children:e.count})]},`${e.id}-${a}`)})})}])},49744,e=>{"use strict";var t=e.i(43476),a=e.i(30200);e.s(["DataTable",0,function({columns:e,rows:r,data:i,loading:h=!1,keyExtractor:l,onRowClick:n}){let d=r||i||[];return h?(0,t.jsxs)("div",{style:{padding:"36px 24px",textAlign:"center",color:"var(--text-3)"},children:[(0,t.jsx)(a.Icon,{name:"refresh",size:24,color:"var(--accent)",style:{margin:"0 auto 10px",animation:"spin 1s linear infinite"}}),(0,t.jsx)("div",{style:{fontSize:13},children:"Loading table records..."})]}):d&&0!==d.length?(0,t.jsx)("div",{style:{overflowX:"auto"},children:(0,t.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{style:{borderBottom:"1px solid var(--border)"},children:e.map((e,a)=>(0,t.jsx)("th",{style:{padding:"12px 18px",width:e.width,textAlign:e.align||"left",color:"var(--text-3)",fontWeight:600,fontSize:10.5,textTransform:"uppercase",letterSpacing:"0.06em",whiteSpace:"nowrap"},children:e.header||e.label||e.title},e.key||e.header||e.label||a))})}),(0,t.jsx)("tbody",{children:d.map((a,r)=>(0,t.jsx)("tr",{onClick:()=>n&&n(a),className:"row-hover animate-in",style:{borderBottom:"1px solid var(--border)",cursor:n?"pointer":"default","--i":r},children:e.map((e,r)=>{let i=e.key?a[e.key]:void 0;return(0,t.jsx)("td",{style:{padding:"13px 18px",width:e.width,color:"var(--text-1)",textAlign:e.align||"left",whiteSpace:e.nowrap?"nowrap":void 0,letterSpacing:"-0.005em"},children:e.accessor?e.accessor(a):e.render?e.render(i,a):i},e.key||e.header||e.label||r)})},l?l(a):a.id||a.tenant_id||r))})]})}):(0,t.jsxs)("div",{style:{padding:"48px 24px",textAlign:"center",color:"var(--text-3)"},children:[(0,t.jsx)(a.Icon,{name:"package",size:32,color:"var(--text-3)",style:{margin:"0 auto 10px"}}),(0,t.jsx)("div",{style:{fontSize:13},children:"No data found"})]})}])},49793,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let r={US:`<path fill="#bd3d44" d="M0 0h640v480H0"/>
  <path stroke="#fff" stroke-width="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
  <path fill="#192f5d" d="M0 0h364.8v258.5H0"/>
  <marker id="us-a" markerHeight="30" markerWidth="30">
    <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z"/>
  </marker>
  <path fill="none" marker-mid="url(#us-a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"/>`,GB:`<path fill="#012169" d="M0 0h640v480H0z"/>
  <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
  <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/>
  <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/>
  <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/>`,AU:`<path fill="#00008B" d="M0 0h640v480H0z"/>
  <path fill="#fff" d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"/>
  <path fill="red" d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"/>
  <path fill="#fff" d="M120.5 0v240h80V0zM0 80v80h320V80z"/>
  <path fill="red" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"/>
  <path fill="#fff" d="m527 396.7-20.5 2.6 2.2 20.5-14.8-14.4-14.7 14.5 2-20.5-20.5-2.4 17.3-11.2-10.9-17.5 19.6 6.5 6.9-19.5 7.1 19.4 19.5-6.7-10.7 17.6zm-3.7-117.2 2.7-13-9.8-9 13.2-1.5 5.5-12.1 5.5 12.1 13.2 1.5-9.8 9 2.7 13-11.6-6.6zm-104.1-60-20.3 2.2 1.8 20.3-14.4-14.5-14.8 14.1 2.4-20.3-20.2-2.7 17.3-10.8-10.5-17.5 19.3 6.8L387 178l6.7 19.3 19.4-6.3-10.9 17.3 17.1 11.2ZM623 186.7l-20.9 2.7 2.3 20.9-15.1-14.7-15 14.8 2.1-21-20.9-2.4 17.7-11.5-11.1-17.9 20 6.7 7-19.8 7.2 19.8 19.9-6.9-11 18zm-96.1-83.5-20.7 2.3 1.9 20.8-14.7-14.8-15.1 14.4 2.4-20.7-20.7-2.8 17.7-11L467 73.5l19.7 6.9 7.3-19.5 6.8 19.7 19.8-6.5-11.1 17.6zM234 385.7l-45.8 5.4 4.6 45.9-32.8-32.4-33 32.2 4.9-45.9-45.8-5.8 38.9-24.8-24-39.4 43.6 15 15.8-43.4 15.5 43.5 43.7-14.7-24.3 39.2 38.8 25.1Z"/>`,CA:`<path fill="#fff" d="M150.1 0h339.7v480H150z"/>
  <path fill="#d52b1e" d="M-19.7 0h169.8v480H-19.7zm509.5 0h169.8v480H489.9zM201 232l-13.3 4.4 61.4 54c4.7 13.7-1.6 17.8-5.6 25l66.6-8.4-1.6 67 13.9-.3-3.1-66.6 66.7 8c-4.1-8.7-7.8-13.3-4-27.2l61.3-51-10.7-4c-8.8-6.8 3.8-32.6 5.6-48.9 0 0-35.7 12.3-38 5.8l-9.2-17.5-32.6 35.8c-3.5.9-5-.5-5.9-3.5l15-74.8-23.8 13.4q-3.2 1.3-5.2-2.2l-23-46-23.6 47.8q-2.8 2.5-5 .7L264 130.8l13.7 74.1c-1.1 3-3.7 3.8-6.7 2.2l-31.2-35.3c-4 6.5-6.8 17.1-12.2 19.5s-23.5-4.5-35.6-7c4.2 14.8 17 39.6 9 47.7"/>`,IN:`<path fill="#f93" d="M0 0h640v160H0z"/>
  <path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#128807" d="M0 320h640v160H0z"/>
  <g transform="matrix(3.2 0 0 3.2 320 240)">
    <circle r="20" fill="#008"/>
    <circle r="17.5" fill="#fff"/>
    <circle r="3.5" fill="#008"/>
    <g id="in-d">
      <g id="in-c">
        <g id="in-b">
          <g id="in-a" fill="#008">
            <circle r=".9" transform="rotate(7.5 -8.8 133.5)"/>
            <path d="M0 17.5.6 7 0 2l-.6 5z"/>
          </g>
          <use xlink:href="#in-a" width="100%" height="100%" transform="rotate(15)"/>
        </g>
        <use xlink:href="#in-b" width="100%" height="100%" transform="rotate(30)"/>
      </g>
      <use xlink:href="#in-c" width="100%" height="100%" transform="rotate(60)"/>
    </g>
    <use xlink:href="#in-d" width="100%" height="100%" transform="rotate(120)"/>
    <use xlink:href="#in-d" width="100%" height="100%" transform="rotate(-120)"/>
  </g>`,DE:`<path fill="#fc0" d="M0 320h640v160H0z"/>
  <path fill="#000001" d="M0 0h640v160H0z"/>
  <path fill="red" d="M0 160h640v160H0z"/>`,FR:`<path fill="#000091" d="M0 0h213.3v480H0z"/>
  <path fill="#fff" d="M213.3 0h213.4v480H213.3z"/>
  <path fill="#e1000f" d="M426.7 0H640v480H426.7z"/>`,JP:`<defs>
    <clipPath id="jp-a">
      <path fill-opacity=".7" d="M-88 32h640v480H-88z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#jp-a)" transform="translate(88 -32)">
    <path fill="#fff" d="M-128 32h720v480h-720z"/>
    <circle cx="523.1" cy="344.1" r="194.9" fill="#bc002d" transform="translate(-168.4 8.6)scale(.76554)"/>
  </g>`,BR:`<g stroke-width="1pt">
    <path fill="#229e45" fill-rule="evenodd" d="M0 0h640v480H0z"/>
    <path fill="#f8e509" fill-rule="evenodd" d="m321.4 436 301.5-195.7L319.6 44 17.1 240.7z"/>
    <path fill="#2b49a3" fill-rule="evenodd" d="M452.8 240c0 70.3-57.1 127.3-127.6 127.3A127.4 127.4 0 1 1 452.8 240"/>
    <path fill="#ffffef" fill-rule="evenodd" d="m283.3 316.3-4-2.3-4 2 .9-4.5-3.2-3.4 4.5-.5 2.2-4 1.9 4.2 4.4.8-3.3 3m86 26.3-3.9-2.3-4 2 .8-4.5-3.1-3.3 4.5-.5 2.1-4.1 2 4.2 4.4.8-3.4 3.1m-36.2-30-3.4-2-3.5 1.8.8-3.9-2.8-2.9 4-.4 1.8-3.6 1.6 3.7 3.9.7-3 2.7m87-8.5-3.4-2-3.5 1.8.8-3.9-2.7-2.8 3.9-.4 1.8-3.5 1.6 3.6 3.8.7-2.9 2.6m-87.3-22-4-2.2-4 2 .8-4.6-3.1-3.3 4.5-.5 2.1-4.1 2 4.2 4.4.8-3.4 3.2m-104.6-35-4-2.2-4 2 1-4.6-3.3-3.3 4.6-.5 2-4.1 2 4.2 4.4.8-3.3 3.1m13.3 57.2-4-2.3-4 2 .9-4.5-3.2-3.3 4.5-.6 2.1-4 2 4.2 4.4.8-3.3 3.1m132-67.3-3.6-2-3.6 1.8.8-4-2.8-3 4-.5 1.9-3.6 1.7 3.8 4 .7-3 2.7m-6.7 38.3-2.7-1.6-2.9 1.4.6-3.2-2.2-2.3 3.2-.4 1.5-2.8 1.3 3 3 .5-2.2 2.2m-142.2 50.4-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2M419 299.8l-2.2-1.1-2.2 1 .5-2.3-1.7-1.6 2.4-.3 1.2-2 1 2 2.5.5-1.9 1.5"/>
    <path fill="#ffffef" fill-rule="evenodd" d="m219.3 287.6-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2"/>
    <path fill="#ffffef" fill-rule="evenodd" d="m219.3 287.6-2.7-1.5-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m42.3 3-2.6-1.4-2.7 1.3.6-3-2.1-2.2 3-.4 1.4-2.7 1.3 2.8 3 .5-2.3 2.1m-4.8 17-2.6-1.5-2.7 1.4.6-3-2.1-2.3 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m87.4-22.2-2.6-1.6-2.8 1.4.6-3-2-2.3 3-.3 1.4-2.7 1.2 2.8 3 .5-2.2 2.1m-25.1 3-2.7-1.5-2.7 1.4.6-3-2-2.3 3-.3 1.4-2.8 1.2 2.9 3 .5-2.2 2.1m-68.8-5.8-1.7-1-1.7.8.4-1.9-1.3-1.4 1.9-.2.8-1.7.8 1.8 1.9.3-1.4 1.3m167.8 45.4-2.6-1.5-2.7 1.4.6-3-2.1-2.3 3-.4 1.4-2.7 1.3 2.8 3 .6-2.3 2m-20.8 6-2.2-1.4-2.3 1.2.5-2.6-1.7-1.8 2.5-.3 1.2-2.3 1 2.4 2.5.4-1.9 1.8m10.4 2.3-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.3-.3 1.1-2 1 2 2.3.5-1.7 1.6m29.1-22.8-2-1-2 1 .5-2.3-1.6-1.7 2.3-.3 1-2 1 2.1 2.1.4-1.6 1.6m-38.8 41.8-2.5-1.4-2.7 1.2.6-2.8-2-2 3-.3 1.3-2.5 1.2 2.6 3 .5-2.3 1.9m.6 14.2-2.4-1.4-2.4 1.3.6-2.8-1.9-2 2.7-.4 1.2-2.5 1.1 2.6 2.7.5-2 2m-19-23.1-1.9-1.2-2 1 .4-2.2-1.5-1.7 2.2-.2 1-2 1 2 2.2.4-1.6 1.6m-17.8 2.3-2-1.2-2 1 .5-2.2-1.6-1.7 2.3-.2 1-2 1 2 2.1.4-1.6 1.6m-30.4-24.6-2-1.1-2 1 .5-2.3-1.6-1.6 2.2-.3 1-2 1 2 2.2.5-1.6 1.5m3.7 57-1.6-.9-1.8.9.4-2-1.3-1.4 1.9-.2.9-1.7.8 1.8 1.9.3-1.4 1.3m-46.2-86.6-4-2.3-4 2 .9-4.5-3.2-3.3 4.5-.6 2.2-4 1.9 4.2 4.4.8-3.3 3.1"/>
    <path fill="#fff" fill-rule="evenodd" d="M444.4 285.8a125 125 0 0 0 5.8-19.8c-67.8-59.5-143.3-90-238.7-83.7a125 125 0 0 0-8.5 20.9c113-10.8 196 39.2 241.4 82.6"/>
    <path fill="#309e3a" d="m414 252.4 2.3 1.3a3 3 0 0 0-.3 2.2 3 3 0 0 0 1.4 1.7q1 .8 2 .7.9 0 1.3-.7l.2-.9-.5-1-1.5-1.8a8 8 0 0 1-1.8-3 4 4 0 0 1 2-4.4 4 4 0 0 1 2.3-.2 7 7 0 0 1 2.6 1.2q2.1 1.5 2.6 3.2a4 4 0 0 1-.6 3.3l-2.4-1.5q.5-1 .2-1.7-.2-.8-1.2-1.4a3 3 0 0 0-1.8-.7 1 1 0 0 0-.9.5q-.3.4-.1 1 .2.8 1.6 2.2t2 2.5a4 4 0 0 1-.3 4.2 4 4 0 0 1-1.9 1.5 4 4 0 0 1-2.4.3q-1.3-.3-2.8-1.3-2.2-1.5-2.7-3.3a5 5 0 0 1 .6-4zm-11.6-7.6 2.5 1.3a3 3 0 0 0-.2 2.2 3 3 0 0 0 1.4 1.6q1.1.8 2 .6.9 0 1.3-.8l.2-.8q0-.5-.5-1l-1.6-1.8q-1.7-1.6-2-2.8a4 4 0 0 1 .4-3.1 4 4 0 0 1 1.6-1.4 4 4 0 0 1 2.2-.3 7 7 0 0 1 2.6 1q2.3 1.5 2.7 3.1a4 4 0 0 1-.4 3.4l-2.5-1.4q.5-1 .2-1.7-.4-1-1.3-1.4a3 3 0 0 0-1.9-.6 1 1 0 0 0-.8.5q-.3.4-.1 1 .3.8 1.7 2.2 1.5 1.5 2 2.4a4 4 0 0 1 0 4.2 4 4 0 0 1-1.8 1.6 4 4 0 0 1-2.4.3 8 8 0 0 1-2.9-1.1 6 6 0 0 1-2.8-3.2 5 5 0 0 1 .4-4m-14.2-3.8 7.3-12 8.8 5.5-1.2 2-6.4-4-1.6 2.7 6 3.7-1.3 2-6-3.7-2 3.3 6.7 4-1.2 2zm-20.7-17 1.1-2 5.4 2.7-2.5 5q-1.2.3-3 .2a9 9 0 0 1-3.3-1 8 8 0 0 1-3-2.6 6 6 0 0 1-1-3.5 9 9 0 0 1 1-3.7 8 8 0 0 1 2.6-3 6 6 0 0 1 3.6-1.1q1.4 0 3.2 1 2.4 1.1 3.1 2.8a5 5 0 0 1 .3 3.5l-2.7-.8a3 3 0 0 0-.2-2q-.4-.9-1.6-1.4a4 4 0 0 0-3.1-.3q-1.5.5-2.6 2.6t-.7 3.8a4 4 0 0 0 2 2.4q.8.5 1.7.5h1.8l.8-1.6zm-90.2-22.3 2-14 4.2.7 1.1 9.8 3.9-9 4.2.6-2 13.8-2.7-.4 1.7-10.9-4.4 10.5-2.7-.4-1.1-11.3-1.6 11zm-14.1-1.7 1.3-14 10.3 1-.2 2.4-7.5-.7-.3 3 7 .7-.3 2.4-7-.7-.3 3.8 7.8.7-.2 2.4z"/>
    <g stroke-opacity=".5">
      <path fill="#309e3a" d="M216.5 191.3q0-2.2.7-3.6a7 7 0 0 1 1.4-1.9 5 5 0 0 1 1.8-1.2q1.5-.5 3-.5 3.1.1 5 2a7 7 0 0 1 1.6 5.5q0 3.3-2 5.3a7 7 0 0 1-5 1.7 7 7 0 0 1-4.8-2 7 7 0 0 1-1.7-5.3"/>
      <path fill="#f7ffff" d="M219.4 191.3q0 2.3 1 3.6t2.8 1.3a4 4 0 0 0 2.8-1.1q1-1.2 1.1-3.7.1-2.4-1-3.6a4 4 0 0 0-2.7-1.3 4 4 0 0 0-2.8 1.2q-1.1 1.2-1.2 3.6"/>
    </g>
    <g stroke-opacity=".5">
      <path fill="#309e3a" d="m233 198.5.2-14h6q2.2 0 3.2.5 1 .3 1.6 1.3c.6 1 .6 1.4.6 2.3a4 4 0 0 1-1 2.6 5 5 0 0 1-2.7 1.2l1.5 1.2q.6.6 1.5 2.3l1.7 2.8h-3.4l-2-3.2-1.4-2-.9-.6-1.4-.2h-.6v5.8z"/>
      <path fill="#fff" d="M236 190.5h2q2.1 0 2.6-.2.5-.1.8-.5.4-.6.3-1 0-.9-.4-1.2-.3-.4-1-.6h-2l-2.3-.1z"/>
    </g>
    <g stroke-opacity=".5">
      <path fill="#309e3a" d="m249 185.2 5.2.3q1.7 0 2.6.3a5 5 0 0 1 2 1.4 6 6 0 0 1 1.2 2.4q.4 1.4.3 3.3a9 9 0 0 1-.5 3q-.6 1.5-1.7 2.4a5 5 0 0 1-2 1q-1 .3-2.5.2l-5.3-.3z"/>
      <path fill="#fff" d="m251.7 187.7-.5 9.3h3.8q.8 0 1.2-.5.5-.4.8-1.3t.4-2.6l-.1-2.5a3 3 0 0 0-.8-1.4l-1.2-.7-2.3-.3z"/>
    </g>
    <g stroke-opacity=".5">
      <path fill="#309e3a" d="m317.6 210.2 3.3-13.6 4.4 1 3.2 1q1.1.6 1.6 1.9t.2 2.8q-.3 1.2-1 2a4 4 0 0 1-3 1.4q-1 0-3-.5l-1.7-.5-1.2 5.2z"/>
      <path fill="#fff" d="m323 199.6-.8 3.8 1.5.4q1.6.4 2.2.3a2 2 0 0 0 1.6-1.5q0-.7-.2-1.3a2 2 0 0 0-1-.9l-1.9-.5-1.3-.3z"/>
    </g>
    <g stroke-opacity=".5">
      <path fill="#309e3a" d="m330.6 214.1 4.7-13.2 5.5 2q2.2.8 3 1.4.8.7 1 1.8c.2 1.1.2 1.5 0 2.3q-.6 1.5-1.8 2.2-1.2.6-3 .3.6.7 1 1.6l.8 2.7.6 3.1-3.1-1.1-1-3.6-.7-2.4-.6-.8q-.3-.4-1.3-.7l-.5-.2-2 5.6z"/>
      <path fill="#fff" d="m336 207.4 1.9.7q2 .7 2.5.7t.9-.3q.5-.3.6-.9.3-.6 0-1.2l-.8-.9-2-.7-2-.7-1.2 3.3z"/>
    </g>
    <g stroke-opacity=".5">
      <path fill="#309e3a" d="M347 213.6a9 9 0 0 1 1.7-3.2l1.8-1.5 2-.7q1.5-.1 3.1.4a7 7 0 0 1 4.2 3.3q1.2 2.4.2 5.7a7 7 0 0 1-3.4 4.5q-2.3 1.3-5.2.4a7 7 0 0 1-4.2-3.3 7 7 0 0 1-.2-5.6"/>
      <path fill="#fff" d="M349.8 214.4q-.7 2.3 0 3.8c.7 1.5 1.2 1.6 2.3 2q1.5.5 3-.4 1.4-.8 2.1-3.2.8-2.2 0-3.7a4 4 0 0 0-2.2-2 4 4 0 0 0-3 .3q-1.5.8-2.2 3.2"/>
    </g>
    <g stroke-opacity=".5">
      <path fill="#309e3a" d="m374.3 233.1 6.4-12.4 5.3 2.7a10 10 0 0 1 2.7 1.9q.8.7.8 1.9c0 1.2 0 1.5-.4 2.2a4 4 0 0 1-2 2q-1.5.4-3.1-.2.6 1 .8 1.7.3.9.4 2.8l.2 3.2-3-1.5-.4-3.7-.3-2.5-.5-1-1.2-.7-.5-.3-2.7 5.2z"/>
      <path fill="#fff" d="m380.5 227.2 1.9 1q1.8 1 2.3 1t1-.2q.4-.2.7-.8t.2-1.2l-.7-1-1.8-1-2-1z"/>
    </g>
    <g stroke-opacity=".5">
      <path fill="#309e3a" d="M426.1 258.7a9 9 0 0 1 2.5-2.6 7 7 0 0 1 2.2-.9 6 6 0 0 1 2.2 0q1.5.3 2.8 1.2a7 7 0 0 1 3 4.4q.4 2.6-1.4 5.5a7 7 0 0 1-4.5 3.3 7 7 0 0 1-5.2-1.1 7 7 0 0 1-3-4.4q-.4-2.7 1.4-5.4"/>
      <path fill="#fff" d="M428.6 260.3q-1.4 2-1.1 3.6a4 4 0 0 0 1.6 2.5q1.5 1 3 .6t2.9-2.4q1.4-2.1 1.1-3.6t-1.6-2.6c-1.4-1.1-2-.8-3-.5q-1.5.3-3 2.4z"/>
    </g>
    <path fill="#309e3a" d="m301.8 204.5 2.3-9.8 7.2 1.7-.3 1.6-5.3-1.2-.5 2.2 4.9 1.1-.4 1.7-4.9-1.2-.6 2.7 5.5 1.3-.4 1.6z"/>
  </g>`,SG:`<defs>
    <clipPath id="sg-a">
      <path fill-opacity=".7" d="M0 0h640v480H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#sg-a)">
    <path fill="#fff" d="M-20 0h720v480H-20z"/>
    <path fill="#df0000" d="M-20 0h720v240H-20z"/>
    <path fill="#fff" d="M146 40.2a84.4 84.4 0 0 0 .8 165.2 86 86 0 0 1-106.6-59 86 86 0 0 1 59-106c16-4.6 30.8-4.7 46.9-.2z"/>
    <path fill="#fff" d="m133 110 4.9 15-13-9.2-12.8 9.4 4.7-15.2-12.8-9.3 15.9-.2 5-15 5 15h15.8zm17.5 52 5 15.1-13-9.2-12.9 9.3 4.8-15.1-12.8-9.4 15.9-.1 4.9-15.1 5 15h16zm58.5-.4 4.9 15.2-13-9.3-12.8 9.3 4.7-15.1-12.8-9.3 15.9-.2 5-15 5 15h15.8zm17.4-51.6 4.9 15.1-13-9.2-12.8 9.3 4.8-15.1-12.9-9.4 16-.1 4.8-15.1 5 15h16zm-46.3-34.3 5 15.2-13-9.3-12.9 9.4 4.8-15.2-12.8-9.4 15.8-.1 5-15.1 5 15h16z"/>
  </g>`,CN:`<defs>
    <path id="cn-a" fill="#ff0" d="M-.6.8 0-1 .6.8-1-.3h2z"/>
  </defs>
  <path fill="#ee1c25" d="M0 0h640v480H0z"/>
  <use xlink:href="#cn-a" width="30" height="20" transform="matrix(71.9991 0 0 72 120 120)"/>
  <use xlink:href="#cn-a" width="30" height="20" transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"/>
  <use xlink:href="#cn-a" width="30" height="20" transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"/>
  <use xlink:href="#cn-a" width="30" height="20" transform="matrix(6.5991 -23.0749 23.0746 6.59919 288 168)"/>
  <use xlink:href="#cn-a" width="30" height="20" transform="matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"/>`,RU:`<path fill="#fff" d="M0 0h640v160H0z"/>
  <path fill="#0039a6" d="M0 160h640v160H0z"/>
  <path fill="#d52b1e" d="M0 320h640v160H0z"/>`,IR:`<defs>
    <clipPath id="ir-a">
      <path fill-opacity=".7" d="M-85.3 0h682.7v512H-85.3z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#ir-a)" transform="translate(80)scale(.9375)">
    <path fill="#fff" d="M-192 0h896v512h-896z"/>
    <path fill="#da0000" d="M-192 343.8h896V512h-896z"/>
    <g fill="#fff" stroke-width="1pt">
      <path d="M-21.6 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"/>
      <path d="M52.4 367.7v3.4H33.8v-3.4zm-34.6-7.9H21v11.3h-3.3z"/>
      <path d="M49.6 351H53v20h-3.4zm-8.4 0h3.3v20h-3.3zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"/>
      <path d="M17.8 359.9H21V371h-3.3z"/>
      <path d="M17.8 359.9H21V371h-3.3z"/>
      <path d="M17.8 359.9H21V371h-3.3zm-39.3 0h3.3V371h-3.3zm28.8 0h3.4V371H7.3zm-14.3 0h3.4V371H-7z"/>
      <path d="M9.6 367.7v3.4H-5.5v-3.4zm1-8.7v3.4H1V359z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M-102.2 351h49v3.3h-49zm7.3 16.8h3.4v3.3H-95zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"/>
      <path d="M-28.2 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z"/>
      <path d="M-31 351h3.4v20H-31zm-8.4 0h3.3v20h-3.3zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"/>
      <path d="M-62.8 359.9h3.3V371h-3.3z"/>
      <path d="M-62.8 359.9h3.3V371h-3.3z"/>
      <path d="M-62.8 359.9h3.3V371h-3.3zm-39.3 0h3.3V371h-3.3zm28.8 0h3.3V371h-3.3zm-14.3 0h3.4V371h-3.4z"/>
      <path d="M-71 367.7v3.4h-15v-3.4zm1-8.7v3.4h-9.6V359z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M58.3 351h49v3.3h-49zm7.3 16.8H69v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.3-16.8h3.4v20h-3.4z"/>
      <path d="M132.3 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"/>
      <path d="M129.5 351h3.4v20h-3.4zm-8.4 0h3.4v20H121zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"/>
      <path d="M97.7 359.9h3.4V371h-3.4z"/>
      <path d="M97.7 359.9h3.4V371h-3.4z"/>
      <path d="M97.7 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"/>
      <path d="M89.6 367.7v3.4H74.4v-3.4zm1-8.7v3.4H81V359z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M622.7 351h49v3.3h-49zm7.3 16.8h3.4v3.3H630zm41.9 0v3.3H662v-3.4zm5.3-16.8h3.3v20h-3.4z"/>
      <path d="M696.7 367.7v3.4H678v-3.4zm-34.6-7.9h3.4v11.3H662z"/>
      <path d="M694 351h3.3v20h-3.4zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"/>
      <path d="M662 359.9h3.5V371H662z"/>
      <path d="M662 359.9h3.5V371H662z"/>
      <path d="M662 359.9h3.5V371H662zm-39.2 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"/>
      <path d="M654 367.7v3.4h-15.2v-3.4zm1-8.7v3.4h-9.6V359z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M138.7 351h49.1v3.3h-49zm7.4 16.8h3.3v3.3h-3.3zm41.8 0v3.3h-9.8v-3.4zm5.3-16.8h3.4v20h-3.4z"/>
      <path d="M212.8 367.7v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z"/>
      <path d="M210 351h3.4v20H210zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-17.9V359zm39.3 0v3.4h-17.9V359z"/>
      <path d="M178.1 359.9h3.4V371h-3.4z"/>
      <path d="M178.1 359.9h3.4V371h-3.4z"/>
      <path d="M178.1 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.2 0h3.3V371h-3.3z"/>
      <path d="M170 367.7v3.4h-15.1v-3.4zm1-8.7v3.4h-9.6V359z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M219.5 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zM274 351h3.3v20H274z"/>
      <path d="M293.5 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"/>
      <path d="M290.7 351h3.4v20h-3.4zm-8.4 0h3.4v20h-3.4zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"/>
      <path d="M258.9 359.9h3.4V371h-3.4z"/>
      <path d="M258.9 359.9h3.4V371h-3.4z"/>
      <path d="M258.9 359.9h3.4V371h-3.4zm-39.3 0h3.3V371h-3.3zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371H234z"/>
      <path d="M250.8 367.7v3.4h-15.2v-3.4zm1-8.7v3.4H242V359z"/>
    </g>
    <path fill="#239f40" d="M-192 0h896v168.2h-896z"/>
    <g fill="#fff" stroke-width="1pt">
      <path d="M300.7 351h49v3.3h-49zm7.3 16.8h3.4v3.3H308zm41.9 0v3.3H340v-3.4zm5.3-16.8h3.3v20h-3.3z"/>
      <path d="M374.7 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3H340z"/>
      <path d="M372 351h3.3v20H372zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"/>
      <path d="M340 359.9h3.5V371H340z"/>
      <path d="M340 359.9h3.5V371H340z"/>
      <path d="M340 359.9h3.5V371H340zm-39.2 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"/>
      <path d="M332 367.7v3.4h-15.2v-3.4zm1-8.7v3.4h-9.6V359z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M381.4 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm42 0v3.3h-9.9v-3.4zm5.2-16.8h3.4v20h-3.4z"/>
      <path d="M455.4 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"/>
      <path d="M452.7 351h3.3v20h-3.3zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-17.9V359zm39.3 0v3.4h-17.9V359z"/>
      <path d="M420.8 359.9h3.4V371h-3.4z"/>
      <path d="M420.8 359.9h3.4V371h-3.4z"/>
      <path d="M420.8 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.3z"/>
      <path d="M412.7 367.7v3.4h-15.1v-3.4zm1-8.7v3.4H404V359z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M462.2 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"/>
      <path d="M536.2 367.7v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z"/>
      <path d="M533.4 351h3.4v20h-3.4zm-8.4 0h3.3v20H525zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"/>
      <path d="M501.6 359.9h3.3V371h-3.3z"/>
      <path d="M501.6 359.9h3.3V371h-3.3z"/>
      <path d="M501.6 359.9h3.3V371h-3.3zm-39.4 0h3.4V371h-3.4zm28.9 0h3.3V371h-3.3zm-14.3 0h3.4V371h-3.4z"/>
      <path d="M493.4 367.7v3.4h-15.1v-3.4zm1-8.7v3.4h-9.6V359z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M543.4 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm41.9 0v3.3h-9.8v-3.4zm5.2-16.8h3.4v20h-3.4z"/>
      <path d="M617.4 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z"/>
      <path d="M614.6 351h3.4v20h-3.4zm-8.4 0h3.3v20h-3.3zm-44.8 8v3.4h-18V359zm39.3 0v3.4h-18V359z"/>
      <path d="M582.8 359.9h3.3V371h-3.3z"/>
      <path d="M582.8 359.9h3.3V371h-3.3z"/>
      <path d="M582.8 359.9h3.3V371h-3.3zm-39.3 0h3.3V371h-3.3zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371H558z"/>
      <path d="M574.6 367.7v3.4h-15.1v-3.4zm1-8.7v3.4H566V359z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M-183.8 351h49v3.3h-49zm7.3 16.8h3.4v3.3h-3.4zm42 0v3.3h-9.9v-3.4zm5.2-16.8h3.4v20h-3.4z"/>
      <path d="M-109.8 367.7v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"/>
      <path d="M-112.5 351h3.3v20h-3.3zm-8.5 0h3.4v20h-3.4zm-44.8 8v3.4h-17.9V359zm39.3 0v3.4h-17.9V359z"/>
      <path d="M-144.4 359.9h3.4V371h-3.4z"/>
      <path d="M-144.4 359.9h3.4V371h-3.4z"/>
      <path d="M-144.4 359.9h3.4V371h-3.4zm-39.3 0h3.4V371h-3.4zm28.8 0h3.4V371h-3.4zm-14.3 0h3.4V371h-3.4z"/>
      <path d="M-152.5 367.7v3.4h-15.2v-3.4zm1-8.7v3.4h-9.6V359z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M-21.6 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"/>
      <path d="M52.4 160.2v3.4H33.8v-3.4zm-34.6-7.9H21v11.3h-3.3z"/>
      <path d="M49.6 143.4H53v20.2h-3.4zm-8.4 0h3.3v20.2h-3.3zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"/>
      <path d="M17.8 152.3H21v11.3h-3.3z"/>
      <path d="M17.8 152.3H21v11.3h-3.3z"/>
      <path d="M17.8 152.3H21v11.3h-3.3zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.4v11.3H7.3zm-14.3 0h3.4v11.3H-7z"/>
      <path d="M9.6 160.2v3.4H-5.5v-3.4zm1-8.7v3.3H1v-3.3z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M-102.2 143.4h49v3.4h-49zm7.3 17h3.4v3.2H-95zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"/>
      <path d="M-28.2 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z"/>
      <path d="M-31 143.4h3.4v20.2H-31zm-8.4 0h3.3v20.2h-3.3zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"/>
      <path d="M-62.8 152.3h3.3v11.3h-3.3z"/>
      <path d="M-62.8 152.3h3.3v11.3h-3.3z"/>
      <path d="M-62.8 152.3h3.3v11.3h-3.3zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.3v11.3h-3.3zm-14.3 0h3.4v11.3h-3.4z"/>
      <path d="M-71 160.2v3.4h-15v-3.4zm1-8.7v3.3h-9.6v-3.3z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M58.3 143.4h49v3.4h-49zm7.3 17H69v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.3-16.8h3.4v20.2h-3.4z"/>
      <path d="M132.3 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"/>
      <path d="M129.5 143.4h3.4v20.2h-3.4zm-8.4 0h3.4v20.2H121zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"/>
      <path d="M97.7 152.3h3.4v11.3h-3.4z"/>
      <path d="M97.7 152.3h3.4v11.3h-3.4z"/>
      <path d="M97.7 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"/>
      <path d="M89.6 160.2v3.4H74.4v-3.4zm1-8.7v3.3H81v-3.3z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M622.7 143.4h49v3.4h-49zm7.3 17h3.4v3.2H630zm41.9-.2v3.4H662v-3.4zm5.3-16.8h3.3v20.2h-3.4z"/>
      <path d="M696.7 160.2v3.4H678v-3.4zm-34.6-7.9h3.4v11.3H662z"/>
      <path d="M694 143.4h3.3v20.2h-3.4zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"/>
      <path d="M662 152.3h3.5v11.3H662z"/>
      <path d="M662 152.3h3.5v11.3H662z"/>
      <path d="M662 152.3h3.5v11.3H662zm-39.2 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"/>
      <path d="M654 160.2v3.4h-15.2v-3.4zm1-8.7v3.3h-9.6v-3.3z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M138.7 143.4h49.1v3.4h-49zm7.4 17h3.3v3.2h-3.3zm41.8-.2v3.4h-9.8v-3.4zm5.3-16.8h3.4v20.2h-3.4z"/>
      <path d="M212.8 160.2v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z"/>
      <path d="M210 143.4h3.4v20.2H210zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-17.9v-3.3zm39.3 0v3.4h-17.9v-3.3z"/>
      <path d="M178.1 152.3h3.4v11.3h-3.4z"/>
      <path d="M178.1 152.3h3.4v11.3h-3.4z"/>
      <path d="M178.1 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.2 0h3.3v11.3h-3.3z"/>
      <path d="M170 160.2v3.4h-15.1v-3.4zm1-8.7v3.3h-9.6v-3.3z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M219.5 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.3-16.8h3.3v20.2H274z"/>
      <path d="M293.5 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"/>
      <path d="M290.7 143.4h3.4v20.2h-3.4zm-8.4 0h3.4v20.2h-3.4zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"/>
      <path d="M258.9 152.3h3.4v11.3h-3.4z"/>
      <path d="M258.9 152.3h3.4v11.3h-3.4z"/>
      <path d="M258.9 152.3h3.4v11.3h-3.4zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3H234z"/>
      <path d="M250.8 160.2v3.4h-15.2v-3.4zm1-8.7v3.3H242v-3.3z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M300.7 143.4h49v3.4h-49zm7.3 17h3.4v3.2H308zm41.9-.2v3.4H340v-3.4zm5.3-16.8h3.3v20.2h-3.3z"/>
      <path d="M374.7 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3H340z"/>
      <path d="M372 143.4h3.3v20.2H372zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"/>
      <path d="M340 152.3h3.5v11.3H340z"/>
      <path d="M340 152.3h3.5v11.3H340z"/>
      <path d="M340 152.3h3.5v11.3H340zm-39.2 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"/>
      <path d="M332 160.2v3.4h-15.2v-3.4zm1-8.7v3.3h-9.6v-3.3z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M381.4 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm42-.2v3.4h-9.9v-3.4zm5.2-16.8h3.4v20.2h-3.4z"/>
      <path d="M455.4 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"/>
      <path d="M452.7 143.4h3.3v20.2h-3.3zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-17.9v-3.3zm39.3 0v3.4h-17.9v-3.3z"/>
      <path d="M420.8 152.3h3.4v11.3h-3.4z"/>
      <path d="M420.8 152.3h3.4v11.3h-3.4z"/>
      <path d="M420.8 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.3z"/>
      <path d="M412.7 160.2v3.4h-15.1v-3.4zm1-8.7v3.3H404v-3.3z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M462.2 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"/>
      <path d="M536.2 160.2v3.4h-18.6v-3.4zm-34.7-7.9h3.4v11.3h-3.4z"/>
      <path d="M533.4 143.4h3.4v20.2h-3.4zm-8.4 0h3.3v20.2H525zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"/>
      <path d="M501.6 152.3h3.3v11.3h-3.3z"/>
      <path d="M501.6 152.3h3.3v11.3h-3.3z"/>
      <path d="M501.6 152.3h3.3v11.3h-3.3zm-39.4 0h3.4v11.3h-3.4zm28.9 0h3.3v11.3h-3.3zm-14.3 0h3.4v11.3h-3.4z"/>
      <path d="M493.4 160.2v3.4h-15.1v-3.4zm1-8.7v3.3h-9.6v-3.3z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M543.4 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm41.9-.2v3.4h-9.8v-3.4zm5.2-16.8h3.4v20.2h-3.4z"/>
      <path d="M617.4 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.3v11.3h-3.3z"/>
      <path d="M614.6 143.4h3.4v20.2h-3.4zm-8.4 0h3.3v20.2h-3.3zm-44.8 8v3.4h-18v-3.3zm39.3 0v3.4h-18v-3.3z"/>
      <path d="M582.8 152.3h3.3v11.3h-3.3z"/>
      <path d="M582.8 152.3h3.3v11.3h-3.3z"/>
      <path d="M582.8 152.3h3.3v11.3h-3.3zm-39.3 0h3.3v11.3h-3.3zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3H558z"/>
      <path d="M574.6 160.2v3.4h-15.1v-3.4zm1-8.7v3.3H566v-3.3z"/>
    </g>
    <g fill="#fff" stroke-width="1pt">
      <path d="M-183.8 143.4h49v3.4h-49zm7.3 17h3.4v3.2h-3.4zm42-.2v3.4h-9.9v-3.4zm5.2-16.8h3.4v20.2h-3.4z"/>
      <path d="M-109.8 160.2v3.4h-18.6v-3.4zm-34.6-7.9h3.4v11.3h-3.4z"/>
      <path d="M-112.5 143.4h3.3v20.2h-3.3zm-8.5 0h3.4v20.2h-3.4zm-44.8 8v3.4h-17.9v-3.3zm39.3 0v3.4h-17.9v-3.3z"/>
      <path d="M-144.4 152.3h3.4v11.3h-3.4z"/>
      <path d="M-144.4 152.3h3.4v11.3h-3.4z"/>
      <path d="M-144.4 152.3h3.4v11.3h-3.4zm-39.3 0h3.4v11.3h-3.4zm28.8 0h3.4v11.3h-3.4zm-14.3 0h3.4v11.3h-3.4z"/>
      <path d="M-152.5 160.2v3.4h-15.2v-3.4zm1-8.7v3.3h-9.6v-3.3z"/>
    </g>
    <path fill="#d90000" d="M-68.8 339.5h6V350h-6zm160.5 0h6V350h-6zm-283.7 0h6V350h-6zm81.5 0h6V350h-6zm80.9 0h6V350h-6zm40 0h6V350h-6zm40.9 0h6V350h-6zm80.4 0h6V350h-6zm203 0h6.1V350h-6zm-162.1 0h6V350h-6zm40 0h6V350h-6zm40.5 0h6V350h-6zm40.4 0h6V350h-6zm323.2 0h6V350h-6zm-242.7 0h6V350h-6zm40.8 0h6V350h-6zm41.3 0h6V350h-6zm38.8 0h6V350h-6zm41.3 0h6V350h-6zm40.4 0h6V350h-6zm119.7 0h6V350h-6zm-38.8 0h6V350h-6zm-808.9 0h6V350h-6z"/>
    <path fill="#239e3f" d="M-68.8 162.6h6v10.5h-6zm160.5 0h6v10.5h-6zm-283.7 0h6v10.5h-6zm81.5 0h6v10.5h-6zm80.9 0h6v10.5h-6zm40 0h6v10.5h-6zm40.9 0h6v10.5h-6zm80.4 0h6v10.5h-6zm203 0h6.1v10.5h-6zm-162.1 0h6v10.5h-6zm40 0h6v10.5h-6zm40.5 0h6v10.5h-6zm40.4 0h6v10.5h-6zm323.2 0h6v10.5h-6zm-242.7 0h6v10.5h-6zm40.8 0h6v10.5h-6zm41.3 0h6v10.5h-6zm38.8 0h6v10.5h-6zm41.3 0h6v10.5h-6zm40.4 0h6v10.5h-6zm119.7 0h6v10.5h-6zm-38.8 0h6v10.5h-6zm-808.9 0h6v10.5h-6z"/>
    <g fill="#da0000">
      <path d="M279.8 197.5c8.4 10.4 34.5 67.6-15.7 105.2-23.7 17.8-9 18.6-8.3 21.6 38-20.1 50.3-47.5 50-72-.2-24.4-13.2-46-26-54.8"/>
      <path d="M284.8 194.8a73.3 73.3 0 0 1 15.7 112.4c27.2-6 62-86.4-15.7-112.4m-57.6 0a73.3 73.3 0 0 0-15.6 112.4c-27.3-6-62-86.4 15.6-112.4"/>
      <path d="M232.2 197.5c-8.4 10.4-34.5 67.6 15.7 105.2 23.6 17.8 9 18.6 8.3 21.6-38-20.1-50.3-47.5-50-72 .2-24.4 13.2-46 26-54.8"/>
      <path d="M304.2 319.1c-14.9.2-33.6-2-47.5-9.3 2.3 4.5 4.2 7.3 6.5 11.7 13.2 1.3 31.5 2.8 41-2.4m-95 0c14.9.2 33.6-2 47.5-9.3-2.3 4.5-4.2 7.3-6.5 11.7-13.2 1.3-31.5 2.8-41-2.4m27.3-138.7c3 8 10.9 9.2 19.3 4.5 6.2 3.6 15.7 3.9 19-4.1 2.5 19.8-18.3 15-19 11.2-7.8 7.5-22.2 3.2-19.3-11.6"/>
      <path d="m256.4 331.6 7.8-9 1.1-120.1-9.3-8.2-9.3 7.8 1.9 121z"/>
    </g>
  </g>`,AT:`<path fill="#fff" d="M0 160h640v160H0z"/>
  <path fill="#c8102e" d="M0 0h640v160H0zm0 320h640v160H0z"/>`,CH:`<g fill-rule="evenodd" stroke-width="1pt">
    <path fill="red" d="M0 0h640v480H0z"/>
    <g fill="#fff">
      <path d="M170 195h300v90H170z"/>
      <path d="M275 90h90v300h-90z"/>
    </g>
  </g>`,NZ:`<defs>
    <g id="nz-b">
      <g id="nz-a">
        <path d="M0-.3v.5l1-.5z"/>
        <path d="M.2.3 0-.1l1-.2z"/>
      </g>
      <use xlink:href="#nz-a" transform="scale(-1 1)"/>
      <use xlink:href="#nz-a" transform="rotate(72 0 0)"/>
      <use xlink:href="#nz-a" transform="rotate(-72 0 0)"/>
      <use xlink:href="#nz-a" transform="scale(-1 1)rotate(72)"/>
    </g>
  </defs>
  <path fill="#00247d" fill-rule="evenodd" d="M0 0h640v480H0z"/>
  <g transform="translate(-111 36.1)scale(.66825)">
    <use xlink:href="#nz-b" width="100%" height="100%" fill="#fff" transform="translate(900 120)scale(45.4)"/>
    <use xlink:href="#nz-b" width="100%" height="100%" fill="#cc142b" transform="matrix(30 0 0 30 900 120)"/>
  </g>
  <g transform="rotate(82 525.2 114.6)scale(.66825)">
    <use xlink:href="#nz-b" width="100%" height="100%" fill="#fff" transform="rotate(-82 519 -457.7)scale(40.4)"/>
    <use xlink:href="#nz-b" width="100%" height="100%" fill="#cc142b" transform="rotate(-82 519 -457.7)scale(25)"/>
  </g>
  <g transform="rotate(82 525.2 114.6)scale(.66825)">
    <use xlink:href="#nz-b" width="100%" height="100%" fill="#fff" transform="rotate(-82 668.6 -327.7)scale(45.4)"/>
    <use xlink:href="#nz-b" width="100%" height="100%" fill="#cc142b" transform="rotate(-82 668.6 -327.7)scale(30)"/>
  </g>
  <g transform="translate(-111 36.1)scale(.66825)">
    <use xlink:href="#nz-b" width="100%" height="100%" fill="#fff" transform="translate(900 480)scale(50.4)"/>
    <use xlink:href="#nz-b" width="100%" height="100%" fill="#cc142b" transform="matrix(35 0 0 35 900 480)"/>
  </g>
  <path fill="#012169" d="M0 0h320v240H0z"/>
  <path fill="#fff" d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"/>
  <path fill="#c8102e" d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"/>
  <path fill="#fff" d="M120.5 0v240h80V0zM0 80v80h320V80z"/>
  <path fill="#c8102e" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"/>`};e.s(["Flag",0,function({code:e,size:i=20}){let h,l,n=(0,a.useId)().replace(/[^a-zA-Z0-9]/g,""),d=r[e];if(!d)return null;let s=(h=new Set,d.replace(/(?<![\w-])id="([^"]+)"/g,(e,t)=>(h.add(t),e)),l=d,h.forEach(e=>{let t=RegExp(`(["#])${e}(["')])`,"g");l=l.replace(t,`$1${e}-${n}$2`)}),l);return(0,t.jsx)("svg",{width:i,height:"number"==typeof i?3*i/4:i,viewBox:"0 0 640 480",style:{display:"block",flexShrink:0,borderRadius:2},"aria-label":e,role:"img",dangerouslySetInnerHTML:{__html:s}})}])},6661,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(30200);let i={poster:"600×900 (2:3 Portrait)",portrait:"600×900 (2:3 Portrait)",banner:"1920×240 (8:1 Wide)",backdrop:"1920×1080 (16:9 Landscape)",logo:"512×512 (1:1, PNG/WebP)",thumbnail:"400×400 (1:1 Square)"};e.s(["default",0,function({slot:e,label:h,currentUrl:l,uploading:n=!1,onUpload:d,onRemove:s}){let[o,c]=(0,a.useState)(l??null),[v,m]=(0,a.useState)(null),[p,f]=(0,a.useState)(!1),z=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!p&&!n){let e=requestAnimationFrame(()=>c(l??null));return()=>cancelAnimationFrame(e)}},[l,p,n]);let g=p||n,u=async e=>{let t=e.target.files?.[0];if(t){if(!["image/jpeg","image/png","image/webp"].includes(t.type))return void m("Only JPEG, PNG, and WebP images are accepted.");if(t.size>0xa00000)return void m("Image must be smaller than 10 MB.");m(null),f(!0);try{let e=new FileReader;e.onload=e=>c(e.target?.result),e.readAsDataURL(t),await d(t)}catch(e){m(e?.message??"Upload failed. Please try again."),c(l??null)}finally{f(!1),z.current&&(z.current.value="")}}},x=async()=>{if(o){f(!0),m(null);try{await s(),c(null)}catch(e){m(e?.message??"Failed to remove image.")}finally{f(!1)}}},b="poster"===e||"portrait"===e?220:"banner"===e?120:160;return(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{style:{fontSize:13,fontWeight:500,color:"var(--text-1)"},children:h}),(0,t.jsx)("span",{style:{marginLeft:8,fontSize:11,color:"var(--text-3)"},children:i[e]})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,t.jsxs)("button",{type:"button",onClick:()=>z.current?.click(),disabled:g,style:{display:"inline-flex",alignItems:"center",gap:5,borderRadius:8,border:"none",background:"var(--accent-dim)",color:"var(--accent)",padding:"5px 12px",fontSize:12,fontWeight:500,cursor:g?"not-allowed":"pointer",opacity:g?.5:1,transition:"background 0.15s"},children:[(0,t.jsx)(r.Icon,{name:"upload",size:13}),o?"Replace":"Upload"]}),o&&(0,t.jsxs)("button",{type:"button",onClick:x,disabled:g,style:{display:"inline-flex",alignItems:"center",gap:5,borderRadius:8,border:"none",background:"var(--danger-bg, #fef2f2)",color:"var(--danger, #dc2626)",padding:"5px 12px",fontSize:12,fontWeight:500,cursor:g?"not-allowed":"pointer",opacity:g?.5:1,transition:"background 0.15s"},children:[(0,t.jsx)(r.Icon,{name:"trash",size:13}),"Remove"]})]})]}),(0,t.jsx)("input",{ref:z,type:"file",accept:"image/jpeg,image/png,image/webp",onChange:u,style:{display:"none"}}),(0,t.jsxs)("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius)",border:o?"1.5px solid var(--border)":"1.5px dashed var(--border)",background:o?"var(--surface)":"var(--surface-2)",minHeight:b,overflow:"hidden",opacity:g?.6:1,pointerEvents:g?"none":"auto",transition:"border-color 0.15s, background 0.15s",cursor:o?"default":"pointer"},onClick:()=>!o&&!g&&z.current?.click(),children:[o?(0,t.jsx)("img",{src:o,alt:`${h} preview`,style:{maxHeight:b-4,width:"100%",objectFit:"contain",padding:2}}):(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"24px 0",color:"var(--text-3)"},children:[(0,t.jsx)(r.Icon,{name:"image",size:28}),(0,t.jsx)("span",{style:{fontSize:12},children:"Drop image here or click to browse"})]}),g&&(0,t.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius)",background:"rgba(255,255,255,0.4)"},children:(0,t.jsx)("div",{style:{width:20,height:20,borderRadius:"50%",border:"2px solid var(--accent)",borderTopColor:"transparent",animation:"spin 0.6s linear infinite"}})})]}),v&&(0,t.jsx)("p",{style:{fontSize:11,color:"var(--danger, #dc2626)",margin:0},children:v})]})}])},32098,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(74080),i=e.i(30200),h=e.i(87287);e.s(["Modal",0,function({open:e,isOpen:l,onClose:n,title:d,children:s,width:o=560,maxWidth:c,size:v}){let m=void 0!==e?e:void 0===l||l,p=(0,h.useMounted)();return((0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n()};return m&&document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[m,n]),m&&p)?(0,r.createPortal)((0,t.jsx)("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.5)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:24,overflow:"auto"},onClick:n,children:(0,t.jsxs)("div",{style:{background:"var(--surface)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border)",boxShadow:"var(--shadow-xl)",width:"100%",maxWidth:c||v&&({sm:420,md:560,lg:720,xl:960})[v]||o,maxHeight:"90vh",overflow:"auto",margin:"auto",animation:"modalIn 0.2s cubic-bezier(0.16,1,0.3,1)"},onClick:e=>e.stopPropagation(),children:[d&&(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"22px 26px",borderBottom:"1px solid var(--border)"},children:[(0,t.jsx)("div",{style:{fontSize:17,fontWeight:700,color:"var(--text-1)",letterSpacing:"-0.015em"},children:d}),(0,t.jsx)("button",{type:"button",onClick:e=>{e.stopPropagation(),n()},style:{background:"var(--surface-2)",border:"none",cursor:"pointer",color:"var(--text-3)",borderRadius:8,width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.14s"},onMouseEnter:e=>e.currentTarget.style.background="var(--surface-3)",onMouseLeave:e=>e.currentTarget.style.background="var(--surface-2)",children:(0,t.jsx)(i.Icon,{name:"x",size:15,color:"currentColor",strokeWidth:2})})]}),(0,t.jsx)("div",{style:{padding:26},children:s})]})}),document.body):null}])},44385,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let r={card:500,fade:300,scale:500,slide:350},i={card:"var(--spring)",fade:"var(--ease-out)",scale:"var(--spring-bounce)",slide:"var(--spring)"};e.s(["Stagger",0,function({children:e,className:h="",style:l,staggerMs:n=75,type:d="card",baseDelay:s=0}){let[o,c]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=requestAnimationFrame(()=>{requestAnimationFrame(()=>c(!0))});return()=>cancelAnimationFrame(e)},[]);let v=a.default.Children.toArray(e);return(0,t.jsx)("div",{className:h,style:l,children:v.map((e,a)=>{let h=r[d],l=i[d],c=o?{animationName:`anim-${d}`,animationDuration:`${h}ms`,animationTimingFunction:l,animationFillMode:"both",animationDelay:`${s+(o?a*n:0)}ms`,opacity:1}:{opacity:0,transform:"scale"===d?"scale(0.88)":"slide"===d?"translateY(10px)":"translateY(10px) scale(0.985)",transition:"none"};return(0,t.jsx)("div",{style:c,children:e},a)})})}])},40409,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(30200);function i(e){let t="dark"===e||"system"===e&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",t?"dark":"light")}function h(){let[e,t]=(0,a.useState)("system");return(0,a.useEffect)(()=>{let e=localStorage.getItem("encora-theme")||"system";t(e),i(e)},[]),(0,a.useEffect)(()=>{let t=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{"system"===e&&i("system")};return t.addEventListener("change",a),()=>t.removeEventListener("change",a)},[e]),{theme:e,setTheme:e=>{t(e),localStorage.setItem("encora-theme",e),i(e)}}}let l=["light","dark","system"],n={light:"Light",dark:"Dark",system:"System"},d={light:"eye",dark:"monitor",system:"cpu"};e.s(["ThemeToggle",0,function(){let{theme:e,setTheme:i}=h(),[s,o]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=e=>{e.target.closest("[data-theme-toggle]")||o(!1)};return s&&document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[s]),(0,t.jsxs)("div",{style:{position:"relative"},"data-theme-toggle":!0,children:[(0,t.jsx)("button",{onClick:()=>o(e=>!e),style:{width:36,height:36,borderRadius:10,background:s?"var(--surface-2)":"transparent",border:"1px solid "+(s?"var(--border)":"transparent"),display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.15s"},title:`Theme: ${n[e]}`,children:(0,t.jsx)(r.Icon,{name:"dark"===e?"monitor":"light"===e?"eye":"cpu",size:16,color:"var(--text-2)",strokeWidth:1.75})}),s&&(0,t.jsx)("div",{style:{position:"absolute",top:44,right:0,width:170,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"var(--radius)",boxShadow:"var(--shadow-lg)",zIndex:200,overflow:"hidden",padding:4,animation:"fadeIn 0.12s var(--ease-out)"},children:l.map(a=>(0,t.jsxs)("button",{onClick:()=>{i(a),o(!1)},style:{width:"100%",display:"flex",alignItems:"center",gap:10,padding:"9px 14px",border:"none",background:e===a?"var(--accent-dim)":"transparent",cursor:"pointer",color:e===a?"var(--accent)":"var(--text-2)",fontSize:13,fontWeight:e===a?600:400,fontFamily:"var(--font)",transition:"background 0.12s",borderRadius:8,letterSpacing:"-0.01em"},onMouseEnter:t=>{e!==a&&(t.currentTarget.style.background="var(--surface-2)")},onMouseLeave:t=>{e!==a&&(t.currentTarget.style.background="transparent")},children:[(0,t.jsx)(r.Icon,{name:d[a],size:14,color:"currentColor",strokeWidth:1.75}),n[a],e===a&&(0,t.jsx)(r.Icon,{name:"check",size:12,color:"var(--accent)",style:{marginLeft:"auto"}})]},a))})]})},"useTheme",0,h])},10018,e=>{"use strict";var t=e.i(43476);e.s(["default",0,()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .spinner {
          width: 56px;
          height: 56px;
          display: grid;
          border-radius: 50%;
          -webkit-mask: radial-gradient(farthest-side, #0000 40%, #000000 41%);
          mask: radial-gradient(farthest-side, #0000 40%, #000000 41%);
          background: linear-gradient(0deg, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 0) center/4.5px 100%,
                      linear-gradient(90deg, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.75) 0) center/100% 4.5px;
          background-repeat: no-repeat;
          animation: spinner-animation 1s infinite steps(12);
        }
        .spinner::before,
        .spinner::after {
          content: "";
          grid-area: 1/1;
          border-radius: 50%;
          background: inherit;
          opacity: 0.915;
          transform: rotate(30deg);
        }
        .spinner::after {
          opacity: 0.83;
          transform: rotate(60deg);
        }
        @keyframes spinner-animation {
          100% { transform: rotate(1turn); }
        }
      `}),(0,t.jsx)("div",{className:"spinner-container",children:(0,t.jsx)("div",{className:"spinner"})})]})])},98706,e=>{"use strict";var t=e.i(43476),a=e.i(71645);e.s(["Avatar",0,function({name:e="?",size:r=32,colorSeed:i}){let h=e.split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase(),l=["#4f46e5","#7c3aed","#0ea5e9","#16a34a","#dc2626","#d97706","#0891b2","#db2777","#059669","#ea580c"],n=l[(i??e).split("").reduce((e,t)=>e+t.charCodeAt(0),0)%l.length],[d,s]=(0,a.useState)(!1),[o,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{requestAnimationFrame(()=>s(!0))},[]),(0,t.jsx)("div",{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),style:{width:r,height:r,borderRadius:"50%",background:n,display:"flex",alignItems:"center",justifyContent:"center",fontSize:Math.round(.38*r),fontWeight:700,color:"#fff",flexShrink:0,letterSpacing:"-0.02em",transform:d?o?"scale(1.08)":"scale(1)":"scale(0.6)",opacity:+!!d,boxShadow:o?`0 4px 14px ${n}55`:"none",transition:"transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease, box-shadow 0.22s ease",cursor:"default"},children:h})}])},55375,88442,64816,49501,20239,76924,e=>{"use strict";e.i(44385),e.i(98706),e.i(96640),e.i(59544),e.i(27860),e.i(33077);var t=e.i(43476);e.i(71645);var a=e.i(30200);function r({width:e="100%",height:a=14,borderRadius:i=8,style:h}){return(0,t.jsx)("div",{className:"skeleton",style:{width:e,height:a,borderRadius:i,...h}})}function i({lines:e=3}){return(0,t.jsxs)("div",{style:{background:"var(--surface)",borderRadius:"var(--radius)",border:"1px solid var(--border)",padding:22,boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",gap:14},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:7},children:[(0,t.jsx)(r,{width:60,height:10}),(0,t.jsx)(r,{width:120,height:22,borderRadius:8})]}),(0,t.jsx)(r,{width:38,height:38,borderRadius:11})]}),Array.from({length:e}).map((e,a)=>(0,t.jsx)(r,{width:`${70+17*a%30}%`,height:10},a))]})}function h({height:e=120}){return(0,t.jsxs)("div",{style:{background:"var(--surface)",borderRadius:"var(--radius)",border:"1px solid var(--border)",padding:22,boxShadow:"var(--shadow-sm)"},children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:16},children:[(0,t.jsx)(r,{width:120,height:16,borderRadius:8}),(0,t.jsx)(r,{width:80,height:10})]}),(0,t.jsx)(r,{width:"100%",height:e,borderRadius:10})]})}function l({rows:e=5,cols:a=4}){return(0,t.jsxs)("div",{style:{background:"var(--surface)",borderRadius:"var(--radius)",border:"1px solid var(--border)",padding:18,boxShadow:"var(--shadow-sm)"},children:[(0,t.jsx)("div",{style:{display:"flex",gap:14,marginBottom:16},children:Array.from({length:a}).map((e,a)=>(0,t.jsx)(r,{width:80+20*a,height:10},a))}),Array.from({length:e}).map((e,i)=>(0,t.jsx)("div",{style:{display:"flex",gap:14,marginBottom:12},children:Array.from({length:a}).map((e,a)=>(0,t.jsx)(r,{width:60+30*a+40*Math.random(),height:10},a))},i))]})}e.i(49744),e.i(49793),e.i(46440),e.i(6661),e.i(10018),e.i(33232),e.i(32098),e.s(["SkeletonPage",0,function(){return(0,t.jsxs)("div",{style:{padding:28,display:"flex",flexDirection:"column",gap:22},children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:7},children:[(0,t.jsx)(r,{width:200,height:26,borderRadius:8}),(0,t.jsx)(r,{width:300,height:12})]}),(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:16},children:Array.from({length:4}).map((e,a)=>(0,t.jsx)(i,{},a))}),(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:22},children:[(0,t.jsx)(h,{height:140}),(0,t.jsx)(h,{height:140})]}),(0,t.jsx)(l,{rows:6,cols:5})]})},"SkeletonTable",0,l],88442),e.i(68003),e.i(40409),e.i(88840),e.i(86909);var n=e.i(68834);let d=[{id:"tenant-002-0000-0000-000000000002",name:"StreamCo Reseller",slug:"streamco",product:"ott"},{id:"tenant-003-0000-0000-000000000003",name:"EdgeNet CDN Reseller",slug:"edgenet-cdn",product:"cdn"}],s=(0,n.create)(e=>({mode:"platform_owner",resellerId:null,resellerName:null,setScope:(t,a=null,r=null)=>e({mode:t,resellerId:"platform_owner"===t?null:a,resellerName:"platform_owner"===t?null:r}),selectResellerById:t=>{let a=d.find(e=>e.id===t);a&&e({mode:"reseller_admin",resellerId:a.id,resellerName:a.name})},switchToPlatformOwner:()=>e({mode:"platform_owner",resellerId:null,resellerName:null})}));e.s(["PRESET_RESELLERS",0,d,"useScopeStore",0,s],64816),e.s([],49501),e.s(["ScopeNoticeBanner",0,function(){let{mode:e,resellerName:r,resellerId:i,switchToPlatformOwner:h,selectResellerById:l}=s(),n="platform_owner"===e;return(0,t.jsxs)("div",{style:{background:n?"rgba(139, 92, 246, 0.08)":"rgba(14, 165, 233, 0.08)",border:"1px solid "+(n?"rgba(139, 92, 246, 0.25)":"rgba(14, 165, 233, 0.25)"),borderRadius:12,padding:"12px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10},children:[(0,t.jsx)("div",{style:{width:32,height:32,borderRadius:8,background:n?"rgba(139, 92, 246, 0.2)":"rgba(14, 165, 233, 0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,t.jsx)(a.Icon,{name:n?"shield":"lock",size:16,color:n?"#8b5cf6":"#0ea5e9"})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{fontSize:13,fontWeight:700,color:"var(--text-1)",display:"flex",alignItems:"center",gap:6},children:[(0,t.jsx)(a.Icon,{name:n?"shield":"lock",size:14,color:n?"#8b5cf6":"#0ea5e9"}),n?"Platform Owner Mode (Unrestricted Global Access)":`Reseller Isolated World: ${r}`]}),(0,t.jsx)("div",{style:{fontSize:12,color:"var(--text-3)",marginTop:2},children:n?"You are administering the entire multi-tenant platform. All reseller organizations, child subscribers, and global settings are visible.":"Strict multi-tenancy enforcement active. You can only view and administer your own child subscribers, plans, invoices, and tenant resources."})]})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10},children:[(0,t.jsx)("span",{style:{fontSize:12,fontWeight:700,color:"var(--text-2)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Switch Admin Scope:"}),(0,t.jsxs)("select",{value:n?"platform":i??"",onChange:e=>{let t=e.target.value;"platform"===t?h():l(t)},style:{padding:"7px 14px",borderRadius:8,border:"1.5px solid "+(n?"rgba(139, 92, 246, 0.4)":"rgba(14, 165, 233, 0.4)"),background:"var(--surface)",color:n?"#8b5cf6":"#0ea5e9",fontSize:13,fontWeight:700,cursor:"pointer",outline:"none",minWidth:240,boxShadow:"var(--shadow-sm)"},children:[(0,t.jsx)("option",{value:"platform",children:"Platform Owner (Global All Access)"}),d.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.name," (Reseller Isolated)"]},e.id))]})]})]})}],20239),e.s(["ViewToggle",0,function({mode:e,onChange:r,idPrefix:i="vt"}){return(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:2,background:"var(--surface-2)",borderRadius:8,padding:3,border:"1px solid var(--border)"},children:[(0,t.jsxs)("button",{type:"button",id:`${i}-grid-btn`,onClick:()=>r("grid"),title:"Switch to Card/Grid View",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:6,border:"none",background:"grid"===e?"var(--surface)":"transparent",color:"grid"===e?"var(--text-1)":"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",boxShadow:"grid"===e?"var(--shadow-sm)":"none",transition:"all 0.15s ease"},children:[(0,t.jsx)(a.Icon,{name:"grid",size:14,color:"grid"===e?"var(--accent)":"var(--text-3)"}),"Grid"]}),(0,t.jsxs)("button",{type:"button",id:`${i}-list-btn`,onClick:()=>r("list"),title:"Switch to List/Table View",style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:6,border:"none",background:"list"===e?"var(--surface)":"transparent",color:"list"===e?"var(--text-1)":"var(--text-3)",fontSize:12,fontWeight:600,cursor:"pointer",boxShadow:"list"===e?"var(--shadow-sm)":"none",transition:"all 0.15s ease"},children:[(0,t.jsx)(a.Icon,{name:"list",size:14,color:"list"===e?"var(--accent)":"var(--text-3)"}),"List"]})]})}],76924),e.s([],55375)}]);