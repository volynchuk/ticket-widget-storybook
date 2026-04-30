import{j as a}from"./iframe-DhcvLxQg.js";import{m as k}from"./proxy-C9ybu4Xe.js";import"./preload-helper-Dp1pzeXC.js";const j="_button_tkdk4_1",B="_round_tkdk4_13",y="_rounded_tkdk4_14",V="_disabled_tkdk4_24",n={button:j,round:B,rounded:y,disabled:V};function R({disabled:d=!1,shape:t="round",radius:C="m",onClick:v}){const S=t==="rounded"?{borderRadius:`var(--cornerRadius-${C})`}:void 0;return a.jsx(k.button,{className:[n.button,n[t],d&&n.disabled].filter(Boolean).join(" "),style:S,onClick:v,disabled:d,whileTap:d?{}:{scale:.92},children:a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.77 4.36C12.59 4.14 12.31 4 12 4C11.69 4 11.41 4.14 11.23 4.36C11.2 4.38 11.1799 4.39999 11.1499 4.42999L6.29006 9.28999C5.90006 9.67999 5.90006 10.31 6.29006 10.7C6.68006 11.09 7.31998 11.09 7.70998 10.7L11 7.41V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19V7.41L16.2901 10.7C16.6801 11.09 17.32 11.09 17.71 10.7C18.1 10.31 18.1 9.67999 17.71 9.28999L12.8501 4.42999C12.8201 4.39999 12.8 4.38 12.77 4.36Z",fill:"currentColor"})})})}R.__docgenInfo={description:"",methods:[],displayName:"SendButton",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},shape:{defaultValue:{value:"'round'",computed:!1},required:!1},radius:{defaultValue:{value:"'m'",computed:!1},required:!1}}};const w={title:"Components/SendButton",component:R,argTypes:{shape:{control:"radio",options:["round","rounded"]},disabled:{control:"boolean"},radius:{control:"select",options:["4xs","3xs","2xs","xs","s","m","l","xl","2xl","3xl","4xl"],if:{arg:"shape",eq:"rounded"}}}},e={args:{shape:"round",radius:"xs"}},s={args:{shape:"rounded",radius:"m"}},r={args:{shape:"round",disabled:!0}},o={args:{shape:"rounded",radius:"m",disabled:!0}};var u,l,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    shape: "round",
    radius: "xs"
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    shape: 'rounded',
    radius: 'm'
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,b,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    shape: 'round',
    disabled: true
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,g,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    shape: 'rounded',
    radius: 'm',
    disabled: true
  }
}`,...(_=(g=o.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const E=["Round","Rounded","RoundDisabled","RoundedDisabled"];export{e as Round,r as RoundDisabled,s as Rounded,o as RoundedDisabled,E as __namedExportsOrder,w as default};
