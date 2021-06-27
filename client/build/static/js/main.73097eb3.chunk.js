(this["webpackJsonpemail-scheduler"]=this["webpackJsonpemail-scheduler"]||[]).push([[0],{246:function(e,t,c){},248:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(20),s=c.n(a),i=c(26),l=c.n(i),o=c(37),u=c(19),d=c(282),j=c(280),b=c(281),h=c(276),O=c(18),m=c(36),p=c(83),x=(c(144),p.a.initializeApp({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_APP_ID})),f=x.auth(),g=new p.a.auth.GoogleAuthProvider,S=c(4),v=n.a.createContext();function E(){return Object(r.useContext)(v)}function y(e){var t=e.children,c=Object(r.useState)(),n=Object(u.a)(c,2),a=n[0],s=n[1],i=Object(r.useState)(!0),l=Object(u.a)(i,2),o=l[0],d=l[1];Object(r.useEffect)((function(){return f.onAuthStateChanged((function(e){s(e),d(!1)}))}),[]);var j={currentUser:a,signup:function(e,t){return f.createUserWithEmailAndPassword(e,t)},login:function(e,t){return f.signInWithEmailAndPassword(e,t)},loginWithGoogle:function(){return f.signInWithPopup(g)},logout:function(){return f.signOut()}};return Object(S.jsx)(v.Provider,{value:j,children:!o&&t})}function T(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(u.a)(a,2),i=s[0],p=s[1],x=Object(r.useRef)(),f=Object(r.useRef)(),g=Object(r.useRef)(),v=Object(O.g)(),y=E().signup;function T(){return(T=Object(o.a)(l.a.mark((function e(t){var c,r,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f.current.value===g.current.value){e.next=3;break}return e.abrupt("return",n("Passwords do not match"));case 3:return e.prev=3,c="/api/user",n(""),p(!0),e.next=9,y(x.current.value,f.current.value);case 9:return r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Randi Zuckerberg",userEmail:x.current.value,emailList:[],histories:[]})},e.next=12,fetch("".concat(c),r);case 12:return a=e.sent,e.next=15,a.json();case 15:s=e.sent,console.log(s),v.push("/"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(3),n("Failed to create an account");case 23:p(!1);case 24:case"end":return e.stop()}}),e,null,[[3,20]])})))).apply(this,arguments)}return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.a,{style:{maxWidth:"400px"},className:"w-100",children:Object(S.jsxs)(d.a.Body,{children:[c&&Object(S.jsx)(j.a,{variant:"danger",children:c}),Object(S.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),Object(S.jsxs)(b.a,{onSubmit:function(e){return T.apply(this,arguments)},children:[Object(S.jsxs)(b.a.Group,{id:"email",className:"mb-3",children:[Object(S.jsx)(b.a.Label,{children:"Email"}),Object(S.jsx)(b.a.Control,{type:"email",ref:x,required:!0})]}),Object(S.jsxs)(b.a.Group,{id:"password",className:"mb-3",children:[Object(S.jsx)(b.a.Label,{children:"Password"}),Object(S.jsx)(b.a.Control,{type:"password",ref:f,required:!0})]}),Object(S.jsxs)(b.a.Group,{id:"password-confirm",className:"mb-3",children:[Object(S.jsx)(b.a.Label,{children:"Confirm Password"}),Object(S.jsx)(b.a.Control,{type:"password",ref:g,required:!0})]}),Object(S.jsx)(h.a,{disabled:i,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(S.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(S.jsx)(m.b,{to:"/login",children:"Log In"})]})]})}var _=c(278),C=c(45),N=c(277),k=c(128),w=c(79),R=(c(245),c(129)),P=c.n(R),A=c(279);function D(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(""),s=Object(u.a)(a,2),i=s[0],p=s[1],x=Object(r.useState)(""),f=Object(u.a)(x,2),g=f[0],v=f[1],y=Object(r.useState)({recurring20:!1,recurring30:!1,week:!1,month:!1,year:!1}),T=Object(u.a)(y,2),_=T[0],R=T[1],D=Object(r.useState)("2021-06-28T10:30"),F=Object(u.a)(D,2),L=F[0],I=F[1],W=Object(r.useState)("2021-06-28T10:30"),H=Object(u.a)(W,2),K=H[0],U=H[1],B=Object(r.useState)("2021-06-28T10:30"),G=Object(u.a)(B,2),V=G[0],q=G[1],J=Object(r.useState)([]),M=Object(u.a)(J,2),Y=M[0],z=M[1],Z=Object(r.useRef)(),Q=Object(r.useRef)(),X=Object(r.useRef)(),$=E(),ee=$.currentUser,te=$.logout,ce=Object(O.g)();function re(){return(re=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(""),n(!0),e.prev=2,e.next=5,te();case 5:ce.push("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),p("Failed to log out");case 11:n(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function ne(e){var t=e.target.id;R((function(c){var r=c;return"scheduleRecurring20"===t?r.recurring20=e.target.checked:"scheduleRecurring30"===t?r.recurring30=e.target.checked:"scheduleWeekly"===t?r.week=e.target.checked:"scheduleMonthly"===t?r.month=e.target.checked:r.year=e.target.checked,Object(C.a)({},r)}))}return Object(r.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userEmail:ee.email})};fetch("".concat("/api/getEmails"),e).then((function(e){return e.json()})).then((function(e){var t;return z(null===(t=e.data[0])||void 0===t?void 0:t.emailList.reverse())})).catch((function(e){return console.log(e)}))}),[ee,c]),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(d.a,{className:"w-100",children:[Object(S.jsxs)(d.a.Body,{children:[Object(S.jsx)("h2",{className:"text-center mb-4",children:"Scheduler"}),i&&Object(S.jsx)(j.a,{variant:"danger",children:i}),Object(S.jsx)("strong",{children:"Your Email:"})," ",ee.email,Object(S.jsxs)(b.a,{onSubmit:function(e){if(e.preventDefault(),n(!0),_.recurring20||_.recurring30||_.week||_.month||_.year){var t={userEmail:ee.email,sendToEmail:[Z.current.value],ccEmail:[Q.current.value],title:X.current.value,body:g,recurring:{schedule:_.recurring20||_.recurring30,dateAndTime:_.recurring20?20:30},week:{schedule:_.week,dateAndTime:new Date(L)},month:{schedule:_.month,dateAndTime:new Date(K)},year:{schedule:_.year,dateAndTime:new Date(V)},repeat:"Vedant bad man"},c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("".concat("/api/emails"),c).then((function(e){return e.json()})).then((function(e){n(!1)})).catch((function(e){n(!1)}))}else p("You must select at least one scheduled format")},children:[Object(S.jsxs)(b.a.Group,{id:"to",className:"mb-3",children:[Object(S.jsx)(b.a.Label,{children:"To"}),Object(S.jsx)(b.a.Control,{type:"email",ref:Z,required:!0})]}),Object(S.jsxs)(b.a.Group,{id:"cc",className:"mb-3",children:[Object(S.jsx)(b.a.Label,{children:"CC"}),Object(S.jsx)(b.a.Control,{type:"email",ref:Q,required:!0})]}),Object(S.jsxs)(b.a.Group,{id:"subject",className:"mb-3",children:[Object(S.jsx)(b.a.Label,{children:"Subject"}),Object(S.jsx)(b.a.Control,{type:"text",ref:X,required:!0})]}),Object(S.jsx)(k.Editor,{placeholder:"Type email content here",onEditorStateChange:function(e){v(P()(Object(w.convertToRaw)(e.getCurrentContent())))},wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class"}),Object(S.jsxs)("div",{className:"form-check form-switch mt-3",children:[Object(S.jsx)("input",{className:"form-check-input",type:"checkbox",id:"scheduleRecurring20",onChange:ne,disabled:_.recurring30}),Object(S.jsx)("label",{className:"form-check-label",htmlFor:"scheduleRecurring20",children:"Recurring (every 20 seconds)"})]}),Object(S.jsxs)("div",{className:"form-check form-switch mt-3",children:[Object(S.jsx)("input",{className:"form-check-input",type:"checkbox",id:"scheduleRecurring30",onChange:ne,disabled:_.recurring20}),Object(S.jsx)("label",{className:"form-check-label",htmlFor:"scheduleRecurring30",children:"Recurring (every 30 seconds)"})]}),Object(S.jsxs)("div",{className:"form-check form-switch mt-3",children:[Object(S.jsx)("input",{className:"form-check-input",type:"checkbox",id:"scheduleWeekly",onChange:ne}),Object(S.jsx)("label",{className:"form-check-label",htmlFor:"scheduleWeekly",children:"Weekly"}),_.week&&Object(S.jsx)(A.a,{id:"weekDT",type:"datetime-local",defaultValue:"2021-06-28T10:30",className:"ms-2",InputLabelProps:{shrink:!0},onChange:function(e){return I(e.target.value)}})]}),Object(S.jsxs)("div",{className:"form-check form-switch mt-3",children:[Object(S.jsx)("input",{className:"form-check-input",type:"checkbox",id:"scheduleMonthly",onChange:ne}),Object(S.jsx)("label",{className:"form-check-label",htmlFor:"scheduleMonthly",children:"Monthly"}),_.month&&Object(S.jsx)(A.a,{id:"monthDT",type:"datetime-local",defaultValue:"2021-06-28T10:30",className:"ms-2",InputLabelProps:{shrink:!0},onChange:function(e){return U(e.target.value)}})]}),Object(S.jsxs)("div",{className:"form-check form-switch mt-3",children:[Object(S.jsx)("input",{className:"form-check-input",type:"checkbox",id:"scheduleYearly",onChange:ne}),Object(S.jsx)("label",{className:"form-check-label",htmlFor:"scheduleYearly",children:"Yearly"}),_.year&&Object(S.jsx)(A.a,{id:"yearDT",type:"datetime-local",defaultValue:"2021-06-28T10:30",className:"ms-2",InputLabelProps:{shrink:!0},onChange:function(e){return q(e.target.value)}})]}),Object(S.jsx)(h.a,{disabled:c,className:"w-100 mb-3 mt-3",type:"submit",children:"Schedule"})]}),Object(S.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"To"}),Object(S.jsx)("th",{children:"CC"}),Object(S.jsx)("th",{children:"Subject"}),Object(S.jsx)("th",{children:"Body"})]})}),Object(S.jsx)("tbody",{children:Y.map((function(e,t){return function(e,t){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:e.sendToEmail[0]}),Object(S.jsx)("td",{children:e.ccEmail[0]}),Object(S.jsx)("td",{children:e.title}),Object(S.jsx)("td",{children:e.body})]},t)}(e,t)}))})]}),Object(S.jsx)(m.b,{to:"/history",className:"btn btn-primary w-100 mt-2",children:"See History"})]}),Object(S.jsx)("div",{className:"w-100 text-center mt-2",children:Object(S.jsx)(h.a,{disabled:c,variant:"link",onClick:function(){return re.apply(this,arguments)},children:"Logout"})})]})})}function F(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(u.a)(a,2),i=s[0],p=s[1],x=Object(r.useRef)(),f=Object(r.useRef)(),g=Object(O.g)(),v=E(),y=v.login,T=v.loginWithGoogle;function _(){return(_=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n(""),p(!0),e.next=6,y(x.current.value,f.current.value);case 6:g.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n("Failed to log in");case 12:p(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function C(){return(C=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(""),p(!0),e.next=5,T();case 5:g.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n("Failed to log in");case 11:p(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.a,{style:{maxWidth:"400px"},className:"w-100",children:Object(S.jsxs)(d.a.Body,{children:[c&&Object(S.jsx)(j.a,{variant:"danger",children:c}),Object(S.jsx)("h2",{className:"text-center mb-4",children:"Log in"}),Object(S.jsxs)(b.a,{onSubmit:function(e){return _.apply(this,arguments)},children:[Object(S.jsxs)(b.a.Group,{id:"email",className:"mb-3",children:[Object(S.jsx)(b.a.Label,{children:"Email"}),Object(S.jsx)(b.a.Control,{type:"email",ref:x,required:!0})]}),Object(S.jsxs)(b.a.Group,{id:"password",className:"mb-3",children:[Object(S.jsx)(b.a.Label,{children:"Password"}),Object(S.jsx)(b.a.Control,{type:"password",ref:f,required:!0})]}),Object(S.jsx)(h.a,{disabled:i,className:"w-100 mb-3",type:"submit",children:"Log In"})]}),Object(S.jsx)(h.a,{disabled:i,className:"w-100",onClick:function(){return C.apply(this,arguments)},children:"Log in with Google"})]})}),Object(S.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(S.jsx)(m.b,{to:"/signup",children:"Sign up"})]})]})}function L(){var e=E(),t=e.currentUser,c=e.logout,n=Object(r.useState)(!1),a=Object(u.a)(n,2),s=a[0],i=a[1],d=Object(r.useState)(""),b=Object(u.a)(d,2),m=b[0],p=b[1],x=Object(r.useState)([]),f=Object(u.a)(x,2),g=f[0],v=f[1],y=Object(O.g)();function T(){return(T=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(""),i(!0),e.prev=2,e.next=5,c();case 5:y.push("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),p("Failed to log out");case 11:i(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userEmail:t.email})};fetch("".concat("/api/getHistory"),e).then((function(e){return e.json()})).then((function(e){var t;return v(null===(t=e.data[0])||void 0===t?void 0:t.histories.reverse())})).catch((function(e){return console.log(e)}))}),[t]),Object(S.jsxs)(S.Fragment,{children:[m&&Object(S.jsx)(j.a,{variant:"danger",children:m}),Object(S.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"To"}),Object(S.jsx)("th",{children:"CC"}),Object(S.jsx)("th",{children:"Subject"}),Object(S.jsx)("th",{children:"Body"}),Object(S.jsx)("th",{children:"Time Posted"})]})}),Object(S.jsx)("tbody",{children:g.map((function(e,t){return function(e,t){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:e.sendToEmail[0]}),Object(S.jsx)("td",{children:e.ccEmail[0]}),Object(S.jsx)("td",{children:e.title}),Object(S.jsx)("td",{children:e.body}),Object(S.jsx)("td",{children:e.timePosted})]},t)}(e,t)}))})]}),Object(S.jsx)("div",{className:"w-100 text-center mt-2",children:Object(S.jsx)(h.a,{disabled:s,variant:"link",onClick:function(){return T.apply(this,arguments)},children:"Logout"})})]})}var I=c(130),W=["component"];function H(e){var t=e.component,c=Object(I.a)(e,W),r=E().currentUser;return Object(S.jsx)(O.b,Object(C.a)(Object(C.a)({},c),{},{render:function(e){return r?Object(S.jsx)(t,Object(C.a)({},e)):Object(S.jsx)(O.a,{to:"/login"})}}))}var K=function(){return Object(S.jsx)(_.a,{children:Object(S.jsx)("div",{className:"w-100 d-flex flex-column align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(S.jsx)(m.a,{children:Object(S.jsx)(y,{children:Object(S.jsxs)(O.d,{children:[Object(S.jsx)(H,{exact:!0,path:"/",component:D}),Object(S.jsx)(H,{exact:!0,path:"/history",component:L}),Object(S.jsx)(O.b,{exact:!0,path:"/signup",component:T}),Object(S.jsx)(O.b,{exact:!0,path:"/login",component:F})]})})})})})};c(246),c(247);s.a.render(Object(S.jsx)(K,{}),document.getElementById("root"))}},[[248,1,2]]]);
//# sourceMappingURL=main.73097eb3.chunk.js.map