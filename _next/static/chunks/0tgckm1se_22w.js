(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59544,e=>{"use strict";var t=e.i(43476),h=e.i(30200);e.s(["Btn",0,function({children:e,variant:a="default",size:l="md",onClick:r,icon:i,iconName:o,disabled:d,style:n,...s}){let v={xs:{padding:"4px 10px",fontSize:11,gap:4,borderRadius:8},sm:{padding:"6px 14px",fontSize:12,gap:5,borderRadius:9},md:{padding:"9px 18px",fontSize:13,gap:6,borderRadius:10},lg:{padding:"12px 24px",fontSize:14,gap:7,borderRadius:12}},z={default:{background:"var(--surface)",border:"1px solid var(--border)",color:"var(--text-1)"},primary:{background:"var(--accent)",border:"1px solid transparent",color:"#fff"},ghost:{background:"transparent",border:"1px solid transparent",color:"var(--text-2)"},danger:{background:"var(--danger-bg)",border:"1px solid transparent",color:"var(--danger)"},success:{background:"var(--success-bg)",border:"1px solid transparent",color:"var(--success)"}},f=v[l]||v.md,c=z[a]||z.default;return(0,t.jsxs)("button",{onClick:r,disabled:d,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:f.gap,padding:f.padding,fontSize:f.fontSize,borderRadius:f.borderRadius,fontWeight:500,cursor:d?"not-allowed":"pointer",opacity:d?.45:1,letterSpacing:"-0.01em",transition:"transform 0.16s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.16s ease, background 0.15s ease, border-color 0.15s ease, opacity 0.15s ease",fontFamily:"inherit",position:"relative",overflow:"hidden",...c,...n},onMouseEnter:e=>{d||(e.currentTarget.style.transform="translateY(-1px) scale(1.015)",e.currentTarget.style.boxShadow="primary"===a?"0 4px 16px oklch(50% 0.23 264 / 0.3)":"0 2px 8px oklch(0% 0 0 / 0.08)")},onMouseLeave:e=>{e.currentTarget.style.transform="",e.currentTarget.style.boxShadow=""},onMouseDown:e=>{d||(e.currentTarget.style.transform="translateY(0px) scale(0.97)",e.currentTarget.style.boxShadow="none")},onMouseUp:e=>{e.currentTarget.style.transform="translateY(-1px) scale(1.015)"},...s,children:[o&&(0,t.jsx)(h.Icon,{name:o,size:"lg"===l?15:13,color:"currentColor"}),i&&!o&&(0,t.jsx)("span",{style:{display:"flex",alignItems:"center"},children:i}),e]})}])},46440,e=>{"use strict";var t=e.i(43476),h=e.i(71645),a=e.i(74080);let l={width:"100%",padding:"11px 16px",border:"1.5px solid var(--border)",borderRadius:12,fontSize:14,fontFamily:"var(--font)",background:"var(--surface)",color:"var(--text-1)",outline:"none",transition:"border-color 0.15s, box-shadow 0.15s",boxSizing:"border-box",lineHeight:1.5,letterSpacing:"-0.01em"};function r(e,t){for(let h of t)if(!h.test(e))return h.message;return null}e.s(["ConfirmDialog",0,function({open:e,onClose:l,onConfirm:r,title:i,message:o,confirmLabel:d="Confirm",danger:n=!1}){let[s,v]=h.default.useState(!1);if(h.default.useEffect(()=>{v(!0)},[]),!e||!s)return null;let z=(0,t.jsx)("div",{onClick:l,style:{position:"fixed",inset:0,zIndex:3e3,background:"rgba(0,0,0,0.35)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:(0,t.jsxs)("div",{onClick:e=>e.stopPropagation(),style:{background:"var(--surface)",borderRadius:18,boxShadow:"var(--shadow-xl)",width:"100%",maxWidth:340,overflow:"hidden",animation:"modalIn 0.2s var(--spring)",border:"1px solid var(--border)"},children:[(0,t.jsxs)("div",{style:{padding:"28px 24px 20px",textAlign:"center"},children:[(0,t.jsx)("div",{style:{fontSize:17,fontWeight:700,color:"var(--text-1)",marginBottom:8,letterSpacing:"-0.015em"},children:i}),(0,t.jsx)("div",{style:{fontSize:14,color:"var(--text-3)",lineHeight:1.55},children:o})]}),(0,t.jsxs)("div",{style:{borderTop:"1px solid var(--border)",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:[(0,t.jsx)("button",{onClick:l,style:{padding:"15px",border:"none",background:"none",cursor:"pointer",fontSize:15,color:"var(--accent)",fontFamily:"inherit",fontWeight:500,borderRight:"1px solid var(--border)",transition:"background 0.14s",letterSpacing:"-0.01em"},onMouseEnter:e=>e.currentTarget.style.background="var(--surface-2)",onMouseLeave:e=>e.currentTarget.style.background="",children:"Cancel"}),(0,t.jsx)("button",{onClick:()=>{r(),l()},style:{padding:"15px",border:"none",background:"none",cursor:"pointer",fontSize:15,color:n?"var(--danger)":"var(--accent)",fontFamily:"inherit",fontWeight:700,transition:"background 0.14s",letterSpacing:"-0.01em"},onMouseEnter:e=>e.currentTarget.style.background="var(--surface-2)",onMouseLeave:e=>e.currentTarget.style.background="",children:d})]})]})});return(0,a.createPortal)(z,document.body)},"FormField",0,function({label:e,hint:h,error:a,required:l,children:r}){return(0,t.jsxs)("div",{style:{marginBottom:18},children:[(0,t.jsxs)("label",{style:{display:"block",fontSize:12.5,fontWeight:500,color:"var(--text-2)",marginBottom:7,letterSpacing:"-0.005em"},children:[e,l&&(0,t.jsx)("span",{style:{color:"var(--danger)",marginLeft:3},children:"*"})]}),r,h&&!a&&(0,t.jsx)("div",{style:{fontSize:12,color:"var(--text-3)",marginTop:5},children:h}),a&&(0,t.jsx)("div",{style:{fontSize:12,color:"var(--danger)",marginTop:5},children:a})]})},"Input",0,function({value:e,onChange:a,placeholder:r,type:i="text",style:o,disabled:d}){let[n,s]=(0,h.useState)(!1);return(0,t.jsx)("input",{type:i,value:e,onChange:e=>a(e.target.value),placeholder:r,disabled:d,onFocus:()=>s(!0),onBlur:()=>s(!1),style:{...l,borderColor:n?"var(--accent)":"var(--border)",boxShadow:n?"0 0 0 4px oklch(50% 0.23 264 / 0.1)":"none",opacity:d?.45:1,...o}})},"SelectInput",0,function({value:e,onChange:a,options:r,placeholder:i,style:o,disabled:d}){let[n,s]=(0,h.useState)(!1);return(0,t.jsxs)("select",{value:e,onChange:e=>a(e.target.value),disabled:d,onFocus:()=>s(!0),onBlur:()=>s(!1),style:{...l,cursor:"pointer",appearance:"none",backgroundImage:"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",backgroundSize:"16px",paddingRight:40,borderColor:n?"var(--accent)":"var(--border)",boxShadow:n?"0 0 0 4px oklch(50% 0.23 264 / 0.1)":"none",opacity:d?.45:1,...o},children:[i&&(0,t.jsx)("option",{value:"",children:i}),r.map(e=>"string"==typeof e?(0,t.jsx)("option",{value:e,children:e},e):(0,t.jsx)("option",{value:e.value,children:e.label},e.value))]})},"Textarea",0,function({value:e,onChange:a,placeholder:r,rows:i=3,disabled:o}){let[d,n]=(0,h.useState)(!1);return(0,t.jsx)("textarea",{value:e,onChange:e=>a(e.target.value),placeholder:r,rows:i,disabled:o,onFocus:()=>n(!0),onBlur:()=>n(!1),style:{...l,resize:"vertical",borderColor:d?"var(--accent)":"var(--border)",boxShadow:d?"0 0 0 4px oklch(50% 0.23 264 / 0.1)":"none",opacity:o?.45:1}})},"VALIDATORS",0,{required:(e="This field is required")=>({test:e=>e.trim().length>0,message:e}),email:(e="Please enter a valid email")=>({test:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),message:e}),minLength:(e,t)=>({test:t=>t.length>=e,message:t||`Must be at least ${e} characters`}),maxLength:(e,t)=>({test:t=>t.length<=e,message:t||`Must be at most ${e} characters`}),url:(e="Please enter a valid URL")=>({test:e=>!e||/^https?:\/\/.+/.test(e),message:e}),number:(e="Please enter a valid number")=>({test:e=>!e||!isNaN(Number(e)),message:e})},"useFormValidation",0,function(e){let[t,a]=(0,h.useState)(e),[l,i]=(0,h.useState)({}),[o,d]=(0,h.useState)({});return{values:t,errors:l,touched:o,setValue:(e,t)=>{a(h=>({...h,[e]:t})),d(t=>({...t,[e]:!0})),i(t=>{let h={...t};return delete h[e],h})},validateField:(e,h)=>{let a=r(t[e],h);return i(t=>a?{...t,[e]:a}:{...t,[e]:void 0}),!a},validateAll:e=>{let h=!0,a={},l={};for(let[i,o]of Object.entries(e)){l[i]=!0;let e=r(t[i],o);e&&(a[i]=e,h=!1)}return i(a),d(l),h},setValues:a}}])},33232,e=>{"use strict";var t=e.i(43476),h=e.i(71645),a=e.i(30200);e.s(["FilterPill",0,function({label:e,active:h,onClick:a}){return(0,t.jsx)("button",{onClick:a,style:{padding:"6px 16px",borderRadius:20,border:"1px solid",borderColor:h?"var(--accent)":"var(--border)",background:h?"var(--accent-dim)":"var(--surface)",color:h?"var(--accent)":"var(--text-2)",fontSize:12,fontWeight:h?600:500,cursor:"pointer",fontFamily:"var(--font)",letterSpacing:"-0.005em",transform:h?"scale(1.03)":"scale(1)",transition:"all 0.16s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:e=>{h||(e.currentTarget.style.borderColor="var(--border-2)",e.currentTarget.style.color="var(--text-1)")},onMouseLeave:e=>{h||(e.currentTarget.style.borderColor="var(--border)",e.currentTarget.style.color="var(--text-2)")},children:e})},"LabelRow",0,function({label:e,children:h}){return(0,t.jsxs)("div",{style:{marginBottom:14},children:[(0,t.jsx)("div",{style:{fontSize:10.5,fontWeight:600,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:5},children:e}),h]})},"ProgressBar",0,function({value:e,max:a=100,color:l="var(--accent)",height:r=6,animated:i=!0,delay:o=0}){let d=Math.min(100,e/a*100),n=(0,h.useRef)(null),[s,v]=(0,h.useState)(i?0:d);return(0,h.useEffect)(()=>{if(!i)return void v(d);let e=n.current;if(!e)return;let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(setTimeout(()=>v(d),o),t.disconnect())},{threshold:.2});return t.observe(e),()=>t.disconnect()},[d,i,o]),(0,t.jsx)("div",{ref:n,style:{background:"var(--surface-3)",borderRadius:r,height:r,overflow:"hidden"},children:(0,t.jsx)("div",{style:{background:l,width:`${s}%`,height:"100%",borderRadius:r,transition:`width 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${o}ms`}})})},"StatMini",0,function({label:e,value:h,color:a}){return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:"var(--text-3)",marginBottom:3,letterSpacing:"-0.005em"},children:e}),(0,t.jsx)("div",{style:{fontSize:22,fontWeight:800,color:a||"var(--text-1)",letterSpacing:"-0.025em",animation:"cardIn 0.5s cubic-bezier(0.16,1,0.3,1) both"},children:h})]})},"TabBar",0,function({tabs:e,active:l,onChange:r}){let[i,o]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{requestAnimationFrame(()=>o(!0))},[]),(0,t.jsx)("div",{style:{display:"flex",gap:0,borderBottom:"1px solid var(--border)",marginBottom:22,overflowX:"auto",WebkitOverflowScrolling:"touch"},children:e.map((e,h)=>{let o=l===e.id;return(0,t.jsxs)("button",{onClick:()=>r(e.id),style:{padding:"11px 20px",border:"none",background:"none",cursor:"pointer",fontSize:13,fontWeight:o?600:400,color:o?"var(--accent)":"var(--text-3)",borderBottom:o?"2px solid var(--accent)":"2px solid transparent",marginBottom:-1,transition:"color 0.18s ease, border-color 0.18s ease, transform 0.15s ease",fontFamily:"var(--font)",display:"flex",alignItems:"center",gap:7,whiteSpace:"nowrap",transform:i?"translateY(0)":"translateY(4px)",opacity:+!!i,transitionDelay:`${35*h}ms`,letterSpacing:"-0.01em"},onMouseEnter:e=>{o||(e.currentTarget.style.color="var(--text-1)")},onMouseLeave:e=>{o||(e.currentTarget.style.color="var(--text-3)")},children:[e.icon&&(0,t.jsx)(a.Icon,{name:e.icon,size:13,color:"currentColor",strokeWidth:2}),e.iconEmoji&&(0,t.jsx)("span",{children:e.iconEmoji}),e.label,null!=e.count&&(0,t.jsx)("span",{style:{fontSize:10.5,background:o?"var(--accent-dim)":"var(--surface-3)",color:o?"var(--accent)":"var(--text-3)",borderRadius:20,padding:"1px 7px",fontWeight:600,transition:"background 0.18s, color 0.18s"},children:e.count})]},`${e.id}-${h}`)})})}])},49744,e=>{"use strict";var t=e.i(43476),h=e.i(30200);e.s(["DataTable",0,function({columns:e,rows:a,onRowClick:l}){return a&&0!==a.length?(0,t.jsx)("div",{style:{overflowX:"auto"},children:(0,t.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{style:{borderBottom:"1px solid var(--border)"},children:e.map(e=>(0,t.jsx)("th",{style:{padding:"10px 14px",textAlign:e.align||"left",color:"var(--text-3)",fontWeight:600,fontSize:10.5,textTransform:"uppercase",letterSpacing:"0.06em",whiteSpace:"nowrap"},children:e.label},e.key))})}),(0,t.jsx)("tbody",{children:a.map((h,a)=>(0,t.jsx)("tr",{onClick:()=>l&&l(h),className:"row-hover animate-in",style:{borderBottom:"1px solid var(--border)",cursor:l?"pointer":"default","--i":a},children:e.map(e=>(0,t.jsx)("td",{style:{padding:"13px 14px",color:"var(--text-1)",textAlign:e.align||"left",whiteSpace:e.nowrap?"nowrap":void 0,letterSpacing:"-0.005em"},children:e.render?e.render(h[e.key],h):h[e.key]},e.key))},h.id||a))})]})}):(0,t.jsxs)("div",{style:{padding:"48px 24px",textAlign:"center",color:"var(--text-3)"},children:[(0,t.jsx)(h.Icon,{name:"package",size:32,color:"var(--text-3)",style:{margin:"0 auto 10px"}}),(0,t.jsx)("div",{style:{fontSize:13},children:"No data found"})]})}])},49793,73208,e=>{"use strict";var t=e.i(43476),h=e.i(71645);let a={US:`<path fill="#bd3d44" d="M0 0h640v480H0"/>
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
  <path fill="#c8102e" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"/>`};e.s(["Flag",0,function({code:e,size:l=20}){let r,i,o=(0,h.useId)().replace(/[^a-zA-Z0-9]/g,""),d=a[e];if(!d)return null;let n=(r=new Set,d.replace(/(?<![\w-])id="([^"]+)"/g,(e,t)=>(r.add(t),e)),i=d,r.forEach(e=>{let t=RegExp(`(["#])${e}(["')])`,"g");i=i.replace(t,`$1${e}-${o}$2`)}),i);return(0,t.jsx)("svg",{width:l,height:"number"==typeof l?3*l/4:l,viewBox:"0 0 640 480",style:{display:"block",flexShrink:0,borderRadius:2},"aria-label":e,role:"img",dangerouslySetInnerHTML:{__html:n}})}],49793);var l=e.i(41931);e.i(6811);var r=e.i(43739),i=e.i(31106),o=e.i(17935);e.s(["geoService",0,{listGeoRules:async(e={})=>i.serviceConfig.useMock?(await (0,l.apiDelay)(),(0,l.paginateCursor)(o.db.geoRules,e.cursor,e.limit??20)):r.backendClient.geo.list(e),async createGeoRule(e){if(!i.serviceConfig.useMock)return r.backendClient.geo.create(e);await (0,l.apiDelay)();let t={id:(0,l.generateId)(),name:e.name??"New Rule",description:e.description??null,policy:e.policy??"allow_list",territories:e.territories??[],applies_to:e.applies_to??[],created_at:(0,l.now)(),updated_at:(0,l.now)()};return o.db.geoRules.push(t),t},async getGeoRule(e){if(!i.serviceConfig.useMock)return r.backendClient.geo.get(e);await (0,l.apiDelay)();let t=o.db.geoRules.find(t=>t.id===e);if(!t)throw new l.NotFoundError("Geo restriction rule",(0,l.generateId)());return t},async updateGeoRule(e,t){if(!i.serviceConfig.useMock)return r.backendClient.geo.update(e,t);await (0,l.apiDelay)();let h=o.db.geoRules.find(t=>t.id===e);if(!h)throw new l.NotFoundError("Geo restriction rule",(0,l.generateId)());return Object.assign(h,{...t,updated_at:(0,l.now)()}),h},async deleteGeoRule(e){if(!i.serviceConfig.useMock)return r.backendClient.geo.delete(e);await (0,l.apiDelay)();let t=o.db.geoRules.findIndex(t=>t.id===e);if(-1===t)throw new l.NotFoundError("Geo restriction rule",(0,l.generateId)());o.db.geoRules.splice(t,1)},async checkGeoAccess(e,t,h){await (0,l.apiDelay)();let a=o.db.geoRules.find(t=>t.applies_to?.includes(e));return a?"allow_list"===a.policy?{allowed:a.territories.includes(h),rule_id:a.id}:{allowed:!a.territories.includes(h),rule_id:a.id}:{allowed:!0,rule_id:null}}}],73208)},87510,e=>{"use strict";var t=e.i(43476),h=e.i(71645),a=e.i(92989),l=e.i(39964),r=e.i(96640),i=e.i(59544),o=e.i(49744),d=e.i(30200),n=e.i(49793),s=e.i(46440),v=e.i(33232),z=e.i(73208);let f=[{code:"US",flag:"🇺🇸",name:"United States"},{code:"GB",flag:"🇬🇧",name:"United Kingdom"},{code:"AU",flag:"🇦🇺",name:"Australia"},{code:"CA",flag:"🇨🇦",name:"Canada"},{code:"IN",flag:"🇮🇳",name:"India"},{code:"DE",flag:"🇩🇪",name:"Germany"},{code:"FR",flag:"🇫🇷",name:"France"},{code:"JP",flag:"🇯🇵",name:"Japan"},{code:"BR",flag:"🇧🇷",name:"Brazil"},{code:"SG",flag:"🇸🇬",name:"Singapore"}],c=(e,t)=>e instanceof Error?e.message:t;e.s(["default",0,function(){let e=(0,a.useRouter)(),[m,p]=(0,h.useState)([]),[g,u]=(0,h.useState)("all"),[x,M]=(0,h.useState)(!0),[b,y]=(0,h.useState)(null),[k,V]=(0,h.useState)(null);(0,h.useEffect)(()=>{let e=!1;return M(!0),y(null),z.geoService.listGeoRules().then(t=>{e||(p(t.data||[]),M(!1))}).catch(t=>{e||(console.error(t),y(c(t,"Failed to load geo rules.")),M(!1))}),()=>{e=!0}},[]);let w=async()=>{if(k){M(!0);try{await z.geoService.deleteGeoRule(k.id),p(e=>e.filter(e=>e.id!==k.id)),V(null)}catch(e){console.error(e),y(c(e,"Failed to delete geo rule."))}finally{M(!1)}}},H=m.filter(e=>"all"===g||e.policy===g),j=[{key:"name",label:"Content",render:e=>(0,t.jsx)("div",{style:{fontWeight:600,color:"var(--text-1)"},children:e})},{key:"policy",label:"Type",render:e=>(0,t.jsx)(r.Badge,{variant:"allow_list"===e?"success":"danger",children:"allow_list"===e?"Allowlist":"Blocklist"})},{key:"territories",label:"Regions",render:e=>(0,t.jsx)("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:(e||[]).map(e=>(f.find(t=>t.code===e),(0,t.jsxs)("span",{style:{fontSize:11,background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:5,padding:"1px 6px"},children:[(0,t.jsx)(n.Flag,{code:e,size:11})," ",e]},e)))})},{key:"reason",label:"Reason",render:()=>(0,t.jsx)("span",{style:{fontSize:12,color:"var(--text-3)"},children:"-"})},{key:"coverage",label:"Coverage",render:()=>(0,t.jsx)("span",{style:{fontSize:12,color:"var(--text-2)"},children:"-"})},{key:"id",label:"",render:(h,a)=>(0,t.jsxs)("div",{style:{display:"flex",gap:5,justifyContent:"flex-end"},children:[(0,t.jsx)(i.Btn,{size:"xs",onClick:()=>e.push(`/admin/geo-restrictions/${h}`),children:"Edit"}),(0,t.jsx)(i.Btn,{size:"xs",variant:"danger",onClick:()=>V(a),children:"Delete"})]})}];return(0,t.jsxs)("div",{className:"page-enter",style:{padding:24,display:"flex",flexDirection:"column",gap:20},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{style:{fontSize:22,fontWeight:800,color:"var(--text-1)",letterSpacing:"-0.025em"},children:"Geo-Restriction Rules"}),(0,t.jsx)("p",{style:{fontSize:13,color:"var(--text-3)",marginTop:3},children:"Control content availability by region and country"})]}),(0,t.jsx)(i.Btn,{variant:"primary",iconName:"plus",onClick:()=>e.push("/geo/new"),children:"Add Rule"})]}),(0,t.jsx)("div",{className:"animate-in",style:{"--i":0,display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:14},children:[{label:"Total Rules",value:m.length,icon:"globe",color:"#4f46e5"},{label:"Allowlist Rules",value:m.filter(e=>"allow_list"===e.policy).length,icon:"check",color:"#16a34a"},{label:"Blocklist Rules",value:m.filter(e=>"block_list"===e.policy).length,icon:"x",color:"#dc2626"}].map((e,h)=>(0,t.jsxs)("div",{className:"animate-in hover-lift",style:{"--i":h,background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"var(--radius)",padding:"16px 20px",boxShadow:"var(--shadow-sm)",display:"flex",gap:12,alignItems:"center"},children:[(0,t.jsx)("div",{style:{width:42,height:42,borderRadius:11,background:e.color+"18",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,t.jsx)(d.Icon,{name:e.icon,size:20,color:e.color,strokeWidth:1.75})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:11,color:"var(--text-3)",textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:2},children:e.label}),(0,t.jsx)("div",{style:{fontSize:24,fontWeight:800,color:"var(--text-1)",letterSpacing:"-0.02em"},children:e.value})]})]},e.label))}),(0,t.jsxs)("div",{style:{display:"flex",gap:6},children:[(0,t.jsx)(v.FilterPill,{label:"All Rules",active:"all"===g,onClick:()=>u("all")}),(0,t.jsx)(v.FilterPill,{label:"Allowlist",active:"allow_list"===g,onClick:()=>u("allow_list")}),(0,t.jsx)(v.FilterPill,{label:"Blocklist",active:"block_list"===g,onClick:()=>u("block_list")})]}),(0,t.jsx)(l.Card,{padding:0,children:(0,t.jsx)(o.DataTable,{columns:j,rows:H})}),(0,t.jsxs)(l.Card,{children:[(0,t.jsx)(l.CardHeader,{title:"Region Overview",subtitle:"Platform availability by country"}),(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:12},children:f.map((e,h)=>{let a=m.some(t=>"block_list"===t.policy&&t.territories.includes(e.code)),l=m.some(t=>"allow_list"===t.policy&&t.territories.includes(e.code));return(0,t.jsxs)("div",{className:"animate-in hover-lift",style:{"--i":h,background:"var(--surface-2)",border:"1px solid var(--border)",borderRadius:10,padding:"14px 12px",textAlign:"center",cursor:"pointer",transition:"all 0.15s"},children:[(0,t.jsxs)("div",{style:{fontSize:26,marginBottom:6},children:["                ",(0,t.jsx)(n.Flag,{code:e.code})]}),(0,t.jsx)("div",{style:{fontSize:12,fontWeight:700,color:"var(--text-1)",marginBottom:6},children:e.code}),(0,t.jsx)("div",{style:{fontSize:10,color:"var(--text-3)",marginBottom:8},children:e.name}),(0,t.jsxs)("div",{style:{display:"flex",gap:4,justifyContent:"center",flexWrap:"wrap"},children:[a&&(0,t.jsx)(r.Badge,{variant:"danger",children:"Blocked"}),l&&(0,t.jsx)(r.Badge,{variant:"success",children:"Allowlist"}),!a&&!l&&(0,t.jsx)(r.Badge,{variant:"default",children:"Global"})]})]},e.code)})})]}),(0,t.jsx)(s.ConfirmDialog,{open:!!k,onClose:()=>V(null),title:"Delete Geo Rule",message:`Delete the geo rule for "${k?.name}"?`,confirmLabel:"Delete",danger:!0,onConfirm:w})]})}])}]);