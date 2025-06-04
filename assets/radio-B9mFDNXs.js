import{j as o}from"./index-BqCEHgmv.js";import{C as t}from"./Component-D--8K9IZ.js";import{R as p}from"./index-D54HTD0_.js";import"./prism-tsx-9MmIxAsL.js";const e="Radio",n=[{name:e,wraps:"input/radio",props:[{prop:"defaultValue",type:"boolean"},{prop:"value",type:"boolean"},{prop:"onChangeValue",type:"(value: boolean) => any"}]},{name:`${e}.Group`,wraps:"input/hidden",props:[{prop:"options",type:"Radio.Option[]"},{prop:"defaultValue",type:"string"},{prop:"value",type:"string"},{prop:"onChangeValue",type:"(value: string) => any"},{prop:"children",type:"(option: Option) => React.ReactNode"}]},{name:"Radio.Option",props:[{prop:"value",type:"string"},{prop:"label",type:"string"},{prop:"disabled",type:"boolean",defaultValue:!1}]}],r=`
import { Radio } from '@zenmi/ui'

export function Example() {
  return (
    <Radio>radio</Radio>
  )
}
`,i=`
import { Radio } from '@zenmi/ui'

export function Example() {
  const options: Radio.Option[] = [
    { value: '1', label: 'radio 1' },
    { value: '2', label: 'radio 2' },
    { value: '3', label: 'radio 3' }
  ]

  return (
    <Radio.Group options={options} />
  )
}
`;function l(){return o.jsx(p,{children:"radio"})}function u(){const a=[{value:"1",label:"radio 1"},{value:"2",label:"radio 2"},{value:"3",label:"radio 3"}];return o.jsx(p.Group,{options:a})}function f(){return o.jsx(t,{title:e,examples:[{code:r,element:o.jsx(l,{}),center:!0},{name:"Group",code:i,element:o.jsx(u,{}),center:!0}],apiItems:n})}export{f as default};
