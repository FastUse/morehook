import{_ as A}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.1bebe422.js";import{d as h,i as g}from"./chunks/configurable.f5221abd.js";import{r as i,p as m,k as r,v as _,l as f,d as E,o as C,c as d,f as n,t as c,u as D,b as F,w as v,e as u,a as b}from"./app.6b554fcd.js";const S={target:h};function y(o){const a=i(-1);if(!g)return{scrollY:a};const{target:s}={...S,...o},p=!!(o!=null&&o.target);let l=s;const e=t=>{p?a.value=t.target.scrollTop:a.value=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop};return m(()=>{l=r(s)?s.value:s,l&&l.addEventListener("scroll",e)}),_(()=>{l=r(s)?s.value:s,l&&l.removeEventListener("scroll",e)}),f(a,t=>{l.scrollTo(0,t)}),{scrollY:a}}const k=n("div",{style:{height:"900px","background-color":"yellowgreen"}}," \u6211\u662F\u5185\u5BB9\uFF0C\u8BF7\u6ED1\u52A8\u6211\uFF0C\u9664\u4E86\u6211\u4F60\u8FD8\u53EF\u4EE5\u6ED1\u52A8\u5916\u5C42\u67E5\u770B\u6548\u679C ",-1),B=[k],x=E({__name:"demo",setup(o){const{scrollY:a}=y(),s=i(),{scrollY:p}=y({target:s});return(l,e)=>(C(),d("div",null,[n("div",{ref_key:"divRef",ref:s,style:{border:"1px solid red",height:"300px",overflow:"auto"}},B,512),n("p",null,"document body scrollY: "+c(D(a)),1),n("p",null,"div scrollY: "+c(D(p)),1)]))}}),Y=n("h1",{id:"usescrollposition",tabindex:"-1"},[u("useScrollPosition "),n("a",{class:"header-anchor",href:"#usescrollposition","aria-hidden":"true"},"#")],-1),P=n("p",null,"\u83B7\u53D6scroll \u7684Y\u8F74\u6EDA\u52A8\u91CF (\u53EF\u6307\u5B9A\u5143\u7D20)",-1),T=n("h2",{id:"demo",tabindex:"-1"},[u("Demo "),n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),w=n("p",{class:"demo-source-link"},[n("a",{href:"https://github.com/FastUse/morehook/blob/main/packages/core/useScrollPosition/demo.vue",target:"_blank"},"source")],-1),R=b("",6),V=JSON.parse('{"title":"useScrollPosition","description":"","frontmatter":{"category":"Sensors"},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Type Declarations","slug":"type-declarations","link":"#type-declarations","children":[]},{"level":2,"title":"Source","slug":"source","link":"#source","children":[]}],"relativePath":"core/useScrollPosition/index.md","lastUpdated":1667832717000}'),q={name:"core/useScrollPosition/index.md"},L=Object.assign(q,{setup(o){return(a,s)=>{const p=A;return C(),d("div",null,[Y,P,T,F(p,null,{default:v(()=>[w,F(x)]),_:1}),R])}}});export{V as __pageData,L as default};
