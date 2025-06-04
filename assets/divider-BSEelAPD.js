import{j as e,c as o}from"./index-BqCEHgmv.js";import{C as s}from"./Component-D--8K9IZ.js";import"./index-D54HTD0_.js";import"./prism-tsx-9MmIxAsL.js";function r({type:i="horizontal",...t}){return e.jsx("div",{...t,className:o("ui-divider",{[`ui-divider-${i}`]:i},t.className)})}const n="Divider",d=[{name:n,wraps:"div",props:[{prop:"type",type:"'horizontal' | 'vertical'",defaultValue:"horizontal"}]}],l=`
import { Divider } from '@zenmi/ui'

export function Example() {
  return (
    <>
      <div>Title</div>
      <Divider />
      <div>Content</div>
    </>
  )
}
`,m=`
import { Divider } from '@zenmi/ui'

export function Example() {
  const style: React.CSSProperties = {
    height: 40,
    display: 'flex',
    alignItems: 'center'
  }

  return (
    <div style={style}>
      <div>Item 1</div>
      <Divider type='vertical' />
      <div>Item 2</div>
    </div>
  )
}
`;function a(){return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Title"}),e.jsx(r,{}),e.jsx("div",{children:"Content"})]})}function c(){const i={height:40,display:"flex",alignItems:"center"};return e.jsxs("div",{style:i,children:[e.jsx("div",{children:"Item 1"}),e.jsx(r,{type:"vertical"}),e.jsx("div",{children:"Item 2"})]})}function f(){return e.jsx(s,{title:n,examples:[{name:"Horizontal",code:l,element:e.jsx(a,{})},{name:"Vertical",code:m,element:e.jsx(c,{}),center:!0}],apiItems:d})}export{f as default};
