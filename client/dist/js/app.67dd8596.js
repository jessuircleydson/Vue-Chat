(function(t){function e(e){for(var i,r,a=e[0],c=e[1],u=e[2],p=0,f=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11f4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r=(n("5c0b"),n("2877")),a={},c=Object(r["a"])(a,s,o,!1,null,null,null),u=c.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("h3",{staticStyle:{"text-align":"center"}},[t._v("Realtime Vue Chat")]),i("img",{attrs:{alt:"Vue logo",src:n("cf05"),width:"40px"}}),t.nickFilled?t._e():i("NickInput"),t.nickFilled?i("div",[i("Chat")],1):t._e()],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{attrs:{id:"messages"}},t._l(t.msgs,(function(e){return n("div",{key:e,class:["message-item",{me:e.myMsg}]},[n("span",{staticClass:"nickname"},[t._v(t._s(e.nickn))]),n("br"),n("span",{staticClass:"msgText"},[t._v(" "+t._s(e.text)+" ")])])})),0),n("ChatControls",{attrs:{"send-m":t.sendMsg},on:{changeInputValue:function(e){t.textMsg=e}}})],1)},d=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"form"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{id:"input",type:"text",autocomplete:"off"},domProps:{value:t.inputVal},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMsg.apply(null,arguments)},input:function(e){e.target.composing||(t.inputVal=e.target.value)}}}),n("button",{on:{click:t.sendM}},[t._v("Enviar")])])},g=[],k={data:function(){return{msg:""}},props:{sendM:Function,inputValue:String},methods:{sendMsg:function(){this.sendM(),this.inputVal=""}},computed:{inputVal:{get:function(){return this.msg},set:function(t){this.msg=t,this.$emit("changeInputValue",this.msg)}}}},v=k,b=(n("ea17"),Object(r["a"])(v,h,g,!1,null,null,null)),y=b.exports,_=n("8e27"),x=n.n(_),N={name:"Chat",components:{ChatControls:y},data:function(){return{socket:{},textMsg:"",msgs:[],didiISendIt:!1}},methods:{sendMsg:function(){this.msgs.push({text:this.textMsg,myMsg:!0,nickn:this.$store.state.nick}),this.socket.emit("chat message",{text:this.textMsg,myMsg:!1,nickn:this.$store.state.nick})}},created:function(){var t=window.location.origin;this.socket=x()(t)},mounted:function(){var t=this;this.socket.on("chat message",(function(e){t.msgs.push(e)}))}},w=N,C=(n("812b"),Object(r["a"])(w,m,d,!1,null,"ce8fdaaa",null)),M=C.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nickname-container"},[n("p",[t._v("Digite seu nome")]),t.setNickName?n("button",{staticClass:"btn-nick",on:{click:t.setNick}},[t._v("Clique para iniciar")]):t._e(),t.setNickName?n("p",{staticClass:"label-nick"},[t._v("ou pressione Enter")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.setNickName,expression:"setNickName"}],attrs:{type:"text",placeholder:"Ex: Pedro Jorge"},domProps:{value:t.setNickName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setNick.apply(null,arguments)},input:function(e){e.target.composing||(t.setNickName=e.target.value)}}})])},j=[],$={data:function(){return{nickname:""}},methods:{setNick:function(){this.$store.state.nick=this.setNickName,this.$store.state.nickNameFilled=!0}},computed:{setNickName:{get:function(){return this.nickname},set:function(t){this.nickname=t}}}},V=$,E=(n("9ef4"),Object(r["a"])(V,O,j,!1,null,"24f324fe",null)),P=E.exports,S={name:"Home",components:{Chat:M,NickInput:P},computed:{nickFilled:function(){return this.$store.state.nickNameFilled}}},F=S,I=Object(r["a"])(F,p,f,!1,null,null,null),T=I.exports;i["a"].use(l["a"]);var J=[{path:"/",name:"Home",component:T}],H=new l["a"]({mode:"history",base:"/",routes:J}),q=H,D=n("2f62");i["a"].use(D["a"]);var R=new D["a"].Store({state:{nick:"",nickNameFilled:!1},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:q,store:R,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"812b":function(t,e,n){"use strict";n("b905")},"9c0c":function(t,e,n){},"9ef4":function(t,e,n){"use strict";n("f514")},b905:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},ea17:function(t,e,n){"use strict";n("11f4")},f514:function(t,e,n){}});
//# sourceMappingURL=app.67dd8596.js.map