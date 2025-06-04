import{j as o}from"./index-BqCEHgmv.js";import{C as e}from"./Component-D--8K9IZ.js";import{B as p}from"./index-b-DcPOG9.js";import{P as r}from"./index-D54HTD0_.js";import"./prism-tsx-9MmIxAsL.js";const t="Popover",n=`
'top' | 'top-left' | 'top-right' |
'bottom' | 'bottom-left' | 'bottom-right' |
'left' | 'left-top' | 'left-bottom' |
'right' | 'right-top' | 'right-bottom'
`,i=[{name:t,wraps:"div",props:[{prop:"open",type:"boolean",defaultValue:!1},{prop:"onChangeOpen",type:"(open: boolean) => any"},{prop:"trigger",type:"'hover' | 'click' | 'focus'",defaultValue:"hover"},{prop:"position",type:n,defaultValue:"top"},{prop:"offset",type:"number",defaultValue:4}]}],m=`
import { Button, Popover } from '@zenmi/ui'

export function Example() {
  return (
    <Button>
      Hover me
      <Popover>Popover</Popover>
    </Button>
  )
}
`;function s(){return o.jsxs(p,{children:["Hover me",o.jsx(r,{children:"Popover"})]})}function v(){return o.jsx(e,{title:t,examples:[{code:m,element:o.jsx(s,{}),center:!0}],apiItems:i})}export{v as default};
