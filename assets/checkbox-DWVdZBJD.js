import{j as e}from"./index-BUy3NnNI.js";import{C as n}from"./Component-DGPgb43f.js";import{b as p}from"./index-optHOose.js";import"./prism-tsx-Bwik9m1f.js";const o="Checkbox",a=[{name:o,wraps:"input/checkbox",props:[{prop:"defaultValue",type:"boolean"},{prop:"value",type:"boolean"},{prop:"onChangeValue",type:"(value: boolean) => any"},{prop:"indeterminate",type:"boolean",defaultValue:!1}]},{name:`${o}.Group`,wraps:"input/hidden",props:[{prop:"options",type:"Checkbox.Option[]"},{prop:"defaultValue",type:"string[]"},{prop:"value",type:"string[]"},{prop:"onChangeValue",type:"(value: string[]) => any"},{prop:"children",type:"(option: Option) => React.ReactNode"}]},{name:"Checkbox.Option",props:[{prop:"value",type:"string"},{prop:"label",type:"string"},{prop:"disabled",type:"boolean",defaultValue:!1}]}],r=`
import { Checkbox } from '@zenmi/ui'

export function Example() {
  return (
    <Checkbox>checkbox</Checkbox>
  )
}
`,l=`
import { Checkbox } from '@zenmi/ui'

export function Example() {
  const options: Checkbox.Option[] = [
    { value: '1', label: 'checkbox 1' },
    { value: '2', label: 'checkbox 2' },
    { value: '3', label: 'checkbox 3' }
  ]

  return (
    <Checkbox.Group options={options} />
  )
}
`;function c(){return e.jsx(p,{children:"Checkbox"})}function i(){const t=[{value:"1",label:"Checkbox 1"},{value:"2",label:"Checkbox 2"},{value:"3",label:"Checkbox 3"}];return e.jsx(p.Group,{options:t})}function m(){return e.jsx(n,{title:o,examples:[{code:r,element:e.jsx(c,{}),center:!0},{name:"Group",code:l,element:e.jsx(i,{}),center:!0}],apiItems:a})}export{m as default};
