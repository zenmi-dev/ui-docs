import{j as e}from"./index-DUboM-Ei.js";import{C as o}from"./Component-BVQItUUo.js";import{h as r}from"./index-Dw4fpHSx.js";import"./prism-tsx-BjGe-lSY.js";const t="Input",a=[{name:t,wraps:"input/text",props:[{prop:"defaultValue",type:"string"},{prop:"value",type:"string"},{prop:"onChangeValue",type:"(value: string) => any"},{prop:"before",type:"React.ReactNode"},{prop:"after",type:"React.ReactNode"}]},{name:`${t}.Password`,wraps:"input/password",props:[{prop:"defaultValue",type:"string"},{prop:"value",type:"string"},{prop:"onChangeValue",type:"(value: string) => any"},{prop:"visibilityToggle",type:"boolean",defaultValue:!0},{prop:"before",type:"React.ReactNode"},{prop:"after",type:"React.ReactNode"}]},{name:`${t}.Number`,wraps:"input/number",props:[{prop:"defaultValue",type:"number"},{prop:"value",type:"number"},{prop:"onChangeValue",type:"(value: number) => any"},{prop:"controls",type:"boolean",defaultValue:!0},{prop:"before",type:"React.ReactNode"},{prop:"after",type:"React.ReactNode"}]}],p=`
import { Input } from '@zenmi/ui'

export function Example() {
  return (
    <Input />
  )
}
`;function n(){return e.jsx(r,{})}function u(){return e.jsx(r.Password,{})}function s(){return e.jsx(r.Number,{})}function d(){return e.jsx(o,{title:t,examples:[{name:"Text",code:p,element:e.jsx(n,{}),center:!0},{name:"Password",code:p.replace(/(<Input)/,"$1.Password"),element:e.jsx(u,{}),center:!0},{name:"Number",code:p.replace(/(<Input)/,"$1.Number"),element:e.jsx(s,{}),center:!0}],apiItems:a})}export{d as default};
