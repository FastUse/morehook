const c={type:Boolean,default:!0},f=r=>({type:String,default:r});function u(r,t){return t?typeof t=="string"?` ${r}--${t}`:Array.isArray(t)?t.reduce((e,n)=>e+u(r,n),""):Object.keys(t).reduce((e,n)=>e+(t[n]?u(r,n):""),""):""}function a(r){return(t,e)=>(t&&typeof t!="string"&&(e=t,t=""),t=t?`${r}__${t}`:r,`${t}${u(t,e)}`)}function i(r){const t=`fastuse-${r}`;return[t,a(t)]}function s(r){return r.install=t=>{const{name:e}=r;e&&t.component(e,r)},r}const p=Object.assign;export{i as c,p as e,f as m,c as t,s as w};