import{_ as b}from"./chunks/DemoContainer.vue_vue_type_script_setup_true_lang.f12320d9.js";import{u as E}from"./chunks/index.1a24cafb.js";import{d as k,r as u,s as v,C as x,o as h,c as _,e as D,f as a,t as A,B as d,b as g,w as B,a as I}from"./app.896bc32d.js";import"./chunks/configurable.f5221abd.js";function m(F,{x:t,y,direction:e,target:l}){const n=document.createElement("canvas");if(!n)return;const p=n.getContext("2d"),s=new Image;return s.src=F,s.crossOrigin="Anonymous",new Promise(C=>{s.onload=()=>{let o=s.width,r=s.height,c=t||0,i=y||0;if(l&&(o=l.offsetWidth,r=l.offsetHeight),n.width=o,n.height=r,e)switch(e){case"left-top":c=0,i=0;break;case"right-top":c=o-1,i=0;break;case"center":c=o/2,i=r/2;break;case"left-bottom":c=0,i=r-1;break;case"right-bottom":c=o-1,i=r-1;break}p.drawImage(s,0,0,o,r);const f=p.getImageData(c,i,1,1).data;C(f)}})}const w={class:""},S=k({__name:"demo",setup(F){const t=u(),{offsetX:y,offsetY:e}=E({type:"move",target:t}),l=u(),n=u(),p="https://cdn.staticaly.com/gh/M-cheng-web/image-provider@main/morehook/RE4wB6h.3x93ajva7f60.webp";return v(()=>{x(()=>{const s=y.value===-1?0:y.value,C=e.value===-1?0:e.value;m(p,{x:s,y:C,target:t.value}).then(o=>{l.value=`rgba(${o.join(",")})`})}),m(p,{direction:"right-top"}).then(s=>{n.value=`rgba(${s.join(",")})`})}),(s,C)=>(h(),_("div",w,[D(" \u539F\u59CB\u56FE\u7247: "),a("img",{ref_key:"target",ref:t,src:p,style:{"margin-bottom":"40px",width:"1920px"}},null,512),D(" \u9F20\u6807\u79FB\u52A8\u83B7\u53D6\u5230\u7684\u989C\u8272\u5757: "+A(l.value)+" ",1),a("div",{style:d([{height:"100px",width:"100px"},{backgroundColor:l.value}])},null,4),D(" \u56FA\u5B9A\u53F3\u4E0A\u89D2\u83B7\u53D6\u5230\u7684\u989C\u8272\u5757: "+A(n.value)+" ",1),a("div",{style:d([{height:"100px",width:"100px"},{backgroundColor:n.value}])},null,4)]))}}),q=a("h1",{id:"getimagecolor",tabindex:"-1"},[D("getImageColor "),a("a",{class:"header-anchor",href:"#getimagecolor","aria-hidden":"true"},"#")],-1),T=a("p",null,"\u83B7\u53D6\u56FE\u7247\u4E2D\u4EFB\u610F\u5750\u6807\u7684\u50CF\u7D20",-1),P=a("h2",{id:"demo",tabindex:"-1"},[D("Demo "),a("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#")],-1),U=a("p",{class:"demo-source-link"},[a("a",{href:"https://github.com/FastUse/morehook/blob/main/packages/utils/getImageColor/demo.vue",target:"_blank"},"source")],-1),j=I("",6),H=JSON.parse('{"title":"getImageColor","description":"","frontmatter":{"category":"utils"},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Type Declarations","slug":"type-declarations","link":"#type-declarations","children":[]},{"level":2,"title":"Source","slug":"source","link":"#source","children":[]}],"relativePath":"utils/getImageColor/index.md","lastUpdated":1670416457000}'),M={name:"utils/getImageColor/index.md"},R=Object.assign(M,{setup(F){return(t,y)=>{const e=b;return h(),_("div",null,[q,T,P,g(e,null,{default:B(()=>[U,g(S)]),_:1}),j])}}});export{H as __pageData,R as default};
