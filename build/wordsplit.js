webpackJsonp([6],{0:function(e,t,n){e.exports=n(221)},221:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){return e.replace(/[^a-zA-Z]/g,"").toLowerCase()}var o,s,a,l,c=n(222),h=i(c),u=n(154),d=i(u),f=new h["default"];d["default"].get("./freq.json",function(e){o=e,f.useFreq(o),d["default"]("#input")[0].disabled=!1}),d["default"](function(){s=d["default"]("#input"),a=d["default"]("#convert"),l=d["default"]("#output");var e;s.on("input",function(){e&&clearTimeout(e),e=setTimeout(function(){s.val(r(s.val()))},500)}),a.on("click",function(){var e=f.tokenize(r(s.val())).s.join(" ");l.text(e)})})},222:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){n(this,e),this.wordFreq={}}return i(e,[{key:"train",value:function(e){for(var t=this.n=e.length,n=0;t>n;n++)this.wordFreq[e[n]]={p:(this.wordFreq[e[n]]||0)+1/t,s:[e[n]]}}},{key:"useFreq",value:function(e){for(var t in e){var n=parseFloat(e[t]);1!=t.length||"a"==t&&"i"==t||(n=1e-11),this.wordFreq[t]={p:n,s:[t]}}}},{key:"tokenize",value:function(e){var t=this._solver(e);return t}},{key:"_solver",value:function(e){if(this.wordFreq[e])return this.wordFreq[e];if(e.length<2)return{p:1e-11,s:[e]};for(var t=-(1/0),n=null,i=null,r=0;r<e.length-1;r++){var o=e.substring(0,r+1),s=e.substring(r+1,e.length),a=this._solver(o),l=this._solver(s);t<a.p*l.p&&(t=a.p*l.p,n=a,i=l)}var c={p:t,s:n.s.concat(i.s)};return this.wordFreq[e]=c,c}}]),e}();e.exports=r}});