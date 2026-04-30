import{r as s,j as n}from"./iframe-DhcvLxQg.js";import{M as _e,i as U,u as ve,P as Ce,a as Se,b as je,L as Re,h as Ie,c as Le,p as Te,m as E}from"./proxy-C9ybu4Xe.js";import"./preload-helper-Dp1pzeXC.js";function J(e,a){if(typeof e=="function")return e(a);e!=null&&(e.current=a)}function be(...e){return a=>{let t=!1;const r=e.map(i=>{const l=J(i,a);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let i=0;i<r.length;i++){const l=r[i];typeof l=="function"?l():J(e[i],null)}}}}function Ee(...e){return s.useCallback(be(...e),e)}class ke extends s.Component{getSnapshotBeforeUpdate(a){const t=this.props.childRef.current;if(U(t)&&a.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=t.offsetParent,i=U(r)&&r.offsetWidth||0,l=U(r)&&r.offsetHeight||0,d=getComputedStyle(t),o=this.props.sizeRef.current;o.height=parseFloat(d.height),o.width=parseFloat(d.width),o.top=t.offsetTop,o.left=t.offsetLeft,o.right=i-o.width-o.left,o.bottom=l-o.height-o.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Ne({children:e,isPresent:a,anchorX:t,anchorY:r,root:i,pop:l}){var p;const d=s.useId(),o=s.useRef(null),x=s.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:C}=s.useContext(_e),u=((p=e.props)==null?void 0:p.ref)??(e==null?void 0:e.ref),v=Ee(o,u);return s.useInsertionEffect(()=>{const{width:f,height:y,top:j,left:w,right:R,bottom:T}=x.current;if(a||l===!1||!o.current||!f||!y)return;const L=t==="left"?`left: ${w}`:`right: ${R}`,S=r==="bottom"?`bottom: ${T}`:`top: ${j}`;o.current.dataset.motionPopId=d;const g=document.createElement("style");C&&(g.nonce=C);const h=i??document.head;return h.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${y}px !important;
            ${L}px !important;
            ${S}px !important;
          }
        `),()=>{var I;(I=o.current)==null||I.removeAttribute("data-motion-pop-id"),h.contains(g)&&h.removeChild(g)}},[a]),n.jsx(ke,{isPresent:a,childRef:o,sizeRef:x,pop:l,children:l===!1?e:s.cloneElement(e,{ref:v})})}const We=({children:e,initial:a,isPresent:t,onExitComplete:r,custom:i,presenceAffectsLayout:l,mode:d,anchorX:o,anchorY:x,root:C})=>{const u=ve(Me),v=s.useId();let p=!0,f=s.useMemo(()=>(p=!1,{id:v,initial:a,isPresent:t,custom:i,onExitComplete:y=>{u.set(y,!0);for(const j of u.values())if(!j)return;r&&r()},register:y=>(u.set(y,!1),()=>u.delete(y))}),[t,u,r]);return l&&p&&(f={...f}),s.useMemo(()=>{u.forEach((y,j)=>u.set(j,!1))},[t]),s.useEffect(()=>{!t&&!u.size&&r&&r()},[t]),e=n.jsx(Ne,{pop:d==="popLayout",isPresent:t,anchorX:o,anchorY:x,root:C,children:e}),n.jsx(Ce.Provider,{value:f,children:e})};function Me(){return new Map}const W=e=>e.key||"";function X(e){const a=[];return s.Children.forEach(e,t=>{s.isValidElement(t)&&a.push(t)}),a}const ze=({children:e,custom:a,initial:t=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:l="sync",propagate:d=!1,anchorX:o="left",anchorY:x="top",root:C})=>{const[u,v]=Se(d),p=s.useMemo(()=>X(e),[e]),f=d&&!u?[]:p.map(W),y=s.useRef(!0),j=s.useRef(p),w=ve(()=>new Map),R=s.useRef(new Set),[T,L]=s.useState(p),[S,g]=s.useState(p);je(()=>{y.current=!1,j.current=p;for(let _=0;_<S.length;_++){const m=W(S[_]);f.includes(m)?(w.delete(m),R.current.delete(m)):w.get(m)!==!0&&w.set(m,!1)}},[S,f.length,f.join("-")]);const h=[];if(p!==T){let _=[...p];for(let m=0;m<S.length;m++){const b=S[m],O=W(b);f.includes(O)||(_.splice(m,0,b),h.push(b))}return l==="wait"&&h.length&&(_=h),g(X(_)),L(p),null}const{forceRender:I}=s.useContext(Re);return n.jsx(n.Fragment,{children:S.map(_=>{const m=W(_),b=d&&!u?!1:p===S||f.includes(m),O=()=>{if(R.current.has(m))return;if(w.has(m))R.current.add(m),w.set(m,!0);else return;let K=!0;w.forEach(we=>{we||(K=!1)}),K&&(I==null||I(),g(j.current),d&&(v==null||v()),r&&r())};return n.jsx(We,{isPresent:b,initial:!y.current||t?void 0:!1,custom:a,presenceAffectsLayout:i,mode:l,root:C,onExitComplete:b?void 0:O,anchorX:o,anchorY:x,children:_},m)})})};function Be(){!Ie.current&&Le();const[e]=s.useState(Te.current);return e}function H({direction:e="down",className:a}){return n.jsx("svg",{className:a,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:e==="down"?"rotate(180deg)":void 0},"aria-hidden":"true",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.4543 9.70893C11.3727 9.88633 11.1953 10 11 10H5.00001C4.80474 10 4.62734 9.88633 4.54575 9.70893C4.46416 9.53153 4.4933 9.32286 4.62038 9.1746L7.62038 5.6746C7.71537 5.56378 7.85404 5.5 8.00001 5.5C8.14597 5.5 8.28464 5.56378 8.37964 5.6746L11.3796 9.1746C11.5067 9.32286 11.5359 9.53153 11.4543 9.70893Z",fill:"currentColor"})})}H.__docgenInfo={description:"",methods:[],displayName:"TicketArrow",props:{direction:{defaultValue:{value:"'down'",computed:!1},required:!1}}};const Pe="_tk_izw8y_1",$e="_isLoaded_izw8y_16",Ae="_directionUp_izw8y_20",Ve="_measure_izw8y_24",qe="_loadingInner_izw8y_34",De="_loadedInner_izw8y_35",Oe="_valueWrap_izw8y_56",Ue="_iconWrap_izw8y_67",Fe="_arrowWrap_izw8y_68",He="_iconBoxLoading_izw8y_77",Ke="_iconBoxLoaded_izw8y_86",Je="_arrow_izw8y_68",Xe="_value_izw8y_56",Ge="_valueChar_izw8y_107",Ye="_digit_izw8y_114",Ze="_staticChar_izw8y_115",Qe="_isPulse_izw8y_157",c={tk:Pe,isLoaded:$e,directionUp:Ae,measure:Ve,loadingInner:qe,loadedInner:De,valueWrap:Oe,iconWrap:Ue,arrowWrap:Fe,iconBoxLoading:He,iconBoxLoaded:Ke,arrow:Je,value:Xe,valueChar:Ge,digit:Ye,staticChar:Ze,isPulse:Qe};function q({state:e,src:a,alt:t=""}){return e==="loading"?n.jsx("span",{className:c.iconBoxLoading,"data-shimmer":!0,"aria-hidden":"true"}):n.jsx("span",{className:c.iconBoxLoaded,role:a?"img":"presentation","aria-label":a?t:void 0,style:a?{backgroundImage:`url("${a}")`}:void 0})}q.__docgenInfo={description:"",methods:[],displayName:"TicketIcon",props:{alt:{defaultValue:{value:"''",computed:!1},required:!1}}};function et({baseInterval:e,jitter:a,initialDelay:t}){const[r,i]=s.useState(()=>Math.floor(Math.random()*10));return s.useEffect(()=>{if(!e)return;let l;const d=o=>{l=setTimeout(()=>{i(C=>{let u=Math.floor(Math.random()*10);return u===C&&(u=(u+1)%10),u});const x=e+(Math.random()*2-1)*a;d(Math.max(120,x))},o)};return d(t),()=>clearTimeout(l)},[e,a,t]),r}function tt({baseInterval:e,jitter:a,initialDelay:t}){const r=et({baseInterval:e,jitter:a,initialDelay:t});return n.jsx("span",{className:c.digit,"data-shimmer":!0,children:r})}function nt({template:e="00,00%",baseInterval:a=800,jitter:t=300}){const r=s.useMemo(()=>Array.from(e),[e]);let i=0;return r.map((l,d)=>{if(/\d/.test(l)){const o=i++;return n.jsx(tt,{baseInterval:a,jitter:t,initialDelay:o*90},d)}return n.jsx("span",{className:c.staticChar,"data-shimmer":!0,children:l},d)})}const G=.1;let F=null;function at(e,a=[]){s.useEffect(()=>{const t=e.current;if(!t)return;const r=()=>{const d=t.offsetWidth;if(!d)return;F===null&&(F=Date.now());const o=2*d,x=Math.round(o/G),C=(Date.now()-F)*G%o,u=-Math.round(C/o*x);t.style.setProperty("--shimmer-pw",d+"px"),t.style.setProperty("--shimmer-dur",x+"ms"),t.style.setProperty("--shimmer-delay",u+"ms");const v=t.getBoundingClientRect();t.querySelectorAll("[data-shimmer]").forEach(p=>{const f=p.getBoundingClientRect().left-v.left;p.style.setProperty("--shimmer-sx",f+"px")})};r();const i=new ResizeObserver(r);i.observe(t);const l=new MutationObserver(r);return l.observe(t,{childList:!0,subtree:!0}),()=>{i.disconnect(),l.disconnect()}},a)}const Y=(...e)=>e.filter(Boolean).join(" "),k=[.2,.7,.2,1];function N({state:e="loading",value:a="0,00%",direction:t="down",iconSrc:r,pulse:i=!1,widthDur:l=220,fadeDur:d=180,charStagger:o=20,blurAmt:x=4,digitInterval:C=800,digitJitter:u=300,onLoaded:v}){const p=Be(),f=s.useRef(null),y=s.useRef(null),j=s.useRef(null),[w,R]=s.useState(null),T=s.useRef(e);at(j,[e]),s.useLayoutEffect(()=>{const g=T.current;if(T.current=e,g===e||e!=="loaded")return;const h=f.current,I=y.current;if(!h||!I)return;const _=h.getBoundingClientRect().width,m=I.getBoundingClientRect().width;Math.abs(_-m)<.5||(R(_),requestAnimationFrame(()=>R(m)))},[e]),s.useEffect(()=>{if(w==null)return;const g=setTimeout(()=>R(null),l+30);return()=>clearTimeout(g)},[w,l]);const L={"--tk-width-dur":`${l}ms`,"--tk-fade-dur":`${d}ms`,"--tk-char-stagger":`${o}ms`,"--tk-blur":`${x}px`};w!=null&&(L.width=`${w}px`);const S=Array.from(a);return n.jsxs(n.Fragment,{children:[n.jsx("span",{ref:f,className:Y(c.tk,e==="loading"?c.isLoading:c.isLoaded,t==="up"&&c.directionUp,i&&e==="loaded"&&c.isPulse),style:L,"data-state":e,children:n.jsx(ze,{mode:"popLayout",initial:!1,children:e==="loading"?n.jsxs(E.span,{ref:j,className:c.loadingInner,initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:{duration:d/1e3,ease:k},children:[n.jsx(q,{state:"loading"}),n.jsx("span",{className:c.valueWrap,children:n.jsx(nt,{template:"00,00%",baseInterval:p?0:C,jitter:u})})]},"loading"):n.jsxs(E.span,{className:c.loadedInner,initial:{opacity:0},animate:{opacity:1},transition:{duration:d/1e3,ease:k,delay:.12},onAnimationComplete:()=>v==null?void 0:v(),children:[n.jsx(E.span,{className:c.iconWrap,initial:{opacity:0,scale:.7},animate:{opacity:1,scale:1},transition:{duration:d/1e3,ease:k,delay:.12},children:n.jsx(q,{state:"loaded",src:r,alt:""})}),n.jsxs("span",{className:c.valueWrap,children:[n.jsx(E.span,{className:c.arrowWrap,initial:{opacity:0,x:-2},animate:{opacity:1,x:0},transition:{duration:d/1e3,ease:k,delay:.16},children:n.jsx(H,{direction:t,className:c.arrow})}),n.jsx("span",{className:c.value,children:S.map((g,h)=>n.jsx(E.span,{className:c.valueChar,initial:p?{opacity:0}:{opacity:0,filter:`blur(${x}px)`,y:2},animate:p?{opacity:1}:{opacity:1,filter:"blur(0px)",y:0},transition:{duration:d/1e3,ease:k,delay:.18+h*(o/1e3)},children:g},`${a}-${h}`))})]})]},"loaded")})}),n.jsx("span",{ref:y,"aria-hidden":"true",className:Y(c.tk,c.measure,c.isLoaded,t==="up"&&c.directionUp),style:L,children:n.jsxs("span",{className:c.loadedInner,children:[n.jsx("span",{className:c.iconWrap,children:n.jsx(q,{state:"loaded",src:r,alt:""})}),n.jsxs("span",{className:c.valueWrap,children:[n.jsx("span",{className:c.arrowWrap,children:n.jsx(H,{direction:t,className:c.arrow})}),n.jsx("span",{className:c.value,children:S.map((g,h)=>n.jsx("span",{className:c.valueChar,children:g},h))})]})]})})]})}N.__docgenInfo={description:"",methods:[],displayName:"TicketWidget",props:{state:{defaultValue:{value:"'loading'",computed:!1},required:!1},value:{defaultValue:{value:"'0,00%'",computed:!1},required:!1},direction:{defaultValue:{value:"'down'",computed:!1},required:!1},pulse:{defaultValue:{value:"false",computed:!1},required:!1},widthDur:{defaultValue:{value:"220",computed:!1},required:!1},fadeDur:{defaultValue:{value:"180",computed:!1},required:!1},charStagger:{defaultValue:{value:"20",computed:!1},required:!1},blurAmt:{defaultValue:{value:"4",computed:!1},required:!1},digitInterval:{defaultValue:{value:"800",computed:!1},required:!1},digitJitter:{defaultValue:{value:"300",computed:!1},required:!1}}};const ut={title:"Components/TicketWidget",component:N,parameters:{layout:"centered"},argTypes:{state:{control:"select",options:["loading","loaded"]},direction:{control:"select",options:["down","up"]},value:{control:"text"},pulse:{control:"boolean"},widthDur:{control:{type:"range",min:80,max:600,step:10}},fadeDur:{control:{type:"range",min:80,max:600,step:10}},charStagger:{control:{type:"range",min:0,max:80,step:5}},blurAmt:{control:{type:"range",min:0,max:12,step:1}},digitInterval:{control:{type:"range",min:200,max:1500,step:50}},digitJitter:{control:{type:"range",min:0,max:600,step:50}}},args:{state:"loading",value:"10,09%",direction:"down",pulse:!1,widthDur:220,fadeDur:180,charStagger:20,blurAmt:4,digitInterval:800,digitJitter:300}},M={args:{state:"loading"}},z={name:"Loaded — Down",args:{state:"loaded",direction:"down",value:"10,09%"}},B={name:"Loaded — Up",args:{state:"loaded",direction:"up",value:"10,09%"}},P={name:"Transition (click Load)",args:{state:"loading"},render:e=>{const[a,t]=s.useState("loading");return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"center"},children:[n.jsx(N,{...e,state:a}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{onClick:()=>t("loading"),children:"Reset"}),n.jsx("button",{onClick:()=>t("loaded"),children:"Load now"})]})]})}},$={args:{state:"loading"},render:e=>{const[a,t]=s.useState("loading");return s.useEffect(()=>{const r=setInterval(()=>{t(i=>i==="loading"?"loaded":"loading")},2500);return()=>clearInterval(r)},[]),n.jsx(N,{...e,state:a})}};function D(e,a){const t=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="${e}"/><text x="8" y="11" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="6" font-weight="700" fill="white">${a}</text></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(t)}`}const rt=D("#1F66B0","СКФ"),st=D("#0B335E","С"),ot=D("#00B0E5","Н"),it=D("#0079C2","В"),A={name:"Inline in text",args:{state:"loaded"},render:e=>{const[a,t]=s.useState("loading");s.useEffect(()=>{const i=setTimeout(()=>t("loaded"),1200);return()=>clearTimeout(i)},[]);const r=i=>n.jsx(N,{...e,...i,state:a});return n.jsxs("div",{style:{maxWidth:720,padding:24,fontFamily:"'SB Sans Text', system-ui, sans-serif"},children:[n.jsxs("ul",{style:{listStyle:"disc",paddingLeft:24,fontFamily:"var(--font-text-m-regular-family)",fontSize:"var(--font-text-m-regular-size)",fontWeight:"var(--font-text-m-regular-weight)",lineHeight:"var(--font-text-m-regular-line-height)",letterSpacing:"var(--font-text-m-regular-letter-spacing)",color:"var(--color-text-standard-general-primary)",margin:0},children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Лидеры роста:"})," Совкомфлот"," ",r({direction:"up",value:"3,01%",iconSrc:rt})," ","восстановил объёмы перевозок, а Северсталь"," ",r({direction:"up",value:"2,65%",iconSrc:st})," ","выигрывает от стабилизации цен на сталь."]}),n.jsxs("li",{style:{marginTop:16},children:[n.jsx("strong",{children:"Лидеры падения:"})," Новатэк"," ",r({direction:"down",value:"2,32%",iconSrc:ot})," ","упал на фоне коррекции в нефтегазовом секторе. ВТБ"," ",r({direction:"down",value:"2,12%",iconSrc:it})," ","под давлением после публикации отчета."," ",n.jsx("span",{style:{color:"var(--color-text-standard-general-tertiary)"},children:"sbercib.ru +3"})]})]}),n.jsx("button",{style:{marginTop:24},onClick:()=>t(a==="loading"?"loaded":"loading"),children:"Toggle state"})]})}},V={name:"Reduced motion",parameters:{docs:{description:{story:"Эмуляция `prefers-reduced-motion: reduce`. Шиммер заменён на пульс opacity, blur по символам выключен."}}},args:{state:"loading"},decorators:[e=>n.jsxs("div",{children:[n.jsx("style",{children:`
          * { animation-duration: 0.001ms !important; }
          @media (prefers-reduced-motion: no-preference) {
            * { animation-duration: revert !important; }
          }
        `}),n.jsx(e,{})]})]};var Z,Q,ee;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    state: 'loading'
  }
}`,...(ee=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,ne,ae;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Loaded — Down',
  args: {
    state: 'loaded',
    direction: 'down',
    value: '10,09%'
  }
}`,...(ae=(ne=z.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,se,oe;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Loaded — Up',
  args: {
    state: 'loaded',
    direction: 'up',
    value: '10,09%'
  }
}`,...(oe=(se=B.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,de;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Transition (click Load)',
  args: {
    state: 'loading'
  },
  render: args => {
    const [state, setState] = useState('loading');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center'
    }}>
        <TicketWidget {...args} state={state} />
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <button onClick={() => setState('loading')}>Reset</button>
          <button onClick={() => setState('loaded')}>Load now</button>
        </div>
      </div>;
  }
}`,...(de=(le=P.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,pe;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    state: 'loading'
  },
  render: args => {
    const [state, setState] = useState('loading');
    useEffect(() => {
      const id = setInterval(() => {
        setState(prev => prev === 'loading' ? 'loaded' : 'loading');
      }, 2500);
      return () => clearInterval(id);
    }, []);
    return <TicketWidget {...args} state={state} />;
  }
}`,...(pe=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,fe,ge;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Inline in text',
  args: {
    state: 'loaded'
  },
  render: args => {
    const [state, setState] = useState('loading');
    useEffect(() => {
      const id = setTimeout(() => setState('loaded'), 1200);
      return () => clearTimeout(id);
    }, []);
    const tw = props => <TicketWidget {...args} {...props} state={state} />;
    return <div style={{
      maxWidth: 720,
      padding: 24,
      fontFamily: "'SB Sans Text', system-ui, sans-serif"
    }}>
        <ul style={{
        listStyle: 'disc',
        paddingLeft: 24,
        fontFamily: 'var(--font-text-m-regular-family)',
        fontSize: 'var(--font-text-m-regular-size)',
        fontWeight: 'var(--font-text-m-regular-weight)',
        lineHeight: 'var(--font-text-m-regular-line-height)',
        letterSpacing: 'var(--font-text-m-regular-letter-spacing)',
        color: 'var(--color-text-standard-general-primary)',
        margin: 0
      }}>
          <li>
            <strong>Лидеры роста:</strong> Совкомфлот{' '}
            {tw({
            direction: 'up',
            value: '3,01%',
            iconSrc: ICON_SKF
          })}
            {' '}восстановил объёмы перевозок, а Северсталь{' '}
            {tw({
            direction: 'up',
            value: '2,65%',
            iconSrc: ICON_SEVERSTAL
          })}
            {' '}выигрывает от стабилизации цен на сталь.
          </li>
          <li style={{
          marginTop: 16
        }}>
            <strong>Лидеры падения:</strong> Новатэк{' '}
            {tw({
            direction: 'down',
            value: '2,32%',
            iconSrc: ICON_NOVATEK
          })}
            {' '}упал на фоне коррекции в нефтегазовом секторе. ВТБ{' '}
            {tw({
            direction: 'down',
            value: '2,12%',
            iconSrc: ICON_VTB
          })}
            {' '}под давлением после публикации отчета.{' '}
            <span style={{
            color: 'var(--color-text-standard-general-tertiary)'
          }}>sbercib.ru +3</span>
          </li>
        </ul>
        <button style={{
        marginTop: 24
      }} onClick={() => setState(state === 'loading' ? 'loaded' : 'loading')}>
          Toggle state
        </button>
      </div>;
  }
}`,...(ge=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,xe,ye;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Reduced motion',
  parameters: {
    docs: {
      description: {
        story: 'Эмуляция \`prefers-reduced-motion: reduce\`. Шиммер заменён на пульс opacity, blur по символам выключен.'
      }
    }
  },
  args: {
    state: 'loading'
  },
  decorators: [Story => <div>
        <style>{\`
          * { animation-duration: 0.001ms !important; }
          @media (prefers-reduced-motion: no-preference) {
            * { animation-duration: revert !important; }
          }
        \`}</style>
        <Story />
      </div>]
}`,...(ye=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};const pt=["Loading","LoadedDown","LoadedUp","Transition","AutoLoop","InlineInText","ReducedMotion"];export{$ as AutoLoop,A as InlineInText,z as LoadedDown,B as LoadedUp,M as Loading,V as ReducedMotion,P as Transition,pt as __namedExportsOrder,ut as default};
