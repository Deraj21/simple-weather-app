(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,a){t.exports=a(44)},23:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),l=(a(23),a(11)),u=a(12),i=a(15),s=a(13),m=a(16),h=a(14),d=a.n(h),p=(a(43),a(3));function f(t){var e=t.hr,a=t.tmp,n=t.coldest,r=t.hottest,o="white";return n?o="rgba(0,143,254,.45)":r&&(o="rgba(254,0,76,.45)"),c.a.createElement("div",{style:{backgroundColor:o},className:"Hour"},c.a.createElement("p",null,e,":"),c.a.createElement("p",null,a,"\xb0F"))}function v(t){var e=t.data,a=t.city,n=t.state,r=e.map(function(t){return t.temp}),o=r.findIndex(function(t){return t===Math.max.apply(Math,Object(p.a)(r))}),l=r.findIndex(function(t){return t===Math.min.apply(Math,Object(p.a)(r))}),u=e.map(function(t,e){var a=new Date(t.timestamp_utc),n="".concat(a.getHours()%12+1).concat(a.getHours()<11?" am":a.getHours()>22?" am":" pm");return c.a.createElement(f,{hr:n,tmp:t.temp,coldest:l===e,hottest:o===e,key:"hour-".concat(e)})});return c.a.createElement("div",{className:"Widget"},c.a.createElement("h2",null,"Weather in ",c.a.createElement("strong",null,a,", ",n)," Tomorrow:"),u)}var y=new Date(Date.now()),g=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(i.a)(this,Object(s.a)(e).call(this,t))).state={postalCode:85209,city:"",state:"",weatherData:[]},a}return Object(m.a)(e,t),Object(u.a)(e,[{key:"getWeather",value:function(){var t=this,e=this.state.postalCode;d.a.get("".concat("https://api.weatherbit.io/v2.0/forecast/hourly","?postal_code=").concat(e,"&country=US&key=").concat("ecb047c847dc4caeb7782c02f3856aaa","&hours=48&units=I")).then(function(e){var a=e.data,n=a.city_name,c=a.state_code,r=e.data.data.filter(function(t){var e=new Date(t.timestamp_utc),a=y.getDay()+1;return e.getDay()===a});t.setState({weatherData:r,city:n,state:c})}).catch(function(t){return console.log("Axios Err: ".concat(t.message))})}},{key:"componentDidMount",value:function(){this.getWeather()}},{key:"handleChange",value:function(t){this.setState({postalCode:t})}},{key:"handleClick",value:function(){this.getWeather()}},{key:"render",value:function(){var t=this,e=this.state,a=e.weatherData,n=e.city,r=e.state,o=e.postalCode;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Weather")),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"inputs"},c.a.createElement("span",null,"Input US Postal Code:"),c.a.createElement("input",{onChange:function(e){return t.handleChange(e.target.value)},value:o,type:"number"}),c.a.createElement("button",{onClick:function(){return t.handleClick()}},"GO")),c.a.createElement("hr",null),c.a.createElement(v,{data:a,city:n,state:r})))}}]),e}(n.Component);o.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.263a2964.chunk.js.map