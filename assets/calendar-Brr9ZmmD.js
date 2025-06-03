import{j as e}from"./index-BxNjqtL4.js";import{C as a}from"./Component-hE3veHPf.js";import{C as o}from"./index-g8xl49SH.js";import"./prism-tsx-1T5e5G53.js";const t="Calendar",p=[{name:t,wraps:"div",props:[{prop:"date",type:"dayjs.ConfigType"},{prop:"onChangeDate",type:"(date: dayjs.Dayjs) => any"},{prop:"minDate",type:"dayjs.ConfigType",defaultValue:null},{prop:"maxDate",type:"dayjs.ConfigType",defaultValue:null},{prop:"disabledDate",type:"(date: dayjs.Dayjs) => boolean"},{prop:"monthRender",type:"(year: number, month: number) => React.ReactNode"},{prop:"weekRender",type:"(week: number) => React.ReactNode"},{prop:"dateRender",type:"(date: dayjs.Dayjs) => React.ReactNode"}]}],n=`
import { Calendar } from '@zenmi/ui'

export function Example() {
  return (
    <Calendar />
  )
}
`;function r(){return e.jsx(o,{})}function i(){return e.jsx(a,{title:t,examples:[{code:n,element:e.jsx(r,{}),center:!0}],apiItems:p})}export{i as default};
