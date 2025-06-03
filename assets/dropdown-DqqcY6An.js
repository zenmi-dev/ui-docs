import{j as e}from"./index-BxNjqtL4.js";import{C as n}from"./Component-hE3veHPf.js";import{g as r}from"./index-g8xl49SH.js";import"./prism-tsx-1T5e5G53.js";const o="Dropdown",t=[{name:o,wraps:"div",props:[{prop:"open",type:"boolean",defaultValue:!1},{prop:"onChangeOpen",type:"(open: boolean) => any"},{prop:"trigger",type:"'hover' | 'click'",defaultValue:"hover"},{prop:"position",type:"'left' | 'center' | 'right'",defaultValue:"left"},{prop:"offset",type:"number",defaultValue:4}]},{name:`${o}.Trigger`,wraps:"div",props:[]},{name:`${o}.Content`,wraps:"div",props:[]}],p=`
import { Dropdown } from '@zenmi/ui'

export function Example() {
  return (
    <Dropdown>
      <Dropdown.Trigger>Hover me</Dropdown.Trigger>
      <Dropdown.Content>Content</Dropdown.Content>
    </Dropdown>
  )
}
`;function i(){return e.jsxs(r,{children:[e.jsx(r.Trigger,{children:"Hover me"}),e.jsx(r.Content,{children:"Content"})]})}function d(){return e.jsx(n,{title:o,examples:[{code:p,element:e.jsx(i,{}),center:!0}],apiItems:t})}export{d as default};
