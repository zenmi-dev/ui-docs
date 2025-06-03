import{u as j,r as s,a as S,b as L,d as b,e as M,j as c,c as I}from"./index-BxNjqtL4.js";import{C as O}from"./Component-hE3veHPf.js";import{u as k,d as z,r as D}from"./index-g8xl49SH.js";import"./prism-tsx-1T5e5G53.js";function H({onChangeOpen:f,...u}){const d=j(),i=s.useRef(null),[t,y]=k(u.ref),[m,o]=z(void 0,f),[p,x]=s.useState(!m),[v,w]=s.useState({}),[h,E]=s.useState([0,0]);s.useEffect(()=>{t.current&&(i.current=t.current.parentElement)},[]),s.useEffect(()=>{if(!i.current)return;const r=n=>{n.preventDefault(),o(!0),E([n.clientX,n.clientY])};return i.current.addEventListener("contextmenu",r),()=>{var n;return(n=i.current)==null?void 0:n.removeEventListener("contextmenu",r)}},[]),s.useEffect(()=>{if(m)t.current&&t.current.classList.remove("ui-context-menu-close"),x(!1);else if(t.current){const r=()=>x(!0);return t.current.classList.add("ui-context-menu-close"),t.current.addEventListener("animationend",r),()=>{var n;return(n=t.current)==null?void 0:n.removeEventListener("animationend",r)}}},[m]),s.useEffect(()=>{!d&&!p&&R()},[d,p,h]);const R=S(()=>{if(!i.current||!t.current){o(!1);return}const r=i.current.getBoundingClientRect();if(!r.height&&!r.width){o(!1);return}const[n,C]=h,{height:l,width:a}=t.current.getBoundingClientRect(),e={top:C,left:n};e.top+l>window.innerHeight&&(e.top=C-l),e.left+a>window.innerWidth&&(e.left=n-a),e.top+l>window.innerHeight&&(e.top=window.innerHeight-l),e.top<0&&(e.top=0),e.left+a>window.innerWidth&&(e.left=window.innerWidth-a),e.left<0&&(e.left=0),w(e)});return L("resize",()=>o(!1)),b(i,()=>o(!1)),M(t,()=>o(!1)),d?c.jsx("div",{ref:t,hidden:!0}):!p&&D.createPortal(c.jsx("div",{...u,className:I("ui-context-menu",u.className),style:{...v,...u.style},ref:y,children:u.children}),document.body)}const g="ContextMenu",P=[{name:g,wraps:"div",props:[{prop:"onChangeOpen",type:"(open: boolean) => any"}]}],W=`
import { ContextMenu } from '@zenmi/ui'

export function Example() {
  const style: React.CSSProperties = {
    height: 200,
    width: '100%',
    border: '1px dashed gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <div style={style}>
      Right click me
      <ContextMenu>Content</ContextMenu>
    </div>
  )
}
`;function B(){const f={height:200,border:"1px solid lightgray",display:"flex",alignItems:"center",justifyContent:"center"};return c.jsxs("div",{style:f,children:["Right click me",c.jsx(H,{children:"Content"})]})}function X(){return c.jsx(O,{title:g,examples:[{code:W,element:c.jsx(B,{})}],apiItems:P})}export{X as default};
