import{u as J,r,a0 as U,j as e,Y as E,B as C,T as b,a1 as x,a as f,a2 as V,b as Y,c as $,a3 as z,C as K}from"./index-DUUKgbV5.js";import{P as X}from"./ParticipantsList-C1kKHLTr.js";import{T as Z,F as S,I,S as A}from"./TextField-CmRmFZgE.js";import{A as M,u as _,S as ee}from"./useDebounce-KC95HaKY.js";import{F as ae}from"./FilterButton-CWiTerSm.js";import{A as re}from"./AddButton-DRkXyOua.js";const te={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},oe=["lp","up","hs","hss","junior"],se=({open:o,handleClose:i})=>{const{data:j,isLoading:c,isError:p}=J(),[l,u]=r.useState(""),[m,n]=r.useState(""),[d,y]=r.useState(""),[s,P]=r.useState({}),[g]=U(),v=()=>{const a={};return l||(a.participantName="Participant name is required"),m||(a.teamId="Team selection is required"),d||(a.category="Category selection is required"),P(a),Object.keys(a).length===0},t=async()=>{if(v())try{await g({name:l,team:m,category:d}),u(""),n(""),y(""),P({}),i()}catch(a){console.error("Error adding participant:",a)}};return e.jsx(E,{open:o,onClose:i,"aria-labelledby":"add-participant-modal-title","aria-describedby":"add-participant-modal-description",children:e.jsxs(C,{sx:te,children:[e.jsx(b,{id:"add-participant-modal-title",variant:"h6",component:"h2",children:"Add New Participant"}),e.jsx(Z,{margin:"normal",required:!0,fullWidth:!0,id:"participantName",label:"Participant Name",name:"participantName",autoFocus:!0,value:l,onChange:a=>u(a.target.value),error:!!s.participantName,helperText:s.participantName}),e.jsxs(S,{fullWidth:!0,required:!0,margin:"normal",error:!!s.teamId,children:[e.jsx(I,{id:"team-label",children:"Team"}),e.jsx(A,{labelId:"team-label",id:"teamId",value:m,onChange:a=>n(a.target.value),label:"Team",children:c?e.jsx(x,{disabled:!0,children:"Loading teams..."}):p?e.jsx(x,{disabled:!0,children:"Error loading teams"}):j.teams.map(a=>e.jsx(x,{value:a.id,children:a.name},a.id))}),s.teamId&&e.jsx(b,{color:"error",variant:"caption",children:s.teamId})]}),e.jsxs(S,{fullWidth:!0,required:!0,margin:"normal",error:!!s.category,children:[e.jsx(I,{id:"category-label",children:"Category"}),e.jsx(A,{labelId:"category-label",id:"category",value:d,onChange:a=>y(a.target.value),label:"Category",children:oe.map(a=>e.jsx(x,{value:a,children:a},a))}),s.category&&e.jsx(b,{color:"error",variant:"caption",children:s.category})]}),e.jsx(f,{variant:"contained",color:"primary",onClick:t,style:{marginTop:"16px"},children:"Add Participant"})]})})},ie={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},ne=({open:o,handleClose:i,participantId:j})=>{const[c,p]=r.useState(""),[l,u]=r.useState({}),[m,{isError:n,error:d}]=V(),{data:y,isLoading:s,isError:P}=Y(),g=()=>{const t={};return c||(t.programId="Program selection is required"),u(t),Object.keys(t).length===0},v=async()=>{if(g())try{await m({id:j,programId:c}),p(""),u({}),i()}catch(t){console.error("Error adding program:",t)}};return e.jsx(E,{open:o,onClose:i,"aria-labelledby":"add-program-modal-title","aria-describedby":"add-program-modal-description",children:e.jsxs(C,{sx:ie,children:[e.jsx(b,{id:"add-program-modal-title",variant:"h6",component:"h2",children:"Add Program to Participant"}),n&&e.jsx(M,{severity:"error",style:{marginBottom:"16px"},children:d.data.message}),e.jsxs(S,{fullWidth:!0,required:!0,margin:"normal",error:!!l.programId,children:[e.jsx(I,{id:"program-label",children:"Program Name"}),e.jsx(A,{labelId:"program-label",id:"programId",value:c,onChange:t=>p(t.target.value),label:"Program Name",children:s?e.jsx(x,{disabled:!0,children:"Loading programs..."}):P?e.jsx(x,{disabled:!0,children:"Error loading programs"}):y.programs.map(t=>e.jsx(x,{value:t.id,children:t.name},t.id))}),l.programId&&e.jsx(b,{color:"error",variant:"caption",children:l.programId})]}),e.jsx(f,{variant:"contained",color:"primary",onClick:v,style:{marginTop:"16px"},children:"Add Program"})]})})},ge=()=>{var T;const[o,i]=r.useState(1),[j,c]=r.useState(""),[p,l]=r.useState(""),u=10,m=_(p,300),{data:n,error:d,isLoading:y}=$({page:o,limit:u,category:j,search:m}),[s,{isError:P,error:g}]=z(),[v,t]=r.useState(!1),[a,k]=r.useState(!1),[N,w]=r.useState(null),F=r.useCallback(()=>t(!1),[]),q=r.useCallback(()=>k(!1),[]),B=r.useCallback(h=>{c(h),i(1)},[]),L=r.useCallback(h=>{l(h.target.value),i(1)},[]),O=r.useCallback(async h=>{try{await s(h).unwrap()}catch(R){console.error("Error deleting participant:",R)}},[s]),W=r.useCallback(h=>{w(h),k(!0)},[]),G=r.useCallback(()=>t(!0),[]),Q=r.useCallback(()=>{o<n.totalPages&&i(o+1)},[o,n]),D=r.useCallback(()=>{o>1&&i(o-1)},[o]);if(y)return e.jsx(C,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:e.jsx(K,{})});const H=[{label:"All",value:""},{label:"LP",value:"lp"},{label:"UP",value:"up"},{label:"HS",value:"hs"},{label:"HSS",value:"hss"},{label:"Junior",value:"junior"}];return e.jsxs(e.Fragment,{children:[e.jsx(b,{variant:"h4",align:"center",gutterBottom:!0,children:"Participants"}),e.jsxs(C,{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",children:[e.jsx(re,{onClick:G,label:"Add"}),e.jsx(ee,{label:"Search",value:p,onChange:L,placeholder:"Search participants..."}),e.jsx(ae,{label:"Category",options:H,selectedValue:j,onChange:B})]}),(P||d)&&e.jsx(M,{severity:"error",children:((T=g==null?void 0:g.data)==null?void 0:T.message)??d.message}),e.jsx(X,{participants:n.participants,actions:{remove:!0,edit:!0,addProgram:!0},handleRemove:O,handleAddProgram:W}),e.jsxs(C,{display:"flex",justifyContent:"center",mt:2,children:[e.jsx(f,{variant:"contained",color:"primary",onClick:D,disabled:o===1,children:"Previous"}),e.jsxs(b,{variant:"body1",mx:2,children:["Page ",o," of ",n.totalPages]}),e.jsx(f,{variant:"contained",color:"primary",onClick:Q,disabled:o===n.totalPages,children:"Next"})]}),e.jsx(se,{open:v,handleClose:F}),e.jsx(ne,{open:a,handleClose:q,participantId:N})]})};export{ge as default};