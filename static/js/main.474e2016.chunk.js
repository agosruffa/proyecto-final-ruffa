(this["webpackJsonpclase-09-eventos"]=this["webpackJsonpclase-09-eventos"]||[]).push([[0],{161:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){},169:function(e,t,c){},170:function(e,t,c){},171:function(e,t,c){},174:function(e,t,c){},175:function(e,t,c){},179:function(e,t,c){},180:function(e,t,c){},181:function(e,t,c){},182:function(e,t,c){},183:function(e,t,c){},184:function(e,t,c){},185:function(e,t,c){},186:function(e,t,c){},187:function(e,t,c){},188:function(e,t,c){},189:function(e,t,c){},190:function(e,t,c){},191:function(e,t,c){},193:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(42),a=c.n(i),s=(c(161),c(14)),r=c(15),o=(c(162),c(132),c(163),c.p+"static/media/logo-1.30157dcb.png"),l=c(2),j=function(){return Object(l.jsx)("div",{className:"Header",children:Object(l.jsx)("h1",{children:Object(l.jsx)(s.b,{to:"/",children:Object(l.jsx)("img",{src:o,alt:"logo",width:"200"})})})})},d=(c(169),c(113)),b=c(13),u=Object(n.createContext)({}),O=function(e){var t=e.children,c=function(){return null!==localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]},i=function(){return null!==localStorage.getItem("my-orders")?JSON.parse(localStorage.getItem("my-orders")):[]},a=Object(n.useState)(c),s=Object(b.a)(a,2),r=s[0],o=s[1],j=Object(n.useState)(0),O=Object(b.a)(j,2),m=O[0],x=O[1],h=Object(n.useState)(0),f=Object(b.a)(h,2),p=f[0],v=f[1],g=Object(n.useState)(i),N=Object(b.a)(g,2),I=N[0],A=N[1];Object(n.useEffect)((function(){S(),localStorage.setItem("cart",JSON.stringify(r)),localStorage.setItem("my-orders",JSON.stringify(I)),y()}));var S=function(){var e=r.reduce((function(e,t){return e+t.quantity}),0);x(e)},y=function(){var e=r.reduce((function(e,t){return e+t.price*t.quantity}),0);v(e)};return Object(l.jsx)(u.Provider,{value:{addToCart:function(e){var t=r.find((function(t){return t.item===e.item}));if(void 0!==t){var c=r.findIndex((function(t){return t.item===e.item}));r.splice(c,1,{item:e.item,quantity:e.quantity+t.quantity,price:e.price,img:e.img,id:e.id,stock:e.stock})}else o([].concat(Object(d.a)(r),[{item:e.item,quantity:e.quantity,price:e.price,img:e.img,id:e.id,stock:e.stock}]))},isInCart:function(e){return r.find((function(t){return t.item===e}))},cart:r,setCart:o,items:m,updateItems:S,total:p,deleteItem:function(e){var t=r.filter((function(t){return t.item!==e}));o(t),localStorage.setItem("cart",JSON.stringify(t))},orderIds:I,setOrderIds:A,itemsInLocal:c,ordersInLocal:i},children:t})},m=c(65),x=(c(170),function(){var e=Object(n.useContext)(u).items;return Object(l.jsxs)("div",{className:"cartwidget-container",children:[e>0&&Object(l.jsx)("div",{className:"total-items",children:Object(l.jsx)("p",{children:e})}),Object(l.jsxs)(s.b,{to:"/cart",children:[" ",Object(l.jsx)(m.a,{name:"shopping cart",inverted:!0,color:"grey",size:"large"})]})]})}),h=function(){return Object(l.jsx)("nav",{className:"Navegation",children:Object(l.jsxs)("ul",{className:"Navegation-ul",children:[Object(l.jsx)(s.b,{to:"/",children:Object(l.jsx)("li",{children:"Home"})}),Object(l.jsx)(s.b,{to:"/Products",children:Object(l.jsx)("li",{children:"Productos"})}),Object(l.jsx)(s.b,{to:"/Contact",children:Object(l.jsx)("li",{children:"Contacto"})}),Object(l.jsx)(s.b,{to:"/my-orders",children:Object(l.jsx)("li",{children:"Mis Compras"})}),Object(l.jsx)(x,{})]})})},f=(c(171),c(194)),p=function(){return Object(l.jsxs)("div",{className:"Footer",children:[Object(l.jsx)(f.a,{circular:!0,color:"facebook",icon:"facebook"}),Object(l.jsx)(f.a,{circular:!0,color:"twitter",icon:"twitter"}),Object(l.jsx)(f.a,{circular:!0,color:"linkedin",icon:"linkedin"}),Object(l.jsx)(f.a,{circular:!0,color:"google plus",icon:"google plus"})]})},v=(c(174),function(e){var t=e.item,c=e.quantity,n=e.price,i=e.img,a=e.deleteItem;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"cart-item ",children:[Object(l.jsx)(m.a,{onClick:function(){return a(t)},link:!0,name:"close"}),Object(l.jsx)("div",{className:"item-img item",style:{backgroundImage:"url(".concat(i,")")}}),Object(l.jsx)("div",{className:"item-name item",children:t}),Object(l.jsx)("div",{className:"item-quantity item",children:c}),Object(l.jsxs)("div",{className:"item-value item",children:["$ ",n]}),Object(l.jsxs)("div",{className:"item-totalValue item",children:["$ ",c*n]})]}),Object(l.jsx)("hr",{})]})}),g=(c(175),function(){var e=Object(n.useContext)(u),t=e.cart,c=e.total,i=e.deleteItem;return 0!==t.length?Object(l.jsx)("div",{className:"cart-container",children:Object(l.jsxs)("div",{className:"cart",children:[Object(l.jsxs)("div",{className:"cart-columns",children:[Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"IMAGEN"}),Object(l.jsx)("p",{children:"NOMBRE"}),Object(l.jsx)("p",{children:"CANTIDAD"}),Object(l.jsx)("p",{children:"VALOR UNITARIO"}),Object(l.jsx)("p",{children:"TOTAL"})]}),Object(l.jsx)("div",{className:"cart-items",children:t.map((function(e){var t=e.item,c=e.quantity,n=e.price,a=e.img;return Object(l.jsx)(v,{item:t,quantity:c,price:n,img:a,deleteItem:i},t)}))}),Object(l.jsxs)("div",{className:"cart-total",children:[Object(l.jsxs)("p",{className:"total-amount",children:["SUBTOTAL $",c]}),Object(l.jsx)(s.b,{to:"/order",className:"waves-effect btn",children:"FINALIZAR COMPRA"})]})]})}):Object(l.jsxs)("div",{className:"cart-container-empty",children:[Object(l.jsx)(m.a,{name:"shopping cart",size:"massive"}),Object(l.jsxs)("h4",{className:"empty-cart-title",children:["NO HAY PRODUCTOS EN TU CARRITO ",Object(l.jsx)("br",{})," "]}),Object(l.jsx)(s.b,{to:"/Products",children:Object(l.jsx)("button",{className:"btn backToLanding-btn",children:"VOLVER A LA TIENDA"})})]})}),N=c(128),I=c.n(N),A=c(140),S=c(109),y=c(43),C=c(110),k=(c(177),C.a.initializeApp({apiKey:"AIzaSyA9ArDl843okbl_cPiNR3ZFMJNEerwt9ig",authDomain:"shopping-cart-react-d5da6.firebaseapp.com",projectId:"shopping-cart-react-d5da6",storageBucket:"shopping-cart-react-d5da6.appspot.com",messagingSenderId:"316858858605",appId:"1:316858858605:web:b27a58a4a52f8674fd9364"}).firestore()),R=(c(135),c(207)),T=(c(179),function(e){var t=e.title;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"not-exist-item",children:[Object(l.jsx)(m.a,{name:"shopping cart",size:"massive"}),Object(l.jsx)("h4",{children:t}),Object(l.jsx)(s.b,{to:"/Products",children:Object(l.jsx)("button",{className:"btn backToLanding-btn",children:"IR A LA TIENDA"})})]})})}),E=(c(180),function(e){e.id;var t=Object(n.useState)(!1),c=Object(b.a)(t,2),i=c[0],a=c[1],s=Object(n.useState)(),o=Object(b.a)(s,2),j=o[0],O=o[1],x=Object(n.useContext)(u),h=x.cart,f=x.setCart,p=x.total,v=x.orderIds,g=x.setOrderIds,N=x.itemsInLocal,E=Object(n.useState)(!1),q=Object(b.a)(E,2),w=q[0],P=q[1],D=Object(r.f)(),L=Object(n.useState)({name:"",lastname:"",phone:"",email:"",items:h.map((function(e){return{id:e.id,item:e.item,price:e.price,qty:e.quantity}})),date:C.a.firestore.Timestamp.fromDate(new Date),total:p}),z=Object(b.a)(L,2),F=z[0],M=z[1],U=function(){var e=k.collection("Productos"),t=k.batch();h.forEach((function(c){t.update(e.doc(c.id),{stock:c.stock-c.quantity})})),t.commit().then((function(){console.log("Bache ok")})).catch((function(e){return console.log(e)}))},B=function(e){M(Object(y.a)(Object(y.a)({},F),{},Object(S.a)({},e.target.name,e.target.value)))},G=function(){var e=Object(A.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),P(!0),localStorage.removeItem("cart"),f(N),U(),""!==j&&D.push("/my-orders"),e.prev=6,e.next=9,k.collection("orders").add(F).then((function(e){var t=e.id;g([].concat(Object(d.a)(v),[{id:t}])),O(t)}));case 9:console.log("upload success"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),a(e.t0);case 15:t.target.reset();case 16:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}();return 0===h.length&&!1===w?Object(l.jsx)(T,{title:"BUSCAR PRODUCTOS"}):Object(l.jsx)("div",{className:"buy-form-container",children:Object(l.jsxs)("form",{className:"form-container",onSubmit:G,children:[Object(l.jsx)("h3",{className:"total-amount",children:"COMPLETE SUS DATOS PARA FINALIZAR LA COMPRA"}),Object(l.jsx)("span",{}),Object(l.jsxs)("div",{className:"input-field",children:[Object(l.jsx)(m.a,{name:"user",size:"large"}),Object(l.jsx)(R.a,{type:"text",class:"form-control",id:"exampleFormControlInput1",style:{fontSize:15,width:400},placeholder:"Nombre",name:"name",required:!0,onChange:B})]}),Object(l.jsxs)("div",{className:"input-field",children:[Object(l.jsx)(m.a,{name:"user",size:"large"}),Object(l.jsx)(R.a,{type:"text",class:"form-control",id:"exampleFormControlInput1",style:{fontSize:15,width:400},placeholder:"Apellido",name:"lastname",required:!0,onChange:B})]}),Object(l.jsxs)("div",{className:"input-field",children:[Object(l.jsx)(m.a,{name:"phone",size:"large"}),Object(l.jsx)(R.a,{type:"text",class:"form-control",id:"exampleFormControlInput1",style:{fontSize:15,width:400},placeholder:"Tel\xe9fono",name:"phone",required:!0,onChange:B})]}),Object(l.jsxs)("div",{className:"input-field",children:[Object(l.jsx)(m.a,{name:"mail",size:"large"}),Object(l.jsx)(R.a,{type:"email",class:"form-control",id:"exampleFormControlInput1",style:{fontSize:15,width:400},placeholder:"name@example.com",name:"email",required:!0,onChange:B})]}),Object(l.jsxs)("h4",{className:"total-amount",children:["EL TOTAL DE SU COMPRA ES: \xa0 $",p]}),Object(l.jsx)("span",{}),i&&Object(l.jsx)("p",{children:i}),w?Object(l.jsx)("button",{className:"waves-effect btn btn-getOrder ",children:Object(l.jsx)("div",{className:"loop",children:Object(l.jsx)(m.a,{name:"sync",size:"large"})})}):Object(l.jsx)("button",{type:"submit",className:"waves-effect btn btn-buy ",children:"FINALIZAR COMPRA"})]})})}),q=c(142),w=(c(181),function(){return Object(l.jsx)("div",{className:"loader-screen",children:Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{loading:!0,name:"spinner",size:"huge"})})})}),P=(c(182),function(){var e=Object(n.useContext)(u),t=e.orderIds,c=e.setOrderIds,i=Object(n.useState)([]),a=Object(b.a)(i,2),s=a[0],r=a[1],o=Object(n.useState)(!0),j=Object(b.a)(o,2),d=j[0],O=j[1];Object(n.useEffect)((function(){var e=!0;if(e){return function(e,t){var c=e.map((function(e){var t=e.id;return k.collection("orders").doc(t).get()}));Promise.all(c).then((function(e){var c=e.map((function(e){return Object(y.a)({id:e.id},e.data())}));t(c.reverse())})).catch((function(e){return console.log(e)})).finally((function(){O(!1)}))}(t,r),function(){e=!1}}}),[t]);var m=function(e){return q.DateTime.fromSeconds(e)};return d?Object(l.jsx)(w,{}):Object(l.jsx)("div",{className:"orders-container",children:Object(l.jsxs)("div",{className:"orders-organizer",children:[Object(l.jsx)("h3",{className:"title",children:"MIS COMPRAS"}),Object(l.jsx)("button",{className:"waves-effect  waves-light btn",onClick:function(){localStorage.removeItem("my-orders"),c([])},children:"BORRAR HISTORIAL DE COMPRAS"}),Object(l.jsxs)("div",{className:"orders-columns",children:[Object(l.jsx)("p",{children:"FECHA"}),Object(l.jsx)("p",{children:"PRODUCTOS"}),Object(l.jsx)("p",{children:"C\xd3DIGO DE PEDIDO"}),Object(l.jsx)("p",{children:"TOTAL"})]}),Object(l.jsx)("div",{className:"orders",children:s.length>0&&s.map((function(e){var t=e.id,c=e.total,n=e.date,i=e.items;return Object(l.jsxs)("div",{className:"order-row",children:[Object(l.jsx)("div",{className:"order-info date",children:n&&"".concat(m(n.seconds).c.day,"/").concat(m(n.seconds).c.month,"/").concat(m(n.seconds).c.year," \n                                        ").concat(m(n.seconds).c.hour,":").concat(m(n.seconds).c.minute," ")}),Object(l.jsx)("div",{className:"order-info items",children:Object(l.jsx)("ul",{children:i&&i.map((function(e){return Object(l.jsxs)("li",{className:"truncate",children:[" ",e.qty," x ",e.item," "]},e.id)}))})}),Object(l.jsxs)("div",{className:"order-info id ",children:[" ",t," "]}),Object(l.jsxs)("div",{className:"order-info total",children:[" $",c," "]})]},t)}))})]})})}),D=c(144),L=(c(183),c.p+"static/media/fitness.d43b9b10.png"),z=function(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsx)(D.a,{src:L,fluid:!0})})},F=c(208),M=c(210),U=c(209),B=(c(184),function(){return Object(l.jsx)(F.a,{className:"home",children:Object(l.jsxs)(M.a,{className:"formulario-contacto",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:"titulo",children:"CONTACTANOS"})}),Object(l.jsx)("hr",{}),Object(l.jsx)("br",{}),Object(l.jsxs)(M.a.Group,{widths:"equal",children:[Object(l.jsx)(M.a.Field,{id:"form-input-control-first-name",control:R.a,label:"Nombre",placeholder:"Nombre"}),Object(l.jsx)(M.a.Field,{id:"form-input-control-last-name",control:R.a,label:"Apellido",placeholder:"Apellido"})]}),Object(l.jsx)(M.a.Field,{id:"form-textarea-control-opinion",control:U.a,label:"Dejanos tu consulta",placeholder:"Consulta"}),Object(l.jsx)(M.a.Field,{id:"form-input-control-error-email",control:R.a,label:"Email",placeholder:"joe@schmoe.com"}),Object(l.jsx)(M.a.Field,{id:"form-button-control-public",control:f.a,content:"Enviar",label:"",color:"red"})]})})}),G=c(211),H=(c(185),function(e){var t=e.id,c=e.title,n=e.price,i=e.image;return Object(l.jsx)("div",{className:"",children:Object(l.jsx)("div",{className:"items-2",children:Object(l.jsx)(s.b,{to:"/item/".concat(t),children:Object(l.jsx)("div",{class:"ui link cards",children:Object(l.jsxs)(G.a,{children:[Object(l.jsx)("img",{src:i,alt:"",wrapped:!0,ui:!1,height:"180"}),Object(l.jsxs)(G.a.Content,{children:[Object(l.jsx)(G.a.Header,{children:c}),Object(l.jsxs)(G.a.Description,{children:["$",n]})]})]})})})})})}),J=(c(186),function(e){var t=e.items;return Object(l.jsx)("div",{className:"ItemList",children:t.map((function(e){return Object(l.jsx)(H,{id:e.id,title:e.title,price:e.price,image:e.image},e.id)}))})}),$=(c(187),function(){var e=Object(r.g)().categoryId,t=Object(n.useState)([]),c=Object(b.a)(t,2),i=c[0],a=c[1];return Object(n.useEffect)((function(){var e=!0;return k.collection("Productos").get().then((function(t){if(e){0===t.size&&console.log("No results!");var c=t.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));a(c)}})).catch((function(e){console.log("Error searching items",e)})),function(){e=!1}}),[]),i.length>0?void 0!==e?Object(l.jsx)("div",{className:"item-list-container",children:Object(l.jsx)(J,{items:i.filter((function(t){return t.category==="".concat(e)}))})}):Object(l.jsx)("div",{className:"item-list-container ",children:Object(l.jsx)(J,{items:i})}):Object(l.jsx)(w,{})});var V=function(){return Object(l.jsx)("div",{children:Object(l.jsx)($,{})})},Z=(c(188),c(189),c(143)),K=(c(190),function(e){var t=e.setIsAdded,c=e.initial,i=e.stock,a=e.item,s=Object(n.useContext)(u),r=s.addToCart,o=s.isInCart,j=s.updateItems;c=0===i?"Sin stock":1;var d=Object(n.useState)(c),O=Object(b.a)(d,2),m=O[0],x=O[1],h=Object(n.useState)(),f=Object(b.a)(h,2),p=f[0],v=f[1],g=Object(n.useState)(),N=Object(b.a)(g,2),I=N[0],A=N[1],S=Object(n.useCallback)((function(){return o(a.title)}),[o,a.title]),y=Object(n.useCallback)((function(){var e=S();(null===e||void 0===e?void 0:e.quantity)+m===a.stock?A(!0):A(!1)}),[m,S,a.stock]);return Object(n.useEffect)((function(){v(S),y()}),[S,y]),Object(l.jsxs)("div",{className:"item-counter",children:[Object(l.jsxs)("div",{className:"counter-container",children:[Object(l.jsx)("button",{onClick:function(){return x(m-1)},className:"btn counter-btn",disabled:m<=c,children:Object(l.jsx)("p",{children:"-"})}),Object(l.jsx)("p",{className:"counter-value",onChange:S,children:void 0!==p&&(null===p||void 0===p?void 0:p.quantity)===(null===p||void 0===p?void 0:p.stock)?"NO HAY M\xc1S STOCK":m}),Object(l.jsx)("button",{onClick:function(){return x(m+1)},className:"btn counter-btn",disabled:m>=i||0===i||void 0!==p&&(null===p||void 0===p?void 0:p.quantity)===(null===p||void 0===p?void 0:p.stock)||I,children:Object(l.jsx)("p",{children:"+"})})]}),Object(l.jsx)("button",{onClick:function(){r({item:a.title,quantity:m,price:a.price,img:a.image,id:a.id,stock:a.stock}),x(c),t(!0),j(),Object(Z.a)("".concat(m," ").concat(m>1?"items agregados":"item agregado"," al carrito "),{position:"top-left",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})},className:"btn",disabled:0===i||void 0!==p&&(null===p||void 0===p?void 0:p.quantity)===(null===p||void 0===p?void 0:p.stock),children:void 0!==p?"AGREGAR ".concat(m," M\xc1S"):"AGREGAR AL CARRITO"})]})}),Y=(c(191),function(){return Object(l.jsx)("div",{className:"finish-buying",children:Object(l.jsxs)(s.b,{to:"/cart",className:"btn",children:["IR AL CARRITO",Object(l.jsx)(m.a,{name:"shopping cart",size:"large"})]})})}),_=function(e){var t=e.item,c=Object(n.useState)(!1),i=Object(b.a)(c,2),a=i[0],s=i[1];return Object(l.jsxs)("div",{className:"item-detail",children:[Object(l.jsx)("div",{className:"container-one",children:Object(l.jsxs)("div",{className:"img-counter-container",children:[Object(l.jsx)("div",{className:"big-image-container",children:Object(l.jsx)("div",{className:"big-image",style:{backgroundImage:"url(".concat(t.image,")")}})}),Object(l.jsx)(K,{isAdded:a,setIsAdded:s,initial:t.initial,stock:t.stock,item:t}),a&&Object(l.jsx)(Y,{})]})}),Object(l.jsx)("div",{className:"container-two",children:Object(l.jsxs)("div",{className:"title-price",children:[Object(l.jsx)("h1",{className:"item-name",children:t.title}),Object(l.jsx)("h2",{children:t.description}),Object(l.jsxs)("h3",{children:["$",t.price]}),Object(l.jsxs)("p",{children:["STOCK: ",t.stock]}),Object(l.jsxs)("small",{children:["C\xd3DIGO: ",t.id.slice(0,6)]})]})})]})},Q=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!0),s=Object(b.a)(a,2),o=s[0],j=s[1],d=Object(r.g)().id;return Object(n.useEffect)((function(){k.collection("Productos").doc(d).get().then((function(e){e.exists?i(Object(y.a)({id:e.id},e.data())):i("not exist")})).catch((function(e){return console.log(e)})).finally((function(){j(!1)}))}),[d]),o?Object(l.jsx)(w,{}):"not exist"===c?Object(l.jsx)(T,{title:"El producto que est\xe1 buscando no existe."}):Object(l.jsx)(_,{item:c})};var W=function(){return Object(l.jsx)(s.a,{children:Object(l.jsx)(O,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(h,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",exact:!0,component:z}),Object(l.jsx)(r.a,{path:"/Products",exact:!0,component:V}),Object(l.jsx)(r.a,{path:"/item/:id",component:Q}),Object(l.jsx)(r.a,{path:"/Contact",exact:!0,component:B}),Object(l.jsx)(r.a,{path:"/cart",exact:!0,component:g}),Object(l.jsx)(r.a,{path:"/order",component:E}),Object(l.jsx)(r.a,{path:"/my-orders",component:P})]}),Object(l.jsx)(p,{})]})})})};c(192);a.a.render(Object(l.jsx)(W,{}),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.474e2016.chunk.js.map