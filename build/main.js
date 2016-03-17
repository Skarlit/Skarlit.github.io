webpackJsonp([1],{0:function(e,t,n){e.exports=n(161)},161:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var a=n(3),r=i(a),o=(n(162),n(204),n(220)),s=(i(o),n(222)),l=(i(s),n(223)),u=(i(l),n(224)),c=(i(u),n(225)),d=(i(c),n(221)),f=(i(d),n(226)),h=n(228),p=r["default"].createClass({displayName:"App",componentDidMount:function(){},render:function(){return r["default"].createElement("div",{className:"app"},r["default"].createElement("canvas",{id:"canvas-overlay",ref:"background"}),r["default"].createElement("div",{className:"canvas-label"},"Code Rain v0.0.1"),r["default"].createElement("div",{className:"body"},r["default"].createElement(h.Term,null," ")))}});r["default"].createClass({displayName:"NotFound",render:function(){return r["default"].createElement("div",null,r["default"].createElement("div",null," "))}});window.onload=function(){r["default"].render(r["default"].createElement(p,null),document.body,function(){f.Rain().start()})}},204:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var a=n(3),r=i(a),o=n(205),s=i(o),l=n(219),u=i(l),c=s["default"](r["default"]),d=c.Spring,f=c.TransitionSpring,h=c.Motion,p=c.StaggeredMotion,m=c.TransitionMotion;t.Spring=d,t.TransitionSpring=f,t.Motion=h,t.StaggeredMotion=p,t.TransitionMotion=m;var v=n(215),g=i(v);t.spring=g["default"];var w=n(216),y=i(w);t.presets=y["default"];var S={reorderKeys:u["default"]};t.utils=S},205:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i],i));return n}function r(e,t){for(var n in t)if(t.hasOwnProperty(n)&&!e(t[n],n))return!1;return!0}function o(e){var t=e.PropTypes,n=e.createClass({displayName:"Motion",propTypes:{defaultValue:function(e,t){return e[t]?new Error("Spring's `defaultValue` has been changed to `defaultStyle`. Its format received a few (easy to update!) changes as well."):void 0},endValue:function(e,t){return e[t]?new Error("Spring's `endValue` has been changed to `style`. Its format received a few (easy to update!) changes as well."):void 0},defaultStyle:t.object,style:t.object.isRequired,children:t.func.isRequired},getInitialState:function(){var e=this.props,t=e.defaultStyle,n=e.style,i=t||n;return{currentStyle:i,currentVelocity:a(g["default"],i)}},componentDidMount:function(){this.startAnimating()},componentWillReceiveProps:function(){this.startAnimating()},animationStep:function(e,t){var n=t.currentStyle,i=t.currentVelocity,a=this.props.style,r=w.updateCurrentStyle(e,n,i,a),o=w.updateCurrentVelocity(e,n,i,a);return u["default"](i,r)&&u["default"](o,r)&&this.stopAnimation(),{currentStyle:r,currentVelocity:o}},stopAnimation:null,hasUnmounted:!1,componentWillUnmount:function(){this.stopAnimation(),this.hasUnmounted=!0},startAnimating:function(){this.stopAnimation=M(this.state,this.animationStep,this.animationRender)},animationRender:function(e,t,n){this.hasUnmounted||this.setState({currentStyle:w.interpolateValue(e,t.currentStyle,n.currentStyle),currentVelocity:t.currentVelocity})},render:function(){var t=E["default"](this.state.currentStyle),n=this.props.children(t);return n&&e.Children.only(n)}}),i=e.createClass({displayName:"StaggeredMotion",propTypes:{defaultStyle:function(e,t){return e[t]?new Error('You forgot the "s" for `StaggeredMotion`\'s `defaultStyles`.'):void 0},style:function(e,t){return e[t]?new Error('You forgot the "s" for `StaggeredMotion`\'s `styles`.'):void 0},defaultStyles:t.arrayOf(t.object),styles:t.func.isRequired,children:t.func.isRequired},getInitialState:function(){var e=this.props,t=e.styles,n=e.defaultStyles,i=n?n:t();return{currentStyles:i,currentVelocities:i.map(function(e){return a(g["default"],e)})}},componentDidMount:function(){this.startAnimating()},componentWillReceiveProps:function(){this.startAnimating()},animationStep:function(e,t){var n=t.currentStyles,i=t.currentVelocities,a=this.props.styles(n.map(E["default"])),r=n.map(function(t,n){return w.updateCurrentStyle(e,t,i[n],a[n])}),o=n.map(function(t,n){return w.updateCurrentVelocity(e,t,i[n],a[n])});return i.every(function(e,t){return u["default"](e,n[t])})&&o.every(function(e,t){return u["default"](e,r[t])})&&this.stopAnimation(),{currentStyles:r,currentVelocities:o}},stopAnimation:null,hasUnmounted:!1,componentWillUnmount:function(){this.stopAnimation(),this.hasUnmounted=!0},startAnimating:function(){this.stopAnimation=M(this.state,this.animationStep,this.animationRender)},animationRender:function(e,t,n){if(!this.hasUnmounted){var i=t.currentStyles.map(function(t,i){return w.interpolateValue(e,t,n.currentStyles[i])});this.setState({currentStyles:i,currentVelocities:t.currentVelocities})}},render:function(){var t=this.state.currentStyles.map(E["default"]),n=this.props.children(t);return n&&e.Children.only(n)}}),o=e.createClass({displayName:"TransitionMotion",propTypes:{defaultValue:function(e,t){return e[t]?new Error("TransitionSpring's `defaultValue` has been changed to `defaultStyles`. Its format received a few (easy to update!) changes as well."):void 0},endValue:function(e,t){return e[t]?new Error("TransitionSpring's `endValue` has been changed to `styles`. Its format received a few (easy to update!) changes as well."):void 0},defaultStyle:function(e,t){return e[t]?new Error('You forgot the "s" for `TransitionMotion`\'s `defaultStyles`.'):void 0},style:function(e,t){return e[t]?new Error('You forgot the "s" for `TransitionMotion`\'s `styles`.'):void 0},defaultStyles:t.objectOf(t.any),styles:t.oneOfType([t.func,t.objectOf(t.any.isRequired)]).isRequired,willLeave:t.oneOfType([t.func]),willEnter:t.oneOfType([t.func]),children:t.func.isRequired},getDefaultProps:function(){return{willEnter:function(e,t){return t},willLeave:function(){return null}}},getInitialState:function(){var e=this.props,t=e.styles,n=e.defaultStyles,i=void 0;return i=null==n?"function"==typeof t?t():t:n,{currentStyles:i,currentVelocities:a(function(e){return a(g["default"],e)},i)}},componentDidMount:function(){this.startAnimating()},componentWillReceiveProps:function(){this.startAnimating()},animationStep:function(e,t){var n=t.currentStyles,i=t.currentVelocities,o=this.props,l=o.styles,c=o.willEnter,f=o.willLeave;"function"==typeof l&&(l=l(n));var p=l,m=!1;p=h["default"](n,l,function(e){var t=f(e,n[e],l,n,i);return null==t?null:u["default"](i[e],n[e])&&d["default"](n[e],t)?null:t}),Object.keys(p).filter(function(e){return!n.hasOwnProperty(e)}).forEach(function(e){var t,r;m=!0;var o=c(e,p[e],l,n,i);p[e]=o,n=s({},n,(t={},t[e]=o,t)),i=s({},i,(r={},r[e]=a(g["default"],o),r))});var v=a(function(t,a){return w.updateCurrentStyle(e,n[a],i[a],t)},p),y=a(function(t,a){return w.updateCurrentVelocity(e,n[a],i[a],t)},p);return!m&&r(function(e,t){return u["default"](e,n[t])},i)&&r(function(e,t){return u["default"](e,v[t])},y)&&this.stopAnimation(),{currentStyles:v,currentVelocities:y}},stopAnimation:null,hasUnmounted:!1,componentWillUnmount:function(){this.stopAnimation(),this.hasUnmounted=!0},startAnimating:function(){this.stopAnimation=M(this.state,this.animationStep,this.animationRender)},animationRender:function(e,t,n){if(!this.hasUnmounted){var i=a(function(t,i){return w.interpolateValue(e,t,n.currentStyles[i])},t.currentStyles);this.setState({currentStyles:i,currentVelocities:t.currentVelocities})}},render:function(){var t=a(E["default"],this.state.currentStyles),n=this.props.children(t);return n&&e.Children.only(n)}}),l=S["default"](e),c=l.Spring,f=l.TransitionSpring;return{Spring:c,TransitionSpring:f,Motion:n,StaggeredMotion:i,TransitionMotion:o}}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t["default"]=o;var l=n(206),u=i(l),c=n(207),d=i(c),f=n(208),h=i(f),p=n(209),m=i(p),v=n(212),g=i(v),w=n(213),y=n(217),S=i(y),b=n(218),E=i(b),M=m["default"]();e.exports=t["default"]},206:function(e,t){"use strict";function n(e,t){for(var n in e)if(e.hasOwnProperty(n)&&null!=t[n]&&t[n].config&&0!==e[n])return!1;return!0}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},207:function(e,t){"use strict";function n(e,t){for(var n in t)if(t.hasOwnProperty(n)){var i=e[n],a=t[n];if(null!=a&&a.config){if(i.config&&i.val!==a.val)return!1;if(!i.config&&i!==a.val)return!1}}return!0}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},208:function(e,t){"use strict";function n(e,t,n,i,a,r,o){for(var s=!0;s;){var l=e,u=t,c=n,d=i,f=a,h=r,p=o;m=v=g=w=y=y=void 0,s=!1;var m=d===l.length,v=f===u.length,g=l[d],w=u[f];if(m&&v)return null;if(m)p[w]=c[w],e=l,t=u,n=c,i=d,a=f+1,r=h,o=p,s=!0;else if(v){var y=h(g);null!=y&&(p[g]=y),e=l,t=u,n=c,i=d+1,a=f,r=h,o=p,s=!0}else if(g!==w)if(c.hasOwnProperty(g))e=l,t=u,n=c,i=d+1,a=f,r=h,o=p,s=!0;else{var y=h(g);null!=y&&(p[g]=y),e=l,t=u,n=c,i=d+1,a=f,r=h,o=p,s=!0}else p[g]=c[g],e=l,t=u,n=c,i=d+1,a=f+1,r=h,o=p,s=!0}}function i(e,t,i){var a={};return n(Object.keys(e),Object.keys(t),t,0,0,i,a),a}t.__esModule=!0,t["default"]=i,e.exports=t["default"]},209:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(){function e(){var t=p(),n=t-g;g=t,w+=n*s,w>a*c&&(w=0);for(var i=Math.ceil(w/a),r=0;r<m.length;r++){var o=m[r],l=o.active,u=o.animationStep,d=o.prevState,h=m[r].nextState;if(l)if(0>=w)m[r].nextState=u(a/1e3,d);else for(var y=0;i>y;y++){m[r].nextState=u(a/1e3,h);var S=[h,m[r].nextState];m[r].prevState=S[0],h=S[1]}}w-=i*a;for(var b=1+w/a,r=0;r<m.length;r++){var E=m[r],M=E.animationRender,_=E.nextState,x=E.prevState;M(b,_,x)}m=m.filter(function(e){var t=e.active;return t}),0===m.length?v=!1:f(e)}function t(){v||(v=!0,g=p(),w=0,f(e))}var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],i=n.timeStep,a=void 0===i?1/60*1e3:i,r=n.timeScale,s=void 0===r?1:r,u=n.maxSteps,c=void 0===u?10:u,d=n.raf,f=void 0===d?l["default"]:d,h=n.now,p=void 0===h?o["default"]:h,m=[],v=!1,g=0,w=0;return function(e,n,i){for(var a=0;a<m.length;a++){var r=m[a];if(r.animationStep===n)return r.active=!0,r.prevState=e,t(),r.stop}var o={animationStep:n,animationRender:i,prevState:e,nextState:e,active:!0};return o.stop=function(){return o.active=!1},m.push(o),t(),o.stop}}t.__esModule=!0,t["default"]=a;var r=n(210),o=i(r),s=n(211),l=i(s);e.exports=t["default"]},210:function(e,t,n){(function(t){(function(){var n,i,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},i=t.hrtime,n=function(){var e;return e=i(),1e9*e[0]+e[1]},a=n()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(t,n(5))},211:function(e,t,n){for(var i=n(210),a="undefined"==typeof window?{}:window,r=["moz","webkit"],o="AnimationFrame",s=a["request"+o],l=a["cancel"+o]||a["cancelRequest"+o],u=0;u<r.length&&!s;u++)s=a[r[u]+"Request"+o],l=a[r[u]+"Cancel"+o]||a[r[u]+"CancelRequest"+o];if(!s||!l){var c=0,d=0,f=[],h=1e3/60;s=function(e){if(0===f.length){var t=i(),n=Math.max(0,h-(t-c));c=n+t,setTimeout(function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return f.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return s.call(a,e)},e.exports.cancel=function(){l.apply(a,arguments)}},212:function(e,t){"use strict";function n(){return 0}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},213:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){if(!n)return t;var i={};for(var a in t)if(t.hasOwnProperty(a))if(null!=t[a]&&t[a].config){var r=n[a].config?n[a].val:n[a];i[a]=c["default"](t[a].val*e+r*(1-e),t[a].config)}else i[a]=t[a];return i}function r(e,t,n,i){var a={};for(var r in i)if(i.hasOwnProperty(r))if(null!=i[r]&&i[r].config){var o=i[r].config,s=o[0],u=o[1],d=l["default"](e,null==t[r].val?t[r]:t[r].val,n[r],i[r].val,s,u)[0];a[r]=c["default"](d,i[r].config)}else a[r]=i[r];return a}function o(e,t,n,i){var a={};for(var r in i)if(i.hasOwnProperty(r))if(null!=i[r]&&i[r].config){var o=i[r].config,s=o[0],u=o[1],c=l["default"](e,null==t[r].val?t[r]:t[r].val,n[r],i[r].val,s,u)[1];a[r]=c}else a[r]=0;return a}t.__esModule=!0,t.interpolateValue=a,t.updateCurrentStyle=r,t.updateCurrentVelocity=o;var s=n(214),l=i(s),u=n(215),c=i(u)},214:function(e,t){"use strict";function n(e,t,n,a,r,o){var s=-r*(t-a),l=-o*n,u=s+l,c=n+u*e,d=t+c*e;return Math.abs(c-n)<i&&Math.abs(d-t)<i?[a,0]:[d,c]}t.__esModule=!0,t["default"]=n;var i=1e-4;e.exports=t["default"]},215:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=arguments.length<=1||void 0===arguments[1]?o["default"].noWobble:arguments[1];return{val:e,config:t}}t.__esModule=!0,t["default"]=a;var r=n(216),o=i(r);e.exports=t["default"]},216:function(e,t){"use strict";t.__esModule=!0,t["default"]={noWobble:[170,26],gentle:[120,14],wobbly:[180,12],stiff:[210,20]},e.exports=t["default"]},217:function(e,t,n){(function(n){"use strict";function i(e){var t=e.createClass({displayName:"Spring",componentWillMount:function(){if("development"===n.env.NODE_ENV){var e=this._reactInternalInstance._currentElement._owner&&this._reactInternalInstance._currentElement._owner.getName();a[e]||(a[e]=!0,console.error("Spring (used in %srender) has now been renamed to Motion. Please see the release note for the upgrade path. Thank you!",e?e+"'s ":"React."))}},render:function(){return null}}),i=e.createClass({displayName:"TransitionSpring",componentWillMount:function(){if("development"===n.env.NODE_ENV){var e=this._reactInternalInstance._currentElement._owner&&this._reactInternalInstance._currentElement._owner.getName();r[e]||(r[e]=!0,console.error("TransitionSpring (used in %srender) has now been renamed to TransitionMotion. Please see the release note for the upgrade path. Thank you!",e?e+"'s ":"React."))}},render:function(){return null}});return{Spring:t,TransitionSpring:i}}t.__esModule=!0,t["default"]=i;var a={},r={};e.exports=t["default"]}).call(t,n(5))},218:function(e,t){"use strict";function n(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=null==e[n]||null==e[n].val?e[n]:e[n].val);return t}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},219:function(e,t){"use strict";function n(e,t){for(var n=t(Object.keys(e)),i={},a=0;a<n.length;a++){var r=n[a];i[r]=e[r]}return i}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},220:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),r=i(a),o=n(162),s=n(221),l=(i(s),n(159)),u=i(l),c=r["default"].createClass({displayName:"NavBar",getInitialState:function(){return{selected:"HOME"}},changeTab:function(e){if(e!=this.state.selected){var t=this,n=u["default"](this.refs.currentTab.getDOMNode());n.stop().animate({left:-200},250,function(){t.setState({selected:e}),n.stop().animate({left:0},250)})}},render:function(){return r["default"].createElement("div",{className:"app-bar"},r["default"].createElement("ul",{className:"heading app-bar-menu"},r["default"].createElement("li",{className:"current-tab",ref:"currentTab"},this.state.selected)),r["default"].createElement("ul",{className:"app-bar-menu right"},r["default"].createElement("li",{onClick:this.changeTab.bind(this,"HOME")},r["default"].createElement(o.Link,{to:"/"},"HOME")),r["default"].createElement("li",{onClick:this.changeTab.bind(this,"EXPERIMENT")},r["default"].createElement(o.Link,{to:"/exp/index"},"EXPERIMENTS")),r["default"].createElement("li",{onClick:this.changeTab.bind(this,"POSTS")},r["default"].createElement("a",{className:"disable"},"POSTS")),r["default"].createElement("li",{onClick:this.changeTab.bind(this,"BIO")},r["default"].createElement(o.Link,{to:"/bio",className:"disable"},"BIO")),r["default"].createElement("li",{onClick:this.changeTab.bind(this,"CONTACT")},r["default"].createElement(o.Link,{to:"/contact",className:"disable"},"CONTACT"))))}});t["default"]=c,e.exports=t["default"]},221:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(){n(this,e),this.oldTime=Date.now()}return i(e,[{key:"reset",value:function(){this.oldTime=Date.now()}},{key:"getDelta",value:function(){var e=this.oldTime;return this.oldTime=Date.now(),this.oldTime-e}}]),e}(),r=function(){function e(){n(this,e),this.queue=[],this.deltaT,this.clock=new a,this.clock.reset(),this.run(),window.onerror=this.stop.bind(this)}return i(e,[{key:"animate",value:function(e){e.countDown=e.duration,e.callback=e.callback||function(){},this.queue.push(e)}},{key:"run",value:function(){if(this.loopId=window.requestAnimationFrame(this.run.bind(this)),this.deltaT=this.clock.getDelta(),this.queue[0]){if(this.queue[0].step.call(null,this.queue[0].countDown,this.deltaT),0==this.queue[0].countDown)return void this.queue.shift().callback();if(this.queue[0].countDown-this.deltaT<0)return void(this.queue[0].countDown=0);this.queue[0].countDown-=this.deltaT}}},{key:"flush",value:function(){this.queue=[]}},{key:"stop",value:function(){window.cancelAnimationFrame(this.loopId)}}]),e}(),o=window.Animator=function(){return o?void 0:new r}();t["default"]=o,e.exports=t["default"]},222:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),r=i(a),o=(n(162),n(221)),s=i(o),l=n(159),u=i(l),c=r["default"].createClass({displayName:"Exp",getInitialState:function(){return{toggled:!1,frameUrl:""}},componentDidMount:function(){},toggle:function(e){this.state.toggled?this.setState({frameUrl:e}):this.animateList(e)},animateList:function(e){var t=u["default"](this.refs.panel.getDOMNode()),n=this,i=t.width(),a=250;s["default"].animate({duration:300,step:function(e,n){t.css("left",25*(1-e/300)+50*e/300+"%")}}),s["default"].animate({duration:300,step:function(e,n){t.css("width",a*(1-e/300)+i*e/300)}});var r=u["default"](this.refs.frame.getDOMNode()),o=u["default"](".body").width(),l=30;s["default"].animate({duration:10,step:function(){},callback:function(){r.width(10),r.height(10),r.show(),r.css("left",a+l)}}),s["default"].animate({duration:400,step:function(e,t){r.width(10*e/400+(1-e/400)*(o-a-l)),r.height(10*e/400+(1-e/400)*(window.innerHeight-200))},callback:function(){n.setState({frameUrl:e,toggled:!0})}})},componentWillUnmount:function(){s["default"].flush()},render:function(){return r["default"].createElement("div",{style:{position:"relative"}},r["default"].createElement("div",{ref:"panel",className:"panel exp"},r["default"].createElement("div",{className:"listview"},r["default"].createElement("div",{onClick:this.toggle.bind(null,"/javascripts/algorithm/magic_wand/index.html"),className:"list"},r["default"].createElement("span",{className:"list-icon icon-font-icon"}),r["default"].createElement("span",{className:"list-title"},"Magic Wand")),r["default"].createElement("div",{onClick:this.toggle.bind(null,"/javascripts/algorithm/SplitString/index.html"),className:"list"},r["default"].createElement("span",{className:"list-icon icon-font-icon"}),r["default"].createElement("span",{className:"list-title"},"String Split")))),r["default"].createElement("iframe",{ref:"frame",style:d,seamless:!0,src:this.state.frameUrl}))}}),d={top:0,position:"absolute",border:"1px solid #777",display:"none"};t["default"]=c,e.exports=t["default"]},223:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),r=i(a),o=r["default"].createClass({displayName:"Bio",render:function(){return r["default"].createElement("div",null," ")}});t["default"]=o,e.exports=t["default"]},224:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),r=i(a),o=r["default"].createClass({displayName:"Contact",render:function(){return r["default"].createElement("div",null," ")}});t["default"]=o,e.exports=t["default"]},225:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),r=i(a),o=(n(162),n(221)),s=i(o),l=n(159),u=i(l),c="My name is Ran.\nI am a web application engineer.\nI love learning and building cool things.\n",d=r["default"].createClass({displayName:"Index",componentDidMount:function(){var e=u["default"](this.refs.title.getDOMNode());e.fadeIn(300);for(var t=u["default"](".intro-letter"),n=0;n<t.length;n++)!function(e){s["default"].animate({duration:50,step:function(n,i){n>0?t[e].textContent=c[Math.floor(Math.random()*c.length)]:t[e].textContent=c[e]}})}(n)},componentWillUnmount:function(){s["default"].flush()},render:function(){for(var e=c.split(""),t=[],n=0;n<e.length;n++)t.push(r["default"].createElement("span",{className:"intro-letter"}));return r["default"].createElement("div",{style:f},r["default"].createElement("div",{ref:"title",style:h},"HELLO."),r["default"].createElement("div",{style:p},t))}}),f={position:" absolute",width:" 640px",height:" 480px",top:" 50%",marginTop:" -240px",left:" 50%",marginLeft:" -320px"},h={fontSize:"72px",color:"#aaa"},p={fontSize:"30px",lineHeight:"70px",marginTop:"40px",color:"#999"};t["default"]=d,e.exports=t["default"]},226:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(){var e,t=new s["default"].OrthographicCamera(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,-500,1e4);t.position.z=100;var n=new s["default"].Scene,i=new s["default"].WebGLRenderer({canvas:document.getElementById("canvas-overlay")});i.setSize(window.innerWidth,window.innerHeight);var a=new r(window.innerWidth,window.innerHeight);n.add(a.ps),t.position.z=500;var o=new s["default"].Clock;o.start();var l=function u(){e=requestAnimationFrame(u);var r=o.getDelta();a.update(r),i.render(n,t)};return{start:function(){l()},end:function(){window.cancelAnimationFrame(e)}}}function r(e,t){this.w=e,this.h=t,this.psGeo=new s["default"].BufferGeometry,this.gridSize=32,this.n=Math.ceil(this.h/this.gridSize),this.m=Math.ceil(this.w/this.gridSize),this.alphas=new Float32Array(this.n*this.m),this.vertices=new Float32Array(this.n*this.m*3),this.scannerNum=200,this.depth=-5;for(var n=0;n<this.n;n++)for(var i=0;i<this.m;i++)this.vertices[n*this.m*3+3*i]=i*this.gridSize-this.w/2,this.vertices[n*this.m*3+3*i+1]=-n*this.gridSize+this.h/2,this.vertices[n*this.m*3+3*i+2]=this.depth,this.alphas[n*this.m+i]=0;this.scanners=[];for(var n=0;n<this.scannerNum;n++)this.scanners.push({col:Math.round(this.m*Math.random()),row:Math.random()*this.n,v:10});this.psGeo.addAttribute("position",new s["default"].BufferAttribute(this.vertices,3)),this.psGeo.addAttribute("alphas",new s["default"].BufferAttribute(this.alphas,1));var a={color:{type:"c",value:new s["default"].Color(65535)},texture:{type:"t",value:s["default"].ImageUtils.loadTexture("../img/alphabet.png")}};this.psMat=new s["default"].ShaderMaterial({uniforms:a,vertexShader:l,fragmentShader:u,transparent:!0}),this.ps=new s["default"].Points(this.psGeo,this.psMat),this.ps.position.z=-10,this.skipFrame=3,this.count=0,this.speed=100}Object.defineProperty(t,"__esModule",{value:!0}),t.Rain=a;var o=n(227),s=i(o),l="\n    attribute float alphas;\n\n    varying float vAlpha;\n\n    void main() {\n        vAlpha = alphas;\n\n        gl_PointSize = 32.0;\n\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n",u="\n    uniform vec3 color;\n    uniform sampler2D texture;\n\n    varying float vAlpha;\n\n    float rand(vec2 co){\n        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    }\n\n    void main() {\n\n        vec4 color = texture2D(texture, gl_PointCoord * vec2(0.5, 1.0));\n        gl_FragColor = vec4(color.xyz, color.a * vAlpha);\n    }\n";r.prototype={update:function(e){for(var t=this.psGeo.attributes.alphas.array,n=0;n<this.scanners.length;n++){var i=Math.round(this.scanners[n].row)*this.m+this.scanners[n].col;t[i]=Math.min(1,t[i]+.2),this.scanners[n].row+=e*this.scanners[n].v,this.scanners[n].row>this.n-1&&(this.scanners[n]={col:parseInt(this.m*Math.random()),row:Math.random()*this.n,v:10})}for(var a=0;a<t.length;a++)t[a]*=.95;this.psGeo.attributes.alphas.needsUpdate=!0}}},228:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(3),s=i(o),l=n(159),u=i(l),c=s["default"].createClass({displayName:"Term",getInitialState:function(){return{initialized:!1}},componentDidMount:function(){var e=u["default"](this.refs.term.getDOMNode()),t=[window.innerWidth/2,window.innerHeight/2],n=window.innerHeight*(window.innerHeight>window.innerWidth,.6),i=window.innerWidth*(window.innerHeight>window.innerWidth?.8:.6);u["default"]({t:0}).animate({t:1},{duration:300,easing:"linear",step:function(a){e.width(a*i),e.height(a*n),e.css("left",t[0]*(1-a)+a*(window.innerWidth-i)/2).css("top",t[1]*(1-a)+a*(window.innerHeight-n)/2)},complete:function(){this.setState({initialized:!0}),window.onresize=function(){var t=window.innerHeight*(window.innerHeight>window.innerWidth,.6),n=window.innerWidth*(window.innerHeight>window.innerWidth?.8:.6);(window.innerWidth-n)/2,(window.innerHeight-t)/2;e.css("left",(window.innerWidth-e.width())/2).css("top",(window.innerHeight-e.height())/2)}}.bind(this)})},componentWillUnmount:function(){},focus:function(){u["default"]("#user-input").focus()},render:function(){var e,t=null;if(this.state.initialized){var n=window.innerHeight*(window.innerHeight>window.innerWidth,.6),i=window.innerWidth*(window.innerHeight>window.innerWidth?.8:.6),a=(window.innerWidth-i)/2,r=(window.innerHeight-n)/2;e={height:n,width:i,top:r,left:a},t=[s["default"].createElement(f,{key:"termhead"}),s["default"].createElement(h,{key:"termbody"})]}else e=d;return s["default"].createElement("div",{id:"term",ref:"term",style:e},s["default"].createElement("div",{style:{position:"relative",width:"100%",height:"100%"},onClick:this.focus.bind(this)},t))}});t.Term=c;var d={width:0,height:0,top:"50%",left:"50%"},f=s["default"].createClass({displayName:"TermHead",close:function(){window.open("","_self"),window.close()},render:function(){return s["default"].createElement("div",{id:"term-head"},s["default"].createElement("div",{className:"title"},"Ran Xie's Homepage"),s["default"].createElement("a",{href:"javascript://",onClick:this.close,className:"close"},"✕"))}}),h=s["default"].createClass({displayName:"TermBody",componentDidUpdate:function(){var e=this.refs.termBody.getDOMNode();e.scrollTop=e.scrollHeight},getInitialState:function(){return{userInput:"",loc:["~"],dispStack:[]}},componentDidMount:function(){new v(this)},render:function(){for(var e=[],t=0;t<this.state.dispStack.length;t++)e.push(s["default"].createElement(p,{key:"output-"+t,output:this.state.dispStack[t]}));return s["default"].createElement("div",{id:"term-body",ref:"termBody"},e,s["default"].createElement(m,{userInput:this.state.userInput,loc:this.state.loc.join("/")}))}}),p=s["default"].createClass({displayName:"Output",render:function(){return s["default"].createElement("div",{className:"output"},this.props.output)}}),m=s["default"].createClass({displayName:"CurrentLine",render:function(){return s["default"].createElement("div",{id:"current-line",className:"section"},s["default"].createElement("span",{className:"prefix"},"guest@Skarlit.github.io ",this.props.loc,">"),s["default"].createElement("span",{id:"user-input"},this.props.userInput),s["default"].createElement("span",{className:"blinking-cursor"}))}}),v=function(){function e(t){a(this,e),this.view=t,this.inputQueue=[],this.initListener()}return r(e,[{key:"initListener",value:function(){u["default"](window).on("keydown",function(e){switch(e.which){case 13:e.preventDefault(),e.stopPropagation(),this.cloneCurrentLine(),this.inputQueue=[];break;case 8:e.preventDefault(),e.stopPropagation(),this.inputQueue.pop();break;default:var t=String.fromCharCode(e.which);this.inputQueue.push(e.shiftKey?t:t.toLowerCase())}this.view.setState({userInput:this.inputQueue.join("")})}.bind(this)),u["default"](window).on("mousewheel",function(e){var t=e.originalEvent.wheelDelta;this.view.refs.termBody.getDOMNode().scrollTop-=t}.bind(this))}},{key:"cloneCurrentLine",value:function(){var e="guest@Skarlit.github.io "+this.view.state.loc+"> "+this.inputQueue.join("");this.view.state.dispStack.push(e),this.view.setState({})}}]),e}()}});