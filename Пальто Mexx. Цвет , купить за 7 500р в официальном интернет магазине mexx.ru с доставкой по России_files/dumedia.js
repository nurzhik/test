!function(e,t){function r(){this._thens=[],this._arg=null}var a={addEventListener:function(e,r,a){a=a||t,a.addEventListener?a.addEventListener(e,r,!1):a.attachEvent("on"+e,r)},isArray:function(e){return Array.isArray?Array.isArray(e):"[object Array]"==Object.toString(e)},toArray:function(e){return Array.prototype.slice.call(e)},parseQueryString:function(e){for(var t=e.split("&"),r={},a=0;a<t.length;a++){var i=t[a].split("=",2);r[i[0]]=decodeURIComponent(i[1])}return r},getHostName:function(t){if(!t)return"";var r=e.createElement("a");return r.href=t,r.hostname},each:function(e,t,r){if(e)if(e.length===+e.length){for(var a=0,i=e.length;i>a;a++)if(!1===t.call(r,e[a],a,e))return}else for(var n in e)if(e.hasOwnProperty(n)&&!1===t.call(r,e[n],n,e))return},extend:function(e){return e=e||{},a.each(a.toArray(arguments).slice(1),function(t){a.each(t,function(t,r){e[r]=t})}),e},css:function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e.style[r]=t[r])},jsonp:function(r,a,i){function n(){s||(s=!0,d||i(r),o.parentNode.removeChild(o))}var o=e.createElement("script"),d=!1,s=!1,c="callback"+String(Math.random()).slice(2,10);r+=~r.indexOf("?")?"&":"?",r+="callback="+c,t[c]=function(e){s||(t[c]=null,d=!0,a(e))},o.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,setTimeout(n,0))},o.onload=o.onerror=n,o.src=r;var u=e.getElementsByTagName("head")[0]||e.body;u.appendChild(o)},toParams:function(e){var t,r,a=[],i=function(e,t){var r,a=[];if(t===!0?t="1":t===!1&&(t="0"),"function"==typeof t&&(t=t()),null!==t&&"object"==typeof t){for(r in t)t.hasOwnProperty(r)&&null!==t[r]&&a.push(i(e+"["+r+"]",t[r]));return a.join("&")}if("function"!=typeof t)return encodeURIComponent(e)+"="+encodeURIComponent(t);throw new Error};for(r in e)if(e.hasOwnProperty(r)){t=e[r];var n=i(r,t);n&&a.push(n)}return a.join("&")},setHTML:function(t,r){function a(){return s.replace(/<script/g,'<script data-written="1"')}function n(e){function t(){r||(r=!0,s&&e.insertAdjacentHTML("afterend",a()),o())}var r=!1;e.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,setTimeout(t,0))},e.onload=e.onerror=t}function o(){e.write=function(e){s+=e};for(var r=t.getElementsByTagName("script"),i=0;i<r.length;i++){var c=r[i];if(c.getAttribute("data-written")){if("text/rocketscript"===c.type){c.type="text/javascript";var u=c.getAttribute("data-rocketsrc");u&&(c.src=u)}if(!c.type||"text/javascript"==c.type){s="";var l=c.text||c.textContent||c.innerHTML||"",f=e.createElement("script");if(f.type=c.type,f.text=l,c.src&&(f.src=c.src,n(f)),c.parentNode.replaceChild(f,c),f.src)return;if(s){f.insertAdjacentHTML("afterend",a());try{o()}catch(m){console.error(m)}return}}}}e.write=d,t.removeChild(t.firstChild)}if(r){r="<i>&nbsp;</i>"+r,t.innerHTML=r.replace(/<!--script-->/g,"<script").replace(/<!--\/script-->/g,"</script>").replace(/<script/g,'<script data-written="1"');var d=e.write,s="";i.bodyPromise.then(function(){o(t)})}},getOffset:function(r){var a=r.getBoundingClientRect(),i=e.body,n=e.documentElement,o=t.pageYOffset||n.scrollTop||i.scrollTop,d=t.pageXOffset||n.scrollLeft||i.scrollLeft,s=n.clientTop||i.clientTop||0,c=n.clientLeft||i.clientLeft||0,u=a.top+o-s,l=a.left+d-c;return{top:Math.round(u),left:Math.round(l)}},getWindowSize:function(){return{width:t.innerWidth||e.documentElement.clientWidth,height:t.innerHeight||e.documentElement.clientHeight}}};r.prototype={then:function(e,t){this._thens.push({resolve:e,reject:t})},done:function(e){this.then(function(t){e(null,t)},function(t){e(t)})},resolve:function(e){this._complete("resolve",e)},reject:function(e){this._complete("reject",e)},_resolve:function(e){e&&e(this._arg)},_reject:function(e,t){t&&t(this._arg)},_complete:function(e,t){this._arg=t,this.then="resolve"===e?this._resolve:this._reject,this.resolve=this.reject=function(){};for(var r,a=0;r=this._thens[a++];)r[e]&&r[e](t);delete this._thens}};var i={initialized:!1,bodyPromise:new r,uidPromise:new r,places:{},checkBody:function(){e.body?i.bodyPromise.resolve():setTimeout(i.checkBody,1)},guessUid:function(){if(!t.localStorage)return void i.uidPromise.reject(new Error("Local Storage is not supported"));if(!t.postMessage)return void i.uidPromise.reject(new Error("PostMessage is not supported"));a.addEventListener("message",function(e){if(a.getHostName(e.origin)==n.uidHost){var t=e.data.match(/^dumedia-uid=([a-z0-9]*)$/);t&&i.uidPromise.resolve(t[1])}});var r=e.createElement("iframe");r.src="//"+n.uidHost+"/uid/lsb",a.css(r,{width:0,height:0,border:0,display:"none"}),e.body.appendChild(r),setTimeout(function(){i.uidPromise.reject(new Error("timeout"))},2e3),i.uidPromise.done(function(){r.parentNode.removeChild(r)})},buildTrackParameters:function(r,i,n){if(!r)throw new Error("Client code is not defined");var o="dumediaFirstReferrer",d=0,s="",c=t.localStorage;if(c)try{var u=(e.referrer.split("/")[2]||"").replace(/^www\./,"");s=c.getItem(o)||"";var l=e.location.hostname.replace(/^www\./,"");u&&s!==e.referrer&&u!==l&&(c.setItem(o,e.referrer),s=e.referrer,d=1)}catch(f){}var m={clientCode:r,level:i,fsdt:d};switch(m.level){case"main":break;case"category":var p=n.category||n.ad_category||t.ad_category||null;if(!p)throw new Error("ad_category is not defined");m.id=p;break;case"product":var h=n.product||n.ad_product||t.ad_product||null;if(!h)throw new Error("ad_product is not defined");m.id=h.id;break;case"basket":case"buy":var g=n.products||n.ad_products||t.ad_products||[];if(!a.isArray(g))throw new Error("ad_products is not array");m.id=[],m.cnt=[];for(var v=0;v<g.length;v++)m.id.push(g[v].id),m.cnt.push(g[v].number||1);m.id=m.id.join(","),m.cnt=m.cnt.join(","),m.sum=n.ad_amount||t.ad_amount||0,m.orderId=n.ad_order||t.ad_order||""}return m.sourceDomain=a.getHostName(s),m.url=e.location.href,m.referrer=e.referrer,m},initTracks:function(){var e=t._dmTrack||[];"object"==typeof t.dumedia&&t.dumedia.code&&e.push(t.dumedia),t._dmTrack=e,e.push=function(){for(var t=0;t<arguments.length;t++)i.track(arguments[t]);Array.prototype.push.apply(e,Array.prototype.slice.call(arguments))};for(var r=0;r<e.length;r++)i.track(e[r])},track:function(t){var r=i.buildTrackParameters(t.code,t.level,t),o=e.createElement("script");o.src="//"+n.trackHost+"/track?"+a.toParams(r),i.uidPromise.done(function(){e.body.appendChild(o)})},loadAd:function(e){if(!e.dumediaInitialized){e.dumediaInitialized=!0;var t=function(){i.showGag(e)};i.uidPromise.done(function(r,o){var d=i.buildAdParams(e,{jsuid:o||""});a.jsonp("//"+n.adHost+"/dmd/prepare?"+a.toParams(d),function(t){t.error?i.showGag(e,t.html):a.setHTML(e,t.html)},t)})}},buildAdParams:function(t,r){var i={};if(t.getAttribute("data-dumedia-extra")){i.extra={};for(var n=t.getAttribute("data-dumedia-extra").split("&"),o=0;o<n.length;o++){var d=n[o].split("=",2);""!==d[0]&&(i.extra[d[0]]=d[1])}}var s=a.getOffset(t),c=a.getWindowSize();return a.extend({},r,{place:t.getAttribute("data-dumedia-adv")||"",siteCode:t.getAttribute("data-dumedia-site")||"",width:t.getAttribute("data-width")||t.offsetWidth,height:t.getAttribute("data-height")||t.offsetHeight,subid:t.getAttribute("data-dumedia-subid")||"",f:top==self?0:1,vw:c.width,vh:c.height,ox:s.left,oy:s.top,rnd:Math.random(),text:t.getAttribute("data-text")||"",ref:e.location.href},i)},findAdElements:function(){var r=t._dmPlaces;if(r){for(var a=0;a<r.length;a++){var n=r[a];"number"==typeof n&&(n={place:n});var o=e.createElement("div");o.setAttribute("data-dumedia-adv",n.place),o.setAttribute("data-dumedia-subid",n.subid||""),e.body.appendChild(o)}t._dmPlaces=[]}for(var d=e.getElementsByTagName("div"),s=[],a=0,c=d.length;c>a;a++){var u=d[a],l=u.getAttribute("data-dumedia-adv"),f=u.getAttribute("data-dumedia-site");(!l&&f||l&&!i.places[l])&&(s.push(u),l&&(i.places[l]=u))}return s},showGag:function(e,t){for(var r=e.getElementsByTagName("script"),i=0;i<r.length;i++){var n=r[i];if("text/x-dumedia-gag"==n.type){t=n.innerHTML;break}}if("function"==typeof e.dumediaGag){var o=e.dumediaGag(t);"string"==typeof o&&(t=o)}t&&a.setHTML(e,t)},updateAd:function(){for(var e=i.findAdElements(),t=0;t<e.length;t++)i.loadAd(e[t])},run:function(){i.initialized||(i.initialized=!0,i.checkBody(),i.bodyPromise.then(i.guessUid),i.initTracks(),i.bodyPromise.then(function(){setInterval(i.updateAd,1e3),i.updateAd()}))}},n={debug:!1,uidHost:"track.dumedia.ru",trackHost:"track.dumedia.ru",adHost:"ad.dumedia.ru"};if(n=a.extend(n,t.dumedia_config),i.run(),t.localStorage){var o=t.localStorage,d=a.parseQueryString(e.location.search.slice(1)),s=o.__lastUtm||"",c=o.__lastPage||"",u=+o.__lastVisitTimestamp||0;m="";var l=(new Date).getTime();if(o.__lastVisitTimestamp=l,d.utm_medium){var f={medium:d.utm_medium,campaign:d.utm_campaign,source:d.utm_source,content:d.utm_content},m=a.toParams(f),p=m!==s;if(6e4>l-u&&p){var h={time:l-u,to:f,isFrame:self!=top?1:0,page:e.location.href,lastPage:c,referrer:e.referrer};s&&(h.from=a.parseQueryString(s)),(new Image).src="//track.dumedia.ru/track/utm?"+a.toParams(h)}o.__lastUtm=m}o.__lastPage=e.location.href}}(document,window);