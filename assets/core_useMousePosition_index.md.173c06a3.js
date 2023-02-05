import{_ as i}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.00aa8b18.js";import{u as C}from"./chunks/index.9ab158db.js";import{d as A,r as u,o as t,c,f as s,t as n,u as a,b as e,w as d,e as r,a as g}from"./app.a50c5a69.js";import"./chunks/configurable.f5221abd.js";const h=A({__name:"demo",setup(D){const l=u(),{offsetX:p,offsetY:o,pageX:F,pageY:y}=C({type:"move",target:l});return(v,x)=>(t(),c("div",null,[s("div",{ref_key:"target",ref:l,style:{border:"1px solid red",width:"300px",height:"300px"}},null,512),s("p",null,"offsetX(\u76F8\u5BF9\u4E8E\u81EA\u8EAB): "+n(a(p)),1),s("p",null,"offsetY(\u76F8\u5BF9\u4E8E\u81EA\u8EAB): "+n(a(o)),1),s("p",null,"pageX(\u76F8\u5BF9\u4E8E body): "+n(a(F)),1),s("p",null,"pageY(\u76F8\u5BF9\u4E8E body): "+n(a(y)),1)]))}}),m=s("h1",{id:"usemouseposition",tabindex:"-1"},[r("useMousePosition "),s("a",{class:"header-anchor",href:"#usemouseposition","aria-hidden":"true"},"#")],-1),f=s("p",null,"\u6355\u6349\u9F20\u6807\u65B9\u4F4D",-1),_=s("ul",null,[s("li",null,"\u5206\u4E24\u79CD 1.\u70B9\u51FB\u89E6\u53D1 2.\u79FB\u52A8\u89E6\u53D1"),s("li",null,"\u4E5F\u5206\u4E3A\u5168\u5C40\u89E6\u53D1\u548C\u67D0\u4E2A\u5143\u7D20\u89E6\u53D1")],-1),E=s("h2",{id:"demo",tabindex:"-1"},[r("Demo "),s("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),b=s("p",{class:"demo-source-link"},[s("a",{href:"https://github.com/FastUse/morehook/blob/main/packages/core/useMousePosition/demo.vue",target:"_blank"},"source")],-1),B=g(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">target</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">border: 1px solid red; width: 300px; height: 300px</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    &gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">offsetX(\u76F8\u5BF9\u4E8E\u81EA\u8EAB): {{ offsetX }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">offsetY(\u76F8\u5BF9\u4E8E\u81EA\u8EAB): {{ offsetY }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">pageX(\u76F8\u5BF9\u4E8E body): {{ pageX }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">pageY(\u76F8\u5BF9\u4E8E body): {{ pageY }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useMousePosition</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@morehook/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> target </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> offsetX</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> offsetY</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pageX</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pageY </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMousePosition</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">move</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  target</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * type: click(\u70B9\u51FB\u89E6\u53D1) move(\u79FB\u52A8\u89E6\u53D1) (\u9ED8\u8BA4 click)</span></span>
<span class="line"><span style="color:#676E95;"> * target: \u89E6\u53D1\u7684\u5143\u7D20 (\u9ED8\u8BA4 document.body)</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">move</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">target</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLElement</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">onSuccess</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * \u6355\u6349\u9F20\u6807\u65B9\u4F4D</span></span>
<span class="line"><span style="color:#676E95;"> * \u5206\u4E24\u79CD 1.\u70B9\u51FB\u89E6\u53D1 2.\u79FB\u52A8\u89E6\u53D1</span></span>
<span class="line"><span style="color:#676E95;"> * \u4E5F\u5206\u4E3A\u5168\u5C40\u89E6\u53D1\u548C\u67D0\u4E2A\u5143\u7D20\u89E6\u53D1</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#676E95;"> Options</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useMousePosition</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Options</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pageX</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pageY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">offsetX</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">offsetY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p><a href="https://github.com/FastUse/morehook/blob/main/packages/core/useMousePosition/index.ts" target="_blank" rel="noreferrer">Source</a> \u2022 <a href="https://github.com/FastUse/morehook/blob/main/packages/core/useMousePosition/demo.vue" target="_blank" rel="noreferrer">Demo</a> \u2022 <a href="https://github.com/FastUse/morehook/blob/main/packages/core/useMousePosition/index.md" target="_blank" rel="noreferrer">Docs</a></p>`,6),S=JSON.parse('{"title":"useMousePosition","description":"","frontmatter":{"category":"Sensors"},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Type Declarations","slug":"type-declarations","link":"#type-declarations","children":[]},{"level":2,"title":"Source","slug":"source","link":"#source","children":[]}],"relativePath":"core/useMousePosition/index.md","lastUpdated":1670388989000}'),k={name:"core/useMousePosition/index.md"},T=Object.assign(k,{setup(D){return(l,p)=>{const o=i;return t(),c("div",null,[m,f,_,E,e(o,null,{default:d(()=>[b,e(h)]),_:1}),B])}}});export{S as __pageData,T as default};