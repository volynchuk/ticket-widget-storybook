import{j as r}from"./iframe-DhcvLxQg.js";import{m as T}from"./proxy-C9ybu4Xe.js";import"./preload-helper-Dp1pzeXC.js";const w="_button_1iaos_1",O="_primary_1iaos_18",R="_secondary_1iaos_25",U="_ghost_1iaos_33",k="_small_1iaos_41",C="_large_1iaos_47",F="_disabled_1iaos_53",e={button:w,primary:O,secondary:R,ghost:U,small:k,large:C,disabled:F};function a({children:E,variant:L="primary",size:d="medium",disabled:m=!1,onClick:N}){return r.jsx(T.button,{className:[e.button,e[L],d!=="medium"&&e[d],m&&e.disabled].filter(Boolean).join(" "),onClick:N,disabled:m,whileTap:{scale:.97},children:E})}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const M={title:"UI/Button",component:a,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["primary","secondary","ghost"]},size:{control:"select",options:["small","medium","large"]}}},s={args:{children:"Кнопка",variant:"primary"}},o={args:{children:"Кнопка",variant:"secondary"}},t={args:{children:"Кнопка",variant:"ghost"}},n={args:{children:"Маленькая",size:"small"}},i={args:{children:"Большая",size:"large"}},c={args:{children:"Недоступна",disabled:!0}},l={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"ghost",children:"Ghost"})]})};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Кнопка',
    variant: 'primary'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,h,_;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Кнопка',
    variant: 'secondary'
  }
}`,...(_=(h=o.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var v,f,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Кнопка',
    variant: 'ghost'
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,x,B;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Маленькая',
    size: 'small'
  }
}`,...(B=(x=n.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var j,z,V;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Большая',
    size: 'large'
  }
}`,...(V=(z=i.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var G,I,P;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Недоступна',
    disabled: true
  }
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var q,A,D;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Q=["Primary","Secondary","Ghost","Small","Large","Disabled","AllVariants"];export{l as AllVariants,c as Disabled,t as Ghost,i as Large,s as Primary,o as Secondary,n as Small,Q as __namedExportsOrder,M as default};
