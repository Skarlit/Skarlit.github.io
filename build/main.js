webpackJsonp([1],{0:function(e,t,n){e.exports=n(1)},1:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(2),i=a(r),o=n(158),u=(n(200),n(216)),l=a(u),s=n(220),c=a(s),f=n(221),d=a(f),h=n(222),p=a(h),m=n(223),v=a(m),g=n(217),y=(a(g),n(224)),w=i["default"].createClass({displayName:"App",componentDidMount:function(){},render:function(){return i["default"].createElement("div",{className:"app"},i["default"].createElement("canvas",{id:"canvas-overlay",ref:"background"}),i["default"].createElement("div",{className:"canvas-label"},"Code Rain v0.0.1"),i["default"].createElement("div",{className:"body"},i["default"].createElement(l["default"],null),i["default"].createElement("div",{className:"body-content"},this.props.children)))}}),S=i["default"].createClass({displayName:"NotFound",render:function(){return i["default"].createElement("div",null,i["default"].createElement("div",null," "))}});window.onload=function(){i["default"].render(i["default"].createElement(o.Router,null,i["default"].createElement(o.Route,{name:"app",path:"/",component:w},i["default"].createElement(o.IndexRoute,{component:v["default"]}),i["default"].createElement(o.Route,{name:"bio",path:"bio",component:d["default"]}),i["default"].createElement(o.Route,{name:"exp",path:"exp/index",component:c["default"]}),i["default"].createElement(o.Route,{name:"contact",path:"contact",component:p["default"]}),i["default"].createElement(o.Route,{path:"*",component:S}))),document.body,function(){y.Rain().start()})}},200:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(2),i=a(r),o=n(201),u=a(o),l=n(215),s=a(l),c=u["default"](i["default"]),f=c.Spring,d=c.TransitionSpring,h=c.Motion,p=c.StaggeredMotion,m=c.TransitionMotion;t.Spring=f,t.TransitionSpring=d,t.Motion=h,t.StaggeredMotion=p,t.TransitionMotion=m;var v=n(211),g=a(v);t.spring=g["default"];var y=n(212),w=a(y);t.presets=w["default"];var S={reorderKeys:s["default"]};t.utils=S},201:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n={};for(var a in t)t.hasOwnProperty(a)&&(n[a]=e(t[a],a));return n}function i(e,t){for(var n in t)if(t.hasOwnProperty(n)&&!e(t[n],n))return!1;return!0}function o(e){var t=e.PropTypes,n=e.createClass({displayName:"Motion",propTypes:{defaultValue:function(e,t){return e[t]?new Error("Spring's `defaultValue` has been changed to `defaultStyle`. Its format received a few (easy to update!) changes as well."):void 0},endValue:function(e,t){return e[t]?new Error("Spring's `endValue` has been changed to `style`. Its format received a few (easy to update!) changes as well."):void 0},defaultStyle:t.object,style:t.object.isRequired,children:t.func.isRequired},getInitialState:function(){var e=this.props,t=e.defaultStyle,n=e.style,a=t||n;return{currentStyle:a,currentVelocity:r(g["default"],a)}},componentDidMount:function(){this.startAnimating()},componentWillReceiveProps:function(){this.startAnimating()},animationStep:function(e,t){var n=t.currentStyle,a=t.currentVelocity,r=this.props.style,i=y.updateCurrentStyle(e,n,a,r),o=y.updateCurrentVelocity(e,n,a,r);return s["default"](a,i)&&s["default"](o,i)&&this.stopAnimation(),{currentStyle:i,currentVelocity:o}},stopAnimation:null,hasUnmounted:!1,componentWillUnmount:function(){this.stopAnimation(),this.hasUnmounted=!0},startAnimating:function(){this.stopAnimation=_(this.state,this.animationStep,this.animationRender)},animationRender:function(e,t,n){this.hasUnmounted||this.setState({currentStyle:y.interpolateValue(e,t.currentStyle,n.currentStyle),currentVelocity:t.currentVelocity})},render:function(){var t=M["default"](this.state.currentStyle),n=this.props.children(t);return n&&e.Children.only(n)}}),a=e.createClass({displayName:"StaggeredMotion",propTypes:{defaultStyle:function(e,t){return e[t]?new Error('You forgot the "s" for `StaggeredMotion`\'s `defaultStyles`.'):void 0},style:function(e,t){return e[t]?new Error('You forgot the "s" for `StaggeredMotion`\'s `styles`.'):void 0},defaultStyles:t.arrayOf(t.object),styles:t.func.isRequired,children:t.func.isRequired},getInitialState:function(){var e=this.props,t=e.styles,n=e.defaultStyles,a=n?n:t();return{currentStyles:a,currentVelocities:a.map(function(e){return r(g["default"],e)})}},componentDidMount:function(){this.startAnimating()},componentWillReceiveProps:function(){this.startAnimating()},animationStep:function(e,t){var n=t.currentStyles,a=t.currentVelocities,r=this.props.styles(n.map(M["default"])),i=n.map(function(t,n){return y.updateCurrentStyle(e,t,a[n],r[n])}),o=n.map(function(t,n){return y.updateCurrentVelocity(e,t,a[n],r[n])});return a.every(function(e,t){return s["default"](e,n[t])})&&o.every(function(e,t){return s["default"](e,i[t])})&&this.stopAnimation(),{currentStyles:i,currentVelocities:o}},stopAnimation:null,hasUnmounted:!1,componentWillUnmount:function(){this.stopAnimation(),this.hasUnmounted=!0},startAnimating:function(){this.stopAnimation=_(this.state,this.animationStep,this.animationRender)},animationRender:function(e,t,n){if(!this.hasUnmounted){var a=t.currentStyles.map(function(t,a){return y.interpolateValue(e,t,n.currentStyles[a])});this.setState({currentStyles:a,currentVelocities:t.currentVelocities})}},render:function(){var t=this.state.currentStyles.map(M["default"]),n=this.props.children(t);return n&&e.Children.only(n)}}),o=e.createClass({displayName:"TransitionMotion",propTypes:{defaultValue:function(e,t){return e[t]?new Error("TransitionSpring's `defaultValue` has been changed to `defaultStyles`. Its format received a few (easy to update!) changes as well."):void 0},endValue:function(e,t){return e[t]?new Error("TransitionSpring's `endValue` has been changed to `styles`. Its format received a few (easy to update!) changes as well."):void 0},defaultStyle:function(e,t){return e[t]?new Error('You forgot the "s" for `TransitionMotion`\'s `defaultStyles`.'):void 0},style:function(e,t){return e[t]?new Error('You forgot the "s" for `TransitionMotion`\'s `styles`.'):void 0},defaultStyles:t.objectOf(t.any),styles:t.oneOfType([t.func,t.objectOf(t.any.isRequired)]).isRequired,willLeave:t.oneOfType([t.func]),willEnter:t.oneOfType([t.func]),children:t.func.isRequired},getDefaultProps:function(){return{willEnter:function(e,t){return t},willLeave:function(){return null}}},getInitialState:function(){var e=this.props,t=e.styles,n=e.defaultStyles,a=void 0;return a=null==n?"function"==typeof t?t():t:n,{currentStyles:a,currentVelocities:r(function(e){return r(g["default"],e)},a)}},componentDidMount:function(){this.startAnimating()},componentWillReceiveProps:function(){this.startAnimating()},animationStep:function(e,t){var n=t.currentStyles,a=t.currentVelocities,o=this.props,l=o.styles,c=o.willEnter,d=o.willLeave;"function"==typeof l&&(l=l(n));var p=l,m=!1;p=h["default"](n,l,function(e){var t=d(e,n[e],l,n,a);return null==t?null:s["default"](a[e],n[e])&&f["default"](n[e],t)?null:t}),Object.keys(p).filter(function(e){return!n.hasOwnProperty(e)}).forEach(function(e){var t,i;m=!0;var o=c(e,p[e],l,n,a);p[e]=o,n=u({},n,(t={},t[e]=o,t)),a=u({},a,(i={},i[e]=r(g["default"],o),i))});var v=r(function(t,r){return y.updateCurrentStyle(e,n[r],a[r],t)},p),w=r(function(t,r){return y.updateCurrentVelocity(e,n[r],a[r],t)},p);return!m&&i(function(e,t){return s["default"](e,n[t])},a)&&i(function(e,t){return s["default"](e,v[t])},w)&&this.stopAnimation(),{currentStyles:v,currentVelocities:w}},stopAnimation:null,hasUnmounted:!1,componentWillUnmount:function(){this.stopAnimation(),this.hasUnmounted=!0},startAnimating:function(){this.stopAnimation=_(this.state,this.animationStep,this.animationRender)},animationRender:function(e,t,n){if(!this.hasUnmounted){var a=r(function(t,a){return y.interpolateValue(e,t,n.currentStyles[a])},t.currentStyles);this.setState({currentStyles:a,currentVelocities:t.currentVelocities})}},render:function(){var t=r(M["default"],this.state.currentStyles),n=this.props.children(t);return n&&e.Children.only(n)}}),l=S["default"](e),c=l.Spring,d=l.TransitionSpring;return{Spring:c,TransitionSpring:d,Motion:n,StaggeredMotion:a,TransitionMotion:o}}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t["default"]=o;var l=n(202),s=a(l),c=n(203),f=a(c),d=n(204),h=a(d),p=n(205),m=a(p),v=n(208),g=a(v),y=n(209),w=n(213),S=a(w),b=n(214),M=a(b),_=m["default"]();e.exports=t["default"]},202:function(e,t){"use strict";function n(e,t){for(var n in e)if(e.hasOwnProperty(n)&&null!=t[n]&&t[n].config&&0!==e[n])return!1;return!0}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},203:function(e,t){"use strict";function n(e,t){for(var n in t)if(t.hasOwnProperty(n)){var a=e[n],r=t[n];if(null!=r&&r.config){if(a.config&&a.val!==r.val)return!1;if(!a.config&&a!==r.val)return!1}}return!0}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},204:function(e,t){"use strict";function n(e,t,n,a,r,i,o){for(var u=!0;u;){var l=e,s=t,c=n,f=a,d=r,h=i,p=o;m=v=g=y=w=w=void 0,u=!1;var m=f===l.length,v=d===s.length,g=l[f],y=s[d];if(m&&v)return null;if(m)p[y]=c[y],e=l,t=s,n=c,a=f,r=d+1,i=h,o=p,u=!0;else if(v){var w=h(g);null!=w&&(p[g]=w),e=l,t=s,n=c,a=f+1,r=d,i=h,o=p,u=!0}else if(g!==y)if(c.hasOwnProperty(g))e=l,t=s,n=c,a=f+1,r=d,i=h,o=p,u=!0;else{var w=h(g);null!=w&&(p[g]=w),e=l,t=s,n=c,a=f+1,r=d,i=h,o=p,u=!0}else p[g]=c[g],e=l,t=s,n=c,a=f+1,r=d+1,i=h,o=p,u=!0}}function a(e,t,a){var r={};return n(Object.keys(e),Object.keys(t),t,0,0,a,r),r}t.__esModule=!0,t["default"]=a,e.exports=t["default"]},205:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(){function e(){var t=p(),n=t-g;g=t,y+=n*u,y>r*c&&(y=0);for(var a=Math.ceil(y/r),i=0;i<m.length;i++){var o=m[i],l=o.active,s=o.animationStep,f=o.prevState,h=m[i].nextState;if(l)if(0>=y)m[i].nextState=s(r/1e3,f);else for(var w=0;a>w;w++){m[i].nextState=s(r/1e3,h);var S=[h,m[i].nextState];m[i].prevState=S[0],h=S[1]}}y-=a*r;for(var b=1+y/r,i=0;i<m.length;i++){var M=m[i],_=M.animationRender,E=M.nextState,x=M.prevState;_(b,E,x)}m=m.filter(function(e){var t=e.active;return t}),0===m.length?v=!1:d(e)}function t(){v||(v=!0,g=p(),y=0,d(e))}var n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],a=n.timeStep,r=void 0===a?1/60*1e3:a,i=n.timeScale,u=void 0===i?1:i,s=n.maxSteps,c=void 0===s?10:s,f=n.raf,d=void 0===f?l["default"]:f,h=n.now,p=void 0===h?o["default"]:h,m=[],v=!1,g=0,y=0;return function(e,n,a){for(var r=0;r<m.length;r++){var i=m[r];if(i.animationStep===n)return i.active=!0,i.prevState=e,t(),i.stop}var o={animationStep:n,animationRender:a,prevState:e,nextState:e,active:!0};return o.stop=function(){return o.active=!1},m.push(o),t(),o.stop}}t.__esModule=!0,t["default"]=r;var i=n(206),o=a(i),u=n(207),l=a(u);e.exports=t["default"]},206:function(e,t,n){(function(t){(function(){var n,a,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-r)/1e6},a=t.hrtime,n=function(){var e;return e=a(),1e9*e[0]+e[1]},r=n()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(t,n(4))},207:function(e,t,n){for(var a=n(206),r="undefined"==typeof window?{}:window,i=["moz","webkit"],o="AnimationFrame",u=r["request"+o],l=r["cancel"+o]||r["cancelRequest"+o],s=0;s<i.length&&!u;s++)u=r[i[s]+"Request"+o],l=r[i[s]+"Cancel"+o]||r[i[s]+"CancelRequest"+o];if(!u||!l){var c=0,f=0,d=[],h=1e3/60;u=function(e){if(0===d.length){var t=a(),n=Math.max(0,h-(t-c));c=n+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return d.push({handle:++f,callback:e,cancelled:!1}),f},l=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return u.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)}},208:function(e,t){"use strict";function n(){return 0}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},209:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t,n){if(!n)return t;var a={};for(var r in t)if(t.hasOwnProperty(r))if(null!=t[r]&&t[r].config){var i=n[r].config?n[r].val:n[r];a[r]=c["default"](t[r].val*e+i*(1-e),t[r].config)}else a[r]=t[r];return a}function i(e,t,n,a){var r={};for(var i in a)if(a.hasOwnProperty(i))if(null!=a[i]&&a[i].config){var o=a[i].config,u=o[0],s=o[1],f=l["default"](e,null==t[i].val?t[i]:t[i].val,n[i],a[i].val,u,s)[0];r[i]=c["default"](f,a[i].config)}else r[i]=a[i];return r}function o(e,t,n,a){var r={};for(var i in a)if(a.hasOwnProperty(i))if(null!=a[i]&&a[i].config){var o=a[i].config,u=o[0],s=o[1],c=l["default"](e,null==t[i].val?t[i]:t[i].val,n[i],a[i].val,u,s)[1];r[i]=c}else r[i]=0;return r}t.__esModule=!0,t.interpolateValue=r,t.updateCurrentStyle=i,t.updateCurrentVelocity=o;var u=n(210),l=a(u),s=n(211),c=a(s)},210:function(e,t){"use strict";function n(e,t,n,r,i,o){var u=-i*(t-r),l=-o*n,s=u+l,c=n+s*e,f=t+c*e;return Math.abs(c-n)<a&&Math.abs(f-t)<a?[r,0]:[f,c]}t.__esModule=!0,t["default"]=n;var a=1e-4;e.exports=t["default"]},211:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=arguments.length<=1||void 0===arguments[1]?o["default"].noWobble:arguments[1];return{val:e,config:t}}t.__esModule=!0,t["default"]=r;var i=n(212),o=a(i);e.exports=t["default"]},212:function(e,t){"use strict";t.__esModule=!0,t["default"]={noWobble:[170,26],gentle:[120,14],wobbly:[180,12],stiff:[210,20]},e.exports=t["default"]},213:function(e,t,n){(function(n){"use strict";function a(e){var t=e.createClass({displayName:"Spring",componentWillMount:function(){if("development"===n.env.NODE_ENV){var e=this._reactInternalInstance._currentElement._owner&&this._reactInternalInstance._currentElement._owner.getName();r[e]||(r[e]=!0,console.error("Spring (used in %srender) has now been renamed to Motion. Please see the release note for the upgrade path. Thank you!",e?e+"'s ":"React."))}},render:function(){return null}}),a=e.createClass({displayName:"TransitionSpring",componentWillMount:function(){if("development"===n.env.NODE_ENV){var e=this._reactInternalInstance._currentElement._owner&&this._reactInternalInstance._currentElement._owner.getName();i[e]||(i[e]=!0,console.error("TransitionSpring (used in %srender) has now been renamed to TransitionMotion. Please see the release note for the upgrade path. Thank you!",e?e+"'s ":"React."))}},render:function(){return null}});return{Spring:t,TransitionSpring:a}}t.__esModule=!0,t["default"]=a;var r={},i={};e.exports=t["default"]}).call(t,n(4))},214:function(e,t){"use strict";function n(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=null==e[n]||null==e[n].val?e[n]:e[n].val);return t}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},215:function(e,t){"use strict";function n(e,t){for(var n=t(Object.keys(e)),a={},r=0;r<n.length;r++){var i=n[r];a[i]=e[i]}return a}t.__esModule=!0,t["default"]=n,e.exports=t["default"]},216:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),o=n(158),u=n(217),l=(a(u),n(218)),s=a(l),c=i["default"].createClass({displayName:"NavBar",getInitialState:function(){return{selected:"HOME"}},changeTab:function(e){if(e!=this.state.selected){var t=this,n=s["default"](this.refs.currentTab.getDOMNode());n.stop().animate({left:-200},250,function(){t.setState({selected:e}),n.stop().animate({left:0},250)})}},render:function(){return i["default"].createElement("div",{className:"app-bar"},i["default"].createElement("ul",{className:"heading app-bar-menu"},i["default"].createElement("li",{className:"current-tab",ref:"currentTab"},this.state.selected)),i["default"].createElement("ul",{className:"app-bar-menu right"},i["default"].createElement("li",{onClick:this.changeTab.bind(this,"HOME")},i["default"].createElement(o.Link,{to:"/"},"HOME")),i["default"].createElement("li",{onClick:this.changeTab.bind(this,"EXPERIMENT")},i["default"].createElement(o.Link,{to:"/exp/index"},"EXPERIMENTS")),i["default"].createElement("li",{onClick:this.changeTab.bind(this,"POSTS")},i["default"].createElement("a",{className:"disable"},"POSTS")),i["default"].createElement("li",{onClick:this.changeTab.bind(this,"BIO")},i["default"].createElement(o.Link,{to:"/bio",className:"disable"},"BIO")),i["default"].createElement("li",{onClick:this.changeTab.bind(this,"CONTACT")},i["default"].createElement(o.Link,{to:"/contact",className:"disable"},"CONTACT"))))}});t["default"]=c,e.exports=t["default"]},217:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){n(this,e),this.oldTime=Date.now()}return a(e,[{key:"reset",value:function(){this.oldTime=Date.now()}},{key:"getDelta",value:function(){var e=this.oldTime;return this.oldTime=Date.now(),this.oldTime-e}}]),e}(),i=function(){function e(){n(this,e),this.queue=[],this.deltaT,this.clock=new r,this.clock.reset(),this.run(),window.onerror=this.stop.bind(this)}return a(e,[{key:"animate",value:function(e){e.countDown=e.duration,e.callback=e.callback||function(){},this.queue.push(e)}},{key:"run",value:function(){if(this.loopId=window.requestAnimationFrame(this.run.bind(this)),this.deltaT=this.clock.getDelta(),this.queue[0]){if(this.queue[0].step.call(null,this.queue[0].countDown,this.deltaT),0==this.queue[0].countDown)return void this.queue.shift().callback();if(this.queue[0].countDown-this.deltaT<0)return void(this.queue[0].countDown=0);this.queue[0].countDown-=this.deltaT}}},{key:"flush",value:function(){this.queue=[]}},{key:"stop",value:function(){window.cancelAnimationFrame(this.loopId)}}]),e}(),o=window.Animator=function(){return o?void 0:new i}();t["default"]=o,e.exports=t["default"]},220:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),o=(n(158),n(217)),u=a(o),l=n(218),s=a(l),c=i["default"].createClass({displayName:"Exp",getInitialState:function(){return{toggled:!1,frameUrl:""}},componentDidMount:function(){},toggle:function(e){this.state.toggled?this.setState({frameUrl:e}):this.animateList(e)},animateList:function(e){var t=s["default"](this.refs.panel.getDOMNode()),n=this,a=t.width(),r=250;u["default"].animate({duration:300,step:function(e,n){t.css("left",25*(1-e/300)+50*e/300+"%")}}),u["default"].animate({duration:300,step:function(e,n){t.css("width",r*(1-e/300)+a*e/300)}});var i=s["default"](this.refs.frame.getDOMNode()),o=s["default"](".body").width(),l=30;u["default"].animate({duration:10,step:function(){},callback:function(){i.width(10),i.height(10),i.show(),i.css("left",r+l)}}),u["default"].animate({duration:400,step:function(e,t){i.width(10*e/400+(1-e/400)*(o-r-l)),i.height(10*e/400+(1-e/400)*(window.innerHeight-200))},callback:function(){n.setState({frameUrl:e,toggled:!0})}})},componentWillUnmount:function(){u["default"].flush()},render:function(){return i["default"].createElement("div",{style:{position:"relative"}},i["default"].createElement("div",{ref:"panel",className:"panel exp"},i["default"].createElement("div",{className:"listview"},i["default"].createElement("div",{onClick:this.toggle.bind(null,"/javascripts/algorithm/magic_wand/index.html"),className:"list"},i["default"].createElement("span",{className:"list-icon icon-font-icon"}),i["default"].createElement("span",{className:"list-title"},"Magic Wand")),i["default"].createElement("div",{onClick:this.toggle.bind(null,"/javascripts/algorithm/SplitString/index.html"),className:"list"},i["default"].createElement("span",{className:"list-icon icon-font-icon"}),i["default"].createElement("span",{className:"list-title"},"String Split")))),i["default"].createElement("iframe",{ref:"frame",style:f,seamless:!0,src:this.state.frameUrl}))}}),f={top:0,position:"absolute",border:"1px solid #777",display:"none"};t["default"]=c,e.exports=t["default"]},221:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),o=i["default"].createClass({displayName:"Bio",render:function(){return i["default"].createElement("div",null," ")}});t["default"]=o,e.exports=t["default"]},222:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),o=i["default"].createClass({displayName:"Contact",render:function(){return i["default"].createElement("div",null," ")}});t["default"]=o,e.exports=t["default"]},223:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=a(r),o=(n(158),n(217)),u=a(o),l=n(218),s=a(l),c="My name is Ran.\nI am a web application engineer.\nI love learning and building cool things.\n",f=i["default"].createClass({displayName:"Index",componentDidMount:function(){var e=s["default"](this.refs.title.getDOMNode());e.fadeIn(300);for(var t=s["default"](".intro-letter"),n=0;n<t.length;n++)!function(e){u["default"].animate({duration:50,step:function(n,a){n>0?t[e].textContent=c[Math.floor(Math.random()*c.length)]:t[e].textContent=c[e]}})}(n)},componentWillUnmount:function(){u["default"].flush()},render:function(){for(var e=c.split(""),t=[],n=0;n<e.length;n++)t.push(i["default"].createElement("span",{className:"intro-letter"}));return i["default"].createElement("div",{style:d},i["default"].createElement("div",{ref:"title",style:h},"HELLO."),i["default"].createElement("div",{style:p},t))}}),d={position:" absolute",width:" 640px",height:" 480px",top:" 50%",marginTop:" -240px",left:" 50%",marginLeft:" -320px"},h={fontSize:"72px",color:"#aaa"},p={fontSize:"30px",lineHeight:"70px",marginTop:"40px",color:"#999"};t["default"]=f,e.exports=t["default"]},224:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(){var e,t=new u["default"].OrthographicCamera(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,-500,1e4);t.position.z=100;var n=new u["default"].Scene,a=new u["default"].WebGLRenderer({canvas:document.getElementById("canvas-overlay")});a.setSize(window.innerWidth,window.innerHeight);var r=new i(window.innerWidth,window.innerHeight);n.add(r.ps),t.position.z=500;var o=new u["default"].Clock;o.start();var l=function s(){e=requestAnimationFrame(s);var i=o.getDelta();r.update(i),a.render(n,t)};return{start:function(){l()},end:function(){window.cancelAnimationFrame(e)}}}function i(e,t){this.w=e,this.h=t,this.psGeo=new u["default"].BufferGeometry,this.gridSize=32,this.n=Math.ceil(this.h/this.gridSize),this.m=Math.ceil(this.w/this.gridSize),this.alphas=new Float32Array(this.n*this.m),this.vertices=new Float32Array(this.n*this.m*3),this.scannerNum=200,this.depth=-5;for(var n=0;n<this.n;n++)for(var a=0;a<this.m;a++)this.vertices[n*this.m*3+3*a]=a*this.gridSize-this.w/2,this.vertices[n*this.m*3+3*a+1]=-n*this.gridSize+this.h/2,this.vertices[n*this.m*3+3*a+2]=this.depth,this.alphas[n*this.m+a]=0;this.scanners=[];for(var n=0;n<this.scannerNum;n++)this.scanners.push({col:Math.round(this.m*Math.random()),row:Math.random()*this.n,v:10});this.psGeo.addAttribute("position",new u["default"].BufferAttribute(this.vertices,3)),this.psGeo.addAttribute("alphas",new u["default"].BufferAttribute(this.alphas,1));var r={color:{type:"c",value:new u["default"].Color(65535)},texture:{type:"t",value:u["default"].ImageUtils.loadTexture("../img/alphabet.png")}};this.psMat=new u["default"].ShaderMaterial({uniforms:r,vertexShader:l,fragmentShader:s,transparent:!0}),this.ps=new u["default"].Points(this.psGeo,this.psMat),this.ps.position.z=-10,this.skipFrame=3,this.count=0,this.speed=100}Object.defineProperty(t,"__esModule",{value:!0}),t.Rain=r;var o=n(225),u=a(o),l="\n    attribute float alphas;\n\n    varying float vAlpha;\n\n    void main() {\n        vAlpha = alphas;\n\n        gl_PointSize = 32.0;\n\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n",s="\n    uniform vec3 color;\n    uniform sampler2D texture;\n\n    varying float vAlpha;\n\n    float rand(vec2 co){\n        return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    }\n\n    void main() {\n\n        vec4 color = texture2D(texture, gl_PointCoord * vec2(0.5, 1.0));\n        gl_FragColor = vec4(color.xyz, color.a * vAlpha);\n    }\n";i.prototype={update:function(e){for(var t=this.psGeo.attributes.alphas.array,n=0;n<this.scanners.length;n++){var a=Math.round(this.scanners[n].row)*this.m+this.scanners[n].col;t[a]=Math.min(1,t[a]+.2),this.scanners[n].row+=e*this.scanners[n].v,this.scanners[n].row>this.n-1&&(this.scanners[n]={col:parseInt(this.m*Math.random()),row:Math.random()*this.n,v:10})}for(var r=0;r<t.length;r++)t[r]*=.95;this.psGeo.attributes.alphas.needsUpdate=!0}}}});