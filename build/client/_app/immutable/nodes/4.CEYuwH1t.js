import{U as W}from"../chunks/CUd6hoc2.js";import{H as X}from"../chunks/CYgJF_JY.js";import{s as Y,n as R,a as y}from"../chunks/CAxKlILk.js";import{S as Z,i as $,d as N,w as J,v as ee,a as g,x as te,b as H,c as u,e as p,k as ae,l as P,f as b,g as C,h as U,s as T,j as k,m as I,t as V}from"../chunks/CMk37LVu.js";function ne(t,e){throw isNaN(t)||t<400||t>599?new Error(`HTTP error status codes must be between 400 and 599 — ${t} is invalid`):new X(t,e)}new TextEncoder;async function se({fetch:t}){let e;try{e=await t(`${W}ladvace`),e=await e.json()}catch{throw ne(404,"Not found")}return{devToArticles:e}}const de=Object.freeze(Object.defineProperty({__proto__:null,load:se},Symbol.toStringTag,{value:"Module"})),E="src/routes/blog/+page.svelte";function K(t,e,n){const a=t.slice();return a[5]=e[n],a}function L(t){let e,n,a,f=t[5].title+"",i,_,h,m,o=(t[5].tags||t[5].category)+"",v,l,r,d=(t[5].description||"")+"",x,s,c,w,q="Read Article =>";const M={c:function(){e=k("div"),n=k("div"),a=k("h2"),i=V(f),_=T(),h=k("div"),m=V("Tags: "),v=V(o),l=T(),r=k("p"),x=V(d),s=T(),c=k("a"),w=k("div"),w.textContent=q,this.h()},l:function(j){e=b(j,"DIV",{class:!0});var A=C(e);n=b(A,"DIV",{class:!0});var D=C(n);a=b(D,"H2",{class:!0});var z=C(a);i=I(z,f),z.forEach(g),_=P(D),h=b(D,"DIV",{});var O=C(h);m=I(O,"Tags: "),v=I(O,o),O.forEach(g),D.forEach(g),l=P(A),r=b(A,"P",{class:!0});var F=C(r);x=I(F,d),F.forEach(g),s=P(A),c=b(A,"A",{href:!0,target:!0,class:!0});var G=C(c);w=b(G,"DIV",{class:!0,"data-svelte-h":!0}),U(w)!=="svelte-kf16rq"&&(w.textContent=q),G.forEach(g),A.forEach(g),this.h()},h:function(){p(a,"class","svelte-1fxyu1w"),y(a,E,22,5,501),y(h,E,25,5,544),p(n,"class","header"),y(n,E,21,4,475),p(r,"class","svelte-1fxyu1w"),y(r,E,27,4,611),p(w,"class","button svelte-1fxyu1w"),y(w,E,35,5,785),p(c,"href",t[5].id?`/blog/${t[5].id}`:t[5].link),p(c,"target",t[5].id?"_self":"_blank"),p(c,"class","svelte-1fxyu1w"),y(c,E,31,4,662),p(e,"class","article svelte-1fxyu1w"),y(e,E,20,3,449)},m:function(j,A){H(j,e,A),u(e,n),u(n,a),u(a,i),u(n,_),u(n,h),u(h,m),u(h,v),u(e,l),u(e,r),u(r,x),u(e,s),u(e,c),u(c,w)},p:R,d:function(j){j&&g(e)}};return N("SvelteRegisterBlock",{block:M,id:L.name,type:"each",source:"(20:2) {#each filteredArticles as article}",ctx:t}),M}function Q(t){let e,n="No Articles";const a={c:function(){e=k("div"),e.textContent=n,this.h()},l:function(i){e=b(i,"DIV",{"data-svelte-h":!0}),U(e)!=="svelte-ink7a0"&&(e.textContent=n),this.h()},h:function(){y(e,E,40,3,897)},m:function(i,_){H(i,e,_)},d:function(i){i&&g(e)}};return N("SvelteRegisterBlock",{block:a,id:Q.name,type:"if",source:"(40:2) {#if filteredArticles.length === 0}",ctx:t}),a}function B(t){let e,n,a,f,i="Articles",_,h,m=J(t[0]),o=[];for(let r=0;r<m.length;r+=1)o[r]=L(K(t,m,r));let v=t[0].length===0&&Q(t);const l={c:function(){e=T(),n=k("div"),a=k("div"),f=k("h1"),f.textContent=i,_=T();for(let d=0;d<o.length;d+=1)o[d].c();h=T(),v&&v.c(),this.h()},l:function(d){ae("svelte-gdw79j",document.head).forEach(g),e=P(d),n=b(d,"DIV",{class:!0});var s=C(n);a=b(s,"DIV",{class:!0});var c=C(a);f=b(c,"H1",{class:!0,"data-svelte-h":!0}),U(f)!=="svelte-a2vclf"&&(f.textContent=i),_=P(c);for(let w=0;w<o.length;w+=1)o[w].l(c);h=P(c),v&&v.l(c),c.forEach(g),s.forEach(g),this.h()},h:function(){document.title="Sacha LAHLOU, ML engineer",p(f,"class","svelte-1fxyu1w"),y(f,E,17,2,389),p(a,"class","articles svelte-1fxyu1w"),y(a,E,16,1,364),p(n,"class","articlesContainer svelte-1fxyu1w"),y(n,E,15,0,331)},m:function(d,x){H(d,e,x),H(d,n,x),u(n,a),u(a,f),u(a,_);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(a,null);u(a,h),v&&v.m(a,null)},p:function(d,[x]){if(x&1){m=J(d[0]);let s;for(s=0;s<m.length;s+=1){const c=K(d,m,s);o[s]?o[s].p(c,x):(o[s]=L(c),o[s].c(),o[s].m(a,h))}for(;s<o.length;s+=1)o[s].d(1);o.length=m.length}},i:R,o:R,d:function(d){d&&(g(e),g(n)),te(o,d),v&&v.d()}};return N("SvelteRegisterBlock",{block:l,id:B.name,type:"component",source:"",ctx:t}),l}function oe(t,e,n){let{$$slots:a={},$$scope:f}=e;ee("Page",a,[]);let{data:i}=e,_=i.devToArticles;const h=[422939],m=[..._],o=m.filter(l=>!h.includes(l==null?void 0:l.id));t.$$.on_mount.push(function(){i===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const v=["data"];return Object.keys(e).forEach(l=>{!~v.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<Page> was created with unknown prop '${l}'`)}),t.$$set=l=>{"data"in l&&n(1,i=l.data)},t.$capture_state=()=>({data:i,devToArticles:_,blackListedArticles:h,articles:m,filteredArticles:o}),t.$inject_state=l=>{"data"in l&&n(1,i=l.data),"devToArticles"in l&&(_=l.devToArticles)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[o,i]}class fe extends Z{constructor(e){super(e),$(this,e,oe,B,Y,{data:1}),N("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:B.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{fe as component,de as universal};
