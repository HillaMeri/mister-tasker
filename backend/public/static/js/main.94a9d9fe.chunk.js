(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{143:function(e,t){},147:function(e,t,a){e.exports=a.p+"static/media/7.7609e38d.jpg"},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(25),l=a(17),u=a(31),i=a(72),m=a(33),p=a(28),d={tasks:[],modalAdd:!1};var f=Object(u.c)({taskReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TASKS":return Object(p.a)({},e,{tasks:t.tasks});case"EDIT_TASK":return Object(p.a)({},e,{tasks:e.tasks.map((function(e){return t.task._id===e._id?t.task:e}))});case"ADD_TASK":return Object(p.a)({},e,{tasks:[].concat(Object(m.a)(e.tasks),[t.task])});case"REMOVE_TASK":return Object(p.a)({},e,{tasks:e.tasks.filter((function(e){return e._id!==t.taskId}))});case"SET_MODAL":return Object(p.a)({},e,{modalAdd:t.modalStatus});default:return e}}}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,E=Object(u.e)(f,k(Object(u.a)(i.a))),h=a(21),b=a(9),v=a(22),g=a(23),y=a(26),w=a(27),O=a(2),T=a.n(O),x=a(165),S=a(83),j=a.n(S),A=a(73),_=a.n(A).a.create({withCredentials:!0}),N=function(e,t){return I(e,"GET",t)},D=function(e,t){return I(e,"POST",t)},M=function(e,t){return I(e,"PUT",t)},C=function(e,t){return I(e,"DELETE",t)};function I(e){var t,a,n,r=arguments;return T.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:"get",a=r.length>2&&void 0!==r[2]?r[2]:null,c.prev=2,c.next=5,T.a.awrap(_({url:"".concat("/api/").concat(e),method:t,data:a}));case 5:return n=c.sent,c.abrupt("return",n.data);case 9:throw c.prev=9,c.t0=c.catch(2),console.log("Had Issues ".concat(t,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(a)),console.dir(c.t0),c.t0.response&&401===c.t0.response.status&&window.location.assign("/"),c.t0;case 15:case"end":return c.stop()}}),null,null,[[2,9]])}var K={query:function(e){var t;return T.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return"",e.next=3,T.a.awrap(N("task".concat("")));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}))},getById:function(e){return T.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",N("task/".concat(e)));case 1:case"end":return t.stop()}}))},remove:function(e){return T.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",C("task/".concat(e)));case 1:case"end":return t.stop()}}))},save:function(e){return T.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._id){t.next=4;break}return t.abrupt("return",M("task/".concat(e._id),e));case 4:return e.triesCount=0,e.lastTriedAt=null,e.doneAt=null,t.abrupt("return",D("task",e));case 8:case"end":return t.stop()}}))},start:function(e){return T.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("start -> task",e),t.abrupt("return",M("task/".concat(e._id,"/start"),e));case 2:case"end":return t.stop()}}))}};function L(e){return function(t){var a;return T.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.a.awrap(K.query(e));case 2:a=n.sent,t({type:"SET_TASKS",tasks:a});case 4:case"end":return n.stop()}}))}}function P(e){return function(t){var a,n;return T.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e._id?"EDIT_TASK":"ADD_TASK",r.next=3,T.a.awrap(K.save(e));case 3:n=r.sent,t({type:a,task:n});case 5:case"end":return r.stop()}}))}}function W(e){return function(t){return T.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t({type:"SET_MODAL",modalStatus:e});case 1:case"end":return a.stop()}}))}}var B=a(74),R=a.n(B),q=a(81),V=a.n(q),F=a(76),G=a.n(F),J=a(79),U=a.n(J),X=a(78),H=a.n(X),Y=a(77),$=a.n(Y),z=a(80),Q=a.n(z);function Z(e){var t=e.task,a=new Date(t.createdAt).toLocaleString();return r.a.createElement("section",{className:"task-preview flex space-between ".concat(t.doneAt?"done":"")},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"start-btn flex align-center"},!t.doneAt&&r.a.createElement("button",{onClick:function(a){return e.onStart(a,t)}},r.a.createElement(R.a,null)),t.doneAt&&r.a.createElement("button",null,r.a.createElement(G.a,null))),r.a.createElement("ul",{className:"task-info clean-list"},r.a.createElement("li",{className:"task-title"},t.title),r.a.createElement("li",null,r.a.createElement($.a,null)," Description"),r.a.createElement("li",null,r.a.createElement(H.a,null)," Importance: ",t.importance),r.a.createElement("li",null,r.a.createElement(U.a,null)," Created At: ",a),r.a.createElement("li",null,r.a.createElement(Q.a,null)," Tries count: ",t.triesCount))),r.a.createElement("div",{className:"delete-btn flex align-center"},r.a.createElement("button",{onClick:function(a){return e.onDelete(a,t._id)}},r.a.createElement(V.a,null))))}function ee(e){var t=e.tasks;return t?r.a.createElement("div",{className:"task-list grid"},t.map((function(t){return r.a.createElement(Z,{key:t._id,task:t,onDelete:e.onDelete,onStart:e.onStart})}))):r.a.createElement("h1",null,"Loading..")}var te,ae=a(16),ne=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={task:{title:"",description:"",importance:""},msgWarning:""},a.handleInput=function(e){var t=e.target,n=t.name,r=t.value;a.setState((function(e){return{task:Object(p.a)({},e.task,Object(ae.a)({},n,r))}}))},a.onSubmit=function(e){return T.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),a.state.task.title){t.next=4;break}return a.printMsg("Title of task is required"),t.abrupt("return");case 4:if(a.state.task.importance){t.next=7;break}return a.printMsg("Importance of task is required"),t.abrupt("return");case 7:return t.next=9,T.a.awrap(a.props.saveTask(a.state.task));case 9:a.props.loadTasks(),a.setState({task:{title:"",description:"",importance:""}}),a.props.toggleModal(!1);case 12:case"end":return t.stop()}}))},a.onCloseModal=function(e){e.stopPropagation(),a.props.toggleModal(!1)},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"printMsg",value:function(e){var t=this;this.setState({msgWarning:e}),setTimeout((function(){t.setState({msgWarning:""})}),2e3)}},{key:"render",value:function(){var e=this,t=this.state.task;return r.a.createElement("section",{className:"task-add flex",onClick:function(t){return e.onCloseModal(t)}},r.a.createElement("form",{onClick:function(e){e.stopPropagation()},className:"from-add flex column",onSubmit:this.onSubmit},r.a.createElement("h2",null,"New Task: "),r.a.createElement("label",null,"Title:"),r.a.createElement("input",{autoComplete:"off",autoFocus:!0,type:"txt",value:t.name,name:"title",onChange:this.handleInput}),r.a.createElement("label",null,"Description:"),r.a.createElement("input",{autoComplete:"off",type:"txt",value:t.description,name:"description",onChange:this.handleInput}),r.a.createElement("label",null,"Importance(1-3):"),r.a.createElement("input",{className:"input-impo",type:"number",name:"importance",min:"1",max:"3",onChange:this.handleInput}),r.a.createElement("div",{className:"msg-warnning"},this.state.msgWarning&&r.a.createElement("label",null,this.state.msgWarning)),r.a.createElement("button",{type:"submit",className:"btn-add-task"},"Add Task")))}}]),t}(n.Component),re={saveTask:P,loadTasks:L,toggleModal:W},ce=Object(o.b)((function(e){return{}}),re)(ne),se=a(82),oe=a.n(se),le={setup:function(){te=oe()("/")},terminate:function(){te=null},on:function(e,t){te.on(e,t)},off:function(e,t){te.off(e,t)},emit:function(e,t){te.emit(e,t)}};var ue=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={filterBy:null},a.onSetFilter=function(e){a.setState({filterBy:e},(function(){return a.loadTasks()}))},a.onDelete=function(e,t){e.stopPropagation(),a.props.removeTask(t)},a.onStart=function(e,t){return T.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.stopPropagation(),n.next=3,T.a.awrap(a.props.startTask(t));case 3:a.props.loadTasks();case 4:case"end":return n.stop()}}))},a.openAddModal=function(){a.props.toggleModal(!0)},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.loadTasks(this.state.filterBy),le.setup(),le.emit("update tasks"),le.on("update tasks",this.props.loadTasks)}},{key:"render",value:function(){var e=this.props,t=e.tasks,a=e.modalAdd;return t?r.a.createElement("section",{className:"task-app main-container"},r.a.createElement(ee,{tasks:t,onDelete:this.onDelete,onStart:this.onStart}),r.a.createElement(x.a,{className:"btn-add",color:"#ffe3b0","aria-label":"add",onClick:this.openAddModal},r.a.createElement(j.a,null)),a&&r.a.createElement(ce,null)):r.a.createElement("h1",null,"Loading..")}}]),t}(n.Component),ie={loadTasks:L,removeTask:function(e){return function(t){return T.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.a.awrap(K.remove(e));case 2:t({type:"REMOVE_TASK",taskId:e});case 3:case"end":return a.stop()}}))}},saveTask:P,startTask:function(e){return function(t){return T.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.a.awrap(K.start(e));case 2:t({type:"EDIT_TASK",task:e});case 3:case"end":return a.stop()}}))}},toggleModal:W},me=Object(o.b)((function(e){return{tasks:e.taskReducer.tasks,modalAdd:e.taskReducer.modalAdd}}),ie)(ue),pe=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"hero-title flex column align-center"},r.a.createElement("h2",null,"Manage your tasks.."),r.a.createElement("button",{className:"btn-get-start"},r.a.createElement(l.b,{to:"/task"},"Get Start"))),r.a.createElement("div",{className:"hero-img"},r.a.createElement("img",{src:a(147),alt:""})))}}]),t}(n.Component),de=a(85),fe=a.n(de);function ke(){return r.a.createElement("nav",{className:"main-header "},r.a.createElement("div",{className:"main-container-header flex space-between align-center"},r.a.createElement(l.b,{className:"logo flex align-center",exact:!0,to:"/"},r.a.createElement(fe.a,null),"Mister",r.a.createElement("span",null,"Tasker")),r.a.createElement("ul",{className:"nav-list clean-list flex"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/task"},"Your tasks | ")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/task"},"About")))))}var Ee=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(ke,null)),r.a.createElement("main",null,r.a.createElement(w.c,null,r.a.createElement(w.a,{component:me,path:"/task"}),r.a.createElement(w.a,{component:pe,path:"/"}))))}}]),t}(n.Component),he=Object(o.b)((function(e){return{}}),{})(Ee);a(148);s.a.render(r.a.createElement(o.a,{store:E},r.a.createElement(l.a,null,r.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,t,a){e.exports=a(149)}},[[87,1,2]]]);
//# sourceMappingURL=main.94a9d9fe.chunk.js.map