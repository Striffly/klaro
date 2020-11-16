!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cm=t():e.cm=t()}(window,(function(){return function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([,function(e,t,n){"use strict";function s(e){if(null!==document.currentScript&&void 0!==document.currentScript)return document.currentScript;const t=document.getElementsByTagName("script");for(let n=0;n<t.length;n++){const s=t[n];if(s.src.includes(e))return s}return null}function o(e){const t={};for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n];s.name.startsWith("data-")&&(t[s.name.slice(5)]=s.value)}return t}function i(e,t){const n=Object.keys(e);for(let s=0;s<n.length;s++){const o=n[s],i=e[o];t[o]!==i&&t.setAttribute("data-"+o,i)}}n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},,,function(e,t,n){"use strict";function s(){const e=document.cookie.split(";"),t=[],n=new RegExp("^\\s*([^=]+)\\s*=\\s*(.*?)$");for(let s=0;s<e.length;s++){const o=e[s],i=n.exec(o);null!==i&&t.push({name:i[1],value:i[2]})}return t}function o(e,t,n){let s=e+"=; Max-Age=-99999999;";document.cookie=s,s+=" path="+(t||"/")+";",document.cookie=s,void 0!==n&&(s+=" domain="+n+";",document.cookie=s)}n.r(t),n.d(t,"default",(function(){return f}));var i=n(1);class r{constructor(e,t){this.key=e.storageName,this.handle=t}get(){return this.handle.getItem(this.key)}getWithKey(e){return this.handle.getItem(e)}set(e){return this.handle.setItem(this.key,e)}setWithKey(e,t){return this.handle.setItem(e,t)}delete(){return this.handle.removeItem(this.key)}deleteWithKey(e){return this.handle.removeItem(e)}}class c extends r{constructor(e){super(e,sessionStorage)}}var a={cookie:class{constructor(e){this.cookieName=e.storageName,this.cookieDomain=e.cookieDomain,this.cookieExpiresAfterDays=e.cookieExpiresAfterDays}get(){const e=function(e){const t=s();for(let n=0;n<t.length;n++)if(t[n].name===e)return t[n];return null}(this.cookieName);return e?e.value:null}set(e){return function(e,t,n,s){let o="";if(n){const e=new Date;e.setTime(e.getTime()+24*n*60*60*1e3),o="; expires="+e.toUTCString()}void 0!==s&&(o+="; domain="+s),document.cookie=e+"="+(t||"")+o+"; path=/; SameSite=Lax"}(this.cookieName,e,this.cookieExpiresAfterDays,this.cookieDomain)}delete(){return o(this.cookieName)}},test:class{constructor(){this.value=null}get(){return this.value}set(e){this.value=e}delete(){this.value=null}},localStorage:class extends r{constructor(e){super(e,localStorage)}},sessionStorage:c};function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class f{constructor(e,t,n){this.config=e,this.store=void 0!==t?t:new a[this.storageMethod](this),void 0===this.store&&(this.store=a.cookie),this.auxiliaryStore=void 0!==n?n:new c(this),this.consents=this.defaultConsents,this.confirmed=!1,this.changed=!1,this.states={},this.executedOnce={},this.watchers=new Set([]),this.loadConsents(),this.applyConsents(),this.savedConsents=u({},this.consents),"function"==typeof this.config.saveCallback&&this.config.saveCallback(this)}get storageMethod(){return this.config.storageMethod||"cookie"}get storageName(){return this.config.storageName||this.config.cookieName||"klaro"}get cookieDomain(){return this.config.cookieDomain||void 0}get cookieExpiresAfterDays(){return this.config.cookieExpiresAfterDays||120}get defaultConsents(){const e={};for(let t=0;t<this.config.services.length;t++){const n=this.config.services[t];e[n.name]=this.getDefaultConsent(n)}return e}watch(e){this.watchers.has(e)||this.watchers.add(e)}unwatch(e){this.watchers.has(e)&&this.watchers.delete(e)}notify(e,t){this.watchers.forEach(n=>{n.update(this,e,t)})}getService(e){const t=this.config.services.filter(t=>t.name===e);if(t.length>0)return t[0]}getDefaultConsent(e){let t=e.default||e.required;return void 0===t&&(t=this.config.default),void 0===t&&(t=!1),t}changeAll(e){let t=0;return this.config.services.map(n=>{!0!==n.contextualConsentOnly&&(n.required||this.config.required||e?this.updateConsent(n.name,!0)&&t++:this.updateConsent(n.name,!1)&&t++)}),t}updateConsent(e,t){const n=(this.consents[e]||!1)!==t;return this.consents[e]=t,this.notify("consents",this.consents),n}restoreSavedConsents(){this.consents=u({},this.savedConsents),this.notify("consents",this.consents)}resetConsents(){this.consents=this.defaultConsents,this.states={},this.confirmed=!1,this.applyConsents(),this.savedConsents=u({},this.consents),this.store.delete(),this.notify("consents",this.consents)}getConsent(e){return this.consents[e]||!1}loadConsents(){const e=this.store.get();return null!==e&&(this.consents=JSON.parse(decodeURIComponent(e)),this._checkConsents(),this.notify("consents",this.consents)),this.consents}saveAndApplyConsents(e){this.saveConsents(e),this.applyConsents()}changedConsents(){const e={};for(const[t,n]of Object.entries(this.consents))this.savedConsents[t]!==n&&(e[t]=n);return e}saveConsents(e){const t=encodeURIComponent(JSON.stringify(this.consents));this.store.set(t),this.confirmed=!0,this.changed=!1;const n=this.changedConsents();this.savedConsents=u({},this.consents),this.notify("saveConsents",{changes:n,consents:this.consents,type:e})}applyConsents(e,t){let n=0;for(let s=0;s<this.config.services.length;s++){const o=this.config.services[s],i=this.states[o.name],r=void 0!==o.optOut?o.optOut:this.config.optOut||!1,c=void 0!==o.required?o.required:this.config.required||!1,a=this.confirmed||r||e||t,l=this.getConsent(o.name)&&a||c;i!==l&&(n++,e||(this.updateServiceElements(o,l),this.updateServiceCookies(o,l),void 0!==o.callback&&o.callback(l,o),void 0!==this.config.callback&&this.config.callback(l,o),this.states[o.name]=l))}return this.notify("applyConsents",n),n}updateServiceElements(e,t){if(t){if(e.onlyOnce&&this.executedOnce[e.name])return;this.executedOnce[e.name]=!0}const n=document.querySelectorAll("[data-name='"+e.name+"']");for(let s=0;s<n.length;s++){const o=n[s],r=o.parentElement,c=Object(i.c)(o),{type:a,src:l,href:u}=c,h=["href","src"];if("DIV"!==o.tagName||"placeholder"!==a){if("IFRAME"===o.tagName){if(o.src===l){console.debug(`Skipping ${o.tagName} for service ${e.name}, as it already has the correct type...`);continue}const n=document.createElement(o.tagName);for(const e of o.attributes)n.setAttribute(e.name,e.value);n.innerText=o.innerText,n.text=o.text,t?(n.style.display=c["original-display"]||"block",void 0!==c.src&&(n.src=c.src)):n.src="",r.insertBefore(n,o),r.removeChild(o)}if("SCRIPT"===o.tagName||"LINK"===o.tagName){if(o.type===a&&o.src===l){console.debug(`Skipping ${o.tagName} for service ${e.name}, as it already has the correct type or src...`);continue}const n=document.createElement(o.tagName);for(const e of o.attributes)n.setAttribute(e.name,e.value);n.innerText=o.innerText,n.text=o.text,t?(n.type=a,void 0!==l&&(n.src=l),void 0!==u&&(n.href=u)):n.type="text/plain",r.insertBefore(n,o),r.removeChild(o)}else{if(t){for(const e of h){const t=c[e];void 0!==t&&(void 0===c["original-"+e]&&(c["original-"+e]=o[e]),o[e]=t)}void 0!==c.title&&(o.title=c.title),void 0!==c["original-display"]&&(o.style.display=c["original-display"])}else{void 0!==c.title&&o.removeAttribute("title"),"true"===c.hide&&(void 0===c["original-display"]&&(c["original-display"]=o.style.display),o.style.display="none");for(const e of h){void 0!==c[e]&&(void 0!==c["original-"+e]&&(o[e]=c["original-"+e]))}}Object(i.a)(c,o)}}else t&&o.remove()}}updateServiceCookies(e,t){if(!t&&(void 0!==e.cookies&&e.cookies.length>0)){const t=s();for(let n=0;n<e.cookies.length;n++){let s,i,r=e.cookies[n];if(r instanceof Array)[r,s,i]=r;else if(r instanceof Object&&!(r instanceof RegExp)){const e=r;r=e.pattern,s=e.path,i=e.domain}if(void 0!==r){r instanceof RegExp||(r=new RegExp("^"+(r.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")+"$")));for(let e=0;e<t.length;e++){const n=t[e];null!==r.exec(n.name)&&(console.debug("Deleting cookie:",n.name,"Matched pattern:",r,"Path:",s,"Domain:",i),o(n.name,s,i))}}}}}_checkConsents(){let e=!0;const t=new Set(this.config.services.map(e=>e.name)),n=new Set(Object.keys(this.consents));for(const e of Object.keys(this.consents))t.has(e)||delete this.consents[e];for(const t of this.config.services)n.has(t.name)||(this.consents[t.name]=this.getDefaultConsent(t),e=!1);this.confirmed=e,e||(this.changed=!0)}}}])}));