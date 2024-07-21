import{r as a,X as P,j as e,Y as B,B as p,T as j,g as E,u as M,Z as F,C as L}from"./index-CLFLJj7i.js";import{T as D}from"./TeamList-DKUZuKYs.js";import{u as O,S as R,A as q,P as I}from"./Pagination-TmjqAlHS.js";import{A as G}from"./AddButton-A5j_oxtx.js";import{T as Q}from"./TextField-Bfifr5H5.js";const W={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},X=({open:i,handleClose:m})=>{const[o,s]=a.useState(""),[n,c]=a.useState({}),[l]=P(),d=()=>{const t={};return o||(t.teamName="Team name is required"),c(t),Object.keys(t).length===0},u=async()=>{if(d())try{await l({name:o}),s(""),c({}),m()}catch(t){console.error("Error adding team:",t)}};return e.jsx(B,{open:i,onClose:m,"aria-labelledby":"add-team-modal-title","aria-describedby":"add-team-modal-description",children:e.jsxs(p,{sx:W,children:[e.jsx(j,{id:"add-team-modal-title",variant:"h6",component:"h2",children:"Add New Team"}),e.jsx(Q,{margin:"normal",required:!0,fullWidth:!0,id:"teamName",label:"Team Name",name:"teamName",autoFocus:!0,value:o,onChange:t=>s(t.target.value),error:!!n.teamName,helperText:n.teamName}),e.jsx(E,{variant:"contained",color:"primary",onClick:u,style:{marginTop:"16px"},children:"Add Team"})]})})},K=()=>{var f;const[i,m]=a.useState(1),o=10,{data:s,error:n,isLoading:c}=M({page:i,limit:o}),l=s==null?void 0:s.teams,d=(s==null?void 0:s.totalPages)||1,[u,t]=a.useState(!1),[x,C]=a.useState(""),T=O(x,300),[b,{isError:y,error:h}]=F(),S=a.useCallback(()=>t(!0),[]),v=a.useCallback(()=>t(!1),[]),A=a.useCallback(r=>C(r.target.value),[]),k=a.useCallback(async r=>{try{await b(r)}catch(g){console.log(g)}},[b]),w=a.useCallback(r=>{m(r)},[]),N=a.useMemo(()=>l?l.filter(r=>r.name.toLowerCase().includes(T.toLowerCase())).sort((r,g)=>g.points-r.points):[],[l,T]);return c?e.jsx(p,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:e.jsx(L,{})}):e.jsxs(e.Fragment,{children:[e.jsx(j,{variant:"h4",align:"center",gutterBottom:!0,children:"Teams"}),e.jsxs(p,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",children:[e.jsx(G,{onClick:S,label:"Add"}),e.jsx(R,{label:"Search",value:x,onChange:A,placeholder:"Search Teams..."})]}),y||n&&e.jsx(q,{severity:"error",children:((f=h==null?void 0:h.data)==null?void 0:f.message)||n.message}),e.jsx(D,{teams:N,isDelete:!0,handleRemove:k,isAdmin:!0}),e.jsx(I,{page:i,totalPages:d,onPageChange:w}),e.jsx(X,{open:u,handleClose:v})]})};export{K as default};
