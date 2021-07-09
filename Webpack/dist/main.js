(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,"body{\r\n    margin:0px;\r\n}\r\n.container{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.background{\r\n    background-color: #0e2843;\r\n    height: 120px;\r\n}\r\n\r\n.heading{\r\n    height: 60px;\r\n    width: 350px;\r\n    background-color: white;\r\n    border-style: solid;\r\n    border-color: orangered;\r\n    z-index: 1;\r\n    position: absolute;\r\n    top: 60px;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    align-items: center;\r\n}\r\n\r\n.heading>h1{\r\n    margin: 0px;\r\n    padding: 15px 0px 0px 40px;\r\n}\r\n\r\n.bodyContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.searchContainer{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.categoryContainer{\r\n    flex: 30%;\r\n    display: flex;\r\n    \r\n}\r\n\r\n.subHeading{\r\n    flex:70%;\r\n}\r\n\r\n.subHeading>h1{\r\n    margin-left: 550px;\r\n}\r\n\r\n.inputButtonContainer{\r\n    margin-left: 150px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.inputButton{\r\n    height: 30px;\r\n    width: 170px;\r\n    border: none;\r\n    background: orangered;\r\n}\r\n\r\n.breakline{\r\n    border-bottom: 1px solid black;\r\n    margin:10px 50px 0px 50px;\r\n}\r\n\r\n.contentContainer{\r\n    margin: 0px 50px 0px 50px;\r\n}\r\n\r\n.articleContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nimg{\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\n\r\n.article{\r\n    display:flex;\r\n    margin: 30px;\r\n}\r\n\r\n.articleImage{\r\n    height: 200px;\r\n    width: 200px;\r\n    background-size: 200px 200px;\r\n}\r\n\r\n.articleContent{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0px 0px 0px 20px;\r\n}\r\n\r\n.articleDescription{\r\n    margin-top: 10px;\r\n}\r\n\r\n.readButton{\r\n    margin-top: 30px;\r\n    height: 35px;\r\n    width: 130px;\r\n    border: none;\r\n    background: orangered;\r\n}\r\n\r\n",""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:(e,n,t)=>{var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function o(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},r=[],a=0;a<e.length;a++){var d=e[a],c=n.base?d[0]+n.base:d[0],l=t[c]||0,s="".concat(c," ").concat(l);t[c]=l+1;var u=o(s),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:f(p,n),references:1}),r.push(s)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,a);else{var i=document.createTextNode(a),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,a=t.media,i=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function f(e,n){var t,r,a;if(n.singleton){var i=h++;t=m||(m=c(n)),r=u.bind(null,t,i,!1),a=u.bind(null,t,i,!0)}else t=c(n),r=p.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=o(t[r]);i[a].references--}for(var c=d(e,n),l=0;l<t.length;l++){var s=o(t[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=c}}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{async function e(e){var t=document.createElement("div");t.setAttribute("class","contentContainer"),console.log("hello"),console.log("bye");let{articles:r}=await async function(){console.log("bye");return await async function(e){return await(await fetch("https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c6a6960f7cff4f1882403bdfd509ca16")).json()}()}();t.appendChild(function(e){console.log(e);var t=document.createElement("div");return t.setAttribute("class","articleContainer"),e.forEach((e=>{t.appendChild(function(e){var n=document.createElement("div");n.setAttribute("class","article"),console.log(e);var t=e.urlToImage;return n.appendChild(function(e){var n=document.createElement("div");n.setAttribute("class","articleImage");var t=document.createElement("img");return t.setAttribute("src",e),n.appendChild(t),n}(t)),n.appendChild(function(e){var n=document.createElement("div");n.setAttribute("class","articleContent");var t=document.createElement("div");t.setAttribute("class","articelTitle");var r=document.createElement("h3");r.appendChild(document.createTextNode(e.title)),t.appendChild(r),n.appendChild(t);var a=document.createElement("div");a.setAttribute("class","articleDetaile");var i=document.createElement("span");i.appendChild(document.createTextNode("Posted on  "));var o=new Date(e.publishedAt);o=(o=o.toDateString().substring(4).split(" "))[0]+" "+o[1]+","+o[2];var d=document.createElement("span");d.appendChild(document.createTextNode("   //// author")),a.appendChild(i),a.appendChild(document.createTextNode(o)),a.appendChild(d),a.appendChild(document.createTextNode(e.author)),n.appendChild(a);var c=document.createElement("div");c.setAttribute("class","articleDescription"),c.appendChild(document.createTextNode(e.description)),n.appendChild(c);var l=document.createElement("div");l.setAttribute("class","readMore");var s=document.createElement("input");return s.setAttribute("type","button"),s.setAttribute("class","readButton"),s.setAttribute("value","Read More"),s.addEventListener("click",(function(){var n=e.url;window.location.href=n})),l.appendChild(s),n.appendChild(l),n}(e)),n}(e)),t.appendChild(n())})),t}(r.slice(0,5))),e.appendChild(t)}function n(){var e=document.createElement("div");return e.setAttribute("class","breakline"),e}var r,a,i,o,d,c,l=t(379),s=t.n(l),u=t(424);s()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,document.body.appendChild(((a=document.createElement("div")).setAttribute("class","container"),a.appendChild(((c=document.createElement("div")).setAttribute("class","headerContainer"),c.appendChild(((d=document.createElement("div")).setAttribute("class","background"),d)),c.appendChild(function(){var e=document.createElement("div");e.setAttribute("class","heading");var n=document.createElement("h1");return n.appendChild(document.createTextNode("US NEWS BLOG")),e.appendChild(n),e}()),c)),a.appendChild(((r=document.createElement("div")).setAttribute("class","bodyContainer"),r.appendChild(((o=document.createElement("div")).setAttribute("class","searchContainer"),o.appendChild(function(){var e=document.createElement("div");e.setAttribute("class","subHeading");var n=document.createElement("h1");return n.appendChild(document.createTextNode("Headlines")),e.appendChild(n),e}()),o.appendChild(((i=document.createElement("div")).setAttribute("class","categoryContainer"),i.appendChild(function(){var n=document.createElement("div");n.setAttribute("class","inputButtonContainer");var t=document.createElement("input");return t.setAttribute("type","button"),t.setAttribute("class","inputButton"),t.setAttribute("value","Read Headlines"),t.addEventListener("click",(()=>{console.log("button clicked"),e(r)})),n.appendChild(t),n}()),i)),o)),r.appendChild(n()),r)),a))})()})();