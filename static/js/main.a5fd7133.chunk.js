(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(14),n(15),n(4)),u=n(5),h=n(7),l=n(6),s=n(1),m=n(8),d=(n(16),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(h.a)(this,Object(l.a)(e).call(this,t))).state={text:"",author:""},n.handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(e){return t.setState({text:e.content,author:e.author})}))}},{key:"handleClick",value:function(){var t=this;fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(e){return t.setState({text:e.content,author:e.author})}))}},{key:"render",value:function(){var t=this.state.author,e=this.state.text;return o.a.createElement("div",{id:"quote-box"},o.a.createElement("p",{id:"text"},'"',e,'"'),o.a.createElement("h3",{id:"author"},t),o.a.createElement("button",{onClick:this.handleClick,id:"new-quote"},"New Quote"),o.a.createElement("a",{href:'https://www.twitter.com/intent/tweet?text="'.concat(e,'" ').concat(t),id:"tweet-quote"},"Tweet Quote"))}}]),e}(o.a.Component)),p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Quote Random Machine")),o.a.createElement("main",{className:"main"},o.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a5fd7133.chunk.js.map