(function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0526":function(e,t,n){},"158c":function(e,t,n){"use strict";n("ff8d")},"2b6f":function(e,t,n){"use strict";n("0526")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{genere:e.filteredGender},on:{genere:e.setGenere}}),n("main",{staticClass:"container box-card d-flex justify-content-center flex-wrap my-3"},e._l(e.filteredGender,(function(e,t){return n("div",{key:t,staticClass:"album-card col-6 col-md-3 col-lg-2 text-center shadow p-2"},[n("BoxCard",{attrs:{image:e.poster,title:e.title,author:e.author,year:e.year}})],1)})),0)],1)},a=[],i=(n("4de4"),n("d3b7"),n("caad"),n("2532"),n("bc3a")),c=n.n(i),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"container d-flex justify-content-between align-items-center"},[e._m(0),n("div",[n("label",{staticClass:"text-white mx-2",attrs:{for:"gender"}},[e._v("Scegli il tuo genere preferito")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectGenre,expression:"selectGenre"}],attrs:{name:"gender",id:"gender"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectGenre=t.target.multiple?n:n[0]},e.selectAlbum]}},e._l(e.genere,(function(t,r){return n("option",{key:r,domProps:{value:t.genre}},[e._v(e._s(t.genre))])})),0)])])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("figure",[n("img",{staticClass:"h-100 p-2",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png",alt:"Spotify Logo"}})])}],s={name:"Header",props:["genere"],data:function(){return{selectGenre:""}},methods:{selectAlbum:function(){this.$emit("genere",this.selectGenre)}}},f=s,p=(n("2b6f"),n("2877")),d=Object(p["a"])(f,u,l,!1,null,"0f23646a",null),m=d.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("figure",[n("img",{staticClass:"img-fluid p-3",attrs:{src:e.image,alt:e.title}})]),n("h5",[e._v(e._s(e.title))]),n("span",[e._v(e._s(e.author))]),n("br"),n("data",[e._v(e._s(e.year))])])},h=[],v={name:"BoxCard",props:["image","title","author","year"]},b=v,_=(n("158c"),Object(p["a"])(b,g,h,!1,null,"5794bdc0",null)),y=_.exports,x={name:"App",components:{Header:m,BoxCard:y},data:function(){return{albums:[],genere:""}},computed:{filteredGender:function(){var e=this;return this.albums.filter((function(t){return t.genre.includes(e.genere)}))}},methods:{getAlbums:function(e){var t=this;c.a.get(e).then((function(e){t.albums=e.data.response}))},setGenere:function(e){this.genere=e}},mounted:function(){this.getAlbums("https://flynn.boolean.careers/exercises/api/array/music")}},w=x,j=(n("5c0b"),Object(p["a"])(w,o,a,!1,null,null,null)),O=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},ff8d:function(e,t,n){}});
//# sourceMappingURL=app.b29a363a.js.map