(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{345:function(e,a,t){e.exports=t(714)},713:function(e,a,t){},714:function(e,a,t){"use strict";t.r(a);t(192),t(203),t(204),t(205),t(206),t(207),t(208),t(209),t(210),t(211),t(212),t(213),t(214),t(215),t(216),t(346),t(347),t(348),t(349),t(350),t(351),t(352),t(353),t(354),t(220),t(356),t(357),t(117),t(358),t(359),t(360),t(361),t(362),t(363),t(364),t(365),t(366),t(367),t(368),t(369),t(370),t(371),t(373),t(374),t(229),t(119),t(375),t(376),t(377),t(378),t(379),t(380),t(381),t(382),t(383),t(384),t(385),t(386),t(387),t(388),t(389),t(390),t(234),t(391),t(392),t(393),t(394),t(395),t(396),t(397),t(398),t(399),t(400),t(401),t(403),t(404),t(405),t(406),t(407),t(408),t(409),t(410),t(411),t(412),t(413),t(414),t(415),t(416),t(417),t(418),t(419),t(420),t(421),t(422),t(169),t(424),t(425),t(426),t(427),t(430),t(431),t(432),t(434),t(435),t(436),t(437),t(438),t(439),t(440),t(441),t(442),t(443),t(444),t(246),t(447),t(448),t(171),t(449),t(450),t(451),t(452),t(127),t(453),t(454),t(455),t(456),t(457),t(458),t(459),t(460),t(461),t(462),t(463),t(464),t(465),t(466),t(467),t(468),t(469),t(470),t(471),t(472),t(473),t(474),t(475),t(476),t(477),t(478),t(482),t(483),t(484),t(485),t(486),t(487),t(488),t(489),t(490),t(491),t(492),t(493),t(495),t(496),t(497),t(498),t(499),t(500),t(501),t(502),t(503),t(504),t(505),t(506),t(507),t(508),t(509),t(510),t(511),t(512),t(513),t(514),t(515),t(176),t(516),t(517),t(519),t(520),t(521),t(522),t(523),t(257),t(258),t(259),t(260),t(261),t(262),t(263),t(264),t(265),t(266),t(267),t(268),t(269),t(270),t(271),t(272),t(273),t(526),t(527),t(528),t(529),t(530),t(531),t(532),t(533),t(534),t(535),t(536),t(537),t(538),t(539),t(540),t(541),t(543),t(545),t(546),t(547),t(548),t(549),t(550),t(551),t(552),t(553),t(554),t(275),t(277),t(278),t(279),t(280),t(281),t(282),t(283),t(284),t(285),t(286),t(287),t(288),t(289),t(290),t(291),t(292),t(293),t(555),t(556),t(557),t(559),t(294),t(295),t(296),t(561),t(562),t(563),t(564),t(565),t(566),t(567),t(568),t(298),t(569),t(570),t(571),t(573),t(300),t(574);var n=t(0),r=t.n(n),l=(t(301),t(580),t(69)),o=t.n(l),c=t(49),s=t(109),i=t(111),m=t(333),u=t.n(m),d=t(334),p=t(22),f=t(42),g=t.n(f),E="8a9a05ecf031c021e06116719b0063fe",v="https://api.themoviedb.org/3/",b="https://image.tmdb.org/t/p/";function h(){return{type:"auth_user",payload:g.a.get("".concat("/api/users","/auth")).then((function(e){return e.data}))}}var x=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function l(l){var o=Object(c.c)((function(e){return e.user})),s=Object(c.b)();return Object(n.useEffect)((function(){s(h()).then((function(e){e.payload.isAuth?(t&&!e.payload.isAdmin||!1===a)&&l.history.push("/"):a&&l.history.push("/login")}))}),[]),r.a.createElement(e,Object.assign({},l,{user:o}))}return l},w=t(25),y=t(717),N=t(335),S=t(722),k=t(723),I=t(61),j=t(716);var O=function(e){var a=e.userFrom,t=e.movieInfo,l=e.movieId,o=Object(n.useState)(!1),c=Object(w.a)(o,2),s=c[0],i=c[1],m={userFrom:a,movieId:l,movieTitle:t.original_title,movieImage:t.poster_path,movieRating:t.vote_average};return Object(n.useEffect)((function(){g.a.post("/api/favourite/favourited",m).then((function(e){e.data.success?i(e.data.favourited):alert("Failed to get data")}))}),[m]),r.a.createElement("div",null,r.a.createElement(j.a,{className:"fav-btn",style:{fontSize:"inherit"},onClick:function(){s?g.a.post("/api/favourite/removeFromFavorite",m).then((function(e){e.data.success?i(!e.data.success):alert("Something went wrong...")})):g.a.post("/api/favourite/addToFavorite",m).then((function(e){e.data.success?i(e.data.success):alert("Something went wrong...")}))}},s?r.a.createElement(I.c,{style:{color:"#F44336"}}):r.a.createElement(I.b,null)))};var _=function(){var e=Object(n.useState)([]),a=Object(w.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(1),c=Object(w.a)(o,2),s=c[0],i=c[1],m=Object(n.useState)([2,3,4,5]),u=Object(w.a)(m,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){fetch("".concat(v,"movie/popular?api_key=").concat(E,"&language=en-US&page=").concat(s)).then((function(e){return e.json()})).then((function(e){l(e.results)}))}),[s]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"px-5 mb-4"},"Popular movies"),r.a.createElement("div",{className:"px-5 "},r.a.createElement(y.a,{lg:5,md:4,className:"g-4 "},t&&t.map((function(e,a){var t=b+"w500"+e.poster_path;return r.a.createElement("div",{key:a},r.a.createElement(N.a,null,r.a.createElement(S.a,{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(S.a.Body,{variant:"top",className:"d-flex flex-column justify-content-between",style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"320px"}},r.a.createElement("div",{className:"px-2 d-flex align-items-center",style:{background:"#22A1B1",width:"max-content",borderRadius:"5px"}},r.a.createElement(I.a,{style:{color:"yellow"}}),r.a.createElement("span",{className:"px-1",style:{color:"white"}},e.vote_average)),r.a.createElement("div",{className:"align-self-end"})),r.a.createElement(S.a.Text,{className:"p-2  align-self-center w-100"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-start"},r.a.createElement("div",{className:"mx-auto"},e.original_title),r.a.createElement(O,{movieInfo:e,movieId:e.id,userFrom:localStorage.getItem("userId")})))))))}))),r.a.createElement(k.a,{className:"mt-4 justify-content-center"},r.a.createElement(k.a.Prev,{disabled:1==s,onClick:function(){s==d[0]&&p((function(e){return e.map((function(e){return e-4}))})),i((function(e){return e-1})),document.body.scrollTop=0,document.documentElement.scrollTop=0}}),r.a.createElement(k.a.Item,{active:1===s,activeLabel:"",onClick:function(){i(1),document.body.scrollTop=0,document.documentElement.scrollTop=0}},1),r.a.createElement(k.a.Ellipsis,{disabled:!0}),d.map((function(e,a){return r.a.createElement(k.a.Item,{key:a,activeLabel:"",active:e==s,onClick:function(e){i(e.target.innerText),document.body.scrollTop=0,document.documentElement.scrollTop=0}},e)})),r.a.createElement(k.a.Ellipsis,{disabled:!0}),r.a.createElement(k.a.Item,{activeLabel:"",active:500===s,onClick:function(){i(500),document.body.scrollTop=0,document.documentElement.scrollTop=0}},500),r.a.createElement(k.a.Next,{disabled:500==s,onClick:function(){s==d[d.length-1]&&p((function(e){return e.map((function(e){return e+4}))})),i((function(e){return e+1})),document.body.scrollTop=0,document.documentElement.scrollTop=0}}))))},C=t(147),T=t(46),q=t(720);var B=Object(p.f)((function(e){var a=Object(c.b)(),t=!!localStorage.getItem("rememberMe"),l=Object(n.useState)(""),o=Object(w.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)(t),u=Object(w.a)(m,2),d=u[0],p=u[1],f=function(){p(!d)},E=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return r.a.createElement(C.a,{initialValues:{email:E,password:""},validationSchema:T.a().shape({email:T.c().email("Email is invalid").required("Email is required"),password:T.c().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(t,n){var r=n.setSubmitting;setTimeout((function(){var n={email:t.email,password:t.password};a(function(e){return{type:"login_user",payload:g.a.post("".concat("/api/users","/login"),e).then((function(e){return e.data}))}}(n)).then((function(a){a.payload.loginSuccess?(window.localStorage.setItem("userId",a.payload.userId),!0===d?window.localStorage.setItem("rememberMe",t.id):localStorage.removeItem("rememberMe"),e.history.push("/")):i("Check out your Account or Password again")})).catch((function(e){i("Check out your Account or Password again"),setTimeout((function(){i("")}),3e3)})),r(!1)}),500)}},(function(e){var a=e.values,t=e.touched,n=e.errors,l=(e.dirty,e.isSubmitting),o=e.handleChange,c=e.handleBlur,i=e.handleSubmit;e.handleReset;return r.a.createElement("div",{className:"app"},r.a.createElement("h2",null,"Log In"),s&&r.a.createElement("label",null,r.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},s)),r.a.createElement(q.a,{onSubmit:i,style:{width:"350px"}},r.a.createElement(q.a.Group,{className:"mb-3",controlId:"formBasicEmail",required:!0},r.a.createElement(q.a.Control,{id:"email",type:"email",value:a.email,onChange:o,onBlur:c,placeholder:"Email address",className:n.email&&t.email?"text-input error":"text-input"}),n.email&&t.email&&r.a.createElement(q.a.Text,{className:"input-feedback"},n.email)),r.a.createElement(q.a.Group,{className:"mb-3",controlId:"formBasicPassword",required:!0},r.a.createElement(q.a.Control,{id:"password",type:"password",placeholder:"Password",value:a.password,onChange:o,onBlur:c,className:n.password&&t.password?"text-input error":"text-input"}),n.password&&t.password&&r.a.createElement(q.a.Text,{className:"input-feedback"},n.password)),r.a.createElement(q.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"},r.a.createElement(q.a.Check,{id:"rememberMe",onChange:f,checked:d,type:"checkbox",label:"Remember Me"})),r.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password?"),r.a.createElement(j.a,{disabled:l,onSubmit:i,variant:"primary",type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement("div",{className:"mt-4"},"Or ",r.a.createElement("a",{href:"/register"},"register now!"))))}))})),P=t(342),L=t.n(P);var R=function(e){var a=Object(c.b)();return r.a.createElement(C.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:T.a().shape({name:T.c().required("Name is required"),lastName:T.c().required("Last Name is required"),email:T.c().email("Email is invalid").required("Email is required"),password:T.c().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:T.c().oneOf([T.b("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(t,n){var r=n.setSubmitting;setTimeout((function(){var n={email:t.email,password:t.password,name:t.name,lastname:t.lastname,image:"http://gravatar.com/avatar/".concat(L()().unix(),"?d=identicon")};a(function(e){return{type:"register_user",payload:g.a.post("".concat("/api/users","/register"),e).then((function(e){return e.data}))}}(n)).then((function(a){a.payload.success?e.history.push("/login"):alert(a.payload.err.errmsg)})),r(!1)}),500)}},(function(e){var a=e.values,t=e.touched,n=e.errors,l=(e.dirty,e.isSubmitting),o=e.handleChange,c=e.handleBlur,s=e.handleSubmit;e.handleReset;return r.a.createElement("div",{className:"app"},r.a.createElement("h2",null,"Sign up"),r.a.createElement(q.a,{style:{minWidth:"375px"},onSubmit:s,required:!0},r.a.createElement(q.a.Group,{className:"mb-3",required:!0,label:"Name"},r.a.createElement(q.a.Control,{id:"name",placeholder:"Enter your name",type:"text",value:a.name,onChange:o,onBlur:c,className:n.name&&t.name?"text-input error":"text-input"}),n.name&&t.name&&r.a.createElement(q.a.Text,{className:"input-feedback"},n.name)),r.a.createElement(q.a.Group,{className:"mb-3",required:!0,label:"Last Name"},r.a.createElement(q.a.Control,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:a.lastName,onChange:o,onBlur:c,className:n.lastName&&t.lastName?"text-input error":"text-input"}),n.lastName&&t.lastName&&r.a.createElement(q.a.Text,{className:"input-feedback"},n.lastName)),r.a.createElement(q.a.Group,{className:"mb-3",required:!0,label:"Email",hasValidation:!0,isValid:n.email&&t.email?"error":"success"},r.a.createElement(q.a.Control,{id:"email",placeholder:"Enter your Email",type:"email",value:a.email,onChange:o,onBlur:c,className:n.email&&t.email?"text-input error":"text-input"}),n.email&&t.email&&r.a.createElement(q.a.Text,{className:"input-feedback"},n.email)),r.a.createElement(q.a.Group,{className:"mb-3",required:!0,label:"Password",isValid:n.password&&t.password?"error":"success"},r.a.createElement(q.a.Control,{id:"password",placeholder:"Enter your password",type:"password",value:a.password,onChange:o,onBlur:c,className:n.password&&t.password?"text-input error":"text-input"}),n.password&&t.password&&r.a.createElement(q.a.Text,{className:"input-feedback"},n.password)),r.a.createElement(q.a.Group,{className:"mb-3",required:!0,label:"Confirm"},r.a.createElement(q.a.Control,{id:"confirmPassword",placeholder:"Confirm your Password",type:"password",value:a.confirmPassword,onChange:o,onBlur:c,className:n.confirmPassword&&t.confirmPassword?"text-input error":"text-input"}),n.confirmPassword&&t.confirmPassword&&r.a.createElement(q.a.Text,{className:"input-feedback"},n.confirmPassword)),r.a.createElement(q.a.Group,null,r.a.createElement(j.a,{onClick:s,type:"primary",disabled:l},"Submit"))))}))},F=t(719),G=t(718),A=t(721);var M=Object(p.f)((function(e){var a=Object(c.c)((function(e){return e.user}));return a.userData&&!a.userData.isAuth?r.a.createElement(A.a,null,r.a.createElement(A.a.Link,{href:"/login"},"Login"),r.a.createElement(A.a.Link,{href:"/register"},"Signup")):r.a.createElement(A.a,null,r.a.createElement(A.a.Link,{onClick:function(){g.a.get("".concat("/api/users","/logout")).then((function(a){200===a.status?e.history.push("/login"):alert("Log Out Failed")}))}},"Logout"))}));var D=function(){return r.a.createElement(F.a,{bg:"light",expand:"lg"},r.a.createElement(G.a,null,r.a.createElement(F.a.Brand,{href:"/"},r.a.createElement("img",{alt:"Logo",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ","MoviesDB"),r.a.createElement(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(F.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(A.a,{className:"me-auto"},r.a.createElement(A.a.Link,{href:"/favourites"},"Favourites"),r.a.createElement(A.a.Link,{href:"/search"},"Search")),r.a.createElement(M,null))))};var V,z=function(){var e=Object(n.useState)([]),a=Object(w.a)(e,2),t=a[0],l=a[1];function o(){g.a.post("/api/favourite/getFavouriteMovies",{userFrom:localStorage.getItem("userId")}).then((function(e){e.data.success?(l(e.data.favourites),console.log(e.data.favourites)):alert("Something went wrong...")}))}return Object(n.useEffect)((function(){o()}),[]),r.a.createElement("div",null,r.a.createElement("h3",{className:"px-5 mb-4"},"Your Favourites"),r.a.createElement("div",{className:"px-5 "},r.a.createElement(y.a,{lg:5,md:4,className:"g-4 "},t&&t.map((function(e,a){var t=b+"w500"+e.movieImage;return r.a.createElement("div",{key:a},r.a.createElement(N.a,null,r.a.createElement(S.a,{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(S.a.Body,{variant:"top",className:"d-flex flex-column justify-content-between",style:{backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"320px"}},r.a.createElement("div",{className:"px-2 d-flex align-items-center",style:{background:"#22A1B1",width:"max-content",borderRadius:"5px"}},r.a.createElement(I.a,{style:{color:"yellow"}}),r.a.createElement("span",{className:"px-1",style:{color:"white"}},e.movieRating)),r.a.createElement("div",{className:"align-self-end"})),r.a.createElement(S.a.Text,{className:"p-2  align-self-center w-100"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-start",onClick:o},r.a.createElement("div",{className:"mx-auto"},e.movieTitle),r.a.createElement(O,{movieInfo:{movieId:e.movieId,movieTitle:e.movieTitle,movieImage:e.movieImage,movieRating:e.movieRating},movieId:e.movieId,userFrom:localStorage.getItem("userId")})))))))})))))};var U=function(e){var a=e.setSearches,t=Object(n.useRef)();function l(){fetch("".concat(v,"search/multi?api_key=").concat(E,"&language=en-US&query=").concat(encodeURIComponent(t.current.value),"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){a(e.results),console.log(e.results),console.log(t.current.value)}))}return r.a.createElement("div",{className:"p-5 mx-auto"},r.a.createElement(q.a,null,r.a.createElement(q.a.Group,{className:"mb-3",controlId:"query"},r.a.createElement(q.a.Control,{type:"text",ref:t,placeholder:"Search movie/tv-show/people",onFocus:function(){V=setInterval(l,2e3)},onBlur:function(){clearInterval(V),t.current.value=""}}))))};var X=function(){var e=Object(n.useState)([]),a=Object(w.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(U,{setSearches:l}),r.a.createElement("h3",{className:"px-5 mb-4"},"Search Results"),r.a.createElement("div",{className:"px-5 "},r.a.createElement(y.a,{lg:5,md:4,className:"g-4 "},t?t.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(N.a,null,r.a.createElement(S.a,{style:{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement(S.a.Body,{variant:"top",className:"d-flex flex-column justify-content-between",style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/w500"+(e.poster_path||e.profile_path),'),url("http://placehold.it/350x350")'),backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"320px"}},r.a.createElement("div",{className:"px-2 d-flex align-items-center",style:{background:"#22A1B1",width:"max-content",borderRadius:"5px"}},"person"!==e.media_type?r.a.createElement(I.a,{style:{color:"yellow"}}):null,r.a.createElement("span",{className:"px-1",style:{color:"white"}},e.vote_average||e.known_for_department||"N-A")),r.a.createElement("div",{className:"align-self-end"})),r.a.createElement(S.a.Text,{className:"p-2  align-self-center w-100"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-start"},r.a.createElement("div",{className:"mx-auto"},e.original_title||e.name),"movie"===e.media_type&&r.a.createElement(O,{movieInfo:e,movieId:e.id,userFrom:localStorage.getItem("userId")})))))))})):r.a.createElement(N.a,null,r.a.createElement("div",null,'"Start typing in search bar to see results"')))))};var W=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(D,null),r.a.createElement("div",{style:{paddingTop:"50px",minHeight:"calc(100vh - 80px)"}},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x(_,null)}),r.a.createElement(p.a,{exact:!0,path:"/login",component:x(B,!1)}),r.a.createElement(p.a,{exact:!0,path:"/register",component:x(R,null)}),r.a.createElement(p.a,{exact:!0,path:"/favourites",component:x(z,!0)}),r.a.createElement(p.a,{exact:!0,path:"/search",component:x(X,null)}))))};t(713),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(112),H=Object(i.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"register_user":return Object(J.a)({},e,{register:a.payload});case"login_user":return Object(J.a)({},e,{loginSucces:a.payload});case"auth_user":return Object(J.a)({},e,{userData:a.payload});case"logout_user":return Object(J.a)({},e);default:return e}}}),Y=Object(i.a)(u.a,d.a)(i.c);o.a.render(r.a.createElement(c.a,{store:Y(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(s.a,null,r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[345,1,2]]]);
//# sourceMappingURL=main.1b279e8a.chunk.js.map