(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59544,h=>{"use strict";var e=h.i(43476),t=h.i(30200);h.s(["Btn",0,function({children:h,variant:a="default",size:l="md",onClick:r,icon:i,iconName:d,disabled:n,style:o,...v}){let s={xs:{padding:"4px 10px",fontSize:11,gap:4,borderRadius:8},sm:{padding:"6px 14px",fontSize:12,gap:5,borderRadius:9},md:{padding:"9px 18px",fontSize:13,gap:6,borderRadius:10},lg:{padding:"12px 24px",fontSize:14,gap:7,borderRadius:12}},z={default:{background:"var(--surface)",border:"1px solid var(--border)",color:"var(--text-1)"},primary:{background:"var(--accent)",border:"1px solid transparent",color:"#fff"},ghost:{background:"transparent",border:"1px solid transparent",color:"var(--text-2)"},danger:{background:"var(--danger-bg)",border:"1px solid transparent",color:"var(--danger)"},success:{background:"var(--success-bg)",border:"1px solid transparent",color:"var(--success)"}},m=s[l]||s.md,f=z[a]||z.default;return(0,e.jsxs)("button",{onClick:r,disabled:n,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:m.gap,padding:m.padding,fontSize:m.fontSize,borderRadius:m.borderRadius,fontWeight:500,cursor:n?"not-allowed":"pointer",opacity:n?.45:1,letterSpacing:"-0.01em",transition:"transform 0.16s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.16s ease, background 0.15s ease, border-color 0.15s ease, opacity 0.15s ease",fontFamily:"inherit",position:"relative",overflow:"hidden",...f,...o},onMouseEnter:h=>{n||(h.currentTarget.style.transform="translateY(-1px) scale(1.015)",h.currentTarget.style.boxShadow="primary"===a?"0 4px 16px oklch(50% 0.23 264 / 0.3)":"0 2px 8px oklch(0% 0 0 / 0.08)")},onMouseLeave:h=>{h.currentTarget.style.transform="",h.currentTarget.style.boxShadow=""},onMouseDown:h=>{n||(h.currentTarget.style.transform="translateY(0px) scale(0.97)",h.currentTarget.style.boxShadow="none")},onMouseUp:h=>{h.currentTarget.style.transform="translateY(-1px) scale(1.015)"},...v,children:[d&&(0,e.jsx)(t.Icon,{name:d,size:"lg"===l?15:13,color:"currentColor"}),i&&!d&&(0,e.jsx)("span",{style:{display:"flex",alignItems:"center"},children:i}),h]})}])},46440,h=>{"use strict";var e=h.i(43476),t=h.i(71645),a=h.i(74080);let l={width:"100%",padding:"11px 16px",border:"1.5px solid var(--border)",borderRadius:12,fontSize:14,fontFamily:"var(--font)",background:"var(--surface)",color:"var(--text-1)",outline:"none",transition:"border-color 0.15s, box-shadow 0.15s",boxSizing:"border-box",lineHeight:1.5,letterSpacing:"-0.01em"};function r(h,e){for(let t of e)if(!t.test(h))return t.message;return null}h.s(["ConfirmDialog",0,function({open:h,onClose:l,onConfirm:r,title:i,message:d,confirmLabel:n="Confirm",danger:o=!1}){let[v,s]=t.default.useState(!1);if(t.default.useEffect(()=>{s(!0)},[]),!h||!v)return null;let z=(0,e.jsx)("div",{onClick:l,style:{position:"fixed",inset:0,zIndex:3e3,background:"rgba(0,0,0,0.35)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:(0,e.jsxs)("div",{onClick:h=>h.stopPropagation(),style:{background:"var(--surface)",borderRadius:18,boxShadow:"var(--shadow-xl)",width:"100%",maxWidth:340,overflow:"hidden",animation:"modalIn 0.2s var(--spring)",border:"1px solid var(--border)"},children:[(0,e.jsxs)("div",{style:{padding:"28px 24px 20px",textAlign:"center"},children:[(0,e.jsx)("div",{style:{fontSize:17,fontWeight:700,color:"var(--text-1)",marginBottom:8,letterSpacing:"-0.015em"},children:i}),(0,e.jsx)("div",{style:{fontSize:14,color:"var(--text-3)",lineHeight:1.55},children:d})]}),(0,e.jsxs)("div",{style:{borderTop:"1px solid var(--border)",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"},children:[(0,e.jsx)("button",{onClick:l,style:{padding:"15px",border:"none",background:"none",cursor:"pointer",fontSize:15,color:"var(--accent)",fontFamily:"inherit",fontWeight:500,borderRight:"1px solid var(--border)",transition:"background 0.14s",letterSpacing:"-0.01em"},onMouseEnter:h=>h.currentTarget.style.background="var(--surface-2)",onMouseLeave:h=>h.currentTarget.style.background="",children:"Cancel"}),(0,e.jsx)("button",{onClick:()=>{r(),l()},style:{padding:"15px",border:"none",background:"none",cursor:"pointer",fontSize:15,color:o?"var(--danger)":"var(--accent)",fontFamily:"inherit",fontWeight:700,transition:"background 0.14s",letterSpacing:"-0.01em"},onMouseEnter:h=>h.currentTarget.style.background="var(--surface-2)",onMouseLeave:h=>h.currentTarget.style.background="",children:n})]})]})});return(0,a.createPortal)(z,document.body)},"FormField",0,function({label:h,hint:t,error:a,required:l,children:r}){return(0,e.jsxs)("div",{style:{marginBottom:18},children:[(0,e.jsxs)("label",{style:{display:"block",fontSize:12.5,fontWeight:500,color:"var(--text-2)",marginBottom:7,letterSpacing:"-0.005em"},children:[h,l&&(0,e.jsx)("span",{style:{color:"var(--danger)",marginLeft:3},children:"*"})]}),r,t&&!a&&(0,e.jsx)("div",{style:{fontSize:12,color:"var(--text-3)",marginTop:5},children:t}),a&&(0,e.jsx)("div",{style:{fontSize:12,color:"var(--danger)",marginTop:5},children:a})]})},"Input",0,function({value:h,onChange:a,placeholder:r,type:i="text",style:d,disabled:n}){let[o,v]=(0,t.useState)(!1);return(0,e.jsx)("input",{type:i,value:h,onChange:h=>a(h.target.value),placeholder:r,disabled:n,onFocus:()=>v(!0),onBlur:()=>v(!1),style:{...l,borderColor:o?"var(--accent)":"var(--border)",boxShadow:o?"0 0 0 4px oklch(50% 0.23 264 / 0.1)":"none",opacity:n?.45:1,...d}})},"SelectInput",0,function({value:h,onChange:a,options:r,placeholder:i,style:d,disabled:n}){let[o,v]=(0,t.useState)(!1);return(0,e.jsxs)("select",{value:h,onChange:h=>a(h.target.value),disabled:n,onFocus:()=>v(!0),onBlur:()=>v(!1),style:{...l,cursor:"pointer",appearance:"none",backgroundImage:"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\")",backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",backgroundSize:"16px",paddingRight:40,borderColor:o?"var(--accent)":"var(--border)",boxShadow:o?"0 0 0 4px oklch(50% 0.23 264 / 0.1)":"none",opacity:n?.45:1,...d},children:[i&&(0,e.jsx)("option",{value:"",children:i}),r.map(h=>"string"==typeof h?(0,e.jsx)("option",{value:h,children:h},h):(0,e.jsx)("option",{value:h.value,children:h.label},h.value))]})},"Textarea",0,function({value:h,onChange:a,placeholder:r,rows:i=3,disabled:d}){let[n,o]=(0,t.useState)(!1);return(0,e.jsx)("textarea",{value:h,onChange:h=>a(h.target.value),placeholder:r,rows:i,disabled:d,onFocus:()=>o(!0),onBlur:()=>o(!1),style:{...l,resize:"vertical",borderColor:n?"var(--accent)":"var(--border)",boxShadow:n?"0 0 0 4px oklch(50% 0.23 264 / 0.1)":"none",opacity:d?.45:1}})},"VALIDATORS",0,{required:(h="This field is required")=>({test:h=>h.trim().length>0,message:h}),email:(h="Please enter a valid email")=>({test:h=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h),message:h}),minLength:(h,e)=>({test:e=>e.length>=h,message:e||`Must be at least ${h} characters`}),maxLength:(h,e)=>({test:e=>e.length<=h,message:e||`Must be at most ${h} characters`}),url:(h="Please enter a valid URL")=>({test:h=>!h||/^https?:\/\/.+/.test(h),message:h}),number:(h="Please enter a valid number")=>({test:h=>!h||!isNaN(Number(h)),message:h})},"useFormValidation",0,function(h){let[e,a]=(0,t.useState)(h),[l,i]=(0,t.useState)({}),[d,n]=(0,t.useState)({});return{values:e,errors:l,touched:d,setValue:(h,e)=>{a(t=>({...t,[h]:e})),n(e=>({...e,[h]:!0})),i(e=>{let t={...e};return delete t[h],t})},validateField:(h,t)=>{let a=r(e[h],t);return i(e=>a?{...e,[h]:a}:{...e,[h]:void 0}),!a},validateAll:h=>{let t=!0,a={},l={};for(let[i,d]of Object.entries(h)){l[i]=!0;let h=r(e[i],d);h&&(a[i]=h,t=!1)}return i(a),n(l),t},setValues:a}}])},49793,73208,h=>{"use strict";var e=h.i(43476),t=h.i(71645);let a={US:`<path fill="#bd3d44" d="M0 0h640v480H0"/>
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
  <path fill="#c8102e" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z"/>`};h.s(["Flag",0,function({code:h,size:l=20}){let r,i,d=(0,t.useId)().replace(/[^a-zA-Z0-9]/g,""),n=a[h];if(!n)return null;let o=(r=new Set,n.replace(/(?<![\w-])id="([^"]+)"/g,(h,e)=>(r.add(e),h)),i=n,r.forEach(h=>{let e=RegExp(`(["#])${h}(["')])`,"g");i=i.replace(e,`$1${h}-${d}$2`)}),i);return(0,e.jsx)("svg",{width:l,height:"number"==typeof l?3*l/4:l,viewBox:"0 0 640 480",style:{display:"block",flexShrink:0,borderRadius:2},"aria-label":h,role:"img",dangerouslySetInnerHTML:{__html:o}})}],49793);var l=h.i(41931);h.i(6811);var r=h.i(43739),i=h.i(31106),d=h.i(17935);h.s(["geoService",0,{listGeoRules:async(h={})=>i.serviceConfig.useMock?(await (0,l.apiDelay)(),(0,l.paginateCursor)(d.db.geoRules,h.cursor,h.limit??20)):r.backendClient.geo.list(h),async createGeoRule(h){if(!i.serviceConfig.useMock)return r.backendClient.geo.create(h);await (0,l.apiDelay)();let e={id:(0,l.generateId)(),name:h.name??"New Rule",description:h.description??null,policy:h.policy??"allow_list",territories:h.territories??[],applies_to:h.applies_to??[],created_at:(0,l.now)(),updated_at:(0,l.now)()};return d.db.geoRules.push(e),e},async getGeoRule(h){if(!i.serviceConfig.useMock)return r.backendClient.geo.get(h);await (0,l.apiDelay)();let e=d.db.geoRules.find(e=>e.id===h);if(!e)throw new l.NotFoundError("Geo restriction rule",(0,l.generateId)());return e},async updateGeoRule(h,e){if(!i.serviceConfig.useMock)return r.backendClient.geo.update(h,e);await (0,l.apiDelay)();let t=d.db.geoRules.find(e=>e.id===h);if(!t)throw new l.NotFoundError("Geo restriction rule",(0,l.generateId)());return Object.assign(t,{...e,updated_at:(0,l.now)()}),t},async deleteGeoRule(h){if(!i.serviceConfig.useMock)return r.backendClient.geo.delete(h);await (0,l.apiDelay)();let e=d.db.geoRules.findIndex(e=>e.id===h);if(-1===e)throw new l.NotFoundError("Geo restriction rule",(0,l.generateId)());d.db.geoRules.splice(e,1)},async checkGeoAccess(h,e,t){await (0,l.apiDelay)();let a=d.db.geoRules.find(e=>e.applies_to?.includes(h));return a?"allow_list"===a.policy?{allowed:a.territories.includes(t),rule_id:a.id}:{allowed:!a.territories.includes(t),rule_id:a.id}:{allowed:!0,rule_id:null}}}],73208)},57,h=>{"use strict";var e=h.i(43476),t=h.i(71645),a=h.i(92989),l=h.i(59544),r=h.i(46440),i=h.i(30200),d=h.i(49793),n=h.i(73208);let o=[{code:"US",flag:"🇺🇸",name:"United States"},{code:"GB",flag:"🇬🇧",name:"United Kingdom"},{code:"AU",flag:"🇦🇺",name:"Australia"},{code:"CA",flag:"🇨🇦",name:"Canada"},{code:"IN",flag:"🇮🇳",name:"India"},{code:"DE",flag:"🇩🇪",name:"Germany"},{code:"FR",flag:"🇫🇷",name:"France"},{code:"JP",flag:"🇯🇵",name:"Japan"},{code:"BR",flag:"🇧🇷",name:"Brazil"},{code:"SG",flag:"🇸🇬",name:"Singapore"},{code:"CN",flag:"🇨🇳",name:"China"},{code:"RU",flag:"🇷🇺",name:"Russia"},{code:"IR",flag:"🇮🇷",name:"Iran"},{code:"AT",flag:"🇦🇹",name:"Austria"},{code:"CH",flag:"🇨🇭",name:"Switzerland"},{code:"NZ",flag:"🇳🇿",name:"New Zealand"}];h.s(["default",0,function(){let h=(0,a.useRouter)(),[v,s]=(0,t.useState)({content:"",type:"block_list",regions:[],reason:"",applies:""}),[z,m]=(0,t.useState)(!1),f=async()=>{if(v.content.trim()&&0!==v.regions.length){m(!0);try{await n.geoService.createGeoRule({name:v.content,policy:v.type,territories:v.regions,applies_to:v.applies?[v.applies]:[]}),h.push("/geo")}catch(e){console.error(e),h.push("/geo")}finally{m(!1)}}};return(0,e.jsxs)("div",{className:"page-enter",style:{maxWidth:700,margin:"0 auto",padding:24},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:24},children:[(0,e.jsx)("button",{onClick:()=>h.back(),style:{width:36,height:36,borderRadius:10,border:"1px solid var(--border)",background:"var(--surface)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},onMouseEnter:h=>h.currentTarget.style.background="var(--surface-2)",onMouseLeave:h=>h.currentTarget.style.background="var(--surface)",children:(0,e.jsx)(i.Icon,{name:"chevron-l",size:16,color:"var(--text-2)"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{style:{fontSize:20,fontWeight:800,color:"var(--text-1)",letterSpacing:"-0.02em"},children:"Add Geo Rule"}),(0,e.jsx)("p",{style:{fontSize:13,color:"var(--text-3)"},children:"Configure a new regional restriction"})]}),(0,e.jsxs)("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[(0,e.jsx)(l.Btn,{onClick:()=>h.back(),children:"Cancel"}),(0,e.jsx)(l.Btn,{variant:"primary",iconName:"check",onClick:f,children:"Save Rule"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[(0,e.jsxs)("section",{className:"animate-in",style:{"--i":0,background:"var(--surface)",borderRadius:"var(--radius)",border:"1px solid var(--border)",padding:24,boxShadow:"var(--shadow-sm)"},children:[(0,e.jsx)(r.FormField,{label:"Content Title",required:!0,children:(0,e.jsx)(r.Input,{value:v.content,onChange:h=>s(e=>({...e,content:h})),placeholder:"e.g. Stellar Drift (All Seasons)"})}),(0,e.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"0 16px"},children:[(0,e.jsx)(r.FormField,{label:"Rule Type",children:(0,e.jsx)(r.SelectInput,{value:v.type,onChange:h=>{("allow_list"===h||"block_list"===h)&&s(e=>({...e,type:h}))},options:[{value:"block_list",label:"Blocklist (Block selected regions)"},{value:"allow_list",label:"Allowlist (Allow only selected regions)"}]})}),(0,e.jsx)(r.FormField,{label:"Reason",children:(0,e.jsx)(r.Input,{value:v.reason,onChange:h=>s(e=>({...e,reason:h})),placeholder:"e.g. Licensing agreement"})})]})]}),(0,e.jsxs)("section",{className:"animate-in",style:{"--i":1,background:"var(--surface)",borderRadius:"var(--radius)",border:"1px solid var(--border)",padding:24,boxShadow:"var(--shadow-sm)"},children:[(0,e.jsxs)("h2",{style:{fontSize:14,fontWeight:700,color:"var(--text-1)",marginBottom:6,display:"flex",alignItems:"center",gap:8},children:[(0,e.jsx)(i.Icon,{name:"globe",size:15,color:"var(--accent)"})," Select Regions"]}),(0,e.jsx)("p",{style:{fontSize:12,color:"var(--text-3)",marginBottom:16},children:0===v.regions.length?"No regions selected":`${v.regions.length} region${1!==v.regions.length?"s":""} selected`}),(0,e.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:10},children:o.map(h=>{let t=v.regions.includes(h.code);return(0,e.jsxs)("div",{onClick:()=>{let e;return e=h.code,s(h=>({...h,regions:h.regions.includes(e)?h.regions.filter(h=>h!==e):[...h.regions,e]}))},style:{display:"flex",alignItems:"center",gap:8,padding:"10px 12px",borderRadius:10,border:`1.5px solid ${t?"var(--accent)":"var(--border)"}`,background:t?"var(--accent-dim)":"var(--surface-2)",cursor:"pointer",transition:"all 0.14s"},children:[(0,e.jsx)(d.Flag,{code:h.code}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:12,fontWeight:700,color:t?"var(--accent)":"var(--text-1)"},children:h.code}),(0,e.jsx)("div",{style:{fontSize:10,color:"var(--text-3)"},children:h.name})]})]},h.code)})})]})]})]})}])}]);