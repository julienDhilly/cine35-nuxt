(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(t,e,r){"use strict";var n={components:{C35Header:r(70).a}},o=r(2),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("c35-header"),this._v(" "),e("div",{staticClass:"container py-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("nuxt")],1)])])],1)}),[],!1,null,null,null);e.a=component.exports},120:function(t,e,r){"use strict";var n={components:{C35Header:r(70).a}},o=r(2),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("c35-header"),this._v(" "),this._m(0),this._v(" "),e("nuxt")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container py-4"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"c35-responsive-ads",attrs:{id:"google-ads-test-banner"}})])])}],!1,null,null,null);e.a=component.exports},121:function(t,e,r){"use strict";var n={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(t){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100||t.percent<=0)&&(t.skipTimerCount=1,t.reversed=!t.reversed))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},o=(r(164),r(2)),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.a=component.exports},163:function(t,e,r){"use strict";var n=r(66);r.n(n).a},164:function(t,e,r){"use strict";var n=r(67);r.n(n).a},174:function(t,e,r){"use strict";r.r(e);r(85),r(22),r(46),r(64),r(6);var n=r(1),o=r(47),c=r(191),l=r(9),d={name:"C35Select",props:{name:{type:String,required:!0},label:{type:String,required:!0},collection:{type:Array,required:!0}},data:function(){return{selected:{}}},watch:{selected:function(t){this.selectModel(t)}},methods:{selectModel:function(t){t&&this.$emit("select",t)}}},m=r(2),v=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:t.name}},[t._v(t._s(t.label))]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"custom-select",attrs:{id:t.name},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?r:r[0]}}},[t._l(t.collection,(function(e){return[r("option",{key:e.id,domProps:{value:e.id}},[t._t("option",null,{model:e})],2)]}))],2)])}),[],!1,null,null,null).exports,f={layout:"admin",components:{C35Breadcrumb:l.a,C35Select:v},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("actors/fetch");case 3:return e.next=5,r.dispatch("directors/fetch");case 5:case"end":return e.stop()}}),e)})))()},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.params,c=n.id,l=[{routeName:"admin",title:"Admin"},{routeName:"admin-movies",title:"Movies"}],"new"===c){e.next=14;break}return e.next=6,r.dispatch("movies/fetch");case 6:if(!(d=Object(o.cloneDeep)(r.getters["movies/findById"](c)))){e.next=11;break}return e.abrupt("return",{id:c,model:d,crumbs:[].concat(l,[{title:"Edit",active:!0}])});case 11:return e.abrupt("return",{id:c,notFound:!0,crumbs:[].concat(l,[{title:"Not found",active:!0}])});case 12:e.next=15;break;case 14:return e.abrupt("return",{crumbs:[].concat(l,[{title:"New",active:!0}])});case 15:case"end":return e.stop()}}),e)})))()},data:function(){return{notFound:!1,id:null,model:{id:null,name:null,duration:null,synopsis:null,preview:null,cover:null,actors:[],directors:[]},limitedActors:[],limitedDirectors:[]}},computed:{actors:function(){return this.$store.getters["actors/collection"]},directors:function(){return this.$store.getters["directors/collection"]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.builLimitedActors(),t.builLimitedDirectors();case 2:case"end":return e.stop()}}),e)})))()},methods:{builLimitedActors:function(){var t=this.model.actors.map((function(t){return t.id}));this.limitedActors=this.actors.filter((function(e){return!t.includes(e.id)}))},builLimitedDirectors:function(){var t=this.model.directors.map((function(t){return t.id}));this.limitedDirectors=this.directors.filter((function(e){return!t.includes(e.id)}))},onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d,m,v,f,h,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.checkValidity()){e.next=7;break}return r=t.model,n=r.name,o=r.duration,l=r.preview,d=r.cover,m=r.synopsis,v=r.actors,f=r.directors,h=t.$fireStore.collection("movies"),_=t.model.id||Object(c.a)(),e.next=6,h.doc(_).set({name:n,synopsis:m,duration:o,preview:l,cover:d,actors:v.map((function(t){return t.id})),directors:f.map((function(t){return t.id}))});case 6:t.$router.push({name:"admin-movies"});case 7:case"end":return e.stop()}}),e)})))()},onRemoveActor:function(t){var e=this.model.actors.findIndex((function(e){return e.id===t.id}));e>-1&&(this.model.actors.splice(e,1),this.builLimitedActors())},onSelectActor:function(t){var e=this.$store.getters["actors/findById"](t);this.model.actors.push(e),this.builLimitedActors()},onRemoveDirector:function(t){var e=this.model.directors.findIndex((function(e){return e.id===t.id}));e>-1&&(this.model.directors.splice(e,1),this.builLimitedDirectors())},onSelectDirector:function(t){var e=this.$store.getters["directors/findById"](t);e?(this.model.directors.push(e),this.builLimitedDirectors()):console.error("unknown director",t)}}},h=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("c35-breadcrumb",{attrs:{crumbs:t.crumbs}}),t._v(" "),t.notFound?[t._v("\n    Model not found\n  ")]:[r("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.name,expression:"model.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",required:""},domProps:{value:t.model.name},on:{input:function(e){e.target.composing||t.$set(t.model,"name",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"duration"}},[t._v("Duration (s)")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.duration,expression:"model.duration"}],staticClass:"form-control",attrs:{id:"duration",type:"number",required:""},domProps:{value:t.model.duration},on:{input:function(e){e.target.composing||t.$set(t.model,"duration",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"preview"}},[t._v("Preview image")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.preview,expression:"model.preview"}],staticClass:"form-control",attrs:{id:"preview",type:"text",required:""},domProps:{value:t.model.preview},on:{input:function(e){e.target.composing||t.$set(t.model,"preview",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"cover"}},[t._v("Cover image")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.cover,expression:"model.cover"}],staticClass:"form-control",attrs:{id:"cover",type:"text",required:""},domProps:{value:t.model.cover},on:{input:function(e){e.target.composing||t.$set(t.model,"cover",e.target.value)}}})])])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"mb-3"},[r("label",[t._v("Actors")]),t._v(" "),r("ul",{staticClass:"list-group"},[t._l(t.model.actors,(function(e){return[r("li",{key:e.id,staticClass:"list-group-item d-flex justify-content-between align-items-stretch align-items-center"},[t._v("\n                  "+t._s(e.firstName)+"\n                  "),r("div",[r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.onRemoveActor(e)}}},[t._v("\n                      remove\n                    ")])])])]}))],2)]),t._v(" "),r("c35-select",{attrs:{name:"actors",label:"Add an actor",collection:t.limitedActors},on:{select:t.onSelectActor},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n              "+t._s(e.model.firstName)+"\n            ")]}}])})],1),t._v(" "),r("div",{staticClass:"col-12 col-sm-6"},[r("div",{staticClass:"mb-3"},[r("label",[t._v("Directors")]),t._v(" "),r("ul",{staticClass:"list-group"},[t._l(t.model.directors,(function(e){return[r("li",{key:e.id,staticClass:"list-group-item d-flex justify-content-between align-items-stretch align-items-center"},[t._v("\n                  "+t._s(e.firstName)+"\n                  "),r("div",[r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.onRemoveDirector(e)}}},[t._v("\n                      remove\n                    ")])])])]}))],2)]),t._v(" "),r("c35-select",{attrs:{name:"directors",label:"Add an director",collection:t.limitedDirectors},on:{select:t.onSelectDirector},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n              "+t._s(e.model.firstName)+"\n            ")]}}])})],1)]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n        Save\n      ")])])]],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"synopsis"}},[this._v("Synopsis")]),this._v(" "),e("textarea",{staticClass:"form-control",attrs:{id:"synopsis",rows:"3"}})])}],!1,null,null,null);e.default=h.exports},175:function(t,e,r){"use strict";r.r(e);r(6);var n=r(1),o=r(47),c=r(191),l={layout:"admin",components:{C35Breadcrumb:r(9).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.params,c=n.id,l=[{routeName:"admin",title:"Admin"},{routeName:"admin-actors",title:"Actors"}],"new"===c){e.next=14;break}return e.next=6,r.dispatch("actors/fetch");case 6:if(!(d=Object(o.cloneDeep)(r.getters["actors/findById"](c)))){e.next=11;break}return e.abrupt("return",{id:c,model:d,crumbs:[].concat(l,[{title:"Edit",active:!0}])});case 11:return e.abrupt("return",{id:c,notFound:!0,crumbs:[].concat(l,[{title:"Not found",active:!0}])});case 12:e.next=15;break;case 14:return e.abrupt("return",{crumbs:[].concat(l,[{title:"New",active:!0}])});case 15:case"end":return e.stop()}}),e)})))()},data:function(){return{notFound:!1,id:null,model:{id:null,firstName:null,lastName:null},crumbs:[{routeName:"admin",title:"Admin"},{routeName:"admin-actors",title:"Actors"},{title:"Create",active:!0}]}},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.checkValidity()){e.next=7;break}return r=t.model,n=r.firstName,o=r.lastName,l=t.$fireStore.collection("actors"),d=t.model.id||Object(c.a)(),e.next=6,l.doc(d).set({firstName:n,lastName:o});case 6:t.$router.push({name:"admin-actors"});case 7:case"end":return e.stop()}}),e)})))()}}},d=r(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("c35-breadcrumb",{attrs:{crumbs:t.crumbs}}),t._v(" "),t.notFound?[t._v("\n    Model not found\n  ")]:[r("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"actorFirstName"}},[t._v("Prénom")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.firstName,expression:"model.firstName"}],staticClass:"form-control",attrs:{id:"actorFirstName",type:"text",required:""},domProps:{value:t.model.firstName},on:{input:function(e){e.target.composing||t.$set(t.model,"firstName",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"actorLastName"}},[t._v("Nom")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.lastName,expression:"model.lastName"}],staticClass:"form-control",attrs:{id:"actorLastName",type:"text",required:""},domProps:{value:t.model.lastName},on:{input:function(e){e.target.composing||t.$set(t.model,"lastName",e.target.value)}}})]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n        Save\n      ")])])]],2)}),[],!1,null,null,null);e.default=component.exports},176:function(t,e,r){"use strict";r.r(e);r(6);var n=r(1),o=r(9),c=r(35),l={layout:"admin",components:{C35Breadcrumb:o.a,C35AdminList:c.a},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("actors/fetch");case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{crumbs:[{routeName:"admin",title:"Admin"},{title:"Actors",active:!0}]}},computed:{collection:function(){return this.$store.getters["actors/collection"]}},methods:{getActorFullName:function(t){return"".concat(t.firstName," ").concat(t.lastName)},onDelete:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.$store.dispatch("actors/delete",t);case 1:case"end":return r.stop()}}),r)})))()},onEdit:function(t){this.$nuxt.$router.push({name:"admin-actors-id",params:{id:t.id}})}}},d=r(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("c35-breadcrumb",{attrs:{crumbs:t.crumbs}}),t._v(" "),r("c35-admin-list",{attrs:{collection:t.collection},on:{edit:t.onEdit,delete:t.onDelete},scopedSlots:t._u([{key:"title",fn:function(e){var n=e.model;return[r("span",[t._v(t._s(t.getActorFullName(n)))])]}}])}),t._v(" "),r("nuxt-link",{staticClass:"btn btn-primary mt-4",attrs:{to:{name:"admin-actors-id",params:{id:"new"}}}},[t._v("\n    Create new actor\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},177:function(t,e,r){"use strict";r.r(e);r(6);var n=r(1),o={components:{C35MoviePreviewList:r(69).a},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("movies/fetch");case 3:case"end":return e.stop()}}),e)})))()},computed:{movies:function(){return this.$store.getters["movies/collection"]}}},c=r(2),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-md"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-lg-8"},[e("c35-movie-preview-list",{attrs:{movies:this.movies,limited:"",title:"A l'affiche","link-to-more":"movies-onrelease"}}),this._v(" "),e("c35-movie-preview-list",{staticClass:"mt-3",attrs:{movies:this.movies,limited:"",title:"Prochainement"}})],1),this._v(" "),this._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 col-lg-4"},[r("div",{staticClass:"c35-sidebar-block"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h3",[t._v("Actualités")]),t._v(" "),r("div",{staticClass:"mt-3"},[r("div",{staticClass:"c35-sidebar-content-wrapper"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-5 pr-1 my-auto"},[r("div",{staticClass:"c35-sibera-content-title"},[t._v("\n                        événement\n                      ")])]),t._v(" "),r("div",{staticClass:"col-7 pl-1"},[r("div",{staticClass:"c35-sibera-content-desc"},[t._v("\n                        Festibal\n                        "),r("span",{staticClass:"text-primary font-weight-bold"},[t._v("\n                          Court métrange\n                        ")]),t._v("\n                        à Rennes du 25 mars au 14 avril 2019\n                      ")])])])]),t._v(" "),r("div",{staticClass:"c35-sidebar-content-wrapper"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-5 pr-1 my-auto"},[r("div",{staticClass:"c35-sibera-content-title"},[t._v("\n                        avant-première\n                      ")])]),t._v(" "),r("div",{staticClass:"col-7 pl-1"},[r("div",{staticClass:"c35-sibera-content-desc"},[r("span",{staticClass:"text-primary font-weight-bold"},[t._v("\n                          All inclusive\n                        ")]),t._v("\n                        au CGR La Mézière. Mardi 12 février à 21h30\n                      ")])])])]),t._v(" "),r("div",{staticClass:"c35-sidebar-content-wrapper"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-5 pr-1 my-auto"},[r("div",{staticClass:"c35-sibera-content-title"},[t._v("\n                        événement\n                      ")])]),t._v(" "),r("div",{staticClass:"col-7 pl-1"},[r("div",{staticClass:"c35-sibera-content-desc"},[t._v("\n                        Festibal Court métrange à Rennes du 25 mars au 14\n                        avril 2019\n                      ")])])])])]),t._v(" "),r("div",{staticClass:"c35-sibera-content-action"},[r("a",{staticClass:"btn btn-primary c35-btn"},[t._v("\n                  Voir toutes les actualités\n                ")])])])])])]),t._v(" "),r("div",{staticClass:"c35-sidebar-block"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h3",[t._v("critiques")]),t._v(" "),r("div",{staticClass:"mt-3"},[r("div",{staticClass:"c35-sidebar-content-wrapper"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-5 pr-1 my-auto"},[r("div",{staticClass:"c35-sibera-content-title"},[t._v("\n                        événement\n                      ")])]),t._v(" "),r("div",{staticClass:"col-7 pl-1"},[r("div",{staticClass:"c35-sibera-content-desc"},[t._v("\n                        Festibal\n                        "),r("span",{staticClass:"text-primary font-weight-bold"},[t._v("\n                          Court métrange\n                        ")]),t._v("\n                        à Rennes du 25 mars au 14 avril 2019\n                      ")])])])]),t._v(" "),r("div",{staticClass:"c35-sidebar-content-wrapper"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-5 pr-1 my-auto"},[r("div",{staticClass:"c35-sibera-content-title"},[t._v("\n                        avant-première\n                      ")])]),t._v(" "),r("div",{staticClass:"col-7 pl-1"},[r("div",{staticClass:"c35-sibera-content-desc"},[r("span",{staticClass:"text-primary font-weight-bold"},[t._v("\n                          All inclusive\n                        ")]),t._v("\n                        au CGR La Mézière. Mardi 12 février à 21h30\n                      ")])])])]),t._v(" "),r("div",{staticClass:"c35-sidebar-content-wrapper"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-5 pr-1 my-auto"},[r("div",{staticClass:"c35-sibera-content-title"},[t._v("\n                        événement\n                      ")])]),t._v(" "),r("div",{staticClass:"col-7 pl-1"},[r("div",{staticClass:"c35-sibera-content-desc"},[t._v("\n                        Festibal Court métrange à Rennes du 25 mars au 14\n                        avril 2019\n                      ")])])])])]),t._v(" "),r("div",{staticClass:"c35-sibera-content-action"},[r("a",{staticClass:"btn btn-primary c35-btn"},[t._v("\n                  Voir toutes les actualités\n                ")])])])])])])])}],!1,null,null,null);e.default=component.exports},178:function(t,e,r){"use strict";r.r(e);var n={layout:"admin",components:{C35Breadcrumb:r(9).a},data:function(){return{crumbs:[{title:"Admin",active:!0}]}}},o=r(2),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("c35-breadcrumb",{attrs:{crumbs:this.crumbs}}),this._v(" "),e("ul",{staticClass:"list-group mt-4"},[e("li",{staticClass:"list-group-item"},[e("nuxt-link",{attrs:{to:{name:"admin-actors"}}},[this._v("\n        Manage actors\n      ")])],1),this._v(" "),e("li",{staticClass:"list-group-item"},[e("nuxt-link",{attrs:{to:{name:"admin-directors"}}},[this._v("\n        Manage directors\n      ")])],1),this._v(" "),e("li",{staticClass:"list-group-item"},[e("nuxt-link",{attrs:{to:{name:"admin-movies"}}},[this._v("\n        Manage movies\n      ")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports},179:function(t,e,r){"use strict";r.r(e);r(6);var n=r(1),o=r(47),c=r(191),l={layout:"admin",components:{C35Breadcrumb:r(9).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.params,c=n.id,l=[{routeName:"admin",title:"Admin"},{routeName:"admin-directors",title:"Directors"}],"new"===c){e.next=14;break}return e.next=6,r.dispatch("directors/fetch");case 6:if(!(d=Object(o.cloneDeep)(r.getters["directors/findById"](c)))){e.next=11;break}return e.abrupt("return",{id:c,model:d,crumbs:[].concat(l,[{title:"Edit",active:!0}])});case 11:return e.abrupt("return",{id:c,notFound:!0,crumbs:[].concat(l,[{title:"Not found",active:!0}])});case 12:e.next=15;break;case 14:return e.abrupt("return",{crumbs:[].concat(l,[{title:"New",active:!0}])});case 15:case"end":return e.stop()}}),e)})))()},data:function(){return{notFound:!1,id:null,model:{id:null,firstName:null,lastName:null},crumbs:[{routeName:"admin",title:"Admin"},{routeName:"admin-directors",title:"Directors"},{title:"Create",active:!0}]}},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.form.checkValidity()){e.next=7;break}return r=t.model,n=r.firstName,o=r.lastName,l=t.$fireStore.collection("directors"),d=t.model.id||Object(c.a)(),e.next=6,l.doc(d).set({firstName:n,lastName:o});case 6:t.$router.push({name:"admin-directors"});case 7:case"end":return e.stop()}}),e)})))()}}},d=r(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("c35-breadcrumb",{attrs:{crumbs:t.crumbs}}),t._v(" "),t.notFound?[t._v("\n    Model not found\n  ")]:[r("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"actorFirstName"}},[t._v("Prénom")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.firstName,expression:"model.firstName"}],staticClass:"form-control",attrs:{id:"actorFirstName",type:"text",required:""},domProps:{value:t.model.firstName},on:{input:function(e){e.target.composing||t.$set(t.model,"firstName",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"actorLastName"}},[t._v("Nom")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.model.lastName,expression:"model.lastName"}],staticClass:"form-control",attrs:{id:"actorLastName",type:"text",required:""},domProps:{value:t.model.lastName},on:{input:function(e){e.target.composing||t.$set(t.model,"lastName",e.target.value)}}})]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n        Save\n      ")])])]],2)}),[],!1,null,null,null);e.default=component.exports},180:function(t,e,r){"use strict";r.r(e);r(6);var n=r(1),o=r(9),c=r(35),l={layout:"admin",components:{C35Breadcrumb:o.a,C35AdminList:c.a},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("directors/fetch");case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{crumbs:[{routeName:"admin",title:"Admin"},{title:"Directors",active:!0}]}},computed:{directors:function(){return this.$store.getters["directors/collection"]}},methods:{getActorFullName:function(t){return"".concat(t.firstName," ").concat(t.lastName)},onDelete:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.$store.dispatch("directors/delete",t);case 1:case"end":return r.stop()}}),r)})))()},onEdit:function(t){this.$nuxt.$router.push({name:"admin-directors-id",params:{id:t.id}})}}},d=r(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("c35-breadcrumb",{attrs:{crumbs:t.crumbs}}),t._v(" "),r("c35-admin-list",{attrs:{collection:t.directors},on:{edit:t.onEdit,delete:t.onDelete},scopedSlots:t._u([{key:"title",fn:function(e){var n=e.model;return[r("span",[t._v(t._s(t.getActorFullName(n)))])]}}])}),t._v(" "),r("nuxt-link",{staticClass:"btn btn-primary mt-4",attrs:{to:{name:"admin-directors-id",params:{id:"new"}}}},[t._v("\n    Create new director\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},181:function(t,e,r){"use strict";r.r(e);r(6);var n=r(1),o=r(9),c=r(35),l={layout:"admin",components:{C35Breadcrumb:o.a,C35AdminList:c.a},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("movies/fetch");case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{crumbs:[{routeName:"admin",title:"Admin"},{title:"Movies",active:!0}]}},computed:{collection:function(){return this.$store.getters["movies/collection"]}},methods:{onDelete:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.$store.dispatch("movies/delete",t);case 1:case"end":return r.stop()}}),r)})))()},onEdit:function(t){this.$nuxt.$router.push({name:"admin-movies-id",params:{id:t.id}})}}},d=r(2),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("c35-breadcrumb",{attrs:{crumbs:t.crumbs}}),t._v(" "),r("c35-admin-list",{attrs:{collection:t.collection},on:{edit:t.onEdit,delete:t.onDelete},scopedSlots:t._u([{key:"title",fn:function(e){var r=e.model;return[t._v("\n      "+t._s(r.name)+"\n    ")]}}])}),t._v(" "),r("nuxt-link",{staticClass:"btn btn-primary mt-4",attrs:{to:{name:"admin-movies-id",params:{id:"new"}}}},[t._v("\n    Create new movie\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},182:function(t,e,r){"use strict";r.r(e);r(6);var n=r(1),o={components:{C35MoviePreviewList:r(69).a},fetch:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,e.next=3,r.dispatch("movies/fetch");case 3:case"end":return e.stop()}}),e)})))()},computed:{movies:function(){return this.$store.getters["movies/collection"]}}},c=r(2),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("c35-movie-preview-list",{attrs:{title:"A l'affiche",movies:this.movies}})],1)}),[],!1,null,null,null);e.default=component.exports},183:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Movies index page")])}),[],!1,null,null,null);e.default=component.exports},184:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h1",[this._v("404 - page not found")])])}],!1,null,null,null);e.default=component.exports},185:function(t,e,r){"use strict";r.r(e);var n=r(2),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pt-4"},[e("div",{staticClass:"container"},[e("nav",{attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"#"}},[this._v("Accueil")])]),this._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"#"}},[this._v("Films")])]),this._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[this._v("\n          Contagion\n        ")])])])])])}],!1,null,null,null);e.default=component.exports},35:function(t,e,r){"use strict";var n={name:"C35AdminList",props:{collection:{type:Array,required:!0}},methods:{onEdit:function(t){this.$emit("edit",t)},onDelete:function(t){this.$emit("delete",t)}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"list-group"},[t._l(t.collection,(function(e){return[r("li",{key:e.id,staticClass:"list-group-item d-flex justify-content-between align-items-stretch align-items-center"},[t._t("title",null,{model:e}),t._v(" "),r("div",[r("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(r){return t.onEdit(e)}}},[t._v("\n          Edit\n        ")]),t._v(" "),r("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(r){return t.onDelete(e)}}},[t._v("\n          Delete\n        ")])])],2)]}))],2)}),[],!1,null,null,null);e.a=component.exports},48:function(t,e,r){"use strict";var n={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}}},o=(r(163),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"__nuxt-error-page"},[r("div",{staticClass:"error"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[r("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?r("p",{staticClass:"description"},[r("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);e.a=component.exports},66:function(t,e,r){},67:function(t,e,r){},69:function(t,e,r){"use strict";var n={name:"C35MoviePreview",props:{movie:{type:Object,required:!0}},methods:{onClick:function(){this.$router.push({name:"movies-id",params:{id:this.movie.id}})}}},o=r(2),c={name:"C35Strike"},l={name:"C35MoviePreviewList",components:{C35MoviePreview:Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cine35-movie-preview",on:{click:t.onClick}},[r("img",{attrs:{src:"/previews/"+t.movie.preview,alt:"ALERTE"}}),t._v(" "),r("div",{staticClass:"cine35-movie-preview-overlay"},[r("div",{staticClass:"cine35-movie-preview-overlay-text"},[r("span",[t._v(t._s(t.movie.name))]),t._v(" "),r("div",[t._v("\n        de\n        "),t._l(t.movie.directors,(function(e){return[t._v("\n          "+t._s(e.firstName+" "+e.lastName)+"\n        ")]}))],2)])])])}),[],!1,null,null,null).exports,C35Strike:Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"strike"},[e("span",[this._t("default")],2)])}),[],!1,null,null,null).exports},props:{movies:{type:Array,required:!0},title:{type:String,required:!1,default:null},limited:{type:Boolean,required:!1,default:null},linkToMore:{type:String,required:!1,default:null}},methods:{responsiveClasses:function(){return["col-6","col-sm-4","col-md-3","col-lg-3","col-xl-3","py-1","px-1"]},onClick:function(){this.$router.push({name:this.linkToMore})}}},d=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"c35-section"},[r("div",{staticClass:"container-md px-1"},[t.title?r("div",{staticClass:"row mx-n1"},[r("div",{staticClass:"col-12 pl-1"},[r("c35-strike",[t._v("\n          "+t._s(t.title)+"\n        ")])],1)]):t._e(),t._v(" "),r("div",{staticClass:"row mx-n1"},[t._l(t.movies,(function(e,n){return[r("div",{key:e.id,class:t.responsiveClasses(n)},[r("c35-movie-preview",{attrs:{movie:e}})],1)]}))],2)])])}),[],!1,null,null,null);e.a=d.exports},70:function(t,e,r){"use strict";r(83);var n={name:"C35Header",methods:{isActive:function(t){return this.$route.path.split("/")[1]===t}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"c35-header navbar sticky-top navbar-dark bg-dark navbar-expand-sm"},[r("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("\n    Cine35\n  ")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav mr-auto"},[r("li",{staticClass:"nav-item dropdown",class:{"header-dropdown-active":t.isActive("movies")}},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMovies",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n          FILMS\n        ")]),t._v(" "),r("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMovies"}},[r("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/movies/onrelease"}},[t._v("\n            A l'affiche\n          ")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Prochainement")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Critiques")])],1)]),t._v(" "),r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMovies",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n          SALLES\n        ")]),t._v(" "),r("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdownMovies"}},[r("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/movies/onrelease"}},[t._v("\n            A l'affiche\n          ")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Prochainement")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Critiques")])],1)]),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",attrs:{to:{name:"admin"}}},[t._v("\n          ADMIN\n        ")])],1)])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,null,null);e.a=component.exports},9:function(t,e,r){"use strict";var n={name:"C35Breadcrumb",props:{crumbs:{type:Array,required:!1,default:function(){return[]}}}},o=r(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.crumbs.length?r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[t._l(t.crumbs,(function(e,n){return[r("li",{key:n,staticClass:"breadcrumb-item",class:{active:e.active},attrs:{"aria-current":"page"}},[e.routeName?r("nuxt-link",{attrs:{to:{name:e.routeName}}},[t._v("\n          "+t._s(e.title)+"\n        ")]):[t._v("\n          "+t._s(e.title)+"\n        ")]],2)]}))],2)]):t._e()}),[],!1,null,null,null);e.a=component.exports}}]);