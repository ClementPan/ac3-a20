(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c54d94a"],{"73a3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/admin/restaurants/new"}},[t._v(" New Restaurant ")]),a("AdminRestaurantsTable")],1)},r=[],s=a("bc79"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isLoading?a("Spinner"):a("table",{staticClass:"table"},[a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category")]),a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col",width:"300"}},[t._v("操作")])])]),a("tbody",t._l(t.restaurants,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",[t._v(t._s(e.Category?e.Category.name:"未分類"))]),a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant",params:{id:e.id}}}},[t._v("Show")]),a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant-edit",params:{id:e.id}}}},[t._v("Edit")]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return t.deleteRestaurant(e.id)}}},[t._v(" Delete ")])],1)])})),0)])},u=[],c=a("1da1"),o=(a("4de4"),a("96cf"),a("be6c")),l=a("2fa3"),d=a("2375"),m={name:"AdminRestaurantsTable",components:{Spinner:d["a"]},data:function(){return{restaurants:[],isLoading:!0}},created:function(){this.fetchRestaurants()},methods:{fetchRestaurants:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,o["a"].restaurants.get();case 4:if(a=e.sent,t.restaurants=a.data.restaurants,200===a.status){e.next=8;break}throw new Error(a.statusText);case 8:t.isLoading=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),t.isLoading=!1,l["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試！"});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()},deleteRestaurant:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o["a"].restaurants.delete(t);case 3:if(n=a.sent,200===n.status){a.next=6;break}throw new Error(n.statusText);case 6:e.restaurants=e.restaurants.filter((function(e){return e.id!==t})),l["a"].fire({icon:"success",title:"成功刪除餐廳資料！"}),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),l["a"].fire({icon:"error",title:"無法刪除餐廳，請稍後再試！"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},f=m,b=a("2877"),v=Object(b["a"])(f,i,u,!1,null,null,null),p=v.exports,h={components:{AdminNav:s["a"],AdminRestaurantsTable:p}},g=h,_=Object(b["a"])(g,n,r,!1,null,null,null);e["default"]=_.exports},bc79:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:{name:"admin-restaurants"}}},[t._v("Restaurants")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},r=[],s={name:"AdminNav"},i=s,u=a("2877"),c=Object(u["a"])(i,n,r,!1,null,null,null);e["a"]=c.exports},be6c:function(t,e,a){"use strict";a("b0c0");var n=a("2fa3");e["a"]={categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){return n["b"].post("/admin/categories",t)},put:function(t){var e=t.id,a=t.name;return n["b"].put("/admin/categories/".concat(e),{name:a})},delete:function(t){return n["b"].delete("/admin/categories/".concat(t))}},restaurants:{getDetail:function(t){return n["b"].get("/admin/restaurants/".concat(t))},get:function(){return n["b"].get("/admin/restaurants")},create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},delete:function(t){return n["b"].delete("/admin/restaurants/".concat(t))},update:function(t){var e=t.id,a=t.formData;return n["b"].put("/admin/restaurants/".concat(e),a)}},users:{getUsers:function(){return n["b"].get("/admin/users")},setUserRole:function(t,e){return n["b"].put("/admin/users/".concat(t),e)}}}}}]);
//# sourceMappingURL=chunk-0c54d94a.dd244a89.js.map