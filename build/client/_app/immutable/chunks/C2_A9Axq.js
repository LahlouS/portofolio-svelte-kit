import{s as k,c as x,u as j,g as E,b as S,a as w}from"./CAxKlILk.js";import{S as P,i as R,d as h,v as q,a as d,n as C,o as O,e as f,b as g,c as B,p,g as b,q as v,r as y,u as D,m as N,t as z}from"./CMk37LVu.js";function H(i,e){const c={},l={},o={$$scope:1};let s=i.length;for(;s--;){const n=i[s],r=e[s];if(r){for(const t in n)t in r||(l[t]=1);for(const t in r)o[t]||(c[t]=r[t],o[t]=1);i[s]=r}else for(const t in n)o[t]=1}for(const n in l)n in c||(c[n]=void 0);return c}function J(i){return typeof i=="object"&&i!==null?i:{}}const I="node_modules/svelte-icons/components/IconBase.svelte";function _(i){let e,c;const l={c:function(){e=y("title"),c=z(i[0]),this.h()},l:function(s){e=p(s,"title",{});var n=b(e);c=N(n,i[0]),n.forEach(d),this.h()},h:function(){w(e,I,18,4,298)},m:function(s,n){g(s,e,n),B(e,c)},p:function(s,n){n&1&&D(c,s[0])},d:function(s){s&&d(e)}};return h("SvelteRegisterBlock",{block:l,id:_.name,type:"if",source:"(18:2) {#if title}",ctx:i}),l}function m(i){let e,c,l,o=i[0]&&_(i);const s=i[3].default,n=x(s,i,i[2],null),r={c:function(){e=y("svg"),o&&o.c(),c=v(),n&&n.c(),this.h()},l:function(a){e=p(a,"svg",{xmlns:!0,viewBox:!0,class:!0});var u=b(e);o&&o.l(u),c=v(),n&&n.l(u),u.forEach(d),this.h()},h:function(){f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox",i[1]),f(e,"class","svelte-c8tyih"),w(e,I,16,0,229)},m:function(a,u){g(a,e,u),o&&o.m(e,null),B(e,c),n&&n.m(e,null),l=!0},p:function(a,[u]){a[0]?o?o.p(a,u):(o=_(a),o.c(),o.m(e,c)):o&&(o.d(1),o=null),n&&n.p&&(!l||u&4)&&j(n,s,a,a[2],l?S(s,a[2],u,null):E(a[2]),null),(!l||u&2)&&f(e,"viewBox",a[1])},i:function(a){l||(O(n,a),l=!0)},o:function(a){C(n,a),l=!1},d:function(a){a&&d(e),o&&o.d(),n&&n.d(a)}};return h("SvelteRegisterBlock",{block:r,id:m.name,type:"component",source:"",ctx:i}),r}function A(i,e,c){let{$$slots:l={},$$scope:o}=e;q("IconBase",l,["default"]);let{title:s=null}=e,{viewBox:n}=e;i.$$.on_mount.push(function(){n===void 0&&!("viewBox"in e||i.$$.bound[i.$$.props.viewBox])&&console.warn("<IconBase> was created without expected prop 'viewBox'")});const r=["title","viewBox"];return Object.keys(e).forEach(t=>{!~r.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<IconBase> was created with unknown prop '${t}'`)}),i.$$set=t=>{"title"in t&&c(0,s=t.title),"viewBox"in t&&c(1,n=t.viewBox),"$$scope"in t&&c(2,o=t.$$scope)},i.$capture_state=()=>({title:s,viewBox:n}),i.$inject_state=t=>{"title"in t&&c(0,s=t.title),"viewBox"in t&&c(1,n=t.viewBox)},e&&"$$inject"in e&&i.$inject_state(e.$$inject),[s,n,o,l]}class K extends P{constructor(e){super(e),R(this,e,A,m,k,{title:0,viewBox:1}),h("SvelteRegisterComponent",{component:this,tagName:"IconBase",options:e,id:m.name})}get title(){throw new Error("<IconBase>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(e){throw new Error("<IconBase>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get viewBox(){throw new Error("<IconBase>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set viewBox(e){throw new Error("<IconBase>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{K as I,J as a,H as g};
