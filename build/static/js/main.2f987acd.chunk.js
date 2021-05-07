(this["webpackJsonpmealplan-happiness"]=this["webpackJsonpmealplan-happiness"]||[]).push([[0],{36:function(e,t,a){},43:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(28),i=a.n(n),r=a(9),l=a(2),o=a(3),j=(a(36),a(0)),d=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],n=function(){return c(!1)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{id:"navbar",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsxs)(r.b,{to:"/",className:"navbar-logo",children:[" ",Object(j.jsx)("h2",{children:"DELISS BEER"})]})}),Object(j.jsx)("div",{className:"menu-icon",onClick:function(){return c(!a)},children:Object(j.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(j.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/",className:"nav-links",onClick:n,children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/signin",className:"nav-links",onClick:n,children:Object(j.jsx)("button",{children:"Check your beers!"})})})]})]})})},b=a(30),h=a.n(b),u=(a(43),a(44),function(){return Object(s.useEffect)((function(){h.a.init({duration:800})}),[]),Object(j.jsxs)("div",{id:"home_container",children:[Object(j.jsx)("div",{className:"bg_container",children:Object(j.jsx)("div",{className:"text",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[" ",Object(j.jsxs)("h2",{children:[" ","Choose the best beer ",Object(j.jsx)("br",{}),"for your meals"]})]}),Object(j.jsx)("li",{children:" Best beers for fish, meat and veggies meals!"}),Object(j.jsxs)("li",{children:[" ",Object(j.jsx)("a",{href:"#about_container",children:Object(j.jsx)("button",{id:"btn_home",children:"Learn More"})})]})]})})}),Object(j.jsxs)("div",{"data-aos":"fade-right",id:"about_container",children:[Object(j.jsx)("div",{className:"about_card",children:Object(j.jsx)("img",{src:"https://images.pexels.com/photos/5530167/pexels-photo-5530167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"about_image"})}),Object(j.jsx)("div",{className:"about_card",children:Object(j.jsxs)("div",{className:"about_text",children:[Object(j.jsx)("h2",{children:" What is Deliss Beer?"}),Object(j.jsxs)("p",{children:["What is the best beer for you meal? ",Object(j.jsx)("br",{}),"Deliss Beer is an Automatic Beer and Food Match Generator that gives you the most suitable craft beer for your meal. You will find options for meat, fish and veggies! Discover craft beers from all around the world! You can also save your favorite beers in your acount. Try it!"]}),Object(j.jsx)("h2",{children:" How it works?"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"Register or Sign In;"}),Object(j.jsx)("li",{children:"Access the Beer and Food Match Generator;"}),Object(j.jsx)("li",{children:"Save your favorite beers!"})]}),Object(j.jsx)(r.b,{to:"/signin",children:Object(j.jsxs)("button",{id:"btn_home",type:"button",children:[" ","Get Started"]})})]})})]})]})}),m=function(e){var t=e.onRouteChange,a=e.updateLoadUser,c=Object(s.useState)(""),n=Object(o.a)(c,2),i=n[0],r=n[1],l=Object(s.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],u=Object(s.useState)(""),m=Object(o.a)(u,2),p=m[0],O=m[1];return Object(j.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center ",children:Object(j.jsx)("main",{className:"pa4",children:Object(j.jsxs)("form",{className:"measure",children:[Object(j.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(j.jsx)("legend",{className:"f4 fw6 ph0 mh0",style:{color:" orange"},children:"Sign In"}),Object(j.jsxs)("div",{className:"mt3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(j.jsx)("input",{className:"f7 pa2 input-reset ba bg-transparent w-100",type:"email",name:"email-address",id:"email-address",placeholder:"Enter your email",onChange:function(e){r(e.target.value)}})]}),Object(j.jsxs)("div",{className:"mv3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{className:"f7 pa2 input-reset ba bg-transparent w-100",type:"password",name:"password",id:"password",placeholder:"Enter your password",onChange:function(e){h(e.target.value)}})]})]}),Object(j.jsx)("div",{className:"",children:Object(j.jsx)("input",{onClick:function(e){return function(e){e.preventDefault(),fetch("https://guarded-peak-18752.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:b})}).then((function(e){return e.json()})).then((function(e){e.id?(a(e),t("beermatch")):O("Wrong Credentials!")}))}(e)},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in",style:{color:"black"}})}),""!==p&&Object(j.jsx)("p",{id:"error",children:p}),Object(j.jsx)("div",{className:"lh-copy mt3",children:Object(j.jsx)("p",{onClick:function(){return t("register")},className:"f6 link dim black db pointer",style:{color:"black"},children:"Register"})})]})})})},p=function(e){var t=e.onRouteChange,a=e.updateLoadUser,c=Object(s.useState)(""),n=Object(o.a)(c,2),i=n[0],r=n[1],l=Object(s.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],u=Object(s.useState)(""),m=Object(o.a)(u,2),p=m[0],O=m[1];return Object(j.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center ",children:Object(j.jsx)("main",{className:"pa4",children:Object(j.jsxs)("form",{className:"measure",children:[Object(j.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(j.jsx)("legend",{className:"f4 fw6 ph0 mh0",style:{color:" orange"},children:"Register"}),Object(j.jsxs)("div",{className:"mt3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{required:"required",className:"f7 pa2 input-reset ba bg-transparent w-100",type:"text",name:"name",id:"name",placeholder:"Enter your name",onChange:function(e){h(e.target.value)}})]}),Object(j.jsxs)("div",{className:"mt3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6",for:"email-address",children:"Email"}),Object(j.jsx)("input",{required:!0,className:"f7 pa2 input-reset ba bg-transparent w-100",type:"email",name:"email-address",id:"email-address",placeholder:"Enter your email",onChange:function(e){r(e.target.value)}})]}),Object(j.jsxs)("div",{className:"mv3",children:[Object(j.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{required:!0,className:"f7 pa2 input-reset ba bg-transparent w-100",type:"password",name:"password",id:"password",placeholder:"Enter your password",onChange:function(e){O(e.target.value)}})]})]}),Object(j.jsx)("div",{className:"",children:Object(j.jsx)("input",{onClick:function(e){return function(e){e.preventDefault(),fetch("https://guarded-peak-18752.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:b,email:i,password:p})}).then((function(e){return e.json()})).then((function(e){e&&(a(e),t("signin"))}))}(e)},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register",style:{color:" #d45333;"}})}),Object(j.jsx)("div",{className:"lh-copy mt3",children:Object(j.jsx)("p",{onClick:function(){return t("signin")},className:"f6 link dim black db pointer",children:"Signin"})})]})})})},O=a(11),f=a.n(O),x=(a(63),function(e){var t=e.onFilterChange;return Object(j.jsxs)("div",{id:"form",children:[Object(j.jsx)("h2",{children:"Beer and Food Match Generator"}),Object(j.jsxs)("p",{className:"presentation_text",children:[" ",Object(j.jsx)("b",{children:"Check some beer ideas for your meals! Refresh for more!"})]}),Object(j.jsx)("p",{children:" Filter by ABV (alcohol by volume):"}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"option",children:[Object(j.jsx)("input",{type:"radio",id:"inputbox",name:"alcohol",value:"abv_lt=5",onChange:function(e){return t(e)}}),Object(j.jsxs)("label",{className:"labelCheckbox",htmlFor:"alcohol",children:[" ","Less than 5%"]})]}),Object(j.jsxs)("div",{className:"option",children:[Object(j.jsx)("input",{type:"radio",id:"inputbox",name:"alcohol",value:"abv_gt=5&abv_lt=6",onChange:function(e){return t(e)}}),Object(j.jsxs)("label",{className:"labelCheckbox",htmlFor:"alcohol",children:[" ","5% - 6%"]})]}),Object(j.jsxs)("div",{className:"option",children:[Object(j.jsx)("input",{type:"radio",id:"inputbox",name:"alcohol",value:"abv_gt=5",onChange:function(e){return t(e)}}),Object(j.jsxs)("label",{className:"labelCheckbox",htmlFor:"alcohol",children:[" ","More than 6%"]})]})]})]})}),v=(a(64),function(e){var t=e.image,a=e.name,s=e.description,c=e.user;return Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("img",{src:t,alt:"no_beer_image"}),Object(j.jsxs)("h3",{children:[a," "]}),Object(j.jsx)("p",{children:s}),Object(j.jsx)("button",{id:"btn_small",type:"button",children:Object(j.jsx)("i",{className:"fas fa-heart",onClick:function(){fetch("https://guarded-peak-18752.herokuapp.com/favorites",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,beer_name:a,beer_description:s,beer_image:t})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}})})]})})});a(65);var g=function(e){var t=e.props,a=e.user,s=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[a],e[a]=s}return e}(t).slice(0,5).map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(v,{image:e.image_url,name:e.name,description:e.tagline,user:a})},e.name)}));return Object(j.jsx)("div",{className:"beerlist",children:s})},N=(a(66),function(e){var t=e.user,a=Object(s.useState)(null),c=Object(o.a)(a,2),n=c[0],i=c[1],r=Object(s.useState)(null),l=Object(o.a)(r,2),d=l[0],b=l[1],h=Object(s.useState)(null),u=Object(o.a)(h,2),m=u[0],p=u[1],O=Object(s.useState)(""),v=Object(o.a)(O,2),N=v[0],y=v[1],w="https://api.punkapi.com/v2/beers?&per_page=50&".concat(N,"&");Object(s.useEffect)((function(){f.a.get(w+"food=chicken").then((function(e){i(e.data)})).catch(console.log)}),[N,w]),Object(s.useEffect)((function(){f.a.get(w+"food=fish").then((function(e){b(e.data)})).catch(console.log)}),[N,w]),Object(s.useEffect)((function(){f.a.get(w+"food=vegetables").then((function(e){p(e.data)})).catch(console.log)}),[N,w]);return Object(j.jsxs)("div",{className:"plan_container",children:[Object(j.jsx)(x,{onFilterChange:function(e){y(e.target.value)}}),Object(j.jsxs)("div",{id:"meat",children:[Object(j.jsx)("div",{className:"underline",children:Object(j.jsx)("h2",{children:"Meat"})}),n&&Object(j.jsx)(g,{props:n,user:t})," "]}),Object(j.jsxs)("div",{id:"fish",children:[Object(j.jsx)("div",{className:"underline",children:Object(j.jsx)("h2",{children:"Fish"})}),d&&Object(j.jsx)(g,{props:d,user:t})]}),Object(j.jsxs)("div",{id:"veggie",children:[Object(j.jsx)("div",{className:"underline",children:Object(j.jsx)("h2",{children:"Veggies"})}),m&&Object(j.jsx)(g,{props:m,user:t})]}),Object(j.jsx)("p",{id:"caution",children:" * Be responsible. Drink carefully."})]})}),y=(a(67),function(){var e=Object(s.useState)("signin"),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)({id:"",name:"",email:"",favorites:"",joined:""}),i=Object(o.a)(n,2),l=i[0],d=i[1];Object(s.useEffect)((function(){var e=localStorage.getItem("save-status");e&&d(JSON.parse(e))}),[]),Object(s.useEffect)((function(){localStorage.setItem("save-status",JSON.stringify(l))}));var b=function(e){c(e)},h=function(e){d({id:e.id,name:e.name,email:e.email,favorites:e.entries,joined:e.joined})};return Object(j.jsx)("div",{children:"beermatch"===a||l.id?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"welcomeboard",children:[Object(j.jsxs)("p",{className:"hello",children:["Hello ",l.name,"!"]}),Object(j.jsx)(r.b,{to:"/favorites/".concat(l.id),children:Object(j.jsxs)("button",{id:"btn_home",type:"button",children:[" ","Check your Favorite Beers!"]})}),Object(j.jsx)("p",{onClick:function(){return d({id:"",name:"",email:"",favorites:"",joined:""}),void c("signin")},children:"Signout"})]}),Object(j.jsx)(N,{user:l.id})]}):"signin"===a?Object(j.jsx)(m,{updateLoadUser:h,onRouteChange:b}):Object(j.jsx)(p,{updateLoadUser:h,onRouteChange:b})})}),w=a(31),k=(a(68),function(){var e=Object(l.f)().id,t=Object(s.useState)([]),a=Object(o.a)(t,2),c=a[0],n=a[1];Object(s.useEffect)((function(){f.a.get("https://guarded-peak-18752.herokuapp.com/favorites/".concat(e)).then((function(e){n(e.data)}))}),[e]);var i=c.map((function(e){return Object(j.jsxs)("div",{id:"favcard",children:[" ",Object(j.jsxs)("div",{className:"card",children:[" ",Object(j.jsx)("button",{id:"btn_small",onClick:function(){var t;t=e.beer_id,f.a.delete("https://guarded-peak-18752.herokuapp.com/favorites/".concat(t)).then((function(e){var a=Object(w.a)(c).filter((function(e){return e.beer_id!==t}));n(a)}))},children:"X"})," ",Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("img",{src:e.beer_image,alt:"recipe_image"}),Object(j.jsxs)("h3",{children:[e.beer_name," "]}),Object(j.jsx)("p",{children:e.beer_description})]})]})]},e.beer_id)}));return Object(j.jsxs)("div",{className:"favorites",children:[Object(j.jsx)("div",{className:"favoritelist",children:i}),";"]})}),_=function(){return Object(j.jsxs)("div",{className:"favorites",children:[Object(j.jsx)("h2",{children:"These are your saved beers:"}),Object(j.jsx)(k,{})]})},C=(a(69),function(){return Object(j.jsx)("div",{id:"footer",children:Object(j.jsxs)("p",{children:["This app was made with ",Object(j.jsx)("i",{className:"fas fa-heart"})," by"," ",Object(j.jsxs)("a",{href:"https://github.com/dianacpg",target:"_blank",rel:"noreferrer",children:["Dianacpg ",Object(j.jsx)("i",{id:"heart",className:"fab fa-github"})]})]})})});a(70);var S=function(){return Object(j.jsx)("div",{id:"App",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)("div",{className:"app-header",children:Object(j.jsx)(d,{})}),Object(j.jsx)("div",{id:"main-content",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(l.a,{exact:!0,path:"/signin",component:y}),Object(j.jsx)(l.a,{exact:!0,path:"/favorites/:id",component:_})]})}),Object(j.jsx)("div",{className:"app-footer",children:Object(j.jsx)(C,{})})]})})};a(71);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.2f987acd.chunk.js.map