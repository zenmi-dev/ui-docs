import{j as e,r as a}from"./index-BqCEHgmv.js";import{C as r}from"./Component-D--8K9IZ.js";import{B as l}from"./index-b-DcPOG9.js";import{e as t}from"./index-D54HTD0_.js";import"./prism-tsx-9MmIxAsL.js";const o="Dialog",i=[{name:o,wraps:"div",props:[{prop:"open",type:"boolean",defaultValue:!1},{prop:"onChangeOpen",type:"(open: boolean) => any"},{prop:"overlay",type:"boolean",defaultValue:!0},{prop:"outsideClosable",type:"boolean",defaultValue:!0}]},{name:`${o}.Title`,wraps:"div",props:[]},{name:`${o}.Content`,wraps:"div",props:[]},{name:`${o}.Footer`,wraps:"div",props:[]}],s=`
import { Button, Dialog } from '@zenmi/ui'

export function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onChangeOpen={setOpen}>
        <Dialog.Title>Title</Dialog.Title>
        <Dialog.Content>Content</Dialog.Content>
        <Dialog.Footer>Footer</Dialog.Footer>
      </Dialog>
    </>
  )
}
`;function u(){const[p,n]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsxs(t,{open:p,onChangeOpen:n,children:[e.jsx(t.Title,{children:"Title"}),e.jsx(t.Content,{children:"Content"}),e.jsx(t.Footer,{children:"Footer"})]})]})}function C(){return e.jsx(r,{title:o,examples:[{code:s,element:e.jsx(u,{}),center:!0}],apiItems:i})}export{C as default};
