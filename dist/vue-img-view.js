!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vueImgView",[],e):"object"==typeof exports?exports.vueImgView=e():t.vueImgView=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,i){"use strict";e.a={name:"imgView",props:{imgUrl:{type:String,default:""},background:{type:String,default:"#F2F2F2"}},data:function(){return{computedHeight:"",computedWidth:"",imgWidth:0,imgHeight:0,onMouseDownFlag:!1,onMouseOverFlag:!1,styleObjectWrapper:{overflow:"hidden",position:"relative",backgroundColor:this.background},styleObjectImg:{backgroundImage:"",backgroundRepeat:"no-repeat",backgroundSize:"0px 0px",cursor:"move",backgroundPosition:"center",width:"100%",height:"100%",transform:"rotate(0deg)",transformOrigin:"center",position:"absolute"},styleObjectHandle:{textAlign:"center",position:"absolute",right:"10px",bottom:"10px"}}},watch:{imgUrl:function(){var t=this;t.$nextTick(function(){var e=t.$refs.imgWrapper;t.styleObjectImg.backgroundImage="url("+t.imgUrl+")",t.init().then(function(){t.$nextTick(function(){t.computedHeight=e.offsetHeight,t.computedWidth=e.offsetWidth,t.computedHeight/t.computedWidth<t.imgHeight/t.imgWidth?(t.imgWidth=t.imgWidth*t.computedHeight/t.imgHeight,t.imgHeight=t.computedHeight):(t.imgHeight=t.imgHeight*t.computedWidth/t.imgWidth,t.imgWidth=t.computedWidth),t.styleObjectImg.backgroundImage="url("+t.imgUrl+")",t.styleObjectImg.transform="rotate(0deg)",t.styleObjectImg.width=t.computedWidth+"px",t.styleObjectImg.height=t.computedHeight+"px",t.styleObjectImg.left="0px",t.styleObjectImg.top="0px",t.styleObjectImg.backgroundSize=t.imgWidth+"px "+t.imgHeight+"px",t.styleObjectImg.backgroundPosition=(t.computedWidth-t.imgWidth)/2+"px "+(t.computedHeight-t.imgHeight)/2+"px"})})})}},mounted:function(){var t=this,e=t.$refs.imgWrapper;t.init().then(function(){t.$nextTick(function(){t.computedHeight=e.offsetHeight,t.computedWidth=e.offsetWidth,t.computedHeight/t.computedWidth<t.imgHeight/t.imgWidth?(t.imgWidth=t.imgWidth*t.computedHeight/t.imgHeight,t.imgHeight=t.computedHeight):(t.imgHeight=t.imgHeight*t.computedWidth/t.imgWidth,t.imgWidth=t.computedWidth),t.styleObjectImg.backgroundImage="url("+t.imgUrl+")",t.styleObjectImg.transform="rotate(0deg)",t.styleObjectImg.width=t.computedWidth+"px",t.styleObjectImg.height=t.computedHeight+"px",t.styleObjectImg.left="0px",t.styleObjectImg.top="0px",t.styleObjectImg.backgroundSize=t.imgWidth+"px "+t.imgHeight+"px",t.styleObjectImg.backgroundPosition=(t.computedWidth-t.imgWidth)/2+"px "+(t.computedHeight-t.imgHeight)/2+"px",window.onresize=function(){t.computedHeight=t.$refs.imgWrapper.offsetHeight,t.computedWidth=t.$refs.imgWrapper.offsetWidth}})})},updated:function(){var t=this;if(0===parseInt(this.computedWidth)){var e=t.$refs.imgWrapper;t.init().then(function(){t.$nextTick(function(){t.computedHeight=e.offsetHeight,t.computedWidth=e.offsetWidth,t.computedHeight/t.computedWidth<t.imgHeight/t.imgWidth?(t.imgWidth=t.imgWidth*t.computedHeight/t.imgHeight,t.imgHeight=t.computedHeight):(t.imgHeight=t.imgHeight*t.computedWidth/t.imgWidth,t.imgWidth=t.computedWidth),t.styleObjectImg.backgroundImage="url("+t.imgUrl+")",t.styleObjectImg.backgroundSize=t.imgWidth+"px "+t.imgHeight+"px",t.styleObjectImg.backgroundPosition=(t.computedWidth-t.imgWidth)/2+"px "+(t.computedHeight-t.imgHeight)/2+"px"})})}},methods:{init:function(){var t=this;return new Promise(function(e,i){var o=new Image;o.src=t.imgUrl,o.onload=function(){t.imgWidth=o.width,t.imgHeight=o.height,e()}})},onMouseDown:function(){this.onMouseDownFlag=!0},onMouseUp:function(){this.onMouseDownFlag=!1},onMouseOver:function(){this.onMouseOverFlag=!0},onMouseOut:function(){this.onMouseOverFlag=!1,this.onMouseDownFlag=!1},onMouseMove:function(t){if(this.onMouseDownFlag){var t=t||window.event;if(this.styleObjectImg.backgroundPosition){var e=parseInt(this.styleObjectImg.transform.split("(")[1])%360;if(e<0&&(e+=360),e%360==0)var i=parseInt(this.styleObjectImg.backgroundPosition.split(" ")[0])+t.movementX,o=parseInt(this.styleObjectImg.backgroundPosition.split(" ")[1])+t.movementY;else if(e%270==0)var i=parseInt(this.styleObjectImg.backgroundPosition.split(" ")[0])-t.movementY,o=parseInt(this.styleObjectImg.backgroundPosition.split(" ")[1])+t.movementX;else if(e%180==0)var i=parseInt(this.styleObjectImg.backgroundPosition.split(" ")[0])-t.movementX,o=parseInt(this.styleObjectImg.backgroundPosition.split(" ")[1])-t.movementY;else if(e%90==0)var i=parseInt(this.styleObjectImg.backgroundPosition.split(" ")[0])+t.movementY,o=parseInt(this.styleObjectImg.backgroundPosition.split(" ")[1])-t.movementX;this.styleObjectImg.backgroundPosition=i+"px "+o+"px"}else this.styleObjectImg.backgroundPosition=(this.computedWidth-this.imgWidth)/2+"px "+(this.computedHeight-this.imgHeight)/2+"px"}},onScroll:function(t){var t=t||window.event,e=parseFloat(this.styleObjectImg.backgroundSize.split(" ")[0]),i=parseFloat(this.styleObjectImg.backgroundSize.split(" ")[1]),o=parseFloat(this.styleObjectImg.backgroundPosition.split(" ")[0]),n=parseFloat(this.styleObjectImg.backgroundPosition.split(" ")[1]);if(t.deltaY<0){this.styleObjectImg.backgroundSize=1.1*e+"px "+1.1*i+"px";var r=(e-1.1*e)/2+o,s=(i-1.1*i)/2+n;this.styleObjectImg.backgroundPosition=r+"px "+s+"px"}else{this.styleObjectImg.backgroundSize=e/1.1+"px "+i/1.1+"px";var g=(e-e/1.1)/2+o,d=(i-i/1.1)/2+n;this.styleObjectImg.backgroundPosition=g+"px "+d+"px"}},rotateLeft:function(){var t=this,e=(parseInt(this.styleObjectImg.backgroundSize.split(" ")[0]),parseInt(this.styleObjectImg.backgroundSize.split(" ")[1]),parseInt(t.styleObjectImg.backgroundPosition.split(" ")[0]),parseInt(t.styleObjectImg.backgroundPosition.split(" ")[1]),(parseInt(t.styleObjectImg.transform.split("(")[1])-90)%360);e<0&&(e+=360),t.styleObjectImg.transform="rotate("+e+"deg)",e%180==90?(t.styleObjectImg.width=t.computedHeight+"px",t.styleObjectImg.height=t.computedWidth+"px",t.styleObjectImg.left=Math.abs(parseInt(t.computedHeight)-parseInt(t.computedWidth))/2+"px",t.styleObjectImg.top=(t.computedHeight-t.computedWidth)/2+"px",t.computedHeight/t.computedWidth<t.imgWidth/t.imgHeight?(t.imgHeight=t.imgHeight*t.computedHeight/t.imgWidth,t.imgWidth=t.computedHeight):(t.imgWidth=t.imgWidth*t.computedWidth/t.imgHeight,t.imgHeight=t.computedWidth),t.styleObjectImg.backgroundSize=t.imgWidth+"px "+t.imgHeight+"px",t.styleObjectImg.backgroundPosition=(t.computedHeight-t.imgWidth)/2+"px "+(t.computedWidth-t.imgHeight)/2+"px"):(t.styleObjectImg.width=t.computedWidth+"px",t.styleObjectImg.height=t.computedHeight+"px",t.styleObjectImg.left="0px",t.styleObjectImg.top="0px",t.computedHeight/t.computedWidth<t.imgHeight/t.imgWidth?(t.imgWidth=t.imgWidth*t.computedHeight/t.imgHeight,t.imgHeight=t.computedHeight):(t.imgHeight=t.imgHeight*t.computedWidth/t.imgWidth,t.imgWidth=t.computedWidth),t.styleObjectImg.backgroundSize=t.imgWidth+"px "+t.imgHeight+"px",t.styleObjectImg.backgroundPosition=(t.computedWidth-t.imgWidth)/2+"px "+(t.computedHeight-t.imgHeight)/2+"px")},rotateRight:function(){var t=this,e=(parseInt(this.styleObjectImg.backgroundSize.split(" ")[0]),parseInt(this.styleObjectImg.backgroundSize.split(" ")[1]),(parseInt(t.styleObjectImg.transform.split("(")[1])+90)%360);e<0&&(e+=360),t.styleObjectImg.transform="rotate("+e+"deg)",e%180==90?(t.styleObjectImg.width=t.computedHeight+"px",t.styleObjectImg.height=t.computedWidth+"px",t.styleObjectImg.left=Math.abs(parseInt(t.computedHeight)-parseInt(t.computedWidth))/2+"px",t.styleObjectImg.top=(t.computedHeight-t.computedWidth)/2+"px",t.computedHeight/t.computedWidth<t.imgWidth/t.imgHeight?(t.imgHeight=t.imgHeight*t.computedHeight/t.imgWidth,t.imgWidth=t.computedHeight):(t.imgWidth=t.imgWidth*t.computedWidth/t.imgHeight,t.imgHeight=t.computedWidth),t.styleObjectImg.backgroundSize=t.imgWidth+"px "+t.imgHeight+"px",t.styleObjectImg.backgroundPosition=(t.computedHeight-t.imgWidth)/2+"px "+(t.computedWidth-t.imgHeight)/2+"px"):(t.styleObjectImg.width=t.computedWidth+"px",t.styleObjectImg.height=t.computedHeight+"px",t.styleObjectImg.left="0px",t.styleObjectImg.top="0px",t.computedHeight/t.computedWidth<t.imgHeight/t.imgWidth?(t.imgWidth=t.imgWidth*t.computedHeight/t.imgHeight,t.imgHeight=t.computedHeight):(t.imgHeight=t.imgHeight*t.computedWidth/t.imgWidth,t.imgWidth=t.computedWidth),t.styleObjectImg.backgroundSize=t.imgWidth+"px "+t.imgHeight+"px",t.styleObjectImg.backgroundPosition=(t.computedWidth-t.imgWidth)/2+"px "+(t.computedHeight-t.imgHeight)/2+"px")},onDragStart:function(){return!1}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(2),n={install:function(t,e){t.component(o.a.name,o.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),e.default=n},function(t,e,i){"use strict";function o(t){i(3)}var n=i(0),r=i(9),s=i(8),g=o,d=s(n.a,r.a,!1,g,"data-v-40600c02",null);e.a=d.exports},function(t,e,i){var o=i(4);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(6)("3a7fe548",o,!0)},function(t,e,i){e=t.exports=i(5)(void 0),e.push([t.i,'.rotate[data-v-40600c02]{height:20px;width:20px;display:inline-block;position:relative;margin:3px 10px;border:3px solid #6495ed;border-radius:100%}.rotate[data-v-40600c02]:before{content:"";width:0;height:0;display:inline-block;border-top:7px solid #6495ed;border-right:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid transparent;position:absolute}.rotate-left[data-v-40600c02]{border-left-color:transparent}.rotate-left[data-v-40600c02]:before{left:-10px;top:-1px;transform:rotate(45deg)}.rotate-left[data-v-40600c02]:hover{border:3px solid #00bfff;border-left-color:transparent}.rotate-left[data-v-40600c02]:hover:before{border-top:7px solid #00bfff}.rotate-right[data-v-40600c02]{border-right-color:transparent}.rotate-right[data-v-40600c02]:before{right:-10px;top:-1px;transform:rotate(-45deg)}.rotate-right[data-v-40600c02]:hover{border:3px solid #00bfff;border-right-color:transparent}.rotate-right[data-v-40600c02]:hover:before{border-top:7px solid #00bfff}',""])},function(t,e){function i(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=o(n);return[i].concat(n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"})).concat([r]).join("\n")}return[i].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=i(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(o[r]=!0)}for(n=0;n<t.length;n++){var s=t[n];"number"==typeof s[0]&&o[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e,i){function o(t){for(var e=0;e<t.length;e++){var i=t[e],o=a[i.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](i.parts[n]);for(;n<i.parts.length;n++)o.parts.push(r(i.parts[n]));o.parts.length>i.parts.length&&(o.parts.length=i.parts.length)}else{for(var s=[],n=0;n<i.parts.length;n++)s.push(r(i.parts[n]));a[i.id]={id:i.id,refs:1,parts:s}}}}function n(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function r(t){var e,i,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(h)return l;o.parentNode.removeChild(o)}if(f){var r=u++;o=m||(m=n()),e=s.bind(null,o,r,!1),i=s.bind(null,o,r,!0)}else o=n(),e=g.bind(null,o),i=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else i()}}function s(t,e,i,o){var n=i?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,n);else{var r=document.createTextNode(n),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function g(t,e){var i=e.css,o=e.media,n=e.sourceMap;if(o&&t.setAttribute("media",o),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=i(7),a={},p=d&&(document.head||document.getElementsByTagName("head")[0]),m=null,u=0,h=!1,l=function(){},f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i){h=i;var n=c(t,e);return o(n),function(e){for(var i=[],r=0;r<n.length;r++){var s=n[r],g=a[s.id];g.refs--,i.push(g)}e?(n=c(t,e),o(n)):n=[];for(var r=0;r<i.length;r++){var g=i[r];if(0===g.refs){for(var d=0;d<g.parts.length;d++)g.parts[d]();delete a[g.id]}}}};var b=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],o={},n=0;n<e.length;n++){var r=e[n],s=r[0],g=r[1],d=r[2],c=r[3],a={id:t+":"+n,css:g,media:d,sourceMap:c};o[s]?o[s].parts.push(a):i.push(o[s]={id:s,parts:[a]})}return i}},function(t,e){t.exports=function(t,e,i,o,n,r){var s,g=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(s=t,g=t.default);var c="function"==typeof g?g.options:g;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),i&&(c.functional=!0),n&&(c._scopeId=n);var a;if(r?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=a):o&&(a=o),a){var p=c.functional,m=p?c.render:c.beforeCreate;p?(c._injectStyles=a,c.render=function(t,e){return a.call(e),m(t,e)}):c.beforeCreate=m?[].concat(m,a):[a]}return{esModule:s,exports:g,options:c}}},function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"imgWrapper",style:t.styleObjectWrapper,on:{mouseover:t.onMouseOver}},[i("div",{style:t.styleObjectImg,on:{mousedown:t.onMouseDown,mousemove:function(e){t.onMouseMove(e)},mouseup:t.onMouseUp,mouseout:t.onMouseOut,dragstart:t.onDragStart,mouseover:t.onMouseOver,wheel:function(e){e.preventDefault(),e.stopPropagation(),t.onScroll(e)}}}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.onMouseOverFlag,expression:"onMouseOverFlag"}],style:t.styleObjectHandle,on:{mouseover:t.onMouseOver,mouseout:t.onMouseOut}},[i("i",{staticClass:"rotate rotate-left",on:{click:t.rotateLeft}}),t._v(" "),i("i",{staticClass:"rotate rotate-right",on:{click:t.rotateRight}})])])},n=[],r={render:o,staticRenderFns:n};e.a=r}])});
//# sourceMappingURL=vue-img-view.js.map