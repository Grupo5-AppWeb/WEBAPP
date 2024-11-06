import{s as J}from"./index-DNr8guVF.js";import{s as X}from"./index-BEScgHNf.js";import{s as Z}from"./index-MBtfZCGH.js";import{s as ee}from"./index-CHUQlls4.js";import{s as te}from"./index-Bvd2RL0O.js";import{s as le}from"./index-BNPcgSDL.js";import{s as oe}from"./index-DeFVd7hh.js";import{s as ae}from"./index-IqQSoGa_.js";import{s as se}from"./index-Bua9gdwV.js";import{a as ie,s as ne}from"./index-Czgw4Q1G.js";import{s as re}from"./index-BMZz8dJX.js";import{s as ue}from"./index-BcAgKGA-.js";import{s as de}from"./index-ILA2s2R-.js";import{P as ce}from"./ProductService-BtITuo-x.js";import{o as me,aD as pe,r as u,c as y,a,b as o,d as n,f as g,l as x,t as U,k as h,aR as ve}from"./index-CMyOcGY-.js";import"./index-DHaBL8G4.js";import"./index-BVVSqMWM.js";import"./index-YSt3OQ2-.js";import"./index-fTFhSCOV.js";import"./index-B173WLjv.js";import"./index-D_oWc_cZ.js";import"./index-DQVnuBTT.js";import"./index-B7hVmtDm.js";import"./index-Dr0wav3x.js";import"./index-BzpQufh8.js";import"./index-CA1MwNCX.js";import"./index-BFqrS509.js";const fe={class:"card"},ye={class:"flex flex-wrap gap-2 items-center justify-between"},ge=a("h4",{class:"m-0"},"Manage Products",-1),be=a("i",{class:"pi pi-search"},null,-1),_e=["src","alt"],he={class:"flex flex-col gap-6"},Se=["src","alt"],ke=a("label",{for:"name",class:"block font-bold mb-3"},"Name",-1),xe={key:0,class:"text-red-500"},Ce=a("label",{for:"description",class:"block font-bold mb-3"},"Description",-1),Ve=a("label",{for:"inventoryStatus",class:"block font-bold mb-3"},"Inventory Status",-1),we=a("span",{class:"block font-bold mb-4"},"Category",-1),Pe={class:"grid grid-cols-12 gap-4"},Ue={class:"flex items-center gap-2 col-span-6"},Te=a("label",{for:"category1"},"Accessories",-1),De={class:"flex items-center gap-2 col-span-6"},Ne=a("label",{for:"category2"},"Clothing",-1),$e={class:"flex items-center gap-2 col-span-6"},Oe=a("label",{for:"category3"},"Electronics",-1),Ie={class:"flex items-center gap-2 col-span-6"},Le=a("label",{for:"category4"},"Fitness",-1),Me={class:"grid grid-cols-12 gap-4"},Ke={class:"col-span-6"},Re=a("label",{for:"price",class:"block font-bold mb-3"},"Price",-1),qe={class:"col-span-6"},Fe=a("label",{for:"quantity",class:"block font-bold mb-3"},"Quantity",-1),Ae={class:"flex items-center gap-4"},Be=a("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1),Ee={key:0},We={class:"flex items-center gap-4"},Ye=a("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1),je={key:0},St={__name:"Crud",setup(Qe){me(()=>{ce.getProducts().then(s=>r.value=s)});const b=pe(),C=u(),r=u(),c=u(!1),p=u(!1),v=u(!1),e=u({}),m=u(),S=u({global:{value:null,matchMode:ve.CONTAINS}}),f=u(!1),T=u([{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]);function D(s){if(s)return s.toLocaleString("en-US",{style:"currency",currency:"USD"})}function N(){e.value={},f.value=!1,c.value=!0}function $(){c.value=!1,f.value=!1}function O(){var s;f.value=!0,(s=e==null?void 0:e.value.name)!=null&&s.trim()&&(e.value.id?(e.value.inventoryStatus=e.value.inventoryStatus.value?e.value.inventoryStatus.value:e.value.inventoryStatus,r.value[K(e.value.id)]=e.value,b.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(e.value.id=V(),e.value.code=V(),e.value.image="product-placeholder.svg",e.value.inventoryStatus=e.value.inventoryStatus?e.value.inventoryStatus.value:"INSTOCK",r.value.push(e.value),b.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),c.value=!1,e.value={})}function I(s){e.value={...s},c.value=!0}function L(s){e.value=s,p.value=!0}function M(){r.value=r.value.filter(s=>s.id!==e.value.id),p.value=!1,e.value={},b.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})}function K(s){let l=-1;for(let i=0;i<r.value.length;i++)if(r.value[i].id===s){l=i;break}return l}function V(){let s="";for(var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<5;i++)s+=l.charAt(Math.floor(Math.random()*l.length));return s}function R(){C.value.exportCSV()}function q(){v.value=!0}function F(){r.value=r.value.filter(s=>!m.value.includes(s)),v.value=!1,m.value=null,b.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}function A(s){switch(s){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}}return(s,l)=>{const i=de,B=ue,E=ie,w=re,W=ne,d=se,Y=ae,j=oe,Q=le,z=te,G=ee,_=Z,P=X,k=J;return g(),y("div",null,[a("div",fe,[o(B,{class:"mb-6"},{start:n(()=>[o(i,{label:"New",icon:"pi pi-plus",severity:"secondary",class:"mr-2",onClick:N}),o(i,{label:"Delete",icon:"pi pi-trash",severity:"secondary",onClick:q,disabled:!m.value||!m.value.length},null,8,["disabled"])]),end:n(()=>[o(i,{label:"Export",icon:"pi pi-upload",severity:"secondary",onClick:l[0]||(l[0]=t=>R(t))})]),_:1}),o(Q,{ref_key:"dt",ref:C,selection:m.value,"onUpdate:selection":l[2]||(l[2]=t=>m.value=t),value:r.value,dataKey:"id",paginator:!0,rows:10,filters:S.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products"},{header:n(()=>[a("div",ye,[ge,o(W,null,{default:n(()=>[o(E,null,{default:n(()=>[be]),_:1}),o(w,{modelValue:S.value.global.value,"onUpdate:modelValue":l[1]||(l[1]=t=>S.value.global.value=t),placeholder:"Search..."},null,8,["modelValue"])]),_:1})])]),default:n(()=>[o(d,{selectionMode:"multiple",style:{width:"3rem"},exportable:!1}),o(d,{field:"code",header:"Code",sortable:"",style:{"min-width":"12rem"}}),o(d,{field:"name",header:"Name",sortable:"",style:{"min-width":"16rem"}}),o(d,{header:"Image"},{body:n(t=>[a("img",{src:`https://primefaces.org/cdn/primevue/images/product/${t.data.image}`,alt:t.data.image,class:"rounded",style:{width:"64px"}},null,8,_e)]),_:1}),o(d,{field:"price",header:"Price",sortable:"",style:{"min-width":"8rem"}},{body:n(t=>[x(U(D(t.data.price)),1)]),_:1}),o(d,{field:"category",header:"Category",sortable:"",style:{"min-width":"10rem"}}),o(d,{field:"rating",header:"Reviews",sortable:"",style:{"min-width":"12rem"}},{body:n(t=>[o(Y,{modelValue:t.data.rating,readonly:!0},null,8,["modelValue"])]),_:1}),o(d,{field:"inventoryStatus",header:"Status",sortable:"",style:{"min-width":"12rem"}},{body:n(t=>[o(j,{value:t.data.inventoryStatus,severity:A(t.data.inventoryStatus)},null,8,["value","severity"])]),_:1}),o(d,{exportable:!1,style:{"min-width":"12rem"}},{body:n(t=>[o(i,{icon:"pi pi-pencil",outlined:"",rounded:"",class:"mr-2",onClick:H=>I(t.data)},null,8,["onClick"]),o(i,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:H=>L(t.data)},null,8,["onClick"])]),_:1})]),_:1},8,["selection","value","filters"])]),o(k,{visible:c.value,"onUpdate:visible":l[12]||(l[12]=t=>c.value=t),style:{width:"450px"},header:"Product Details",modal:!0},{footer:n(()=>[o(i,{label:"Cancel",icon:"pi pi-times",text:"",onClick:$}),o(i,{label:"Save",icon:"pi pi-check",onClick:O})]),default:n(()=>[a("div",he,[e.value.image?(g(),y("img",{key:0,src:`https://primefaces.org/cdn/primevue/images/product/${e.value.image}`,alt:e.value.image,class:"block m-auto pb-4"},null,8,Se)):h("",!0),a("div",null,[ke,o(w,{id:"name",modelValue:e.value.name,"onUpdate:modelValue":l[3]||(l[3]=t=>e.value.name=t),modelModifiers:{trim:!0},required:"true",autofocus:"",invalid:f.value&&!e.value.name,fluid:""},null,8,["modelValue","invalid"]),f.value&&!e.value.name?(g(),y("small",xe,"Name is required.")):h("",!0)]),a("div",null,[Ce,o(z,{id:"description",modelValue:e.value.description,"onUpdate:modelValue":l[4]||(l[4]=t=>e.value.description=t),required:"true",rows:"3",cols:"20",fluid:""},null,8,["modelValue"])]),a("div",null,[Ve,o(G,{id:"inventoryStatus",modelValue:e.value.inventoryStatus,"onUpdate:modelValue":l[5]||(l[5]=t=>e.value.inventoryStatus=t),options:T.value,optionLabel:"label",placeholder:"Select a Status",fluid:""},null,8,["modelValue","options"])]),a("div",null,[we,a("div",Pe,[a("div",Ue,[o(_,{id:"category1",modelValue:e.value.category,"onUpdate:modelValue":l[6]||(l[6]=t=>e.value.category=t),name:"category",value:"Accessories"},null,8,["modelValue"]),Te]),a("div",De,[o(_,{id:"category2",modelValue:e.value.category,"onUpdate:modelValue":l[7]||(l[7]=t=>e.value.category=t),name:"category",value:"Clothing"},null,8,["modelValue"]),Ne]),a("div",$e,[o(_,{id:"category3",modelValue:e.value.category,"onUpdate:modelValue":l[8]||(l[8]=t=>e.value.category=t),name:"category",value:"Electronics"},null,8,["modelValue"]),Oe]),a("div",Ie,[o(_,{id:"category4",modelValue:e.value.category,"onUpdate:modelValue":l[9]||(l[9]=t=>e.value.category=t),name:"category",value:"Fitness"},null,8,["modelValue"]),Le])])]),a("div",Me,[a("div",Ke,[Re,o(P,{id:"price",modelValue:e.value.price,"onUpdate:modelValue":l[10]||(l[10]=t=>e.value.price=t),mode:"currency",currency:"USD",locale:"en-US",fluid:""},null,8,["modelValue"])]),a("div",qe,[Fe,o(P,{id:"quantity",modelValue:e.value.quantity,"onUpdate:modelValue":l[11]||(l[11]=t=>e.value.quantity=t),integeronly:"",fluid:""},null,8,["modelValue"])])])])]),_:1},8,["visible"]),o(k,{visible:p.value,"onUpdate:visible":l[14]||(l[14]=t=>p.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n(()=>[o(i,{label:"No",icon:"pi pi-times",text:"",onClick:l[13]||(l[13]=t=>p.value=!1)}),o(i,{label:"Yes",icon:"pi pi-check",onClick:M})]),default:n(()=>[a("div",Ae,[Be,e.value?(g(),y("span",Ee,[x("Are you sure you want to delete "),a("b",null,U(e.value.name),1),x("?")])):h("",!0)])]),_:1},8,["visible"]),o(k,{visible:v.value,"onUpdate:visible":l[16]||(l[16]=t=>v.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n(()=>[o(i,{label:"No",icon:"pi pi-times",text:"",onClick:l[15]||(l[15]=t=>v.value=!1)}),o(i,{label:"Yes",icon:"pi pi-check",text:"",onClick:F})]),default:n(()=>[a("div",We,[Ye,e.value?(g(),y("span",je,"Are you sure you want to delete the selected products?")):h("",!0)])]),_:1},8,["visible"])])}}};export{St as default};
