(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{315:function(t,e,r){var content=r(321);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("306f6ba8",content,!0,{sourceMap:!1})},316:function(t,e,r){"use strict";r(147),r(16);var c={data:function(){return{days:"",hours:"",minutes:"",seconds:"",timeDate:this.dateTime}},props:["dateTime"],created:function(){var t=this;this.interval=setInterval((function(){return t.timing(t.timeDate)}),1e3)},methods:{timing:function(t){var e=new Date(t),r=Date.parse(e)/1e3,c=new Date,o=r-Date.parse(c)/1e3,n=Math.floor(o/86400),l=Math.floor((o-86400*n)/3600),d=Math.floor((o-86400*n-3600*l)/60),v=Math.floor(o-86400*n-3600*l-60*d);l<"10"&&(l="0"+l),d<"10"&&(d="0"+d),v<"10"&&(v="0"+v),this.days=n,this.hours=l,this.minutes=d,this.seconds=v}}},o=r(11),n={name:"ProductItem",components:{Timer:Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"timer"},[r("div",{staticClass:"days"},[t._v(t._s(t.days))]),t._v(" "),r("div",{staticClass:"hours"},[t._v(t._s(t.hours))]),t._v(" "),r("div",{staticClass:"minutes"},[t._v(t._s(t.minutes))]),t._v(" "),r("div",{staticClass:"seconds"},[t._v(t._s(t.seconds))])])}),[],!1,null,null,null).exports},data:function(){return{getExistPId:null}},props:["product","className"],computed:{cart:function(){return this.$store.getters.cart}},methods:{quickView:function(t){this.$emit("clicked")},addToCart:function(t){var e=[{id:t.id,name:t.name,price:t.price,image:t.image,quantity:1}];if(this.cart.length>0){var r=t.id;this.getExistPId=r,-1==this.cart.findIndex((function(t){return t.id==r}))?(this.$store.dispatch("addToCart",e),this.$toast("Added to cart",{icon:"fas fa-cart-plus"})):(this.$store.dispatch("updateCart",{id:r,unit:1,cart:this.cart}),this.$toast.info("Already added to the cart and update with one"))}else this.$store.dispatch("addToCart",e),this.$toast("Added to cart",{icon:"fas fa-cart-plus"})}}},l=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.className},[r("div",{staticClass:"single-product-box"},[r("div",{staticClass:"product-image"},[r("nuxt-link",{attrs:{to:"/products-details/"+t.product.id}},[r("img",{attrs:{src:t.product.image,alt:t.product.name}}),t._v(" "),r("img",{attrs:{src:t.product.imageHover,alt:t.product.name}})]),t._v(" "),r("ul",[r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"javascript:void(0)",title:"Quick View"},on:{click:function(e){return e.preventDefault(),t.quickView(e)}}},[r("i",{staticClass:"far fa-eye"})])]),t._v(" "),r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Add to Wishlist"}},[r("i",{staticClass:"far fa-heart"})])]),t._v(" "),r("li",[r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{href:"#",title:"Add to Compare"}},[r("i",{staticClass:"fas fa-sync"})])])]),t._v(" "),t.product.timePeriod?r("Timer",{attrs:{dateTime:t.product.dateTime}}):t._e()],1),t._v(" "),r("div",{staticClass:"product-content"},[r("h3",[r("nuxt-link",{attrs:{to:"/products-details/"+t.product.id}},[t._v(t._s(t.product.name))])],1),t._v(" "),r("div",{staticClass:"product-price"},[t.product.offer?r("span",{staticClass:"old-price"},[t._v("\n                    $"+t._s(t.product.price-t.product.offerPrice)+"\n                ")]):t._e(),t._v(" "),r("span",{staticClass:"new-price"},[t._v("$"+t._s(t.product.price))])]),t._v(" "),t._m(0),t._v(" "),t.getExistPId===t.product.id?r("a",{staticClass:"btn btn-light added-btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Added Already!\n            ")]):r("a",{staticClass:"btn btn-light",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.addToCart(t.product)}}},[t._v("\n                Add to Cart\n            ")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rating"},[e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"fas fa-star"}),this._v(" "),e("i",{staticClass:"far fa-star"})])}],!1,null,null,null);e.a=l.exports},317:function(t,e,r){"use strict";r(147),r(16);var c=r(46),o={name:"QuckView",data:function(){return{quantity:1,item:{id:4,name:"Criss-cross V neck bodycon",price:200,offer:!1,offerPrice:7,latest:!0,bestSellers:!1,trending:!1,image:r(148),imageHover:r(149),timePeriod:!1,dateTime:new Date("December 19, 2020 17:00:00 PDT")}}},methods:{closeQuickView:c.a.toggleQuickView,addToCart:function(t){var e=[{id:t.id,name:t.name,price:t.price,image:t.image,quantity:this.quantity}];if(this.cart.length>0){var r=t.id;this.getExistPId=r,-1==this.cart.findIndex((function(t){return t.id==r}))?(this.$store.dispatch("addToCart",e),this.$toast("Added to cart",{icon:"fas fa-cart-plus"})):(this.$store.dispatch("updateCart",{id:r,unit:1,cart:this.cart}),this.$toast.info("Already added to the cart and update with one"))}else this.$store.dispatch("addToCart",e),this.$toast("Added to cart",{icon:"fas fa-cart-plus"});this.closeQuickView()},increaseQuantity:function(){this.quantity>9?this.$toast.error("Can't add more than 10",{icon:"fas fa-cart-plus"}):this.quantity++},decreaseQuantity:function(){this.quantity<2?this.$toast.error("Can't add less than 1",{icon:"fas fa-cart-plus"}):this.quantity--}},computed:{isQuickViewOpen:function(){return c.b.isQuickViewOpen},cart:function(){return this.$store.getters.cart}}},n=(r(320),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[t.isQuickViewOpen?c("div",{staticClass:"modal-backdrop"}):t._e(),t._v(" "),c("transition",{attrs:{name:"slide-fade"}},[t.isQuickViewOpen?c("div",{staticClass:"modal fade productQuickView",attrs:{id:"productQuickView",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[c("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[c("div",{staticClass:"modal-content"},[c("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.closeQuickView}},[c("span",{attrs:{"aria-hidden":"true"}},[c("i",{staticClass:"fas fa-times"})])]),t._v(" "),c("div",{staticClass:"row align-items-center"},[c("div",{staticClass:"col-lg-6 col-md-6"},[c("div",{staticClass:"productQuickView-image"},[c("img",{attrs:{src:r(319),alt:"image"}})])]),t._v(" "),c("div",{staticClass:"col-lg-6 col-md-6"},[c("div",{staticClass:"product-content"},[c("h3",[c("a",{attrs:{href:"#"}},[t._v("Neck empire sleeve t-shirts")])]),t._v(" "),c("div",{staticClass:"price"},[c("span",{staticClass:"new-price"},[t._v("$191.00")])]),t._v(" "),c("div",{staticClass:"product-review"},[c("div",{staticClass:"rating"},[c("i",{staticClass:"fas fa-star"}),t._v(" "),c("i",{staticClass:"fas fa-star"}),t._v(" "),c("i",{staticClass:"fas fa-star"}),t._v(" "),c("i",{staticClass:"fas fa-star"}),t._v(" "),c("i",{staticClass:"fas fa-star-half-alt"})]),t._v(" "),c("a",{staticClass:"rating-count",attrs:{href:"#"}},[t._v("3 reviews")])]),t._v(" "),c("ul",{staticClass:"product-info"},[c("li",[c("span",[t._v("Vendor:")]),t._v(" "),c("a",{attrs:{href:"#"}},[t._v("Lereve")])]),t._v(" "),c("li",[c("span",[t._v("Availability:")]),t._v(" "),c("a",{attrs:{href:"#"}},[t._v("In stock (7 items)")])]),t._v(" "),c("li",[c("span",[t._v("Product Type:")]),t._v(" "),c("a",{attrs:{href:"#"}},[t._v("T-Shirt")])])]),t._v(" "),c("div",{staticClass:"product-color-switch"},[c("h4",[t._v("Color:")]),t._v(" "),c("ul",[c("li",[c("a",{staticClass:"color-black",attrs:{href:"#",title:"Black"}})]),t._v(" "),c("li",[c("a",{staticClass:"color-white",attrs:{href:"#",title:"White"}})]),t._v(" "),c("li",{staticClass:"active"},[c("a",{staticClass:"color-green",attrs:{href:"#",title:"Green"}})]),t._v(" "),c("li",[c("a",{staticClass:"color-yellowgreen",attrs:{href:"#",title:"Yellow Green"}})]),t._v(" "),c("li",[c("a",{staticClass:"color-teal",attrs:{href:"#",title:"Teal"}})])])]),t._v(" "),c("div",{staticClass:"product-size-wrapper"},[c("h4",[t._v("Size:")]),t._v(" "),c("ul",[c("li",[c("a",{attrs:{href:"#"}},[t._v("XS")])]),t._v(" "),c("li",{staticClass:"active"},[c("a",{attrs:{href:"#"}},[t._v("S")])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[t._v("M")])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[t._v("XL")])]),t._v(" "),c("li",[c("a",{attrs:{href:"#"}},[t._v("XXL")])])])]),t._v(" "),c("div",{staticClass:"product-add-to-cart"},[c("div",{staticClass:"input-counter"},[c("span",{staticClass:"minus-btn",on:{click:function(e){return t.decreaseQuantity()}}},[c("i",{staticClass:"fas fa-minus"})]),t._v("\n                                            "+t._s(t.quantity)+"\n                                        "),c("span",{staticClass:"plus-btn",on:{click:function(e){return t.increaseQuantity()}}},[c("i",{staticClass:"fas fa-plus"})])]),t._v(" "),c("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.addToCart(t.item)}}},[c("i",{staticClass:"fas fa-cart-plus"}),t._v(" Add to Cart\n                                    ")])]),t._v(" "),c("a",{staticClass:"view-full-info",attrs:{href:"#"}},[t._v("View full info")])])])])])])]):t._e()])],1)}),[],!1,null,"5dc83282",null);e.a=component.exports},318:function(t,e,r){"use strict";var c=r(325),o=r.n(c);r(326);e.a=o.a.apps.length?o.a.app():o.a.initializeApp({apiKey:"AIzaSyAwbwjqlGCx8YyAm0Dv6v56gopQeGUIZRw",authDomain:"denzilla-2db3f.firebaseapp.com",databaseURL:"https://denzilla-2db3f.firebaseio.com",projectId:"denzilla-2db3f",storageBucket:"denzilla-2db3f.appspot.com",messagingSenderId:"24988187613",appId:"1:24988187613:web:1f188bdfdac0fba2fc9434",measurementId:"G-X600KCW188"})},319:function(t,e,r){t.exports=r.p+"img/66d0432.jpg"},320:function(t,e,r){"use strict";var c=r(315);r.n(c).a},321:function(t,e,r){(e=r(19)(!1)).push([t.i,".slide-fade-enter-active[data-v-5dc83282]{transition:all .3s ease}.slide-fade-leave-active[data-v-5dc83282]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-5dc83282],.slide-fade-leave-to[data-v-5dc83282]{transform:translateX(10px);opacity:0}.modal-backdrop[data-v-5dc83282]{background-color:rgba(0,0,0,.5);width:100vw;height:100vh;position:fixed;top:0;left:0;cursor:pointer;z-index:9}",""]),t.exports=e},322:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},323:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},324:function(t,e,r){t.exports=r.p+"img/d1e9eb0.jpg"},327:function(t,e,r){"use strict";var c=r(318),o={data:function(){return{subscriptions:{email:"",createdAt:new Date}}},methods:{subscribe:function(){""!=this.subscriptions.email&&this.validateEmail(this.subscriptions.email)?(c.a.firestore().collection("subscriptions").add(this.subscriptions),this.$toast.success("Thanks for your subscriptions",{icon:"fas fa-user-check"}),this.subscriptions.email=""):this.$toast.error("Please fillup with a valid email",{icon:"fas fa-times"})},validateEmail:function(t){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)}}},n=r(11),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"subscribe-area ptb-60"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row align-items-center"},[t._m(0),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("form",{staticClass:"newsletter-form",on:{submit:function(t){t.preventDefault()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.subscriptions.email,expression:"subscriptions.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your email address",id:"email",autocomplete:"off"},domProps:{value:t.subscriptions.email},on:{input:function(e){e.target.composing||t.$set(t.subscriptions,"email",e.target.value)}}}),t._v(" "),r("button",{attrs:{type:"submit"},on:{click:t.subscribe}},[t._v("Subscribe!")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"newsletter-content"},[e("h3",[this._v("Subscribe to our newsletter")]),this._v(" "),e("p",[this._v("A short sentence describing what someone will receive by subscribing")])])])}],!1,null,null,null);e.a=component.exports},328:function(t,e,r){"use strict";var c={data:function(){return{photos:[{id:1,photo:r(339),url:"https://www.instagram.com/"},{id:2,photo:r(340),url:"https://www.instagram.com/"},{id:3,photo:r(341),url:"https://www.instagram.com/"},{id:9,photo:r(342),url:"https://www.instagram.com/"},{id:6,photo:r(322),url:"https://www.instagram.com/"},{id:4,photo:r(343),url:"https://www.instagram.com/"},{id:5,photo:r(322),url:"https://www.instagram.com/"},{id:11,photo:r(323),url:"https://www.instagram.com/"},{id:8,photo:r(344),url:"https://www.instagram.com/"},{id:7,photo:r(322),url:"https://www.instagram.com/"},{id:12,photo:r(323),url:"https://www.instagram.com/"},{id:10,photo:r(345),url:"https://www.instagram.com/"},{id:13,photo:r(323),url:"https://www.instagram.com/"}]}}},o=r(11),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("div",{staticClass:"instagram-area"},[r("div",{staticClass:"instagram-slides owl-carousel owl-theme"},[r("carousel",{attrs:{loop:!0,autoplay:!0,autoplayTimeout:5e3,perPageCustom:[[0,2],[768,6],[1200,9]],paginationEnabled:!1}},t._l(t.photos,(function(e){return r("slide",{key:e.id},[r("div",{staticClass:"instagram-box"},[r("img",{attrs:{src:e.photo,alt:"image"}}),t._v(" "),r("div",{staticClass:"icon"},[r("i",{staticClass:"fab fa-instagram"})]),t._v(" "),r("a",{attrs:{href:e.url,target:"_blank"}})])])})),1)],1)])])}),[],!1,null,null,null);e.a=component.exports},329:function(t,e,r){"use strict";var c=r(11),component=Object(c.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("div",{staticClass:"partner-area"},[e("div",{staticClass:"container"},[e("div",{staticClass:"partner-slides owl-carousel owl-theme"},[e("carousel",{attrs:{loop:!0,autoplay:!0,autoplayTimeout:1e3,paginationEnabled:!1,perPageCustom:[[0,2],[768,4],[1200,6]],speed:5e3}},[e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(333),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(334),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(335),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(336),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(337),alt:"image"}})])])]),this._v(" "),e("slide",[e("div",{staticClass:"partner-item"},[e("a",{attrs:{href:"#",target:"_blank"}},[e("img",{attrs:{src:r(338),alt:"image"}})])])])],1)],1)])])])}),[],!1,null,null,null);e.a=component.exports},333:function(t,e,r){t.exports=r.p+"img/e9620a8.png"},334:function(t,e,r){t.exports=r.p+"img/e9620a8.png"},335:function(t,e,r){t.exports=r.p+"img/f6d5014.png"},336:function(t,e,r){t.exports=r.p+"img/f6d5014.png"},337:function(t,e,r){t.exports=r.p+"img/f6d5014.png"},338:function(t,e,r){t.exports=r.p+"img/f6d5014.png"},339:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},340:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},341:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},342:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},343:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},344:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},345:function(t,e,r){t.exports=r.p+"img/0a407a6.jpg"},352:function(t,e,r){"use strict";var c={name:"Facility"},o=r(11),component=Object(o.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"facility-area black-bg"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[r("div",{staticClass:"facility-box"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"fas fa-plane"})]),t._v(" "),r("h3",[t._v("Free Shipping World Wide")])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[r("div",{staticClass:"facility-box"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"fas fa-money-check-alt"})]),t._v(" "),r("h3",[t._v("100% money back guarantee")])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[r("div",{staticClass:"facility-box"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"far fa-credit-card"})]),t._v(" "),r("h3",[t._v("Many payment gatways")])])]),t._v(" "),r("div",{staticClass:"col-lg-3 col-md-6 col-sm-6"},[r("div",{staticClass:"facility-box"},[r("div",{staticClass:"icon"},[r("i",{staticClass:"fas fa-headset"})]),t._v(" "),r("h3",[t._v("24/7 online support")])])])])])])}],!1,null,null,null);e.a=component.exports},353:function(t,e,r){"use strict";var c=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("section",{staticClass:"news-area ptb-60"},[c("div",{staticClass:"container"},[c("div",{staticClass:"section-title"},[c("h2",[c("span",{staticClass:"dot"}),t._v(" Bolster News")])]),t._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-lg-4 col-md-6"},[c("div",{staticClass:"single-blog-post"},[c("div",{staticClass:"blog-image"},[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(150),alt:"image"}})]),t._v(" "),c("div",{staticClass:"post-tag"},[c("a",{attrs:{href:"#"}},[t._v("Shop")])])]),t._v(" "),c("div",{staticClass:"blog-post-content"},[c("span",{staticClass:"date"},[t._v("25 Feb, 2019")]),t._v(" "),c("h3",[c("a",{attrs:{href:"#"}},[t._v("The Most Popular New top Business Apps")])]),t._v(" "),c("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.")]),t._v(" "),c("a",{staticClass:"read-more-btn",attrs:{href:"#"}},[t._v("Read More "),c("i",{staticClass:"icofont-double-right"})])])])]),t._v(" "),c("div",{staticClass:"col-lg-4 col-md-6"},[c("div",{staticClass:"single-blog-post"},[c("div",{staticClass:"blog-image"},[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(324),alt:"image"}})]),t._v(" "),c("div",{staticClass:"post-tag"},[c("a",{attrs:{href:"#"}},[t._v("Inspiration")])])]),t._v(" "),c("div",{staticClass:"blog-post-content"},[c("span",{staticClass:"date"},[t._v("27 Feb, 2019")]),t._v(" "),c("h3",[c("a",{attrs:{href:"#"}},[t._v("The Best Marketing top use Management Tools")])]),t._v(" "),c("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.")]),t._v(" "),c("a",{staticClass:"read-more-btn",attrs:{href:"#"}},[t._v("Read More "),c("i",{staticClass:"icofont-double-right"})])])])]),t._v(" "),c("div",{staticClass:"col-lg-4 col-md-6"},[c("div",{staticClass:"single-blog-post"},[c("div",{staticClass:"blog-image"},[c("a",{attrs:{href:"#"}},[c("img",{attrs:{src:r(151),alt:"image"}})]),t._v(" "),c("div",{staticClass:"post-tag"},[c("a",{attrs:{href:"#"}},[t._v("Sell")])])]),t._v(" "),c("div",{staticClass:"blog-post-content"},[c("span",{staticClass:"date"},[t._v("28 Feb, 2019")]),t._v(" "),c("h3",[c("a",{attrs:{href:"#"}},[t._v("3 WooCommerce Plugins to Boost Sales")])]),t._v(" "),c("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.")]),t._v(" "),c("a",{staticClass:"read-more-btn",attrs:{href:"#"}},[t._v("Read More "),c("i",{staticClass:"icofont-double-right"})])])])])])])])}],o={name:"News"},n=r(11),component=Object(n.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),c,!1,null,null,null);e.a=component.exports}}]);