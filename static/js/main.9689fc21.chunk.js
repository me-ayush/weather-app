(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{42:function(e,t,c){"use strict";c.r(t);var i=c(2),s=c.n(i),n=c(15),a=c.n(n),r=c(6),d=c.n(r),l=c(16),o=c(3),j=(c(5),c.p+"static/media/cloudy.fe4ddd17.png"),u=c(0);function h(e){var t=e.updateCity,c=e.fetchWeather;return Object(u.jsxs)("div",{className:"city",children:[Object(u.jsx)("div",{className:"city-img",children:Object(u.jsx)("img",{src:j})}),Object(u.jsxs)("div",{className:"search-box",children:[Object(u.jsx)("p",{children:"Enter City Name To Search"}),Object(u.jsxs)("form",{onSubmit:c,children:[Object(u.jsx)("input",{type:"text",placeholder:"Enter City Name",onChange:function(e){return t(e.target.value)},required:!0}),Object(u.jsx)("button",{type:"submit ",children:"Search"})]})]})]})}var v=c.p+"static/media/sun.d07c9ece.png",m=c.p+"static/media/humidity.81419385.png",b=c.p+"static/media/pressure.263650e3.png",p=c.p+"static/media/wind.639516cc.png";function O(e){var t,c,i,s,n,a,r,d,l=e.weather,o=null===l||void 0===l||null===(t=l.weather[0].icon)||void 0===t?void 0:t.includes("d"),j=function(e){return"".concat(new Date(1e3*e).getHours(),":").concat(new Date(1e3*e).getMinutes())};return Object(u.jsxs)("div",{className:"temp-detail",children:[Object(u.jsxs)("div",{className:"temp",children:[Object(u.jsxs)("div",{className:"details",children:[Math.floor((null===l||void 0===l||null===(c=l.main)||void 0===c?void 0:c.temp)-273)," \xb0C | ",null===l||void 0===l?void 0:l.weather[0].description]}),Object(u.jsx)("div",{className:"img",children:Object(u.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(null===l||void 0===l?void 0:l.weather[0].icon,"@4x.png")})})]}),Object(u.jsx)("div",{className:"city-name",children:"".concat(null===l||void 0===l?void 0:l.name,", ").concat(null===l||void 0===l||null===(i=l.sys)||void 0===i?void 0:i.country)}),Object(u.jsxs)("div",{className:"weather-info",children:[Object(u.jsx)("div",{className:"p",children:"Weather Info"}),Object(u.jsxs)("div",{className:"sub-menu",children:[Object(u.jsxs)("div",{className:"sunset",children:[Object(u.jsx)("img",{src:v}),Object(u.jsxs)("div",{className:"info",children:[o?"Sunset":"Sunrise",Object(u.jsx)("p",{children:j(o?null===l||void 0===l||null===(s=l.sys)||void 0===s?void 0:s.sunset:null===l||void 0===l||null===(n=l.sys)||void 0===n?void 0:n.sunrise)})]})]}),Object(u.jsxs)("div",{className:"wind",children:[Object(u.jsx)("img",{src:p}),Object(u.jsxs)("div",{className:"info",children:["Wind",Object(u.jsx)("p",{children:null===l||void 0===l||null===(a=l.wind)||void 0===a?void 0:a.speed})]})]}),Object(u.jsxs)("div",{className:"humidity",children:[Object(u.jsx)("img",{src:m}),Object(u.jsxs)("div",{className:"info",children:["Humidity",Object(u.jsx)("p",{children:null===l||void 0===l||null===(r=l.main)||void 0===r?void 0:r.humidity})]})]}),Object(u.jsxs)("div",{className:"presure",children:[Object(u.jsx)("img",{src:b}),Object(u.jsxs)("div",{className:"info",children:["Pressure",Object(u.jsx)("p",{children:null===l||void 0===l||null===(d=l.main)||void 0===d?void 0:d.pressure})]})]})]})]})]})}var x=c(17),f=c.n(x);var N=function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(null),a=Object(o.a)(n,2),r=a[0],j=a[1],v=Object(i.useState)(!1),m=Object(o.a)(v,2),b=m[0],p=m[1],x=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),f()({url:"https://api.openweathermap.org/data/2.5/weather?q=".concat(c,"&appid=fe84db9cdb35a33226bd2fb8c9fcfda8"),method:"get",timeout:8e3,headers:{"Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){return p(!0)})).then((function(e){return j(e)}),p(!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h3",{children:"Weather App"})}),r?Object(u.jsx)(O,{weather:r}):Object(u.jsx)(h,{updateCity:s,fetchWeather:x}),Object(u.jsx)("p",{className:"error",children:b?"City Not Found":""})]})})};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))},5:function(e,t,c){}},[[42,1,2]]]);
//# sourceMappingURL=main.9689fc21.chunk.js.map