import{r as t,u as y,j as e,B as i,C as b,T as g,a as d}from"./index-C23OQssH.js";import{P as v}from"./ProgramList-BWmXOUH4.js";import{u as S,A as k,S as B}from"./useDebounce-COy_CiWt.js";import"./TextField-D88AsIEZ.js";const A=()=>{const[r,c]=t.useState(1),[l,x]=t.useState(""),h=10,{data:s,error:m,isLoading:j}=y({page:r,limit:h}),o=S(l,300),u=(s==null?void 0:s.programs)||[],a=(s==null?void 0:s.totalPages)||1,p=t.useCallback(()=>{r<a&&c(r+1)},[r,a]),f=t.useCallback(()=>{r>1&&c(r-1)},[r]),P=t.useCallback(n=>{x(n.target.value)},[]),C=t.useMemo(()=>u.filter(n=>o===""||n.name.toLowerCase().includes(o.toLowerCase())),[u,o]);return j?e.jsx(i,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:e.jsx(b,{})}):m?e.jsxs(k,{severity:"error",children:["Error: ",m.message]}):e.jsxs(e.Fragment,{children:[e.jsx(g,{variant:"h4",align:"center",gutterBottom:!0,children:"Programs"}),e.jsx(i,{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",children:e.jsx(B,{value:l,onChange:P,placeholder:"Search Programs..."})}),e.jsx(v,{programs:C}),e.jsxs(i,{display:"flex",justifyContent:"center",mt:2,children:[e.jsx(d,{variant:"contained",color:"primary",onClick:f,disabled:r===1,children:"Previous"}),e.jsxs(g,{variant:"body1",mx:2,children:["Page ",r," of ",a]}),e.jsx(d,{variant:"contained",color:"primary",onClick:p,disabled:r===a,children:"Next"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{})]})};export{A as default};