(this.webpackJsonpfuntranslation=this.webpackJsonpfuntranslation||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),s=a.n(r),i=a(9),o=a(2),l=a(0),j=function(e){var t=e.imgSrc,a=e.path,n=e.linkName;return Object(l.jsxs)(i.c,{to:a,className:"w-34 h-34 md:w-48 md:h-48 bg-blue-100 flex flex-col justify-center items-center p-2 border-r-8 border-4 border-blue-300 rounded shadow-xl hover:scale-110 transform duration-200 ease-in-out",children:[Object(l.jsx)("img",{src:t,alt:"character",className:"w-24 h-24 md:w-28 md:h-28 "}),Object(l.jsx)("p",{className:"text-center text-lg mt-2 uppercase font-bold text-gray-800 tracking-wide",children:n})]})},d=a.p+"static/media/yoda.6c19dbb9.jpg",b=a.p+"static/media/Minions.c627fdc7.png",x=a.p+"static/media/Do.9f8bdc21.png",u=a.p+"static/media/Val.9f8e9ea4.png",m=a.p+"static/media/Mandalorian.80ebf3a7.png",p=a.p+"static/media/Shakespear.10c22517.jpg",h=function(){return Object(l.jsx)("nav",{className:"my-4 max-w-3xl m-auto",children:Object(l.jsxs)("ul",{className:"grid grid-cols-2 gap-10 md:grid-cols-3 justify-center content-center",children:[Object(l.jsx)(j,{path:"/yoda",linkName:"Yoda",imgSrc:d}),Object(l.jsx)(j,{path:"/minion",linkName:"Minion",imgSrc:b}),Object(l.jsx)(j,{path:"/dothraki",linkName:"Dothraki",imgSrc:x}),Object(l.jsx)(j,{path:"/valyrian",linkName:"Valyrian",imgSrc:u}),Object(l.jsx)(j,{path:"/mandalorian",linkName:"Mandalorian",imgSrc:m}),Object(l.jsx)(j,{path:"/shakespeare",linkName:"Shakespeare",imgSrc:p})]})})},O=function(){return Object(l.jsxs)("main",{className:"min-h-screen bg-gray-900 p-4 grid justify-center content-center",children:[Object(l.jsx)("h1",{className:"text-center text-2xl md:text-3xl text-gray-300 mb-8 border-b-4 border-gray-800 pb-4 uppercase tracking-wider",children:"Fun Translation"}),Object(l.jsx)(h,{})]})},f=a(5),g=a(4),y=function(e){return Object(l.jsxs)("div",{className:"bg-blue-100 p-4 m-2 rounded shadow-md md:max-w-2xl md:m-auto md:my-7",children:[Object(l.jsxs)("h1",{className:"md:text-2xl mb-5 text-gray-800",children:[Object(l.jsx)("span",{className:"font-bold mr-2",children:"Your Text:"})," ",e.text]}),Object(l.jsxs)("h1",{className:"md:text-2xl mb-5 text-gray-800",children:[Object(l.jsx)("span",{className:"font-bold mr-2",children:"Translated Text:"})," ",e.translated]}),Object(l.jsxs)("blockquote",{className:"font-bold text-gray-800 md:text-2xl",children:[Object(l.jsx)("span",{className:"font-bold mr-2",children:"Translated By: "}),e.translation]})]})},N=a(16),v=a.n(N),k=a(20),w=function(e,t){switch(t.type){case"ENTER_TEXT":return t.payload.text;default:return e}},S=function(e){var t=Object(n.useReducer)(w,""),a=Object(g.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)({}),i=Object(g.a)(s,2),o=i[0],l=i[1];return Object(n.useEffect)((function(){var t=!0;return function(){var a=Object(k.a)(v.a.mark((function a(){var n,r,s;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""===c){a.next=11;break}return a.next=3,fetch("https://api.funtranslations.com/translate/".concat(e,".json?text=").concat(c));case 3:return n=a.sent,a.next=6,n.json();case 6:return r=a.sent,a.next=9,Object(f.a)({},r.contents);case 9:s=a.sent,t&&l(s);case 11:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),function(){t=!1}}),[c,e]),[o,r]},T=function(e){var t=e.dispatch,a=Object(n.useState)(""),c=Object(g.a)(a,2),r=c[0],s=c[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({type:"ENTER_TEXT",payload:{text:r}}),s("")},className:"max-w-2xl flex flex-col justify-center items-center p-4 md:m-auto",children:[Object(l.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter your text here",max:50,value:r,className:"w-full py-3 px-4 border-2  border-blue-300 bg-gray-700 text-gray-200 rounded-sm shadow-xl outline-none focus:ring-2 focus:ring-gray-800 ring-offset-2 text-lg"}),Object(l.jsx)("button",{className:"bg-green-600 text-green-100 px-6 py-3  mt-4 box-border uppercase rounded-2xl tracking-widest hover:bg-green-300 hover:text-green-900 font-bold transition-all duration-300 ease-linear shadow-inner mr-auto  focus:ring-2 focus:ring-gray-800 ring-offset-2",type:"submit",children:"Translate"})]})},E=function(e){var t=e.children;return Object(l.jsxs)("div",{className:"min-h-screen bg-gray-900",children:[Object(l.jsx)(i.b,{className:"fixed top-0 right-0 my-4 mx-8 text-blue-400 text-lg font-bold",to:"/",children:"Home"}),Object(l.jsx)("div",{className:"grid justify-center",children:Object(l.jsx)("div",{className:"mt-20 border-r-8 border-4 py-4 px-2 border-gray-500",children:t})})]})},M=function(){var e=S("yoda"),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)(E,{children:[Object(l.jsx)(T,{dispatch:n}),a.translated?Object(l.jsx)(y,Object(f.a)({},a)):null]})},D=function(){var e=S("minion"),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)(E,{children:[Object(l.jsx)(T,{dispatch:n}),a.translated?Object(l.jsx)(y,Object(f.a)({},a)):null]})},R=function(){var e=S("dothraki"),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)(E,{children:[Object(l.jsx)(T,{dispatch:n}),a.translated?Object(l.jsx)(y,Object(f.a)({},a)):null]})},B=function(){var e=S("valyrian"),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)(E,{children:[Object(l.jsx)(T,{dispatch:n}),a.translated?Object(l.jsx)(y,Object(f.a)({},a)):null]})},J=function(){var e=S("mandalorian"),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)(E,{children:[Object(l.jsx)(T,{dispatch:n}),a.translated?Object(l.jsx)(y,Object(f.a)({},a)):null]})},V=function(){var e=S("shakespeare"),t=Object(g.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)(E,{children:[Object(l.jsx)(T,{dispatch:n}),a.translated?Object(l.jsx)(y,Object(f.a)({},a)):null]})},X=function(){return Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:O}),Object(l.jsx)(o.a,{path:"/yoda",exact:!0,component:M}),Object(l.jsx)(o.a,{path:"/minion",exact:!0,component:D}),Object(l.jsx)(o.a,{path:"/dothraki",exact:!0,component:R}),Object(l.jsx)(o.a,{path:"/valyrian",exact:!0,component:B}),Object(l.jsx)(o.a,{path:"/mandalorian",exact:!0,component:J}),Object(l.jsx)(o.a,{path:"/shakespeare",exact:!0,component:V})]})};a(32);s.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(X,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.92ddd947.chunk.js.map