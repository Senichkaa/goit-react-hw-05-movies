"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[875],{854:function(e,n,r){r.d(n,{a:function(){return c}});var t=r(920),a=r(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#F4442E",barColor:"#51E5FF"})})}},484:function(e,n,r){r.d(n,{Ge:function(){return h},YY:function(){return g},cZ:function(){return l},up:function(){return v},y9:function(){return o}});var t=r(861),a=r(757),c=r.n(a),i=r(243),s="https://api.themoviedb.org/3",u="f178f7ce976ed1c53f42d6d8f6a9420b";function o(){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(u,"&include_adult=false&language=en-US&page=1&query=").concat(n));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return j.apply(this,arguments)}function j(){return(j=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},875:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var t=r(861),a=r(439),c=r(757),i=r.n(c),s=r(791),u=r(689),o=r(87),p=r(484),l=r(854),d=r(184),h=function(){return(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})},f=function(){var e,n,r=(0,s.useState)(null),c=(0,a.Z)(r,2),f=c[0],v=c[1],x=(0,s.useState)(!1),g=(0,a.Z)(x,2),j=g[0],w=g[1],m=(0,u.TH)(),k=(0,u.UO)().movieId,y=(0,s.useRef)(null!==(e=null===(n=m.state)||void 0===n?void 0:n.form)&&void 0!==e?e:"/movies");return(0,s.useEffect)((function(){w(!0);var e=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Ge)(k);case 3:n=e.sent,v(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("There is an error",e.t0);case 10:return e.prev=10,w(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[k]),(0,d.jsxs)("div",{children:[(0,d.jsx)(o.rU,{to:y.current,children:"Back"}),j&&(0,d.jsx)(l.a,{}),f&&(0,d.jsxs)("div",{children:[f.poster_path&&(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(f.poster_path),alt:f.title,width:300}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:f.title}),(0,d.jsxs)("h2",{children:["Rating: ",Math.round(10*f.vote_average),"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:f.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:f.genres.map((function(e){return e.name})).join(",")})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Additional"}),(0,d.jsx)(h,{})]}),(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading"}),children:(0,d.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=875.ba7fa1dd.chunk.js.map