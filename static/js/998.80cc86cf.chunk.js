"use strict";(self.webpackChunkhk_independent_bus_eta=self.webpackChunkhk_independent_bus_eta||[]).push([[998],{1998:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(7313),r=n(501),l=n(1113),s=n(891),o=n(4511),i=n(8703),c=n(5242),p=n(6417);const d=()=>{const{i18n:{language:e}}=(0,o.$)(),[t,n]=(0,a.useState)([]);return(0,a.useEffect)((()=>{fetch("https://resource.data.one.gov.hk/td/en/specialtrafficnews.xml").then((e=>e.text())).then((e=>(new window.DOMParser).parseFromString(e,"text/xml"))).then((e=>n(m(e))))}),[]),(0,p.jsx)(r.Z,{sx:x,square:!0,elevation:0,children:t.map((t=>{let{msgID:n,ChinText:a,EngText:o,ReferenceDate:d}=t;return(0,p.jsxs)(r.Z,{elevation:5,sx:u,children:[(0,p.jsx)(l.Z,{variant:"body2",sx:{alignSelf:"flex-end"},children:d}),(0,p.jsx)(i.D,{remarkPlugins:[c.Z],components:{p:e=>{let{node:t,...n}=e;return(0,p.jsx)(l.Z,{variant:"body1",...n})},a:e=>{let{node:t,...n}=e;return(0,p.jsx)(s.Z,{sx:f,...n})}},children:"zh"===e?a:o})]},n)}))})},x={display:"flex",flexDirection:"column",overflow:"auto",width:"100%",flex:1,textAlign:"left",p:1,gap:2,bgcolor:"unset"},u={p:2,display:"flex",flexDirection:"column",gap:2},f={color:e=>"dark"===e.palette.mode?e.palette.primary.main:e.palette.primary.dark},m=e=>Array.from(e.querySelectorAll("message")).map((e=>Array.from(e.querySelectorAll("*")))).map((e=>e.reduce(((e,t)=>("ReferenceDate"===t.tagName?e[t.tagName]=t.textContent.replace("\u4e0b\u5348","PM").replace("\u4e0a\u5348","AM"):e[t.tagName]=t.textContent.replace(/\n/g,"\n\n"),e)),{})))}}]);