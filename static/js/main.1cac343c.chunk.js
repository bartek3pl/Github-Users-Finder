(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t.p+"static/media/star.cf33ec77.svg"},24:function(e,n,t){e.exports=t.p+"static/media/logo.76d344f0.svg"},28:function(e,n,t){},32:function(e,n,t){e.exports=t.p+"static/media/friendship.1a729de9.svg"},33:function(e,n,t){e.exports=t.p+"static/media/like.e87899ae.svg"},34:function(e,n,t){e.exports=t.p+"static/media/user.5896d3f9.png"},39:function(e,n,t){e.exports=t(52)},52:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(29),i=t.n(o),c=(t(28),t(14)),l=t.n(c),s=t(18),p=t(8),u=t(9),d=t(11),m=t(10),g=t(12),f=t(1),b=t(2),x=t(4),h={fontPrimary:"#fff",fontSecondary:"#24292e",fontBt:"#24292e",fontPlaceholder:"#d6d9de",bgPrimary:"#eee",searcherOutlineBlur:"#d6d9de",searcherOutlineFocus:"#24292e",loginBg:"#24292e",infoStatsBorderFst:"#111",infoStatsBorderSnd:"#777",infoStatsOdd:"#555",infoStatsEven:"#24292e",repoLangBg:"#ffb75e",repoTitleBg:"#fff",repoDescBg:"#f6f8fa",repoDescBorderTop:"#d6d9de",repoStarsBg:"#24292e",repoSizeBg:"#24292e",btBorder:"#24292e",btBack:"orange",btGithub:"#00e80f"};function v(){var e=Object(f.a)(["\n  padding: 6px;\n  font-size: 36px;\n  margin-bottom: 20px;\n  outline: 1px solid ",";\n  will-change: transform;\n  text-decoration: none;\n"]);return v=function(){return e},e}var y=x.a.input({focusable:!0,init:{scale:.95,y:0,outlineColor:h.searcherOutlineBlur,transition:{type:"spring",stiffness:500}},focus:{scale:1,y:10,outlineColor:h.searcherOutlineFocus,transition:{type:"spring",stiffness:500}}}),E=Object(b.b)(y)(v(),h.searcherOutlineBlur),w=function(e){return r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement(E,{type:"text",value:e.value,onChange:e.onChange,placeholder:"Type user login..."}))},j=t(24),O=t.n(j);function k(){var e=Object(f.a)(["\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n  margin: 0;\n"]);return k=function(){return e},e}function B(){var e=Object(f.a)(["\n  font-size: 30px;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 400;\n  display: inline-block;\n  padding: 10px 15px;\n  margin-bottom: 0px;\n"]);return B=function(){return e},e}function z(){var e=Object(f.a)(["\n  grid-area: search;\n"]);return z=function(){return e},e}var S=b.b.div(z()),L=Object(x.a)(S)({open:{y:0},closed:{y:function(e){var n=e.windowHeight,t=e.marginHeight;return"".concat(n/2-t,"px")}}}),_=b.b.h1(B()),C=b.b.img(k()),D=function(e){function n(e){var t;return Object(p.a)(this,n),(t=Object(d.a)(this,Object(m.a)(n).call(this,e))).state={windowHeight:window.innerHeight},t}return Object(g.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=window.innerHeight;this.setState({windowHeight:e})}},{key:"render",value:function(){var e=this.props,n=e.isLoaded,t=e.value,a=e.onChange,o=e.onSubmit,i=this.state.windowHeight;return r.a.createElement(L,{windowHeight:i,marginHeight:100,pose:n?"open":"closed"},r.a.createElement(C,{src:O.a,alt:"logo",className:"logo"}),r.a.createElement(_,null,"Github Users Finder"),r.a.createElement(C,{src:O.a,alt:"logo",className:"logo"}),r.a.createElement(w,{value:t,onChange:a,onSubmit:o}))}}]),n}(a.Component),F=t(32),T=t.n(F),P=t(33),H=t.n(P),N=t(20),R=t.n(N),M=t(34),W=t.n(M);function U(){var e=Object(f.a)(["\n  display: flex;\n  width: 50px;\n  height: 50px;\n  margin-right: 15px;\n"]);return U=function(){return e},e}function G(){var e=Object(f.a)(["\n  display: block;\n  width: 250px;\n  height: 250px;\n  border: 1px solid ",";\n  margin-left: 20px;\n  transition: border-color 0.2s ease;\n"]);return G=function(){return e},e}function I(){var e=Object(f.a)(["\n  display: inline-block;\n  text-align: left;\n  margin-left: 25px;\n"]);return I=function(){return e},e}function J(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 250px 350px;\n  grid-column-gap: 20px;\n  justify-content: center;\n"]);return J=function(){return e},e}function Q(){var e=Object(f.a)(["\n  position: relative;\n  margin: 0px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-weight: 400;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  color: ",";\n  border-top: 1px solid ",";\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    border-top: 1px solid ",";\n  }\n\n  &:first-child {\n    margin-top: 20px;\n    border-top: 0;\n  }\n\n  &:last-child {\n    border-radius: 0px 0px 8px 8px;\n  }\n\n  &:nth-child(odd) {\n    background: ",";\n  }\n\n  &:nth-child(even) {\n    background: ",";\n  }\n"]);return Q=function(){return e},e}function X(){var e=Object(f.a)(["\n  margin: 0px;\n  font-weight: 300;\n  font-size: 22px;\n  font-style: normal;\n"]);return X=function(){return e},e}function q(){var e=Object(f.a)(["\n  margin: 0;\n  margin-bottom: 5px;\n  font-size: 35px;\n  font-weight: 600;\n  display: inline-block;\n  background: ",";\n  color: ",";\n  border-radius: 8px;\n  padding: 2px 5px;\n  transition: transform 0.2s ease, color 0.2s ease;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &:hover {\n    color: ",";\n    transform: translateX(8px);\n  }\n"]);return q=function(){return e},e}function A(){var e=Object(f.a)(["\n  display: inline-flex;\n  max-width: calc(100% - 20px);\n"]);return A=function(){return e},e}function K(){var e=Object(f.a)(["\n  font-size: 24px;\n  text-transform: uppercase;\n  font-weight: 300;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n"]);return K=function(){return e},e}function V(){var e=Object(f.a)(["\n  position: relative;\n  border-radius: 8px;\n  padding-top: 30px;\n\n  background-image: linear-gradient(-20deg, #616161 0%, #cbcbcb 100%);\n\n  -webkit-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);\n  -moz-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);\n  box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);\n"]);return V=function(){return e},e}function Y(){var e=Object(f.a)(["\n  grid-area: info;\n  min-height: 590px;\n"]);return Y=function(){return e},e}var Z=b.b.div(Y()),$=Object(x.a)(Z)({open:{opacity:1,x:0,transition:{type:"tween",ease:"anticipate",duration:500}},closed:{opacity:0,x:"-20%"}}),ee=b.b.div(V()),ne=b.b.h2(K()),te=b.b.div(A()),ae=b.b.h3(q(),h.loginBg,h.fontPrimary,h.repoLangBg),re=b.b.p(X()),oe=b.b.h4(Q(),h.fontPrimary,h.infoStatsBorderFst,h.infoStatsBorderSnd,h.infoStatsOdd,h.infoStatsEven),ie=Object(x.a)(oe)({open:{delay:150,y:0,opacity:1},closed:{y:20,opacity:0}}),ce=b.b.div(J()),le=b.b.div(I()),se=x.a.div({open:{delay:150,delayChildren:300,staggerChildren:70,opacity:1,y:0,transition:{type:"spring"}},closed:{y:50,opacity:0,delay:50}}),pe=b.b.img(G(),h.fontPrimary),ue=Object(x.a)(pe)({open:{delay:200,opacity:1},closed:{opacity:0}}),de=b.b.img(U()),me=Object(x.a)(re)({open:{delay:150,y:0,opacity:1,transition:{type:"tween",duration:500,ease:"anticipate"}},closed:{y:-50,opacity:0,delay:50}});function ge(e){return e.reduce(function(n,t,a){return n+e[a].stargazers_count},0)}function fe(e){for(var n=[],t=1,a={},r=0;r<e.length;++r)n.push(e[r].language);for(var o=n[0],i=0;i<n.length;++i)null==a[n[i]]?a[n[i]]=1:a[n[i]]+=1,a[n[i]]>t&&(o=n[i],t=a[n[i]]);return o}var be=function(e){var n,t="https://github.com/".concat(e.login);return r.a.createElement($,{pose:e.isLoaded?"open":"closed"},r.a.createElement(ne,null,"Information"),r.a.createElement(ee,null,r.a.createElement(ce,null,r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(ue,{pose:e.isLoaded?"open":"closed",src:e.avatar?e.avatar:W.a,alt:e.fullname})),r.a.createElement(le,null,r.a.createElement(te,null,r.a.createElement(ae,{as:"a",href:t,target:"_blank",rel:"noreferrer"},e.login)),r.a.createElement(me,{pose:e.isLoaded?"open":"closed"},r.a.createElement(re,null,r.a.createElement("span",{style:{fontWeight:"400"}},e.fullname)),r.a.createElement(re,null,r.a.createElement("span",{style:{fontWeight:"400"}},e.email)),r.a.createElement(re,null,e.location&&r.a.createElement(r.a.Fragment,null,"Living in ",r.a.createElement("span",{style:{fontWeight:"400"}},e.location))),r.a.createElement(re,null,e.joinDate&&r.a.createElement(r.a.Fragment,null,"Joined on ",r.a.createElement("span",{style:{fontWeight:"400"}},e.joinDate.split("").slice(0,10).join("")))),r.a.createElement(re,null,e.company&&r.a.createElement(r.a.Fragment,null,"Working in ",r.a.createElement("span",{style:{fontWeight:"400"}},e.company)))))),r.a.createElement(se,{pose:e.isLoaded?"open":"closed"},r.a.createElement(ie,null,r.a.createElement(de,{src:H.a,alt:"heart"}),fe(e.repos)?fe(e.repos):"Hard to say :/"),r.a.createElement(ie,null,r.a.createElement(de,{src:R.a,alt:"star"}),1===ge(e.repos)?r.a.createElement(r.a.Fragment,null,ge(e.repos)," "," star"):r.a.createElement(r.a.Fragment,null,ge(e.repos)," "," stars")),r.a.createElement(ie,null,r.a.createElement(de,{src:T.a,alt:"friends"}),(n=e.followers,"".concat(n,1===n?" follower":" followers"))))))},xe=t(13),he=t(19);function ve(){var e=Object(f.a)(["\n  position: relative;\n  z-index: 0;\n  text-transform: uppercase;\n  padding: 14px 28px;\n  margin: 10px;\n  margin-top: 30px;\n  outline: none;\n  background: transparent;\n  border: 2px solid ",";\n  font-family: 'Montserrat';\n  font-size: 24px;\n  font-weight: 300;\n  color: ",";\n  cursor: pointer;\n  border-radius: 5px;\n  transition: transform 0.2s ease, color 0.2s ease, background-color 0.2s ease,\n    border 0.2s ease;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 0%;\n    background: ",";\n    z-index: -1;\n    transition: 0.4s;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.18);\n    opacity: 1;\n    transition: opacity 0.4s ease;\n  }\n\n  &:hover::before {\n    height: 100%;\n  }\n\n  &:hover::after {\n    opacity: 0.75;\n  }\n\n  &:hover {\n    transform: scale(0.95);\n    color: ",";\n    border-color: ",";\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n\n  &:active::after {\n    opacity: 0;\n  }\n"]);return ve=function(){return e},e}function ye(){var e=Object(f.a)(["\n  margin-right: 40px;\n"]);return ye=function(){return e},e}function Ee(){var e=Object(f.a)(["\n  display: inline-block;\n  font-weight: 700;\n  margin-right: 8px;\n"]);return Ee=function(){return e},e}function we(){var e=Object(f.a)(["\n  display: block;\n  margin-top: 2px;\n  margin-right: 40px;\n  margin-left: 0px;\n  text-align: left;\n"]);return we=function(){return e},e}function je(){var e=Object(f.a)(["\n  grid-area: repo;\n  width: 610px;\n  margin-top: 20px;\n  margin-left: 40px;\n"]);return je=function(){return e},e}var Oe=b.b.div(je()),ke=b.b.div(we()),Be=Object(b.b)(ke)(Ee()),ze=b.b.div(ye()),Se=b.b.button(ve(),h.btBorder,h.fontBt,function(e){return e.background},h.fontPrimary,function(e){return e.border});function Le(){var e=Object(f.a)(["\n  width: 31px;\n  height: 31px;\n  padding-top: 9px;\n  display: inline-block;\n"]);return Le=function(){return e},e}function _e(){var e=Object(f.a)(["\n  grid-area: size;\n  padding-top: 5px;\n  font-size: 25px;\n  border-radius: 0px 0px 8px 0px;\n  border-right: 2px solid ",";\n  border-bottom: 2px solid ",";\n  color: ",";\n  background: ",";\n  border-top: 1px solid ",";\n  transition: border 0.2s ease-in-out;\n\n  ",":hover & {\n    border-right-color: ",";\n    border-bottom-color: ",";\n  }\n"]);return _e=function(){return e},e}function Ce(){var e=Object(f.a)(["\n  grid-area: desc;\n  background: ",";\n  font-weight: 300;\n  font-size: 15px;\n  text-align: left;\n  padding: 2px 10px;\n  border-bottom: 2px solid ",";\n  border-top: 1px solid ",";\n  transition: border 0.2s ease-in-out;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ",":hover & {\n    border-color: ",";\n  }\n"]);return Ce=function(){return e},e}function De(){var e=Object(f.a)(["\n  grid-area: stars;\n  background: ",";\n  color: ",";\n  border-radius: 0px 8px 0px 0px;\n  border-top: 2px solid ",";\n  border-right: 2px solid ",";\n  font-size: 32px;\n  padding-top: 2px;\n  transition: border 0.2s ease-in-out;\n\n  ",":hover & {\n    border-color: ",";\n  }\n"]);return De=function(){return e},e}function Fe(){var e=Object(f.a)(["\n  grid-area: name;\n  background: ",";\n  font-weight: 600;\n  padding: 8px 10px;\n  text-transform: uppercase;\n  text-align: left;\n  font-size: 22px;\n  border-top: 2px solid ",";\n  transition: padding-left 0.2s ease-in, color 0.2s ease-in, border 0.2s ease-in;\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  ",":hover & {\n    color: ",";\n    border-color: ",";\n    padding-left: 20px;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 0;\n    background: ",";\n    z-index: -1;\n    transition: 0.5s;\n    border-radius: 0 0 50% 50%;\n  }\n\n  ",":hover &::before {\n    height: 190%;\n  }\n"]);return Fe=function(){return e},e}function Te(){var e=Object(f.a)(["\n  grid-area: logo;\n\n  background: #ffb75e;\n  background: -webkit-linear-gradient(to top, orange, #ffb75e);\n  background: linear-gradient(to top, orange, #ffb75e);\n\n  border-radius: 8px 0px 0px 8px;\n  border: 2px solid linear-gradient(to top, orange, #ffb75e);\n  color: ",";\n  text-transform: uppercase;\n  font-size: 18px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  flex-direction: column;\n  transition: border 0.2s ease-in-out;\n\n  ",":hover & {\n    border-color: ",";\n  }\n"]);return Te=function(){return e},e}function Pe(){var e=Object(f.a)(["\n  cursor: pointer;\n  display: grid;\n  width: 86%;\n  height: 88px;\n  margin: 20px auto;\n  max-width: 650px;\n  will-change: transform;\n  grid-template-areas:\n    'logo name name name stars'\n    'logo desc desc desc size';\n  grid-template-rows: repeat(2, 50%);\n  grid-template-columns: repeat(5, 20%);\n  grid-column-gap: 0px;\n  justify-content: center;\n  border-radius: 8px;\n\n  -webkit-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);\n  -moz-box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);\n  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);\n"]);return Pe=function(){return e},e}var He=x.a.div({hoverable:!0,init:{x:0,transition:{type:"tween",ease:"easeOut",duration:150}},hover:{x:10,transition:{type:"tween",ease:"easeOut",duration:150}}}),Ne=Object(b.b)(He)(Pe()),Re=b.b.div(Te(),h.fontPrimary,Ne,h.repoLangBg),Me=b.b.div(Fe(),h.repoTitleBg,h.repoTitleBg,Ne,h.fontPrimary,h.repoLangBg,h.repoStarsBg,Ne),We=b.b.div(De(),h.repoStarsBg,h.fontPrimary,h.repoTitleBg,h.repoTitleBg,Ne,h.repoLangBg),Ue=b.b.div(Ce(),h.repoDescBg,h.repoTitleBg,h.repoDescBorderTop,Ne,h.repoLangBg),Ge=b.b.div(_e(),h.repoTitleBg,h.repoTitleBg,h.fontPrimary,h.repoSizeBg,h.repoTitleBg,Ne,h.repoLangBg,h.repoLangBg),Ie=b.b.img(Le());function Je(e){return(e/1024).toFixed(2)}function Qe(e){return e.split("").slice(0,10).join("")}var Xe=function(e){function n(e){var t;return Object(p.a)(this,n),(t=Object(d.a)(this,Object(m.a)(n).call(this,e))).getCommit=Object(s.a)(l.a.mark(function e(){var n,a,r,o,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.index,a="https://api.github.com/repos/".concat(t.props.login,"/").concat(t.props.repos[n].name,"/commits"),e.prev=2,e.next=5,fetch(a);case 5:if(200===(o=e.sent).status){e.next=9;break}return r="".concat(o.status," ").concat(o.statusText),e.abrupt("return");case 9:return e.next=11,o.json();case 11:i=e.sent,t._isMounted&&t.setState({isLoadedCommits:!0,lastCommitDate:i[0].commit.author.date,lastCommitDesc:i[0].commit.message}),console.log("".concat(i[0].commit.author.date," ").concat(i[0].commit.message)),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),t.setState({isLoadedCommits:!1}),console.error(r);case 20:case"end":return e.stop()}},e,null,[[2,16]])})),t.state={isLoadedCommits:!1,lastCommitDate:"",lastCommitDesc:""},t._isMounted=!1,t}return Object(g.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,n=this.props,t=n.repos,a=n.index,o=n.login,i=this.state,c=i.lastCommitDate,l=i.lastCommitDesc,s="/commits".concat(a),p=t[a]?"https://github.com/".concat(o,"/").concat(t[a].name):"/";return r.a.createElement(xe.c,null,r.a.createElement(xe.a,{path:"/",exact:!0,render:function(){return r.a.createElement(r.a.Fragment,null,e._isMounted&&r.a.createElement(he.b,{to:s,onClick:e.getCommit},r.a.createElement(Ne,null,r.a.createElement(Re,null,t[a]&&t[a].language),r.a.createElement(Me,null,t[a]&&t[a].name),r.a.createElement(We,null,r.a.createElement(Ie,{src:R.a,alt:"stars"}),r.a.createElement("span",{style:{marginLeft:"8px"}},t[a]&&t[a].stargazers_count)),r.a.createElement(Ue,null,t[a]&&t[a].description),r.a.createElement(Ge,null,t[a]&&r.a.createElement(r.a.Fragment,null,Je(t[a].size),r.a.createElement("span",{style:{fontSize:"14px"}}," "," mb"))))))}}),r.a.createElement(xe.a,{path:s,exact:!0,render:function(){return r.a.createElement(Oe,null,r.a.createElement(ke,null,r.a.createElement(Be,null,"Name:"),t[a]&&t[a].name),r.a.createElement(ke,null,r.a.createElement(Be,null,"Description:"),t[a]&&t[a].description),r.a.createElement(ke,null,r.a.createElement(Be,null,"Language:"),t[a]&&t[a].language),r.a.createElement(ke,null,r.a.createElement(Be,null,"Stars:"),t[a]&&t[a].stargazers_count),r.a.createElement(ke,null,r.a.createElement(Be,null,"Watchers:"),t[a]&&t[a].watchers_count),r.a.createElement(ke,null,r.a.createElement(Be,null,"Forks:"),t[a]&&t[a].forks_count),r.a.createElement(ke,null,r.a.createElement(Be,null,"Size:"),t[a]&&r.a.createElement(r.a.Fragment,null,Je(t[a].size)," "," mb")),r.a.createElement(ke,null,r.a.createElement(Be,null,"Created at:"),t[a]&&Qe(t[a].created_at)),r.a.createElement(ke,null,r.a.createElement(Be,null,"Pushed at:"),t[a]&&Qe(t[a].pushed_at)),r.a.createElement(ke,null,r.a.createElement(Be,null,"Last commit description:"),l),r.a.createElement(ke,null,r.a.createElement(Be,null,"Last commit date:"),Qe(c)),r.a.createElement(ze,null,r.a.createElement(he.b,{to:"/"},r.a.createElement(Se,{background:h.btBack,border:h.btBack},"Back")),r.a.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(Se,{background:h.btGithub,border:h.btGithub},"Github"))))}}))}}]),n}(a.Component);function qe(){var e=Object(f.a)(["\n  margin: 0;\n  padding: 0;\n  margin-left: ",";\n  font-weight: ",";\n  font-size: 26px;\n  text-transform: uppercase;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return qe=function(){return e},e}function Ae(){var e=Object(f.a)(["\n  display: inline-flex;\n  max-width: 280px;\n"]);return Ae=function(){return e},e}function Ke(){var e=Object(f.a)(["\n  font-size: 24px;\n  text-transform: uppercase;\n  font-weight: 300;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n"]);return Ke=function(){return e},e}function Ve(){var e=Object(f.a)(["\n  position: relative;\n  border-radius: 8px;\n  padding: 30px 0px;\n  margin-bottom: 30px;\n\n  background-image: linear-gradient(\n    to top,\n    #c4c5c7 0%,\n    #dcdddf 52%,\n    #ebebeb 100%\n  );\n\n  -webkit-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);\n  -moz-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);\n  box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.6);\n"]);return Ve=function(){return e},e}function Ye(){var e=Object(f.a)(["\n  grid-area: repo;\n  min-width: 500px;\n  max-width: 700px;\n"]);return Ye=function(){return e},e}var Ze=b.b.div(Ye()),$e=Object(x.a)(Ze)({open:{opacity:1,x:0,transition:{type:"tween",ease:"anticipate",duration:500}},closed:{opacity:0,x:"20%"}}),en=b.b.div(Ve()),nn=b.b.h2(Ke()),tn=x.a.div({open:{delay:150,x:0,opacity:1,transition:{type:"tween",duration:500,ease:"anticipate"}},closed:{x:"50%",opacity:0,delay:50}}),an=b.b.div(Ae()),rn=b.b.h3(qe(),function(e){return e.margin},function(e){return e.weight}),on=function(e){function n(){return Object(p.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(g.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){for(var e=this.props,n=e.login,t=e.reposNum,a=e.repos,o=e.isLoaded,i=[],c=0;c<t;++c)i.push(r.a.createElement(Xe,{repos:a,index:c,key:c,login:n}));return r.a.createElement(he.a,{basename:"/Github-User-Finder"},r.a.createElement($e,{pose:o?"open":"closed"},r.a.createElement(nn,null,"Repositories"),r.a.createElement(en,null,r.a.createElement(rn,{weight:"400",margin:"20px"},r.a.createElement(an,null,r.a.createElement(rn,{as:"span",weight:"600",margin:"20px"},n||"User"))," has",r.a.createElement(rn,{as:"span",weight:"600",margin:"7px"},t),t>0?r.a.createElement(r.a.Fragment,null,1===t?" repository":" repositories!"):" repositories"),r.a.createElement(tn,{pose:o?"open":"closed"},i))))}}]),n}(a.Component);function cn(){var e=Object(f.a)(["\n  text-align: center;\n  display: grid;\n  grid-template-areas:\n    'search search search search'\n    'info info repo repo';\n  grid-template-rows: repeat(2, auto);\n  grid-template-columns: repeat(2, auto) 40%;\n  grid-gap: 5px;\n  justify-content: center;\n"]);return cn=function(){return e},e}function ln(){var e=Object(f.a)(["\n *, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    background: ",";\n    font-size: 20px;\n  }\n\n  a {\n    text-decoration: none;\n    color: ","\n  }\n \n  ::placeholder {\n    color: ",";\n    font-size: 26px;\n    font-weight: 300;\n  }\n"]);return ln=function(){return e},e}var sn=Object(b.a)(ln(),h.bgPrimary,h.fontSecondary,h.fontPlaceholder),pn=b.b.div(cn()),un=function(e){function n(e){var t;return Object(p.a)(this,n),(t=Object(d.a)(this,Object(m.a)(n).call(this,e))).handleInputChange=function(e){t.setState({login:e.target.value})},t.getUser=function(){var e=Object(s.a)(l.a.mark(function e(n){var a,r,o,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a="https://api.github.com/users/".concat(t.state.login),e.prev=2,e.next=5,fetch(a);case 5:if(200===(o=e.sent).status){e.next=12;break}return r="".concat(o.status," ").concat(o.statusText),t.setState({avatar:"",fullname:"",location:"",email:"",company:"",joinDate:"",followers:0,reposNum:0,isLoadedRepos:!1}),404===o.status&&console.log("User is not found"),403===o.status&&console.log("Query limit exceeded"),e.abrupt("return");case 12:return e.next=14,o.json();case 14:i=e.sent,t.setState({avatar:i.avatar_url,fullname:i.name,location:i.location,email:i.email,company:i.company,joinDate:i.created_at,followers:i.followers,reposNum:i.public_repos,isLoadedRepos:!0}),t.getRepos(),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(2),t.setState({login:"",isLoadedRepos:!1}),console.error(r);case 23:case"end":return e.stop()}},e,null,[[2,19]])}));return function(n){return e.apply(this,arguments)}}(),t.state={login:"",avatar:"",fullname:"",location:"",email:"",company:"",joinDate:"",followers:0,reposNum:0,favLanguage:"",repos:[],starsNum:0,repoLanguage:"",repoSize:"",isLoadedRepos:!1},t}return Object(g.a)(n,e),Object(u.a)(n,[{key:"getRepos",value:function(){var e=Object(s.a)(l.a.mark(function e(){var n,t,a,r,o,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.github.com/users/".concat(this.state.login,"/repos"),e.prev=1,e.next=4,fetch(n);case 4:if(200===(a=e.sent).status){e.next=8;break}return t="".concat(a.status," ").concat(a.statusText),e.abrupt("return");case 8:return e.next=10,a.json();case 10:r=e.sent,o=[],i=0,Object.keys(r).forEach(function(){o.push({id:r[i].id,name:r[i].name,html_url:r[i].html_url,description:r[i].description,created_at:r[i].created_at,pushed_at:r[i].pushed_at,size:r[i].size,stargazers_count:r[i].stargazers_count,language:r[i].language,forks_count:r[i].forks_count,watchers_count:r[i].watchers_count}),++i}),this.setState({isLoadedRepos:!0,repos:o}),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),this.setState({isLoadedRepos:!1}),console.error(t);case 21:case"end":return e.stop()}},e,this,[[1,17]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.login,t=e.fullname,a=e.location,o=e.company,i=e.avatar,c=e.joinDate,l=e.email,s=e.followers,p=e.reposNum,u=e.repos,d=e.isLoadedRepos;return r.a.createElement(r.a.Fragment,null,r.a.createElement(sn,null),r.a.createElement(pn,null,r.a.createElement(D,{value:n,onChange:this.handleInputChange,onSubmit:this.getUser,isLoaded:d}),r.a.createElement(be,{login:n,avatar:i,fullname:t,location:a,email:l,company:o,joinDate:c,followers:s,repos:u,isLoaded:d}),r.a.createElement(on,{login:n,reposNum:p,repos:u,isLoaded:d})))}}]),n}(a.Component);i.a.render(r.a.createElement(un,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1cac343c.chunk.js.map