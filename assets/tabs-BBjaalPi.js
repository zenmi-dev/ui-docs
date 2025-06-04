import{j as e}from"./index-BqCEHgmv.js";import{C as i}from"./Component-D--8K9IZ.js";import{T as r}from"./index-D54HTD0_.js";import"./prism-tsx-9MmIxAsL.js";const n="Tabs",s=[{name:n,wraps:"div",props:[{prop:"activeKey",type:"any"},{prop:"onChangeActiveKey",type:"(key: any) => any"}]},{name:`${n}.List`,wraps:"div",props:[]},{name:`${n}.Trigger`,wraps:"div",props:[]},{name:`${n}.Content`,wraps:"div",props:[]}],a=`
import { Tabs } from '@zenmi/ui'

export function Example() {
  const items = [
    { key: '1', trigger: 'Tab 1', content: 'Content 1' },
    { key: '2', trigger: 'Tab 2', content: 'Content 2' },
    { key: '3', trigger: 'Tab 3', content: 'Content 3' }
  ]

  return (
    <Tabs>
      <Tabs.List>
        {items.map((item) => (
          <Tabs.Trigger key={item.key}>{item.trigger}</Tabs.Trigger>
        ))}
      </Tabs.List>
      {items.map((item) => (
        <Tabs.Content key={item.key}>{item.content}</Tabs.Content>
      ))}
    </Tabs>
  )
}
`;function p(){const o=[{key:"1",trigger:"Tab 1",content:"Content 1"},{key:"2",trigger:"Tab 2",content:"Content 2"},{key:"3",trigger:"Tab 3",content:"Content 3"}];return e.jsxs(r,{children:[e.jsx(r.List,{children:o.map(t=>e.jsx(r.Trigger,{children:t.trigger},t.key))}),o.map(t=>e.jsx(r.Content,{children:t.content},t.key))]})}function y(){return e.jsx(i,{title:n,examples:[{code:a,element:e.jsx(p,{})}],apiItems:s})}export{y as default};
