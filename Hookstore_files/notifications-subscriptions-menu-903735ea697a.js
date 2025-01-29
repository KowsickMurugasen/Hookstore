"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["notifications-subscriptions-menu"],{37652:(e,t,s)=>{s.d(t,{I:()=>n});let n=(0,s(96540).createContext)(null)},36617:(e,t,s)=>{s.d(t,{l:()=>n});let n=()=>void 0},2812:(e,t,s)=>{let n;var a,i=s(94496),l=s(74848),r=s(96540),o=s(89323),c=s(10312),d=s(38621),u=s(46335);let h=(n="/notifications/subscribe",async e=>{try{let t=await (0,u.DI)(n,{method:"POST",body:e});if(t.ok)return t;return Error("Failed to update")}catch(e){return e}});var m=s(8338),p=s(52464),b=function(e){return e.NONE="none",e.WATCHING="watching",e.IGNORING="ignoring",e.CUSTOM="custom",e}({});let y={none:"Participating and @mentions",watching:"All Activity",ignoring:"Ignore",custom:"Custom"},x={...y,none:"Participating"},g={none:"Watch",watching:"Unwatch",ignoring:"Stop ignoring",custom:"Unwatch"},f=[{name:y.none,description:"Only receive notifications from this repository when participating or @mentioned.",subscriptionType:"none"},{name:y.watching,description:"Notified of all notifications on this repository.",subscriptionType:"watching"},{name:y.ignoring,description:"Never be notified.",subscriptionType:"ignoring"},{name:y.custom,description:"Select events you want to be notified of in addition to participating and @mentions.",trailingIcon:(0,r.createElement)(d.ArrowRightIcon),subscriptionType:"custom"}],C=e=>e in g?g[e]:"",v=(e,t)=>{let s=C(e),n=x[e];return"ignoring"===e?`${s} in ${t}`:`${s}: ${n} in ${t}`};function j(e){return(0,l.jsx)(m.l,{selectionVariant:"single",children:f.map((t,s)=>(0,l.jsxs)(r.Fragment,{children:[(0,l.jsxs)(m.l.Item,{selected:t.subscriptionType===e.selected,onSelect:()=>e.onSelect(t.subscriptionType),children:[(0,l.jsx)(p.A,{sx:{fontWeight:"bold"},children:t.name}),(0,l.jsx)(m.l.Description,{variant:"block",children:t.description}),t.trailingIcon?(0,l.jsx)(m.l.TrailingVisual,{children:t.trailingIcon}):null]}),s!==f.length-1?(0,l.jsx)(m.l.Divider,{}):""]},s))})}try{j.displayName||(j.displayName="SubscriptionList")}catch{}var T=s(2391),N=s(65607),_=s(19920),S=s(55847),w=s(94977),k=s(30595);let I={footerContainer:"FooterActions-module__footerContainer--Z9ixI",buttonsContainer:"FooterActions-module__buttonsContainer--lkkwg"};function A(e){let[t,s]=(0,r.useState)(!1),n=(0,r.useCallback)(()=>(e.nextFocusRef?.current?.focus(),!0),[e.nextFocusRef]),a=(0,r.useCallback)(()=>{s(!0)},[]),i=(0,r.useCallback)(()=>{e.onApply(),setTimeout(()=>{e?.checkStatus&&e.checkStatus(a)},600)},[e,a]);return(0,l.jsxs)("div",{className:I.footerContainer,children:[e.showError?(0,l.jsx)(p.A,{sx:{py:3,pl:3,color:"var(--fgColor-muted, var(--color-fg-muted))"},children:"Error. Please try again."}):null,(0,l.jsxs)("div",{className:I.buttonsContainer,style:e.overrideButtonStyles??{padding:"var(--base-size-16)"},children:[!e.showError&&t?(0,l.jsx)(k.A,{size:"small",sx:{mr:2}}):null,(0,l.jsx)(S.Q,{size:"small",onClick:()=>e.onCancel(),onBlur:t=>{e.disabled&&n(t)},children:"Cancel"}),(0,l.jsx)(S.Q,{disabled:e.disabled,variant:"primary",size:"small",onClick:()=>i(),onBlur:n,sx:{ml:2},children:"Apply"})]})]})}try{A.displayName||(A.displayName="FooterActions")}catch{}function L(e){let[t,s]=(0,r.useState)(!1),[n,a]=(0,r.useState)(""),i=e.items.filter(e=>e?.text?.toLowerCase().startsWith(n.toLowerCase())),o=(0,r.useCallback)(()=>{e.applyLabels(),s(!1)},[e]),c=(0,r.useCallback)(()=>{e.resetLabels(),s(!1)},[e]),d=r.memo(R);return(0,l.jsx)(_.X,{title:"Select labels",renderAnchor:t=>0===e.items.length?(0,l.jsx)(w.A,{text:"Add labels to this repository to filter on them.",direction:"s",children:(0,l.jsx)(d,{anchorProps:t,itemsLength:e.items.length,labelsText:e.labelsText})}):(0,l.jsx)(d,{anchorProps:t,itemsLength:e.items.length,labelsText:e.labelsText}),placeholderText:"Filter labels",open:t,onOpenChange:s,items:i,selected:e.selectedLabels,onSelectedChange:e.onChangeLabels,onFilterChange:a,showItemDividers:!0,overlayProps:{width:"small",height:"medium",maxHeight:"medium"},footer:(0,l.jsx)("div",{style:{width:"100%"},children:(0,l.jsx)(A,{onCancel:c,onApply:o,overrideButtonStyles:{padding:"var(--base-size-8)"}})})})}let R=({anchorProps:e,itemsLength:t,labelsText:s})=>(0,l.jsx)(S.Q,{leadingVisual:d.TagIcon,trailingAction:d.TriangleDownIcon,...e,"aria-label":"Filter labels","aria-describedby":"select-labels","aria-haspopup":"dialog",size:"small",disabled:0===t,children:0===t?"No labels available":(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"color-fg-muted",children:"Labels: "}),(0,l.jsx)("span",{id:"select-labels",children:s})]})});try{L.displayName||(L.displayName="FilterLabels")}catch{}try{(a=ButtonFilter).displayName||(a.displayName="ButtonFilter")}catch{}let F=e=>{let t=P(e,2);if(e.length>=2){if(2===e.length)return O(e);let s=P(e,3);if(s.length>30)return`${t.slice(0,30)}... +${e.length-2} more`;{let t=e.length>3?` +${e.length-3} more`:"";return`${s}${t}`}}if(1!==e.length)return"All";{let t=e[0]?.text||"";return t.length>30?`${t.slice(0,30)}...`:t}},O=e=>{let t=e[0]?.text||"",s=P(e,2);return s.length>30?t.length>25?`${t.slice(0,25)}... +1 more`:`${s.slice(0,30)}...`:s},P=(e,t)=>e.slice(0,t).map(e=>e.text).join(", "),E=e=>{switch(e){case"PullRequest":return"Pull requests";case"SecurityAlert":return"Security alerts";default:return`${e}s`}},M={filterContainer:"ThreadList-module__filterContainer--eNebD",threadContent:"ThreadList-module__threadContent--Ry8II",threadRow:"ThreadList-module__threadRow--lx6FW"};function $(e){let[t,s]=(0,r.useState)(e.appliedThreads),[n,a]=(0,r.useState)(e.appliedLabels),[i,o]=(0,r.useState)(e.appliedLabels),[c,d]=(0,r.useState)(()=>F(e.appliedLabels));(0,r.useEffect)(()=>{e.appliedLabels.length>0&&!t.includes("Issue")&&s([...t,"Issue"])},[]);let u=(0,r.useCallback)(e=>{t&&t.includes(e)?s(t.filter(t=>t!==e)):s([...t,e])},[t]),h=(0,r.useCallback)(()=>{e.applyThreads(t)},[e,t]),m=(0,r.useCallback)(e=>{o(e),d(F(e))},[]),b=(0,r.useCallback)(()=>{a(i)},[i]),y=(0,r.useCallback)(()=>{o(n),d(F(n))},[n]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:M.threadContent,children:e.subscribableThreadTypes.map((s,n)=>(0,l.jsxs)("div",{className:M.threadRow,style:n===e.subscribableThreadTypes.length-1?{}:{borderBottom:"1px solid var(--borderColor-default, var(--color-border-default))"},children:[(0,l.jsxs)(T.A,{children:[(0,l.jsx)(N.A,{checked:t.includes(s.name),onChange:()=>u(s.name)}),(0,l.jsx)(T.A.Label,{children:E(s.name)})]}),s.enabled?null:(0,l.jsxs)(p.A,{as:"p",sx:{fontSize:"12px",m:0,color:"var(--fgColor-muted)",ml:"var(--base-size-24)"},children:[E(s.name)," are not enabled for this repository"]}),(0,l.jsx)("div",{"aria-live":"polite",children:"Issue"===s.name&&e.showLabelSubscriptions&&t.includes("Issue")?(0,l.jsx)("div",{className:M.filterContainer,children:(0,l.jsx)(L,{filterAction:h,items:e.repoLabels,labelsText:c,onChangeLabels:m,selectedLabels:i,applyLabels:b,resetLabels:y})}):null})]},n))}),(0,l.jsx)(A,{onCancel:e.cancelMenuCallback,onApply:()=>e.saveThreads(t,i),showError:e.showError,disabled:0===t.length||e.isSavingThreads})]})}try{$.displayName||($.displayName="ThreadList")}catch{}let B={watchCounter:"NotificationsSubscriptionsMenu-module__watchCounter--nAbhU",watchButton:"NotificationsSubscriptionsMenu-module__watchButton--ifxlS"};function G({repositoryId:e,repositoryName:t,watchersCount:s,subscriptionType:n,subscribableThreadTypes:a,repositoryLabels:i,showLabelSubscriptions:u}){let m=(0,r.useMemo)(()=>i.map(e=>({id:e.id,text:e.name,selected:e.subscribed})),[i]),p=m.filter(e=>e.selected),y=(0,r.useMemo)(()=>a.map(e=>e.subscribed||"Issue"===e.name&&u&&p.length>0?e.name:null).filter(e=>null!==e),[a,u,p]),[x,g]=(0,r.useState)(!1),[f,T]=(0,r.useState)(!1),[N,_]=(0,r.useState)(y.length>0?b.CUSTOM:n),[S,w]=(0,r.useState)(N),[k,I]=(0,r.useState)(y),[A,L]=(0,r.useState)(p),[R,F]=(0,r.useState)(!1),O=(0,r.useRef)(null),P=(0,r.useCallback)(()=>{T(!1),_(S)},[S]),E=(0,r.useCallback)(async(t,s)=>{F(!0),I(t),L(s),w(b.CUSTOM);let n=new FormData;n.set("do","custom"),n.set("repository_id",e),t.map(e=>{n.append("thread_types[]",e)}),s.map(e=>{e.id&&n.append("labels[]",e.id.toString())}),(await h(n)).ok?(T(!1),F(!1)):g(!0)},[e]),M=(0,r.useCallback)(async t=>{let s=new FormData;t===b.IGNORING?s.set("do","ignore"):t===b.WATCHING?s.set("do","subscribed"):(t===b.NONE||t===b.CUSTOM&&0===k.length)&&s.set("do","included"),s.append("thread_types[]",""),s.set("repository_id",e),await h(s)},[e,k]),G=(0,r.useCallback)(e=>{e===b.CUSTOM?(T(!0),_(b.CUSTOM)):(_(e),w(e),M(e),I([]))},[_]),W=(0,r.useCallback)(e=>{I(e)},[I]),D=(0,r.useMemo)(()=>v(N,t),[N,t]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"d-md-none",children:(0,l.jsxs)(o.W,{children:[(0,l.jsx)(o.W.Button,{"data-testid":"notifications-subscriptions-menu-button-desktop",leadingVisual:N===b.IGNORING?d.BellSlashIcon:d.EyeIcon,trailingAction:null,className:B.watchButton,"aria-label":D,children:(0,l.jsx)(l.Fragment,{})}),(0,l.jsx)(o.W.Overlay,{width:"medium",children:(0,l.jsx)(j,{selected:N,onSelect:G})})]})}),(0,l.jsx)("div",{className:"d-none d-md-block",children:(0,l.jsxs)(o.W,{children:[(0,l.jsxs)(o.W.Button,{"data-testid":"notifications-subscriptions-menu-button-mobile",size:"small",leadingVisual:N===b.IGNORING?d.BellSlashIcon:d.EyeIcon,sx:{'&& [data-component="leadingVisual"]':{color:"var(--fgColor-muted, var(--color-fg-muted))"}},"aria-label":D,children:[C(N),(0,l.jsx)("span",{className:`ml-2 Counter rounded-3 ${B.watchCounter}`,children:s})]}),(0,l.jsx)(o.W.Overlay,{width:"medium",children:(0,l.jsx)(j,{selected:N,onSelect:G})})]})}),(0,l.jsx)(c.A,{returnFocusRef:O,isOpen:f,onDismiss:()=>P(),"aria-labelledby":"header",children:(0,l.jsxs)("div",{"data-testid":"inner",children:[(0,l.jsxs)(c.A.Header,{id:"header",children:["Subscribe to events for ",t]}),(0,l.jsx)($,{subscribableThreadTypes:a,showLabelSubscriptions:u,cancelMenuCallback:P,appliedThreads:k,repoLabels:m,subscribedThreads:y,applyThreads:W,appliedLabels:A,saveThreads:E,showError:x,isSavingThreads:R})]})})]})}try{G.displayName||(G.displayName="NotificationsSubscriptionsMenu")}catch{}(0,i.k)("notifications-subscriptions-menu",{Component:G})},97667:(e,t,s)=>{s.d(t,{Y:()=>n});function n(){let e={};return e.promise=new Promise((t,s)=>{e.resolve=t,e.reject=s}),e}},1180:(e,t,s)=>{s.d(t,{A:()=>r});let{getItem:n,setItem:a,removeItem:i}=(0,s(10943).A)("localStorage"),l="REACT_PROFILING_ENABLED",r={enable:()=>a(l,"true"),disable:()=>i(l),isEnabled:()=>!!n(l)}},68943:(e,t,s)=>{s.d(t,{m:()=>i});var n=s(96540),a=s(3167);function i(e,t){a.KJ&&(0,n.useLayoutEffect)(e,t)}},20379:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(68943),a=s(96540);function i(){let e=(0,a.useRef)(!1),t=(0,a.useCallback)(()=>e.current,[]);return(0,n.m)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},28867:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(20379),a=s(96540);let i=function(e){let t=(0,n.A)(),[s,i]=(0,a.useState)(e);return[s,(0,a.useCallback)(e=>{t()&&i(e)},[t])]}},46335:(e,t,s)=>{function n(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let s={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:s})}function a(e,t){let s={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},a=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:a,headers:s})}function i(e,t={}){let s={...t.headers,"GitHub-Is-React":"true"};return n(e,{...t,headers:s})}function l(e,t){let s={...t?.headers??{},"GitHub-Is-React":"true"};return a(e,{...t,headers:s})}s.d(t,{DI:()=>n,QJ:()=>i,Sr:()=>l,lS:()=>a})},47401:(e,t,s)=>{s.d(t,{y:()=>l});var n=s(74848),a=s(96540),i=s(37652);function l({children:e,appName:t,category:s,metadata:l}){let r=(0,a.useMemo)(()=>({appName:t,category:s,metadata:l}),[t,s,l]);return(0,n.jsx)(i.I.Provider,{value:r,children:e})}try{l.displayName||(l.displayName="AnalyticsProvider")}catch{}},83706:(e,t,s)=>{s.d(t,{BP:()=>d,D3:()=>c,O8:()=>r});var n=s(74848),a=s(96540),i=s(3167),l=s(68943),r=function(e){return e.ServerRender="ServerRender",e.ClientHydrate="ClientHydrate",e.ClientRender="ClientRender",e}({});let o=(0,a.createContext)("ClientRender");function c({wasServerRendered:e,children:t}){let[s,r]=(0,a.useState)(()=>i.X3?"ServerRender":e?"ClientHydrate":"ClientRender");return(0,l.m)(()=>{"ClientRender"!==s&&r("ClientRender")},[s]),(0,n.jsx)(o.Provider,{value:s,children:t})}function d(){return(0,a.useContext)(o)}try{o.displayName||(o.displayName="RenderPhaseContext")}catch{}try{c.displayName||(c.displayName="RenderPhaseProvider")}catch{}},72399:(e,t,s)=>{s.d(t,{Qn:()=>o,T8:()=>d,Y6:()=>h,k6:()=>u});var n=s(74848),a=s(65556),i=s(96540),l=s(36617),r=s(28867);let o=5e3,c=(0,i.createContext)({addToast:l.l,addPersistedToast:l.l,clearPersistedToast:l.l}),d=(0,i.createContext)({toasts:[],persistedToast:null});function u({children:e}){let[t,s]=(0,r.A)([]),[l,u]=(0,i.useState)(null),{safeSetTimeout:h}=(0,a.A)(),m=(0,i.useCallback)(function(e){s([...t,e]),h(()=>s(t.slice(1)),o)},[t,h,s]),p=(0,i.useCallback)(function(e){u(e)},[u]),b=(0,i.useCallback)(function(){u(null)},[u]),y=(0,i.useMemo)(()=>({addToast:m,addPersistedToast:p,clearPersistedToast:b}),[p,m,b]),x=(0,i.useMemo)(()=>({toasts:t,persistedToast:l}),[t,l]);return(0,n.jsx)(c.Provider,{value:y,children:(0,n.jsx)(d.Provider,{value:x,children:e})})}function h(){return(0,i.useContext)(c)}try{c.displayName||(c.displayName="ToastContext")}catch{}try{d.displayName||(d.displayName="InternalToastsContext")}catch{}try{u.displayName||(u.displayName="ToastContextProvider")}catch{}},83816:(e,t,s)=>{s.d(t,{V:()=>h});var n=s(74848),a=s(96540),i=s(72399),l=s(38621),r=s(65556),o=s(16255);let c={info:"",success:"Toast--success",error:"Toast--error"},d={info:(0,n.jsx)(l.InfoIcon,{}),success:(0,n.jsx)(l.CheckIcon,{}),error:(0,n.jsx)(l.StopIcon,{})},u=({message:e,timeToLive:t,icon:s,type:i="info",role:l="log"})=>{let[u,h]=a.useState(!0),{safeSetTimeout:m}=(0,r.A)();return(0,a.useEffect)(()=>{t&&m(()=>h(!1),t-300)},[m,t]),(0,n.jsx)(o.Z,{children:(0,n.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,n.jsxs)("div",{className:`Toast ${c[i]} ${u?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${i}`,role:l,children:[(0,n.jsx)("span",{className:"Toast-icon",children:s||d[i]}),(0,n.jsx)("span",{className:"Toast-content",children:e})]})})})};try{u.displayName||(u.displayName="Toast")}catch{}function h(){let{toasts:e,persistedToast:t}=(0,a.useContext)(i.T8);return(0,n.jsxs)(n.Fragment,{children:[e.map((e,t)=>(0,n.jsx)(u,{message:e.message,icon:e.icon,timeToLive:i.Qn,type:e.type,role:e.role},t)),t&&(0,n.jsx)(u,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{h.displayName||(h.displayName="Toasts")}catch{}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react","react-core","react-lib","octicons-react","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_tanstack_query-core_build_modern_queryClient_js","vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-37e3d5","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd","vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","ui_packages_failbot_failbot_ts"],()=>t(2812)),e.O()}]);
//# sourceMappingURL=notifications-subscriptions-menu-1b5e25e688b1.js.map