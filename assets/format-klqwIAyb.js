import{a as C,c,h as L,b as H,az as j,g as M,aA as F,r as W,aa as G,K as Y,A as J,p as Z,ar as R,w as I,aq as ee,o as te,t as Q,aB as le,aC as $,D as b,u as v,aD as ne,aE as oe}from"./index-D9omXvJH.js";import{a as N,b as O}from"./_plugin-vue_export-helper-CyNTjGzU.js";const we=C({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=c(()=>parseInt(e.lines,10)),n=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),i=c(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>L("div",{style:i.value,class:n.value},H(t.default))}}),pe=C({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:l.value},H(t.default))}}),be=C({name:"QItem",props:{...N,...j,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=M(),i=O(e,n),{hasLink:d,linkAttrs:r,linkClass:a,linkTag:f,navigateOnClick:E}=F(),u=W(null),p=W(null),h=c(()=>e.clickable===!0||d.value===!0||e.tag==="label"),m=c(()=>e.disable!==!0&&h.value===!0),g=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?a.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),k=c(()=>e.insetLevel===void 0?null:{["padding"+(n.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function S(s){m.value===!0&&(p.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===u.value?p.value.focus():document.activeElement===p.value&&u.value.focus()),E(s))}function T(s){if(m.value===!0&&G(s,[13,32])===!0){Y(s),s.qKeyEvent=!0;const A=new MouseEvent("click",s);A.qKeyEvent=!0,u.value.dispatchEvent(A)}l("keyup",s)}function o(){const s=J(t.default,[]);return m.value===!0&&s.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:p})),s}return()=>{const s={ref:u,class:g.value,style:k.value,role:"listitem",onClick:S,onKeyup:T};return m.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,r.value)):h.value===!0&&(s["aria-disabled"]="true"),L(f.value,s,o())}}}),ie=["ul","ol"],he=C({name:"QList",props:{...N,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const l=M(),n=O(e,l.proxy.$q),i=c(()=>ie.includes(e.tag)?null:"list"),d=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:d.value,role:i.value},H(t.default))}});function ge(e,t,l){let n;function i(){n!==void 0&&(R.remove(n),n=void 0)}return Z(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){n={condition:()=>l.value===!0,handler:t},R.add(n)}}}const ye={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},qe=["beforeShow","show","beforeHide","hide"];function Le({showing:e,canShow:t,hideOnRouteChange:l,handleShow:n,handleHide:i,processOnMount:d}){const r=M(),{props:a,emit:f,proxy:E}=r;let u;function p(o){e.value===!0?g(o):h(o)}function h(o){if(a.disable===!0||o!==void 0&&o.qAnchorHandled===!0||t!==void 0&&t(o)!==!0)return;const s=a["onUpdate:modelValue"]!==void 0;s===!0&&(f("update:modelValue",!0),u=o,Q(()=>{u===o&&(u=void 0)})),(a.modelValue===null||s===!1)&&m(o)}function m(o){e.value!==!0&&(e.value=!0,f("beforeShow",o),n!==void 0?n(o):f("show",o))}function g(o){if(a.disable===!0)return;const s=a["onUpdate:modelValue"]!==void 0;s===!0&&(f("update:modelValue",!1),u=o,Q(()=>{u===o&&(u=void 0)})),(a.modelValue===null||s===!1)&&k(o)}function k(o){e.value!==!1&&(e.value=!1,f("beforeHide",o),i!==void 0?i(o):f("hide",o))}function S(o){a.disable===!0&&o===!0?a["onUpdate:modelValue"]!==void 0&&f("update:modelValue",!1):o===!0!==e.value&&(o===!0?m:k)(u)}I(()=>a.modelValue,S),l!==void 0&&ee(r)===!0&&I(()=>E.$route.fullPath,()=>{l.value===!0&&e.value===!0&&g()}),d===!0&&te(()=>{S(a.modelValue)});const T={show:h,hide:g,toggle:p};return Object.assign(E,T),T}const Ee=[Element,String],se=[null,document,document.body,document.scrollingElement,document.documentElement];function ke(e,t){let l=le(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return se.includes(l)?window:l}function re(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ae(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let x;function Se(){if(x!==void 0)return x;const e=document.createElement("p"),t=document.createElement("div");$(e,{width:"100%",height:"200px"}),$(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return l===n&&(n=t.clientWidth),t.remove(),x=l-n,x}function ue(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let y=0,B,V,q,P=!1,z,D,K,w=null;function de(e){ce(e)&&Y(e)}function ce(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=ne(e),l=e.shiftKey&&!e.deltaX,n=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=l||n?e.deltaY:e.deltaX;for(let d=0;d<t.length;d++){const r=t[d];if(ue(r,n))return n?i<0&&r.scrollTop===0?!0:i>0&&r.scrollTop+r.clientHeight===r.scrollHeight:i<0&&r.scrollLeft===0?!0:i>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function U(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function _(e){P!==!0&&(P=!0,requestAnimationFrame(()=>{P=!1;const{height:t}=e.target,{clientHeight:l,scrollTop:n}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=l-t,document.scrollingElement.scrollTop=n),n>q&&(document.scrollingElement.scrollTop-=Math.ceil((n-q)/8))}))}function X(e){const t=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:i}=window.getComputedStyle(t);B=ae(window),V=re(window),z=t.style.left,D=t.style.top,K=window.location.href,t.style.left=`-${B}px`,t.style.top=`-${V}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,b.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",_,v.passiveCapture),window.visualViewport.addEventListener("scroll",_,v.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",U,v.passiveCapture))}b.is.desktop===!0&&b.is.mac===!0&&window[`${e}EventListener`]("wheel",de,v.notPassive),e==="remove"&&(b.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",_,v.passiveCapture),window.visualViewport.removeEventListener("scroll",_,v.passiveCapture)):window.removeEventListener("scroll",U,v.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=z,t.style.top=D,window.location.href===K&&window.scrollTo(B,V),q=void 0)}function fe(e){let t="add";if(e===!0){if(y++,w!==null){clearTimeout(w),w=null;return}if(y>1)return}else{if(y===0||(y--,y>0))return;if(t="remove",b.is.ios===!0&&b.is.nativeMobile===!0){w!==null&&clearTimeout(w),w=setTimeout(()=>{X(t),w=null},100);return}}X(t)}function Te(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,fe(t))}}}function xe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),oe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function _e(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function Ce(e,t,l){if(l<=t)return t;const n=l-t+1;let i=t+(e-t)%n;return i<t&&(i=n+i),i===0?0:i}export{he as Q,ye as a,Le as b,xe as c,ge as d,Te as e,_e as f,ke as g,re as h,ae as i,Se as j,we as k,be as l,pe as m,Ce as n,Ee as s,qe as u};
