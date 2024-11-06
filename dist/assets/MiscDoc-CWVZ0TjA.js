import{B as _,f,c as w,C as l,D as x,U as z,aw as E,a8 as g,a9 as y,a as o,A as L,Z as $,ab as Y,i as D,j as S,d as h,n as q,T as H,k as K,V as O,b as n,r as V,o as W,aQ as N,F as G}from"./index-CMyOcGY-.js";import{s as j}from"./index-YtLhX7yo.js";import{s as Z}from"./index-DeFVd7hh.js";import{s as J}from"./index-DWZV3yyr.js";import{s as A}from"./index-ILA2s2R-.js";import{s as Q}from"./index-DEisYBw6.js";import{a as M}from"./index-fTFhSCOV.js";import{s as ee}from"./index-Dqxa6aS0.js";var te=function(e){var s=e.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(s("skeleton.background"),`;
    border-radius: `).concat(s("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), `).concat(s("skeleton.animation.background"),`, rgba(255, 255, 255, 0) );
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`)},ne={root:{position:"relative"}},se={root:function(e){var s=e.props;return["p-skeleton p-component",{"p-skeleton-circle":s.shape==="circle","p-skeleton-animation-none":s.animation==="none"}]}},oe=_.extend({name:"skeleton",theme:te,classes:se,inlineStyles:ne}),ie={name:"BaseSkeleton",extends:x,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:oe,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},T={name:"Skeleton",extends:ie,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function re(t,e,s,r,c,i){return f(),w("div",l({class:t.cx("root"),style:[t.sx("root"),i.containerStyle],"aria-hidden":"true"},t.ptmi("root")),null,16)}T.render=re;var ae=function(e){var s=e.dt;return`
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * `.concat(s("scrollpanel.bar.size"),`));
    width: calc(100% + calc(2 * `).concat(s("scrollpanel.bar.size"),`));
    padding: 0 calc(2 * `).concat(s("scrollpanel.bar.size"),") calc(2 * ").concat(s("scrollpanel.bar.size"),`) 0;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: `).concat(s("scrollpanel.bar.border.radius"),`;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    transition: outline-color `).concat(s("scrollpanel.transition.duration"),`;
    background: `).concat(s("scrollpanel.bar.background"),`;
    border: 0 none;
    transition: outline-color `).concat(s("scrollpanel.transition.duration"),", opacity ").concat(s("scrollpanel.transition.duration"),`;
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: `).concat(s("scrollpanel.bar.focus.ring.shadow"),`;
    outline: `).concat(s("scrollpanel.barfocus.ring.width")," ").concat(s("scrollpanel.bar.focus.ring.style")," ").concat(s("scrollpanel.bar.focus.ring.color"),`;
    outline-offset: `).concat(s("scrollpanel.barfocus.ring.offset"),`;
}

.p-scrollpanel-bar-y {
    width: `).concat(s("scrollpanel.bar.size"),`;
    top: 0;
}

.p-scrollpanel-bar-x {
    height: `).concat(s("scrollpanel.bar.size"),`;
    bottom: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`)},le={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},ce=_.extend({name:"scrollpanel",theme:ae,classes:le}),ue={name:"BaseScrollPanel",extends:x,props:{step:{type:Number,default:5}},style:ce,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},C={name:"ScrollPanel",extends:ue,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{id:this.$attrs.id,orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},watch:{"$attrs.id":function(e){this.id=e||z()}},mounted:function(){this.id=this.id||z(),this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),s=getComputedStyle(this.$refs.xBar),r=E(this.$el)-parseInt(s.height,10);e["max-height"]!=="none"&&r===0&&(this.$refs.content.offsetHeight+parseInt(s.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var s=this.$refs.content.scrollWidth,r=this.$refs.content.clientWidth,c=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=r/s;var i=this.$refs.content.scrollHeight,d=this.$refs.content.clientHeight,b=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=d/i,this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&g(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&y(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; left:"+e.$refs.content.scrollLeft/s*100+"%;bottom:"+c+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&g(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&y(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/i*100+"% - "+e.$refs.xBar.clientHeight+"px);right:"+b+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&g(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&g(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&g(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&g(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,s){this.$refs.content[e]+=s,this.moveBar()},setTimer:function(e,s){var r=this;this.clearTimer(),this.timer=setTimeout(function(){r.repeat(e,s)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var s=this,r=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){s.$refs.content.scrollLeft+=r/s.scrollXRatio})},onMouseMoveForYBar:function(e){var s=this,r=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){s.$refs.content.scrollTop+=r/s.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var s=window.requestAnimationFrame||this.timeoutFrame;return s(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var s=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>s?s:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(s){e.onDocumentMouseMove(s)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(s){e.onDocumentMouseUp(s)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.id+"_content"}}},de=["id"],pe=["aria-controls","aria-valuenow"],me=["aria-controls","aria-valuenow"];function he(t,e,s,r,c,i){return f(),w("div",l({class:t.cx("root")},t.ptmi("root")),[o("div",l({class:t.cx("contentContainer")},t.ptm("contentContainer")),[o("div",l({ref:"content",id:i.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),onMouseenter:e[1]||(e[1]=function(){return i.moveBar&&i.moveBar.apply(i,arguments)})},t.ptm("content")),[L(t.$slots,"default")],16,de)],16),o("div",l({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":i.contentId,"aria-valuenow":c.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return i.onXBarMouseDown&&i.onXBarMouseDown.apply(i,arguments)}),onKeydown:e[3]||(e[3]=function(d){return i.onKeyDown(d)}),onKeyup:e[4]||(e[4]=function(){return i.onKeyUp&&i.onKeyUp.apply(i,arguments)}),onFocus:e[5]||(e[5]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[6]||(e[6]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,pe),o("div",l({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":i.contentId,"aria-valuenow":c.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return i.onYBarMouseDown&&i.onYBarMouseDown.apply(i,arguments)}),onKeydown:e[8]||(e[8]=function(d){return i.onKeyDown(d)}),onKeyup:e[9]||(e[9]=function(){return i.onKeyUp&&i.onKeyUp.apply(i,arguments)}),onFocus:e[10]||(e[10]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,me)],16)}C.render=he;var fe=function(e){return e.dt,`
.p-scrolltop.p-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.p-scrolltop-sticky.p-button {
    position: sticky;
    display: flex;
    margin-left: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`},ve={root:function(e){var s=e.props;return["p-scrolltop",{"p-scrolltop-sticky":s.target!=="window"}]},icon:"p-scrolltop-icon"},be=_.extend({name:"scrolltop",theme:fe,classes:ve}),ge={name:"BaseScrollTop",extends:x,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:be,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},U={name:"ScrollTop",extends:ge,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&($.clear(this.container),this.overlay=null)},methods:{onClick:function(){var e=this.target==="window"?window:this.$el.parentElement;e.scroll({top:0,behavior:this.behavior})},checkVisibility:function(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(e.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(Y())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(e){$.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(e){$.clear(e)},containerRef:function(e){this.container=e?e.$el:void 0},rootPTOptions:function(){return l(this.ptmi("root"),this.ptm("button"))},iconPTOptions:function(){return l(this.ptmi("root").icon,this.ptm("button").icon)}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:J,Button:A}};function ye(t,e,s,r,c,i){var d=D("Button");return f(),S(O,l({name:"p-scrolltop",appear:"",onEnter:i.onEnter,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:h(function(){return[c.visible?(f(),S(d,l({key:0,ref:i.containerRef,class:t.cx("root"),onClick:i.onClick,"aria-label":i.scrollTopAriaLabel,unstyled:t.unstyled},t.buttonProps,{pt:i.rootPTOptions()}),{icon:h(function(b){return[L(t.$slots,"icon",{class:q(t.cx("icon"))},function(){return[(f(),S(H(t.icon?"span":"ChevronUpIcon"),l({class:[t.cx("icon"),t.icon,b.class]},i.iconPTOptions),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):K("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}U.render=ye;var _e={root:"p-avatar-group p-component"},we=_.extend({name:"avatargroup",classes:_e}),Be={name:"BaseAvatarGroup",extends:x,style:we,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},P={name:"AvatarGroup",extends:Be,inheritAttrs:!1};function xe(t,e,s,r,c,i){return f(),w("div",l({class:t.cx("root")},t.ptmi("root")),[L(t.$slots,"default")],16)}P.render=xe;var Le=function(e){var s=e.dt;return`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: `.concat(s("overlaybadge.outline.width"),`;
    outline-style: solid;
    outline-color: `).concat(s("overlaybadge.outline.color"),`;
}
`)},$e={root:"p-overlaybadge"},Se=_.extend({name:"overlaybadge",theme:Le,classes:$e}),Me={name:"OverlayBadge",extends:M,style:Se,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},F={name:"OverlayBadge",extends:Me,inheritAttrs:!1,components:{Badge:M}};function ke(t,e,s,r,c,i){var d=D("Badge");return f(),w("div",l({class:t.cx("root")},t.ptmi("root")),[L(t.$slots,"default"),n(d,l(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}F.render=ke;const ze={class:"card"},De=o("div",{class:"font-semibold text-xl mb-4"},"ProgressBar",-1),Ae={class:"flex flex-col md:flex-row gap-4"},Te={class:"md:w-1/2"},Ce={class:"md:w-1/2"},Ue={class:"flex flex-col md:flex-row gap-8"},Pe={class:"md:w-1/2"},Fe={class:"card"},Re=o("div",{class:"font-semibold text-xl mb-4"},"Badge",-1),Xe={class:"flex gap-2"},Ie=o("div",{class:"font-semibold my-4"},"Overlay",-1),Ee={class:"flex gap-6"},Ye=o("i",{class:"pi pi-bell",style:{"font-size":"2rem"}},null,-1),qe=o("i",{class:"pi pi-calendar",style:{"font-size":"2rem"}},null,-1),He=o("i",{class:"pi pi-envelope",style:{"font-size":"2rem"}},null,-1),Ke=o("div",{class:"font-semibold my-4"},"Button",-1),Oe={class:"flex gap-2"},Ve=o("div",{class:"font-semibold my-4"},"Sizes",-1),We={class:"flex items-start gap-2"},Ne={class:"card"},Ge=o("div",{class:"font-semibold text-xl mb-4"},"Avatar",-1),je=o("div",{class:"font-semibold mb-4"},"Group",-1),Ze=o("div",{class:"font-semibold my-4"},"Label - Circle",-1),Je=o("div",{class:"font-semibold my-4"},"Icon - Badge",-1),Qe={class:"card"},et=o("div",{class:"font-semibold text-xl mb-4"},"ScrollTop",-1),tt=o("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1),nt={class:"md:w-1/2"},st={class:"card"},ot=o("div",{class:"font-semibold text-xl mb-4"},"Tag",-1),it=o("div",{class:"font-semibold mb-4"},"Default",-1),rt={class:"flex gap-2"},at=o("div",{class:"font-semibold my-4"},"Pills",-1),lt={class:"flex gap-2"},ct=o("div",{class:"font-semibold my-4"},"Icons",-1),ut={class:"flex gap-2"},dt={class:"card"},pt=o("div",{class:"font-semibold text-xl mb-4"},"Chip",-1),mt=o("div",{class:"font-semibold mb-4"},"Basic",-1),ht={class:"flex items-center flex-col sm:flex-row"},ft=o("div",{class:"font-semibold my-4"},"Icon",-1),vt={class:"flex items-center flex-col sm:flex-row"},bt=o("div",{class:"font-semibold my-4"},"Image",-1),gt={class:"flex items-center flex-col sm:flex-row"},yt={class:"card"},_t=o("div",{class:"font-semibold text-xl mb-4"},"Skeleton",-1),wt={class:"rounded-border border border-surface p-6"},Bt={class:"flex mb-4"},xt={class:"flex justify-between mt-4"},Tt={__name:"MiscDoc",setup(t){const e=V(0);let s=null;function r(){s=setInterval(()=>{let i=e.value+Math.floor(Math.random()*10)+1;i>=100&&(i=100),e.value=i},2e3)}function c(){clearInterval(s),s=null}return W(()=>{r()}),N(()=>{c()}),(i,d)=>{const b=ee,m=M,B=F,k=A,p=Q,R=P,X=U,I=C,a=Z,u=j,v=T;return f(),w(G,null,[o("div",ze,[De,o("div",Ae,[o("div",Te,[n(b,{value:e.value},null,8,["value"])]),o("div",Ce,[n(b,{value:50,showValue:!1})])])]),o("div",Ue,[o("div",Pe,[o("div",Fe,[Re,o("div",Xe,[n(m,{value:2}),n(m,{value:8,severity:"success"}),n(m,{value:4,severity:"info"}),n(m,{value:12,severity:"Warn"}),n(m,{value:3,severity:"danger"})]),Ie,o("div",Ee,[n(B,{value:"2"},{default:h(()=>[Ye]),_:1}),n(B,{value:"4",severity:"danger"},{default:h(()=>[qe]),_:1}),n(B,{severity:"danger"},{default:h(()=>[He]),_:1})]),Ke,o("div",Oe,[n(k,{label:"Emails",badge:"8",class:"mr-2"}),n(k,{label:"Messages",icon:"pi pi-users",severity:"warn",badge:"8",badgeClass:"p-badge-danger"})]),Ve,o("div",We,[n(m,{value:2}),n(m,{value:4,size:"large",severity:"warn"}),n(m,{value:6,size:"xlarge",severity:"success"})])]),o("div",Ne,[Ge,je,n(R,null,{default:h(()=>[n(p,{image:"/demo/images/avatar/amyelsner.png",size:"large",shape:"circle"}),n(p,{image:"/demo/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),n(p,{image:"/demo/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),n(p,{image:"/demo/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),n(p,{image:"/demo/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),n(p,{label:"+2",shape:"circle",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),_:1}),Ze,n(p,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),n(p,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196F3",color:"#ffffff"},shape:"circle"}),n(p,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"}),Je,n(B,{value:"4",severity:"danger",class:"inline-flex"},{default:h(()=>[n(p,{label:"U",size:"xlarge"})]),_:1})]),o("div",Qe,[et,n(I,{style:{width:"250px",height:"200px"}},{default:h(()=>[tt,n(X,{target:"parent",threshold:100,icon:"pi pi-arrow-up"})]),_:1})])]),o("div",nt,[o("div",st,[ot,it,o("div",rt,[n(a,{value:"Primary"}),n(a,{severity:"success",value:"Success"}),n(a,{severity:"info",value:"Info"}),n(a,{severity:"warn",value:"Warn"}),n(a,{severity:"danger",value:"Danger"})]),at,o("div",lt,[n(a,{value:"Primary",rounded:!0}),n(a,{severity:"success",value:"Success",rounded:!0}),n(a,{severity:"info",value:"Info",rounded:!0}),n(a,{severity:"warn",value:"Warn",rounded:!0}),n(a,{severity:"danger",value:"Danger",rounded:!0})]),ct,o("div",ut,[n(a,{icon:"pi pi-user",value:"Primary"}),n(a,{icon:"pi pi-check",severity:"success",value:"Success"}),n(a,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),n(a,{con:"pi pi-exclamation-triangle",severity:"warn",value:"Warn"}),n(a,{icon:"pi pi-times",severity:"danger",value:"Danger"})])]),o("div",dt,[pt,mt,o("div",ht,[n(u,{label:"Action",class:"mr-2 mb-2"}),n(u,{label:"Comedy",class:"mr-2 mb-2"}),n(u,{label:"Mystery",class:"mr-2 mb-2"}),n(u,{label:"Thriller",removable:!0,class:"mb-2"})]),ft,o("div",vt,[n(u,{label:"Apple",icon:"pi pi-apple",class:"mr-2 mb-2"}),n(u,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2 mb-2"}),n(u,{label:"Google",icon:"pi pi-google",class:"mr-2 mb-2"}),n(u,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0,class:"mb-2"})]),bt,o("div",gt,[n(u,{label:"Amy Elsner",image:"/demo/images/avatar/amyelsner.png",class:"mr-2 mb-2"}),n(u,{label:"Asiya Javayant",image:"/demo/images/avatar/asiyajavayant.png",class:"mr-2 mb-2"}),n(u,{label:"Onyama Limba",image:"/demo/images/avatar/onyamalimba.png",class:"mr-2 mb-2"})])]),o("div",yt,[_t,o("div",wt,[o("div",Bt,[n(v,{shape:"circle",size:"4rem",class:"mr-2"}),o("div",null,[n(v,{width:"10rem",class:"mb-2"}),n(v,{width:"5rem",class:"mb-2"}),n(v,{height:".5rem"})])]),n(v,{width:"100%",height:"150px"}),o("div",xt,[n(v,{width:"4rem",height:"2rem"}),n(v,{width:"4rem",height:"2rem"})])])])])])],64)}}};export{Tt as default};
