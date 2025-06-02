import{j as e,r}from"./index-BUy3NnNI.js";import{C as s}from"./Component-DGPgb43f.js";import{B as p}from"./index-6E4KzdyI.js";import{O as a}from"./index-optHOose.js";import"./prism-tsx-Bwik9m1f.js";const o="Overlay",l=[{name:o,wraps:"div",props:[{prop:"open",type:"boolean",defaultValue:!1}]}],i=`
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
