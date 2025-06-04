import{j as e,r}from"./index-BqCEHgmv.js";import{C as s}from"./Component-D--8K9IZ.js";import{B as p}from"./index-b-DcPOG9.js";import{O as a}from"./index-D54HTD0_.js";import"./prism-tsx-9MmIxAsL.js";const o="Overlay",l=[{name:o,wraps:"div",props:[{prop:"open",type:"boolean",defaultValue:!1}]}],i=`
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
