(this.webpackJsonpwebtest=this.webpackJsonpwebtest||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(6),s=n.n(i),o=(n(13),n(2)),u=function(e){var t=e.setSearch,n=Object(r.useState)(""),c=Object(o.a)(n,2),i=c[0],s=c[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t(i),s(""))},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){s(e.target.value)},placeholder:"Ingrese el texto que desea buscar"})})},d=n(3),j=function(e){e.id;var t=e.name,n=e.image,r=void 0===n?"/generico.jpg":n;e.dir,e.other;return Object(a.jsx)("a",{href:"",children:Object(a.jsx)("img",{src:r,alt:t})})},h=n(5),l=n.n(h),b=n(7),m=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,r,c,i,s,o,u,d,j,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://apitestsearch.herokuapp.com/busqueda?criterio=".concat(t),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.soapdemo,s=c.tvmaze,o=c.itunes,u=null===s||void 0===s?void 0:s.map((function(e){var t,n;return{id:e.show.id,name:e.show.name,image:null===(t=e.show.image)||void 0===t?void 0:t.original,dir:null===(n=e.show.network)||void 0===n?void 0:n.country.name,other:e.show.language}})),d=null===o||void 0===o?void 0:o.map((function(e){return{id:e.trackId,name:e.trackName,image:e.artworkUrl100.replace("100x100bb","300x1000bb"),dir:e.country,other:e.shortDescription}})),j=null===i||void 0===i?void 0:i.map((function(e){return{id:e.ID,name:e.Name,dir:e.DOB,other:e.SSN}})),h={tvmaze:u||[],itunes:d||[],soap:j||[]},e.abrupt("return",h);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.search,n=function(e){var t=Object(r.useState)({data:{},loading:!0}),n=Object(o.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){""!==e?m(e).then((function(e){return c({data:e,loading:!1})})):c({data:{},loading:!0})}),[e]),a}(t),c=n.data,i=n.loading,s=c.soap,u=c.tvmaze,h=c.itunes;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(a.jsx)("h1",{children:"TV Maze"}),Object(a.jsx)("div",{className:"box",children:!i&&u.map((function(e){return Object(a.jsx)(j,Object(d.a)({},e),e.id)}))}),Object(a.jsx)("h1",{children:"SOAP DEMO"}),Object(a.jsx)("div",{className:"box",children:!i&&s.map((function(e){return Object(a.jsx)(j,Object(d.a)({},e),e.id)}))}),Object(a.jsx)("h1",{children:"itunes"}),Object(a.jsx)("div",{className:"box",children:!i&&h.map((function(e){return Object(a.jsx)(j,Object(d.a)({},e),e.id)}))})]})},p=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Search App"}),Object(a.jsx)("hr",{}),Object(a.jsx)(u,{setSearch:c}),Object(a.jsx)("ol",{children:Object(a.jsx)(O,{search:n},n)})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.cbd241c7.chunk.js.map