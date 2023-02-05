import{d as fe,l as D,o as M,c as v,f as y,t as P,j as Q,D as Le,E as Ae,u as S,G as me,H as ye,_ as ae,I as Re,J as Ne,K as W,F as K,q as z,p as X,L as Fe,M as Te,m as Oe,e as _e,b as ke}from"./app.a50c5a69.js";function De(t=""){return t.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/^\> (.*$)/gim,"<blockquote>$1</blockquote>").replace(/\*\*(.*)\*\*/gim,"<b>$1</b>").replace(/\*(.*)\*/gim,"<i>$1</i>").replace(/!\[(.*?)\]\((.*?)\)/gim,"<img alt='$1' src='$2' />").replace(/\[(.*?)\]\((.*?)\)/gim,"<a href='$2'>$1</a>").replace(/`(.*?)`/gim,"<code>$1</code>").replace(/\n$/gim,"<br />").trim()}const Pe=t=>(me("data-v-ca134eab"),t=t(),ye(),t),je={class:"function-badge"},Be={key:0,class:"external"},We=Pe(()=>y("span",{class:"line"},"-",-1)),Ke=["innerHTML"],Qe=fe({__name:"FunctionBadge",props:{fn:null},setup(t){const e=t,s=D(()=>e.fn.external?{href:e.fn.external,target:"_blank"}:{href:`${e.fn.package}/${e.fn.name}/`});return(o,r)=>(M(),v("div",je,[y("a",Le(Ae(S(s))),[y("span",null,P(t.fn.name),1),t.fn.external?(M(),v("i",Be)):Q("",!0)],16),We,y("span",{innerHTML:S(De)(t.fn.description)},null,8,Ke)]))}});const Ve=ae(Qe,[["__scopeId","data-v-ca134eab"]]);function A(t){return Array.isArray?Array.isArray(t):Me(t)==="[object Array]"}const He=1/0;function ze(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-He?"-0":e}function Ye(t){return t==null?"":ze(t)}function C(t){return typeof t=="string"}function be(t){return typeof t=="number"}function Ge(t){return t===!0||t===!1||Je(t)&&Me(t)=="[object Boolean]"}function Se(t){return typeof t=="object"}function Je(t){return Se(t)&&t!==null}function E(t){return t!=null}function Z(t){return!t.trim().length}function Me(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Xe="Incorrect 'index' type",Ze=t=>`Invalid value for key ${t}`,qe=t=>`Pattern length exceeds max of ${t}.`,et=t=>`Missing ${t} property in key`,tt=t=>`Property 'weight' in key '${t}' must be a positive integer`,le=Object.prototype.hasOwnProperty;class st{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(o=>{let r=ve(o);s+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(o=>{o.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ve(t){let e=null,s=null,o=null,r=1,a=null;if(C(t)||A(t))o=t,e=ue(t),s=q(t);else{if(!le.call(t,"name"))throw new Error(et("name"));const n=t.name;if(o=n,le.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(tt(n));e=ue(n),s=q(n),a=t.getFn}return{path:e,id:s,weight:r,src:o,getFn:a}}function ue(t){return A(t)?t:t.split(".")}function q(t){return A(t)?t.join("."):t}function ot(t,e){let s=[],o=!1;const r=(a,n,i)=>{if(!!E(a))if(!n[i])s.push(a);else{let c=n[i];const u=a[c];if(!E(u))return;if(i===n.length-1&&(C(u)||be(u)||Ge(u)))s.push(Ye(u));else if(A(u)){o=!0;for(let l=0,h=u.length;l<h;l+=1)r(u[l],n,i+1)}else n.length&&r(u,n,i+1)}};return r(t,C(e)?e.split("."):e,0),o?s:s[0]}const rt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},at={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},nt={location:0,threshold:.6,distance:100},it={useExtendedSearch:!1,getFn:ot,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var d={...at,...rt,...nt,...it};const ct=/[^ ]+/g;function lt(t=1,e=3){const s=new Map,o=Math.pow(10,e);return{get(r){const a=r.match(ct).length;if(s.has(a))return s.get(a);const n=1/Math.pow(a,.5*t),i=parseFloat(Math.round(n*o)/o);return s.set(a,i),i},clear(){s.clear()}}}class ne{constructor({getFn:e=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){this.norm=lt(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,o)=>{this._keysMap[s.id]=o})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,C(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();C(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,o=this.size();s<o;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!E(e)||Z(e))return;let o={v:e,i:s,n:this.norm.get(e)};this.records.push(o)}_addObject(e,s){let o={i:s,$:{}};this.keys.forEach((r,a)=>{let n=r.getFn?r.getFn(e):this.getFn(e,r.path);if(!!E(n)){if(A(n)){let i=[];const c=[{nestedArrIndex:-1,value:n}];for(;c.length;){const{nestedArrIndex:u,value:l}=c.pop();if(!!E(l))if(C(l)&&!Z(l)){let h={v:l,i:u,n:this.norm.get(l)};i.push(h)}else A(l)&&l.forEach((h,p)=>{c.push({nestedArrIndex:p,value:h})})}o.$[a]=i}else if(C(n)&&!Z(n)){let i={v:n,n:this.norm.get(n)};o.$[a]=i}}}),this.records.push(o)}toJSON(){return{keys:this.keys,records:this.records}}}function xe(t,e,{getFn:s=d.getFn,fieldNormWeight:o=d.fieldNormWeight}={}){const r=new ne({getFn:s,fieldNormWeight:o});return r.setKeys(t.map(ve)),r.setSources(e),r.create(),r}function ut(t,{getFn:e=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){const{keys:o,records:r}=t,a=new ne({getFn:e,fieldNormWeight:s});return a.setKeys(o),a.setIndexRecords(r),a}function Y(t,{errors:e=0,currentLocation:s=0,expectedLocation:o=0,distance:r=d.distance,ignoreLocation:a=d.ignoreLocation}={}){const n=e/t.length;if(a)return n;const i=Math.abs(o-s);return r?n+i/r:i?1:n}function dt(t=[],e=d.minMatchCharLength){let s=[],o=-1,r=-1,a=0;for(let n=t.length;a<n;a+=1){let i=t[a];i&&o===-1?o=a:!i&&o!==-1&&(r=a-1,r-o+1>=e&&s.push([o,r]),o=-1)}return t[a-1]&&a-o>=e&&s.push([o,a-1]),s}const T=32;function ht(t,e,s,{location:o=d.location,distance:r=d.distance,threshold:a=d.threshold,findAllMatches:n=d.findAllMatches,minMatchCharLength:i=d.minMatchCharLength,includeMatches:c=d.includeMatches,ignoreLocation:u=d.ignoreLocation}={}){if(e.length>T)throw new Error(qe(T));const l=e.length,h=t.length,p=Math.max(0,Math.min(o,h));let m=a,_=p;const x=i>1||c,w=x?Array(h):[];let U;for(;(U=t.indexOf(e,_))>-1;){let b=Y(e,{currentLocation:U,expectedLocation:p,distance:r,ignoreLocation:u});if(m=Math.min(b,m),_=U+l,x){let I=0;for(;I<l;)w[U+I]=1,I+=1}}_=-1;let R=[],g=1,k=l+h;const L=1<<l-1;for(let b=0;b<l;b+=1){let I=0,N=k;for(;I<N;)Y(e,{errors:b,currentLocation:p+N,expectedLocation:p,distance:r,ignoreLocation:u})<=m?I=N:k=N,N=Math.floor((k-I)/2+I);k=N;let ie=Math.max(1,p-N+1),J=n?h:Math.min(p+N,h)+l,O=Array(J+2);O[J+1]=(1<<b)-1;for(let $=J;$>=ie;$-=1){let H=$-1,ce=s[t.charAt(H)];if(x&&(w[H]=+!!ce),O[$]=(O[$+1]<<1|1)&ce,b&&(O[$]|=(R[$+1]|R[$])<<1|1|R[$+1]),O[$]&L&&(g=Y(e,{errors:b,currentLocation:H,expectedLocation:p,distance:r,ignoreLocation:u}),g<=m)){if(m=g,_=H,_<=p)break;ie=Math.max(1,2*p-_)}}if(Y(e,{errors:b+1,currentLocation:p,expectedLocation:p,distance:r,ignoreLocation:u})>m)break;R=O}const f={isMatch:_>=0,score:Math.max(.001,g)};if(x){const b=dt(w,i);b.length?c&&(f.indices=b):f.isMatch=!1}return f}function pt(t){let e={};for(let s=0,o=t.length;s<o;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<o-s-1}return e}class Ee{constructor(e,{location:s=d.location,threshold:o=d.threshold,distance:r=d.distance,includeMatches:a=d.includeMatches,findAllMatches:n=d.findAllMatches,minMatchCharLength:i=d.minMatchCharLength,isCaseSensitive:c=d.isCaseSensitive,ignoreLocation:u=d.ignoreLocation}={}){if(this.options={location:s,threshold:o,distance:r,includeMatches:a,findAllMatches:n,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(p,m)=>{this.chunks.push({pattern:p,alphabet:pt(p),startIndex:m})},h=this.pattern.length;if(h>T){let p=0;const m=h%T,_=h-m;for(;p<_;)l(this.pattern.substr(p,T),p),p+=T;if(m){const x=h-T;l(this.pattern.substr(x),x)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:o}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let _={isMatch:!0,score:0};return o&&(_.indices=[[0,e.length-1]]),_}const{location:r,distance:a,threshold:n,findAllMatches:i,minMatchCharLength:c,ignoreLocation:u}=this.options;let l=[],h=0,p=!1;this.chunks.forEach(({pattern:_,alphabet:x,startIndex:w})=>{const{isMatch:U,score:R,indices:g}=ht(e,_,x,{location:r+w,distance:a,threshold:n,findAllMatches:i,minMatchCharLength:c,includeMatches:o,ignoreLocation:u});U&&(p=!0),h+=R,U&&g&&(l=[...l,...g])});let m={isMatch:p,score:p?h/this.chunks.length:1};return p&&o&&(m.indices=l),m}}class F{constructor(e){this.pattern=e}static isMultiMatch(e){return de(e,this.multiRegex)}static isSingleMatch(e){return de(e,this.singleRegex)}search(){}}function de(t,e){const s=t.match(e);return s?s[1]:null}class gt extends F{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class ft extends F{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const o=e.indexOf(this.pattern)===-1;return{isMatch:o,score:o?0:1,indices:[0,e.length-1]}}}class mt extends F{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class yt extends F{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class _t extends F{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class kt extends F{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Ue extends F{constructor(e,{location:s=d.location,threshold:o=d.threshold,distance:r=d.distance,includeMatches:a=d.includeMatches,findAllMatches:n=d.findAllMatches,minMatchCharLength:i=d.minMatchCharLength,isCaseSensitive:c=d.isCaseSensitive,ignoreLocation:u=d.ignoreLocation}={}){super(e),this._bitapSearch=new Ee(e,{location:s,threshold:o,distance:r,includeMatches:a,findAllMatches:n,minMatchCharLength:i,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Ie extends F{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,o;const r=[],a=this.pattern.length;for(;(o=e.indexOf(this.pattern,s))>-1;)s=o+a,r.push([o,s-1]);const n=!!r.length;return{isMatch:n,score:n?0:1,indices:r}}}const ee=[gt,Ie,mt,yt,kt,_t,ft,Ue],he=ee.length,bt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,St="|";function Mt(t,e={}){return t.split(St).map(s=>{let o=s.trim().split(bt).filter(a=>a&&!!a.trim()),r=[];for(let a=0,n=o.length;a<n;a+=1){const i=o[a];let c=!1,u=-1;for(;!c&&++u<he;){const l=ee[u];let h=l.isMultiMatch(i);h&&(r.push(new l(h,e)),c=!0)}if(!c)for(u=-1;++u<he;){const l=ee[u];let h=l.isSingleMatch(i);if(h){r.push(new l(h,e));break}}}return r})}const vt=new Set([Ue.type,Ie.type]);class xt{constructor(e,{isCaseSensitive:s=d.isCaseSensitive,includeMatches:o=d.includeMatches,minMatchCharLength:r=d.minMatchCharLength,ignoreLocation:a=d.ignoreLocation,findAllMatches:n=d.findAllMatches,location:i=d.location,threshold:c=d.threshold,distance:u=d.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:o,minMatchCharLength:r,findAllMatches:n,ignoreLocation:a,location:i,threshold:c,distance:u},this.pattern=s?e:e.toLowerCase(),this.query=Mt(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:o,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let a=0,n=[],i=0;for(let c=0,u=s.length;c<u;c+=1){const l=s[c];n.length=0,a=0;for(let h=0,p=l.length;h<p;h+=1){const m=l[h],{isMatch:_,indices:x,score:w}=m.search(e);if(_){if(a+=1,i+=w,o){const U=m.constructor.type;vt.has(U)?n=[...n,...x]:n.push(x)}}else{i=0,a=0,n.length=0;break}}if(a){let h={isMatch:!0,score:i/a};return o&&(h.indices=n),h}}return{isMatch:!1,score:1}}}const te=[];function Et(...t){te.push(...t)}function se(t,e){for(let s=0,o=te.length;s<o;s+=1){let r=te[s];if(r.condition(t,e))return new r(t,e)}return new Ee(t,e)}const G={AND:"$and",OR:"$or"},oe={PATH:"$path",PATTERN:"$val"},re=t=>!!(t[G.AND]||t[G.OR]),Ut=t=>!!t[oe.PATH],It=t=>!A(t)&&Se(t)&&!re(t),pe=t=>({[G.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function $e(t,e,{auto:s=!0}={}){const o=r=>{let a=Object.keys(r);const n=Ut(r);if(!n&&a.length>1&&!re(r))return o(pe(r));if(It(r)){const c=n?r[oe.PATH]:a[0],u=n?r[oe.PATTERN]:r[c];if(!C(u))throw new Error(Ze(c));const l={keyId:q(c),pattern:u};return s&&(l.searcher=se(u,e)),l}let i={children:[],operator:a[0]};return a.forEach(c=>{const u=r[c];A(u)&&u.forEach(l=>{i.children.push(o(l))})}),i};return re(t)||(t=pe(t)),o(t)}function $t(t,{ignoreFieldNorm:e=d.ignoreFieldNorm}){t.forEach(s=>{let o=1;s.matches.forEach(({key:r,norm:a,score:n})=>{const i=r?r.weight:null;o*=Math.pow(n===0&&i?Number.EPSILON:n,(i||1)*(e?1:a))}),s.score=o})}function Ct(t,e){const s=t.matches;e.matches=[],E(s)&&s.forEach(o=>{if(!E(o.indices)||!o.indices.length)return;const{indices:r,value:a}=o;let n={indices:r,value:a};o.key&&(n.key=o.key.src),o.idx>-1&&(n.refIndex=o.idx),e.matches.push(n)})}function wt(t,e){e.score=t.score}function Lt(t,e,{includeMatches:s=d.includeMatches,includeScore:o=d.includeScore}={}){const r=[];return s&&r.push(Ct),o&&r.push(wt),t.map(a=>{const{idx:n}=a,i={item:e[n],refIndex:n};return r.length&&r.forEach(c=>{c(a,i)}),i})}class B{constructor(e,s={},o){this.options={...d,...s},this.options.useExtendedSearch,this._keyStore=new st(this.options.keys),this.setCollection(e,o)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof ne))throw new Error(Xe);this._myIndex=s||xe(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!E(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let o=0,r=this._docs.length;o<r;o+=1){const a=this._docs[o];e(a,o)&&(this.removeAt(o),o-=1,r-=1,s.push(a))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:o,includeScore:r,shouldSort:a,sortFn:n,ignoreFieldNorm:i}=this.options;let c=C(e)?C(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return $t(c,{ignoreFieldNorm:i}),a&&c.sort(n),be(s)&&s>-1&&(c=c.slice(0,s)),Lt(c,this._docs,{includeMatches:o,includeScore:r})}_searchStringList(e){const s=se(e,this.options),{records:o}=this._myIndex,r=[];return o.forEach(({v:a,i:n,n:i})=>{if(!E(a))return;const{isMatch:c,score:u,indices:l}=s.searchIn(a);c&&r.push({item:a,idx:n,matches:[{score:u,value:a,norm:i,indices:l}]})}),r}_searchLogical(e){const s=$e(e,this.options),o=(i,c,u)=>{if(!i.children){const{keyId:h,searcher:p}=i,m=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(c,h),searcher:p});return m&&m.length?[{idx:u,item:c,matches:m}]:[]}const l=[];for(let h=0,p=i.children.length;h<p;h+=1){const m=i.children[h],_=o(m,c,u);if(_.length)l.push(..._);else if(i.operator===G.AND)return[]}return l},r=this._myIndex.records,a={},n=[];return r.forEach(({$:i,i:c})=>{if(E(i)){let u=o(s,i,c);u.length&&(a[c]||(a[c]={idx:c,item:i,matches:[]},n.push(a[c])),u.forEach(({matches:l})=>{a[c].matches.push(...l)}))}}),n}_searchObjectList(e){const s=se(e,this.options),{keys:o,records:r}=this._myIndex,a=[];return r.forEach(({$:n,i})=>{if(!E(n))return;let c=[];o.forEach((u,l)=>{c.push(...this._findMatches({key:u,value:n[l],searcher:s}))}),c.length&&a.push({idx:i,item:n,matches:c})}),a}_findMatches({key:e,value:s,searcher:o}){if(!E(s))return[];let r=[];if(A(s))s.forEach(({v:a,i:n,n:i})=>{if(!E(a))return;const{isMatch:c,score:u,indices:l}=o.searchIn(a);c&&r.push({score:u,key:e,value:a,idx:n,norm:i,indices:l})});else{const{v:a,n}=s,{isMatch:i,score:c,indices:u}=o.searchIn(a);i&&r.push({score:c,key:e,value:a,norm:n,indices:u})}return r}}B.version="6.6.2";B.createIndex=xe;B.parseIndex=ut;B.config=d;B.parseQuery=$e;Et(xt);const At=["Component","Elements","Network","Sensors","State","Time","Utilities","@Component","@Router","@Utils"],Rt=[{name:"button",package:"component",docs:"https://fastuse.github.io/morehook/component/button/",category:"@Component",description:"\u6309\u94AE\u7EC4\u4EF6",lastUpdated:1669127578e3,deprecated:!1,alias:[],related:[]},{name:"deepCopy",package:"utils",docs:"https://fastuse.github.io/morehook/utils/deepCopy/",category:"@Utils",description:"\u6DF1\u62F7\u8D1D\uFF08\u517C\u5BB9\u51FD\u6570\uFF0C\u5BF9\u8C61\uFF0C\u76F8\u4E92\u5F15\u7528\u573A\u666F\uFF09",lastUpdated:1669446166e3,deprecated:!1,alias:[],related:[]},{name:"downloadFile",package:"utils",docs:"https://fastuse.github.io/morehook/utils/downloadFile/",category:"@Utils",description:"\u4E0B\u8F7D\u6587\u4EF6",lastUpdated:1672279333e3,deprecated:!1,alias:[],related:[]},{name:"dynamicLoading",package:"component",docs:"https://fastuse.github.io/morehook/component/dynamicLoading/",category:"@Component",description:"\u5168\u5C40\u52A8\u753B loading",lastUpdated:1669801381e3,deprecated:!1,alias:[],related:[]},{name:"getImageColor",package:"utils",docs:"https://fastuse.github.io/morehook/utils/getImageColor/",category:"@Utils",description:"\u83B7\u53D6\u56FE\u7247\u4E2D\u4EFB\u610F\u5750\u6807\u7684\u50CF\u7D20",lastUpdated:1670416457e3,deprecated:!1,alias:[],related:[]},{name:"getRandomStr",package:"utils",docs:"https://fastuse.github.io/morehook/utils/getRandomStr/",category:"@Utils",description:"\u83B7\u53D6\u968F\u673A\u552F\u4E00\u5B57\u7B26\u4E32",lastUpdated:1669435324e3,deprecated:!1,alias:[],related:[]},{name:"precisionNumber",package:"utils",docs:"https://fastuse.github.io/morehook/utils/precisionNumber/",category:"@Utils",description:"\u89E3\u51B3\u6570\u5B57\u8FD0\u7B97\u65F6\u7CBE\u5EA6\u95EE\u9898(\u6700\u9AD8\u652F\u6301\u523016\u4F4D)",lastUpdated:1674054862e3,deprecated:!1,alias:[],related:[]},{name:"promiseScheduler",package:"utils",docs:"https://fastuse.github.io/morehook/utils/promiseScheduler/",category:"@Utils",description:"promise \u4EFB\u52A1\u8C03\u5EA6",lastUpdated:1673763718e3,deprecated:!1,alias:[],related:[]},{name:"splitNumRandom",package:"utils",docs:"https://fastuse.github.io/morehook/utils/splitNumRandom/",category:"@Utils",description:"\u6839\u636E\u7ED9\u5B9A\u7684\u603B\u6570\u548C\u4F4D\u6570\u5F97\u5230\u56FA\u5B9A\u4F4D\u6570\u7684\u968F\u673A\u503C\u7684\u6570\u7EC4",lastUpdated:1669643386e3,deprecated:!1,alias:[],related:[]},{name:"tag",package:"component",docs:"https://fastuse.github.io/morehook/component/tag/",category:"@Component",description:"\u6807\u7B7E\u7EC4\u4EF6",lastUpdated:1669127578e3,deprecated:!1,alias:[],related:[]},{name:"uniapp-bridge",package:"utils",docs:"https://fastuse.github.io/morehook/utils/uniapp-bridge/",category:"@Utils",description:"``` js",lastUpdated:1675570661e3,deprecated:!1,alias:[],related:[]},{name:"uniapp-unit",package:"utils",docs:"https://fastuse.github.io/morehook/utils/uniapp-unit/",category:"@Utils",description:"``` js",lastUpdated:1674055056e3,deprecated:!1,alias:[],related:[]},{name:"useBoolean",package:"core",docs:"https://fastuse.github.io/morehook/core/useBoolean/",category:"State",description:"\u4F18\u96C5\u7684\u7BA1\u7406 boolean \u503C",lastUpdated:1667109561e3,deprecated:!1,alias:[],related:[]},{name:"useCookie",package:"core",docs:"https://fastuse.github.io/morehook/core/useCookie/",category:"State",description:"\u64CD\u4F5C Cookie",lastUpdated:1667121696e3,deprecated:!1,alias:[],related:[]},{name:"useCopy",package:"core",docs:"https://fastuse.github.io/morehook/core/useCopy/",category:"Utilities",description:"\u63A7\u5236 \u526A\u5207\u677F\u5185\u5BB9",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useDate",package:"core",docs:"https://fastuse.github.io/morehook/core/useDate/",category:"Time",description:"\u64CD\u4F5C\u65F6\u95F4\uFF0C\u8FD4\u56DE\u671F\u671B\u683C\u5F0F\uFF08\u5185\u90E8\u4F7F\u7528\u4E86 dayjs\uFF09",lastUpdated:1667121696e3,deprecated:!1,alias:[],related:[]},{name:"useDebounce",package:"core",docs:"https://fastuse.github.io/morehook/core/useDebounce/",category:"Utilities",description:"\u5904\u7406\u9632\u6296\u503C - \u8FDE\u7EED\u89E6\u53D1\u53EA\u4F1A\u66F4\u65B0\u4E00\u6B21\u503C",lastUpdated:1667121696e3,deprecated:!1,alias:[],related:[]},{name:"useDebounceFn",package:"core",docs:"https://fastuse.github.io/morehook/core/useDebounceFn/",category:"Utilities",description:"\u5904\u7406\u9632\u6296\u51FD\u6570",lastUpdated:1667121696e3,deprecated:!1,alias:[],related:[]},{name:"useDelayData",package:"core",docs:"https://fastuse.github.io/morehook/core/useDelayData/",category:"State",description:"\u5BF9\u4F20\u5165\u7684\u5E03\u5C14\u503C\u955C\u50CF\u4E00\u4E2A\u5E26\u6709\u5EF6\u8FDF\u7684\u5E03\u5C14\u503C",lastUpdated:1669713554e3,deprecated:!1,alias:[],related:[]},{name:"useDocumentHidden",package:"core",docs:"https://fastuse.github.io/morehook/core/useDocumentHidden/",category:"Elements",description:"\u83B7\u53D6\u9875\u9762\u662F\u5426\u9690\u85CF",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useDynamicList",package:"core",docs:"https://fastuse.github.io/morehook/core/useDynamicList/",category:"State",description:"\u7528\u4E8E\u7BA1\u7406\u5217\u8868\u72B6\u6001",lastUpdated:1669437367e3,deprecated:!1,alias:[],related:[]},{name:"useExternal",package:"core",docs:"https://fastuse.github.io/morehook/core/useExternal/",category:"Sensors",description:"\u7528\u4E8E\u52A8\u6001\u5730\u5411\u9875\u9762\u52A0\u8F7D\u6216\u5378\u8F7D\u5916\u90E8\u8D44\u6E90",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useFullscreen",package:"core",docs:"https://fastuse.github.io/morehook/core/useFullscreen/",category:"Elements",description:"\u63A7\u5236\u5143\u7D20\u5168\u5C4F",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useLocalStorage",package:"core",docs:"https://fastuse.github.io/morehook/core/useLocalStorage/",category:"State",description:"\u7BA1\u7406 localStorage",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useLockFn",package:"core",docs:"https://fastuse.github.io/morehook/core/useLockFn/",category:"Utilities",description:"\u7ED9\u51FD\u6570\u8BBE\u7F6E\u5355\u884C\u9053\uFF0C\u53EA\u6709\u6B64\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u624D\u80FD\u6267\u884C\u4E0B\u4E00\u4E2A",lastUpdated:1667230121e3,deprecated:!1,alias:[],related:[]},{name:"useMap",package:"core",docs:"https://fastuse.github.io/morehook/core/useMap/",category:"State",description:"\u4F18\u96C5\u7684\u7BA1\u7406 Map \u7ED3\u6784\u6570\u636E",lastUpdated:1667281153e3,deprecated:!1,alias:[],related:[]},{name:"useMediaQuery",package:"core",docs:"https://fastuse.github.io/morehook/core/useMediaQuery/",category:"Sensors",description:"\u76D1\u542C mediaQuery \u72B6\u6001 (\u6B64 hook \u53EA\u9488\u5BF9\u5355\u4E2A\u76D1\u542C\uFF0CuseMediaQueryS\u652F\u6301\u591A\u4E2A)",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useMediaQueryS",package:"core",docs:"https://fastuse.github.io/morehook/core/useMediaQueryS/",category:"Sensors",description:"\u5B58\u5165\u9884\u5B9A\u7684\u5C4F\u5E55\u5927\u5C0F\u533A\u95F4\u5206\u7C7B\uFF0C\u76D1\u542C mediaQuery \u72B6\u6001\uFF0C\u81EA\u52A8\u7ED9\u51FA\u5F53\u524D\u5C4F\u5E55\u6240\u5728\u5206\u7C7B\u7684key",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useMousePosition",package:"core",docs:"https://fastuse.github.io/morehook/core/useMousePosition/",category:"Sensors",description:"\u6355\u6349\u9F20\u6807\u65B9\u4F4D",lastUpdated:1670388989e3,deprecated:!1,alias:[],related:[]},{name:"useNetwork",package:"core",docs:"https://fastuse.github.io/morehook/core/useNetwork/",category:"Sensors",description:"\u83B7\u53D6\u5F53\u524D\u7F51\u7EDC\u72B6\u6001",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useQRCode",package:"core",docs:"https://fastuse.github.io/morehook/core/useQRCode/",category:"Utilities",description:"\u6839\u636E\u5B57\u7B26\u4E32\u751F\u6210\u4E8C\u7EF4\u7801",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useRouteQuery",package:"router",docs:"https://fastuse.github.io/morehook/router/useRouteQuery/",category:"@Router",description:"\u83B7\u53D6vueRouter query (\u4FEE\u6539\u8FD4\u56DE\u7684state\u53EF\u76F4\u63A5\u4FEE\u6539url\u4E2D\u7684query)",lastUpdated:1668084211e3,deprecated:!1,alias:[],related:[]},{name:"useScrollPosition",package:"core",docs:"https://fastuse.github.io/morehook/core/useScrollPosition/",category:"Sensors",description:"\u83B7\u53D6scroll \u7684Y\u8F74\u6EDA\u52A8\u91CF (\u53EF\u6307\u5B9A\u5143\u7D20)",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useSessionStorage",package:"core",docs:"https://fastuse.github.io/morehook/core/useSessionStorage/",category:"State",description:"\u4F18\u96C5\u64CD\u4F5C sessionStorage \u5B58\u50A8",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useSet",package:"core",docs:"https://fastuse.github.io/morehook/core/useSet/",category:"State",description:"\u5FEB\u6377\u64CD\u4F5C Set \u6570\u636E\u7ED3\u6784",lastUpdated:1667432305e3,deprecated:!1,alias:[],related:[]},{name:"useSleep",package:"core",docs:"https://fastuse.github.io/morehook/core/useSleep/",category:"Utilities",description:"\u6682\u505C\u7A0B\u5E8F - \u5728\u8BBE\u5B9A\u65F6\u95F4\u540E\u7EE7\u7EED\u6267\u884C",lastUpdated:1667465573e3,deprecated:!1,alias:[],related:[]},{name:"useTextSelection",package:"core",docs:"https://fastuse.github.io/morehook/core/useTextSelection/",category:"Sensors",description:"\u83B7\u53D6\u7528\u6237\u9009\u4E2D\u7684\u5B57\u7B26\u4E32\u4EE5\u53CA\u5176\u4F4D\u7F6E\u4FE1\u606F",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]},{name:"useThrottle",package:"core",docs:"https://fastuse.github.io/morehook/core/useThrottle/",category:"Utilities",description:"\u5904\u7406\u8282\u6D41\u503C",lastUpdated:1667481107e3,deprecated:!1,alias:[],related:[]},{name:"useThrottleFn",package:"core",docs:"https://fastuse.github.io/morehook/core/useThrottleFn/",category:"Utilities",description:"\u5904\u7406\u8282\u6D41\u51FD\u6570",lastUpdated:1667907971e3,deprecated:!1,alias:[],related:[]},{name:"useTimeDown",package:"core",docs:"https://fastuse.github.io/morehook/core/useTimeDown/",category:"Utilities",description:"\u4FBF\u6377\u7BA1\u7406\u5012\u8BA1\u65F6",lastUpdated:1669286577e3,deprecated:!1,alias:[],related:[]},{name:"useToggle",package:"core",docs:"https://fastuse.github.io/morehook/core/useToggle/",category:"State",description:"\u7528\u4E8E\u5728N\u4E2A\u72B6\u6001\u503C\u95F4\u5207\u6362",lastUpdated:1667621001e3,deprecated:!1,alias:[],related:[]},{name:"useVirtualList",package:"core",docs:"https://fastuse.github.io/morehook/core/useVirtualList/",category:"Component",description:"\u7BA1\u7406\u865A\u62DF\u5217\u8868",lastUpdated:1667621843e3,deprecated:!1,alias:[],related:[]},{name:"useWebSocket",package:"core",docs:"https://fastuse.github.io/morehook/core/useWebSocket/",category:"Network",description:"\u7BA1\u7406 websocket",lastUpdated:1667924694e3,deprecated:!1,alias:[],related:[]}],Nt="\u5F85\u5206\u914D",Ft="\u5BF9\u6570\u636E\u7684\u72B6\u6001\u66F4\u6539\u6355\u6349\uFF08\u4F8B\u5982\u8BB0\u5F55promise\u7684\u7B49\u5F85\u4EE5\u53CA\u6210\u529F\u72B6\u6001\uFF0Cstorage\u81EA\u52A8\u5B58\u53D6\uFF0C\u4E00\u4E9B\u53CC\u5411\u7684\u6570\u636E\u66F4\u6539\u53EF\u4EE5\u653E\u8FD9\u4E2A\u5206\u7C7B\uFF09",Tt="\u5143\u7D20\uFF08\u6D89\u53CA\u5230\u539F\u751F DOM \u7684hook\uFF09",Ot="\u6D4F\u89C8\u5668\uFF08\u5173\u4E8E\u6D4F\u89C8\u5668\u7684\uFF09",Dt="\u4F20\u611F\u5668\uFF08\u4F8B\u5982\u7F51\u7EDC\u72B6\u6001\u6355\u6349\uFF0C\u7F51\u7EDC\u8D44\u6E90\u52A0\u8F7D\uFF0C\u9F20\u6807\u52A8\u5411\u6355\u6349\uFF0Cscroll\u6355\u6349\uFF0C\u5C4F\u5E55\u533A\u95F4\u6355\u6349\uFF09",Pt="\u7F51\u7EDC\u8FDE\u63A5\uFF08\u4F8B\u5982http\u5C01\u88C5\uFF0Cwebsocket\u5C01\u88C5\uFF0Cfetch\u5C01\u88C5\uFF09",jt="\u52A8\u753B",Bt="\u7EC4\u4EF6hook\uFF0C\u6D89\u53CA\u5230\u5927\u91CF\u9875\u9762\u64CD\u4F5C\u7684hook",Wt="\u76D1\u542C\uFF08\u76D1\u542C\u6570\u7EC4\uFF0C\u72B6\u6001\u8FD9\u4E9B\uFF09",Kt="\u65F6\u95F4\uFF08\u5173\u4E8E\u65F6\u95F4\u7684\u5904\u7406\uFF09",Qt="\u516C\u5171\u5DE5\u5177\uFF08\u4F8B\u5982\u8F6Cbase64\uFF0C\u8F6C\u6570\u5B57\uFF0CeventBus\uFF0C\u6682\u505Csleep\uFF0C\u9632\u6296\u8282\u6D41\uFF0C\u8FD9\u4E9B\uFF09",Ce={UnDistribution:Nt,State:Ft,Elements:Tt,Browser:Ot,Sensors:Dt,Network:Pt,Animation:jt,Component:Bt,Watch:Wt,Array:"\u6570\u7EC4\uFF08\u5173\u4E8E\u6570\u7EC4\u7684\u5904\u7406\uFF09",Time:Kt,Utilities:Qt,"@Router":"vue-router\u7684\u76F8\u5173 hooks","@Component":"\u7EC4\u4EF6\u5E93\uFF0C\u9664\u4E86\u5BFC\u51FA\u7EC4\u4EF6\u8FD8\u63D0\u4F9Bhook\u4FBF\u4E8E\u64CD\u4F5C\u76EE\u6807\u7EC4\u4EF6\u5185\u90E8\u6570\u636E","@Utils":"\u5DE5\u5177\u5E93\uFF0C\u57FA\u7840\u4E14\u5355\u4E00\u7684\u5DE5\u5177\u51FD\u6570"},Vt=Ce,ge=Object.keys(Ce),we=Rt,Ht=At;we.map(t=>t.name);const j=Array.from(Ht).sort((t,e)=>ge.indexOf(t)-ge.indexOf(e)).sort((t,e)=>t.startsWith("@")?1:e.startsWith("@")?-1:0);j.filter(t=>!t.startsWith("@"));j.filter(t=>t.startsWith("@"));const V=t=>(me("data-v-e92487e5"),t=t(),ye(),t),zt={class:"function-list"},Yt={class:"action"},Gt={class:"sub-action"},Jt=V(()=>y("div",null,"Core",-1)),Xt=["onClick"],Zt={class:"sub-action"},qt=V(()=>y("div",null,"Add-ons",-1)),es=["onClick"],ts={class:"sub-action"},ss=V(()=>y("div",null,"Sort by",-1)),os={key:0,class:"select-button active"},rs=["onClick"],as=V(()=>y("div",{class:"line",style:{"margin-top":"20px"}},null,-1)),ns={class:"search"},is=V(()=>y("div",{class:"line",style:{"margin-bottom":"20px"}},null,-1)),cs={class:"relative"},ls={key:0,class:"clear"},us={key:0,class:"category"},ds={key:1,class:"no-result"},hs=fe({__name:"FunctionsList",setup(t){const e=j.filter(g=>!g.startsWith("@")),s=j.filter(g=>g.startsWith("@")),o=["category","name","updated"],r=Vt;Re("click",g=>{g.target.tagName==="A"&&window.dispatchEvent(new Event("hashchange"))});const a=Ne("hash-params",{removeFalsyValues:!0}),n=W(a,"search"),i=W(a,"category"),c=W(a,"component"),u=W(a,"directive"),l=W(a,"sort"),h=D(()=>!n.value&&(!l.value||l.value==="category")),p=D(()=>{let g=we.filter(k=>!k.internal);return c.value&&(g=g.filter(k=>k.component)),u.value&&(g=g.filter(k=>k.directive)),i.value?g.filter(k=>k.category===i.value):g}),m=D(()=>new B(p.value,{keys:["name","description"]})),_=D(()=>{if(n.value)return m.value.search(n.value).map(g=>g.item);{const g=[...p.value];return l.value==="updated"?g.sort((k,L)=>L.lastUpdated||0-(k.lastUpdated||0)):l.value==="name"?g.sort((k,L)=>k.name.localeCompare(L.name)):g.sort((k,L)=>j.indexOf(k.category||"")-j.indexOf(L.category||"")),g}}),x=D(()=>Boolean(n.value||i.value||c.value||l.value));function w(){l.value=null,i.value=null,c.value=!1,n.value=null}function U(g){i.value=i.value===g?null:g}function R(g){l.value=g}return(g,k)=>{const L=Ve;return M(),v("div",zt,[y("div",Yt,[y("div",Gt,[Jt,y("div",null,[(M(!0),v(K,null,z(S(e),f=>(M(),v("button",{key:f,class:X(["select-button",{active:S(i)===f}]),onClick:b=>U(f)},P(f),11,Xt))),128))])]),y("div",Zt,[qt,y("div",null,[(M(!0),v(K,null,z(S(s),f=>(M(),v("button",{key:f,class:X(["select-button",{active:S(i)===f}]),onClick:b=>U(f)},P(f.slice(1)),11,es))),128))])]),y("div",ts,[ss,y("div",null,[S(n)?(M(),v("button",os," Search ")):Q("",!0),(M(),v(K,null,z(o,f=>y("button",{key:f,class:X(["select-button capitalize",{active:f===(S(l)||"category"),disabled:S(n)}]),onClick:b=>R(f)},P(f),11,rs)),64))])])]),as,y("div",ns,[Fe(y("input",{"onUpdate:modelValue":k[0]||(k[0]=f=>Oe(n)?n.value=f:null),type:"text",placeholder:"Search..."},null,512),[[Te,S(n)]])]),is,y("div",cs,[S(x)?(M(),v("div",ls,[y("button",{class:"select-button",onClick:k[1]||(k[1]=f=>w())}," Clear Filters ")])):Q("",!0),(M(!0),v(K,null,z(S(_),(f,b)=>{var I;return M(),v(K,{key:f.name},[S(h)&&f.category!==((I=S(_)[b-1])==null?void 0:I.category)?(M(),v("h3",us,[_e(P(f.category)+" ",1),y("h5",null,P(S(r)[f.category]),1)])):Q("",!0),ke(L,{fn:f},null,8,["fn"])],64)}),128)),S(_).length?Q("",!0):(M(),v("div",ds,"\u6CA1\u6709\u641C\u7D22\u7ED3\u679C"))])])}}});const ps=ae(hs,[["__scopeId","data-v-e92487e5"]]),ks=JSON.parse('{"title":"Functions","description":"","frontmatter":{},"headers":[],"relativePath":"functions.md","lastUpdated":1667910321000}'),gs={name:"functions.md"},fs=y("h1",{id:"functions",tabindex:"-1"},[_e("Functions "),y("a",{class:"header-anchor",href:"#functions","aria-hidden":"true"},"#")],-1);function ms(t,e,s,o,r,a){const n=ps;return M(),v("div",null,[fs,ke(n)])}const bs=ae(gs,[["render",ms]]);export{ks as __pageData,bs as default};
