import{_ as i}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.00aa8b18.js";import{_ as F}from"./chunks/CButton.d250fae5.js";import{d as C,o as y,N as A,w as D,e as c,c as d,b as r,f as s,a as u}from"./app.a50c5a69.js";function h(t){let a=0;const n=[];return async function(l){a>=t&&await new Promise(o=>n.push(o)),a++;const p=await l();if(a--,n.length){const o=n.shift();o&&o()}return p}}const m=C({__name:"demo",setup(t){const a=h(3),n=(l=3e3)=>new Promise(p=>setTimeout(()=>{p(123)},l));function e(){a(n).then(l=>{console.log("res",l)})}return(l,p)=>{const o=F;return y(),A(o,{onClick:e},{default:D(()=>[c("\u6DFB\u52A0\u5F02\u6B65\u51FD\u6570")]),_:1})}}}),_=s("h1",{id:"promisescheduler",tabindex:"-1"},[c("promiseScheduler "),s("a",{class:"header-anchor",href:"#promisescheduler","aria-hidden":"true"},"#")],-1),g=s("p",null,"promise \u4EFB\u52A1\u8C03\u5EA6",-1),f=s("p",null,"\u7279\u6B8A\u573A\u666F\u4E0B\u9488\u5BF9\u4E8E\u6279\u91CF\u8BF7\u6C42\u65F6\u4F1A\u9020\u6210\u5835\u585E\uFF0C\u6240\u4EE5\u63D0\u4F9B\u4E00\u4E2Apromise\u201C\u8282\u6D41\u201D",-1),b=s("h2",{id:"demo",tabindex:"-1"},[c("Demo "),s("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),k=s("p",{class:"demo-source-link"},[s("a",{href:"https://github.com/FastUse/morehook/blob/main/packages/utils/promiseScheduler/demo.vue",target:"_blank"},"source")],-1),E=u("",6),T=JSON.parse('{"title":"promiseScheduler","description":"","frontmatter":{"category":"utils"},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Type Declarations","slug":"type-declarations","link":"#type-declarations","children":[]},{"level":2,"title":"Source","slug":"source","link":"#source","children":[]}],"relativePath":"utils/promiseScheduler/index.md","lastUpdated":1673763718000}'),S={name:"utils/promiseScheduler/index.md"},w=Object.assign(S,{setup(t){return(a,n)=>{const e=i;return y(),d("div",null,[_,g,f,b,r(e,null,{default:D(()=>[k,r(m)]),_:1}),E])}}});export{T as __pageData,w as default};