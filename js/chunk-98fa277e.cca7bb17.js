(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98fa277e"],{"29e5":function(t,e,r){"use strict";r("4e2a")},3564:function(t,e,r){},"3dbe":function(t,e,r){"use strict";r("3564")},"498a":function(t,e,r){"use strict";var a=r("23e7"),n=r("58a8").trim,s=r("c8d2");a({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},"4e2a":function(t,e,r){},"8fc1":function(t,e,r){"use strict";r("e16e")},ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isLoading?r("Spinner"):r("div",{staticClass:"container py-5"},[r("RestaurantDetail",{attrs:{initialRestaurant:t.restaurant},on:{after_toggle_isFavorited:t.afterToggleFavorited,after_toggle_isLiked:t.afterToggleLiked}}),r("hr"),r("RestaurantComments",{attrs:{restaurantComments:t.restaurantComments},on:{after_comment_delete:t.afterCommentDelete}}),r("CreateComment",{attrs:{restaurantId:t.restaurant.id,currentUser:t.currentUser},on:{"after-create-comment":t.afterCreatComment}})],1)},n=[],s=r("5530"),i=r("1da1"),o=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),r("4de4"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImageFilter")(t.restaurant.image)}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openginHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:this.$route.params.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return t.deleteFavorited(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return t.addFavorited(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return t.deleteLike(t.restaurant.id)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return t.addLike(t.restaurant.id)}}},[t._v(" Like ")])],1)])}),c=[],u=r("2708"),d=r("2fa3"),l=r("4cce"),m={name:"RestaurantDetail",mixins:[u["a"]],props:{initialRestaurant:{type:Object,required:!0}},created:function(){this.restaurant=this.initialRestaurant},data:function(){return{restaurant:{}}},methods:{addFavorited:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,console.log(n),"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:d["a"].fire({icon:"success",title:"已加入最愛！"}),e.$emit("after_toggle_isFavorited"),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法執行動作，請稍後再試！"});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()},deleteFavorited:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,console.log(n),"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:d["a"].fire({icon:"success",title:"已移除最愛！"}),e.$emit("after_toggle_isFavorited"),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法執行動作，請稍後再試！"});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()},addLike:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,console.log(n),"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:d["a"].fire({icon:"success",title:"已按讚！"}),e.$emit("after_toggle_isLiked"),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法執行動作，請稍後再試！"});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()},deleteLike:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,console.log(n),"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:d["a"].fire({icon:"success",title:"已收回讚！"}),e.$emit("after_toggle_isLiked"),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法執行動作，請稍後再試！"});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()}},watch:{initialRestaurant:{handler:function(t){this.restaurant=Object(s["a"])(Object(s["a"])({},this.restaurant),t)},deep:!0}}},f=m,p=(r("29e5"),r("2877")),v=Object(p["a"])(f,o,c,!1,null,"6779b72c",null),b=v.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.handleDeleteButtonClick(e.id)}}},[t._v(" Delete ")]):t._e(),r("h3",[r("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t._v(" "+t._s(e.User.name)+" ")])],1),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),r("hr")])}))],2)},h=[],k=r("2f62"),_=r("c4c3"),x={name:"RestaurantComments",mixins:[u["b"]],props:{restaurantComments:{type:Array,required:!0}},data:function(){return{}},methods:{handleDeleteButtonClick:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,_["a"].deleteComment(t);case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:console.log(n),e.$emit("after_comment_delete",t),d["a"].fire({icon:"success",title:"成功刪除評論！"}),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),d["a"].fire({icon:"error",title:"無法刪除評論，請稍後再試！"});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()}},computed:Object(s["a"])({},Object(k["b"])(["currentUser"]))},C=x,w=(r("8fc1"),Object(p["a"])(C,g,h,!1,null,"4e9cd8c5",null)),y=w.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isLoading?r("Spinner"):r("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit(e)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" Submit ")])])])},L=[],O=(r("a9e3"),r("498a"),r("2375")),j={name:"CreateComment",components:{Spinner:O["a"]},props:{restaurantId:{type:Number,required:!0},currentUser:{type:Object,required:!0}},data:function(){return{text:"",isProcessing:!1,isLoading:!0}},methods:{handleSubmit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.isLoading=!0,t.text.trim()){e.next=6;break}return t.text="",d["a"].fire({icon:"info",title:"尚未輸入內容！"}),e.abrupt("return");case 6:return t.isProcessing=!0,r={text:t.text,userId:t.currentUser.id,restaurantId:t.restaurantId},e.next=10,_["a"].createNewComment(r);case 10:if(a=e.sent,n=a.data,console.log(n),"success"===n.status){e.next=15;break}throw new Error(n.message);case 15:t.$emit("after-create-comment",{text:t.text,commentId:n.commentId,restaurantId:t.restaurantId}),t.text="",d["a"].fire({icon:"success",title:"已建立新評論！"}),t.isProcessing=!1,t.isLoading=!1,e.next=28;break;case 22:e.prev=22,e.t0=e["catch"](0),t.isLoading=!1,t.isProcessing=!1,console.error(e.t0),d["a"].fire({icon:"error",title:"無法建立新評論，請稍後再試！"});case 28:case"end":return e.stop()}}),e,null,[[0,22]])})))()}}},F=j,I=(r("3dbe"),Object(p["a"])(F,R,L,!1,null,"15de3d8e",null)),U=I.exports,S={name:"Restaurant",created:function(){this.fetchRestaurant(this.$route.params.id)},beforeRouteUpdate:function(t,e,r){this.fetchRestaurant(t.params.id),r()},components:{RestaurantDetail:b,RestaurantComments:y,CreateComment:U,Spinner:O["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openginHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[],isLoading:!0}},methods:{fetchRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,c,u,l,m,f,p,v,b,g;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isLoading=!0,r.next=4,_["a"].getRestaurant(t);case 4:a=r.sent,n=a.data,s=n.restaurant,i=n.isFavorited,o=n.isLiked,c=s.id,u=s.name,l=s.Category,m=s.image,f=s.opening_hours,p=s.tel,v=s.address,b=s.description,g=s.Comments,e.restaurant={id:c,name:u,categoryName:l?l.name:"未分類",image:m,openginHours:f,tel:p,address:v,description:b,isFavorited:i,isLiked:o},e.restaurantComments=g,e.isLoading=!1,r.next=18;break;case 13:r.prev=13,r.t0=r["catch"](0),e.isLoading=!1,console.log(r.t0),d["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試！"});case 18:case"end":return r.stop()}}),r,null,[[0,13]])})))()},afterCommentDelete:function(t){this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},afterCreatComment:function(t){var e=t.commentId,r=t.RestaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,User:{createdAt:new Date,email:this.currentUser.email,id:this.currentUser.id,name:this.currentUser.name,updatedAt:new Date},text:a,UserId:this.currentUser.id,createdAt:new Date})},afterToggleFavorited:function(){this.restaurant.isFavorited=!this.restaurant.isFavorited},afterToggleLiked:function(){this.restaurant.isLiked=!this.restaurant.isLiked}},computed:Object(s["a"])({},Object(k["b"])(["currentUser"]))},$=S,D=Object(p["a"])($,a,n,!1,null,null,null);e["default"]=D.exports},c8d2:function(t,e,r){var a=r("d039"),n=r("5899"),s="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||s[t]()!=s||n[t].name!==t}))}},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("5135"),o=r("861d"),c=r("9bf2").f,u=r("e893"),d=s.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(m,d);var f=m.prototype=d.prototype;f.constructor=m;var p=f.toString,v="Symbol(test)"==String(d("test")),b=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(i(l,t))return"";var r=v?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}},e16e:function(t,e,r){}}]);
//# sourceMappingURL=chunk-98fa277e.cca7bb17.js.map