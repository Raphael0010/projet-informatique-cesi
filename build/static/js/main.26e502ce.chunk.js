(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,n){e.exports=n.p+"static/media/raspi.04a1111c.png"},138:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACMUlEQVR4Xo3SXUhTcRgG8Oe/nbWPdtbxY22sra7MIoNa4kVGXUzYhRfdWfYh1M2CSDIIImSEGSi1YQTRRZgXRUYXFZU35VU3tWxXTZrOjMppOD1NnGfnHHfesozWOtQeeK8e+PFcvPgV5U1sz6fgvuF3boc0VuOjdFvL8Fx3uEceetSAckNTHwTxeuTKeI2TkpsESm5cR6k6nzJ3+UIfqfKasqGFwYGz41urKLXDS2ObPZTcYKfZ8Ol7VChwpYBBD+APHI1Y/f4JaBIcQQnWeivEO/0tuaH7obIATfyyXstmBK6aoaJVRHVoHiavEeLAtXOanLf/F1h8PNghT76vsjWqAAdwrgIczQqUjymvOjHq/ycgJ141zfdHz9gaGBxNWZAKaDJg3S7BwOegjL6uLwa4P6Yviq70ieAtzrXAVbblwcwcaHl1qmNlCUFJxXcDiOoC2du9PQXxrdd9SQBgBykMMK8CJoCrykHNpGt1FyxnPm+ZPtnY6unb9nPNEoFZfuMEwOichRQfqdMF1Jc3djKLZKa8E8xqArMQSiMc9EBOxaALYHrSyHgzmM0HmIxg2t8As5gA6APgmjuTLB4gQ2UtAwBSVQBstaUiBPohIkMmsv/FVMhNpD4lTX5C2tKD7/eQiJ79uJUu9/xqWPcPGGOacLi33chbxJnzx6FlCTA4QVQBKTaC6Y5D4ANHbtoC7ReLAYaSLM8kdn29eyqqphN7iws+cKxrbbC7izGuUAx8AzsG65Q4rU8OAAAAAElFTkSuQmCC"},139:function(e,t,n){e.exports=n.p+"static/media/time.47f5578d.png"},140:function(e,t,n){e.exports=n.p+"static/media/debitdown.5d86e169.png"},141:function(e,t,n){e.exports=n.p+"static/media/debitup.33800e99.png"},152:function(e,t,n){e.exports=n(263)},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},183:function(e,t){},186:function(e,t,n){},240:function(e,t,n){},249:function(e,t,n){},250:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),l=(n(157),n(158),n(50)),s=n(33),m=n(266),o=n(11),u=(n(159),n(94)),p=n.n(u),_=n(149),h=n(130),E=n(15),d=n(270),v=n(264),f=n(268),b=n(131),g=n(132),O=n(133),w=n.n(O),y=function(){function e(){Object(b.a)(this,e)}return Object(g.a)(e,null,[{key:"emit",value:function(e,t){try{this.socket.emit(e,t)}catch(n){console.log("Error",n)}}},{key:"listen",value:function(e,t){this.socket.on(e,t)}},{key:"removeAllListeners",value:function(){this.socket.removeAllListeners()}},{key:"removeListener",value:function(e){this.socket.removeEventListener(e)}}]),e}();y.socket=w()("http://127.0.0.1:3030");n(186);var k=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),l=Object(E.a)(i,2),s=l[0],m=l[1],u=Object(a.useState)(!1),b=Object(E.a)(u,1)[0],g=function(e){d.a.open({message:"Notification",description:e})},O=Object(a.useCallback)(Object(h.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("clear"!==s){e.next=4;break}return c([]),m(""),e.abrupt("return");case 4:if(""!==s.trim()){e.next=7;break}return g("Veuillez rentrer une commande valide !"),e.abrupt("return");case 7:y.emit("cmd",s),y.listen("cmd return",function(e){"wrongcmd"!==e?(c(function(t){return[{cmd:s,result:e}].concat(Object(_.a)(t))}),m("")):(g("Veuillez rentrer une commande valide !"),m("")),y.removeListener("cmd return")});case 9:case"end":return e.stop()}},e)})),[s]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"terminal"},r.a.createElement(v.a,{spinning:b,tip:"  Impossible to connect to the socket.io server ..."},r.a.createElement("div",{className:"title-config"},r.a.createElement("h3",null,r.a.createElement(o.a,{type:"code"}),"Terminal")),r.a.createElement(f.a,{onKeyDown:function(e){if(13===e.keyCode){if(""===s.trim())return void g("Veuillez rentrer une commande valide !");O()}},style:{width:"100%"},value:s,onChange:function(e){m(e.target.value)},placeholder:">"})),r.a.createElement("div",{className:"history"},r.a.createElement("code",null,n.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(o.a,{type:"code"}),r.a.createElement("strong",null," ",e.cmd),r.a.createElement("br",null),r.a.createElement("pre",null,e.result))})))))},A=n(269),j=n(265),N=n(267),S=(n(240),n(137)),L=n.n(S),I=n(138),x=n.n(I),q=n(139),C=n.n(q),F=n(140),T=n.n(F),B=n(141),M=n.n(B),P=n(96),R=A.a.Panel,U=function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),l=Object(E.a)(i,2),s=l[0],m=l[1],u=Object(a.useState)(""),p=Object(E.a)(u,2),_=p[0],h=p[1],d=Object(a.useState)(),v=Object(E.a)(d,2),f=v[0],b=v[1],g=Object(a.useState)(),O=Object(E.a)(g,2),w=O[0],k=O[1],S=Object(a.useState)(),I=Object(E.a)(S,2),q=I[0],F=I[1],B=Object(a.useState)(""),U=Object(E.a)(B,2),z=U[0],Q=U[1],V=Object(a.useState)(""),H=Object(E.a)(V,2),K=H[0],G=H[1],Y=Object(a.useState)(),J=Object(E.a)(Y,2),X=J[0],D=J[1],W=Object(a.useState)(),Z=Object(E.a)(W,2),$=Z[0],ee=Z[1],te=Object(a.useState)(),ne=Object(E.a)(te,2),ae=ne[0],re=ne[1];Object(a.useEffect)(function(){ce(),ie()},[]);var ce=function(){y.emit("raspi_snmp_heat","/opt/vc/bin/vcgencmd measure_temp"),y.listen("raspi_snmp_heat_return",function(e){return c(e.split("=")[1]),y.removeListener("raspi_snmp_heat_return")}),y.emit("raspi_snmp_ip","snmpwalk -v 2c -c public localhost iso.3.6.1.2.1.92.1.3.2.1.9.7.100.101.102.97.117.108.116.1.2 -Ov -Oq"),y.listen("raspi_snmp_ip_return",function(e){return h(e),y.removeListener("raspi_snmp_ip_return")}),y.emit("raspi_snmp_cpu_charge","snmpwalk -v 2c -c public localhost  .1.3.6.1.4.1.2021.11.11.0 -Ov -Oq"),y.listen("raspi_snmp_cpu_charge_return",function(e){return b(parseInt(e)),y.removeListener("raspi_snmp_cpu_charge_return")}),y.emit("raspi_snmp_uptime","snmpwalk -v 2c -c public localhost .1.3.6.1.2.1.1.3.0 -Ov -Oq"),y.listen("raspi_snmp_uptime_return",function(e){return Q(e),y.removeListener("raspi_snmp_uptime_return")}),y.emit("raspi_snmp_int","snmpwalk -v 2c -c public localhost iso.3.6.1.2.1.55.1.5.1.2.2 -Ov -Oq"),y.listen("raspi_snmp_int_return",function(e){return G(e),y.removeListener("raspi_snmp_int_return")});var e=0;y.emit("raspi_snmp_disk_total","snmpwalk -v 2c -c public localhost  .1.3.6.1.4.1.2021.9.1.6.1 -Ov -Oq"),y.listen("raspi_snmp_disk_total_return",function(t){return e=parseInt(t),y.removeListener("raspi_snmp_disk_total_return")}),y.emit("raspi_snmp_disk_free","snmpwalk -v2c -c public localhost .1.3.6.1.4.1.2021.9.1.7.1 -Ov -Oq"),y.listen("raspi_snmp_disk_free_return",function(t){return F(Object(P.a)(e,parseInt(t))),y.removeListener("raspi_snmp_disk_free_return")});var t=0;y.emit("raspi_snmp_memory_total","snmpwalk -v 2c -c public localhost  .1.3.6.1.4.1.2021.4.5.0  -Ov -Oq"),y.listen("raspi_snmp_memory_total_return",function(e){return t=parseInt(e),y.removeListener("raspi_snmp_memory_total_return")}),y.emit("raspi_snmp_memory_free","snmpwalk -v 2c -c public localhost  .1.3.6.1.4.1.2021.4.11.0 -Ov -Oq"),y.listen("raspi_snmp_memory_free_return",function(e){return k(Object(P.a)(t,parseInt(e))),y.removeListener("raspi_snmp_memory_free_return")})},ie=function(){var e;y.emit("switch_snmp_name","snmpwalk -v 2c -c public 192.168.137.5 1.3.6.1.2.1.1.5.0 -Oq -Ov"),y.listen("switch_snmp_name_return",function(t){return e=t,y.removeListener("switch_snmp_name_return")}),y.emit("switch_snmp_ip","snmpwalk -v 2c -c public 192.168.137.5 1.3.6.1.2.1.4.20.1.1 -Oq -Ov"),y.listen("switch_snmp_ip_return",function(t){return m("IP : "+t.split("12")[0]+" - NAME : "+e),y.removeListener("switch_snmp_ip_return")}),y.emit("switch_snmp_ventilo","snmpwalk -v 2c -c public 192.168.137.5 .1.3.6.1.4.1.9.9.109.1.1.1.1.5.1 -Ov -Oq"),y.listen("switch_snmp_ventilo_return",function(e){return D(e),y.removeListener("switch_snmp_ventilo_return")}),y.emit("switch_snmp_debit_entrant","snmpwalk -v 2c -c public 192.168.137.5 .1.3.6.1.2.1.2.2.1.10  -Ov -Oq"),y.listen("switch_snmp_debit_entrant_return",function(e){var t=e.split("\n");return t.splice(-1),ee(t.reduce(function(e,t){return e+parseInt(t,10)},0)),y.removeListener("switch_snmp_debit_entrant_return")}),y.emit("switch_snmp_debit_sortant","snmpwalk -v 2c -c public 192.168.137.5 .1.3.6.1.2.1.2.2.1.16  -Ov -Oq"),y.listen("switch_snmp_debit_sortant_return",function(e){var t=e.split("\n");return t.splice(-1),re(t.reduce(function(e,t){return e+parseInt(t,10)},0)),y.removeListener("switch_snmp_debit_sortant_return")}),y.emit("switch_snmp_liste_interface","snmpwalk -v 2c -c public 192.168.137.5 iso.3.6.1.2.1.31.1.1.1.1 -Ov -Oq"),y.listen("switch_snmp_liste_interface_return",function(e){return console.log("LISTE INTERFACE",e),y.removeListener("switch_snmp_liste_interface_return")}),y.emit("switch_snmp_liste_interface_connectee","snmpwalk -v 2c -c public 192.168.137.5 iso.3.6.1.2.1.31.1.1.1.2 -Ov -Oq"),y.listen("switch_snmp_liste_interface_connectee_return",function(e){return console.log("INTERFACE CONNECTER",e),y.removeListener("switch_snmp_liste_interface_connectee_return")})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title-raspi-super-vision"},r.a.createElement("h3",null,r.a.createElement("img",{style:{marginRight:"0.4%"},width:"15",height:"15",alt:"raspberry",src:L.a}),"Raspberry monitoring ",_)),r.a.createElement("div",{className:"monitoring-raspi"},r.a.createElement(j.a,{size:"small",title:"Monitoring"},r.a.createElement("div",{className:"monitoring-raspi-bloc"},r.a.createElement("div",{className:"left-raspi"},r.a.createElement("p",null,"CPU charge : ",r.a.createElement(N.a,{percent:f})),r.a.createElement("p",null,"Memory charge : ",r.a.createElement(N.a,{percent:w})),r.a.createElement("p",null,"Disk space : ",r.a.createElement(N.a,{percent:q}))),r.a.createElement("div",{className:"seconde-bloc-raspi"},r.a.createElement("p",null,"Uptime : ",z," ",z&&r.a.createElement("img",{alt:"time",height:"15",width:"15",src:C.a})),r.a.createElement("p",null,"Network interface : ",K),r.a.createElement("p",null,"Heat : ",n,parseInt(n)>=52&&parseInt(n)>0&&r.a.createElement("img",{alt:"heat",height:"15",width:"15",src:x.a})))))),r.a.createElement("div",{className:"title-super-vision"},r.a.createElement("h3",null,r.a.createElement(o.a,{className:"logo-title-super-vision",type:"unordered-list"}),"List of equipments",r.a.createElement("span",{style:{color:"green"}}," connected")," to the network")),r.a.createElement("div",{className:"collection-super-vision"},r.a.createElement(A.a,null,r.a.createElement(R,{header:s,key:"1"},r.a.createElement("p",null,"Debit : ",$/100," ko/s",r.a.createElement("img",{alt:"debitdown",height:"15",width:"15",src:T.a})," "+ae/100+" ko/s "," ",r.a.createElement("img",{alt:"debitup",height:"15",width:"15",src:M.a}),r.a.createElement("span",{style:{paddingLeft:"0.3%"}}," ","Fan use : ",X," %")),r.a.createElement(A.a,{defaultActiveKey:"1"},r.a.createElement(R,{header:"Graph",key:"1"},r.a.createElement("p",null,"Graph")))))))},z=(n(249),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,r.a.createElement(o.a,{type:"sync"})," Bienvenue sur l'application de monitoring en temps r\xe9el"),r.a.createElement("h2",null,"Technologies utilis\xe9s :"),r.a.createElement("h3",null,r.a.createElement(o.a,{type:"right"})," Server Socket.IO pour executer les commandes et r\xe9cup\xe9rer les donn\xe9es en temps r\xe9el"),r.a.createElement("h3",null,r.a.createElement(o.a,{type:"right"})," React 16 en TypeScript"),r.a.createElement("h3",null,r.a.createElement(o.a,{type:"right"})," Raspberry ( Rasbian Buster )"),r.a.createElement("h3",null,r.a.createElement(o.a,{type:"right"})," SNMP"))}),Q=(n(250),n(73)),V=function(){var e=Object(a.useState)(""),t=Object(E.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title-config"},r.a.createElement("h3",null,r.a.createElement(o.a,{type:"control"}),"Configuration")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(f.a,{style:{width:"89.5%"},onChange:function(e){c(e.target.value)},placeholder:"Switch Name"})," ",r.a.createElement(Q.a,{onClick:function(){y.emit("switch_config_change_name","sudo /script/ChangementNomSwitch "+n)},style:{width:"10%"},type:"primary"},"Executer")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(f.a,{style:{width:"43.5%"},placeholder:"Num\xe9ro de VLAN"})," ",r.a.createElement(f.a,{style:{width:"43.5%"},placeholder:"Nom du VLAN"})," ",r.a.createElement(Q.a,{style:{width:"10%"},type:"primary"},"Executer")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(f.a,{style:{width:"80.5%"},placeholder:"Num\xe9ros interface FA"}),r.a.createElement(Q.a,{type:"primary"},"Allumer")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(f.a,{style:{width:"80.5%"},placeholder:"Num\xe9ros interface FA"}),r.a.createElement(Q.a,{type:"primary"},"Eteindre")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(Q.a,{type:"primary"},"Sauvegarder la config du switch")))},H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(m.b,{mode:"horizontal"},r.a.createElement(m.b.Item,null,r.a.createElement(l.b,{to:"/"},r.a.createElement(o.a,{type:"home"}),"Accueil")),r.a.createElement(m.b.Item,null,r.a.createElement(l.b,{to:"/terminal/"},r.a.createElement(o.a,{type:"code"}),"Terminal")),r.a.createElement(m.b.Item,null,r.a.createElement(l.b,{to:"/dashboard/"},r.a.createElement(o.a,{type:"dashboard"}),"Supervision")),r.a.createElement(m.b.Item,null,r.a.createElement(l.b,{to:"/configuration/"},r.a.createElement(o.a,{type:"control"}),"Configuration"))),r.a.createElement(s.a,{path:"/",exact:!0,component:z}),r.a.createElement(s.a,{path:"/terminal/",component:k}),r.a.createElement(s.a,{path:"/dashboard/",component:U}),r.a.createElement(s.a,{path:"/configuration/",component:V})))},K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null))};n(262),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e,t,n){"use strict";(function(e){function a(e,t){var n=e/1e3,a=t/1e3;return Math.round((n-a)/n*100)}n.d(t,"a",function(){return a})}).call(this,n(28))}},[[152,1,2]]]);
//# sourceMappingURL=main.26e502ce.chunk.js.map