import{j as e,c as d}from"./index-BUy3NnNI.js";import{C as c}from"./Component-DGPgb43f.js";import{d as x}from"./index-optHOose.js";import"./prism-tsx-Bwik9m1f.js";function f({className:u,style:l,defaultValue:s,value:o,onChangeValue:m,...t}){const[n,p]=x(o,m,s??0);return e.jsxs("label",{className:d("ui-input ui-slider",u),style:l,children:[e.jsx("div",{className:"ui-slider-bg",children:e.jsx("div",{style:{width:`${n}%`}})}),e.jsx("input",{...t,type:"range",min:0,max:100,value:n==null?void 0:n.toString(),onChange:r=>{var a;(a=t.onChange)==null||a.call(t,r),p(Number(r.target.value))}})]})}const i="Slider",j=[{name:i,wraps:"input/range",props:[{prop:"defaultValue",type:"number"},{prop:"value",type:"number"},{prop:"onChangeValue",type:"(value: number) => any"}]}],g=`
import { Slider } from '@zenmi/ui'

export function Example() {
  return (
    <Slider defaultValue={50} />
  )
}
`;function C(){return e.jsx(f,{defaultValue:50})}function S(){return e.jsx(c,{title:i,examples:[{code:g,element:e.jsx(C,{}),center:!0}],apiItems:j})}export{S as default};
