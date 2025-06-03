import{r as i,j as t,u as I,a as $,c as R}from"./index-BxNjqtL4.js";import{C as w}from"./Component-hE3veHPf.js";import{B}from"./index-DLm9UXe5.js";import{r as k,I as T}from"./index-g8xl49SH.js";import"./prism-tsx-1T5e5G53.js";function L({ref:f,position:c="top-right",...l}){const m=I(),p=i.useRef(null),d=i.useRef({}),o=i.useRef([]),[u,y]=i.useState([]),[E,g]=i.useState(0),[v,j]=i.useState(!1);i.useEffect(()=>{u.length||j(!1)},[u]),i.useEffect(()=>{N()},[E,v]);const N=$(()=>{if(!p.current)return;p.current.removeAttribute("style");for(let r=0;r<o.current.length;r++){const s=d.current[o.current[r]];s&&(s.style.removeProperty("transform"),s.style.removeProperty("opacity"))}const e=c.includes("top")?"top":"bottom";let n=0;if(v)for(let r=0;r<o.current.length;r++){const s=d.current[o.current[r]];if(s){s.style[e]=`${n}px`;const{height:a}=s.getBoundingClientRect();n+=a+12}}else for(let r=0;r<o.current.length;r++){const s=d.current[o.current[r]];if(s)if(r===0){const{height:a}=s.getBoundingClientRect();n=a,s.style[e]="0px"}else r<3?(s.style[e]=`${6*r}px`,s.style.transform=`scale(${1-.025*r})`,n+=6):(s.style[e]="0px",s.style.opacity="0")}n&&(p.current.style.height=`${n}px`)}),b=e=>{const n=o.current.length?o.current[0]+1:0;o.current.unshift(n);const r={id:n,...e};y(a=>[...a,r]),g(a=>a+1);const{duration:s=5e3}=e;return s&&window.setTimeout(()=>h(n),s),n},h=e=>{const n=d.current[e];if(n&&!n.classList.contains("ui-toast-close")){const r=()=>y(s=>s.filter(a=>a.id!==e));n.classList.add("ui-toast-close"),n.addEventListener("animationend",r),o.current=o.current.filter(s=>s!==e),g(s=>s+1)}},C=()=>{for(let e in Object.keys(d.current))h(Number(e))};return i.useImperativeHandle(f,()=>({el:p.current,open:b,close:h,clear:C})),!m&&!!(u!=null&&u.length)&&k.createPortal(t.jsx("div",{...l,className:R("ui-toast",{[`ui-toast-${c}`]:c},l.className),ref:p,onMouseEnter:e=>{var n;j(!0),(n=l.onMouseEnter)==null||n.call(l,e)},onMouseLeave:e=>{var n;j(!1),(n=l.onMouseLeave)==null||n.call(l,e)},children:u==null?void 0:u.map(e=>t.jsxs("div",{className:R("ui-toast-item",{[`ui-toast-${e.type}`]:e.type}),ref:n=>{d.current[e.id]=n,n||delete d.current[e.id]},children:[e.type&&t.jsx(T,{className:"ui-toast-icon",children:{info:"info",success:"check_circle",error:"cancel",warning:"error",loading:"progress_activity"}[e.type]}),t.jsxs("div",{className:"ui-toast-content",children:[t.jsxs("div",{className:"ui-toast-title",children:[t.jsx("span",{children:e.title}),t.jsx(T,{className:"ui-toast-icon",onClick:()=>h(e.id),children:"close"})]}),t.jsx("div",{className:"ui-toast-description",children:e.description})]})]},e.id))}),document.body)}const M=f=>{const c=i.useRef(null);return[i.useMemo(()=>({open:m=>c.current.open(m),close:m=>c.current.close(m),clear:()=>c.current.clear()}),[]),t.jsx(L,{ref:c,...f})]},x="Toast",P=[{name:`use${x}`,description:t.jsx("pre",{children:t.jsx("ul",{children:t.jsx("li",{children:`
function useToast(options?: {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}): [Toast.API, React.ReactNode]`.trim()})})})},{name:`${x}.API`,description:t.jsx("pre",{children:t.jsxs("ul",{children:[t.jsx("li",{children:"open(options: Toast.Options): number"}),t.jsx("li",{children:"close(id: number): void"})]})})},{name:`${x}.Options`,description:t.jsx("pre",{children:t.jsxs("ul",{children:[t.jsx("li",{children:"type?: 'info' | 'success' | 'error' | 'warning' | 'loading'"}),t.jsx("li",{children:"title?: React.ReactNode"}),t.jsx("li",{children:"description?: React.ReactNode"}),t.jsx("li",{children:"duration?: number"})]})})}],S=`
import { Button, useToast } from '@zenmi/ui'

function Example() {
  const [toast, element] = useToast()

  return (
    <>
      {element}
      <Button
        onClick={() => {
          toast.open({ type: 'info', title: 'Toast', description: 'Description' })
        }}
      >
        Show Toast
      </Button>
    </>
  )
}
`;function A(){const[f,c]=M({position:"top-right"});return t.jsxs(t.Fragment,{children:[c,t.jsx(B,{onClick:()=>{f.open({type:"info",title:"Toast",description:"Description"})},children:"Show Toast"})]})}function z(){return t.jsx(w,{title:x,examples:[{code:S,element:t.jsx(A,{}),center:!0}],apiItems:P})}export{z as default};
