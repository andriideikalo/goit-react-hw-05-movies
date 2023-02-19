"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[349],{8647:function(n,t,e){e.d(t,{e:function(){return g}});var r,c,a,i,o,u=e(7689),s=e(168),p=e(1087),f=e(6444),h=f.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 20px;\n  column-gap: 8px;\n"]))),l=f.ZP.li(c||(c=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: calc((100% - 32px) / 5);\n"]))),d=(0,f.ZP)(p.OL)(a||(a=(0,s.Z)(["\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover:not(.active),\n  &:focus-visible:not(.active) {\n    transform: scale(1.1);\n    color: #ec9706;\n  }\n"]))),x=f.ZP.img(i||(i=(0,s.Z)(["\n  height: 365px;\n  object-fit: cover;\n"]))),v=f.ZP.div(o||(o=(0,s.Z)(["\n  padding: 12px 4px;\n"]))),m=e(184),g=function(n){var t=n.items,e=(0,u.TH)();return(0,m.jsx)(h,{children:t.map((function(n){var t=n.id,r=n.poster_path,c=n.title;return(0,m.jsx)(l,{children:(0,m.jsxs)(d,{to:"/movies/".concat(t),state:{from:e},children:[(0,m.jsx)(x,{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:c}),(0,m.jsx)(v,{children:(0,m.jsx)("p",{children:c})})]})},t)}))})}},349:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,c,a,i=e(9439),o=e(2791),u=e(4952),s=e(8647),p=e(168),f=e(6444),h=f.ZP.section(r||(r=(0,p.Z)(["\n  padding-top: 36px;\n  padding-bottom: 36px;\n\n  text-align: center;\n"]))),l=f.ZP.div(c||(c=(0,p.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 1280px;\n  color: #494545;\n"]))),d=f.ZP.h1(a||(a=(0,p.Z)(["\n  margin-bottom: 32px;\n\n  font-size: 56px;\n"]))),x=e(184),v="pending",m="rejected",g="resolved",Z=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],c=(0,o.useState)(v),a=(0,i.Z)(c,2),p=a[0],f=a[1];return(0,o.useEffect)((function(){(0,u.Hg)().then((function(n){var t=n.results;t.length?(r(t),f(g)):f(m)})).catch((function(n){f(m)}))}),[]),(0,x.jsx)("main",{children:(0,x.jsx)(h,{children:(0,x.jsxs)(l,{children:[(0,x.jsx)(d,{children:"Trends of the week"}),p===g&&(0,x.jsx)(s.e,{items:e})]})})})}},4952:function(n,t,e){e.d(t,{Hg:function(){return u},M1:function(){return h},Pg:function(){return p},Ph:function(){return v},tx:function(){return d}});var r=e(5861),c=e(7757),a=e.n(c),i="https://api.themoviedb.org/3",o="e0f7258397e08a39ddd2202708092bf4";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/trending/movie/week?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5861:function(n,t,e){function r(n,t,e,r,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?t(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var i=n.apply(t,e);function o(n){r(i,c,a,o,u,"next",n)}function u(n){r(i,c,a,o,u,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=349.feaa33b1.chunk.js.map