import{_ as i}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.00aa8b18.js";import{_ as F}from"./chunks/CButton.d250fae5.js";import{d as C,o as y,N as A,w as D,e as c,c as d,b as r,f as s,a as u}from"./app.a50c5a69.js";function h(t){let a=0;const n=[];return async function(l){a>=t&&await new Promise(o=>n.push(o)),a++;const p=await l();if(a--,n.length){const o=n.shift();o&&o()}return p}}const m=C({__name:"demo",setup(t){const a=h(3),n=(l=3e3)=>new Promise(p=>setTimeout(()=>{p(123)},l));function e(){a(n).then(l=>{console.log("res",l)})}return(l,p)=>{const o=F;return y(),A(o,{onClick:e},{default:D(()=>[c("\u6DFB\u52A0\u5F02\u6B65\u51FD\u6570")]),_:1})}}}),_=s("h1",{id:"promisescheduler",tabindex:"-1"},[c("promiseScheduler "),s("a",{class:"header-anchor",href:"#promisescheduler","aria-hidden":"true"},"#")],-1),g=s("p",null,"promise \u4EFB\u52A1\u8C03\u5EA6",-1),f=s("p",null,"\u7279\u6B8A\u573A\u666F\u4E0B\u9488\u5BF9\u4E8E\u6279\u91CF\u8BF7\u6C42\u65F6\u4F1A\u9020\u6210\u5835\u585E\uFF0C\u6240\u4EE5\u63D0\u4F9B\u4E00\u4E2Apromise\u201C\u8282\u6D41\u201D",-1),b=s("h2",{id:"demo",tabindex:"-1"},[c("Demo "),s("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),k=s("p",{class:"demo-source-link"},[s("a",{href:"https://github.com/FastUse/morehook/blob/main/packages/utils/promiseScheduler/demo.vue",target:"_blank"},"source")],-1),E=u(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;</span><span style="color:#FFCB6B;">template</span><span style="color:#A6ACCD;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">button </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">add</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6DFB\u52A0\u5F02\u6B65\u51FD\u6570</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script setup lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">promiseScheduler</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@morehook/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> addTask </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">promiseScheduler</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6A21\u4EFF\u771F\u5B9E axios \u8BF7\u6C42</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sleep </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">time</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">123</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> time)</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">addTask</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">sleep</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">res</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * promise \u4EFB\u52A1\u8C03\u5EA6</span></span>
<span class="line"><span style="color:#676E95;"> * \u7279\u6B8A\u573A\u666F\u4E0B\u9488\u5BF9\u4E8E\u6279\u91CF\u8BF7\u6C42\u65F6\u4F1A\u9020\u6210\u5835\u585E\uFF0C\u6240\u4EE5\u63D0\u4F9B\u4E00\u4E2Apromise\u201C\u8282\u6D41\u201D</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">promiseScheduler</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">fun</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-hidden="true">#</a></h2><p><a href="https://github.com/FastUse/morehook/blob/main/packages/utils/promiseScheduler/index.ts" target="_blank" rel="noreferrer">Source</a> \u2022 <a href="https://github.com/FastUse/morehook/blob/main/packages/utils/promiseScheduler/demo.vue" target="_blank" rel="noreferrer">Demo</a> \u2022 <a href="https://github.com/FastUse/morehook/blob/main/packages/utils/promiseScheduler/index.md" target="_blank" rel="noreferrer">Docs</a></p>`,6),T=JSON.parse('{"title":"promiseScheduler","description":"","frontmatter":{"category":"utils"},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Type Declarations","slug":"type-declarations","link":"#type-declarations","children":[]},{"level":2,"title":"Source","slug":"source","link":"#source","children":[]}],"relativePath":"utils/promiseScheduler/index.md","lastUpdated":1673763718000}'),S={name:"utils/promiseScheduler/index.md"},w=Object.assign(S,{setup(t){return(a,n)=>{const e=i;return y(),d("div",null,[_,g,f,b,r(e,null,{default:D(()=>[k,r(m)]),_:1}),E])}}});export{T as __pageData,w as default};
