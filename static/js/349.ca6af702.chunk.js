"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[349],{4897:function(n,t,e){e.d(t,{e:function(){return h}});var r,c,a=e(168),i=e(1087),u=e(6444),s=(0,u.ZP)(i.OL)(r||(r=(0,a.Z)(["\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover:not(.active),\n  &:focus-visible:not(.active) {\n    color: orange;\n  }\n"]))),o=u.ZP.p(c||(c=(0,a.Z)(["\n  font-size: 16px;\n"]))),p=e(7689),f=e(184),h=function(n){var t=n.items,e=(0,p.TH)();return(0,f.jsx)("ul",{children:t.map((function(n){var t=n.id,r=n.title;return(0,f.jsx)("li",{children:(0,f.jsx)(s,{to:"/movies/".concat(t),state:{from:e},children:(0,f.jsx)(o,{children:r})})},t)}))})}},349:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,c,a,i=e(9439),u=e(2791),s=e(4952),o=e(4897),p=e(168),f=e(6444),h=f.ZP.section(r||(r=(0,p.Z)(["\n  padding-top: 36px;\n  padding-bottom: 36px;\n"]))),d=f.ZP.div(c||(c=(0,p.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 1280px;\n  color: #494545;\n"]))),l=f.ZP.h1(a||(a=(0,p.Z)(["\n  margin-bottom: 32px;\n\n  font-size: 56px;\n"]))),x=e(1686),v=e.n(x),m=e(184),y=function(){var n=(0,u.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1];return(0,u.useEffect)((function(){(0,s.Hg)().then((function(n){var t=n.results;t.length&&r(t)})).catch((function(n){n.response?v().Notify.warning(n.response.data):n.request?v().Notify.warning("Request failed"):v().Notify.warning("Error",n.message)})).finally()}),[]),(0,m.jsx)("main",{children:(0,m.jsx)(h,{children:(0,m.jsxs)(d,{children:[(0,m.jsx)(l,{children:"Trends of the week"}),e&&(0,m.jsx)(o.e,{items:e})]})})})}},4952:function(n,t,e){e.d(t,{Hg:function(){return s},M1:function(){return h},Pg:function(){return p},Ph:function(){return v},tx:function(){return l}});var r=e(5861),c=e(7757),a=e.n(c),i="https://api.themoviedb.org/3",u="e0f7258397e08a39ddd2202708092bf4";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/trending/movie/week?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=349.ca6af702.chunk.js.map