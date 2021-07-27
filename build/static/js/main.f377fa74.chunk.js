(this.webpackJsonpassignment2=this.webpackJsonpassignment2||[]).push([[0],{21:function(e,t,n){},37:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(31),r=n.n(s),a=(n(37),n(9)),o=n(10),j=n(13),l=n(12),u=n(11),b=n(2),p=(n(21),n(0)),h=function(e){var t=e.title;return Object(p.jsxs)("nav",{className:"navbar bg-primary",children:[Object(p.jsx)("h1",{children:t}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(u.b,{to:"/about",children:"About"})})]})]})};h.defaultProps={title:"Paintings from Throughout Time"};var d=h,O=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("body",{class:"mainpage",children:[Object(p.jsx)("div",{class:"Introduction",children:Object(p.jsxs)("div",{class:"container",children:[Object(p.jsxs)("div",{class:"name",children:[Object(p.jsx)("h5",{children:"I am"}),Object(p.jsx)("h1",{children:"Satyak Handa"})]}),Object(p.jsx)("div",{class:"intro-description",children:Object(p.jsx)("p",{children:"I am going into my fourth and final year at the University of British Columbia persuing a combined major in Computer Science and Statistics. Over the past three years I have taken courses in computer architeture, software engineering, machine learning, computer vision, statistical analysis, time series, and so much more."})})]})}),Object(p.jsx)("div",{class:"course",children:Object(p.jsx)("div",{class:"container",children:Object(p.jsx)("div",{class:"course-description",children:Object(p.jsx)("p",{children:" This course\u2014CPSC 455\u2014will cover web development fundamentals. It includes HTML, CSS, Javascript, NodeJS, MongoDB, etc. This project will outline works of art throughout history. You can upload new pieces by specifying the name of the work, the artist, and a link to a picture of the peice."})})})})]})}}]),n}(c.Component),m=n(15),x=n(16),f=n.n(x),g=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).showPopup=function(){e.props.history.push({pathname:"/imagepop/".concat(e.props.artistName),search:"?link=".concat(e.props.pieceLink)})},e}return Object(o.a)(n,[{key:"render",value:function(){var e={artistName:this.props.artistName,pieceName:this.props.pieceName,pieceLink:this.props.pieceLink,id:this.props.id};return console.log(e),Object(p.jsx)("li",{className:"list",children:Object(p.jsx)("center",{children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"center",alt:"",src:this.props.pieceLink}),Object(p.jsx)("br",{}),"Artist Name: ",this.props.artistName,Object(p.jsx)("br",{}),"Piece Name: ",this.props.pieceName,Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:this.showPopup,children:"Pop Out"}),Object(p.jsx)("button",{id:this.props.pieceLink,onClick:this.props.delete,children:"Delete"}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{hidden:!0,children:["ID: ",this.props.id]})]})})})}}]),n}(c.Component),v=Object(b.f)(g),y=Object(b.f)((function(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)(""),a=Object(m.a)(r,2),o=a[0],j=a[1],l=Object(c.useState)(""),u=Object(m.a)(l,2),b=u[0],h=u[1],d=Object(c.useState)(""),O=Object(m.a)(d,2),x=O[0],g=O[1];Object(c.useEffect)((function(){fetch("/api/tradingcards").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);var y=function(e){console.log("DELETE CARD CALLED"),console.log(e),f.a.delete("/api/tradingcards",{data:{id:e}}).then((function(e){console.log(e)}))},N=function(){document.getElementById("Form-Elements").reset()};return Object(p.jsxs)(c.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)("center",{children:Object(p.jsxs)("form",{id:"Form-Elements",children:[Object(p.jsx)("label",{children:"Artist Name: "}),Object(p.jsx)("input",{id:"name",type:"text",onChange:function(e){return j(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"Name of Piece: "}),Object(p.jsx)("input",{id:"piece",type:"text",onChange:function(e){return h(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:"URL: "}),Object(p.jsx)("input",{id:"url",type:"text",onChange:function(e){return g(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"button",value:"Submit",onClick:function(){return function(){var e={artistName:o,pieceName:b,pieceLink:x};f.a.post("/api/tradingcards",e).then((function(e){console.log(e),s(e)})).catch((function(e){console.log(e)})),N()}()}}),Object(p.jsx)("input",{type:"button",value:"Clear",onClick:function(){return N()}}),Object(p.jsx)("input",{type:"button",value:"Delete All",onClick:function(){f.a.delete("/api/tradingcards/all").then((function(e){console.log(e)}))}}),Object(p.jsx)("input",{type:"button",value:"Load Inital Cards",onClick:function(){fetch("/api/tradingcards/initialCards").then((function(e){return e.json()}))}})]})})}),Object(p.jsx)("div",{children:Object(p.jsx)("ul",{children:function(){if(console.log(i),i.length>=1)return i.map((function(e){return Object(p.jsx)(v,{pieceName:e.pieceName,pieceLink:e.pieceLink,artistName:e.artistName,id:e.id,delete:function(e){return y(e.target.id)}})}))}()})})]})})),N=Object(b.f)((function(e){return Object(p.jsxs)("center",{children:[Object(p.jsx)("h1",{children:"Popup Page"}),Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{className:"center",alt:"",src:e.location.search.substring(6)}),Object(p.jsx)("br",{}),"Artist Name: ",e.match.params.name]})]})})),k=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(d,{}),Object(p.jsxs)(b.c,{children:[Object(p.jsx)(b.a,{exact:!0,path:"/",component:y}),Object(p.jsx)(b.a,{exact:!0,path:"/about",component:O}),Object(p.jsx)(b.a,{exact:!0,path:"/imagepop/:name",component:N})]})]})})}}]),n}(c.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};n(62),n(63);r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.querySelector("#root")),C()}},[[64,1,2]]]);
//# sourceMappingURL=main.f377fa74.chunk.js.map