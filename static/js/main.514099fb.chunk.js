(this.webpackJsonpcolorized=this.webpackJsonpcolorized||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),a=t.n(r),o=t(6),i=t.n(o),s=(t(13),t(7)),l=t(4);t(14);function u(){for(var e="#",n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}for(var d=!1,j=[],h=[],b=0;b<100;b++)h.push(u());var f=function(){var e=Object(r.useState)("\n##########\n\n#   #    #\n\n#   #    #\n\n## #### ##\n\n#    #   #\n\n#        #\n\n#  #######\n\n#  #  #  #\n\n#        #\n\n##########"),n=Object(l.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)([]),i=Object(l.a)(o,2),u=i[0],b=i[1],f=Object(r.useState)(0),p=Object(l.a)(f,2),v=p[0],O=p[1];return Object(r.useEffect)((function(){var e=t.split("\n");b(e),O(Math.max.apply(Math,Object(s.a)(e.map((function(e){return e.length})))))}),[t]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h3",{children:"Colorized Rooms"}),Object(c.jsxs)("div",{className:"App-header",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Provide Floor Plan:"}),Object(c.jsx)("textarea",{defaultValue:t,onChange:function(e){a(e.target.value)}}),Object(c.jsx)("em",{children:"Please provide valid floor plan"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Colorized Floor Plan:"}),u.map((function(e,n){var t,r=null===(t=e.match(/#/g))||void 0===t?void 0:t.length;if([v,v/2].some((function(e){return e<=r})))j=[],d=!1;else if(v/2>r&&""!==e&&!d){var a=n;console.log(n);var o=e.split("").map((function(e,t){var c="";return"#"===e?(c=e,a=t||n):c=h[a],c}));j=o,d=!0}return Object(c.jsx)("div",{className:"row",children:e.split("").map((function(e,n){return d&&"#"!==e?(t=n,Object(c.jsx)("span",{style:{background:j[t]},children:"\xa0\xa0"},t)):e;var t}))},"row_"+n)}))]})]})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),a(e),o(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.514099fb.chunk.js.map