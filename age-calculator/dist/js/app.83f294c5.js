(function(e){function s(s){for(var a,o,i=s[0],c=s[1],d=s[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(s);while(f.length)f.shift()();return n.push.apply(n,d||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],a=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(a=!1)}a&&(n.splice(s--,1),e=o(o.s=t[0]))}return e}var a={},r={app:0},n=[];function o(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,s,t){o.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,s){if(1&s&&(e=o(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)o.d(t,a,function(s){return e[s]}.bind(null,a));return t},o.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(s,"a",s),s},o.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=s,i=i.slice();for(var d=0;d<i.length;d++)s(i[d]);var l=c;n.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"0a5a":function(e,s,t){"use strict";t("fb37")},"2fc4":function(e,s,t){},"412b":function(e,s,t){},4678:function(e,s,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var s=n(e);return t(s)}function n(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);var a=t("2b0e"),r=function(){var e=this,s=e._self._c;return s("div",{attrs:{id:"app"}},[s("AgeCalculator")],1)},n=[],o=function(){var e=this,s=e._self._c;return s("div",{staticClass:"ac"},[s("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function({handleSubmit:t}){return[s("form",{on:{submit:function(s){return s.preventDefault(),t(e.calculateAge)}}},[s("div",{staticClass:"ac__input"},[s("ValidationProvider",{staticClass:"ac__input--field",attrs:{rules:"required|date:day",vid:"day"},scopedSlots:e._u([{key:"default",fn:function({errors:t}){return[s("label",{attrs:{for:"day"}},[e._v("Day")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],class:{"is-invalid":!!t.length},attrs:{name:"day",placeholder:"DD",type:"number"},domProps:{value:e.day},on:{blur:function(s){return e.formatDay()},input:function(s){s.target.composing||(e.day=s.target.value)}}}),s("span",[e._v(e._s(t[0]))])]}}],null,!0)}),s("ValidationProvider",{staticClass:"ac__input--field",attrs:{rules:"required|date:month",vid:"month"},scopedSlots:e._u([{key:"default",fn:function({errors:t}){return[s("label",{attrs:{for:"month"}},[e._v("Month")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],class:{"is-invalid":!!t.length},attrs:{name:"month",placeholder:"MM",type:"number"},domProps:{value:e.month},on:{blur:function(s){return e.formatMonth()},input:function(s){s.target.composing||(e.month=s.target.value)}}}),s("span",[e._v(e._s(t[0]))])]}}],null,!0)}),s("ValidationProvider",{staticClass:"ac__input--field",attrs:{rules:"required|date:year",vid:"year"},scopedSlots:e._u([{key:"default",fn:function({errors:t}){return[s("label",{attrs:{for:"year"}},[e._v("Year")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],class:{"is-invalid":!!t.length},attrs:{name:"year",placeholder:"YYYY",type:"number"},domProps:{value:e.year},on:{input:function(s){s.target.composing||(e.year=s.target.value)}}}),s("span",[e._v(e._s(t[0]))])]}}],null,!0)})],1),s("div",{staticClass:"ac__submit"},[s("div",{staticClass:"ac__submit--line"}),s("button",{staticClass:"ac__submit--button",attrs:{type:"submit"}},[s("img",{attrs:{src:"icon-arrow.svg"}})])])])]}}])}),s("div",{staticClass:"ac__output"},[s("div",[s("span",[e._v(e._s(e.result.years))]),e._v(" years ")]),s("div",[s("span",[e._v(e._s(e.result.months))]),e._v(" months ")]),s("div",[s("span",[e._v(e._s(e.result.days))]),e._v(" days ")])])],1)},i=[],c=t("c1df"),d=t.n(c),l={name:"AgeCalculator",data(){return{day:"",month:"",year:"",result:{years:"--",months:"--",days:"--"}}},methods:{calculateAge(){let e=d()({year:this.year,month:this.month-1,day:this.day});if(!e.isValid())return void this.displayError("Must be a valid date");let s=d()().diff(e,"ms");if(s<0)return void this.displayError("Must be in the past");let t=d.a.duration(s);this.result.years=t.years(),this.result.months=t.months(),this.result.days=t.days()},displayError(e){this.$refs.form.setErrors({day:[e]})},formatDay(){this.day=this.makeDoubleDigits(this.day)},formatMonth(){this.month=this.makeDoubleDigits(this.month)},makeDoubleDigits(e){return("0"+e).slice(-2)}}},u=l,f=(t("94dd"),t("2877")),b=Object(f["a"])(u,o,i,!1,null,"e2bcc482",null),j=b.exports,m={name:"App",components:{AgeCalculator:j}},p=m,h=(t("0a5a"),Object(f["a"])(p,r,n,!1,null,null,null)),v=h.exports,y=(t("2fc4"),t("7bb1")),g=t("4c93");Object(y["c"])("required",{...g["a"],message:"This field is required"});const _={message:(e,s)=>"year"===s[0]?"Must be in the past":"Must be a valid "+e,validate(e,s){switch(s[0]){case"day":return e>=1&&e<=31;case"month":return e>=1&&e<=12;case"year":return e<=(new Date).getFullYear()}return!1}};Object(y["c"])("date",_),Object(y["d"])("eager"),a["a"].component("ValidationProvider",y["b"]),a["a"].component("ValidationObserver",y["a"]),new a["a"]({render:e=>e(v)}).$mount("#app")},"94dd":function(e,s,t){"use strict";t("412b")},fb37:function(e,s,t){}});
//# sourceMappingURL=app.83f294c5.js.map