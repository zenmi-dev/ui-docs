import{j as e,c as m}from"./index-BxNjqtL4.js";import{C as u}from"./Component-hE3veHPf.js";import"./index-g8xl49SH.js";import"./prism-tsx-1T5e5G53.js";function l({className:r,style:p,children:f,defaultValue:s,value:a,onChangeValue:n,...t}){return e.jsxs("label",{className:m("ui-input ui-switch",r),style:p,children:[e.jsx("input",{...t,type:"checkbox",defaultChecked:s,checked:a,onChange:o=>{var c;(c=t.onChange)==null||c.call(t,o),n==null||n(o.target.checked)}}),e.jsx("span",{})]})}const i="Switch",x=[{name:i,wraps:"input/checkbox",props:[{prop:"defaultValue",type:"boolean"},{prop:"value",type:"boolean"},{prop:"onChangeValue",type:"(value: boolean) => any"}]}],h=`
import { Switch } from '@zenmi/ui'

export function Example() {
  return (
    <Switch />
  )
}
`;function d(){return e.jsx(l,{})}function y(){return e.jsx(u,{title:i,examples:[{code:h,element:e.jsx(d,{}),center:!0}],apiItems:x})}export{y as default};
