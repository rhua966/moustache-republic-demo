(this["webpackJsonpmoustache-republic-demo"]=this["webpackJsonpmoustache-republic-demo"]||[]).push([[0],{27:function(t,e,c){},28:function(t,e,c){"use strict";c.r(e);var a=c(0),r=c(9),i=c.n(r),n=c(7),o=c(2),s=c(3),_=c.n(s),d={id:"123456",key:"arbitraryProductKey",name:"Classic Tee",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",avaliableSizes:["S","M","L"],image:"classic-tee.jpg",price:75},l=c(1),u=function(){var t=Object(a.useState)(d),e=Object(n.a)(t,2),c=e[0],r=e[1],i=Object(a.useState)(null),s=Object(n.a)(i,2),u=s[0],m=s[1],j=Object(o.b)();return Object(a.useEffect)((function(){r(d),console.log(c)}),[]),Object(l.jsx)(l.Fragment,{children:c&&Object(l.jsxs)("main",{className:_.a.product,children:[Object(l.jsx)("div",{className:_.a.product__image,children:Object(l.jsx)("img",{style:{width:"100%",height:"100%"},src:c.image,alt:"Tee"})}),Object(l.jsxs)("div",{className:_.a.product__details,children:[Object(l.jsx)("div",{className:_.a.product__name,children:c.name}),Object(l.jsx)("div",{className:_.a.product__price,children:"$".concat(c.price.toFixed(2))}),Object(l.jsx)("div",{className:_.a.product__description,children:c.description}),Object(l.jsxs)("div",{className:_.a["product__size-label"],children:[Object(l.jsx)("span",{children:"SIZE"}),Object(l.jsx)("span",{style:{color:"#C90000"},children:"* "}),Object(l.jsx)("span",{style:{color:"#222222"},children:u})]}),Object(l.jsx)("div",{className:_.a["product__size-buttons"],children:c.avaliableSizes.map((function(t){return Object(l.jsx)("div",{style:{borderColor:t===u?"#222222":"#CCCCCC"},onClick:function(){m(t)},children:t},t)}))}),Object(l.jsx)("div",{className:_.a["product__buy-button"],onClick:function(){console.log("CLICKED!"),j({type:"ADD",item:{key:c.key+u,name:c.name,size:u,image:c.image,price:c.price,amount:1}})},children:"ADD TO CART"})]})]})})},m=c(4),j=c.n(m),b=function(t){var e=t.display,c=Object(o.b)(),a=Object(o.c)((function(t){return t.cart})),r=Object(o.c)((function(t){return t.totalPrice}));return Object(l.jsx)("div",{className:j.a.cart,style:e?{border:"1px solid"}:{},children:0===a.length?Object(l.jsx)("div",{style:{display:"flex",fontSize:"12px",justifyContent:"center",alignItems:"center"},children:"Please buy something first"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:j.a.cart__items,children:a.map((function(t){var e=t.key,a=t.name,r=t.size,i=t.image,n=t.price,o=t.amount;return Object(l.jsxs)("div",{className:j.a.cart__item,children:[Object(l.jsx)("div",{className:j.a["cart__item-img"],children:Object(l.jsx)("img",{style:{width:"100%",height:"100%"},src:i,alt:a})}),Object(l.jsxs)("div",{className:j.a["cart__item-detail"],children:[Object(l.jsx)("div",{children:a}),Object(l.jsx)("div",{children:"$".concat(n.toFixed(2)," x ").concat(o)}),Object(l.jsx)("div",{children:"Size: ".concat(r)}),Object(l.jsx)("div",{className:j.a["cart__item-delete"],onClick:function(){c({type:"REMOVE",item:t})},children:"Delete"})]})]},e)}))}),Object(l.jsxs)("div",{className:j.a.cart__summary,children:[Object(l.jsx)("div",{className:j.a["cart__summary-clear"],onClick:function(){c({type:"CLEAR"})},children:"CLEAR"}),Object(l.jsx)("div",{className:j.a["cart__summary-total"],children:"Total: $".concat(r.toFixed(2))})]})]})})},p=c(8),h=c.n(p),x=function(){var t=Object(a.useState)(!1),e=Object(n.a)(t,2),c=e[0],r=e[1],i=Object(o.c)((function(t){return t.totalAmount}));return Object(l.jsxs)("header",{className:h.a.header,children:[c&&Object(l.jsx)("div",{className:h.a.header__cart,children:Object(l.jsx)(b,{display:c})}),Object(l.jsx)("div",{className:h.a.header__button,style:c?{border:"1px solid gray",background:"white",borderBottomColor:"#ffffff"}:{border:0},children:Object(l.jsx)("div",{className:h.a["header__button-text"],onClick:function(){r((function(t){return!t}))},children:"My Cart".concat(i>0?"(".concat(i,")"):"")})})]})},O=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(x,{}),Object(l.jsx)(u,{})]})},y=c(14),f=c(15),v=c(5),g={cart:[],totalPrice:0,totalAmount:0},C=Object(y.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD":var c=t.cart.some((function(t){return t.key===e.item.key}));return c?{cart:t.cart.map((function(t){return t.key===e.item.key?Object(v.a)(Object(v.a)({},t),{},{amount:t.amount+e.item.amount}):t})),totalAmount:t.totalAmount+e.item.amount,totalPrice:t.totalPrice+e.item.price}:{cart:[].concat(Object(f.a)(t.cart),[e.item]),totalAmount:t.totalAmount+1,totalPrice:t.totalPrice+e.item.price};case"REMOVE":return{cart:t.cart.filter((function(t){return t.key!==e.item.key})),totalAmount:t.totalAmount-1,totalPrice:t.totalPrice-e.item.price};case"CLEAR":return g;default:return t}}));c(27);i.a.render(Object(l.jsx)(o.a,{store:C,children:Object(l.jsx)(O,{})}),document.getElementById("root"))},3:function(t,e,c){t.exports={product:"Product_product__13VZ3",product__image:"Product_product__image__36s_G",product__details:"Product_product__details__3UBxW",product__name:"Product_product__name__2EvGG",product__description:"Product_product__description__3qlhS",product__price:"Product_product__price__2coNs","product__size-label":"Product_product__size-label__12TZi","product__size-buttons":"Product_product__size-buttons__906WI","product__buy-button":"Product_product__buy-button__3VxUu"}},4:function(t,e,c){t.exports={cart:"MiniCart_cart__1zJDc",cart__items:"MiniCart_cart__items__60Bc5",cart__item:"MiniCart_cart__item__1ulNg","cart__item-img":"MiniCart_cart__item-img__27ph3","cart__item-detail":"MiniCart_cart__item-detail__g3Vic","cart__item-delete":"MiniCart_cart__item-delete__ZgUM-",cart__summary:"MiniCart_cart__summary__KZB-J","cart__summary-clear":"MiniCart_cart__summary-clear__9lGG8","cart__summary-total":"MiniCart_cart__summary-total__3ykQw"}},8:function(t,e,c){t.exports={header:"Header_header__16kyM",header__cart:"Header_header__cart__1Dm8L",header__button:"Header_header__button__2aC_c","header__button-text":"Header_header__button-text__3u4fW"}}},[[28,1,2]]]);
//# sourceMappingURL=main.55d8f08c.chunk.js.map