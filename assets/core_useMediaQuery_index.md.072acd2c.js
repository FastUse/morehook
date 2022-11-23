import{_ as y}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.1bebe422.js";import{i as D}from"./chunks/configurable.f5221abd.js";import{r as l,q as d,d as u,o as t,c as r,f as s,t as F,u as h,b as p,w as C,e as c,a as m}from"./app.6b554fcd.js";function A(o){if(!D)return l(!1);const a=window.matchMedia(o),n=l(a.matches),e=i=>n.value=i.matches;return a.addEventListener("change",e),d(()=>{a.removeEventListener("change",e)}),n}const _=u({__name:"demo",setup(o){const a=A("(min-width: 680px)");return(n,e)=>(t(),r("div",null,[s("p",null,"\u5F53\u524D\u662F\u5426\u6EE1\u8DB3\u8BBE\u5B9A\u503C : "+F(h(a)),1)]))}}),g=s("h1",{id:"usemediaquery",tabindex:"-1"},[c("useMediaQuery "),s("a",{class:"header-anchor",href:"#usemediaquery","aria-hidden":"true"},"#")],-1),f=s("p",null,"\u76D1\u542C mediaQuery \u72B6\u6001 (\u6B64 hook \u53EA\u9488\u5BF9\u5355\u4E2A\u76D1\u542C\uFF0CuseMediaQueryS\u652F\u6301\u591A\u4E2A)",-1),b=s("h2",{id:"demo",tabindex:"-1"},[c("Demo "),s("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),E=s("p",{class:"demo-source-link"},[s("a",{href:"https://github.com/FastUse/morehook/blob/main/packages/core/useMediaQuery/demo.vue",target:"_blank"},"source")],-1),k=m(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5F53\u524D\u662F\u5426\u6EE1\u8DB3\u8BBE\u5B9A\u503C : {{ state }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useMediaQuery</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@morehook/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> state </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMediaQuery</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(min-width: 680px)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u76D1\u542C mediaQuery \u72B6\u6001</span></span>
<span class="line"><span style="color:#676E95;"> * \u6B64 hook \u53EA\u9488\u5BF9\u5355\u4E2A\u76D1\u542C\uFF0CuseMediaQueryS\u652F\u6301\u591A\u4E2A</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">query</span><span style="color:#676E95;"> \u9700\u8981\u76D1\u542C\u7684\u9608\u503C</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> \u8FD4\u56DE\u662F\u5426\u6EE1\u8DB3\u8BBE\u5B9A\u503C</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMediaQuery</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p><a href="https://github.com/FastUse/morehook/blob/main/packages/core/useMediaQuery/index.ts" target="_blank" rel="noreferrer">Source</a> \u2022 <a href="https://github.com/FastUse/morehook/blob/main/packages/core/useMediaQuery/demo.vue" target="_blank" rel="noreferrer">Demo</a> \u2022 <a href="https://github.com/FastUse/morehook/blob/main/packages/core/useMediaQuery/index.md" target="_blank" rel="noreferrer">Docs</a></p>`,6),B=JSON.parse('{"title":"useMediaQuery","description":"","frontmatter":{"category":"Sensors"},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Type Declarations","slug":"type-declarations","link":"#type-declarations","children":[]},{"level":2,"title":"Source","slug":"source","link":"#source","children":[]}],"relativePath":"core/useMediaQuery/index.md","lastUpdated":1667832717000}'),v={name:"core/useMediaQuery/index.md"},S=Object.assign(v,{setup(o){return(a,n)=>{const e=y;return t(),r("div",null,[g,f,b,p(e,null,{default:C(()=>[E,p(_)]),_:1}),k])}}});export{B as __pageData,S as default};
