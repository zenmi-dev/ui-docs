import{j as e}from"./index-DUboM-Ei.js";import{C as a}from"./Component-BVQItUUo.js";import{M as t}from"./index-Dw4fpHSx.js";import"./prism-tsx-BjGe-lSY.js";const p="Menu",m=[{name:p,wraps:"div",props:[{prop:"menus",type:"Menu.Item[]"},{prop:"openKeys",type:"any[]"},{prop:"onChangeOpenKeys",type:"(keys: any[]) => any"},{prop:"activeKey",type:"any"},{prop:"onChangeActiveKey",type:"(key: any) => any"},{prop:"type",type:"'vertical' | 'horizontal'",defaultValue:"vertical"},{prop:"childrenType",type:"'dropdown' | 'popover'",defaultValue:"dropdown"},{prop:"indent",type:"number",defaultValue:16}]},{name:"Menu.Item",description:e.jsx("code",{children:e.jsxs("ul",{children:[e.jsx("li",{children:"key: any"}),e.jsx("li",{children:"name: React.ReactNode"}),e.jsx("li",{children:"children?: Menu.Item[]"}),e.jsx("li",{children:"disabled?: boolean"})]})})}],n=`
import { Menu } from '@zenmi/ui'

export function Example() {
  const style: React.CSSProperties = {
    border: '1px solid lightgray'
  }
  const menus: Menu.Item[] = [
    { key: '1', name: 'Item 1' },
    { key: '2', name: 'Item 2' },
    {
      key: '3',
      name: 'Group 3',
      children: [
        { key: '3-1', name: 'Item 3-1' },
        { key: '3-2', name: 'Item 3-2' },
        { key: '3-3', name: 'Item 3-3' },
      ]
    },
  ]

  return (
    <Menu menus={menus} />
  )
}
`,o={border:"1px solid lightgray"},r=[{key:"1",name:"Item 1"},{key:"2",name:"Item 2"},{key:"3",name:"Group 3",children:[{key:"3-1",name:"Item 3-1"},{key:"3-2",name:"Item 3-2"},{key:"3-3",name:"Item 3-3"}]}];function i(){return e.jsx(t,{style:o,menus:r})}function l(){return e.jsx(t,{style:o,menus:r,type:"horizontal"})}function s(){return e.jsx(t,{style:o,menus:r,childrenType:"popover"})}function x(){return e.jsx(a,{title:p,examples:[{name:"Vertical",code:n,element:e.jsx(i,{}),center:!0},{name:"Horizontal",code:n.replace(/(\/>)/,"type='horizontal' $1"),element:e.jsx(l,{})},{name:"Popover",code:n.replace(/(\/>)/,"childrenType='popover' $1"),element:e.jsx(s,{}),center:!0}],apiItems:m})}export{x as default};
