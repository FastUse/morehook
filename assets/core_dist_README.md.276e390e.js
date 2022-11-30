import{_ as s,o as a,c as n,a as l}from"./app.48dd6b35.js";const d=JSON.parse('{"title":"MoreHook","description":"","frontmatter":{},"headers":[{"level":2,"title":"DOCUMENT & DEMO","slug":"document-demo","link":"#document-demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Install","slug":"install","link":"#install","children":[{"level":3,"title":"CDN","slug":"cdn","link":"#cdn","children":[]}]},{"level":2,"title":"Other","slug":"other","link":"#other","children":[]},{"level":2,"title":"SIGNIFICANCE STATEMENT (\u91CD\u8981\u8BF4\u660E)","slug":"significance-statement-\u91CD\u8981\u8BF4\u660E","link":"#significance-statement-\u91CD\u8981\u8BF4\u660E","children":[]},{"level":2,"title":"License","slug":"license","link":"#license","children":[]}],"relativePath":"core/dist/README.md","lastUpdated":null}'),o={name:"core/dist/README.md"},e=l(`<h1 id="morehook" tabindex="-1">MoreHook <a class="header-anchor" href="#morehook" aria-hidden="true">#</a></h1><p>\u9605\u8BFB vueuse \u6E90\u7801\u7684\u4E00\u4E9B\u8BB0\u5F55\u4EE5\u53CA\u6839\u636E\u4E1A\u52A1\u603B\u7ED3\u51FA\u7684\u4E00\u5957 hooks</p><h2 id="document-demo" tabindex="-1">DOCUMENT &amp; DEMO <a class="header-anchor" href="#document-demo" aria-hidden="true">#</a></h2><p><a href="https://fastuse.github.io/morehook/" target="_blank" rel="noreferrer">https://fastuse.github.io/morehook/</a></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>HTML:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ useBooleanState }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">useBooleanToggle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">toggle</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">setTrue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">setTrue</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">setFalse</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">setFalse</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>JS:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useBoolean</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@morehook/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">setup</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">useBooleanState</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> toggle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useBooleanToggle</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setTrue</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setFalse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useBoolean</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useBooleanState</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useBooleanToggle</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setTrue</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setFalse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm i @morehook/core</span></span>
<span class="line"></span></code></pre></div><h3 id="cdn" tabindex="-1">CDN <a class="header-anchor" href="#cdn" aria-hidden="true">#</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/@morehook/core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://cdn.jsdelivr.net/npm/@morehook/core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="other" tabindex="-1">Other <a class="header-anchor" href="#other" aria-hidden="true">#</a></h2><p>\u6B64\u9879\u76EE\u91C7\u7528 vitepress + rollup \u5305\u542B\u6253\u5305\u90E8\u7F72npm\u5305\u4EE5\u53CA\u5BF9\u6587\u6863\u7684\u4E00\u952E\u90E8\u7F72\uFF0C\u7528\u7684\u540C\u6837\u4E5F\u662F vueuse \u90A3\u4E00\u5957\u6D41\u7A0B\uFF0C\u53BB\u9664\u4E86\u5355\u6D4B\u53CA\u4E00\u4E9B\u5C0F\u70B9\uFF0C\u5F3A\u70C8\u63A8\u8350\u611F\u5174\u8DA3\u7684\u540C\u5B66\u719F\u6089\u4E00\u756A\uFF0C\u4EE5\u4E0B\u4E3A\u529F\u80FD\u70B9:</p><ul><li>\u{1F680} \u81EA\u52A8\u63D2\u5165 Type \u7C7B\u578B\u58F0\u660E</li><li>\u{1F680} \u81EA\u52A8\u63D2\u5165 Demo \u793A\u4F8B</li><li>\u{1F680} \u81EA\u52A8\u63D2\u5165 hooks \u751F\u6210\u53F3\u4FA7\u5BFC\u822A\u680F</li><li>\u{1F680} \u81EA\u52A8\u8FA8\u522B hooks \u6240\u5C5E\u7C7B\u578B\u5728\u53F3\u4FA7\u5BFC\u822A\u680F\u8FDB\u884C\u5206\u7C7B</li><li>\u{1F680} eslint</li><li>\u{1F680} typescript</li><li>\u{1F680} \u811A\u672C\u6253\u5305\u5E76\u53D1\u5E03\u6587\u6863\u7CFB\u7EDF</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u274C \u5F53\u524D @morehook/core \u5185\u5305\u542B [&#39;js-cookie&#39;, &#39;dayjs&#39;, &#39;easyqrcodejs&#39;] \u63D2\u4EF6\uFF0C\u8FFD\u6C42\u66F4\u5C0F\u5305\u4F53\u79EF\u7684\u53EF\u4EE5\u8054\u7CFB\u6211</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="significance-statement-\u91CD\u8981\u8BF4\u660E" tabindex="-1">SIGNIFICANCE STATEMENT (\u91CD\u8981\u8BF4\u660E) <a class="header-anchor" href="#significance-statement-\u91CD\u8981\u8BF4\u660E" aria-hidden="true">#</a></h2><p>\u4F5C\u8005\u76EE\u7684\u4E3A\u5B66\u4E60\u603B\u7ED3 vueuse \u5E76\u6839\u636E\u5E73\u65F6\u4E1A\u52A1\u573A\u666F\u603B\u7ED3\u51FA\u4E00\u5957\u66F4\u9002\u5E94\u81EA\u5DF1\u7684 hooks\uFF0C\u56E0\u6B64\u9879\u76EE\u5305\u542B\u5927\u90E8\u5206 vueuse \u7684 hooks\uFF08\u53EF\u80FD\u4F1A\u7A0D\u52A0\u4FEE\u6539\u53BB\u9664\u4E00\u4E9B\u8FB9\u7F18\u60C5\u51B5\uFF09\uFF0C\u611F\u8C22\u9ED8\u9ED8\u4ED8\u51FA\u7684\u5927\u4F6C\u4EEC\uFF0C\u81F4\u656C!</p><ul><li><a href="/morehook/">VueUse \u5B98\u7F51\u94FE\u63A5</a></li><li><a href="https://github.com/antfu" target="_blank" rel="noreferrer">VueUse \u4F5C\u8005 antfu</a></li></ul><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-hidden="true">#</a></h2><p><a href="https://github.com/M-cheng-web/morehook/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT License</a>Copyright (c) 2022 <a href="https://github.com/M-cheng-web" target="_blank" rel="noreferrer">M-cheng-web</a></p>`,22),p=[e];function t(c,r,D,F,i,y){return a(),n("div",null,p)}const u=s(o,[["render",t]]);export{d as __pageData,u as default};