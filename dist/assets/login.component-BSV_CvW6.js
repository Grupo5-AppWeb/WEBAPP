import{a as h,S as b}from"./supplier-profile-api.service-CGW6STT1.js";import{T as v}from"./toolbar-login.component-CTPhxrfH.js";import{_ as w,c as l,b as i,a as e,s as c,v as d,l as p,d as x,k,F as I,i as m,f as u,p as S,g as y}from"./index-CMyOcGY-.js";import"./http-common-CiLYNU3f.js";import"./axios-CCb-kr4I.js";const N={name:"login",components:{ToolbarLogin:v},data(){return{email:"",password:"",loggedIn:!1,user:[]}},methods:{login(){this.user.find(o=>o.email===this.email&&o.password===this.password)?this.loggedIn=!0:alert("Invalid email or password")}},async mounted(){const s=new b;try{const o=await s.getAll();this.user=o.data.map(n=>h.fromApiResponse(n)),console.log(this.user)}catch{console.error("Error")}}},g=s=>(S("data-v-28baab9c"),s=s(),y(),s),V={class:"background-container"},C={class:"login-container"},P={key:0},A=g(()=>e("div",{class:"login-header"},[e("h1",null,"Log In")],-1)),T={class:"login-field"},U={class:"login-field"},B=g(()=>e("div",{class:"remember-forgot"},[e("input",{type:"checkbox",id:"remember"}),e("label",{for:"remember"},"Remember me"),e("a",{href:"#",class:"forgot-link"},"Forgot Password?")],-1)),E={class:"signup-link"};function F(s,o,n,L,t,a){const _=m("toolbar-login"),f=m("router-link");return u(),l(I,null,[i(_),e("div",V,[e("div",C,[t.loggedIn?k("",!0):(u(),l("div",P,[A,e("div",T,[c(e("input",{class:"textbox",type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>t.email=r),placeholder:"Email Address"},null,512),[[d,t.email]])]),e("div",U,[c(e("input",{class:"textbox",type:"password","onUpdate:modelValue":o[1]||(o[1]=r=>t.password=r),placeholder:"Password"},null,512),[[d,t.password]])]),B,e("button",{class:"buttonLogin",onClick:o[2]||(o[2]=(...r)=>a.login&&a.login(...r))},"SIGN UP"),e("div",E,[e("span",null,[p("New to Re-grill? "),i(f,{to:"/register",class:"register"},{default:x(()=>[p("Create an account")]),_:1})])])]))])])],64)}const q=w(N,[["render",F],["__scopeId","data-v-28baab9c"]]);export{q as default};