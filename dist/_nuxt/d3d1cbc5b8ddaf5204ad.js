(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{315:function(t,e,r){var content=r(321);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("306f6ba8",content,!0,{sourceMap:!1})},316:function(t,e,r){"use strict";r(147),r(16);var o={data:function(){return{days:"",hours:"",minutes:"",seconds:"",timeDate:this.dateTime}},props:["dateTime"],created:function(){var t=this;this.interval=setInterval((function(){return t.timing(t.timeDate)}),1e3)},methods:{timing:function(t){var e=new Date(t),r=Date.parse(e)/1e3,o=new Date,c=r-Date.parse(o)/1e3,n=Math.floor(c/86400),l=Math.floor((c-86400*n)/3600),d=Math.floor((c-86400*n-3600*l)/60),m=Math.floor(c-86400*n-3600*l-60*d);l<"10"&&(l="0"+l),d<"10"&&(d="0"+d),m<"10"&&(m="0"+m),this.days=n,this.hours=l,this.minutes=d,this.seconds=m}}},c=r(11),n={name:"ProductItem",components:{Timer:Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"timer"},[r("div",{staticClass:"days"},[t._v(t._s(t.days))]),t._v(" "),r("div",{staticClass:"hours"},[t._v(t._s(t.hours))]),t._v(" "),r("div",{staticClass:"minutes"},[t._v(t._s(t.minutes))]),t._v(" "),r("div",{staticClass:"seconds"},[t._v(t._s(t.seconds))])])}),[],!1,null,null,null).exports},data:function(){return{getExistPId:null}},props:["product","className"],computed:{cart:function(){return this.$store.getters.cart}},methods:{quickView:function(t){this.$emit("clicked")},addToCart:function(t){var e=[{id:t.id,name:t.name,price:t.price,image:t.image,quantity:1}];if(this.cart.length>0){var r=t.id;this.getExistPId=r,-1==this.cart.findIndex((function(t){return t.id==r}))?(this.$store.dispatch("addToCart",e),this.$toast("Added to cart",{icon:"fas fa-cart-plus"})):(this.$store.dispatch("updateCart",{id:r,unit:1,cart:this.cart}),this.$toast.info("Already added to the cart and update with one"))}else this.$store.dispatch("addToCart",e),this.$toast("Added to cart",{icon:"fas fa-cart-plus"})}}},l=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.className},[r("div",{staticClass:"single-product-box"},[r("div",{staticClass:"product-image"},[r("nuxt-link",{attrs:{to:"/products-details/"+t.product.id}},[r("img",{attrs:{src:t.product.image,alt:t.product.name}}),t._v(" "),r("img",{attrs:{src:t.product.imageHover,alt:t.product.name}})]),t._v(" "),r("ul",[r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"javascript:void(0)",title:"Quick View"},on:{click:function(e){return e.preventDefault(),t.quickView(e)}}},[r("i",{staticClass:"far fa-eye"})])]),t._v(" "),r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Add to Wishlist"}},[r("i",{staticClass:"far fa-heart"})])]),t._v(" "),r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Add to Compare"}},[r("i",{staticClass:"fas fa-sync"})])])]),t._v(" "),t.product.timePeriod?r("Timer",{attrs:{dateTime:t.product.dateTime}}):t._e()],1),t._v(" "),r("div",{staticClass:"product-content"},[r("h3",[r("nuxt-link",{attrs:{to:"/products-details/"+t.product.id}},[t._v(t._s(t.product.name))])],1),t._v(" "),r("div",{staticClass:"product-price"},[t.product.offer?r("span",{staticClass:"old-price"},[t._v("\n                    $"+t._s(t.product.price-t.product.offerPrice)+"\n                ")]):t._e(),t._v(" "),r("span",{staticClass:"new-price"},[t._v("$"+t._s(t.product.price))])]),t._v(" "),t._m(0),t._v(" "),t.getExistPId===t.product.id?r("a",{staticClass:"btn btn-light added-btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Added Already!\n            ")]):r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Add to Cart\n            ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"far fa-star"})])}],!1,null,null,null);e.a=l.exports},317:function(t,e,r){"use strict";r(147),r(16);var o=r(46),c={name:"QuckView",data:function(){return{quantity:1,item:{id:4,name:"Criss-cross V neck bodycon",price:200,offer:!1,offerPrice:7,latest:!0,bestSellers:!1,trending:!1,image:r(148),imageHover:r(149),timePeriod:!1,dateTime:new Date("December 19, 2020 17:00:00 PDT")}}},methods:{closeQuickView:o.a.toggleQuickView,addToCart:function(t){var e=[{id:t.id,name:t.name,price:t.price,image:t.image,quantity:this.quantity}];if(this.cart.length>0){var r=t.id;this.getExistPId=r,-1==this.cart.findIndex((function(t){return t.id==r}))?(this.$store.dispatch("addToCart",e),this.$toast("Added to cart",{icon:"fas fa-cart-plus"})):(this.$store.dispatch("updateCart",{id:r,unit:1,cart:this.cart}),this.$toast.info("Already added to the cart and update with one"))}else this.$store.dispatch("addToCart",e),this.$toast("Added to cart",{icon:"fas fa-cart-plus"});this.closeQuickView()},increaseQuantity:function(){this.quantity>9?this.$toast.error("Can't add more than 10",{icon:"fas fa-cart-plus"}):this.quantity++},decreaseQuantity:function(){this.quantity<2?this.$toast.error("Can't add less than 1",{icon:"fas fa-cart-plus"}):this.quantity--}},computed:{isQuickViewOpen:function(){return o.b.isQuickViewOpen},cart:function(){return this.$store.getters.cart}}},n=(r(320),r(11)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.isQuickViewOpen?o("div",{staticClass:"modal-backdrop"}):t._e(),t._v(" "),o("transition",{attrs:{name:"slide-fade"}},[t.isQuickViewOpen?o("div",{staticClass:"modal fade productQuickView",attrs:{id:"productQuickView",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[o("div",{staticClass:"modal-content"},[o("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeQuickView}},[o("span",{attrs:{"aria-hidden":"true"}},[o("i",{staticClass:"fas fa-times"})])]),t._v(" "),o("div",{staticClass:"row align-items-center"},[o("div",{staticClass:"col-lg-6 col-md-6"},[o("div",{staticClass:"productQuickView-image"},[o("img",{attrs:{src:r(319),alt:"image"}})])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-6"},[o("div",{staticClass:"product-content"},[o("h3",[o("a",{attrs:{href:"#"}},[t._v("Neck empire sleeve t-shirts")])]),t._v(" "),o("div",{staticClass:"price"},[o("span",{staticClass:"new-price"},[t._v("$191.00")])]),t._v(" "),o("div",{staticClass:"product-review"},[o("div",{staticClass:"rating"},[o("i",{staticClass:"fas fa-star"}),t._v(" "),o("i",{staticClass:"fas fa-star"}),t._v(" "),o("i",{staticClass:"fas fa-star"}),t._v(" "),o("i",{staticClass:"fas fa-star"}),t._v(" "),o("i",{staticClass:"fas fa-star-half-alt"})]),t._v(" "),o("a",{staticClass:"rating-count",attrs:{href:"#"}},[t._v("3 reviews")])]),t._v(" "),o("ul",{staticClass:"product-info"},[o("li",[o("span",[t._v("Vendor:")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("Lereve")])]),t._v(" "),o("li",[o("span",[t._v("Availability:")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("In stock (7 items)")])]),t._v(" "),o("li",[o("span",[t._v("Product Type:")]),t._v(" "),o("a",{attrs:{href:"#"}},[t._v("T-Shirt")])])]),t._v(" "),o("div",{staticClass:"product-color-switch"},[o("h4",[t._v("Color:")]),t._v(" "),o("ul",[o("li",[o("a",{staticClass:"color-black",attrs:{href:"#",title:"Black"}})]),t._v(" "),o("li",[o("a",{staticClass:"color-white",attrs:{href:"#",title:"White"}})]),t._v(" "),o("li",{staticClass:"active"},[o("a",{staticClass:"color-green",attrs:{href:"#",title:"Green"}})]),t._v(" "),o("li",[o("a",{staticClass:"color-yellowgreen",attrs:{href:"#",title:"Yellow Green"}})]),t._v(" "),o("li",[o("a",{staticClass:"color-teal",attrs:{href:"#",title:"Teal"}})])])]),t._v(" "),o("div",{staticClass:"product-size-wrapper"},[o("h4",[t._v("Size:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#"}},[t._v("XS")])]),t._v(" "),o("li",{staticClass:"active"},[o("a",{attrs:{href:"#"}},[t._v("S")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("M")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("XL")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("XXL")])])])]),t._v(" "),o("div",{staticClass:"product-add-to-cart"},[o("div",{staticClass:"input-counter"},[o("span",{staticClass:"minus-btn",on:{click:function(e){return t.decreaseQuantity()}}},[o("i",{staticClass:"fas fa-minus"})]),t._v("\n                                            "+t._s(t.quantity)+"\n                                        "),o("span",{staticClass:"plus-btn",on:{click:function(e){return t.increaseQuantity()}}},[o("i",{staticClass:"fas fa-plus"})])]),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.addToCart(t.item)}}},[o("i",{staticClass:"fas fa-cart-plus"}),t._v(" Add to Cart\n                                    ")])]),t._v(" "),o("a",{staticClass:"view-full-info",attrs:{href:"#"}},[t._v("View full info")])])])])])])]):t._e()])],1)}),[],!1,null,"5dc83282",null);e.a=component.exports},318:function(t,e,r){"use strict";var o=r(325),c=r.n(o);r(326);e.a=c.a.apps.length?c.a.app():c.a.initializeApp({apiKey:"AIzaSyAwbwjqlGCx8YyAm0Dv6v56gopQeGUIZRw",authDomain:"denzilla-2db3f.firebaseapp.com",databaseURL:"https://denzilla-2db3f.firebaseio.com",projectId:"denzilla-2db3f",storageBucket:"denzilla-2db3f.appspot.com",messagingSenderId:"24988187613",appId:"1:24988187613:web:1f188bdfdac0fba2fc9434",measurementId:"G-X600KCW188"})},319:function(t,e,r){t.exports=r.p+"img/66d0432.jpg"},320:function(t,e,r){"use strict";var o=r(315);r.n(o).a},321:function(t,e,r){(e=r(19)(!1)).push([t.i,".slide-fade-enter-active[data-v-5dc83282]{transition:all .3s ease}.slide-fade-leave-active[data-v-5dc83282]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-5dc83282],.slide-fade-leave-to[data-v-5dc83282]{transform:translateX(10px);opacity:0}.modal-backdrop[data-v-5dc83282]{background-color:rgba(0,0,0,.5);width:100vw;height:100vh;position:fixed;top:0;left:0;cursor:pointer;z-index:9}",""]),t.exports=e},322:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},323:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},327:function(t,e,r){"use strict";var o=r(318),c={data:function(){return{subscriptions:{email:"",createdAt:new Date}}},methods:{subscribe:function(){""!=this.subscriptions.email&&this.validateEmail(this.subscriptions.email)?(o.a.firestore().collection("subscriptions").add(this.subscriptions),this.$toast.success("Thanks for your subscriptions",{icon:"fas fa-user-check"}),this.subscriptions.email=""):this.$toast.error("Please fillup with a valid email",{icon:"fas fa-times"})},validateEmail:function(t){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)}}},n=r(11),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"subscribe-area ptb-60"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("form",{staticClass:"newsletter-form",on:{submit:function(t){t.preventDefault()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.subscriptions.email,expression:"subscriptions.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your email address",id:"email",autocomplete:"off"},domProps:{value:t.subscriptions.email},on:{input:function(e){e.target.composing||t.$set(t.subscriptions,"email",e.target.value)}}}),t._v(" "),r("button",{attrs:{type:"submit"},on:{click:t.subscribe}},[t._v("Subscribe!")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"newsletter-content"},[e("h3",[this._v("Subscribe to our newsletter")]),this._v(" "),e("p",[this._v("A short sentence describing what someone will receive by subscribing")])])])}],!1,null,null,null);e.a=component.exports},328:function(t,e,r){"use strict";var o={data:function(){return{photos:[{id:1,photo:r(339),url:"https://www.instagram.com/"},{id:2,photo:r(340),url:"https://www.instagram.com/"},{id:3,photo:r(341),url:"https://www.instagram.com/"},{id:9,photo:r(342),url:"https://www.instagram.com/"},{id:6,photo:r(322),url:"https://www.instagram.com/"},{id:4,photo:r(343),url:"https://www.instagram.com/"},{id:5,photo:r(322),url:"https://www.instagram.com/"},{id:11,photo:r(323),url:"https://www.instagram.com/"},{id:8,photo:r(344),url:"https://www.instagram.com/"},{id:7,photo:r(322),url:"https://www.instagram.com/"},{id:12,photo:r(323),url:"https://www.instagram.com/"},{id:10,photo:r(345),url:"https://www.instagram.com/"},{id:13,photo:r(323),url:"https://www.instagram.com/"}]}}},c=r(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("div",{staticClass:"instagram-area"},[r("div",{staticClass:"instagram-slides owl-carousel owl-theme"},[r("carousel",{attrs:{loop:!0,autoplay:!0,autoplayTimeout:5e3,perPageCustom:[[0,2],[768,6],[1200,9]],paginationEnabled:!1}},t._l(t.photos,(function(e){return r("slide",{key:e.id},[r("div",{staticClass:"instagram-box"},[r("img",{attrs:{src:e.photo,alt:"image"}}),t._v(" "),r("div",{staticClass:"icon"},[r("i",{staticClass:"fab fa-instagram"})]),t._v(" "),r("a",{attrs:{href:e.url,target:"_blank"}})])])})),1)],1)])])}),[],!1,null,null,null);e.a=component.exports},329:function(t,e,r){"use strict";var o=r(11),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("div",{staticClass:"partner-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"partner-slides owl-carousel owl-theme"},[e("carousel",{attrs:{loop:!0,autoplay:!0,autoplayTimeout:1e3,paginationEnabled:!1,perPageCustom:[[0,2],[768,4],[1200,6]],speed:5e3}},[e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(333),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(334),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(335),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(336),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(337),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(338),alt:"image"}})])])])],1)],1)])])])}),[],!1,null,null,null);e.a=component.exports},333:function(t,e,r){t.exports=r.p+"img/e9620a8.png"},334:function(t,e,r){t.exports=r.p+"img/e9620a8.png"},335:function(t,e,r){t.exports=r.p+"img/f6d5014.png"},336:function(t,e,r){t.exports=r.p+"img/f6d5014.png"},337:function(t,e,r){t.exports=r.p+"img/f6d5014.png"},338:function(t,e,r){t.exports=r.p+"img/f6d5014.png"},339:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},340:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},341:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},342:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},343:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},344:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},345:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},346:function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAA/AD8BAREA/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMHBAUGCP/EACEQAAEFAAMBAQEBAQAAAAAAAAIAAQMEBQYREgcTFCMi/9oACAEBAAA/APUCIiIiIiIiIiIiIiIiKkOIfaeWc31ZIcCfjTjpBqBkULtO/Vf3WMgiJ7rsUFp38+pYohY4mLrsvLusrK+9jgQ7xfSQf+TD1gzZdanjz0QjY6zSxnNTnkOxGByeoY5G9jKbj56Z2dY3Ifu+xByg8qhDRwYc6pl2b9bdzbUsrHbJ3eKaxVIoaDCDCzSy/oJSE4t0wO79Jnc65pU+rVeC8mjyHrala9artWo2of5xhMPxFrcxflckOMnI44gF4vL99szE9lIiKt5PhPGJjKGXe5A+dCV6XNz47ccMWXNb9/tLXOOMZmL/AFl8+5DEGN2FmbpmjufA+K7pzycy3Nzkv98kZ6I6MkAhfGKIwrxyhBFGPiJ5ZJAYWH/QvZeiEXaa/wDEMXThetd5ZySWK5Qq5u0JT13fbgruX5taJ4fXp2MhIonjIhfonfputjlfLMzM5FU35+R72lHlz27OXQvWI5K+fLY9NKUbtG0p/wDJyCLSyGwCbsLM3XXaoiIiIiIiIiIiIiIiIv/Z"},347:function(t,e,r){"use strict";var o=r(317),c=r(46),n=r(316),l={components:{QuckView:o.a,ProductItem:n.a},methods:{toggle:function(){c.a.toggleQuickView()}},computed:{products:function(){return this.$store.state.products.all.filter((function(t){return!0===t.latest}))}}},d=r(11),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"all-products-area pb-60"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},t._l(t.products,(function(e,o){return r("ProductItem",{key:o,attrs:{product:e,className:"col-lg-3 col-md-6 col-sm-6"},on:{clicked:t.toggle}})})),1)])]),t._v(" "),r("QuckView")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v(" Latest Products")])])}],!1,null,null,null);e.a=component.exports},386:function(t,e,r){t.exports=r.p+"img/b591336.jpg"},387:function(t,e,r){t.exports=r.p+"img/b591336.jpg"},388:function(t,e,r){t.exports=r.p+"img/b591336.jpg"},389:function(t,e,r){t.exports=r.p+"img/4f4d18c.jpg"},390:function(t,e,r){t.exports=r.p+"img/3f6d7f2.jpg"},391:function(t,e,r){t.exports=r.p+"img/3f6d7f2.jpg"},392:function(t,e,r){t.exports=r.p+"img/1913014.jpg"},393:function(t,e,r){t.exports=r.p+"img/1d30fa5.jpg"},394:function(t,e,r){t.exports=r.p+"img/1d30fa5.jpg"},395:function(t,e,r){t.exports=r.p+"img/1d30fa5.jpg"},396:function(t,e,r){t.exports=r.p+"img/1d30fa5.jpg"},397:function(t,e,r){t.exports=r.p+"img/1d30fa5.jpg"},398:function(t,e,r){"use strict";r.r(e);var o={name:"Banner"},c=r(11),n=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-banner item-bg1"},[r("div",{staticClass:"d-table"},[r("div",{staticClass:"d-table-cell"},[r("div",{staticClass:"container"},[r("div",{staticClass:"main-banner-content"},[r("span",[t._v("New Inspiration 2019")]),t._v(" "),r("h1",[t._v("Clothing made for you!")]),t._v(" "),r("p",[t._v("Trending from men and women style collection")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/products"}},[t._v("Shop Women's")]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-light",attrs:{to:"/products"}},[t._v("Shop Men's")])],1)])])])])}),[],!1,null,null,null).exports,l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"offer-area ptb-60"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"offer-box"},[o("img",{attrs:{src:r(386),alt:"image"}}),t._v(" "),o("div",{staticClass:"category"},[o("h4",[t._v("Women's")])]),t._v(" "),o("div",{staticClass:"box-inner"},[o("div",{staticClass:"inner-content"},[o("h3",[t._v("Women's")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#"}},[t._v("Woman Accessories")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Man Accessories")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Sunglasses")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Belts")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Hats")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Scrafs")])])])])])])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"offer-box"},[o("img",{attrs:{src:r(387),alt:"image"}}),t._v(" "),o("div",{staticClass:"category"},[o("h4",[t._v("Accessories")])]),t._v(" "),o("div",{staticClass:"box-inner"},[o("div",{staticClass:"inner-content"},[o("h3",[t._v("Accessories")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#"}},[t._v("Woman Accessories")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Man Accessories")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Sunglasses")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Belts")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Hats")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Scrafs")])])])])])])]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6 offset-lg-0 offset-md-3"},[o("div",{staticClass:"offer-box"},[o("img",{attrs:{src:r(388),alt:"image"}}),t._v(" "),o("div",{staticClass:"category"},[o("h4",[t._v("Men's")])]),t._v(" "),o("div",{staticClass:"box-inner"},[o("div",{staticClass:"inner-content"},[o("h3",[t._v("Men's")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#"}},[t._v("Woman Accessories")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Man Accessories")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Sunglasses")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Belts")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Hats")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[t._v("Scrafs")])])])])])])])])])])}],d=Object(c.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),l,!1,null,null,null).exports,m=r(347),v=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"category-products-area pb-60"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-4 col-md-12"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:r(389),alt:"image"}}),t._v(" "),o("div",{staticClass:"category-content"},[o("h3",[t._v("Our Popular Products")]),t._v(" "),o("a",{staticClass:"btn btn-light",attrs:{href:"#"}},[t._v("View More")])]),t._v(" "),o("a",{staticClass:"link-btn",attrs:{href:"#"}})])]),t._v(" "),o("div",{staticClass:"col-lg-8 col-md-12"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 col-md-6"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:r(390),alt:"image"}}),t._v(" "),o("div",{staticClass:"category-content"},[o("h3",[t._v("Winter Collections")])]),t._v(" "),o("a",{staticClass:"link-btn",attrs:{href:"#"}})])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-md-6"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:r(391),alt:"image"}}),t._v(" "),o("div",{staticClass:"category-content"},[o("h3",[t._v("Summer Collections")])]),t._v(" "),o("a",{staticClass:"link-btn",attrs:{href:"#"}})])]),t._v(" "),o("div",{staticClass:"col-lg-12 col-md-12"},[o("div",{staticClass:"single-category-box"},[o("img",{attrs:{src:r(392),alt:"image"}}),t._v(" "),o("div",{staticClass:"category-content"},[o("h3",[t._v("Up to 75% OFF Spring Sale!")])]),t._v(" "),o("a",{staticClass:"link-btn",attrs:{href:"#"}})])])])])])])])}],f=Object(c.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),v,!1,null,null,null).exports,h=r(317),_=r(46),C=r(316),w={components:{QuckView:h.a,ProductItem:C.a},methods:{toggle:function(){_.a.toggleQuickView()}},computed:{products:function(){return this.$store.state.products.all.filter((function(t){return!0===t.trending}))}}},A=Object(c.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"trending-products-area pb-60"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},t._l(t.products,(function(e){return r("ProductItem",{key:e.id,attrs:{product:e,className:"col-lg-3 col-md-6 col-sm-6"},on:{clicked:t.toggle}})})),1)])]),t._v(" "),r("QuckView")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v(" Trending Products")])])}],!1,null,null,null).exports,y={components:{QuckView:h.a,ProductItem:C.a},methods:{toggle:function(){_.a.toggleQuickView()}},computed:{products:function(){return this.$store.state.products.all.filter((function(t){return!0===t.bestSellers}))}}},k=Object(c.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"best-sellers-area pb-60"},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},t._l(t.products,(function(e){return r("ProductItem",{key:e.id,attrs:{product:e,className:"col-lg-3 col-md-6 col-sm-6"},on:{clicked:t.toggle}})})),1)])]),t._v(" "),r("QuckView")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title"},[e("h2",[e("span",{staticClass:"dot"}),this._v(" Best Sellers")])])}],!1,null,null,null).exports,x=Object(c.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"facility-area"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[r("div",{staticClass:"facility-box"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"fas fa-plane"})]),t._v(" "),r("h3",[t._v("Free Shipping World Wide")])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[r("div",{staticClass:"facility-box"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"fas fa-money-check-alt"})]),t._v(" "),r("h3",[t._v("100% money back guarantee")])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[r("div",{staticClass:"facility-box"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"far fa-credit-card"})]),t._v(" "),r("h3",[t._v("Many payment gatways")])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[r("div",{staticClass:"facility-box"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"fas fa-headset"})]),t._v(" "),r("h3",[t._v("24/7 online support")])])])])])])}],!1,null,null,null).exports,j={data:function(){return{items:[{id:1,name:"Jason Statham",position:"Actor at Crank",feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",image:r(346)},{id:2,name:"Jason Statham",position:"CEO at Assmble",feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",image:r(346)},{id:3,name:"Jason Statham",position:"Founder at Kramble",feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",image:r(346)}]}}},E=Object(c.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("section",{staticClass:"testimonials-area ptb-60 jarallax",attrs:{"data-jarallax":'{"speed": 0.3}'}},[r("div",{staticClass:"container"},[r("div",{staticClass:"testimonials-slides owl-carousel owl-theme"},[r("carousel",{attrs:{autoplay:!0,autoplayTimeout:1e3,perPageCustom:[[0,1],[768,1],[1024,1]]}},t._l(t.items,(function(e){return r("slide",{key:e.id},[r("div",{staticClass:"single-testimonials"},[r("div",{staticClass:"client-image"},[r("img",{attrs:{src:e.image,alt:e.name}})]),t._v(" "),r("p",[t._v(t._s(e.feedback))]),t._v(" "),r("div",{staticClass:"client-info"},[r("h4",[t._v(t._s(e.name))]),t._v(" "),r("span",[t._v(t._s(e.position))])])])])})),1)],1)])])])}),[],!1,null,null,null).exports,I={data:function(){return{posts:[{id:1,title:"Styling White Jeans after Labor Day",link:"blog-details",author:"Admin",post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:r(393)},{id:2,title:"he Best Ecommerce Platform for Growing Sales",link:"blog-details",author:"Admin",post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:r(394)},{id:3,title:"The Evolution of the B2B Buying Process",link:"blog-details",author:"Admin",post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:r(395)},{id:4,title:"The Best eCommerce Blogs for Online Retailers",link:"blog-details",author:"Admin",post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:r(396)},{id:5,title:"How to Do Social Media Customer Service",link:"blog-details",author:"Admin",post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:r(397)}]}}},Q=Object(c.a)(I,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("section",{staticClass:"news-area ptb-60"},[r("div",{staticClass:"container"},[r("div",{staticClass:"section-title"},[r("h2",[r("span",{staticClass:"dot"}),t._v(" Bolster News")])]),t._v(" "),r("div",{staticClass:"news-slides owl-carousel owl-theme"},[r("carousel",{attrs:{autoplay:!0,autoplayTimeout:1e3,perPageCustom:[[0,1],[768,2],[1024,3],[1200,3]]}},t._l(t.posts,(function(e){return r("slide",{key:e.id},[r("div",{staticClass:"single-news-post"},[r("div",{staticClass:"news-image"},[r("nuxt-link",{attrs:{to:e.link}},[r("img",{attrs:{src:e.image,alt:e.title}})])],1),t._v(" "),r("div",{staticClass:"news-content"},[r("h3",[r("nuxt-link",{attrs:{to:e.link}},[t._v(t._s(e.title))])],1),t._v(" "),r("span",{staticClass:"author"},[t._v("By "),r("a",{attrs:{href:"#"}},[t._v(t._s(e.author))])]),t._v(" "),r("p",[t._v(t._s(e.post))]),t._v(" "),r("a",{staticClass:"btn btn-light",attrs:{href:"#"}},[t._v("Read More")])])])])})),1)],1)])])])}),[],!1,null,null,null).exports,$=r(327),P=r(329),S=r(328),B={components:{Banner:n,Offer:d,LatestProducts:m.a,ProductCategory:f,TrendingProducts:A,BestSellers:k,Facility:x,Testimonials:E,News:Q,Subscribe:$.a,Partner:P.a,InstagramPhotos:S.a}},T=Object(c.a)(B,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Banner"),t._v(" "),r("Offer"),t._v(" "),r("LatestProducts"),t._v(" "),r("ProductCategory"),t._v(" "),r("TrendingProducts"),t._v(" "),r("BestSellers"),t._v(" "),r("Facility"),t._v(" "),r("Testimonials"),t._v(" "),r("News"),t._v(" "),r("Subscribe"),t._v(" "),r("Partner"),t._v(" "),r("InstagramPhotos")],1)}),[],!1,null,null,null);e.default=T.exports}}]);