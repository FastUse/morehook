import{d as u,i as v}from"./configurable.f5221abd.js";import{r as n,s as p,m as f,y as g}from"../app.896bc32d.js";const k={type:"click",target:u?u.document.body:void 0,onSuccess:()=>{}};function L(l){const{type:m,target:e,onSuccess:d}={...k,...l},a=n(-1),i=n(-1),c=n(-1),r=n(-1);if(!v||!e)return{pageX:a,pageY:i,offsetX:c,offsetY:r};let o=e;const t=s=>{a.value=s.pageX,i.value=s.pageY,c.value=s.offsetX,r.value=s.offsetY,d()};return p(()=>{o=f(e)?e.value:e,m==="click"?o.addEventListener("click",t):o.addEventListener("mousemove",t)}),g(()=>{o=f(e)?e.value:e,o.removeEventListener("click",t),o.removeEventListener("mousemove",t)}),{pageX:a,pageY:i,offsetX:c,offsetY:r}}export{L as u};
