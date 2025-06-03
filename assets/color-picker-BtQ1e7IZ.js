import{j as t,c as s}from"./index-BxNjqtL4.js";import{C as u}from"./Component-hE3veHPf.js";import"./index-g8xl49SH.js";import"./prism-tsx-1T5e5G53.js";function m({className:l,style:p,defaultValue:j,value:c,onChangeValue:r,...e}){return t.jsx("label",{className:s("ui-input ui-color-picker",l),style:p,children:t.jsx("input",{...e,type:"color",value:c,onChange:o=>{var i;(i=e.onChange)==null||i.call(e,o),r==null||r(o.target.value)}})})}const n="ColorPicker",a=[{name:n,wraps:"input",props:[{prop:"defaultValue",type:"string"},{prop:"value",type:"string"},{prop:"onChangeValue",type:"(value: string) => any"}]}],x=`
import { ColorPicker } from '@zenmi/ui'

export function Example() {
  return (
    <ColorPicker />
  )
}
`;function f(){return t.jsx(m,{})}function P(){return t.jsx(u,{title:n,examples:[{code:x,element:t.jsx(f,{}),center:!0}],apiItems:a})}export{P as default};
