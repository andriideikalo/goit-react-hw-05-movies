"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[804],{7804:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,c,a,u=e(9439),i=e(2791),o=e(7689),s=e(4952),p=e(168),f=e(6444),h=f.ZP.p(r||(r=(0,p.Z)(["\n  position: relative;\n  letter-spacing: 1px;\n  line-height: 1.2;\n  color: #494545;\n"]))),l=f.ZP.li(c||(c=(0,p.Z)(["\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: 700;\n"]))),x=f.ZP.li(a||(a=(0,p.Z)(["\n  margin-top: 16px;\n  font-size: 14px;\n  font-weight: 400;\n  text-indent: 30px;\n"]))),v=e(1686),d=e.n(v),m=e(184),y=function(){var n=(0,o.UO)().movieId,t=(0,i.useState)(null),e=(0,u.Z)(t,2),r=e[0],c=e[1];if((0,i.useEffect)((function(){(0,s.tx)(n).then((function(n){var t=n.results;c(t)})).catch((function(n){return console.log(n)})).finally()}),[n]),r)return(0,m.jsx)(m.Fragment,{children:r.length>0?(0,m.jsx)("ul",{children:r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,m.jsx)("div",{children:(0,m.jsxs)(h,{children:[(0,m.jsxs)(l,{children:["Author: ",e]}),(0,m.jsxs)(x,{children:[" ",r," "]})]})},t)}))}):d().Notify.warning("Sorry. There are no reviews for this movie.(")})}},4952:function(n,t,e){e.d(t,{Hg:function(){return o},M1:function(){return h},Pg:function(){return p},Ph:function(){return d},tx:function(){return x}});var r=e(5861),c=e(7757),a=e.n(c),u="https://api.themoviedb.org/3",i="e0f7258397e08a39ddd2202708092bf4";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/trending/movie/week?api_key=").concat(i));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=804.77d8ee61.chunk.js.map