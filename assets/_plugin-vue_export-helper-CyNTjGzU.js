import{ag as a,p as s,v as u,g as l,c}from"./index-D9omXvJH.js";function m(){let e=null;const n=l();function t(){e!==null&&(clearTimeout(e),e=null)}return a(t),s(t),{removeTimeout:t,registerTimeout(o,r){t(),u(n)===!1&&(e=setTimeout(()=>{e=null,o()},r))}}}const f={dark:{type:Boolean,default:null}};function d(e,n){return c(()=>e.dark===null?n.dark.isActive:e.dark)}const v=(e,n)=>{const t=e.__vccOpts||e;for(const[o,r]of n)t[o]=r;return t};export{v as _,f as a,d as b,m as u};
