import{j as e}from"./index-BqCEHgmv.js";import{C as i}from"./Component-D--8K9IZ.js";import{a as o}from"./index-D54HTD0_.js";import"./prism-tsx-9MmIxAsL.js";const t="Carousel",s=[{name:t,wraps:"div",props:[{prop:"activeKey",type:"any"},{prop:"onChangeActiveKey",type:"(key: any) => any"}]},{name:`${t}.Item`,wraps:"div",props:[{prop:"key",type:"any"}]}],n=`
import { Carousel } from '@zenmi/ui'

export function Example() {
  const items = [
    { key: '1', item: 'Item 1' },
    { key: '2', item: 'Item 2' },
    { key: '3', item: 'Item 3' }
  ]

  return (
    <Carousel>
      {items.map((item) => (
        <Carousel.Item key={item.key}>{item.item}</Carousel.Item>
      ))}
    </Carousel>
  )
}
`;function p(){const r=[{key:"1",item:"Item 1"},{key:"2",item:"Item 2"},{key:"3",item:"Item 3"}];return e.jsx(o,{children:r.map(m=>e.jsx(o.Item,{children:m.item},m.key))})}function c(){return e.jsx(i,{title:t,examples:[{code:n,element:e.jsx(p,{}),center:!0}],apiItems:s})}export{c as default};
