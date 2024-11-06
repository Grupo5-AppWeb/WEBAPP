import{S as _}from"./supplier-profile-api.service-CGW6STT1.js";import{T as h}from"./toolbar-login.component-CTPhxrfH.js";import{_ as v,c as g,b as p,a as e,s as r,v as i,b4 as c,d as b,F as w,e as x,i as m,f as y,l as S,p as V,g as U}from"./index-CMyOcGY-.js";import"./http-common-CiLYNU3f.js";import"./axios-CCb-kr4I.js";const A={name:"register",components:{ToolbarLogin:h},data(){return{name:"",lastname:"",email:"",password:""}},methods:{async register(){if(this.name&&this.lastname&&this.email&&this.password){const o={name:this.name,lastname:this.lastname,email:this.email,password:this.password},s=new _;try{(await s.create(o)).status===201?this.$router.push("/login"):alert("Failed user registration")}catch(n){console.error("Error registering user:",n),alert("Error registering user")}}else alert("Please fill all the fields")}}},l=o=>(V("data-v-2cd887f0"),o=o(),U(),o),N={class:"background-container"},k={class:"register-container"},C=l(()=>e("div",{class:"register-header"},[e("h1",null,"Register")],-1)),I={class:"register-field"},E={class:"register-field"},T={class:"register-field"},R={class:"register-field"},F={class:"register-field"},B=l(()=>e("label",null,"Choose Role:",-1)),L=l(()=>e("label",{for:"administrator"},"Administrator",-1)),P=l(()=>e("label",{for:"supplier"},"Supplier",-1)),M=x('<div class="terms-condition" data-v-2cd887f0><input type="checkbox" id="terms" data-v-2cd887f0><label for="terms" data-v-2cd887f0>I agree to the</label><span class="spacer" data-v-2cd887f0></span><a href="#" class="condition" data-v-2cd887f0>terms &amp; condition</a></div>',1),q={class:"have-account"},D=l(()=>e("label",{for:"question"},"Already have an account?",-1)),O=l(()=>e("span",{class:"spacer"},null,-1));function j(o,s,n,z,a,d){const u=m("toolbar-login"),f=m("router-link");return y(),g(w,null,[p(u),e("div",N,[e("div",k,[C,e("div",I,[r(e("input",{class:"textbox",type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>a.name=t),placeholder:"First Name"},null,512),[[i,a.name]])]),e("div",E,[r(e("input",{class:"textbox",type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>a.lastname=t),placeholder:"Last Name"},null,512),[[i,a.lastname]])]),e("div",T,[r(e("input",{class:"textbox",type:"email","onUpdate:modelValue":s[2]||(s[2]=t=>a.email=t),placeholder:"Email Address"},null,512),[[i,a.email]])]),e("div",R,[r(e("input",{class:"textbox",type:"password","onUpdate:modelValue":s[3]||(s[3]=t=>a.password=t),placeholder:"Password"},null,512),[[i,a.password]])]),e("div",F,[B,e("div",null,[r(e("input",{type:"radio",id:"administrator",value:"Administrator","onUpdate:modelValue":s[4]||(s[4]=t=>o.role=t)},null,512),[[c,o.role]]),L]),e("div",null,[r(e("input",{type:"radio",id:"supplier",value:"Supplier","onUpdate:modelValue":s[5]||(s[5]=t=>o.role=t)},null,512),[[c,o.role]]),P])]),M,e("button",{class:"buttonRegister",onClick:s[6]||(s[6]=(...t)=>d.register&&d.register(...t))},"CREATE AN ACCOUNT"),e("div",q,[D,O,p(f,{to:"/login",class:"logIn"},{default:b(()=>[S("Log In")]),_:1})])])])],64)}const W=v(A,[["render",j],["__scopeId","data-v-2cd887f0"]]);export{W as default};
