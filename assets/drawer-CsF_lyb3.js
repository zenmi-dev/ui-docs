import{j as e,r as p}from"./index-DUboM-Ei.js";import{C as a}from"./Component-BVQItUUo.js";import{B as s}from"./index-D-mcAN4t.js";import{f as o}from"./index-Dw4fpHSx.js";import"./prism-tsx-BjGe-lSY.js";const t="Dialog",l=[{name:t,wraps:"div",props:[{prop:"open",type:"boolean",defaultValue:!1},{prop:"onChangeOpen",type:"(open: boolean) => any"},{prop:"position",type:"'left' | 'right' | 'top' | 'bottom'",defaultValue:"right"},{prop:"overlay",type:"boolean",defaultValue:!0},{prop:"outsideClosable",type:"boolean",defaultValue:!0}]},{name:`${t}.Title`,wraps:"div",props:[]},{name:`${t}.Content`,wraps:"div",props:[]},{name:`${t}.Footer`,wraps:"div",props:[]}],i=`
import { Button, Drawer } from '@zenmi/ui'

export function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer open={open} onChangeOpen={setOpen}>
        <Drawer.Title>Title</Drawer.Title>
        <Drawer.Content>Content</Drawer.Content>
        <Drawer.Footer>Footer</Drawer.Footer>
      </Drawer>
    </>
  )
}
`;function u(){const[n,r]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>r(!0),children:"Open Drawer"}),e.jsxs(o,{open:n,onChangeOpen:r,children:[e.jsx(o.Title,{children:"Title"}),e.jsx(o.Content,{children:"Content"}),e.jsx(o.Footer,{children:"Footer"})]})]})}function x(){return e.jsx(a,{title:t,examples:[{code:i,element:e.jsx(u,{}),center:!0}],apiItems:l})}export{x as default};
