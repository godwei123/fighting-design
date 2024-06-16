import{s as l,k as v,F as P,o as U,p as B,a as c,m as M,c as I,d as A,q as j,e as h,j as V,l as Y}from"./index.f637aaa7.js";import{h as b,Q as G,a1 as S,a9 as N,$ as D,_ as K,o as m,c as T,v as Z,d as q,f as x,x as y,n as z,b as i,z as k,r as F,D as L}from"./framework.a8ebc9a3.js";import{u as Q}from"./index.f96b7fa5.js";const W=(e,o,a)=>{const d=b(()=>{if(a.ripplesColor)return a.ripplesColor;const n={default:"#f0f0f0",primary:"#2d5af1",success:"#52b35e",danger:"#ff0200",warning:"#fcc202",info:"#1d1d1f"};if(a.component==="f-button"){const{simple:s,text:t}=a;return s||t?n[a.type]:""}return n[a.type]}),f=n=>{setTimeout(()=>{n.remove()},a.duration||400)},u=(n,s)=>{const t=document.createElement("span");if(t.className=a.className,t.style.background=d.value,t.style.left=`${n}px`,a.component==="f-button"){const r=document.createElement("div");return r.className="f-button__ripples-box",r.appendChild(t),t.style.top=`${s}px`,r}return t};return{runRipples:()=>{const{layerX:n,layerY:s}=e,t=u(n,s);o.appendChild(t),f(t)}}},he={size:l(void 0,e=>v.includes(e)),type:l(void 0,e=>P.includes(e)),lang:l("zh-CN",e=>["en-US","zh-CN"].includes(e))},X=Symbol("fighting-global-props-key"),J="en-US",ee={lang:J,"en-US":{empty:{content:"No data"},calendar:{weekList:["Su","Mo","Tu","We","Th","Fr","Sa"]},stickyCard:{openText:"close",closeText:"open"},pageHeader:{backText:"back"},input:{search:"Search"}}},te="zh-CN",ne={lang:te,"zh-CN":{empty:{content:"暂无数据"},calendar:{weekList:["日","一","二","三","四","五","六"]},stickyCard:{openText:"关闭",closeText:"开启"},pageHeader:{backText:"返回"},input:{search:"搜索"}}},oe={"en-US":ee["en-US"],"zh-CN":ne["zh-CN"]},$=e=>{const o=G(X,null),a=(n="default")=>b(()=>!e||e.type&&!P.includes(e.type)?n:e.type||o&&o.type||n),d=(n="middle",s)=>b(()=>!e||e.size&&!v.includes(e.size)?n:e.size||s||o&&o.size||n),f=n=>b(()=>{const s=o&&o.lang||"zh-CN";return oe[s][n]}),u={type:a,size:d};return{getType:a,getSize:d,getLang:f,getProp:(n,s)=>{const t={};return U(n)&&n.forEach((r,g)=>{if(u[r]){const _=s&&s[g];t[r]=u[r](_)}}),e?S({...N(e),...t}):S({...t})}}},ye={size:l(void 0,e=>v.includes(e)),direction:l("horizontal",e=>["horizontal","vertical"].includes(e))},se=Symbol("button-group-props-key"),ae=e=>{const o=D(),{getType:a,getSize:d}=$(e),f=G(se,null),u=b(()=>!(o.default&&o.default()&&o.default()[0].children)),p=b(()=>["f-button",`f-button__${d("middle",f).value}`,{[`f-button__${a().value}`]:!e.color&&a().value,"f-button__icon":u,"f-button__round":e.round,"f-button__simple":e.simple&&!e.color,"f-button__block":e.block,"f-button__bold":e.bold,"f-button__text":e.text&&!e.color,"f-button__circle":e.circle,"f-button__spread":e.spread}]),n=b(()=>{const{color:s,fontColor:t,shadow:r,fontSize:g}=e;if(e.color){const{getLight:_,getDark:C}=Q(e.color);return{"--button-background":s||null,"--button-hover":s?_(.4):null,"--button-active":s?C(.2):null,"--button-color":t,"--button-shadow":r,"--button-font-size":B(g)}}return{"--button-color":t,"--button-shadow":r,"--button-font-size":B(g)}});return{classList:p,style:n}},le={},re={width:"32",height:"32",viewBox:"0 0 24 24"},ce=Z("path",{fill:"currentColor",d:"M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm10-5a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415zM8.464 8.464a1 1 0 0 1-1.414 0l-2.12-2.12a1 1 0 0 1 1.414-1.415l2.12 2.121a1 1 0 0 1 0 1.414zM4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0zM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 0 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0z"},null,-1),ue=[ce];function ie(e,o){return m(),T("svg",re,ue)}const R=K(le,[["render",ie]]),de={bold:c(),circle:c(),round:c(),spread:c(),fontSize:M(),fontColor:l(),size:l(void 0,e=>v.includes(e)),block:c(),href:l(),target:l("_self",e=>j.includes(e)),loading:c(),disabled:c(),loadingIcon:I(),type:l(void 0,e=>P.includes(e)),autofocus:c(),name:l("f-button"),shadow:l(),text:c(),nativeType:l("button",e=>["button","submit","reset"].includes(e)),simple:c(),beforeIcon:I(),afterIcon:I(),ripples:c(),ripplesColor:l(),color:l(),onClick:A()},fe=["href","target"],be=["disabled","autofocus","name","type"],pe=q({name:"FButton",__name:"button",props:de,setup(e){const o=e,{getType:a}=$(o),{run:d}=V(),{classList:f,style:u}=ae(o),p=x(),n=t=>{const{disabled:r,loading:g,ripples:_}=N(o);if(r.value||g.value){t.preventDefault();return}if(_.value){const{ripplesColor:C,simple:E,text:w}=N(o),H=S({duration:700,component:"f-button",className:"f-button__ripples",ripplesColor:C.value,simple:E.value,text:w.value,type:a()}),{runRipples:O}=W(t,p.value,H);O()}d(o.onClick,t)},s=b(()=>o.loading?o.loadingIcon||R:o.beforeIcon);return(t,r)=>t.href?(m(),T("a",{key:0,ref_key:"FButtonRef",ref:p,role:"link",tabindex:"0",class:z(i(f)),href:t.href,target:t.target,style:L(i(u)),onClick:n},[t.loading||t.beforeIcon?(m(),y(i(h),{key:0,class:z({"f-button__loading-animation":t.loading}),icon:s.value,size:16},null,8,["class","icon"])):k("",!0),F(t.$slots,"default"),t.afterIcon?(m(),y(i(h),{key:1,icon:t.afterIcon,size:16},null,8,["icon"])):k("",!0)],14,fe)):(m(),T("button",{key:1,ref_key:"FButtonRef",ref:p,role:"button",tabindex:"0",class:z(i(f)),disabled:t.disabled||t.loading,autofocus:t.autofocus,name:t.name,type:t.nativeType,style:L(i(u)),onClick:n},[t.loading||t.beforeIcon?(m(),y(i(h),{key:0,class:z(["f-button_before-icon",{"f-button__loading-animation":t.loading}]),icon:t.loading?t.loadingIcon||i(R):t.beforeIcon,size:16},null,8,["class","icon"])):k("",!0),F(t.$slots,"default"),t.afterIcon?(m(),y(i(h),{key:1,class:"f-button_after-icon",icon:t.afterIcon,size:16},null,8,["icon"])):k("",!0)],14,be))}}),ze=Y(pe);export{se as B,ze as F,ye as P,R as a,X as b,W as c,he as d,$ as u};
