import{j as e,r}from"./index-BxNjqtL4.js";import{C as s}from"./Component-hE3veHPf.js";import{B as p}from"./index-DLm9UXe5.js";import{O as a}from"./index-g8xl49SH.js";import"./prism-tsx-1T5e5G53.js";const o="Overlay",l=[{name:o,wraps:"div",props:[{prop:"open",type:"boolean",defaultValue:!1}]}],i=`
import { Button, Overlay } from '@zenmi/ui'

export function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Overlay</Button>
      <Overlay open={open} onClick={() => setOpen(false)} />
    </>
  )
}
`;function m(){const[n,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>t(!0),children:"Open Overlay"}),e.jsx(a,{open:n,onClick:()=>t(!1)})]})}function C(){return e.jsx(s,{title:o,examples:[{code:i,element:e.jsx(m,{}),center:!0}],apiItems:l})}export{C as default};
