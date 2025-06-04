import{j as e}from"./index-BqCEHgmv.js";import{C as p}from"./Component-D--8K9IZ.js";import{c as n}from"./index-D54HTD0_.js";import"./prism-tsx-9MmIxAsL.js";const t="Collapse",s=[{name:t,wraps:"div",props:[{prop:"openKeys",type:"any[]"},{prop:"onChangeOpenKeys",type:"(keys: any[]) => any"}]},{name:`${t}.Item`,wraps:"div",props:[{prop:"key",type:"any"}]},{name:`${t}.Trigger`,wraps:"div",props:[]},{name:`${t}.Content`,wraps:"div",props:[]}],i=`
import { Collapse } from '@zenmi/ui'

export function Example() {
  const items = [
    { key: '1', trigger: 'Trigger 1', content: 'Content 1' },
    { key: '2', trigger: 'Trigger 2', content: 'Content 2' },
    { key: '3', trigger: 'Trigger 3', content: 'Content 3' }
  ]

  return (
    <Collapse>
      {items.map((item) => (
        <Collapse.Item key={item.key}>
          <Collapse.Trigger>{item.trigger}</Collapse.Trigger>
          <Collapse.Content>{item.content}</Collapse.Content>
        </Collapse.Item>
      ))}
    </Collapse>
  )
}
`;function g(){const o=[{key:"1",trigger:"Trigger 1",content:"Content 1"},{key:"2",trigger:"Trigger 2",content:"Content 2"},{key:"3",trigger:"Trigger 3",content:"Content 3"}];return e.jsx(n,{children:o.map(r=>e.jsxs(n.Item,{children:[e.jsx(n.Trigger,{children:r.trigger}),e.jsx(n.Content,{children:r.content})]},r.key))})}function c(){return e.jsx(p,{title:t,examples:[{code:i,element:e.jsx(g,{})}],apiItems:s})}export{c as default};
