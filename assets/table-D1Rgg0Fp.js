import{j as e}from"./index-BqCEHgmv.js";import{C as r,T as y}from"./Component-D--8K9IZ.js";import"./index-D54HTD0_.js";import"./prism-tsx-9MmIxAsL.js";const d="Table",c=[{name:d,wraps:"div",props:[]}],i=`
import { Popover } from '@zenmi/ui'

export function Example() {
  const cols = [
    { key: 'key1', name: 'col 1' },
    { key: 'key2', name: 'col 2' },
    { key: 'key3', name: 'col 3' }
  ]
  const data: {
    id: any
    [k: string]: any
  }[] = [
    { id: 0, key1: 'data 1-1', key2: 'data 1-2', key3: 'data 1-3' },
    { id: 1, key1: 'data 2-2', key2: 'data 2-2', key3: 'data 2-3' },
    { id: 2, key1: 'data 2-2', key2: 'data 2-2', key3: 'data 2-3' }
  ]

  return (
    <Table>
      <thead>
        <tr>
          {cols.map((col) => (
            <th key={col.key}>{col.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {cols.map((col) => (
              <td key={col.key}>{item[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3} align='center'>footer</td>
        </tr>
      </tfoot>
    </Table>
  )
}
`;function k(){const a=[{key:"key1",name:"col 1"},{key:"key2",name:"col 2"},{key:"key3",name:"col 3"}],n=[{id:0,key1:"data 1-1",key2:"data 1-2",key3:"data 1-3"},{id:1,key1:"data 2-2",key2:"data 2-2",key3:"data 2-3"},{id:2,key1:"data 2-2",key2:"data 2-2",key3:"data 2-3"}];return e.jsxs(y,{children:[e.jsx("thead",{children:e.jsx("tr",{children:a.map(t=>e.jsx("th",{children:t.name},t.key))})}),e.jsx("tbody",{children:n.map(t=>e.jsx("tr",{children:a.map(o=>e.jsx("td",{children:t[o.key]},o.key))},t.id))}),e.jsx("tfoot",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:3,align:"center",children:"footer"})})})]})}function x(){return e.jsx(r,{title:d,examples:[{code:i,element:e.jsx(k,{}),center:!0}],apiItems:c})}export{x as default};
