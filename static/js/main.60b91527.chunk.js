(this["webpackJsonpgoit-react-hw-05-budget-planner"]=this["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{24:function(e,n,t){e.exports=t(44)},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(9),o=t.n(u),l=t(5),i=t(3),c=t(17),p=t(21),m="ADD_BUDGET",s="ADD_EXPENSE",d="REMOVE_EXPENSE",b=Object(i.combineReducers)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:return e+n.payload;default:return e}},expense:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case s:return[].concat(Object(p.a)(e),[n.payload]);case d:return e.filter((function(e){return e.id!==n.payload}));default:return e}}}),f=function(){return function(e){return function(n){e(n)}}},x=Object(i.combineReducers)({palenner:b}),v=Object(i.applyMiddleware)(f),g=Object(i.createStore)(x,Object(c.composeWithDevTools)(v)),E=t(12),y=function(e){return e.palenner.budget},h=function(e){return e.palenner.expense},j=Object(E.a)(h,(function(e){return e.reduce((function(e,n){return e+n.amount}),0)})),O=Object(E.a)([y,j],(function(e,n){return e-n})),S=t(1),w=t(2);function P(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return P=function(){return e},e}var k=function(e){var n=e.onSubmit,t=e.children;return a.a.createElement(C,{onSubmit:n},t)};k.defaultProps={onSubmit:function(){return null}};var D=k,C=w.a.form(P());function R(){var e=Object(S.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return R=function(){return e},e}var z=function(e){var n=e.children,t=e.customStyles;return a.a.createElement(B,{customStyles:t},n)},B=w.a.label(R(),(function(e){return e.customStyles}));function N(){var e=Object(S.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return N=function(){return e},e}var T=function(e){var n=e.type,t=e.name;return a.a.createElement(A,{type:n,name:t,placeholder:"amount"===t?"Type amount...":"Type name..."})},q=T;T.defaultProps={type:" text",name:""};var A=w.a.input(N());function _(){var e=Object(S.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return _=function(){return e},e}var F=function(e){var n=e.type,t=e.label,r=e.onClick;return a.a.createElement(M,{type:n,onClick:r},t)};F.defaultProps={type:"button",label:"",onClick:function(){return null}};var J=F,M=w.a.button(_()),X=function(e){var n=e.onSave;return a.a.createElement(D,{onSubmit:function(e){e.preventDefault(),n(Number(e.target.querySelector("input").value)),e.target.reset()}},a.a.createElement(z,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter your total budget",a.a.createElement(q,{type:"number",name:"amount"})),a.a.createElement(J,{label:"Save",type:"submit"}))},G=Object(l.b)(null,(function(e){return{onSave:function(n){return e(function(e){return{type:m,payload:e}}(n))}}}))(X),I=t(20),U=t.n(I),V=function(e){var n=e.onSave;return a.a.createElement(D,{onSubmit:function(e){e.preventDefault();var t={name:e.target.querySelector('input[name="name"]').value,amount:Number(e.target.querySelector('input[name="amount"]').value),id:U.a.generate()};n(t),e.target.reset()}},a.a.createElement(z,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense name",a.a.createElement(q,{type:"text",name:"name"})),a.a.createElement(z,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense amount",a.a.createElement(q,{type:"number",name:"amount"})),a.a.createElement(J,{label:"Add",type:"submit"}))},W=Object(l.b)(null,(function(e){return{onSave:function(n){return e(function(e){return{type:s,payload:{name:e.name,amount:e.amount,id:e.id}}}(n))}}}))(V);function $(){var e=Object(S.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return $=function(){return e},e}var H=function(e){var n=e.items,t=e.onRemove;return a.a.createElement(K,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Expense name"),a.a.createElement("th",null,"Expense amount"),a.a.createElement("th",null))),a.a.createElement("tbody",null,n.map((function(e){var n=e.id,r=e.name,u=e.amount;return a.a.createElement("tr",{key:n},a.a.createElement("td",null,r),a.a.createElement("td",null,u),a.a.createElement("td",null,a.a.createElement(J,{label:"Delete",onClick:function(){return t(n)}})))}))))},K=w.a.table($());function L(){var e=Object(S.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return L=function(){return e},e}function Q(){var e=Object(S.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return Q=function(){return e},e}function Y(){var e=Object(S.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return Y=function(){return e},e}var Z=function(e){var n=e.label,t=e.value,r=e.isPositive;return a.a.createElement(ne,{isPositive:r},a.a.createElement(te,null,n),a.a.createElement(re,null,t,"\xa0$"))};Z.defaultProps={isPositive:!0};var ee=Z,ne=w.a.div(Y(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),te=w.a.p(Q()),re=w.a.p(L());function ae(){var e=Object(S.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ae=function(){return e},e}var ue=w.a.section(ae()),oe=function(e){var n=e.budget,t=e.expenses,r=e.balance;return a.a.createElement(ue,null,a.a.createElement(ee,{label:"Budget",value:n,isPositive:n>=0}),a.a.createElement(ee,{label:"Expenses",value:t,isPositive:t>=0}),a.a.createElement(ee,{label:"Balance",value:r,isPositive:r>=0}))};function le(){var e=Object(S.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return le=function(){return e},e}var ie=function(e){var n=e.budget,t=e.expenses,r=e.removeExpense,u=e.totalExpenses,o=e.balance;return a.a.createElement(ce,null,a.a.createElement(G,null),a.a.createElement(oe,{budget:n,expenses:u,balance:o}),a.a.createElement(W,null),t.length>0&&a.a.createElement(H,{items:t,onRemove:r}))},ce=w.a.div(le()),pe=Object(l.b)((function(e){return{budget:y(e),expenses:h(e),totalExpenses:j(e),balance:O(e)}}),(function(e){return{removeExpense:function(n){return e(function(e){return{type:d,payload:e}}(n))}}}))(ie);t(43);o.a.render(a.a.createElement(l.a,{store:g},a.a.createElement(pe,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.60b91527.chunk.js.map