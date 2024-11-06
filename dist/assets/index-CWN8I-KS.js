import{B as N,a0 as k,S as U,a5 as W,s as Y,f as d,c as p,a as v,A as b,n as P,C as r,k as S,t as y,D as q,X as m,$ as V,i as x,F as B,q as Q,j as A,W as X,d as F,U as z,E as R,G as j,an as oe,Y as se,a1 as M,Q as le,a2 as ae,a4 as re,b as T,a6 as ue,l as D}from"./index-CMyOcGY-.js";import{a as de,b as ce,c as pe}from"./index-CHUQlls4.js";import{a as fe,s as he}from"./index-Czgw4Q1G.js";import{s as be}from"./index-BMZz8dJX.js";var ge=function(e){var n=e.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("togglebutton.color"),`;
    background: `).concat(n("togglebutton.background"),`;
    border: 1px solid `).concat(n("togglebutton.border.color"),`;
    padding: `).concat(n("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(n("togglebutton.transition.duration"),", color ").concat(n("togglebutton.transition.duration"),", border-color ").concat(n("togglebutton.transition.duration"),`,
        outline-color `).concat(n("togglebutton.transition.duration"),", box-shadow ").concat(n("togglebutton.transition.duration"),`;
    border-radius: `).concat(n("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(n("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(n("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(n("togglebutton.transition.duration"),", color ").concat(n("togglebutton.transition.duration"),", border-color ").concat(n("togglebutton.transition.duration"),`,
            outline-color `).concat(n("togglebutton.transition.duration"),", box-shadow ").concat(n("togglebutton.transition.duration"),`;
    position: absolute;
    left: `).concat(n("togglebutton.content.left"),`;
    top: `).concat(n("togglebutton.content.top"),`;
    width: calc(100% - calc(2 *  `).concat(n("togglebutton.content.left"),`));
    height: calc(100% - calc(2 *  `).concat(n("togglebutton.content.top"),`));
    border-radius: `).concat(n("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(n("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(n("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(n("togglebutton.hover.background"),`;
    color: `).concat(n("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(n("togglebutton.checked.background"),`;
    border-color: `).concat(n("togglebutton.checked.border.color"),`;
    color: `).concat(n("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(n("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(n("togglebutton.focus.ring.width")," ").concat(n("togglebutton.focus.ring.style")," ").concat(n("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(n("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(n("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(n("togglebutton.disabled.background"),`;
    border-color: `).concat(n("togglebutton.disabled.border.color"),`;
    color: `).concat(n("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.disabled.color"),`;
}
`)},me={root:function(e){var n=e.instance,o=e.props;return["p-togglebutton p-component",{"p-togglebutton-checked":n.active,"p-invalid":o.invalid}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Oe=N.extend({name:"togglebutton",theme:ge,classes:me}),ye={name:"BaseToggleButton",extends:q,props:{modelValue:Boolean,onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Oe,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},J={name:"ToggleButton",extends:ye,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.$emit("update:modelValue",!this.modelValue),this.$emit("change",e))}},computed:{active:function(){return this.modelValue===!0},hasLabel:function(){return k(this.onLabel)&&k(this.offLabel)},label:function(){return this.hasLabel?this.modelValue?this.onLabel:this.offLabel:"&nbsp;"}},directives:{ripple:U}},ve=["tabindex","disabled","aria-pressed","data-p-checked","data-p-disabled"];function xe(t,e,n,o,s,i){var l=W("ripple");return Y((d(),p("button",r({type:"button",class:t.cx("root"),tabindex:t.tabindex,disabled:t.disabled,"aria-pressed":t.modelValue,onClick:e[0]||(e[0]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},i.getPTOptions("root"),{"data-p-checked":i.active,"data-p-disabled":t.disabled}),[v("span",r({class:t.cx("content")},i.getPTOptions("content")),[b(t.$slots,"default",{},function(){return[b(t.$slots,"icon",{value:t.modelValue,class:P(t.cx("icon"))},function(){return[t.onIcon||t.offIcon?(d(),p("span",r({key:0,class:[t.cx("icon"),t.modelValue?t.onIcon:t.offIcon]},i.getPTOptions("icon")),null,16)):S("",!0)]}),v("span",r({class:t.cx("label")},i.getPTOptions("label")),y(i.label),17)]})],16)],16,ve)),[[l]])}J.render=xe;var Ie=function(e){var n=e.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(n("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-left-width: 1px;
    border-top-left-radius: `).concat(n("selectbutton.border.radius"),`;
    border-bottom-left-radius: `).concat(n("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-top-right-radius: `).concat(n("selectbutton.border.radius"),`;
    border-bottom-right-radius: `).concat(n("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(n("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},Se={root:function(e){var n=e.props;return["p-selectbutton p-component",{"p-invalid":n.invalid}]}},ke=N.extend({name:"selectbutton",theme:Ie,classes:Se}),Fe={name:"BaseSelectButton",extends:q,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},invalid:{type:Boolean,default:!1},disabled:Boolean,dataKey:null,ariaLabelledby:{type:String,default:null}},style:ke,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function Ve(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Z(t))||e){n&&(t=n);var o=0,s=function(){};return{s,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(O){throw O},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,l=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var O=n.next();return l=O.done,O},e:function(O){a=!0,i=O},f:function(){try{l||n.return==null||n.return()}finally{if(a)throw i}}}}function Le(t){return Me(t)||Ke(t)||Z(t)||we()}function we(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(t,e){if(t){if(typeof t=="string")return H(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(t,e):void 0}}function Ke(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Me(t){if(Array.isArray(t))return H(t)}function H(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var Te={name:"SelectButton",extends:Fe,inheritAttrs:!1,emits:["update:modelValue","change"],methods:{getOptionLabel:function(e){return this.optionLabel?m(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?m(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?m(e,this.dataKey):this.getOptionLabel(e)},getPTOptions:function(e,n){return this.ptm(n,{context:{active:this.isSelected(e),disabled:this.isOptionDisabled(e),option:e}})},isOptionDisabled:function(e){return this.optionDisabled?m(e,this.optionDisabled):!1},onOptionSelect:function(e,n,o){var s=this;if(!(this.disabled||this.isOptionDisabled(n))){var i=this.isSelected(n);if(!(i&&!this.allowEmpty)){var l=this.getOptionValue(n),a;this.multiple?i?a=this.modelValue.filter(function(u){return!V(u,l,s.equalityKey)}):a=this.modelValue?[].concat(Le(this.modelValue),[l]):[l]:a=i?null:l,this.focusedIndex=o,this.$emit("update:modelValue",a),this.$emit("change",{event:e,value:a})}}},isSelected:function(e){var n=!1,o=this.getOptionValue(e);if(this.multiple){if(this.modelValue){var s=Ve(this.modelValue),i;try{for(s.s();!(i=s.n()).done;){var l=i.value;if(V(l,o,this.equalityKey)){n=!0;break}}}catch(a){s.e(a)}finally{s.f()}}}else n=V(this.modelValue,o,this.equalityKey);return n}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:U},components:{ToggleButton:J}},De=["aria-labelledby"];function Be(t,e,n,o,s,i){var l=x("ToggleButton");return d(),p("div",r({class:t.cx("root"),role:"group","aria-labelledby":t.ariaLabelledby},t.ptmi("root")),[(d(!0),p(B,null,Q(t.options,function(a,u){return d(),A(l,{key:i.getOptionRenderKey(a),modelValue:i.isSelected(a),onLabel:i.getOptionLabel(a),offLabel:i.getOptionLabel(a),disabled:t.disabled||i.isOptionDisabled(a),unstyled:t.unstyled,onChange:function(E){return i.onOptionSelect(E,a,u)},pt:t.ptm("pcButton")},X({_:2},[t.$slots.option?{name:"default",fn:F(function(){return[b(t.$slots,"option",{option:a,index:u},function(){return[v("span",r({ref_for:!0},t.ptm("pcButton").label),y(i.getOptionLabel(a)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","onChange","pt"])}),128))],16,De)}Te.render=Be;var Ae=function(e){var n=e.dt;return`
.p-listbox {
    background: `.concat(n("listbox.background"),`;
    color: `).concat(n("listbox.color"),`;
    border: 1px solid `).concat(n("listbox.border.color"),`;
    border-radius: `).concat(n("listbox.border.radius"),`;
    transition: background `).concat(n("listbox.transition.duration"),", color ").concat(n("listbox.transition.duration"),", border-color ").concat(n("listbox.transition.duration"),`,
            box-shadow `).concat(n("listbox.transition.duration"),", outline-color ").concat(n("listbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("listbox.shadow"),`;
}

.p-listbox.p-focus {
    border-color: `).concat(n("listbox.focus.border.color"),`;
    box-shadow: `).concat(n("listbox.focus.ring.shadow"),`;
    outline: `).concat(n("listbox.focus.ring.width")," ").concat(n("listbox.focus.ring.style")," ").concat(n("listbox.focus.ring.color"),`;
    outline-offset: `).concat(n("listbox.focus.ring.offset"),`;
}

.p-listbox.p-disabled {
    opacity: 1;
    background: `).concat(n("listbox.disabled.background"),`;
    color: `).concat(n("listbox.disabled.color"),`;
}

.p-listbox.p-disabled .p-listbox-option {
    color: `).concat(n("listbox.disabled.color"),`;
}

.p-listbox.p-invalid {
    border-color: `).concat(n("listbox.invalid.border.color"),`;
}

.p-listbox-header {
    padding: `).concat(n("listbox.list.header.padding"),`;
}

.p-listbox-filter {
    width: 100%;
}

.p-listbox-list-container {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: `).concat(n("listbox.list.padding"),`;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("listbox.list.gap"),`;
}

.p-listbox-option {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: `).concat(n("listbox.option.padding"),`;
    border: 0 none;
    border-radius: `).concat(n("listbox.option.border.radius"),`;
    color: `).concat(n("listbox.option.color"),`;
    transition: background `).concat(n("listbox.transition.duration"),", color ").concat(n("listbox.transition.duration"),", border-color ").concat(n("listbox.transition.duration"),`,
            box-shadow `).concat(n("listbox.transition.duration"),", outline-color ").concat(n("listbox.transition.duration"),`;
}

.p-listbox-striped li:nth-child(even of .p-listbox-option) {
    background: `).concat(n("listbox.option.striped.background"),`;
}

.p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected {
    background: `).concat(n("listbox.option.selected.background"),`;
    color: `).concat(n("listbox.option.selected.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-option.p-listbox-option-selected.p-focus {
    background: `).concat(n("listbox.option.selected.focus.background"),`;
    color: `).concat(n("listbox.option.selected.focus.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("listbox.option.focus.background"),`;
    color: `).concat(n("listbox.option.focus.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled):hover {
    background: `).concat(n("listbox.option.focus.background"),`;
    color: `).concat(n("listbox.option.focus.color"),`;
}

.p-listbox-option-check-icon {
    position: relative;
    margin-inline-start: `).concat(n("listbox.checkmark.gutter.start"),`;
    margin-inline-end: `).concat(n("listbox.checkmark.gutter.end"),`;
    color: `).concat(n("listbox.checkmark.color"),`;
}

.p-listbox-option-group {
    margin: 0;
    padding: `).concat(n("listbox.option.group.padding"),`;
    color: `).concat(n("listbox.option.group.color"),`;
    background: `).concat(n("listbox.option.group.background"),`;
    font-weight: `).concat(n("listbox.option.group.font.weight"),`;
}

.p-listbox-empty-message {
    padding: `).concat(n("listbox.empty.message.padding"),`;
}
`)},Ee={root:function(e){var n=e.props;return["p-listbox p-component",{"p-listbox-striped":n.striped,"p-disabled":n.disabled,"p-invalid":n.invalid}]},header:"p-listbox-header",pcFilter:"p-listbox-filter",listContainer:"p-listbox-list-container",list:"p-listbox-list",optionGroup:"p-listbox-option-group",option:function(e){var n=e.instance,o=e.props,s=e.option,i=e.index,l=e.getItemOptions;return["p-listbox-option",{"p-listbox-option-selected":n.isSelected(s)&&o.highlightOnSelect,"p-focus":n.focusedOptionIndex===n.getOptionIndex(i,l),"p-disabled":n.isOptionDisabled(s)}]},optionCheckIcon:"p-listbox-option-check-icon",optionBlankIcon:"p-listbox-option-blank-icon",emptyMessage:"p-listbox-empty-message"},Ce=N.extend({name:"listbox",theme:Ae,classes:Ee}),Re={name:"BaseListbox",extends:q,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,listStyle:null,scrollHeight:{type:String,default:"14rem"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dataKey:null,multiple:{type:Boolean,default:!1},metaKeySelection:{type:Boolean,default:!1},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!0},checkmark:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},filterIcon:{type:String,default:void 0},striped:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:Ce,provide:function(){return{$pcListbox:this,$parentInstance:this}}};function $(t){return Ne(t)||Ge(t)||He(t)||Pe()}function Pe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(t,e){if(t){if(typeof t=="string")return G(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(t,e):void 0}}function Ge(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ne(t){if(Array.isArray(t))return G(t)}function G(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var Ue={name:"Listbox",extends:Re,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","filter","item-dblclick","option-dblclick"],list:null,virtualScroller:null,optionTouched:!1,startRangeIndex:-1,searchTimeout:null,searchValue:"",data:function(){return{id:this.$attrs.id,filterValue:null,focused:!1,focusedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||z()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||z(),this.autoUpdateModel()},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?m(e,this.optionLabel):typeof e=="string"?e:null},getOptionValue:function(e){return this.optionValue?m(e,this.optionValue):e},getOptionRenderKey:function(e,n){return(this.dataKey?m(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,o,s){return this.ptm(s,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(o,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?m(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return m(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return m(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(o){return n.isOptionGroup(o)}).length:e)+1},onFirstHiddenFocus:function(){R(this.list);var e=j(this.$el,':not([data-p-hidden-focusable="true"])');this.$refs.lastHiddenFocusableElement.tabIndex=oe(e)?void 0:-1,this.$refs.firstHiddenFocusableElement.tabIndex=-1},onLastHiddenFocus:function(e){var n=e.relatedTarget;if(n===this.list){var o=j(this.$el,':not([data-p-hidden-focusable="true"])');R(o),this.$refs.firstHiddenFocusableElement.tabIndex=void 0}else R(this.$refs.firstHiddenFocusableElement);this.$refs.lastHiddenFocusableElement.tabIndex=-1},onFocusout:function(e){!this.$el.contains(e.relatedTarget)&&this.$refs.lastHiddenFocusableElement&&this.$refs.firstHiddenFocusableElement&&(this.$refs.lastHiddenFocusableElement.tabIndex=this.$refs.firstHiddenFocusableElement.tabIndex=void 0)},onListFocus:function(e){this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),this.autoUpdateModel(),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=this.startRangeIndex=-1,this.searchValue="",this.$emit("blur",e)},onListKeyDown:function(e){var n=this,o=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onSpaceKey(e);break;case"Tab":break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;default:if(this.multiple&&e.code==="KeyA"&&o){var s=this.visibleOptions.filter(function(i){return n.isValidOption(i)}).map(function(i){return n.getOptionValue(i)});this.updateModel(e,s),e.preventDefault();break}!o&&se(e.key)&&(this.searchOptions(e,e.key),e.preventDefault());break}},onOptionSelect:function(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;this.disabled||this.isOptionDisabled(n)||(this.multiple?this.onOptionSelectMultiple(e,n):this.onOptionSelectSingle(e,n),this.optionTouched=!1,o!==-1&&(this.focusedOptionIndex=o))},onOptionMouseDown:function(e,n){this.changeFocusedOptionIndex(e,n)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.focused&&this.changeFocusedOptionIndex(e,n)},onOptionTouchEnd:function(){this.disabled||(this.optionTouched=!0)},onOptionDblClick:function(e,n){this.$emit("item-dblclick",{originalEvent:e,value:n}),this.$emit("option-dblclick",{originalEvent:e,value:n})},onOptionSelectSingle:function(e,n){var o=this.isSelected(n),s=!1,i=null,l=this.optionTouched?!1:this.metaKeySelection;if(l){var a=e&&(e.metaKey||e.ctrlKey);o?a&&(i=null,s=!0):(i=this.getOptionValue(n),s=!0)}else i=o?null:this.getOptionValue(n),s=!0;s&&this.updateModel(e,i)},onOptionSelectMultiple:function(e,n){var o=this.isSelected(n),s=null,i=this.optionTouched?!1:this.metaKeySelection;if(i){var l=e.metaKey||e.ctrlKey;o?s=l?this.removeOption(n):[this.getOptionValue(n)]:(s=l?this.modelValue||[]:[],s=[].concat($(s),[this.getOptionValue(n)]))}else s=o?this.removeOption(n):[].concat($(this.modelValue||[]),[this.getOptionValue(n)]);this.updateModel(e,s)},onOptionSelectRange:function(e){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(o===-1&&(o=this.findNearestSelectedOptionIndex(s,!0)),s===-1&&(s=this.findNearestSelectedOptionIndex(o)),o!==-1&&s!==-1){var i=Math.min(o,s),l=Math.max(o,s),a=this.visibleOptions.slice(i,l+1).filter(function(u){return n.isValidOption(u)}).map(function(u){return n.getOptionValue(u)});this.updateModel(e,a)}},onFilterChange:function(e){this.$emit("filter",{originalEvent:e,value:e.target.value}),this.focusedOptionIndex=this.startRangeIndex=-1},onFilterBlur:function(){this.focusedOptionIndex=this.startRangeIndex=-1},onFilterKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break}},onArrowDownKey:function(e){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,n),this.changeFocusedOptionIndex(e,n),e.preventDefault()},onArrowUpKey:function(e){var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,n,this.startRangeIndex),this.changeFocusedOptionIndex(e,n),e.preventDefault()},onArrowLeftKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var o=e.currentTarget;e.shiftKey?o.setSelectionRange(0,e.target.selectionStart):(o.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else{var s=e.metaKey||e.ctrlKey,i=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&s&&this.onOptionSelectRange(e,i,this.startRangeIndex),this.changeFocusedOptionIndex(e,i)}e.preventDefault()},onEndKey:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(n){var o=e.currentTarget;if(e.shiftKey)o.setSelectionRange(e.target.selectionStart,o.value.length);else{var s=o.value.length;o.setSelectionRange(s,s),this.focusedOptionIndex=-1}}else{var i=e.metaKey||e.ctrlKey,l=this.findLastOptionIndex();this.multiple&&e.shiftKey&&i&&this.onOptionSelectRange(e,this.startRangeIndex,l),this.changeFocusedOptionIndex(e,l)}e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.focusedOptionIndex!==-1&&(this.multiple&&e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]))},onSpaceKey:function(e){e.preventDefault(),this.onEnterKey(e)},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},isOptionMatched:function(e){var n;return this.isValidOption(e)&&typeof this.getOptionLabel(e)=="string"&&((n=this.getOptionLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(e){return k(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,n){return V(e,n,this.equalityKey)},isSelected:function(e){var n=this,o=this.getOptionValue(e);return this.multiple?(this.modelValue||[]).some(function(s){return n.isEquals(s,o)}):this.isEquals(this.modelValue,o)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return M(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,o=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return n.isValidOption(s)}):-1;return o>-1?o+e+1:e},findPrevOptionIndex:function(e){var n=this,o=e>0?M(this.visibleOptions.slice(0,e),function(s){return n.isValidOption(s)}):-1;return o>-1?o:e},findSelectedOptionIndex:function(){var e=this;if(this.hasSelectedOption)if(this.multiple){for(var n=function(){var l=e.modelValue[s],a=e.visibleOptions.findIndex(function(u){return e.isValidSelectedOption(u)&&e.isEquals(l,e.getOptionValue(u))});if(a>-1)return{v:a}},o,s=this.modelValue.length-1;s>=0;s--)if(o=n(),o)return o.v}else return this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)});return-1},findFirstSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findLastSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?M(this.visibleOptions,function(n){return e.isValidSelectedOption(n)}):-1},findNextSelectedOptionIndex:function(e){var n=this,o=this.hasSelectedOption&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return n.isValidSelectedOption(s)}):-1;return o>-1?o+e+1:-1},findPrevSelectedOptionIndex:function(e){var n=this,o=this.hasSelectedOption&&e>0?M(this.visibleOptions.slice(0,e),function(s){return n.isValidSelectedOption(s)}):-1;return o>-1?o:-1},findNearestSelectedOptionIndex:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=-1;return this.hasSelectedOption&&(n?(o=this.findPrevSelectedOptionIndex(e),o=o===-1?this.findNextSelectedOptionIndex(e):o):(o=this.findNextSelectedOptionIndex(e),o=o===-1?this.findPrevSelectedOptionIndex(e):o)),o>-1?o:e},findFirstFocusedOptionIndex:function(){var e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,n){var o=this;this.searchValue=(this.searchValue||"")+n;var s=-1;k(this.searchValue)&&(this.focusedOptionIndex!==-1?(s=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(i){return o.isOptionMatched(i)}),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(i){return o.isOptionMatched(i)}):s+this.focusedOptionIndex):s=this.visibleOptions.findIndex(function(i){return o.isOptionMatched(i)}),s===-1&&this.focusedOptionIndex===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){o.searchValue="",o.searchTimeout=null},500)},removeOption:function(e){var n=this;return this.modelValue.filter(function(o){return!V(o,n.getOptionValue(e),n.equalityKey)})},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&!this.multiple&&this.onOptionSelect(e,this.visibleOptions[n]))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var o=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,s=le(e.list,'li[id="'.concat(o,'"]'));s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&!this.multiple&&this.focused&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex]))},updateModel:function(e,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(o,s,i){o.push({optionGroup:s,group:!0,index:i});var l=n.getOptionGroupChildren(s);return l&&l.forEach(function(a){return o.push(a)}),o},[])},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];return this.filterValue?ae.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale):e},hasSelectedOption:function(){return k(this.modelValue)},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return k(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue.length:"1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},directives:{ripple:U},components:{InputText:be,VirtualScroller:de,InputIcon:fe,IconField:he,SearchIcon:ce,CheckIcon:re,BlankIcon:pe}},qe=["id"],ze=["tabindex"],je=["id","aria-multiselectable","aria-label","aria-labelledby","aria-activedescendant","aria-disabled"],$e=["id"],We=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousedown","onMousemove","onDblclick","data-p-selected","data-p-focused","data-p-disabled"],Ye=["tabindex"];function Qe(t,e,n,o,s,i){var l=x("InputText"),a=x("SearchIcon"),u=x("InputIcon"),O=x("IconField"),E=x("CheckIcon"),_=x("BlankIcon"),ee=x("VirtualScroller"),te=W("ripple");return d(),p("div",r({id:s.id,class:t.cx("root"),onFocusout:e[7]||(e[7]=function(){return i.onFocusout&&i.onFocusout.apply(i,arguments)})},t.ptmi("root")),[v("span",r({ref:"firstHiddenFocusableElement",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:t.disabled?-1:t.tabindex,onFocus:e[0]||(e[0]=function(){return i.onFirstHiddenFocus&&i.onFirstHiddenFocus.apply(i,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16,ze),t.$slots.header?(d(),p("div",{key:0,class:P(t.cx("header"))},[b(t.$slots,"header",{value:t.modelValue,options:i.visibleOptions})],2)):S("",!0),t.filter?(d(),p("div",r({key:1,class:t.cx("header")},t.ptm("header")),[T(O,{unstyled:t.unstyled,pt:t.ptm("pcFilterContainer")},{default:F(function(){return[T(l,{modelValue:s.filterValue,"onUpdate:modelValue":e[1]||(e[1]=function(g){return s.filterValue=g}),type:"text",class:P(t.cx("pcFilter")),placeholder:t.filterPlaceholder,role:"searchbox",autocomplete:"off",disabled:t.disabled,unstyled:t.unstyled,"aria-owns":s.id+"_list","aria-activedescendant":i.focusedOptionId,tabindex:!t.disabled&&!s.focused?t.tabindex:-1,onInput:i.onFilterChange,onBlur:i.onFilterBlur,onKeydown:i.onFilterKeyDown,pt:t.ptm("pcFilter")},null,8,["modelValue","class","placeholder","disabled","unstyled","aria-owns","aria-activedescendant","tabindex","onInput","onBlur","onKeydown","pt"]),T(u,r({unstyled:t.unstyled},t.ptm("pcFilterIconContainer")),{default:F(function(){return[b(t.$slots,"filtericon",{},function(){return[t.filterIcon?(d(),p("span",r({key:0,class:t.filterIcon},t.ptm("filterIcon")),null,16)):(d(),A(a,ue(r({key:1},t.ptm("filterIcon"))),null,16))]})]}),_:3},16,["unstyled"])]}),_:3},8,["unstyled","pt"]),v("span",r({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),y(i.filterResultMessageText),17)],16)):S("",!0),v("div",r({class:t.cx("listContainer"),style:[{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""},t.listStyle]},t.ptm("listContainer")),[T(ee,r({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{items:i.visibleOptions,style:[{height:t.scrollHeight},t.listStyle],tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),X({content:F(function(g){var C=g.styleClass,ne=g.contentRef,L=g.items,h=g.getItemOptions,ie=g.contentStyle,w=g.itemSize;return[v("ul",r({ref:function(f){return i.listRef(f,ne)},id:s.id+"_list",class:[t.cx("list"),C],style:ie,tabindex:-1,role:"listbox","aria-multiselectable":t.multiple,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-activedescendant":s.focused?i.focusedOptionId:void 0,"aria-disabled":t.disabled,onFocus:e[3]||(e[3]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[4]||(e[4]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[5]||(e[5]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(d(!0),p(B,null,Q(L,function(c,f){return d(),p(B,{key:i.getOptionRenderKey(c,i.getOptionIndex(f,h))},[i.isOptionGroup(c)?(d(),p("li",r({key:0,id:s.id+"_"+i.getOptionIndex(f,h),style:{height:w?w+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[b(t.$slots,"optiongroup",{option:c.optionGroup,index:i.getOptionIndex(f,h)},function(){return[D(y(i.getOptionGroupLabel(c.optionGroup)),1)]})],16,$e)):Y((d(),p("li",r({key:1,id:s.id+"_"+i.getOptionIndex(f,h),style:{height:w?w+"px":void 0},class:t.cx("option",{option:c,index:f,getItemOptions:h}),role:"option","aria-label":i.getOptionLabel(c),"aria-selected":i.isSelected(c),"aria-disabled":i.isOptionDisabled(c),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(f,h)),onClick:function(I){return i.onOptionSelect(I,c,i.getOptionIndex(f,h))},onMousedown:function(I){return i.onOptionMouseDown(I,i.getOptionIndex(f,h))},onMousemove:function(I){return i.onOptionMouseMove(I,i.getOptionIndex(f,h))},onTouchend:e[2]||(e[2]=function(K){return i.onOptionTouchEnd()}),onDblclick:function(I){return i.onOptionDblClick(I,c)},ref_for:!0},i.getPTOptions(c,h,f,"option"),{"data-p-selected":i.isSelected(c),"data-p-focused":s.focusedOptionIndex===i.getOptionIndex(f,h),"data-p-disabled":i.isOptionDisabled(c)}),[t.checkmark?(d(),p(B,{key:0},[i.isSelected(c)?(d(),A(E,r({key:0,class:t.cx("optionCheckIcon"),ref_for:!0},t.ptm("optionCheckIcon")),null,16,["class"])):(d(),A(_,r({key:1,class:t.cx("optionBlankIcon"),ref_for:!0},t.ptm("optionBlankIcon")),null,16,["class"]))],64)):S("",!0),b(t.$slots,"option",{option:c,selected:i.isSelected(c),index:i.getOptionIndex(f,h)},function(){return[D(y(i.getOptionLabel(c)),1)]})],16,We)),[[te]])],64)}),128)),s.filterValue&&(!L||L&&L.length===0)?(d(),p("li",r({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[b(t.$slots,"emptyfilter",{},function(){return[D(y(i.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(d(),p("li",r({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[b(t.$slots,"empty",{},function(){return[D(y(i.emptyMessageText),1)]})],16)):S("",!0)],16,je)]}),_:2},[t.$slots.loader?{name:"loader",fn:F(function(g){var C=g.options;return[b(t.$slots,"loader",{options:C})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),b(t.$slots,"footer",{value:t.modelValue,options:i.visibleOptions}),!t.options||t.options&&t.options.length===0?(d(),p("span",r({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),y(i.emptyMessageText),17)):S("",!0),v("span",r({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),y(i.selectedMessageText),17),v("span",r({ref:"lastHiddenFocusableElement",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:t.disabled?-1:t.tabindex,onFocus:e[6]||(e[6]=function(){return i.onLastHiddenFocus&&i.onLastHiddenFocus.apply(i,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16,Ye)],16,qe)}Ue.render=Qe;export{J as a,Te as b,Ue as s};
