(this["webpackJsonppro-organiser-app-redux"]=this["webpackJsonppro-organiser-app-redux"]||[]).push([[3],{176:function(e,a,t){e.exports={Card:"Columns_Card__1JPfH",container:"Columns_container__2WhrN",icon:"Columns_icon__28Q2k",button:"Columns_button__13Eac",cardTitle:"Columns_cardTitle__2KlkR",boardName:"Columns_boardName__1kgXn"}},177:function(e,a,t){e.exports={container:"BoardCards_container__1olNM",card:"BoardCards_card__1zWJG",header:"BoardCards_header__2a5NA",button:"BoardCards_button__8ZLWz",footer:"BoardCards_footer__1PFRY",circle:"BoardCards_circle__bvDqQ",name:"BoardCards_name__17e7p",icons:"BoardCards_icons__24ytV",icon:"BoardCards_icon__1dpXC"}},178:function(e,a,t){e.exports={modal:"ViewCard_modal__zJUx_",headContainer:"ViewCard_headContainer__1s9OZ",headDueDate:"ViewCard_headDueDate__2UyH7",close:"ViewCard_close__q_H2H",head:"ViewCard_head__zAZa5",label:"ViewCard_label__1Slri",overlay:"ViewCard_overlay__j8DIm",icons:"ViewCard_icons__SaqgW",icon:"ViewCard_icon__1MZsv"}},179:function(e,a,t){e.exports={icons:"EditDeleteIcons_icons__3qxG2",icon:"EditDeleteIcons_icon__1r0xo"}},180:function(e,a,t){e.exports={modal:"AddCardForm_modal__1klUa",close:"AddCardForm_close__w1skr",head:"AddCardForm_head__2WkT6",label:"AddCardForm_label__3FhFE",error:"AddCardForm_error__3nnnO",overlay:"AddCardForm_overlay__1rkv-",createButton:"AddCardForm_createButton__3O72R"}},181:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(172),c=t(173),o=t(176),s=t.n(o),d=t(62),u=t(171),i=t(177),m=t.n(i),C=t(178),b=t.n(C),f=t(79),_=t.n(f),p=t(167),E=t(168),v=t(169),g=t(102),y=t(175),h=t(179),N=t.n(h),k=t(180),O=t.n(k),D=t(170),j=t(174),B=t(24),K=t.n(B),T=t(18),V=t(33),w=t(110),x=t(89),S=t(81),A=Object(T.b)((function(e){return{setCard:e.card.setCard,editCard:e.card.editCard,setCardValue:e.card.setCardValue,setCardKey:e.card.setCardKey,selectedBoardKey:e.board.selectedBoardKey,selectedBoardValue:e.board.selectedBoardValue,columnKey:e.card.columnKey}}),(function(e){return{closeViewCard:function(a,t){return e(Object(V.b)(a,t))},unsetCard:function(){return e(Object(V.o)())},closeEditCard:function(){return e(Object(V.a)())}}}))((function(e){var a,t,l=e.columnKey,c=e.editCard,o=e.setCardValue,s=e.setCardKey,i=e.setCard,m=e.closeViewCard,C=e.unsetCard,b=e.closeEditCard,f=e.selectedBoardValue,y=e.selectedBoardKey,h=Object(n.useState)([]),N=Object(d.a)(h,2),k=N[0],B=N[1],T=Object(n.useState)([]),V=Object(d.a)(T,2),A=V[0],F=V[1],q=Object(n.useState)(!1),z=Object(d.a)(q,2),M=z[0],J=z[1],R=x.a({taskTitle:x.b().required("Required"),description:x.b().required("Required"),dueDate:x.b().required("Required")}),W=function(e){var a=e.split("-"),t=["None","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(a[1])];return"".concat(a[2]," ").concat(t," ").concat(a[0])},H=Object(w.a)({initialValues:{taskTitle:"",description:"",dueDate:""},onSubmit:function(e){a=W(H.values.dueDate),P(e)},validationSchema:R}),I=function(e){return e.split(",")},Z=function(){Object(S.b)("Card Created!!",{type:"success",autoClose:!1})},P=function(e){for(var t=e.taskTitle,n=e.description,r=0;r<A.length;r++)console.log(A[r].value),k.push(A[r].value);if(b(),m(),console.log("submitted"),!0===c&&!1===i){try{console.log("database"),K.a.database().ref("/boards/".concat(y,"/columns/").concat(l,"/cards/").concat(s)).set({members:k},(function(e){e?console.log(e):(H.resetForm(),F([]),B([]),Z(),console.log("success"))}))}catch(o){console.log(o)}try{K.a.database().ref("/boards/".concat(y,"/columns/").concat(l,"/cards/").concat(s)).update({taskTitle:t,description:n,date:a},(function(e){e?console.log(e):(H.resetForm(),F([]),B([]),Z(),console.log("success"))}))}catch(o){console.log(o)}}else try{console.log("database"),K.a.database().ref("/boards/".concat(y,"/columns/").concat(l,"/cards/").concat(Object(j.a)())).set({taskTitle:t,members:k,description:n,date:a},(function(e){e?console.log(e):(H.resetForm(),F([]),B([]),Z(),console.log("success"))}))}catch(o){console.log(o)}console.log("editcardFalse")};Object(n.useEffect)((function(){!0===c&&!1===i&&(H.values.taskTitle=o.taskTitle,H.values.description=o.description,B(o.members),H.values.dueDate=o.dueDate)}),[o,c,i,H.values.taskTitle,H.values.description,H.values.dueDate]);var U=function(){C(),m(),b()};return r.a.createElement(_.a,{isOpen:i||c,onRequestClose:function(){return U()},className:O.a.modal,overlayClassName:O.a.overlay},r.a.createElement("div",{className:O.a.close},r.a.createElement(g.a,{size:30,color:"grey",onClick:function(){return U()}})),r.a.createElement("p",{className:O.a.head}," Add Task"),r.a.createElement(p.a,{className:O.a.form,onSubmit:H.handleSubmit},r.a.createElement(E.a,null,r.a.createElement(v.a,{className:O.a.label},"Title for Task"),r.a.createElement(D.a,{type:"text",id:"title",placeholder:"e.g Add a new icon",name:"taskTitle",onBlur:H.handleBlur,value:H.values.taskTitle,onChange:H.handleChange}),H.errors.taskTitle&&H.touched.taskTitle?r.a.createElement("div",{className:O.a.error},H.errors.taskTitle):null),r.a.createElement(E.a,null,r.a.createElement(v.a,{className:O.a.label},"Choose members for this task(select, multiple if needed)",r.a.createElement("p",{style:{fontSize:"12px",paddingBottom:"0px",marginBottom:"0px"}})),r.a.createElement(D.a,{type:"select",id:"exampleSelect",name:"members",onChange:function(e){return a=e.target.selectedOptions,F([]),F(a),void B([]);var a},onClick:function(e){return J(!0)},multiple:!0,required:!0},!1===c&&!0===i?I(f.teamMembers).map((function(e,a){return r.a.createElement("option",{value:e,key:a},e)})):function(e){console.log(k);var a=I(e);t=a.filter((function(e){return-1===k.indexOf(e)})),console.log(t);for(var n=0;n<k.length;n++)t.unshift(k[n]);return t}(f.teamMembers).map((function(e,a){return a<k.length?r.a.createElement("option",{value:e,key:a,selected:!0},e):r.a.createElement("option",{value:e,key:a},e)}))),0===A.length&&M?r.a.createElement("div",{className:O.a.error},"Please Select atlest 1 member"):null),r.a.createElement(E.a,null,r.a.createElement(v.a,{className:O.a.label},"Type of Board"),r.a.createElement(D.a,{type:"text",id:"description",placeholder:"Add your description here",name:"description",onBlur:H.handleBlur,value:H.values.description,onChange:H.handleChange}),H.errors.description&&H.touched.description?r.a.createElement("div",{className:O.a.error},H.errors.description):null),r.a.createElement(E.a,null,r.a.createElement(v.a,{className:O.a.label},"Due Date"),r.a.createElement(D.a,{type:"date",id:"due_date",name:"dueDate",onBlur:H.handleBlur,value:H.values.dueDate,onChange:H.handleChange}),H.errors.dueDate&&H.touched.dueDate?r.a.createElement("div",{className:O.a.error},H.errors.dueDate):null),r.a.createElement(u.a,{size:"md",id:"CreateCard",type:"submit",className:O.a.createButton,disabled:!(H.isValid&&0!==A.length)},!0===c&&!1===i?"Save Changes":"Add Card")))})),F=Object(T.b)((function(e){return{selectedBoardKey:e.board.selectedBoardKey}}),(function(e){return{editCard:function(a,t,n){return e(Object(V.h)(a,t,n))},closeViewCard:function(){return e(Object(V.b)())}}}))((function(e){var a=e.cardKey,t=e.columnKey,l=e.cardValue,c=e.selectedBoardKey,o=e.editCard,s=e.closeViewCard,u=Object(n.useState)(!1),i=Object(d.a)(u,2),m=i[0],C=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:N.a.icons,key:a},r.a.createElement("span",{className:N.a.icon},r.a.createElement(y.b,{size:20,onClick:function(){return C(!0),void o(a,l,t)}})),r.a.createElement("span",{className:N.a.icon},r.a.createElement(y.a,{size:20,onClick:function(){return console.log("click"),K.a.database().ref("/boards/".concat(c,"/columns/").concat(t,"/cards/").concat(a)).remove(),void s()}}))),!0===m?r.a.createElement(A,{columnKey:t}):null)})),q=Object(T.b)((function(e){return{setCardValue:e.card.setCardValue,viewCard:e.card.viewCard,setCardKey:e.card.setCardKey,columnKey:e.card.columnKey}}),(function(e){return{closeViewCard:function(){return e(Object(V.b)())}}}))((function(e){var a=e.columnKey,t=e.closeViewCard,n=e.setCardValue,l=e.viewCard,c=e.setCardKey,o=function(){t()};return r.a.createElement(_.a,{isOpen:l,onRequestClose:function(){return o()},className:b.a.modal,overlayClassName:b.a.overlay},r.a.createElement("div",{className:b.a.close},r.a.createElement(F,{columnKey:a,cardKey:c,cardValue:n}),r.a.createElement(g.a,{size:25,color:"grey",onClick:function(){return o()}})),r.a.createElement("div",{className:b.a.headContainer},r.a.createElement("p",{className:b.a.head},"Task"),r.a.createElement("p",{className:b.a.date}," ",null!==n?n.date:null)),null!==n?r.a.createElement(p.a,{className:b.a.form},r.a.createElement(E.a,null,r.a.createElement(v.a,{className:b.a.label},"Title for Task"),r.a.createElement("p",null,n.taskTitle),r.a.createElement("p",null)),r.a.createElement(E.a,null,r.a.createElement(v.a,{className:b.a.label},"Team Members"),r.a.createElement("p",null,n.members),r.a.createElement("p",null)),r.a.createElement(E.a,null,r.a.createElement(v.a,{className:b.a.label},"Type of Board"),r.a.createElement("p",null,n.description),r.a.createElement("p",null)),r.a.createElement(E.a,null,r.a.createElement(v.a,{className:b.a.label},"Due Date"),r.a.createElement("p",null,n.date),r.a.createElement("p",null))):null)})),z=Object(T.b)((function(e){return{selectedBoardKey:e.board.selectedBoardKey,viewCardValue:e.card.viewCard,deleteCardState:e.card.deleteCard}}),(function(e){return{viewCard:function(a,t,n){return e(Object(V.q)(a,t,n))},setCard:function(a){return e(Object(V.l)(a))},editCard:function(a,t,n){return e(Object(V.h)(a,t,n))},dragDrop:function(a,t){return e(Object(V.g)(a,t))},setdeleteCard:function(a,t){return e(Object(V.d)(a,t))},deleteModal:function(a){return e(Object(V.f)(a))}}}))((function(e){var a=e.cards,t=e.columnKey,o=e.viewCard,s=e.setCard,i=e.editCard,C=e.dragDrop,b=e.viewCardValue,f=e.deleteModal,_=e.setdeleteCard,p=Object(n.useState)(!1),E=Object(d.a)(p,2),v=E[0],g=E[1];return r.a.createElement("div",{key:t},r.a.createElement("div",null,r.a.createElement("div",{className:m.a.container},void 0!==a?Object.entries(a).map((function(e){var a=Object(d.a)(e,2),n=a[0],s=a[1];return r.a.createElement(l.a,{className:m.a.card,key:n,value:s,id:n,draggable:!0,onDragStart:function(e){return function(e,a,t,n){console.log(e,a,t),e.dataTransfer.setData("text/plain",a),C(n,t)}(e,n,s,t)}},r.a.createElement("div",{className:m.a.header},r.a.createElement("div",null,r.a.createElement(c.a,{className:m.a.title},s.taskTitle)),r.a.createElement("div",{className:m.a.empty}),r.a.createElement("div",{style:{marginLeft:"6px",color:"rgb(70, 69, 69)"}},r.a.createElement(y.a,{className:m.a.icon,onClick:function(){return function(e){console.log(t,e),_(t,e),f(!0)}(n)},size:20}))),r.a.createElement("div",{className:m.a.footer},r.a.createElement("span",{className:m.a.icons},r.a.createElement("span",{className:m.a.icon},r.a.createElement(y.b,{onClick:function(){return function(e,a,t){g(!0),i(e,a,t)}(n,s,t)},size:20})),r.a.createElement("span",{className:m.a.icon},r.a.createElement(y.c,{onClick:function(){return function(e,a,t){console.log(e),o(e,a,t)}(n,s,t)},size:25}))),s.members?s.members.map((function(e){return r.a.createElement("span",{className:m.a.circle},r.a.createElement("span",{className:m.a.name},function(e){return e.split(":")[0]}(e)))})):null))})):null),r.a.createElement(u.a,{className:m.a.button,onClick:function(){return s(t),void g(!0)}},"Add Card")),!0===b?r.a.createElement(q,null):null,v&&r.a.createElement(A,null))}));a.default=Object(T.b)((function(e){return{dragggedColumnKey:e.card.dragggedColumnKey,draggesCardData:e.card.draggesCardData,selectedBoardKey:e.board.selectedBoardKey,deleteColumnState:e.column.setDeleteColumn}}),(function(e){return{setdeleteColumn:function(a){return e(Object(V.e)(a))},deleteModal:function(a){return e(Object(V.f)(a))}}}))((function(e){var a=e.columnKey,t=e.value,n=e.dragggedColumnKey,o=e.draggesCardData,d=e.selectedBoardKey,u=e.setdeleteColumn,i=e.deleteModal;return r.a.createElement("div",{key:a,className:s.a.container},r.a.createElement(l.a,{key:a,className:s.a.Card,onDragOver:function(e){return function(e){e.preventDefault(),console.log("Dragged over column")}(e)},onDrop:function(e){return function(e,a){console.log(" Dropover column");var t=e.dataTransfer.getData("text");void 0!==o&&(console.log("success"),K.a.database().ref("/boards/".concat(d,"/columns/").concat(n,"/cards/").concat(t)).remove(),K.a.database().ref("/boards/".concat(d,"/columns/").concat(a,"/cards/").concat(t)).set(o))}(e,a)}},r.a.createElement(c.a,{className:s.a.cardTitle},t.taskTitle,r.a.createElement("span",{style:{float:"right"}},r.a.createElement(y.a,{onClick:function(e){return function(e){i(!0),u(e)}(a)},size:20}))),r.a.createElement(z,{cards:t.cards,columnKey:a})))}))}}]);
//# sourceMappingURL=3.ff858a2e.chunk.js.map