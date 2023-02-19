"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[804],{804:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,c,a,u=e(439),i=e(791),s=e(689),o=e(952),p=e(168),f=e(444),h=f.ZP.p(r||(r=(0,p.Z)(["\n  position: relative;\n  letter-spacing: 1px;\n  line-height: 1.2;\n  color: #494545;\n"]))),l=f.ZP.li(c||(c=(0,p.Z)(["\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: 700;\n"]))),d=f.ZP.li(a||(a=(0,p.Z)(["\n  margin-top: 16px;\n  font-size: 14px;\n  font-weight: 400;\n  text-indent: 30px;\n"]))),x=e(686),v=e.n(x),y=e(184),m="idle",w="pending",g="rejected",k="resolved",Z=function(){var n=(0,s.UO)().movieId,t=(0,i.useState)(null),e=(0,u.Z)(t,2),r=e[0],c=e[1],a=(0,i.useState)(m),p=(0,u.Z)(a,2),f=p[0],x=p[1];return(0,i.useEffect)((function(){x(w),(0,o.tx)(n).then((function(n){var t=n.results;t.length?(c(t),x(k)):x(g)})).catch((function(n){n.response?v().Notify.warning(n.response.data):n.request?v().Notify.warning("Request failed"):v().Notify.warning("Error",n.message)})).finally()}),[n]),(0,y.jsx)(y.Fragment,{children:f===k&&(0,y.jsx)("ul",{children:r.map((function(n){var t=n.id,e=n.author,r=n.content,c=n.url;return(0,y.jsx)("div",{children:(0,y.jsxs)(h,{cite:c,children:[(0,y.jsxs)(l,{children:["Author: ",e]}),(0,y.jsxs)(d,{children:[" ",r," "]})]})},t)}))})})}},952:function(n,t,e){e.d(t,{Hg:function(){return s},M1:function(){return h},Pg:function(){return p},Ph:function(){return v},tx:function(){return d}});var r=e(861),c=e(757),a=e.n(c),u="https://api.themoviedb.org/3",i="e0f7258397e08a39ddd2202708092bf4";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/trending/movie/week?api_key=").concat(i));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=804.8fc68777.chunk.js.map