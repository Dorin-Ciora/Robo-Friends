(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),s=n(10),i=n(8),l=n(17),u=n(18),d=(n(28),n(3)),h=n(4),b=n(6),p=n(5),m=n(7),E=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?200X200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},f=function(e){var t=e.robots;return console.log("cardList"),r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(E,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},g=function(e){e.searchField;var t=e.searchChange;return console.log("searchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},O=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},v=(n(29),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(b.a)(this,Object(p.a)(t).call(this))).updateCount=function(){e.setState(function(t){return{count:e.state.count+1}})},e.state={count:0},e}return Object(m.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("CounterButtons"),r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.PureComponent)),j=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(v,{color:"red"}))}}]),t}(o.Component),y=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(j,null),r.a.createElement(g,{searchChange:n}),r.a.createElement(O,null,r.a.createElement(f,{robots:c})))}}]),t}(o.Component),R=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(30);var C={searchField:""},S={isPending:!1,robots:[],error:""},w=(Object(l.createLogger)(),Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),_=Object(i.d)(w,Object(i.a)(u.a));c.a.render(r.a.createElement(s.a,{store:_},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.d2fbac20.chunk.js.map