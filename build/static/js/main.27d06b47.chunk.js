(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(7),r=n.n(i),s=(n(14),n(15),n(8)),l=n(2),o=n(3),u=n(5),j=n(4),d=n(0),h=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"error-content",children:Object(d.jsx)("p",{className:"text-error",children:"Campo invalido"})})}}]),n}(a.Component),b=n(9),p=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this.props,e=t.tarefa,n=t.event;return Object(d.jsxs)("li",{className:"item-list",children:[Object(d.jsx)("p",{className:"text-li",children:e}),Object(d.jsx)(b.a,{onClick:n,className:"icon-delete"})]})}}]),n}(a.Component),f=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).renderLocalStorage=function(){var e=localStorage.getItem("lista");e&&t.setState({list:JSON.parse(e)})},t.updateLoacalStorage=function(){var e=t.state.list;localStorage.setItem("lista",JSON.stringify(e))},t.handleClickBtn=function(){var e=t.state.input;t.setState((function(t){return{list:e.length<2||e.length>40?t.list:[].concat(Object(s.a)(t.list),[e]),input:"",error:e.length<2||e.length>40?"Campo Invalido":""}}))},t.handleClickDelete=function(e){var n=t.state.list,a=e.target.parentNode.parentNode.childNodes[0].innerText;console.log(e);var c=n.filter((function(t){return t!==a}));t.setState({list:c})},t.handleChange=function(e){var n=e.target.value;t.setState({input:n,localStorage:!1})},t.state={input:"",list:[],error:""},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.renderLocalStorage()}},{key:"componentDidUpdate",value:function(){this.updateLoacalStorage()}},{key:"render",value:function(){var t=this,e=this.state,n=e.input,a=e.error,c=e.list;return Object(d.jsxs)("section",{className:"content-list",children:[Object(d.jsxs)("div",{className:"newList",children:[Object(d.jsx)("label",{className:"form-label title-input",htmlFor:"newList",children:"Tarefas"}),Object(d.jsx)("input",{onChange:this.handleChange,className:"form-control",value:this.state.input,type:"text",name:"newList",id:"newList",placeholder:"Nova Tarefa"}),Object(d.jsx)("p",{className:"limit",children:"Limite de 40 Caracteres"}),Object(d.jsx)("button",{className:"btn btn-success",onClick:this.handleClickBtn,children:"Adicionar Tarefa"})]}),""!==a?Object(d.jsx)(h,{input:n}):"",Object(d.jsx)("h3",{className:"title",children:"Lista de Tarefas"}),Object(d.jsx)(d.Fragment,{children:c.map((function(e,n){return Object(d.jsx)(p,{event:t.handleClickDelete,tarefa:e},n)}))})]})}}]),n}(a.Component);var m=function(){return Object(d.jsx)("main",{className:"content",children:Object(d.jsx)(f,{})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.27d06b47.chunk.js.map