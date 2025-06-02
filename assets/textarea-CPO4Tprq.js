import{r as x,j as r,c as y}from"./index-BUy3NnNI.js";import{C as d}from"./Component-DGPgb43f.js";import"./index-optHOose.js";import"./prism-tsx-Bwik9m1f.js";function c({className:f,style:j,defaultValue:m,value:s,onChangeValue:o,autoRows:t,...n}){const i=(a="")=>{let e=n.rows;return t&&(e=a.split(`
`).length,typeof t=="object"&&(e<Number(t.min)?e=t.min:e>Number(t.max)&&(e=t.max))),e},[b,u]=x.useState(()=>i(m));return x.useEffect(()=>{u(i(s))},[s]),r.jsx("label",{className:y("ui-input ui-input-box ui-textarea",f),style:j,tabIndex:-1,children:r.jsx("textarea",{...n,style:{resize:t?"none":"vertical"},defaultValue:m,value:s,onChange:a=>{var e;(e=n.onChange)==null||e.call(n,a),o==null||o(a.target.value),u(i(a.target.value))},rows:b})})}const l="Textarea",g=`
boolean | {
  min?: number
  max?: number
}`,E=[{name:l,wraps:"textarea",props:[{prop:"defaultValue",type:"string"},{prop:"value",type:"string"},{prop:"onChangeValue",type:"(value: string) => any"},{prop:"autoRows",type:g,defaultValue:!1}]}],p=`
import { Textarea } from '@zenmi/ui'

export function Example() {
  return (
    <Textarea />
  )
}
`;function T(){return r.jsx(c,{})}function w(){return r.jsx(c,{autoRows:!0})}function N(){return r.jsx(d,{title:l,examples:[{code:p,element:r.jsx(T,{}),center:!0},{name:"Auto Rows",code:p.replace(/(\/>)/,"autoRows $1"),element:r.jsx(w,{}),center:!0}],apiItems:E})}export{N as default};
