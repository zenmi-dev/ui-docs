import{j as e}from"./index-BUy3NnNI.js";import{C as o}from"./Component-DGPgb43f.js";import{D as p}from"./index-optHOose.js";import"./prism-tsx-Bwik9m1f.js";const a="DatePicker",r=`
(
  type: 'hour' | 'minute' | 'second',
  n: number
) => React.ReactNode
`,n=[{name:a,wraps:"input/hidden",props:[{prop:"defaultValue",type:"dayjs.ConfigType"},{prop:"value",type:"dayjs.ConfigType"},{prop:"onChangeValue",type:"(value: dayjs.Dayjs | null) => any"},{prop:"open",type:"boolean",defaultValue:!1},{prop:"onChangeOpen",type:"(open: boolean) => any"},{prop:"type",type:"'date' | 'datetime' | 'time'"},{prop:"format",type:"string",defaultValue:"YYYY-MM-DD"},{prop:"showSeconds",type:"boolean",defaultValue:!0},{prop:"use12Hour",type:"boolean",defaultValue:!0},{prop:"hourStep",type:"number",defaultValue:1},{prop:"minuteStep",type:"number",defaultValue:1},{prop:"secondStep",type:"number",defaultValue:1},{prop:"minDate",type:"dayjs.ConfigType",defaultValue:null},{prop:"maxDate",type:"dayjs.ConfigType",defaultValue:null},{prop:"disabledDate",type:"(date: dayjs.Dayjs) => boolean"},{prop:"disabledHours",type:"number[]"},{prop:"disabledMinutes",type:"(hour: number) => number[]"},{prop:"disabledSeconds",type:"(hour: number, minute: number) => number[]"},{prop:"hideDisabled",type:"boolean",defaultValue:!1},{prop:"before",type:"React.ReactNode"},{prop:"after",type:"React.ReactNode"},{prop:"footer",type:"React.ReactNode"},{prop:"monthRender",type:"(year: number, month: number) => React.ReactNode"},{prop:"weekRender",type:"(week: number) => React.ReactNode"},{prop:"dateRender",type:"(date: dayjs.Dayjs) => React.ReactNode"},{prop:"timeRender",type:r}]}],t=`
import { DatePicker } from '@zenmi/ui'

export function Example() {
  return (
    <DatePicker />
  )
}
`;function u(){return e.jsx(p,{type:"date"})}function d(){return e.jsx(p,{type:"datetime"})}function m(){return e.jsx(p,{type:"time"})}function c(){return e.jsx(o,{title:a,examples:[{name:"Date",code:t,element:e.jsx(u,{}),center:!0},{name:"Datetime",code:t.replace(/(\/>)/,"type='datetime' $1"),element:e.jsx(d,{}),center:!0},{name:"Time",code:t.replace(/(\/>)/,"type='time' $1"),element:e.jsx(m,{}),center:!0}],apiItems:n})}export{c as default};
