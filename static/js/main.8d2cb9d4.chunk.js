(this.webpackJsonptronaldinho=this.webpackJsonptronaldinho||[]).push([[0],{24:function(t,e,n){},26:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),c=n.n(o),i=n(4),a=n.n(i),u=(n(24),n(25),n(26),n(11)),s=n(12),p=n(18),l=n(17),d="GET_RANDOM_QUOTE",f="GET_RANDOM_QUOTE_SUCCESS",j="GET_RANDOM_QUOTE_ERROR";var h=function(){return function(t){t({type:d}),fetch("https://tronalddump.io/random/quote").then((function(t){return t.json()})).then((function(e){if(e.error)throw e.error;var n,r;return t((n=e.value,r=e.appeared_at,{type:f,quote:n,date:r})),e.value})).catch((function(e){t(function(t){return{type:j,error:t}}(e))}))}},b=n(5),O=n(2),g=n(3),x={pending:!1,quote:"",date:"",error:null};var v=function(t){return t.quote},m=function(t){return t.date},y=function(t){return t.pending},E=function(t){return t.error},T=n.p+"static/media/trump.f2f6e8fe.png",C=n(15),R=n.n(C),S=n(14),_=n.n(S),q=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentWillMount",value:function(){(0,this.props.fetchQuote)()}},{key:"shouldComponentRender",value:function(){return!1!==this.props.pending}},{key:"render",value:function(){var t=this,e=this.props,n=e.quote,o=e.pending,c=e.date;return Object(r.jsxs)("div",{className:"box",style:{paddingBottom:"0px"},onClick:function(){return t.props.fetchQuote()},children:[Object(r.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:Object(r.jsx)(R.a,{loading:o})}),Object(r.jsx)("p",{style:{fontStyle:"italic",fontSize:"18px"},children:!o&&(n?'"'+n+'"':"nop")}),Object(r.jsx)("h5",{style:{position:"absolute",bottom:"5px",right:"10px",margin:"0",padding:"5px 3px",fontWeight:"bold",fontSize:"12px"},children:!o&&(c?_()(c).format("MM/DD/YYYY"):"--/--/----")}),Object(r.jsx)("figure",{class:"image is-128x128",children:Object(r.jsx)("img",{style:{paddingTop:"32px"},alt:"trumpface",src:T})})]})}}]),n}(o.Component),D=Object(b.b)((function(t){return{error:E(t),quote:v(t),pending:y(t),date:m(t)}}),(function(t){return Object(O.b)({fetchQuote:h},t)}))(q);var M=function(){return Object(r.jsx)("div",{class:"section",children:Object(r.jsxs)("div",{class:"container",children:[Object(r.jsx)("h1",{class:"title",style:{textAlign:"center",textTransform:"uppercase",letterSpacing:"2px"},children:"Tronaldihno"}),Object(r.jsx)(D,{})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),c(t),i(t)}))},Q=[n(16).a],U=Object(O.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(console.log("REDUCER: ",e),e.type){case d:return Object(g.a)(Object(g.a)({},t),{},{pending:!0});case f:return Object(g.a)(Object(g.a)({},t),{},{pending:!1,quote:e.quote,date:e.date});case j:return Object(g.a)(Object(g.a)({},t),{},{pending:!1,error:e.error});default:return t}}),x,O.a.apply(void 0,Q));a.a.render(Object(r.jsx)(b.a,{store:U,children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(M,{})})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.8d2cb9d4.chunk.js.map