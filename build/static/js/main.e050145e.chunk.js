(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,n){e.exports=n.p+"static/media/raspi.04a1111c.png"},146:function(e,t,n){e.exports=n(256)},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},177:function(e,t){},180:function(e,t,n){},234:function(e,t,n){},243:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),i=(n(151),n(152),n(55)),o=n(31),m=n(260),s=n(11),u=(n(153),n(93)),p=n.n(u),E=n(143),h=n(128),d=n(32),v=n(262),b=n(257),f=n(259),g=n(129),y=n(130),k=n(131),_=n.n(k),O=function(){function e(){Object(g.a)(this,e)}return Object(y.a)(e,null,[{key:"emit",value:function(e,t){try{this.socket.emit(e,t)}catch(n){console.log("Error",n)}}},{key:"listen",value:function(e,t){this.socket.on(e,t)}},{key:"removeAllListeners",value:function(){this.socket.removeAllListeners()}},{key:"removeListener",value:function(e){this.socket.removeEventListener(e)}}]),e}();O.socket=_()("http://127.0.0.1:3030");n(180);var w=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),i=Object(d.a)(l,2),o=i[0],m=i[1],u=Object(a.useState)(!1),g=Object(d.a)(u,1)[0],y=function(e){v.a.open({message:"Notification",description:e})},k=Object(a.useCallback)(Object(h.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("clear"!==o){e.next=4;break}return c([]),m(""),e.abrupt("return");case 4:if(""!==o.trim()){e.next=7;break}return y("Veuillez rentrer une commande valide !"),e.abrupt("return");case 7:O.emit("cmd",o),O.listen("cmd return",function(e){"wrongcmd"!==e?(c(function(t){return[{cmd:o,result:e}].concat(Object(E.a)(t))}),m("")):(y("Veuillez rentrer une commande valide !"),m("")),O.removeListener("cmd return")});case 9:case"end":return e.stop()}},e)})),[o]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"terminal"},r.a.createElement(b.a,{spinning:g,tip:"  Impossible to connect to the socket.io server ..."},r.a.createElement(f.a,{onKeyDown:function(e){if(13===e.keyCode){if(""===o.trim())return void y("Veuillez rentrer une commande valide !");k()}},style:{width:"100%"},value:o,onChange:function(e){m(e.target.value)},placeholder:">"})),r.a.createElement("div",{className:"history"},r.a.createElement("code",null,n.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(s.a,{type:"code"}),r.a.createElement("strong",null," ",e.cmd),r.a.createElement("br",null),r.a.createElement("pre",null,e.result))})))))},j=n(261),N=n(258),S=(n(234),n(135)),L=n.n(S),x=j.a.Panel,I=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),i=Object(d.a)(l,2),o=i[0],m=i[1],u=Object(a.useState)(""),p=Object(d.a)(u,2),E=p[0],h=p[1];return Object(a.useEffect)(function(){O.emit("raspi_snmp_heat","/opt/vc/bin/vcgencmd measure_temp"),O.listen("raspi_snmp_heat_return",function(e){return c(e.split("=")[1]),O.removeListener("raspi_snmp_heat_return")}),O.emit("raspi_snmp_ip","snmpwalk -v 2c -c public localhost iso.3.6.1.2.1.92.1.3.2.1.9.7.100.101.102.97.117.108.116.1.2 -Ov -Oq"),O.listen("raspi_snmp_ip_return",function(e){return m(e),O.removeListener("raspi_snmp_ip_return")}),O.emit("raspi_snmp_cpu_charge","snmpwalk -v 2c -c public localhost  .1.3.6.1.4.1.2021.11.11.0 -Ov -Oq"),O.listen("raspi_snmp_cpu_charge_return",function(e){return h(e),O.removeListener("raspi_snmp_cpu_charge_return")})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title-raspi-super-vision"},r.a.createElement("h3",null,r.a.createElement("img",{style:{marginRight:"0.4%"},width:"15",height:"15",alt:"raspberry",src:L.a}),"Raspberry monitoring ",o)),r.a.createElement("div",{className:"monitoring-raspi"},r.a.createElement(N.a,{size:"small",title:"Monitoring"},r.a.createElement("div",{className:"monitoring-raspi-bloc"},r.a.createElement("div",{className:"left-raspi"},r.a.createElement("p",null,"CPU charge : ",E),r.a.createElement("p",null,"Memory charge : "),r.a.createElement("p",null,"Uptime : ")),r.a.createElement("div",{className:"seconde-bloc-raspi"},r.a.createElement("p",null,"Disk space :"),r.a.createElement("p",null,"Network interface :"),r.a.createElement("p",null,"Heat : ",n))))),r.a.createElement("div",{className:"title-super-vision"},r.a.createElement("h3",null,r.a.createElement(s.a,{className:"logo-title-super-vision",type:"unordered-list"}),"List of equipment",r.a.createElement("span",{style:{color:"green"}}," connected")," to the network")),r.a.createElement("div",{className:"collection-super-vision"},r.a.createElement(j.a,null,r.a.createElement(x,{header:"IP : - NAME : ",key:"1"},r.a.createElement(j.a,{defaultActiveKey:"1"},r.a.createElement(x,{header:"Graph",key:"1"},r.a.createElement("p",null,"Graph")))))))},F=(n(243),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(s.a,{type:"sync"})," Bienvenue sur l'application de monitoring en temps r\xe9el"),r.a.createElement("h2",null,"Technologies utilis\xe9s :"),r.a.createElement("h3",null,r.a.createElement(s.a,{type:"right"})," Server Socket.IO pour executer les commandes et r\xe9cup\xe9rer les donn\xe9es en temps r\xe9el"),r.a.createElement("h3",null,r.a.createElement(s.a,{type:"right"})," React 16 en TypeScript"),r.a.createElement("h3",null,r.a.createElement(s.a,{type:"right"})," Raspberry ( Rasbian Buster )"),r.a.createElement("h3",null,r.a.createElement(s.a,{type:"right"})," SNMP"))}),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(m.b,{mode:"horizontal"},r.a.createElement(m.b.Item,null,r.a.createElement(i.b,{to:"/"},r.a.createElement(s.a,{type:"home"}),"Accueil")),r.a.createElement(m.b.Item,null,r.a.createElement(i.b,{to:"/terminal/"},r.a.createElement(s.a,{type:"code"}),"Terminal")),r.a.createElement(m.b.Item,null,r.a.createElement(i.b,{to:"/dashboard/"},r.a.createElement(s.a,{type:"dashboard"}),"Supervision"))),r.a.createElement(o.a,{path:"/",exact:!0,component:F}),r.a.createElement(o.a,{path:"/terminal/",component:w}),r.a.createElement(o.a,{path:"/dashboard/",component:I})))},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null))};n(255),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,1,2]]]);
//# sourceMappingURL=main.e050145e.chunk.js.map