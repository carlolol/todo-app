(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)s=i[p],n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2b56":function(t,e,a){"use strict";var r=a("f6b3"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"grey lighten-4"},[a("Navbar"),a("v-content",{staticClass:"mx-4 mb-4"},[a("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-snackbar",{attrs:{timeout:4e3,top:"",color:"#3cd1c2"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[a("span",[t._v("Awesome! You added a new project.")]),a("v-btn",{attrs:{text:"",tile:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n      Close\n    ")])],1),a("v-toolbar",{attrs:{flat:"",app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",{staticClass:"font-weight-light"},[t._v("Todo")]),a("span",[t._v("App")])]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{color:"grey",text:""}},r),[a("v-icon",{attrs:{left:""}},[t._v("mdi-chevron-down")]),a("span",[t._v("Menu")])],1)]}}])},[a("v-list",t._l(t.links,function(e){return a("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-item-title",[t._v(t._s(e.text))])],1)}),1)],1),a("v-btn",{attrs:{text:"",color:"grey"}},[a("span",[t._v("Sign Out")]),a("v-icon",{attrs:{right:""}},[t._v("mdi-exit-to-app")])],1)],1),a("v-navigation-drawer",{attrs:{app:"",temporary:"",color:"#f83e70"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",column:""}},[a("v-flex",{staticClass:"mt-5"},[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:"/256_1.png"}})])],1),a("v-flex",{staticClass:"mt-1"},[a("p",{staticClass:"white--text subtitle-1"},[t._v("Mario")])]),a("v-flex",{staticClass:"mt-4 mb-3"},[a("Popup",{on:{projectAdded:function(e){t.snackbar=!0}}})],1)],1),a("v-list",t._l(t.links,function(e){return a("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-item-action",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.text))])],1)],1)}),1)],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{depressed:"",color:"#3cd1c2",tile:"",dark:"",small:""}},r),[t._v("Add new project")])]}}]),model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("v-card",[a("v-card-title",[a("h5",[t._v("Add a New Project")])]),a("v-card-text",[a("v-form",{ref:"form",staticClass:"px-3"},[a("v-text-field",{attrs:{label:"Title","prepend-icon":"mdi-folder",rules:t.inputRules},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("v-textarea",{attrs:{label:"Information","prepend-icon":"mdi-pencil",rules:t.inputRules},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("v-menu",{attrs:{"max-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{shrink:""}},[a("v-text-field",t._g({attrs:{label:"Due date","prepend-icon":"mdi-calendar-range",value:t.formattedDate,rules:t.inputRules}},r))],1)],1)]}}])},[a("v-date-picker",{model:{value:t.due,callback:function(e){t.due=e},expression:"due"}})],1),a("v-btn",{staticClass:"mx-0 mt-3",attrs:{depressed:"",tile:"",dark:"",color:"#3cd1c2",loading:t.loading},on:{click:t.submit}},[t._v("\n          Add project\n        ")])],1)],1)],1)],1)},l=[],u=a("70f2"),p=a.n(u),d=a("59ca"),v=a.n(d),f=(a("e71f"),{apiKey:"AIzaSyAhyF5L3cUApWTJdwMzxsnC58ZpmRLDPTw",authDomain:"todo-app-42c90.firebaseapp.com",databaseURL:"https://todo-app-42c90.firebaseio.com",projectId:"todo-app-42c90",storageBucket:"todo-app-42c90.appspot.com",messagingSenderId:"532380287812",appId:"1:532380287812:web:e83cc122ed39f3a3"});v.a.initializeApp(f);var m=v.a.firestore(),b=m,y={data:function(){return{title:"",content:"",due:null,inputRules:[function(t){return t.length>=3||"Minimum length is 3 characters"}],loading:!1,showDialog:!1}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){this.loading=!0;var e={title:this.title,content:this.content,due:p()(this.due,"Do MMM YYYY"),person:"Mario",status:"ongoing"};b.collection("projects").add(e).then(function(){t.loading=!1,t.showDialog=!1,t.$emit("projectAdded")})}}},computed:{formattedDate:function(){return this.due?p()(this.due,"Do MMM YYYY"):""}}},h=y,g=a("2877"),x=a("6544"),_=a.n(x),j=a("8336"),w=a("b0af"),C=a("99d9"),V=a("2e4b"),O=a("169a"),k=a("0e8f"),P=a("4bd4"),D=a("a722"),S=a("e449"),M=a("8654"),T=a("a844"),A=Object(g["a"])(h,c,l,!1,null,null,null),E=A.exports;_()(A,{VBtn:j["a"],VCard:w["a"],VCardText:C["b"],VCardTitle:C["c"],VDatePicker:V["a"],VDialog:O["a"],VFlex:k["a"],VForm:P["a"],VLayout:D["a"],VMenu:S["a"],VTextField:M["a"],VTextarea:T["a"]});var I={components:{Popup:E},data:function(){return{drawer:!1,links:[{icon:"mdi-view-dashboard",text:"Dashboard",route:"/"},{icon:"mdi-folder",text:"My Projects",route:"/projects"},{icon:"mdi-account",text:"Team",route:"/team"}],snackbar:!1}}},L=I,B=a("5bc1"),Y=a("8212"),$=a("132d"),R=a("8860"),F=a("da13"),z=a("1800"),N=a("5d23"),G=a("f774"),J=a("2db4"),W=a("2fa4"),U=a("71d9"),H=a("2a7f"),K=Object(g["a"])(L,s,i,!1,null,null,null),Z=K.exports;_()(K,{VAppBarNavIcon:B["a"],VAvatar:Y["a"],VBtn:j["a"],VFlex:k["a"],VIcon:$["a"],VLayout:D["a"],VList:R["a"],VListItem:F["a"],VListItemAction:z["a"],VListItemContent:N["a"],VListItemTitle:N["b"],VMenu:S["a"],VNavigationDrawer:G["a"],VSnackbar:J["a"],VSpacer:W["a"],VToolbar:U["a"],VToolbarTitle:H["a"]});var q={name:"App",components:{Navbar:Z},data:function(){return{}}},Q=q,X=a("7496"),tt=a("a75b"),et=Object(g["a"])(Q,n,o,!1,null,null,null),at=et.exports;_()(et,{VApp:X["a"],VContent:tt["a"]});var rt=a("8c4f"),nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("h1",{staticClass:"subtitle-1 grey--text"},[t._v("Dashboard")]),a("v-container",{staticClass:"my-5"},[a("v-layout",{staticClass:"mb-3",attrs:{row:""}},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",text:"",color:"grey"},on:{click:function(e){return t.sortBy("title")}}},r),[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-folder")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By project name")])],1)]}}])},[a("span",[t._v("Sort projects by project name")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{small:"",text:"",color:"grey"},on:{click:function(e){return t.sortBy("person")}}},r),[a("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-account")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By person")])],1)]}}])},[a("span",[t._v("Sort projects by person")])])],1),t._l(t.projects,function(e){return a("v-card",{key:e.id,staticClass:"pa-0",attrs:{flat:""}},[a("v-layout",{class:"pa-3 project "+e.status,attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Project title")]),a("div",[t._v(t._s(e.title))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Person")]),a("div",[t._v(t._s(e.person))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Due by")]),a("div",[t._v(t._s(e.due))])]),a("v-flex",{attrs:{xs2:"",sm4:"",md2:""}},[a("div",{staticClass:"text-right"},[a("v-chip",{class:e.status+" white--text caption my-2",attrs:{small:"",color:t.getColor(e.status)}},[t._v("\n              "+t._s(e.status)+"\n            ")])],1)])],1),a("v-divider")],1)})],2)],1)},ot=[],st=(a("8e6e"),a("456d"),a("bd86"));a("ac6a"),a("55dd");function it(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function ct(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?it(a,!0).forEach(function(e){Object(st["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):it(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var lt={data:function(){return{projects:[]}},methods:{getColor:function(t){return"ongoing"===t?"#ffaa2c":"complete"===t?"#3cd1c2":"#f83e70"},sortBy:function(t){this.projects.sort(function(e,a){return e[t]<a[t]?-1:1})}},created:function(){var t=this;b.collection("projects").onSnapshot(function(e){var a=e.docChanges();a.forEach(function(e){"added"===e.type&&t.projects.push(ct({},e.doc.data(),{id:e.doc.id}))})})}},ut=lt,pt=(a("2b56"),a("cc20")),dt=a("a523"),vt=a("ce7e"),ft=a("3a2f"),mt=Object(g["a"])(ut,nt,ot,!1,null,null,null),bt=mt.exports;_()(mt,{VBtn:j["a"],VCard:w["a"],VChip:pt["a"],VContainer:dt["a"],VDivider:vt["a"],VFlex:k["a"],VIcon:$["a"],VLayout:D["a"],VTooltip:ft["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects"},[a("h1",{staticClass:"subtitle-1 grey--text"},[t._v("Projects")]),a("v-container",{staticClass:"my-5"},[a("v-expansion-panels",t._l(t.myProjects,function(e){return a("v-expansion-panel",{key:e.title},[a("v-expansion-panel-header",[t._v(t._s(e.title))]),a("v-expansion-panel-content",{staticClass:"grey--text"},[a("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.due))]),a("div",[t._v(t._s(e.content))])])],1)}),1)],1)],1)},ht=[];function gt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function xt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?gt(a,!0).forEach(function(e){Object(st["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):gt(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var _t={data:function(){return{projects:[]}},computed:{myProjects:function(){return this.projects.filter(function(t){return"Mario"===t.person})}},created:function(){var t=this;b.collection("projects").onSnapshot(function(e){var a=e.docChanges();a.forEach(function(e){"added"===e.type&&t.projects.push(xt({},e.doc.data(),{id:e.doc.id}))})})}},jt=_t,wt=a("cd55"),Ct=a("49e2"),Vt=a("c865"),Ot=a("0393"),kt=Object(g["a"])(jt,yt,ht,!1,null,null,null),Pt=kt.exports;_()(kt,{VContainer:dt["a"],VExpansionPanel:wt["a"],VExpansionPanelContent:Ct["a"],VExpansionPanelHeader:Vt["a"],VExpansionPanels:Ot["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"team"},[a("h1",{staticClass:"subtitle-1 grey--text"},[t._v("Team")]),a("v-container",{staticClass:"my-5"},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.team,function(e){return a("v-flex",{key:e.name,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[a("v-card",{staticClass:"text-center ma-3",attrs:{flat:""}},[a("v-responsive",{staticClass:"pt-4"},[a("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"100"}},[a("img",{attrs:{src:e.avatar}})])],1),a("v-card-text",[a("div",{staticClass:"subtitle-1"},[t._v(t._s(e.name))]),a("div",{staticClass:"grey--text"},[t._v(t._s(e.role))])]),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"grey"}},[a("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-message-text")]),a("span",[t._v("Message")])],1)],1)],1)],1)}),1)],1)],1)},St=[],Mt={data:function(){return{team:[{name:"Mario",role:"Web Developer",avatar:"/256_1.png"},{name:"Ryu",role:"Graphic Designer",avatar:"/256_2.png"},{name:"Chun Li",role:"Web Developer",avatar:"/256_3.png"},{name:"Gouken",role:"Social Media Maverick",avatar:"/256_4.png"},{name:"Yoshi",role:"Sales Guru",avatar:"/256_5.png"}]}}},Tt=Mt,At=a("6b53"),Et=Object(g["a"])(Tt,Dt,St,!1,null,null,null),It=Et.exports;_()(Et,{VAvatar:Y["a"],VBtn:j["a"],VCard:w["a"],VCardActions:C["a"],VCardText:C["b"],VContainer:dt["a"],VFlex:k["a"],VIcon:$["a"],VLayout:D["a"],VResponsive:At["a"]}),r["a"].use(rt["a"]);var Lt=new rt["a"]({mode:"history",base:"/",routes:[{path:"/",name:"dashboard",component:bt},{path:"/projects",name:"projects",component:Pt},{path:"/team",name:"team",component:It}]}),Bt=a("f309");r["a"].use(Bt["a"]);var Yt=new Bt["a"]({icons:{iconfont:"mdi"},theme:{primary:"#9652ff",success:"#3cd1c2",info:"#ffaa2c",error:"#f83e70"}});r["a"].config.productionTip=!1,new r["a"]({router:Lt,vuetify:Yt,render:function(t){return t(at)}}).$mount("#app")},f6b3:function(t,e,a){}});
//# sourceMappingURL=app.9f8aa512.js.map