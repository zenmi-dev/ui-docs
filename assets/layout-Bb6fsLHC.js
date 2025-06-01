import{j as e}from"./index-DUboM-Ei.js";import{C as a}from"./Component-BVQItUUo.js";import{L as o}from"./index-Dw4fpHSx.js";import"./prism-tsx-BjGe-lSY.js";const r="Layout",t=[{name:r,wraps:"div",props:[]},{name:`${r}.Header`,wraps:"header",props:[]},{name:`${r}.Main`,wraps:"main",props:[]},{name:`${r}.Footer`,wraps:"footer",props:[]},{name:`${r}.Sider`,wraps:"div",props:[]}],i=`
import { Layout } from '@zenmi/ui'

export function Example() {
  return (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout>
        <Layout.Sider>Sider</Layout.Sider>
        <Layout.Main>Main</Layout.Main>
        <Layout.Sider>Sider</Layout.Sider>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  )
}
`,n=`
import { Layout } from '@zenmi/ui'

export function Example() {
  return (
    <Layout>
      <Layout.Sider>Sider</Layout.Sider>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Main>Main</Layout.Main>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
      <Layout.Sider>Sider</Layout.Sider>
    </Layout>
  )
}
`;function d(){return e.jsxs(o,{children:[e.jsx(o.Header,{children:"Header"}),e.jsxs(o,{children:[e.jsx(o.Sider,{children:"Sider"}),e.jsx(o.Main,{children:"Main"}),e.jsx(o.Sider,{children:"Sider"})]}),e.jsx(o.Footer,{children:"Footer"})]})}function u(){return e.jsxs(o,{children:[e.jsx(o.Sider,{children:"Sider"}),e.jsxs(o,{children:[e.jsx(o.Header,{children:"Header"}),e.jsx(o.Main,{children:"Main"}),e.jsx(o.Footer,{children:"Footer"})]}),e.jsx(o.Sider,{children:"Sider"})]})}function y(){return e.jsx(a,{title:r,examples:[{name:"Example 1",code:i,element:e.jsx(d,{})},{name:"Example 2",code:n,element:e.jsx(u,{})}],apiItems:t})}export{y as default};
