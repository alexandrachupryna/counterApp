(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(8),s=n.n(c),u=(n(15),n(1)),i=n(2),r=n(3),l=n(6),h=n(4),b=n(5),d=(n(16),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:this.props.className},this.props.count)}}]),e}(o.a.Component)),m=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.props.label;return o.a.createElement("button",{onClick:this.props.onClick,className:this.props.className},t)}}]),e}(o.a.Component),p=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:this.props.className},this.props.count>=10?"You reached 10!":null)}}]),e}(o.a.Component),C=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={count:0,isCountShown:!1,buttonLabel:"Hide"},n.addCount=n.addCount.bind(Object(u.a)(n)),n.reduceCount=n.reduceCount.bind(Object(u.a)(n)),n.toggleClass=n.toggleClass.bind(Object(u.a)(n)),n}return Object(b.a)(e,t),Object(r.a)(e,[{key:"addCount",value:function(){this.setState(function(t,e){e.count;return{count:t.count+1}})}},{key:"reduceCount",value:function(){this.setState(function(t,e){e.count;return{count:t.count-1}})}},{key:"toggleClass",value:function(){var t=this.state.isCountShown;this.setState({isCountShown:!t})}},{key:"render",value:function(){return console.log(this.state.count),o.a.createElement(o.a.Fragment,null,o.a.createElement(d,{className:this.state.isCountShown?"counterNone":"counter",count:this.state.count}),o.a.createElement("div",{className:"buttons"},o.a.createElement(m,{className:"buttonPlus",label:"+",onClick:this.addCount}),o.a.createElement(m,{className:"buttonMinus",label:"-",onClick:this.reduceCount}),o.a.createElement(m,{className:"counterShown",label:this.state.isCountShown?"Show":"Hide",onClick:this.toggleClass})),o.a.createElement(p,{className:"textMessage",count:this.state.count}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.2dfdef55.chunk.js.map