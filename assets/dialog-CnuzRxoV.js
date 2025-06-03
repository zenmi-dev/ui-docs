import{j as e,r as a}from"./index-BxNjqtL4.js";import{C as r}from"./Component-hE3veHPf.js";import{B as l}from"./index-DLm9UXe5.js";import{e as t}from"./index-g8xl49SH.js";import"./prism-tsx-1T5e5G53.js";const o="Dialog",i=[{name:o,wraps:"div",props:[{prop:"open",type:"boolean",defaultValue:!1},{prop:"onChangeOpen",type:"(open: boolean) => any"},{prop:"overlay",type:"boolean",defaultValue:!0},{prop:"outsideClosable",type:"boolean",defaultValue:!0}]},{name:`${o}.Title`,wraps:"div",props:[]},{name:`${o}.Content`,wraps:"div",props:[]},{name:`${o}.Footer`,wraps:"div",props:[]}],s=`
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
