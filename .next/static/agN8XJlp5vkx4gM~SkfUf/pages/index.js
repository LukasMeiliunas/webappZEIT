(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{260:function(n,e,t){__NEXT_REGISTER_PAGE("/",function(){return n.exports=t(261),{page:n.exports.default}})},261:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),o=t(0),c=t.n(o),s=t(6),u=t.n(s),i=t(14),l=t.n(i);function h(n,e,t,a,r,o,c){try{var s=n[o](c),u=s.value}catch(n){return void t(n)}s.done?e(u):Promise.resolve(u).then(a,r)}function p(n){return function(){var e=this,t=arguments;return new Promise(function(a,r){var o=n.apply(e,t);function c(n){h(o,a,r,c,s,"next",n)}function s(n){h(o,a,r,c,s,"throw",n)}c(void 0)})}}var f=function(n){return c.a.createElement("div",null,c.a.createElement("h1",null,"Batman TV Shows"),c.a.createElement("ul",null,n.shows.map(function(n){var e=n.show;return c.a.createElement("li",{key:e.id},c.a.createElement(u.a,{as:"/p/".concat(e.id),href:"/post?id=".concat(e.id)},c.a.createElement("a",null,e.name)))})))};f.getInitialProps=p(r.a.mark(function n(){var e,t;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.tvmaze.com/search/shows?q=batman",n.next=3,l()("https://api.tvmaze.com/search/shows?q=batman");case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,console.log("Show data fetched. Count: ".concat(t.length)),n.abrupt("return",{shows:t});case 9:case"end":return n.stop()}},n,this)})),e.default=f}},[[260,1,0]]]);