(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{selectded:e.mioMetodo}}),n("main",{staticClass:"container"},[n("BoxCard")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"container d-flex justify-content-between align-items-center"},[e._m(0),n("div",[n("label",{staticClass:"text-white mx-2",attrs:{for:"gender"}},[e._v("Scegli il tuo genere preferito")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedGender,expression:"selectedGender"}],attrs:{name:"gender",id:"gender"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedGender=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[e._v("--")]),n("option",{attrs:{value:"Rock"}},[e._v("Rock")]),n("option",{attrs:{value:"Pop"}},[e._v("Pop")]),n("option",{attrs:{value:"Jazz"}},[e._v("Jazz")]),n("option",{attrs:{value:"Metal"}},[e._v("Metal")])])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",[n("img",{staticClass:"h-100 p-2",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",alt:"Spotify Logo"}})])}],s={name:"Header",data:function(){return{selectedGender:""}}},l=s,u=(n("fa47"),n("2877")),d=Object(u["a"])(l,i,c,!1,null,"1fb4c708",null),f=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"box-card d-flex justify-content-center flex-wrap my-3"},[e.isLoading?n("div",{staticClass:"loader  d-flex justify-content-center align-items-center"},[e._v("Loading...")]):e._l(e.albums,(function(t,r){return n("div",{key:r,staticClass:"album-card col-6 col-md-3 col-lg-2 text-center shadow p-2"},[n("figure",[n("img",{staticClass:"img-fluid p-3",attrs:{src:t.poster,alt:t.title}})]),n("h5",[e._v(e._s(t.title))]),n("span",[e._v(e._s(t.author))]),n("br"),n("data",[e._v(e._s(t.year))])])}))],2)},v=[],m=n("bc3a"),g=n.n(m),h={name:"BoxCard",data:function(){return{albums:[],isLoading:!1}},mounted:function(){var e=this;this.isLoading=!0,g.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.albums=t.data.response,e.isLoading=!1}))}},_=h,b=(n("e89a"),Object(u["a"])(_,p,v,!1,null,"44ff01e4",null)),y=b.exports,x={name:"App",components:{Header:f,BoxCard:y},methods:{mioMetodo:function(){console.log("ho selezionato")}}},w=x,j=(n("5c0b"),Object(u["a"])(w,o,a,!1,null,null,null)),O=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"589d":function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},e89a:function(e,t,n){"use strict";n("eaa0")},eaa0:function(e,t,n){},fa47:function(e,t,n){"use strict";n("589d")}});
//# sourceMappingURL=app.f683abc7.js.map