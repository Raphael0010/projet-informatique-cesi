(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){e.exports=n(228)},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},163:function(e,t){},166:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),o=n.n(c),l=(n(137),n(138),n(50)),u=n(28),i=n(230),m=n(10),s=(n(139),n(87)),d=n.n(s),f=n(130),E=n(121),p=n(51),b=n(231),h=n(229),v=n(88),w=n.n(v),g=(n(166),function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(p.a)(o,2),u=l[0],i=l[1],s=Object(a.useState)(""),v=Object(p.a)(s,2),g=(v[0],v[1]),y=Object(a.useState)(""),j=Object(p.a)(y,2),O=(j[0],j[1]),k="http://127.0.0.1:3030",F=function(){var e=Object(E.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("clear"!==u){e.next=4;break}return c([]),i(""),e.abrupt("return");case 4:if(""!==u.trim()){e.next=7;break}return N("Veuillez rentrer une commande valide i"),e.abrupt("return");case 7:x(),(t=w()(k)).on("cmd return",function(e){"wrongcmd"!==e?(g(e),c(function(t){return[{cmd:u,result:e}].concat(Object(f.a)(t))})):N("Veuillez rentrer une commande valide !")}),t.on("error",function(e){g(e),console.log("Error : "+e)}),t.emit("cmd",u),i("");case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=w()(k);e.on("cmd return",function(e){O(e)}),e.emit("cmd","pwd")},N=function(e){b.a.open({message:"Notification",description:e})};return Object(a.useEffect)(function(){x()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"terminal"},r.a.createElement(h.a,{onKeyDown:function(e){if(13===e.keyCode){if(""===u.trim())return void N("Veuillez rentrer une commande valide !");F()}},style:{width:"100%"},value:u,onChange:function(e){i(e.target.value)},placeholder:">"}),r.a.createElement("div",{className:"history"},r.a.createElement("code",null,n.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{type:"code"}),r.a.createElement("strong",null," ",e.cmd),r.a.createElement("br",null),r.a.createElement("pre",null,e.result))})))))}),y=(n(212),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title-super-vision"},r.a.createElement("h3",null,r.a.createElement(m.a,{className:"logo-title-super-vision",type:"unordered-list"}),"Liste des \xe9quipements connect\xe9s")))}),j=(n(213),function(){return r.a.createElement(r.a.Fragment,null,"Accueil")}),O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(i.b,{mode:"horizontal"},r.a.createElement(i.b.Item,null,r.a.createElement(l.b,{to:"/"},r.a.createElement(m.a,{type:"home"}),"Accueil")),r.a.createElement(i.b.Item,null,r.a.createElement(l.b,{to:"/terminal/"},r.a.createElement(m.a,{type:"code"}),"Terminal")),r.a.createElement(i.b.Item,null,r.a.createElement(l.b,{to:"/dashboard/"},r.a.createElement(m.a,{type:"dashboard"}),"Supervision"))),r.a.createElement(u.a,{path:"/",exact:!0,component:j}),r.a.createElement(u.a,{path:"/terminal/",component:g}),r.a.createElement(u.a,{path:"/dashboard/",component:y})))},k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null))};n(227),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,1,2]]]);
//# sourceMappingURL=main.3c4e673f.chunk.js.map