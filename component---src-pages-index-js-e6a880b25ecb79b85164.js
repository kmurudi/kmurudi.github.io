(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("xfY5"),n("rE2o"),n("ioFf");var r=n("wx14"),a=n("zLVn"),i=n("q1tI");n("Tze0"),n("8+KV"),n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){return Object.keys(t).reduce((function(n,u){var l,c=n,f=c[o(u)],d=c[u],p=Object(a.a)(c,[o(u),u].map(s)),v=t[u],h=function(e,t,n){var r=Object(i.useRef)(void 0!==e),a=Object(i.useState)(t),o=a[0],s=a[1],u=void 0!==e,l=r.current;return r.current=u,!u&&l&&o!==t&&s(t),[u?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(d,f,e[v]),m=h[0],E=h[1];return Object(r.a)({},p,((l={})[u]=m,l[v]=E,l))}),e)}n("hHhE"),n("f3/d"),n("dI71"),n("94VI")},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function u(e){return function(t){return r.createElement(l,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,u=e.title,l=s(e,["attr","title"]);return r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:o({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},Nr18:function(e,t,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),i=n("ne8i");e.exports=function(e){for(var t=r(this),n=i(t.length),o=arguments.length,s=a(o>1?arguments[1]:void 0,n),u=o>2?arguments[2]:void 0,l=void 0===u?n:a(u,n);l>s;)t[s++]=e;return t}},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),i=n("vhPU"),o=/"/g,s=function(e,t,n,r){var a=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},QA0p:function(e,t,n){"use strict";n("91GP"),n("f3/d"),t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,i=n.defaultProps,o=n.allowFallback,s=void 0!==o&&o,u=n.displayName,l=void 0===u?e.name||e.displayName:u,c=function(t,n){return e(t,n)};return Object.assign(a.default.forwardRef||!s?a.default.forwardRef(c):function(e){return c(e,null)},{displayName:l,propTypes:r,defaultProps:i})};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ne}));var r=n("q1tI"),a=n.n(r),i=(n("bN3s"),n("wx14")),o=n("zLVn"),s=n("TSYQ"),u=n.n(s),l=(n("f3/d"),n("QA0p"),a.a.createContext({}));l.Consumer,l.Provider;function c(e,t){var n=Object(r.useContext)(l);return e||n[t]||t}var f=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,s=e.as,l=void 0===s?"div":s,f=e.className,d=Object(o.a)(e,["bsPrefix","fluid","as","className"]),p=c(n,"container"),v="string"==typeof r?"-"+r:"-fluid";return a.a.createElement(l,Object(i.a)({ref:t},d,{className:u()(f,r?""+p+v:p)}))}));f.displayName="Container",f.defaultProps={fluid:!1};var d=f,p=(n("bHtr"),n("ma3e"));var v=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return null!=this.props.value?a.a.createElement("td",{style:{textAlign:"center",cursor:"pointer"},onClick:this.props.onClick},a.a.createElement("h4",null,a.a.createElement(p.c,{size:"4vw",color:this.props.value}))):a.a.createElement("td",{style:{textAlign:"center",cursor:"pointer"},onClick:this.props.onClick},a.a.createElement("h4",null,a.a.createElement(p.b,{size:"4vw"})))},r}(r.Component),h=(n("8+KV"),["xl","lg","md","sm","xs"]),m=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,s=e.noGutters,l=e.as,f=void 0===l?"div":l,d=Object(o.a)(e,["bsPrefix","className","noGutters","as"]),p=c(n,"row"),v=p+"-cols",m=[];return h.forEach((function(e){var t,n=d[e];delete d[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&m.push(""+v+r+"-"+t)})),a.a.createElement(f,Object(i.a)({ref:t},d,{className:u.a.apply(void 0,[r,p,s&&"no-gutters"].concat(m))}))}));m.displayName="Row",m.defaultProps={noGutters:!1};var E=m,x=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,s=e.striped,l=e.bordered,f=e.borderless,d=e.hover,p=e.size,v=e.variant,h=e.responsive,m=Object(o.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),E=c(n,"table"),x=u()(r,E,v&&E+"-"+v,p&&E+"-"+p,s&&E+"-striped",l&&E+"-bordered",f&&E+"-borderless",d&&E+"-hover"),b=a.a.createElement("table",Object(i.a)({},m,{className:x,ref:t}));if(h){var g=E+"-responsive";return"string"==typeof h&&(g=g+"-"+h),a.a.createElement("div",{className:g},b)}return b}));function b(e){for(var t=0,n=5;n>=0;n--)for(var r=0;r<7;r++)if(0!=e[n][r]){var a=e[n][r];if(n>2&&e[n-1][r]==a&&e[n-2][r]==a&&e[n-3][r]==a)return a;if(r-3>=0&&e[n][r-1]==a&&e[n][r-2]==a&&e[n][r-3]==a)return a;if(r+3<=6&&e[n][r+1]==a&&e[n][r+2]==a&&e[n][r+3]==a)return a;if(n>2&&n-3>=0&&r-3>=0&&e[n-1][r-1]==a&&e[n-2][r-2]==a&&e[n-3][r-3]==a)return a;if(n>2&&n-3<=6&&r+3<=6&&e[n-1][r+1]==a&&e[n-2][r+2]==a&&e[n-3][r+3]==a)return a}else t++;return t>0?0:4}var g=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={squares:Array(6).fill(0).map((function(e){return new Array(7).fill(0)})),xIsNext:!0,color:{1:"#f56363",2:"#4f1de8a8",0:null},winner:{1:"Player-1",2:"PLayer-2",4:"Nobody! Play Again! :)"}},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.handleClick=function(e,t){var n=this.state.squares.slice();if(!(0!=n[e][t]||b(this.state.squares)>0)){for(;e+1<6&&0==n[e+1][t];)e++;n[e][t]=this.state.xIsNext?1:2,this.setState({squares:n,xIsNext:!this.state.xIsNext})}},i.renderSquare=function(e,t){var n=this;return a.a.createElement(v,{onClick:function(){return n.handleClick(e,t)},value:this.state.color[this.state.squares[e][t]]})},i.render=function(){var e,t=b(this.state.squares);return e=t>0?1===t?a.a.createElement("h3",null,"WINNER: ",a.a.createElement(p.c,{size:"6vw",color:"#f56363"})," "):2===t?a.a.createElement("h3",null,"WINNER: ",a.a.createElement(p.c,{size:"6vw",color:"#4f1de8a8"})," "):a.a.createElement("h3",null," WINNER: Nobody! Play Again! :) "):this.state.xIsNext?a.a.createElement("h3",null,"Next player: ",a.a.createElement(p.c,{size:"6vw",color:"#f56363"})):a.a.createElement("h3",null,"Next player: ",a.a.createElement(p.c,{size:"6vw",color:"#4f1de8a8"})),a.a.createElement(d,{sm:!0},a.a.createElement(E,null,a.a.createElement("div",{className:"status"},a.a.createElement("h3",null,e)),a.a.createElement(x,{bordered:!0,variant:"info"},a.a.createElement("tbody",null,a.a.createElement("tr",null,this.renderSquare(0,0),this.renderSquare(0,1),this.renderSquare(0,2),this.renderSquare(0,3),this.renderSquare(0,4),this.renderSquare(0,5),this.renderSquare(0,6)),a.a.createElement("tr",null,this.renderSquare(1,0),this.renderSquare(1,1),this.renderSquare(1,2),this.renderSquare(1,3),this.renderSquare(1,4),this.renderSquare(1,5),this.renderSquare(1,6)),a.a.createElement("tr",null,this.renderSquare(2,0),this.renderSquare(2,1),this.renderSquare(2,2),this.renderSquare(2,3),this.renderSquare(2,4),this.renderSquare(2,5),this.renderSquare(2,6)),a.a.createElement("tr",null,this.renderSquare(3,0),this.renderSquare(3,1),this.renderSquare(3,2),this.renderSquare(3,3),this.renderSquare(3,4),this.renderSquare(3,5),this.renderSquare(3,6)),a.a.createElement("tr",null,this.renderSquare(4,0),this.renderSquare(4,1),this.renderSquare(4,2),this.renderSquare(4,3),this.renderSquare(4,4),this.renderSquare(4,5),this.renderSquare(4,6)),a.a.createElement("tr",null,this.renderSquare(5,0),this.renderSquare(5,1),this.renderSquare(5,2),this.renderSquare(5,3),this.renderSquare(5,4),this.renderSquare(5,5),this.renderSquare(5,6))))))},r}(r.Component),y=(n("0mN4"),n("JCAc")),N=(n("pIFo"),/-(.)/g);var S=function(e){return e[0].toUpperCase()+(t=e,t.replace(N,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var O=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,s=e.as,l=Object(o.a)(e,["bsPrefix","className","as"]);n=c(n,"navbar-brand");var f=s||(l.href?"a":"span");return a.a.createElement(f,Object(i.a)({},l,{ref:t,className:u()(r,n)}))}));O.displayName="NavbarBrand";var w=O,C=n("dI71");n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");function q(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var P=/([A-Z])/g;var j=/^ms-/;function k(e){return function(e){return e.replace(P,"-$1").toLowerCase()}(e).replace(j,"-ms-")}var I=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var T=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(k(t))||function(e,t){return q(e).getComputedStyle(e,t)}(e).getPropertyValue(k(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!I.test(e))}(a)?n+=k(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(k(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},_=(n("V+eJ"),n("ctsM")),R=!1,A=!1;try{var L={get passive(){return R=!0},get once(){return A=R=!0}};_.a&&(window.addEventListener("test",L,L),window.removeEventListener("test",L,!0))}catch(Se){}var D=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!A){var a=r.once,i=r.capture,o=n;!A&&a&&(o=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=o),e.addEventListener(t,o,R?r:i)}e.addEventListener(t,n,r)};var V=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var F=function(e,t,n,r){return D(e,t,n,r),function(){V(e,t,n,r)}};_.a&&window;function M(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=F(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}var z=function(e,t,n){var r,a;null==n&&(r=T(e,"transitionDuration")||"",a=-1===r.indexOf("ms")?1e3:1,n=parseFloat(r)*a||0);var i=M(e,n),o=F(e,"transitionend",t);return function(){i(),o()}},G=n("i8i4"),U=n.n(G),X=!1,B=a.a.createContext(null),W=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(C.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[U.a.findDOMNode(this),r],i=a[0],o=a[1],s=this.getTimeouts(),u=r?s.appear:s.enter;!e&&!n||X?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(u,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:U.a.findDOMNode(this);t&&!X?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:U.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(o.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(B.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function J(){}W.contextType=B,W.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:J,onEntering:J,onEntered:J,onExit:J,onExiting:J,onExited:J},W.UNMOUNTED="unmounted",W.EXITED="exited",W.ENTERING="entering",W.ENTERED="entered",W.EXITING="exiting";var K=W;n("0l/t"),n("DNiP");var Y,H=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function Z(e){e.offsetHeight}var Q={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var $=((Y={}).exited="collapse",Y.exiting="collapsing",Y.entering="collapsing",Y.entered="collapse show",Y),ee={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=Q[e];return n+parseInt(T(t,r[0]),10)+parseInt(T(t,r[1]),10)}},te=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",Z(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(C.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"==typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,r=t.onEntering,s=t.onEntered,l=t.onExit,c=t.onExiting,f=t.className,d=t.children,p=Object(o.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete p.dimension,delete p.getDimensionValue;var v=H(this.handleEnter,n),h=H(this.handleEntering,r),m=H(this.handleEntered,s),E=H(this.handleExit,l),x=H(this.handleExiting,c);return a.a.createElement(K,Object(i.a)({addEndListener:z},p,{"aria-expanded":p.role?p.in:null,onEnter:v,onEntering:h,onEntered:m,onExit:E,onExiting:x}),(function(t,n){return a.a.cloneElement(d,Object(i.a)({},n,{className:u()(f,d.props.className,$[t],"width"===e.getDimension()&&"width")}))}))},t}(a.a.Component);te.defaultProps=ee;var ne=te,re=a.a.createContext(null),ae=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,s=Object(o.a)(e,["children","bsPrefix"]);return r=c(r,"navbar-collapse"),a.a.createElement(re.Consumer,null,(function(e){return a.a.createElement(ne,Object(i.a)({in:!(!e||!e.expanded)},s),a.a.createElement("div",{ref:t,className:r},n))}))}));ae.displayName="NavbarCollapse";var ie=ae,oe=n("ZCiN"),se=a.a.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,l=e.children,f=e.label,d=e.as,p=void 0===d?"button":d,v=e.onClick,h=Object(o.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=c(n,"navbar-toggler");var m=Object(r.useContext)(re)||{},E=m.onToggle,x=m.expanded,b=Object(oe.a)((function(e){v&&v(e),E&&E()}));return"button"===p&&(h.type="button"),a.a.createElement(p,Object(i.a)({},h,{ref:t,onClick:b,"aria-label":f,className:u()(s,n,!x&&"collapsed")}),l||a.a.createElement("span",{className:n+"-icon"}))}));se.displayName="NavbarToggle",se.defaultProps={label:"Toggle navigation"};var ue,le,ce,fe,de,pe,ve,he,me,Ee=se,xe=a.a.createContext(),be=a.a.forwardRef((function(e,t){var n=Object(y.a)(e,{expanded:"onToggle"}),s=n.bsPrefix,l=n.expand,f=n.variant,d=n.bg,p=n.fixed,v=n.sticky,h=n.className,m=n.children,E=n.as,x=void 0===E?"nav":E,b=n.expanded,g=n.onToggle,N=n.onSelect,S=n.collapseOnSelect,O=Object(o.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);s=c(s,"navbar");var w=Object(r.useCallback)((function(){N&&N.apply(void 0,arguments),S&&b&&g(!1)}),[N,S,b,g]);void 0===O.role&&"nav"!==x&&(O.role="navigation");var C=s+"-expand";"string"==typeof l&&(C=C+"-"+l);var q=Object(r.useMemo)((function(){return{onToggle:function(){return g(!b)},bsPrefix:s,expanded:b}}),[s,b,g]);return a.a.createElement(re.Provider,{value:q},a.a.createElement(xe.Provider,{value:w},a.a.createElement(x,Object(i.a)({ref:t},O,{className:u()(h,s,l&&C,f&&s+"-"+f,d&&"bg-"+d,v&&"sticky-"+v,p&&"fixed-"+p)}),m)))}));be.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},be.displayName="Navbar",be.Brand=w,be.Toggle=Ee,be.Collapse=ie,be.Text=(ue="navbar-text",fe=(ce=void 0===(le={Component:"span"})?{}:le).displayName,de=void 0===fe?S(ue):fe,pe=ce.Component,ve=void 0===pe?"div":pe,he=ce.defaultProps,(me=a.a.forwardRef((function(e,t){var n=e.className,r=e.bsPrefix,s=e.as,l=void 0===s?ve:s,f=Object(o.a)(e,["className","bsPrefix","as"]),d=c(r,ue);return a.a.createElement(l,Object(i.a)({ref:t,className:u()(n,d)},f))}))).defaultProps=he,me.displayName=de,me);var ge=be;var ye=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(ge,{bg:"info",variant:"dark",expand:"lg"},a.a.createElement(ge.Brand,{href:"/"},a.a.createElement(p.a,null)," StarLink"))},r}(r.Component);function Ne(){return a.a.createElement(d,{fluid:!0},a.a.createElement(ye,null),a.a.createElement("br",null),a.a.createElement(g,null))}},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Tze0:function(e,t,n){"use strict";n("qncB")("trim",(function(e){return function(){return e(this,3)}}))},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},bHtr:function(e,t,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},bN3s:function(e,t,n){},ctsM:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},qncB:function(e,t,n){var r=n("XKFU"),a=n("vhPU"),i=n("eeVq"),o=n("/e88"),s="["+o+"]",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),c=function(e,t,n){var a={},s=i((function(){return!!o[e]()||"​"!="​"[e]()})),u=a[e]=s?t(f):o[e];n&&(a[n]=u),r(r.P+r.F*s,"String",a)},f=c.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=c},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),a=n("aagx"),i=n("LZWt"),o=n("Xbzi"),s=n("apmT"),u=n("eeVq"),l=n("kJMx").f,c=n("EemH").f,f=n("hswa").f,d=n("qncB").trim,p=r.Number,v=p,h=p.prototype,m="Number"==i(n("Kuth")(h)),E="trim"in String.prototype,x=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=E?t.trim():d(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,u=t.slice(2),l=0,c=u.length;l<c;l++)if((o=u.charCodeAt(l))<48||o>a)return NaN;return parseInt(u,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(m?u((function(){h.valueOf.call(n)})):"Number"!=i(n))?o(new v(x(t)),n,p):x(t)};for(var b,g=n("nh4g")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;g.length>y;y++)a(v,b=g[y])&&!a(p,b)&&f(p,b,c(v,b));p.prototype=h,h.constructor=p,n("KroJ")(r,"Number",p)}},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-index-js-e6a880b25ecb79b85164.js.map