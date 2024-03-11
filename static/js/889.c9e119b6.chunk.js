"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[889],{6889:function(e,t,n){n.r(t),n.d(t,{default:function(){return se}});var o=n(4420),r=n(4270),a=n(7234),i=n(6351),s=n(2791),c=n(697),d=n(4294),l=n(890),u=n(9763),p=n(184);var m=function(){var e=(0,o.I0)(),t=(0,o.v9)(i.Af);return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(c.Z,{component:"form",id:"contactsform",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[(0,p.jsx)("br",{}),(0,p.jsx)(l.Z,{variant:"h6",children:"Please input new contact data"}),(0,p.jsx)(u.Z,{style:{width:"200px",margin:"5px"},type:"text",label:"Name",variant:"outlined"}),(0,p.jsx)(u.Z,{style:{width:"200px",margin:"5px"},type:"text",label:"Phone number",variant:"outlined"}),(0,p.jsx)(d.Z,{variant:"contained",color:"primary",size:"medium",onClick:function(n){n.preventDefault();var o=document.getElementsByTagName("input"),r=o[0].value,i=o[1].value;if(t.filter((function(e){return e.name===r})).length>0)alert(r+" is already in contacts.");else{var s={name:r,number:i};e((0,a.uK)(s)),o[0].value="",o[1].value=""}},children:"Add contact"})]})})},v=n(493),f=n(4942),g=n(3366),b=n(7462),y=n(3733),h=n(627),Z=n(838),x=n(4131),C=n(6934),I=n(1046),j=n(3701),S=n(5925),w=n(162),P=n(2071),R=n(6199),k=n(9703),F=n(4657);function M(e){return(0,F.ZP)("MuiListItem",e)}var N=(0,k.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var A=(0,k.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function T(e){return(0,F.ZP)("MuiListItemSecondaryAction",e)}(0,k.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var z=["className"],L=(0,C.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,b.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),O=s.forwardRef((function(e,t){var n=(0,I.Z)({props:e,name:"MuiListItemSecondaryAction"}),o=n.className,r=(0,g.Z)(n,z),a=s.useContext(R.Z),i=(0,b.Z)({},n,{disableGutters:a.disableGutters}),c=function(e){var t=e.disableGutters,n=e.classes,o={root:["root",t&&"disableGutters"]};return(0,Z.Z)(o,T,n)}(i);return(0,p.jsx)(L,(0,b.Z)({className:(0,y.Z)(c.root,o),ownerState:i,ref:t},r))}));O.muiName="ListItemSecondaryAction";var G=O,V=["className"],_=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],B=(0,C.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,b.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&(0,b.Z)({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&(0,f.Z)({},"& > .".concat(A.root),{paddingRight:48}),(t={},(0,f.Z)(t,"&.".concat(N.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,f.Z)(t,"&.".concat(N.selected),(0,f.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,x.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(N.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,x.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,f.Z)(t,"&.".concat(N.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===o.alignItems&&{alignItems:"flex-start"},o.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},o.button&&(0,f.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(N.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,x.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,x.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),o.hasSecondaryAction&&{paddingRight:48})})),q=(0,C.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),E=s.forwardRef((function(e,t){var n=(0,I.Z)({props:e,name:"MuiListItem"}),o=n.alignItems,r=void 0===o?"center":o,a=n.autoFocus,i=void 0!==a&&a,c=n.button,d=void 0!==c&&c,l=n.children,u=n.className,m=n.component,v=n.components,f=void 0===v?{}:v,x=n.componentsProps,C=void 0===x?{}:x,k=n.ContainerComponent,F=void 0===k?"li":k,A=n.ContainerProps,T=(A=void 0===A?{}:A).className,z=n.dense,L=void 0!==z&&z,O=n.disabled,E=void 0!==O&&O,D=n.disableGutters,W=void 0!==D&&D,H=n.disablePadding,K=void 0!==H&&H,X=n.divider,Y=void 0!==X&&X,Q=n.focusVisibleClassName,U=n.secondaryAction,J=n.selected,$=void 0!==J&&J,ee=n.slotProps,te=void 0===ee?{}:ee,ne=n.slots,oe=void 0===ne?{}:ne,re=(0,g.Z)(n.ContainerProps,V),ae=(0,g.Z)(n,_),ie=s.useContext(R.Z),se=s.useMemo((function(){return{dense:L||ie.dense||!1,alignItems:r,disableGutters:W}}),[r,ie.dense,L,W]),ce=s.useRef(null);(0,w.Z)((function(){i&&ce.current&&ce.current.focus()}),[i]);var de=s.Children.toArray(l),le=de.length&&(0,S.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,b.Z)({},n,{alignItems:r,autoFocus:i,button:d,dense:se.dense,disabled:E,disableGutters:W,disablePadding:K,divider:Y,hasSecondaryAction:le,selected:$}),pe=function(e){var t=e.alignItems,n=e.button,o=e.classes,r=e.dense,a=e.disabled,i={root:["root",r&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",a&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,Z.Z)(i,M,o)}(ue),me=(0,P.Z)(ce,t),ve=oe.root||f.Root||B,fe=te.root||C.root||{},ge=(0,b.Z)({className:(0,y.Z)(pe.root,fe.className,u),disabled:E},ae),be=m||"li";return d&&(ge.component=m||"div",ge.focusVisibleClassName=(0,y.Z)(N.focusVisible,Q),be=j.Z),le?(be=ge.component||m?be:"div","li"===F&&("li"===be?be="div":"li"===ge.component&&(ge.component="div")),(0,p.jsx)(R.Z.Provider,{value:se,children:(0,p.jsxs)(q,(0,b.Z)({as:F,className:(0,y.Z)(pe.container,T),ref:me,ownerState:ue},re,{children:[(0,p.jsx)(ve,(0,b.Z)({},fe,!(0,h.X)(ve)&&{as:be,ownerState:(0,b.Z)({},ue,fe.ownerState)},ge,{children:de})),de.pop()]}))})):(0,p.jsx)(R.Z.Provider,{value:se,children:(0,p.jsxs)(ve,(0,b.Z)({},fe,{as:be,ref:me},!(0,h.X)(ve)&&{ownerState:(0,b.Z)({},ue,fe.ownerState)},ge,{children:[de,U&&(0,p.jsx)(G,{children:U})]}))})}));function D(e){return(0,F.ZP)("MuiListItemText",e)}var W=(0,k.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),H=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],K=(0,C.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,f.Z)({},"& .".concat(W.primary),t.primary),(0,f.Z)({},"& .".concat(W.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,b.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),X=s.forwardRef((function(e,t){var n=(0,I.Z)({props:e,name:"MuiListItemText"}),o=n.children,r=n.className,a=n.disableTypography,i=void 0!==a&&a,c=n.inset,d=void 0!==c&&c,u=n.primary,m=n.primaryTypographyProps,v=n.secondary,f=n.secondaryTypographyProps,h=(0,g.Z)(n,H),x=s.useContext(R.Z).dense,C=null!=u?u:o,j=v,S=(0,b.Z)({},n,{disableTypography:i,inset:d,primary:!!C,secondary:!!j,dense:x}),w=function(e){var t=e.classes,n=e.inset,o=e.primary,r=e.secondary,a={root:["root",n&&"inset",e.dense&&"dense",o&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,Z.Z)(a,D,t)}(S);return null==C||C.type===l.Z||i||(C=(0,p.jsx)(l.Z,(0,b.Z)({variant:x?"body2":"body1",className:w.primary,component:null!=m&&m.variant?void 0:"span",display:"block"},m,{children:C}))),null==j||j.type===l.Z||i||(j=(0,p.jsx)(l.Z,(0,b.Z)({variant:"body2",className:w.secondary,color:"text.secondary",display:"block"},f,{children:j}))),(0,p.jsxs)(K,(0,b.Z)({className:(0,y.Z)(w.root,r),ownerState:S,ref:t},h,{children:[C,j]}))})),Y=n(4036);function Q(e){return(0,F.ZP)("MuiIconButton",e)}var U=(0,k.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),J=["edge","children","className","color","disabled","disableFocusRipple","size"],$=(0,C.ZP)(j.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,Y.Z)(n.color))],n.edge&&t["edge".concat((0,Y.Z)(n.edge))],t["size".concat((0,Y.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,b.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,x.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t,n=e.theme,o=e.ownerState,r=null==(t=(n.vars||n).palette)?void 0:t[o.color];return(0,b.Z)({},"inherit"===o.color&&{color:"inherit"},"inherit"!==o.color&&"default"!==o.color&&(0,b.Z)({color:null==r?void 0:r.main},!o.disableRipple&&{"&:hover":(0,b.Z)({},r&&{backgroundColor:n.vars?"rgba(".concat(r.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,x.Fq)(r.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===o.size&&{padding:5,fontSize:n.typography.pxToRem(18)},"large"===o.size&&{padding:12,fontSize:n.typography.pxToRem(28)},(0,f.Z)({},"&.".concat(U.disabled),{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}))})),ee=s.forwardRef((function(e,t){var n=(0,I.Z)({props:e,name:"MuiIconButton"}),o=n.edge,r=void 0!==o&&o,a=n.children,i=n.className,s=n.color,c=void 0===s?"default":s,d=n.disabled,l=void 0!==d&&d,u=n.disableFocusRipple,m=void 0!==u&&u,v=n.size,f=void 0===v?"medium":v,h=(0,g.Z)(n,J),x=(0,b.Z)({},n,{edge:r,color:c,disabled:l,disableFocusRipple:m,size:f}),C=function(e){var t=e.classes,n=e.disabled,o=e.color,r=e.edge,a=e.size,i={root:["root",n&&"disabled","default"!==o&&"color".concat((0,Y.Z)(o)),r&&"edge".concat((0,Y.Z)(r)),"size".concat((0,Y.Z)(a))]};return(0,Z.Z)(i,Q,t)}(x);return(0,p.jsx)($,(0,b.Z)({className:(0,y.Z)(C.root,i),centerRipple:!0,focusRipple:!m,disabled:l,ref:t},h,{ownerState:x,children:a}))})),te=n(215),ne=n(7247);var oe=function(){var e=(0,o.I0)(),t=(0,o.v9)(i.hF);function n(t){var n=t.target.parentElement;e((0,a.GK)(n.id))}return(0,p.jsx)(c.Z,{component:"form",id:"contactslist",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,p.jsx)(v.Z,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:t.map((function(e){var t="checkbox-list-label-".concat(e.name);return(0,p.jsxs)(E,{secondaryAction:(0,p.jsx)(ee,{edge:"end","aria-label":"delete",onClick:n,children:(0,p.jsx)(ne.Z,{id:e.id})}),disablePadding:!0,children:[(0,p.jsx)(te.Z,{}),(0,p.jsx)(X,{id:t,primary:"".concat(e.name,": ").concat(e.number)})]},e.id)}))})})},re=n(6895);var ae=function(){var e=(0,o.I0)();return(0,p.jsxs)(c.Z,{component:"form",id:"filterform",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[(0,p.jsx)("br",{}),(0,p.jsx)(l.Z,{variant:"h6",className:"title",children:"Find contacts by name"}),(0,p.jsx)(u.Z,{id:"o-form",style:{width:"200px",margin:"5px"},type:"text",variant:"outlined",onChange:function(t){var n=t.target.value.toLowerCase();e((0,re.T)(n))}})]})},ie=n(7689);function se(){var e=(0,o.v9)(i.xU),t=(0,o.I0)(),n=(0,ie.s0)(),c=(0,o.v9)(i.Qb);return(0,s.useEffect)((function(){c?t((0,a.yF)()):n("/")}),[c,t,n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.q,{children:(0,p.jsx)("title",{children:"Your contacts"})}),(0,p.jsx)(m,{}),(0,p.jsx)(ae,{}),(0,p.jsx)("div",{children:e&&"Request in progress..."}),(0,p.jsx)(oe,{})]})}},215:function(e,t,n){var o=n(4836);t.Z=void 0;var r=o(n(5649)),a=n(184);t.Z=(0,r.default)((0,a.jsx)("path",{d:"m10 17 5-5-5-5z"}),"ArrowRight")},7247:function(e,t,n){var o=n(4836);t.Z=void 0;var r=o(n(5649)),a=n(184);t.Z=(0,r.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},5649:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(9353)},9353:function(e,t,n){n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return d.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return p},setRef:function(){return m},unstable_ClassNameGenerator:function(){return x},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return f},unsupportedProp:function(){return g},useControlled:function(){return b.Z},useEventCallback:function(){return y.Z},useForkRef:function(){return h.Z},useIsFocusVisible:function(){return Z.Z}});var o=n(4925),r=n(4036),a=n(5253).Z,i=n(6189),s=n(3199);var c=function(e,t){return function(){return null}},d=n(5925),l=n(8301),u=n(7602);n(7462);var p=function(e,t){return function(){return null}},m=n(7576).Z,v=n(162),f=n(6046).Z;var g=function(e,t,n,o,r){return null},b=n(9552),y=n(9683),h=n(2071),Z=n(6943),x={configure:function(e){o.Z.configure(e)}}}}]);
//# sourceMappingURL=889.c9e119b6.chunk.js.map