import{r as m,j as n,c}from"./index-BUy3NnNI.js";import{C as h}from"./Component-DGPgb43f.js";import{d as x,I as u}from"./index-optHOose.js";import"./prism-tsx-Bwik9m1f.js";function j({total:i=10,page:t,onChangePage:g,...l}){const[s,o]=x(t,g,1),d=m.useMemo(()=>{const e=[],a=s<1||s>i?1:s;for(let r=a-4;r<=i;r++){if(e.length===5){if(a<r-2)break;e.shift()}r>0&&e.push(r)}return e[0]!==1&&e.unshift(1),e[0]+1!==e[1]&&e.splice(1,0,"prev"),e[e.length-1]!==i&&i>0&&e.push(i),e[e.length-2]+1!==e[e.length-1]&&e.splice(e.length-1,0,"next"),e},[i,s]);m.useEffect(()=>{!t||t<1?o(1):t>i&&o(i)},[t,i]);const p=e=>{let a=s+e;a<1?a=1:a>i&&(a=i),o(a)};return n.jsxs("div",{...l,className:c("ui-pagination",l.className),children:[n.jsx(u,{className:c("ui-pagination-icon .ui-pagination-ellipsis",{"ui-disabled":s===1}),onClick:()=>p(-1),children:"keyboard_arrow_left"}),n.jsx("span",{className:"ui-pagination-group",children:d.map(e=>typeof e=="string"?n.jsx(u,{className:"ui-pagination-icon",onClick:()=>p(e==="prev"?-5:5),children:"more_horiz"},e):n.jsx("span",{className:c("ui-pagination-item",{"ui-pagination-active":e===s}),onClick:()=>o(e),children:e},e))}),n.jsx(u,{className:c("ui-pagination-icon",{"ui-disabled":s===i}),onClick:()=>p(1),children:"keyboard_arrow_right"})]})}const f="Pagination",C=[{name:f,wraps:"div",props:[{prop:"total",type:"number",defaultValue:10},{prop:"page",type:"number"},{prop:"onChangePage",type:"(page: number) => any"}]}],b=`
import { Pagination } from '@zenmi/ui'

export function Example() {
  return (
    <Pagination />
  )
}
`;function k(){return n.jsx(j,{})}function _(){return n.jsx(h,{title:f,examples:[{code:b,element:n.jsx(k,{}),center:!0}],apiItems:C})}export{_ as default};
