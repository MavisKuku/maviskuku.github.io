"use strict";(self.webpackChunkhk_independent_bus_eta=self.webpackChunkhk_independent_bus_eta||[]).push([[743],{7836:(e,t,n)=>{n.r(t),n.d(t,{default:()=>dt});var a=n(5296),o=n(3346),i=n(7912),l=n(7593),s=n(4778),r=n(6396),c=(n(3331),n(7313)),d=n(4511),p=n(2135),u=n(8467),x=n(6060),g=n(5640),m=n(178),h=n(2481),j=n(7829),f=n(9856),b=n(9237),v=n(5919),Z=n(7983),w=n(180),_=n(3560),k=n(7807),C=n(5823),y=n(6417);const S=()=>{const{t:e,i18n:t}=(0,d.$)(),n=(0,u.TH)(),{selectedRoute:a,colorMode:o,vibrateDuration:i}=(0,c.useContext)(x.ZP),l=(0,u.s0)(),s=(e,t)=>{t.preventDefault(),(0,C.tp)(i),setTimeout((()=>l(e)),0)};return(0,c.useMemo)((()=>(0,y.jsxs)(f.Z,{value:n.pathname.replace(/(.*)\/[0-9]*?$/,"$1"),showLabels:!0,sx:W,children:[(0,y.jsx)(b.Z,{label:e("\u9996\u9801"),component:p.rU,to:"/".concat(t.language),onClick:e=>s("/".concat(t.language),e),value:"/".concat(t.language),icon:(0,y.jsx)(v.Z,{})}),(0,y.jsx)(b.Z,{label:e("\u8eca\u7ad9"),component:p.rU,to:"/".concat(t.language,"/stops"),onClick:e=>s("/".concat(t.language,"/stops"),e),value:"/".concat(t.language,"/stops"),icon:(0,y.jsx)(_.Z,{})}),(0,y.jsx)(b.Z,{label:e("\u641c\u5c0b"),component:p.rU,to:"/".concat(t.language,"/board"),onClick:e=>s("/".concat(t.language,"/board"),e),value:"/".concat(t.language,"/board"),icon:(0,y.jsx)(Z.Z,{})}),(0,y.jsx)(b.Z,{label:e("\u898f\u5283"),component:p.rU,to:"/".concat(t.language,"/search"),onClick:e=>s("/".concat(t.language,"/search"),e),value:"/".concat(t.language,"/search"),icon:(0,y.jsx)(w.Z,{})}),(0,y.jsx)(b.Z,{label:e("\u901a\u544a"),component:p.rU,to:"/".concat(t.language,"/notice"),onClick:e=>s("/".concat(t.language,"/notice"),e),value:"/".concat(t.language,"/notice"),icon:(0,y.jsx)(k.Z,{})})]})),[n.pathname,t.language,o,a,i])},W={background:e=>e.palette.background.default,bottom:"0",height:"initial","& .MuiBottomNavigationAction-root":{width:"20%",padding:"6px 0",minWidth:0},"& .MuiBottomNavigationAction-label":{fontSize:"0.875rem"},"& .Mui-selected":{color:e=>"".concat("dark"===e.palette.mode?e.palette.primary.main:e.palette.text.primary," !important")}};var A=n(9289),P=n(1113),I=n(2461),N=n(8119),T=n(7131),z=n(9099),E=n(6534),R=n(9704),L=n(1906),D=n(7474),F=n(282),H=n(647),B=n(2286);const M=()=>{const[e,t]=(0,c.useState)(navigator.onLine?"online":"offline"),n=(0,c.useCallback)((()=>{t("online")}),[]),a=(0,c.useCallback)((()=>{t("offline")}),[]);return(0,c.useEffect)((()=>(window.addEventListener("online",n),window.addEventListener("offline",a),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",a)})),[n,a]),e},$=()=>{const{searchRoute:e,setSearchRoute:t,db:{routeList:n},vibrateDuration:a,geoPermission:o,updateGeolocation:i,changeLanguage:l,_colorMode:s,toggleColorMode:r}=(0,c.useContext)(x.ZP),{t:g,i18n:m}=(0,d.$)();let h=(0,u.TH)();const f=(0,u.s0)(),b=(0,B.IM)(),v=(M(),(0,c.useCallback)((()=>{try{if(!0===window.iOSRNWebView)return;navigator.geolocation.getCurrentPosition((e=>{let{coords:{latitude:t,longitude:n}}=e;i({lat:t,lng:n})}))}catch(e){console.log("error in getting location")}}),[i])),Z=(0,c.useCallback)((n=>{let{key:a,ctrlKey:o,altKey:i,metaKey:l,target:s}=n;o||i||l||"INPUT"!==s.tagName.toUpperCase()&&"TEXTAREA"!==s.tagName.toUpperCase()&&("Escape"===a?t(""):"Backspace"===a?t(e.slice(0,-1)):1===a.length&&(t(e+a),f("/".concat(m.language,"/board"),{replace:!0})))}),[e,m.language,t]);return(0,c.useEffect)((()=>(window.addEventListener("keydown",Z),()=>{window.removeEventListener("keydown",Z)})),[Z]),(0,y.jsxs)(A.Z,{sx:G,children:[(0,y.jsxs)(p.rU,{to:"/".concat(m.language),onClick:e=>{e.preventDefault(),(0,C.tp)(a),f("/".concat(m.language))},rel:"nofollow",children:[(0,y.jsx)(j.Z,{sx:O}),!1,(0,y.jsx)(P.Z,{component:"h1",style:F.Z,children:g("\u5df4\u58eb\u5230\u7ad9\u9810\u5831")})]}),(0,y.jsx)(I.Z,{id:"searchInput",sx:U,type:"text",value:e,placeholder:g("\u8def\u7dda"),onChange:e=>{(e.target.value.toUpperCase()in n||e.target.value in n)&&(document.activeElement.blur(),f("/".concat(m.language,"/route/").concat(e.target.value))),t(e.target.value)},onFocus:()=>{(0,C.tp)(a),"prerendering"!==navigator.userAgent&&(0,C.z4)()&&document.activeElement.blur(),f("/".concat(m.language,"/board"),{replace:!0})}}),(0,y.jsxs)(j.Z,{sx:K,children:[b.slice(0,2).map((e=>(0,y.jsx)(N.Z,{onClick:()=>window.open("https://www.hko.gov.hk/".concat("zh"===m.language?"tc":"en","/detail.htm")),variant:"square",src:B.OS[e],sx:V},e))),"granted"===o&&(0,y.jsx)(T.Z,{"aria-label":"relocate",onClick:()=>v(),size:"small",children:(0,y.jsx)(H.Z,{})}),(0,y.jsx)(z.Z,{sx:q,onClick:()=>{return e="zh"===m.language?"en":"zh",(0,C.tp)(a),f(h.pathname.replace("/"+m.language,"/"+e),{replace:!0}),void l(e);var e},id:"lang-selector",variant:"text",disableElevation:!0,disableRipple:!0,children:"zh"!==m.language?"\u7e41":"En"}),(0,y.jsxs)(T.Z,{onClick:()=>{(0,C.tp)(a),r()},children:["system"===s&&(0,y.jsx)(E.Z,{fontSize:"small"}),"light"===s&&(0,y.jsx)(R.Z,{fontSize:"small"}),"dark"===s&&(0,y.jsx)(L.Z,{fontSize:"small"})]}),(0,y.jsx)(T.Z,{component:p.rU,to:"/".concat(m.language,"/settings"),rel:"nofollow",children:(0,y.jsx)(D.Z,{fontSize:"small"})})]})]})},G={"& a":{textDecoration:"none"},display:"flex",justifyContent:"space-between"},O={backgroundImage:e=>"light"===e.palette.mode?"url(/img/logo128.png)":"url(/img/dark-32.jpg)",backgroundSize:"contain",width:32,height:32},U={maxWidth:"100px","& input":{textAlign:"center"},"& input::before":{borderBottom:e=>"1px ".concat(e.palette.text.primary," solid")},"&.Mui-focused":{"::after":{borderBottomColor:e=>{let{palette:t}=e;return"dark"===t.mode?t.primary.main:t.text.primary}}}},K={display:"flex",alignItems:"center"},q={color:e=>e.palette.text.primary,minWidth:"40px",p:1,borderRadius:5,fontWeight:900,textTransform:"none"},V={background:"white",height:24,width:24,m:1},Y=()=>{const{t:e}=(0,d.$)(),{analytics:t,toggleAnalytics:n}=(0,c.useContext)(x.ZP),[a,o]=(0,c.useState)(!t&&!Boolean(localStorage.getItem("consent"))&&!(0,C.vS)()),i=(0,c.useCallback)((()=>{n(),o((()=>(localStorage.setItem("consent","yes"),!1)))}),[o,n]),l=(0,c.useCallback)((()=>{o((()=>(localStorage.setItem("consent","no"),!1)))}),[o]);return a?(0,y.jsxs)(j.Z,{sx:Q,children:[(0,y.jsx)(P.Z,{variant:"subtitle2",sx:J,children:e("We'd like to set analytics cookies that help us improve hkbus.app by measuring how you use it.")}),(0,y.jsxs)(j.Z,{sx:X,children:[(0,y.jsx)(z.Z,{size:"small",variant:"contained",sx:{color:"#000"},onClick:i,children:e("Accept")}),(0,y.jsx)(z.Z,{size:"small",variant:"outlined",color:"error",onClick:l,children:e("Reject")})]})]}):(0,y.jsx)(y.Fragment,{})},Q={background:"#333",display:"flex",alignSelf:"flex-end"},X={display:"flex",alignItems:"center",gap:1,p:1},J={p:1,color:"#fff"};var ee=n(3947),te=n(6330),ne=n(3795),ae=n(7943);const oe=e=>{let{name:t,list:n,collectionIdx:a=null}=e;const{t:o}=(0,d.$)(),{collectionDrawerRoute:i,db:{routeList:l},toggleCollectionDialog:s,toggleCollectionEta:r}=(0,c.useContext)(x.ZP);return(0,y.jsxs)(j.Z,{sx:ie,children:[(0,y.jsxs)(j.Z,{sx:{...le,cursor:null!==a?"pointer":"auto"},onClick:()=>s(a),children:[(0,y.jsx)(N.Z,{children:t.charAt(0)}),(0,y.jsxs)(j.Z,{sx:se,children:[(0,y.jsx)(P.Z,{variant:"body1",children:t}),(0,y.jsxs)(P.Z,{variant:"caption",children:[o("Number of ETAs: "),n.filter((e=>void 0!==l[e.split("/")[0]])).length]})]})]}),(0,y.jsx)(j.Z,{sx:re,children:(0,y.jsx)(te.Z,{icon:(0,y.jsx)(ne.Z,{}),checkedIcon:(0,y.jsx)(ae.Z,{}),checked:n.includes(i),onClick:()=>r(i,a)})})]})},ie={flex:1,display:"flex",justifyContent:"space-between"},le={display:"flex",alignItems:"center",gap:2,flex:1,"& .MuiAvatar-colorDefault":{color:e=>"dark"===e.palette.mode?e.palette.background.default:"white"}},se={display:"flex",flexDirection:"column"},re={display:"flex"};var ce=n(6555),de=n(2040);const pe=()=>{const{t:e}=(0,d.$)(),{collectionDrawerRoute:t,setCollectionDrawerRoute:n,savedEtas:a,collections:o,addNewCollection:i}=(0,c.useContext)(x.ZP);return(0,y.jsx)(ee.ZP,{anchor:"bottom",open:null!==t,onClose:()=>n(null),PaperProps:{sx:ue},children:(0,y.jsxs)(j.Z,{sx:xe,children:[(0,y.jsx)(ce.Z,{sx:ge}),(0,y.jsx)(j.Z,{sx:me,children:(0,y.jsx)(oe,{name:e("\u5e38\u7528"),list:a})}),(0,y.jsxs)(j.Z,{sx:he,children:[(0,y.jsx)(P.Z,{variant:"h6",children:e("Collections")}),(0,y.jsx)(T.Z,{onClick:i,children:(0,y.jsx)(de.Z,{})})]}),(0,y.jsx)(j.Z,{sx:je,children:o.map(((e,t)=>{let{name:n,list:a}=e;return(0,y.jsx)(oe,{name:n,list:a,collectionIdx:t},"collection-".concat(t))}))})]})})},ue={borderTopLeftRadius:10,borderTopRightRadius:10},xe={maxHeight:"50vh",minHeight:"30vh",display:"flex",flexDirection:"column",px:2,py:1},ge={alignSelf:"center"},me={display:"flex",mb:1},he={display:"flex",justifyContent:"space-between"},je={display:"flex",flexDirection:"column",gap:2,overflow:"scroll"};var fe=n(4469),be=n(6467),ve=n(2392),Ze=n(8485),we=n(5280),_e=n(4117),ke=n(7605),Ce=n(7327),ye=n(3208),Se=n(9765),We=n(5904),Ae=n(8443),Pe=n(8790),Ie=n(658),Ne=n.n(Ie);const Te=()=>{const{t:e}=(0,d.$)(),{collections:t,collectionIdx:n,updateCollectionSchedule:a,addCollectionSchedule:o,removeCollectionSchedule:i}=(0,c.useContext)(x.ZP);return(0,y.jsx)(ye._,{dateAdapter:We.y,children:(0,y.jsxs)(j.Z,{sx:ze,children:[t[n].schedules.map(((t,n)=>(0,y.jsxs)(j.Z,{sx:Ee,children:[(0,y.jsx)(T.Z,{size:"small",onClick:()=>i(n),children:(0,y.jsx)(Ae.Z,{})}),(0,y.jsx)(ve.Z,{variant:"standard",value:t.day,select:!0,size:"small",onChange:e=>{let{target:{value:t}}=e;return a(n,"day",parseInt(t))},children:Array(7).fill(0).map(((t,a)=>(0,y.jsx)(Ce.Z,{value:a,children:e("weekday-".concat(a))},"option-".concat(n,"-").concat(a))))}),(0,y.jsx)(Se.d,{sx:{flex:.45},slotProps:{textField:{size:"small",variant:"standard"}},value:Ne()("1991-12-02".concat(t.start.hour,":").concat(t.start.minute)),onChange:e=>a(n,"start",{hour:e.$H,minute:e.$m})}),"-",(0,y.jsx)(Se.d,{sx:{flex:.45},slotProps:{textField:{size:"small",variant:"standard"}},value:Ne()("1991-12-02T".concat(t.end.hour,":").concat(t.end.minute)),onChange:e=>a(n,"end",{hour:e.$H,minute:e.$m})})]},"schedule-".concat(n)))),(0,y.jsx)(z.Z,{onClick:()=>o(),children:(0,y.jsx)(Pe.Z,{})})]})})},ze={display:"flex",flexDirection:"column",gap:1.5,fontSize:"0.8em !important"},Ee={display:"flex",justifyContent:"space-between",alignItems:"center",gap:.5};var Re=n(1757),Le=n(1660);const De=()=>{const{db:{routeList:e},collections:t,collectionIdx:n,setCollectionEtas:a}=(0,c.useContext)(x.ZP),[o,i]=(0,c.useState)(t[n].list.filter((t=>t.split("/")[0]in e))),{t:l}=(0,d.$)(),s=(0,c.useCallback)((e=>{let{destination:t,source:n}=e;if(!t)return;const l=(0,C.HP)(o,n.index,t.index);i(l),a(Array.from(l))}),[o,i,a]);return(0,y.jsx)(Re.Z5,{onDragEnd:s,children:(0,y.jsx)(Re.bK,{droppableId:"saved-eta-list",children:e=>(0,y.jsxs)(j.Z,{ref:e.innerRef,...e.droppableProps,children:[o.length?o.map(((e,t)=>(0,y.jsx)(Fe,{item:e,index:t},"savedEta-".concat(e)))):(0,y.jsx)(P.Z,{sx:{textAlign:"center",marginTop:5},children:(0,y.jsx)("b",{children:l("\u672a\u6709\u6536\u85cf\u8def\u7dda")})}),e.placeholder]})})})},Fe=e=>{let{item:t,index:n}=e;return(0,y.jsx)(Re._l,{draggableId:t,index:n,children:e=>(0,y.jsx)(j.Z,{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,children:(0,y.jsx)(Le.Z,{routeId:t,mode:"order"})})})},He=()=>{const{collections:e,collectionIdx:t,toggleCollectionDialog:n,updateCollectionName:a,removeCollection:o}=(0,c.useContext)(x.ZP),{t:i}=(0,d.$)(),[l,s]=(0,c.useState)("routes");return null===t?null:(0,y.jsxs)(fe.Z,{open:null!==t,onClose:()=>{n(null)},fullWidth:!0,children:[(0,y.jsxs)(be.Z,{sx:Be,children:[(0,y.jsx)(ve.Z,{id:"collection-input",variant:"standard",value:e[t].name,onChange:e=>{let{target:{value:t}}=e;return a(t)},fullWidth:!0}),(0,y.jsxs)(Ze.Z,{value:l,onChange:(e,t)=>s(t),sx:Oe,children:[(0,y.jsx)(we.Z,{value:"routes",label:i("\u8def\u7dda")}),(0,y.jsx)(we.Z,{value:"time",label:i("\u986f\u793a\u6642\u9593")})]}),(0,y.jsxs)(j.Z,{sx:Me,children:["routes"===l&&(0,y.jsx)(De,{}),"time"===l&&(0,y.jsx)(Te,{})]})]}),(0,y.jsx)(_e.Z,{sx:$e,children:(0,y.jsx)(T.Z,{onClick:()=>o(t),sx:Ge,children:(0,y.jsx)(ke.Z,{})})})]})},Be={display:"flex",flexDirection:"column",gap:1},Me={height:"50vh",pr:1,overflow:"scroll","&::-webkit-scrollbar":{display:"none"}},$e={display:"flex",justifyContent:"flex-start"},Ge={opacity:.3,"&:hover":{opacity:1}},Oe={minHeight:"36px","& .MuiTab-root":{alignItems:"center",justifyContent:"center",paddingTop:0,paddingBottom:0,minHeight:"32px"},"& .MuiTabs-flexContainer":{justifyContent:"center"}},Ue={display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},Ke={display:"flex",flexDirection:"column",flex:1,overflow:"hidden",backgroundColor:e=>e.palette.background.default},qe=()=>(0,y.jsxs)(m.Z,{maxWidth:"xs",disableGutters:!0,sx:Ue,children:[(0,y.jsx)(h.ZP,{}),(0,y.jsx)($,{}),(0,y.jsxs)(j.Z,{sx:Ke,children:[(0,y.jsx)(Y,{}),(0,y.jsx)(u.j3,{})]}),(0,y.jsx)(S,{}),(0,y.jsx)(pe,{}),(0,y.jsx)(He,{})]}),Ve=e=>{let{url:t}=e;return(0,c.useEffect)((()=>{window.location.replace(t)}),[t]),(0,y.jsx)(P.Z,{variant:"body1",children:"Redirecting..."})},Ye=e=>{let{name:t,delta:n,value:a,id:o}=e;window.gtag?window.gtag("event",t,{value:n,metric_id:o,metric_value:a,metric_delta:n}):console.log("gtag not found")},Qe=e=>{e&&e instanceof Function&&n.e(27).then(n.bind(n,4027)).then((t=>{let{getCLS:n,getFID:a,getFCP:o,getLCP:i,getTTFB:l}=t;n(e),a(e),o(e),i(e),l(e)}))},Xe=(0,i.ZP)((()=>Promise.all([n.e(443),n.e(317),n.e(218),n.e(675)]).then(n.bind(n,675)))),Je=(0,i.ZP)((()=>Promise.all([n.e(908),n.e(616)]).then(n.bind(n,8616)))),et=(0,i.ZP)((()=>Promise.all([n.e(317),n.e(21)]).then(n.bind(n,6021)))),tt=(0,i.ZP)((()=>Promise.all([n.e(317),n.e(73),n.e(516)]).then(n.bind(n,5516)))),nt=(0,i.ZP)((()=>Promise.all([n.e(443),n.e(908),n.e(469),n.e(635)]).then(n.bind(n,1635)))),at=(0,i.ZP)((()=>Promise.all([n.e(299),n.e(998)]).then(n.bind(n,1998)))),ot=(0,i.ZP)((()=>Promise.all([n.e(422),n.e(218),n.e(359),n.e(930)]).then(n.bind(n,4930)))),it=(0,i.ZP)((()=>n.e(370).then(n.bind(n,3370)))),lt=(0,i.ZP)((()=>n.e(481).then(n.bind(n,7481)))),st=(0,i.ZP)((()=>n.e(92).then(n.bind(n,1092)))),rt=(0,i.ZP)((()=>n.e(922).then(n.bind(n,9922)))),ct=(0,i.ZP)((()=>Promise.all([n.e(422),n.e(151)]).then(n.bind(n,1151)))),dt=()=>{const{analytics:e,colorMode:t,fontSize:n}=(0,c.useContext)(x.ZP),{i18n:{language:a}}=(0,d.$)();e&&Qe(Ye);const i=(0,c.useMemo)((()=>(0,l.Z)(ut(t,n),[t])),[t,n]);return(0,y.jsx)(s.Z,{injectFirst:!0,children:(0,y.jsx)(r.Z,{theme:i,children:(0,y.jsx)(o.C,{value:pt,children:(0,y.jsx)(p.VK,{children:(0,y.jsx)(g.N,{children:(0,y.jsxs)(u.Z5,{children:[(0,y.jsx)(u.AW,{path:"/",element:(0,y.jsx)(u.Fg,{to:"/".concat(a)})}),(0,y.jsxs)(u.AW,{path:"/:lang",element:(0,y.jsx)(qe,{}),children:[(0,y.jsx)(u.AW,{path:"collections/:collectionName",element:(0,y.jsx)(Xe,{})}),(0,y.jsx)(u.AW,{path:"route/:id",element:(0,y.jsx)(Je,{})}),(0,y.jsx)(u.AW,{path:"route/:id/:panel",element:(0,y.jsx)(Je,{})}),(0,y.jsx)(u.AW,{path:"settings",element:(0,y.jsx)(ot,{})}),(0,y.jsx)(u.AW,{path:"notice",element:(0,y.jsx)(at,{})}),(0,y.jsx)(u.AW,{path:"import/:data?",element:(0,y.jsx)(rt,{})}),(0,y.jsx)(u.AW,{path:"export",element:(0,y.jsx)(ct,{})}),(0,y.jsx)(u.AW,{path:"board",element:(0,y.jsx)(tt,{})}),(0,y.jsx)(u.AW,{path:"stops",element:(0,y.jsx)(et,{})}),(0,y.jsx)(u.AW,{path:"search",element:(0,y.jsx)(nt,{})}),(0,y.jsx)(u.AW,{path:"privacy",element:(0,y.jsx)(it,{})}),(0,y.jsx)(u.AW,{path:"terms",element:(0,y.jsx)(lt,{})}),(0,y.jsx)(u.AW,{path:"support",element:(0,y.jsx)(st,{})}),(0,y.jsx)(u.AW,{path:"patreon",element:(0,y.jsx)(Ve,{url:"https://www.patreon.com/hkbus"})}),(0,y.jsx)(u.AW,{path:"",element:(0,y.jsx)(Xe,{})})]}),(0,y.jsx)(u.AW,{path:"/android",element:(0,y.jsx)(Ve,{url:"https://play.google.com/store/apps/details?id=app.hkbus"})}),(0,y.jsx)(u.AW,{path:"/ios",element:(0,y.jsx)(Ve,{url:"https://apps.apple.com/hk/app/hkbus-app-%E5%B7%B4%E5%A3%AB%E5%88%B0%E7%AB%99%E9%A0%90%E5%A0%B1/id1612184906"})}),(0,y.jsx)(u.AW,{path:"/wear",element:(0,y.jsx)(Ve,{url:"https://play.google.com/store/apps/details?id=com.loohp.hkbuseta"})}),(0,y.jsx)(u.AW,{path:"/watch",element:(0,y.jsx)(Ve,{url:"https://apps.apple.com/us/app/hk-bus-eta-watchos/id6475241017"})}),(0,y.jsx)(u.AW,{path:"/telegram",element:(0,y.jsx)(Ve,{url:"https://t.me/hkbusapp"})}),(0,y.jsx)(u.AW,{path:"/instagram",element:(0,y.jsx)(Ve,{url:"https://instagram.com/hkbus.app"})}),(0,y.jsx)(u.AW,{path:"/source-code",element:(0,y.jsx)(Ve,{url:"https://github.com/hkbus/hk-independent-bus-eta/"})}),(0,y.jsx)(u.AW,{path:"/faq",element:(0,y.jsx)(Ve,{url:"https://github.com/hkbus/hk-independent-bus-eta/wiki/%E5%B8%B8%E8%A6%8B%E5%95%8F%E9%A1%8C-FAQ"})})]})})})})})})},pt=(0,a.Z)({key:"hkbus",speedy:!("prerendering"===navigator.userAgent)}),ut=(e,t)=>({typography:{fontFamily:"'Chiron Hei HK WS'",h6:{fontWeight:700},fontSize:t},avatar:{default:{color:"light"===e?"#000":"white"}},palette:{mode:e,..."light"===e?{background:{default:"#fedb00",contrast:"rgba(255, 255, 255, 0.12)"},primary:{main:"#444",contrastText:"rgba(0, 0, 0, 0.12)"},warning:{main:"#3285e3"},secondary:{main:"#000"}}:{background:{default:"#000",contrast:"rgba(255, 255, 255, 0.12)"},primary:{main:"#fedb00",contrastText:"#000"},warning:{main:"#fedb00"},secondary:{main:"#fedb00"}}},elements:{MuiCssBaseline:{styleOverrides:{body:{fontSize:"0.875rem",lineHeight:1.43,scrollbarColor:"#3f3f3f",scrollbarWidth:"thin"}}}}})},5640:(e,t,n)=>{n.d(t,{N:()=>l,Z:()=>s});var a=n(7313),o=n(6417);const i=a.createContext({}),l=e=>{const[t,n]=(0,a.useState)({start:null,end:null}),[l,s]=(0,a.useState)("ready"),[r,c]=(0,a.useState)([]),[d,p]=(0,a.useState)({resultIdx:0,stopIdx:[0,0]});return(0,o.jsx)(i.Provider,{value:{locations:t,setLocations:n,status:l,setStatus:s,result:r,setResult:c,resultIdx:d,setResultIdx:p},children:e.children})},s=i},2286:(e,t,n)=>{n.d(t,{GE:()=>o,IM:()=>i,OS:()=>s});var a=n(7313);const o=()=>{const[e,t]=(0,a.useState)({});return(0,a.useEffect)((()=>{let e=!0;const n=()=>"prerendering"===navigator.userAgent?(t({}),new Promise((e=>e([])))):fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=en").then((e=>e.json())).then((n=>{e&&t(n)})),a=setInterval((()=>{n()}),3e5);return n(),()=>{e=!1,clearInterval(a)}}),[t]),e},i=()=>{const e=o();return Object.values(e).map((e=>{let{code:t}=e;return t})).filter((e=>l.indexOf(e)>=0)).sort(((e,t)=>l.indexOf(e)<l.indexOf(t)?-1:1))},l=["TC10","TC9","TC8SW","TC8NW","TC8SE","TC8NE","WRAINB","WRAINR","TC3","TC1","WRAINA","WL","WTS","WFNTSA","WHOT","WCOLD","WMSGNL"],s={TC10:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/No._10_Hurricane_Signal.png/30px-No._10_Hurricane_Signal.png",TC9:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/No._09_Increasing_Gale_or_Storm_Signal.png/30px-No._09_Increasing_Gale_or_Storm_Signal.png",TC8SW:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/No._8_Southwest_Gale_or_Storm_Signal.png/30px-No._8_Southwest_Gale_or_Storm_Signal.png",TC8NW:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/No._8_Northwest_Gale_or_Storm_Signal.png/30px-No._8_Northwest_Gale_or_Storm_Signal.png",TC8SE:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/No._8_Southeast_Gale_or_Storm_Signal.png/30px-No._8_Southeast_Gale_or_Storm_Signal.png",TC8NE:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/No._8_Northeast_Gale_or_Storm_Signal.png/30px-No._8_Northeast_Gale_or_Storm_Signal.png",WRAINB:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Black_Rainstorm_Signal.png/25px-Black_Rainstorm_Signal.png",WRAINR:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Red_Rainstorm_Signal.png/25px-Red_Rainstorm_Signal.png",TC3:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/No._03_Strong_Wind_Signal.png/30px-No._03_Strong_Wind_Signal.png",TC1:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/No._01_Standby_Signal.png/30px-No._01_Standby_Signal.png",WRAINA:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Amber_Rainstorm_Signal.png/25px-Amber_Rainstorm_Signal.png",WL:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Landslip.gif/25px-Landslip.gif",WTS:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Thunderstorm_Warning.png/25px-Thunderstorm_Warning.png",WFNTSA:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Ntfl.gif/25px-Ntfl.gif",WHOT:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Very_Hot_Weather_Warning.png/25px-Very_Hot_Weather_Warning.png",WCOLD:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cold_Weather_Warning.png/25px-Cold_Weather_Warning.png",WMSGNL:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/HK_Monsoon_Signal.png/25px-HK_Monsoon_Signal.png"}},1660:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(8628),o=n(6482),i=n(7216),l=n(3213),s=n(1113),r=n(7829),c=n(7131),d=n(9536),p=n(7313),u=n(4511),x=n(8467),g=n(2135),m=n(6060),h=n(5823),j=n(9530),f=n(9119),b=n(736),v=n(7196),Z=n(6417);const w=()=>(0,Z.jsx)(v.Z,{sx:{transform:"scaleY(-1)",verticalAlign:"middle",fontSize:"inherit",mr:1}}),_=()=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v.Z,{sx:{transform:"scaleY(-1)",verticalAlign:"middle",fontSize:"inherit"}}),(0,Z.jsx)(v.Z,{sx:{transform:"scaleY(-1)",verticalAlign:"middle",fontSize:"inherit",mr:1}})]}),k=e=>{let{routeId:t,value:n}=e;const{t:a,i18n:o}=(0,u.$)(),{etaFormat:i,annotateScheduled:c}=(0,p.useContext)(m.ZP),d=(0,f.e)(t,Boolean(n)),x=null!==n&&void 0!==n?n:d,g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e||!e.eta)return"";{var n,l,s,d,p;const u=Math.round((new Date(e.eta).getTime()-(new Date).getTime())/60/1e3);if(!Number.isInteger(u))return e.remark[o.language];const{remark:x}=e,g=(null===x||void 0===x||null===(n=x.zh)||void 0===n?void 0:n.endsWith("\u73ed\u6b21"))||(null===x||void 0===x||null===(l=x.en)||void 0===l?void 0:l.endsWith("Scheduled Bus")),m=null!==(s=(null!==(d=/Platform [\d+] - (\u25ad+)/gm.exec(null!==(p=null===x||void 0===x?void 0:x.en)&&void 0!==p?p:""))&&void 0!==d?d:[])[1])&&void 0!==s?s:"",h=(0,Z.jsxs)(r.Z,{component:"span",sx:{fontSize:"exact"!==i?"0.9em":"1rem"},children:[g&&c&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b.Z,{sx:{fontSize:"0.9em"}}),"\xa0"]}),1===m.length&&(0,Z.jsx)(w,{}),2===m.length&&(0,Z.jsx)(_,{}),e.eta.slice(11,16)]}),j=(0,Z.jsxs)(r.Z,{component:"span",children:["diff"===i&&1===m.length&&(0,Z.jsx)(w,{}),"diff"===i&&2===m.length&&(0,Z.jsx)(_,{}),(0,Z.jsxs)(r.Z,{component:"span",sx:{...W,color:e=>t?e.palette.warning.main:"inherit"},children:[g&&c&&"diff"===i&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b.Z,{color:"inherit",sx:{fontSize:"0.9rem"}}),"\xa0"]}),u<1?" - ":"".concat(u," ")]}),(0,Z.jsx)(r.Z,{component:"span",sx:{fontSize:"0.8em"},children:a("\u5206\u9418")})]});switch(i){case"exact":return h;case"diff":return j;default:return(0,Z.jsxs)(Z.Fragment,{children:[h,"\u2003",j]})}}};return(0,Z.jsx)(l.Z,{primary:(0,Z.jsx)(s.Z,{component:"h5",color:"textPrimary",sx:y,children:x?g(x[0],!0):""}),secondary:(0,Z.jsxs)(s.Z,{variant:"h6",color:"textSecondary",sx:S,children:[x?g(x[1]):"",(0,Z.jsx)("br",{}),x?g(x[2]):""]}),sx:C})},C={textAlign:"right"},y={whiteSpace:"nowrap"},S={fontSize:"0.875rem !important",fontWeight:"400",lineHeight:"1.43",whiteSpace:"nowrap",textAlign:"right"},W={fontSize:"1.1em",fontWeight:"700",color:"#088bce"},A=e=>{let{name:t,location:n,fares:a,faresHoliday:o,seq:i}=e;const{t:l}=(0,u.$)(),{geoPermission:s,geolocation:r,manualGeolocation:c}=(0,p.useContext)(m.ZP),d=[a&&a[i]?"$"+a[i]:"",o&&o[i]?"$"+o[i]:""].filter((e=>e)).join(", "),{distance:x,unit:g,decimalPlace:j}=(0,h.Qi)((0,h.Sp)(n,c||r));return"granted"!==s||0===n.lat?(0,Z.jsx)(Z.Fragment,{children:t+"\u3000"+(d?"("+d+")":"")}):(0,Z.jsx)(Z.Fragment,{children:t+" - "+x.toFixed(j)+l(g)+"\u3000"+(d?"("+d+")":"")})},P={co:[""],stops:{"":[""]},dest:{zh:"",en:""},bound:"",nlbId:0,fares:[],faresHoliday:[]},I={location:{lat:0,lng:0},name:{zh:"\u6700\u8fd1\u8eca\u7ad9",en:"The nearest stop"}},N=e=>{let{routeId:t,etas:n,mode:f="time",onDelete:b}=e;const{t:v,i18n:{language:w}}=(0,u.$)(),{db:{routeList:_,stopList:C},vibrateDuration:y}=(0,p.useContext)(m.ZP),[S]=t.split("-"),[W,N]=t.split("/"),{co:D,stops:F,dest:H,fares:B,faresHoliday:M}=_[W]||P,$=C[T(D,F)[parseInt(N,10)]]||I,G=(0,x.s0)(),O=(0,p.useMemo)((()=>{if(n&&n.length>0){var e,t,a,o;const i=h.iw[parseInt(null!==(e=(null!==(t=/Platform ([\d]+)/gm.exec(null!==(a=null===(o=n[0].remark)||void 0===o?void 0:o.en)&&void 0!==a?a:""))&&void 0!==t?t:[])[1])&&void 0!==e?e:"0",10)];return i?"zh"===w?"".concat(i,"\u6708\u53f0 "):"Platform ".concat(i," "):""}return""}),[n,w]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(i.ZP,{component:"time"===f?g.rU:void 0,to:"/".concat(w,"/route/").concat(W.toLowerCase()),onClick:"time"===f?e=>{e.preventDefault(),(0,h.tp)(y),setTimeout((()=>{G("/".concat(w,"/route/").concat(t.toLowerCase()))}),0)}:e=>{e.preventDefault()},sx:z,children:[(0,Z.jsx)(l.Z,{primary:(0,Z.jsx)(j.Z,{routeNo:S})}),(0,Z.jsx)(l.Z,{primary:(0,Z.jsxs)(s.Z,{component:"h3",variant:"h6",color:"textPrimary",sx:R,children:[(0,Z.jsxs)("span",{children:[O,v("\u5f80")]}),(0,Z.jsx)("b",{children:(0,h.iF)(H[w])})]}),secondary:(0,Z.jsx)(A,{name:(0,h.iF)($.name[w]),location:$.location,fares:B,faresHoliday:M,seq:parseInt(N,10)}),secondaryTypographyProps:{component:"h4",variant:"subtitle2"},sx:E}),"time"===f&&(0,Z.jsx)(k,{routeId:t,value:n}),"order"===f&&(0,Z.jsx)(r.Z,{sx:L,children:(0,Z.jsx)(a.Z,{})}),"delete"===f&&(0,Z.jsx)(r.Z,{sx:L,children:(0,Z.jsx)(c.Z,{onClick:e=>b&&b(e),children:(0,Z.jsx)(o.Z,{})})})]}),(0,Z.jsx)(d.Z,{})]})},T=(e,t)=>{for(let n=0;n<e.length;++n)if(e[n]in t)return t[e[n]]},z={display:"grid",gap:e=>e.spacing(1),gridTemplateColumns:"15% 1fr minmax(18%, max-content)",padding:e=>"".concat(e.spacing(.5)," ").concat(e.spacing(1)),color:"rgba(0,0,0,0.87)"},E={overflow:"hidden"},R={display:"flex",alignItems:"baseline","& > span":{fontSize:"0.85rem",marginRight:e=>e.spacing(.5)}},L={color:e=>e.palette.text.primary,flex:1,display:"flex",alignItems:"center",justifyContent:"center"}},9530:(e,t,n)=>{n.d(t,{Z:()=>i});n(7313);var a=n(1113),o=n(6417);const i=e=>{let{routeNo:t,component:n,align:i}=e,s=t.length;for(let a=1;a<t.length;++a)if("0"<=t[a-1]&&t[a-1]<="9"&&"A"<=t[a]&&t[a]<="Z"){s=a;break}const r=t.slice(0,s),c=t.slice(s);return(0,o.jsxs)(a.Z,{component:n||"h2",align:i,variant:"caption",color:"textPrimary",sx:l,children:[(0,o.jsx)("span",{children:r}),(0,o.jsx)("span",{children:c})]})},l={lineHeight:"normal",display:"inline","& > span:nth-of-type(1)":{fontSize:"1.5rem",fontFamily:'"Oswald", sans-serif'},"& > span:nth-of-type(2)":{fontSize:"1.2rem",fontFamily:'"Oswald", sans-serif'}}},9119:(e,t,n)=>{n.d(t,{e:()=>s});var a=n(7313),o=n(4511),i=n(4395),l=n(6060);const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{db:{routeList:n,stopList:s},isVisible:c,refreshInterval:d}=(0,a.useContext)(l.ZP),[p,u]=e.split("/"),x=n[p]||r,[g,m]=(0,a.useState)(null),{i18n:{language:h}}=(0,o.$)(),j=(0,a.useRef)(!1),f=(0,a.useCallback)((()=>c&&"prerendering"!==navigator.userAgent?(0,i.Gx)({...x,seq:parseInt(u,10),stopList:s,language:h}).then((e=>{j.current&&m(e)})):(m(null),new Promise((e=>e([]))))),[c,h,x,u,s]);return(0,a.useEffect)((()=>{if(t)return;j.current=!0;const e=setInterval((()=>{f()}),d);return f(),()=>{j.current=!1,clearInterval(e)}}),[e,f,d,t]),g},r={co:[""],stops:{"":[""]},dest:{zh:"",en:""},bound:"",nlbId:0,gtfsId:"",fares:[],faresHoliday:[]}}}]);