import{_ as u}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.00aa8b18.js";import{_ as d}from"./chunks/CButton.d250fae5.js";import{r as h,x as g,d as m,o as C,c as A,f as n,t as _,u as e,b as o,w as t,e as p,a as B}from"./app.a50c5a69.js";function E(c){const r=c?new Set(c):new Set,s=h(r);return[s,g({add:a=>{s.value.add(a)},remove:a=>{s.value.delete(a)},has:a=>s.value.has(a),clear:()=>s.value.clear(),reset:(a=[])=>{s.value=new Set(a)}})]}const b=m({__name:"demo",setup(c){const[r,{add:s,remove:D,clear:a,reset:i}]=E([1,2,3]);return(V,l)=>{const F=d;return C(),A("div",null,[n("p",null,"setVal: "+_(e(r)),1),o(F,{onClick:l[0]||(l[0]=y=>e(s)(4))},{default:t(()=>[p("\u6DFB\u52A0 set\u503C")]),_:1}),o(F,{onClick:l[1]||(l[1]=y=>e(D)(4))},{default:t(()=>[p("\u5220\u9664 set\u503C")]),_:1}),o(F,{onClick:e(a)},{default:t(()=>[p("\u6E05\u9664\u5168\u90E8 set\u503C")]),_:1},8,["onClick"]),o(F,{onClick:l[2]||(l[2]=y=>e(i)([7,8,9]))},{default:t(()=>[p("\u91CD\u7F6E set\u503C")]),_:1})])}}}),v=n("h1",{id:"useset",tabindex:"-1"},[p("useSet "),n("a",{class:"header-anchor",href:"#useset","aria-hidden":"true"},"#")],-1),f=n("p",null,"\u5FEB\u6377\u64CD\u4F5C Set \u6570\u636E\u7ED3\u6784",-1),k=n("h2",{id:"demo",tabindex:"-1"},[p("Demo "),n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),S=n("p",{class:"demo-source-link"},[n("a",{href:"https://github.com/FastUse/morehook/blob/main/packages/core/useSet/demo.vue",target:"_blank"},"source")],-1),T=B("",6),N=JSON.parse('{"title":"useSet","description":"","frontmatter":{"category":"State"},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Type Declarations","slug":"type-declarations","link":"#type-declarations","children":[]},{"level":2,"title":"Source","slug":"source","link":"#source","children":[]}],"relativePath":"core/useSet/index.md","lastUpdated":1667910526000}'),x={name:"core/useSet/index.md"},$=Object.assign(x,{setup(c){return(r,s)=>{const D=u;return C(),A("div",null,[v,f,k,o(D,null,{default:t(()=>[S,o(b)]),_:1}),T])}}});export{N as __pageData,$ as default};