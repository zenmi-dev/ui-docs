import{j as e,r}from"./index-DUboM-Ei.js";import{C as s}from"./Component-BVQItUUo.js";import{B as p}from"./index-D-mcAN4t.js";import{O as a}from"./index-Dw4fpHSx.js";import"./prism-tsx-BjGe-lSY.js";const o="Overlay",l=[{name:o,wraps:"div",props:[{prop:"open",type:"boolean",defaultValue:!1}]}],i=`
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
