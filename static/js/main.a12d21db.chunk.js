(this["webpackJsonphellop-react-example"]=this["webpackJsonphellop-react-example"]||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),o=(a(23),a(24),a(25),a(2)),c=a(3),i=a(4),u=a(5),m=(a(7),a(17)),d=a.n(m),p=(a(43),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).deletePost=function(){var e=n.props,t=e.posts,a=e.postId,r=t.filter((function(e){return e.id!==a}));n.props.handler(r)},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{onClick:function(t){return e.deletePost(t)}},"X")}}]),a}(n.Component)),h=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updatePosts=function(e){n.setState({posts:e})},n.state={posts:[],errMessage:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){console.log(t),e.setState({posts:t.data.slice(0,10).map((function(e){return{id:e.id,title:"Post # "+e.id}}))})})).catch((function(t){console.log(t),e.setState({errMessage:t.message})}))}},{key:"render",value:function(){var e=this,t=this.state.posts;return this.state.errMessage?r.a.createElement("div",{style:{color:"red"}},this.state.errMessage):r.a.createElement("div",null,r.a.createElement("table",{id:"posts_Tbl"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Post Id"),r.a.createElement("th",null,"Post Title"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.title),r.a.createElement("td",null,r.a.createElement(p,{posts:e.state.posts,postId:t.id,handler:e.updatePosts})))})))))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).login=function(){var e=n.validateCredentials();n.setState({message:e},(function(){n.state.message||n.setState({isLoggedIn:!0})}))},n.validateCredentials=function(){var e="";return""==n.state.username||""==n.state.password?e="username, passowrd are required":"admin"==n.state.username&&"admin"==n.state.password||(e="username or passowrd is invalid, For testing, you can use admin/admin"),e},n.state={username:"",password:"",message:"",isLoggedIn:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.state.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"successLogin"},"Welcome: ",this.state.username),r.a.createElement(h,null)):r.a.createElement("div",null,r.a.createElement("div",{className:"errorMsg",style:{height:"30px",marginTop:"10px"}},this.state.message),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"UserName:"),r.a.createElement("td",null,r.a.createElement("input",{id:"username",type:"text",value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Password:"),r.a.createElement("td",null,r.a.createElement("input",{id:"password",type:"password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",{onClick:this.login},"Login"))))))}}]),a}(n.Component);var E=function(){return r.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.a12d21db.chunk.js.map