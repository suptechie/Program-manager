import{r as i,c as y,j as e,C,T as l,B as p,a as u}from"./index-DMeJrSa7.js";import{P as v}from"./ParticipantsList-_Fp60qcB.js";import{u as S,A as b,S as B}from"./useDebounce-B2f8VuKj.js";import"./TextField-i6e5UCgH.js";const w=()=>{const[t,n]=i.useState(1),[o,d]=i.useState(""),m=10,s=S(o,300),{data:r,error:c,isLoading:h}=y({page:t,limit:m,search:s}),x=()=>{t<r.totalPages&&n(t+1)},g=()=>{t>1&&n(t-1)},P=i.useCallback(a=>{d(a.target.value)},[]),f=i.useMemo(()=>r!=null&&r.participants?r.participants.filter(a=>s===""||a.name.toLowerCase().includes(s.toLowerCase())).sort((a,j)=>j.points-a.points):[],[r,s]);return h?e.jsx(C,{}):c?e.jsxs(b,{severity:"error",children:["Error: ",c.message]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h4",align:"center",gutterBottom:!0,children:"Participants"}),e.jsx(p,{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",children:e.jsx(B,{value:o,onChange:P,placeholder:"Search Participants..."})}),e.jsx(v,{participants:f}),e.jsxs(p,{display:"flex",justifyContent:"center",mt:2,children:[e.jsx(u,{variant:"contained",color:"primary",onClick:g,disabled:t===1,children:"Previous"}),e.jsxs(l,{variant:"body1",mx:2,children:["Page ",t," of ",r.totalPages]}),e.jsx(u,{variant:"contained",color:"primary",onClick:x,disabled:t===r.totalPages,children:"Next"})]})]})};export{w as default};
