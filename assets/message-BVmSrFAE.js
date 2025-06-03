import{r as n,j as e,u as h,c as M}from"./index-BxNjqtL4.js";import{C as y}from"./Component-hE3veHPf.js";import{B as R}from"./index-DLm9UXe5.js";import{r as w,I as v}from"./index-g8xl49SH.js";import"./prism-tsx-1T5e5G53.js";function E({ref:r,position:s="top",...a}){const l=h(),t=n.useRef(null),[o,u]=n.useState(null),[g,x]=n.useState(0),m=n.useRef(0),f=c=>{window.clearTimeout(m.current),t.current&&t.current.classList.remove("ui-message-close"),u(c),x(j=>j+1);const{duration:d=3e3}=c;d&&(m.current=window.setTimeout(p,d))},p=()=>{if(t.current&&!t.current.classList.contains("ui-message-close")){const c=()=>u(null);t.current.classList.add("ui-message-close"),t.current.addEventListener("animationend",c)}};return n.useImperativeHandle(r,()=>({open:f,close:p})),!l&&o&&w.createPortal(n.createElement("div",{...a,className:M("ui-message",{[`ui-message-${s}`]:s,[`ui-message-${o.type}`]:o.type},a.className),ref:t,key:g},o.type&&e.jsx(v,{className:"ui-message-icon",children:{info:"info",success:"check_circle",error:"cancel",warning:"error",loading:"progress_activity"}[o.type]}),e.jsx("span",{children:o.content})),document.body)}const I=r=>{const s=n.useRef(null);return[n.useMemo(()=>({open:l=>s.current.open(l),close:()=>s.current.close()}),[]),e.jsx(E,{ref:s,...r})]},i="Message",C=[{name:`use${i}`,description:e.jsx("pre",{children:e.jsx("ul",{children:e.jsx("li",{children:`
function useMessage(options?: {
  position?: 'top' | 'bottom'
}): [Message.API, React.ReactNode]`.trim()})})})},{name:`${i}.API`,description:e.jsx("pre",{children:e.jsxs("ul",{children:[e.jsx("li",{children:"open(options: Message.Options): void"}),e.jsx("li",{children:"close(): void"})]})})},{name:`${i}.Options`,description:e.jsx("pre",{children:e.jsxs("ul",{children:[e.jsx("li",{children:"type?: 'info' | 'success' | 'error' | 'warning' | 'loading'"}),e.jsx("li",{children:"content?: React.ReactNode"}),e.jsx("li",{children:"duration?: number"})]})})}],B=`
import { Button, useMessage } from '@zenmi/ui'

export function Example() {
  const [message, element] = useMessage()

  return (
    <>
      {element}
      <Button onClick={() => message.open({ type: 'info', content: 'Message' })}>
        Show Message
      </Button>
    </>
  )
}
`;function N(){const[r,s]=I();return e.jsxs(e.Fragment,{children:[s,e.jsx(R,{onClick:()=>r.open({type:"info",content:"Message"}),children:"Show Message"})]})}function A(){return e.jsx(y,{title:i,examples:[{code:B,element:e.jsx(N,{}),center:!0}],apiItems:C})}export{A as default};
