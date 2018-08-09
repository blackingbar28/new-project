!function(){"use strict";function e(e){if("true"===e)return!0;if("false"===e)return!1;var t=parseFloat(e);return isNaN(t)?e:t}function t(e){var t=Object.keys(e).filter(function(t){return"pre"===e[t].offset||!e[t].offset});return t.length?t[0]:null}function i(){return R}function n(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function r(e,t){var i=void 0,n=new Promise(function(e){i=e}),r=document.getElementsByTagName("head")[0]||document.documentElement,a=document.createElement("script");return a.src=e,a.onload=a.onreadystatechange=function(e){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(i(e),a.onload=a.onreadystatechange=null,r&&a.parentNode&&r.removeChild(a))},a.onerror=function(){i("Error loading script")},r.insertBefore(a,r.firstChild),setTimeout(function(){i()},t),n}function a(e,t,i){return e?["https://an.facebook.com/v2/placementbid.json?&placementids[]="+e,"&playerwidth="+t,"&playerheight="+i,"&adformats[]="+V,"&sdk="+U,"&pageurl="+W].join(""):null}function o(e,t,i,n){return["https://an.facebook.com/v1/instream/vast.xml?placementid="+e,"&playerwidth="+i,"&playerheight="+n,"&sdk="+U,"&bidid="+t,"&pageurl="+W].join("")}function s(e,t,i,n){return!!n&&(!!e||!(!t||"usd"!==i))}function d(e,t){var i=e.xhttpFAN,n=e.settings,r=e.bidders.FAN.placementId,d=e.tag,l=n.floorPriceCents,u=n.playerWidth,h=n.playerHeight,c=a(r,u,h),p=e.bidders.APS,g=e.mediationLayer||p.pubID&&p.slotID;if(!s(g,l,n.floorPriceCurrency,c))return t({error:!0,message:"Invalid config"});i.onreadystatechange=function(){if(4===this.readyState){if(clearTimeout(e.currentTimeout),200!==this.status)return t({error:!0,message:"Invalid response (status "+this.status+")"});var i=JSON.parse(this.responseText),n=i.errors;if(n&&n.length)return t({error:!0,message:n[0]});var a=i.bids;if(!a||!a[r]||!a[r][0])return t({error:!0,message:"No bids for placement id"});var s=a[r][0],c=s.bid_price_cents,p=s.bid_id;if(g){var f=Math.round(c/100);return t({tag:d,custParams:{jwFANBidPrice:f,jwFANBidID:p}})}var m=s.bid_price_currency,v=c>l,y={bidWon:v,priceCents:c,priceCurrency:m};return v?(y.tag=o(r,p,u,h),t(y)):t(y)}},i.open("GET",c),i.withCredentials=!0,i.send(null)}function l(e,t){var i=e.bidders.APS;if(!i.pubID||!i.slotID)return t({error:!0,message:"Invalid config"});z().then(function(){return apstag.init({pubID:i.pubId,adServer:i.adServer}),apstag.fetchBids({slots:[{slotID:i.slotID}],timeout:e.settings.bidTimeout},function(n){return t(n&&n[0]&&n[0].slotID===i.slotID?{tag:e.tag,custParams:{amznbid:n[0].amznbid,amzniid:n[0].amzniid}}:{error:!0,message:"No bids for pubID and slotID"})})}).catch(function(){t({error:!0,message:"Amazon header bidding failed"})})}function u(e,t){var i=n({videoCommonArgs:{protocols:[2,3,5,6],mimes:["video/mp4","video/webm","application/javascript"],apiList:[1,2]}},e.bidders.index);if(!i.script&&!i.siteID&&!window.indexapi)return t({error:!0,message:"Invalid config"});setTimeout(function(){t({error:!0,message:"Index Exchange header bidding request failed"})},e.settings.bidTimeout),G().then(function(){var n=function(i,n){if(void 0!==n)return t({tag:e.tag,custParams:n});t({error:!0,message:"Index Exchange header bidding request failed"})};window.indexapi=window.indexapi||{},window.indexapi.deferQueue=window.indexapi.deferQueue||[],window.indexapi.deferQueue.push(function(){window.indexapi.solicitIndexVideoAds(e.tag,n,i)})}).catch(function(){t({error:!0,message:"Index Exchange header bidding failed"})})}function h(e){for(var t=[d,l,u],i=[],r=0;r<t.length;r++){var a=void 0,o=new Promise(function(e){a=e});i.push(o),t[r](e,a)}Promise.all(i).then(function(t){for(var i=[],r=[],a={},o=0;o<t.length;o++){var s=t[o];s.error?r.push(s.message):(i.push(s),n(a,s.custParams))}return i.length?1===i.length?e.resolve(i[0]):e.resolve({tag:e.tag,custParams:a}):e.resolve({error:!0,messages:r})})}function c(e,t,i){return n({bidTimeout:q,playerWidth:t,playerHeight:i},e)}function p(e){var t={FAN:n({},e.FAN),APS:n({},e.APS)};return e.index&&(t.index=e.index),t}function g(e){var t=this;t.video=e,t.blocked=!1;var i={};for(var n in e)!function(n){"function"==typeof e[n]?i[n]={get:function(){return function(){var e=t.video[n];if(e){if("pause"===n&&t.blocked)return;return e.apply(t.video,arguments)}}}}:i[n]={get:function(){return t.video[n]},set:function(e){t.video[n]=e}}}(n);Object.defineProperties(this,i)}function f(){var e=window.location.href.match(new RegExp(/^[^/]*:\/\/\/?([^/]*)/));return e&&e.length>1?e[1]:""}function m(e,t){var i=Math.pow(10,t);return Math.round(e*i)/i}function v(e){return-1!==e.indexOf("?")?"&":"?"}function y(e,t,i){if(!e)return e;for(var n=t.getPlaylistItem(),r=t.getConfig(),a=e.replace("__random-number__",Math.random()*Math.pow(10,18)).replace("__timestamp__",(new Date).getTime()).replace("__page-url__",encodeURIComponent(window.location.href)).replace("__referrer__",encodeURIComponent(document.referrer)).replace("__player-height__",t.getHeight()||r.height).replace("__player-width__",t.getWidth()||r.width).replace("__item-duration__",m(t.getDuration(),3)).replace("__domain__",encodeURIComponent(f())),o=(a=i.companiondiv&&i.companiondiv.id?a.replace("__companion-div__",i.companiondiv.id):a.replace("__companion-div__","")).match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g)),s=0;o&&s<o.length;s++){var d=o[s],l=d.substring(7,d.length-2);if(n.hasOwnProperty(l)&&t._.isString(n[l])){var u=n[l];u.length>1e3&&(u=u.substring(0,1e3)),a=a.replace(d,encodeURIComponent(u))}else a=a.replace(d,"")}if(n.title&&-1===a.indexOf("vid_t=")){var h=n.title.substring(0,100).replace(/[^\x00-\x7F]/g,"");a+=v(a)+"vid_t="+encodeURIComponent(h)}return a}function b(e,t,i){if("start"===e||"0%"===e)return"pre";if("end"===e||"100%"===e)return"post";if("pre"===e||"post"===e||i.indexOf(e,"%")>-1)return e;var n=t.seconds(e);return!!i.isNumber(n)&&n}function A(e){var t=parseInt(e,10),i=Math.floor(t)%1e3,n=Math.floor(t/1e3)%60,r=Math.floor(t/6e4)%60,a=Math.floor(t/36e5)%24;return a=a<10?"0"+a:a,r=r<10?"0"+r:r,n=n<10?"0"+n:n,i=("000"+i).slice(-3),a+":"+r+":"+n+"."+i}function P(e,t,i){var n=b(e,t,i);return n||(n="pre"),i.isNumber(n)&&(n=A(1e3*n)),n}function w(e,t,i){if(!i)return e;var n=e.indexOf("?")>=0?"&":"?",r=e.indexOf("cust_params="),a="cust_params=".length,o="",s="";if(t.foreach(i,function(e,t){o=""+o+s+e+"="+t,s="&"}),o=encodeURIComponent(o),r>=0){var d=e.substr(0,r+a),l=e.substr(r+a);return""+d+o+"%26"+l}return""+e+n+"cust_params="+o}function E(e,t,i){var n={};return t.foreach(e,function(e,r){var a={},o=r.ad||r;a.offset=P(o.offset||o.position||r.offset||"",t,i),a.tag=w(o.tag,t,o.custParams),a.type=o.type||r.type||"linear,nonlinear",n[e]=a}),n}function M(e){return new Array(e+1).join((Math.random().toString(36)+"00000000000000000").slice(2,18)).slice(0,e)}function _(e){try{return e.getAdPodInfo()}catch(e){return null}}var C="adCompanions",I="adStarted",L=2e3,T=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},k={adcountercountkey:"__AD_POD_CURRENT__",adcounterdynamic:"Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ",adcountertotalkey:"__AD_POD_LENGTH__",admessage:"This ad will end in xx",admessagedynamickey:"xx",admessagestatic:"This is an Advertisement",advideoheight:0,advideowidth:0,allowadskip:!1,allowadskippastseconds:0,allowplayercontrols:!1,allowvolumeslider:!1,autoplayadsmuted:!1,click_tracking:!0,companiondiv:null,companionResourceType:"",cuetext:"Advertisement",debug:!1,enablePreloading:!1,invertmutebutton:!1,loadVideoTimeout:15e3,locale:"",overlayslotheight:0,overlayslotwidth:0,premiumAds:!1,scaled_ads:!0,usestaticmessage:!1,vpaidcontrols:!1,vpaidmode:"insecure"},x=function(){function i(t,n){T(this,i),this.config=t,this.utils=n;for(var r in k)if(k.hasOwnProperty(r)){var a=t[r],o=k[r],s=typeof o;if(void 0!==a){if("boolean"!==s&&"number"!==s||(a=e(a)),typeof a!==s)throw new Error("invalid parameter: "+r+" should be a "+s);this[r]=a}else this[r]=o}this.admessagedynamic=this.admessage}return i.prototype.getPrerollBlock=function(){var e=this.getConfigSchedule(),i=this.bidsResponse;if("string"==typeof e){if(!i)return e;var n=i.custParams;if(n){var r="jwFANBidPrice="+n.jwFANBidPrice+"&jwFANBidID="+n.jwFANBidID,a=i.tag.indexOf("?")>=0?"&":"?";return""+i.tag+a+r}return i.tag}var o=t(e);if(!o)return null;var s=this.utils.extend({},e[o]);return i&&(s.tag=i.tag,s.custParams=this.utils.extend({},s.custParams,i.custParams)),s},i.prototype.addBidsResponse=function(e){e&&!e.error&&(e.bidWon||e.tag)?this.bidsResponse=e:this.bidsResponse=null},i.prototype.getSchedule=function(){var e=this.utils.extend({},this.getConfigSchedule());if(!this.bidsResponse)return this.getConfigSchedule();var i=this.getPrerollBlock();return"string"==typeof i?i:(e[t(e)]=i,e)},i.prototype.getConfigSchedule=function(){var e=this.config;return e.tag||this.adschedule||e.schedule||e.ad},i}(),S=function(){function e(t,i,n){T(this,e);var r=document.createElement("div");this.visible=!1,this.style=n,this.div=t,this.adDiv=r,r.id=i+"_ad",n(t,{overflow:"hidden",width:"100%",height:"100%",display:"block",visibility:"hidden",pointerEvents:"none",opacity:0}),n(r,{position:"absolute",width:"100%",height:"100%"}),t.appendChild(r)}return e.prototype.resizeNonLinear=function(e,t){this.style(this.div,{height:t+"px",top:"auto",width:"100%"})},e.prototype.resizeLinear=function(){this.style(this.div,{top:"0px",left:"0px",width:"100%",height:"100%"})},e.prototype.getAdDiv=function(){return this.adDiv},e.prototype.adSetup=function(){this.visible=!0,this.style(this.div,{visibility:"visible",display:"block",pointerEvents:"all",opacity:1},!0);for(var e=this.adDiv.childNodes,t=0;t<e.length;t++){var i=e[t];("DIV"!==i.tagName||i.hasChildNodes())&&this.style(i,{width:"100%",height:"100%"})}},e.prototype.adTakeDown=function(){this.visible=!1,this.style(this.div,{visibility:"hidden",pointerEvents:"none",opacity:0});for(var e=this.adDiv.childNodes,t=0;t<e.length;t++)this.style(e[t],{width:"",height:""})},e}(),D=null,R=-1,O=function(e){if(D)return D;var t=["//","imasdk.googleapis.com/js/sdkloader/ima3.js"];return"file:"===document.location.protocol&&t.unshift("https:"),D=new Promise(function(i,n){window.google&&google.ima&&google.ima.AdDisplayContainer?i():new e.scriptloader(t.join("")).on("complete",function(){R=Date.now(),i(google.ima)}).on("error",function(e){return n(e)}).load()})},j={},N=function(e,t){var i=this,n=j[t];return n||(function(e,t){e.jwplayerEntitlements=t()}(this,function(){return function(e,t,i){var n={canPlayAds:!0},r=new e.key(t);if("unlimited"===r.edition())return i(n);var a=["//","entitlements.jwplayer.com","/",r.token(),".json"];"file:"===window.location.protocol&&a.unshift("https:"),e.ajax(a.join(""),function(e){n.canPlayAds=!e||!e.response||!1!==e.response.canPlayAds,i(n)},function(){i(n)},{timeout:1e4,responseType:"json"})}}),j[t]=new Promise(function(n,r){i.jwplayerEntitlements(e,t,function(e){e.canPlayAds?n():r({message:"Ad Limit Reached"})})}))},B=function(){function e(t,i,n){T(this,e),t.extend(this,i),this.vol=0,this.imaProxy=null,this.view=n}return e.prototype.setProxy=function(e){this.imaProxy=e,"boolean"==typeof this.muted&&this.mute(this.muted)},e.prototype.attachMedia=function(){},e.prototype.detachMedia=function(){},e.prototype.mute=function(e){this.muted=e,this.imaProxy&&(e?this.imaProxy.setVolume(0):this.vol&&this.imaProxy.setVolume(this.vol),this.muteAllAdContainerVideo(e))},e.prototype.muteAllAdContainerVideo=function(e){for(var t=this.view.getAdDiv().getElementsByTagName("video"),i=0;i<t.length;i++)t[i].muted=e},e.prototype.volume=function(e){this.vol=e/100,this.imaProxy&&this.imaProxy.setVolume(this.vol)},e}(),q=1e3,V="video",U="2962993",F=null,z=function(){if(F)return F;var e=["//","//c.amazon-adsystem.com/aax2/apstag.js"];return"file:"===document.location.protocol&&e.unshift("https:"),F=new Promise(function(t){if(!(window.apstag&&apstag.init&&apstag.fetchBids))return r(e.join(""),1e3).then(function(){t()});t()})},H=null,G=function(e){if(H)return H;var t=["//",e||"js-sec.indexww.com/htv/htv-jwplayer.min.js"];return"file:"===document.location.protocol&&t.unshift("https:"),H=new Promise(function(e){if(!window.indexapi)return r(t.join(""),1e3).then(function(){e()});e()})},W=encodeURIComponent(window.location.href),Q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{settings:{},bidders:{}},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;T(this,e),this.tag=i,this.mediationLayer=t.mediationLayerAdServer,this.settings=c(t.settings,r,a),this.bidders=p(t.bidders),this.xhttpFAN=new XMLHttpRequest,this.request=new Promise(function(e){n.resolve=e}),t.bidders.APS&&t.bidders.APS.pubID&&t.bidders.APS.slotID&&z(),t.bidders.index&&(t.bidders.index.script||t.bidders.index.siteID)&&G(t.bidders.index.script),this.currentTimeout=null}return e.prototype.start=function(){return this.start=function(){return this.request},h(this),this.request},e.prototype.stop=function(){clearTimeout(this.currentTimeout),this.xhttpFAN&&(this.xhttpFAN.abort(),this.xhttpFAN=null),this.resolve({error:!0,message:"Request aborted"})},e.prototype.then=function(e){return this.request.then(e,e)},e.prototype.timeout=function(){var e=this;clearTimeout(this.currentTimeout),this.currentTimeout=setTimeout(function(){e.currentTimeout=null,e.resolve&&e.resolve({error:!0,message:"Response timeout"})},this.settings.bidTimeout)},e}(),K=function(){function e(t,i,n,r,a,o){T(this,e),n.utils.extend(this,n.Events),this.item=t,this.options=i,this.player=n,this.env=n.getEnvironment(),this.utils=n.utils,this.instreamProvider=r,this.view=a,this.initAdsManagerPromise=null,this.bidsPromise=null,this.blockingInstreamPlayer=null,this.mobilePlayCallback=null,this.currentAd=null,this.bids=null,this.timeoutAdStart=-1,this.progressIntervalId=-1,this.video=n.getContainer().querySelector("video"),this.fullscreenIcon=n.getContainer().querySelector(".jw-icon-fullscreen"),this.adsLoaderManager=o,this.playbackProxy={currentTime:0,duration:0},this.isItemSchedule=!0,this.paused=!1,this.pausedByViewable=!1,this._qoe=new n.utils.Timer}return e.prototype.init=function(e,t){var i=this,n=t.getPrerollBlock();if(!this.player.getConfig().autostart&&n){var r="string"!=typeof n,a=r?n.bids:t.config.bids,o=r?n.tag:n;this.bids=new Q(a,o,this.player.getWidth(),this.player.getHeight()),this.bids.start()}else this.bids=Promise.resolve();this.bidsPromise=this.bids.then(function(e){if(i.destroyed())return null;t.addBidsResponse(e)}),this.initAdsManagerPromise=this.bidsPromise.then(O).then(function(){return i.destroyed()?null:i.adsLoaderManager.open(e,t,i.player,i.options)}).then(function(e){if(i.destroyed())return null;var t=i.playbackProxy,n=i.adsLoaderManager,r=n.getAdsManager(e,t,i.options);i.instreamProvider.setProxy(r),i.muteInstreamProvider();var a=i.player.getSafeRegion(!1);if(r.init(a.width,a.height,i.getViewMode()),n.initializeDisplay(),n.bindEvents({LOADED:i.adLoaded.bind(i),AD_ERROR:i.adError.bind(i),CONTENT_PAUSE_REQUESTED:i.prepareToPlayAd.bind(i),CONTENT_RESUME_REQUESTED:i.resumeRequested.bind(i),LOG:i.adLog.bind(i),STARTED:i.adStarted.bind(i),IMPRESSION:i.adImpression.bind(i),LINEAR_CHANGED:i.resize.bind(i),CLICK:i.adClick.bind(i),PAUSED:i.adPaused.bind(i),RESUMED:i.adResumed.bind(i),SKIPPED:i.adSkipped.bind(i),USER_CLOSE:i.adUserClose.bind(i),ALL_ADS_COMPLETED:i.allAdsCompleted.bind(i)}),i.isItemSchedule){var o=r.getCuePoints();if("string"==typeof n.schedule||o.length&&0===o[0]||i.stopBlocking(),o.length){var s=o.filter(function(e){return e>0}).map(function(e){return{begin:e,text:i.options.cuetext}});i.player.setCues(s)}}return r}).catch(function(e){return i.asyncError(e),Promise.reject(e)})},e.prototype.getViewMode=function(){var e=google.ima.ViewMode;return this.player.getFullscreen()?e.FULLSCREEN:e.NORMAL},e.prototype.waitForPlaybackOnMobile=function(){return this.video&&this.env.OS.mobile&&!this.video.__jwMobileCanPlay&&(this.player.isBeforePlay()||0===this.video.currentTime)},e.prototype.prepareToPlayAd=function(){this.destroyed()||this.blockingInstreamPlayer||(clearTimeout(this.timeoutAdStart),this.video&&this.env.OS.iOS&&(this.video.controls=!1),this.waitForPlaybackOnMobile()?(this.mobilePlayCallback=this.getMobilePlayCallback(),this.video.addEventListener("play",this.mobilePlayCallback)):this.startBlocking())},e.prototype.muteInstreamProvider=function(){var e=this.video&&this.video.muted||this.player.getMute()||0===this.adsLoaderManager.adsManager.getVolume();this.instreamProvider.mute(e)},e.prototype.getMobilePlayCallback=function(){var e=this,t=function(i){i.currentTarget.removeEventListener("play",t),i.currentTarget.__jwMobileCanPlay=!0,e.mobilePlayCallback=null,e.startBlocking(),e.bidsPromise.then(O).then(function(){e.destroyed()||e.adsLoaderManager.requestAds()})};return t},e.prototype.exitFullscreenOnInlineIOS=function(){this.env.OS.iOS&&(this.env.Browser.version.major<10||(this.player.setFullscreen(!1),this.utils.style(this.fullscreenIcon,{display:"none"})))},e.prototype.startBlocking=function(){var e=this;this.blockingInstreamPlayer||this.destroyed()||(this.exitFullscreenOnInlineIOS(),this.options.premiumAds&&this.player.on("viewable",function(t){t.viewable?e.pausedByViewable&&e.player.play():e.paused||(e.player.pause(),e.pausedByViewable=!0)},this),this._qoe.tick("adLoading"),this.player.utils.addClass(this.player.getContainer(),"jw-flag-ads-googleima"),this.adsLoaderManager&&this.adsLoaderManager.videoProxy&&this.adsLoaderManager.videoProxy.unblock(),this.blockingInstreamPlayer=this.player.createInstream().init(),this.blockingInstreamPlayer.setText("Loading"),this.blockingInstreamPlayer.applyProviderListeners(this.instreamProvider),this.initAdsManagerPromise.then(function(e){e.start()}).catch(function(){}),clearTimeout(this.timeoutAdStart),this.timeoutAdStart=setTimeout(function(){e.destroyed()||(e.stopBlocking(),e.asyncDiscardAdBreak())},1e4))},e.prototype.stopBlocking=function(){this.destroyed()||(this.player.off("viewable",null,this),clearTimeout(this.timeoutAdStart),this.utils.style(this.fullscreenIcon,{display:""}),this.player.utils.removeClass(this.player.getContainer(),["jw-flag-ads-vpaid","jw-flag-ads-googleima"]),this.mobilePlayCallback&&(this.video&&this.video.removeEventListener("play",this.mobilePlayCallback),this.mobilePlayCallback=null),this.blockingInstreamPlayer&&(this.adsLoaderManager&&this.adsLoaderManager.videoProxy&&this.adsLoaderManager.videoProxy.block(),this.instreamProvider.off(),this.blockingInstreamPlayer.destroy(),this.blockingInstreamPlayer=null,this.view.adTakeDown()))},e.prototype.resumeRequested=function(){this.currentAd&&this.currentAd.isLinear()&&(this.finishAd(),this.view.adTakeDown()),this.stopBlocking()},e.prototype.finishAd=function(){this.currentAd&&(clearInterval(this.progressIntervalId),this.currentAd=null)},e.prototype.discardAdBreak=function(e){!e&&this.adsLoaderManager&&(e=this.adsLoaderManager.adsManager),!this.destroyed()&&e&&(e.discardAdBreak(),e.stop())},e.prototype.asyncDiscardAdBreak=function(){var e=this;this.initAdsManagerPromise.then(function(t){return e.discardAdBreak(t)}).catch(function(){})},e.prototype.pause=function(){this.pausedByViewable=!1;var e=this.adsLoaderManager.adsManager;e&&e.pause()},e.prototype.resume=function(){this.pausedByViewable=!1;var e=this.adsLoaderManager.adsManager;e&&e.resume()},e.prototype.beforePlay=function(e){var t=this;this.bids&&this.bids.timeout&&this.bids.timeout(),this.player.off("beforePlay",null,this),this.isItemSchedule=!!e,this.prepareToPlayAd(),this.adsLoaderManager.initializeDisplay(),this.waitForPlaybackOnMobile()||this.bidsPromise.then(O).then(function(){t.destroyed()||t.adsLoaderManager.requestAds()})},e.prototype.beforeComplete=function(){var e=this.adsLoaderManager.adsManager;e&&e.getCuePoints().indexOf(-1)>-1&&this.prepareToPlayAd(),this.adsLoaderManager.unbindEvents(["CONTENT_RESUME_REQUESTED"]),this.playbackProxy.currentTime=this.playbackProxy.duration,this.adsLoaderManager.contentComplete()},e.prototype.time=function(e){this.playbackProxy.currentTime=e.position,e.duration>=e.position?this.playbackProxy.duration=e.duration:this.playbackProxy.duration=1/0},e.prototype.resize=function(){var e=this.currentAd,t=this.adsLoaderManager.adsManager;if(t){var i=e&&!e.isLinear(),n=this.player.getSafeRegion(i);if(i){var r=e.getHeight();r=this.player.getFullscreen()?n.height/2:Math.max(100,r+10),t.resize(n.width,r,this.getViewMode()),this.view.resizeNonLinear(n,r)}else t.resize(n.width,n.height,this.getViewMode()),this.view.resizeLinear()}},e.prototype.triggerAdPlay=function(e,t,i,n){if(e.isLinear()){this.instreamProvider.trigger("state",{newstate:i,oldstate:n});var r=this.adsLoaderManager.adEventObject(e);r.oldstate=n,r.newstate=i,this.trigger(t,r)}},e.prototype.progressInterval=function(e,t){var i=this;if(clearInterval(this.progressIntervalId),t){var n=e.getAdId(),r=e.getAdPodInfo(),a=-1,o=this.options.admessage||"",s=new RegExp(this.options.admessagedynamickey,"g"),d=this.options.adcounterdynamic||"",l=new RegExp(this.options.adcountercountkey,"g"),u=new RegExp(this.options.adcountertotalkey,"g");this.progressIntervalId=setInterval(function(){if(i.currentAd&&i.currentAd.getAdId()===n){var h=t.getRemainingTime();if(!(isNaN(h)||h<=0)&&a!==h){a=h;var c=e.getDuration(),p=c-h;if(i.blockingInstreamPlayer){var g=o.replace(s,Math.round(c-p)),f=r.getTotalAds();if(f>1){var m=r.getAdPosition();g=d.replace(l,m).replace(u,f)+"  "+g}i.blockingInstreamPlayer.setText(g),i.instreamProvider.trigger("time",{duration:c,position:p})}if(c>0){var v=i.adsLoaderManager.adEventObject(e);v.position=p,v.duration=c,i.trigger("adTime",v)}}}else clearInterval(i.progressIntervalId)},250)}},e.prototype.adLoaded=function(e){this.muteInstreamProvider();var t=this.adsLoaderManager.adEventObject(e.getAd());this.trigger("adRequest",t)},e.prototype.adStarted=function(e){var t=e.getAd(),i=this.adsLoaderManager.adEventObject(t);this.trigger(I,i)},e.prototype.adImpression=function(e){var t=this,i=e.getAd(),n=i.isLinear(),r=n&&-1===i.getDuration(),a=i.getContentType(),o="application/javascript"===a||"application/x-shockwave-flash"===a,s=n&&o&&this.options.vpaidcontrols;this.currentAd=i,this.adsLoaderManager.bindEvents({COMPLETE:this.adComplete.bind(this)}),o&&this.env.OS.mobile&&this.options.autoplayadsmuted&&this.adsLoaderManager.bindEvents({VOLUME_CHANGED:function(){t.adsLoaderManager.unbindEvents(["VOLUME_CHANGED"]),t.player.setMute(!!t.adsLoaderManager.adsManager.getVolume())}}),r?this.startBlocking():n||this.stopBlocking(),this.player.utils.toggleClass(this.player.getContainer(),"jw-flag-ads-vpaid",n&&(r||o)),this.player.utils.toggleClass(this.player.getContainer(),"jw-flag-ads-vpaid-controls",s),this.view.adSetup(),this.resize(),this.muteInstreamProvider(),clearTimeout(this.timeoutAdStart);var d=this.adsLoaderManager.adsManager;this.progressInterval(i,d);var l=this.adsLoaderManager.adEventObject(i);if("pre"===l.adposition&&(void 0===l.podcount||1===l.sequence)){this._qoe.tick("adImpression");var u=this._qoe.between("adLoading","adImpression");l.timeLoading=u}this.trigger("adImpression",l),this.triggerAdPlay(i,"adPlay","playing","buffering")},e.prototype.adComplete=function(e){this.finishAd();var t=e.getAd(),i=this.adsLoaderManager.adEventObject(t);this.trigger("adComplete",i),this.adsLoaderManager.unbindEvents(["VOLUME_CHANGED"])},e.prototype.adClick=function(e){var t=this.adsLoaderManager.adsManager,i=e.getAd(),n=i.getContentType();"application/javascript"===n||"application/x-shockwave-flash"===n||t.pause();var r=this.adsLoaderManager.adEventObject(i);this.trigger("adClick",r),this.pausedByViewable=!1},e.prototype.adPaused=function(e){this.paused||(this.paused=!0,this.triggerAdPlay(e.getAd(),"adPause","paused","playing"))},e.prototype.adResumed=function(e){this.paused&&(this.paused=!1,this.triggerAdPlay(e.getAd(),"adPlay","playing","paused"))},e.prototype.adSkipped=function(e){this.adsLoaderManager.unbindEvents(["COMPLETE","VOLUME_CHANGED"]),this.finishAd();var t=this.adsLoaderManager.adEventObject(e.getAd());this.trigger("adSkipped",t)},e.prototype.adUserClose=function(e){this.currentAd&&this.currentAd.isLinear()&&-1===this.currentAd.getDuration()?this.adSkipped(e):(this.adsLoaderManager.unbindEvents(["COMPLETE","VOLUME_CHANGED"]),this.finishAd())},e.prototype.allAdsCompleted=function(){this.resumeRequested(),this.view.adTakeDown(),this.stopAdsManager()},e.prototype.stopAdsManager=function(){var e=this;this.initAdsManagerPromise.then(function(t){e.destroyed()||(t.stop(),t.destroy(),e.initAdsManagerPromise=null,e.bidsPromise=null)}).catch(function(){})},e.prototype.adLog=function(e){var t=e.getAdData();if(t&&t.adError){var i=this.adsLoaderManager.adErrorEventObject(t.adError,e);402===i.code?this.handleAdError(t.adError,i):this.trigger("adError",i)}},e.prototype.adError=function(e){var t=e.getError();this.handleAdError(t,e)},e.prototype.asyncError=function(e){var t=this;this.destroyed()||(e&&e.getError?this.adError(e):e.target&&e.target.src?console.error("Failed to load "+e.target.src):console.error(e),this.timeoutAdStart=setTimeout(function(){return t.destroy()},0))},e.prototype.handleAdError=function(e,t){var i=this;this.options.debug&&console.error(e),900===e.getErrorCode()?this.timeoutAdStart=setTimeout(function(){return i.destroy()},0):(this.stopBlocking(),this.view.adTakeDown());var n=this.adsLoaderManager.adErrorEventObject(e,t);this.trigger("adError",n)},e.prototype.destroy=function(){if(this.off(),!this.destroyed()){this.player.off(null,null,this),this.bids&&this.bids.stop&&(this.bids.stop(),this.bids=null),clearTimeout(this.timeoutAdStart),clearInterval(this.progressIntervalId),this.currentAd=null,this.options=null,this.video=null,this.initAdsManagerPromise=null,this.bidsPromise=null;var e=this.adsLoaderManager;if(e){var t=e.adsManager;t&&t.isCustomPlaybackUsed(),e.reset(),this.adsLoaderManager=null}this.blockingInstreamPlayer&&this.stopBlocking(),this.instreamProvider.off(),this.instreamProvider.setProxy(null),this.instreamProvider=null,this.view.adTakeDown(),this.view=null,this.player=null,this.item=null}},e.prototype.destroyed=function(){return!this.item},e}();!function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}(g.prototype,{block:function(){this.blocked=!0},unblock:function(){this.blocked=!1}});var J=function(){function e(t,i){T(this,e),this.player=t,this.options=i}return e.prototype.getAdsResponse=function(e){var t=this,i=this.player,n=i.utils,r='<vmap:AdBreak breakType="_type_" breakId="_adbreakname_" timeOffset="_offset_"><vmap:AdSource allowMultipleAds="true" followRedirects="true" id="_adbreakname_-ad-1"><vmap:AdTagURI><![CDATA[_url_]]></vmap:AdTagURI></vmap:AdSource></vmap:AdBreak>',a=[],o=[],s=[];return n.foreach(E(e,n,i._),function(e,n){var d=n.offset.replace("pre","start").replace("post","end"),l=r.replace(/_type_/g,n.type).replace(/_adbreakname_/g,e).replace(/_offset_/g,d).replace(/_url_/g,y(n.tag,i,t.options,n.custParams));"start"===d?a.push(l):"end"===d?s.push(l):o.push(l)}),'<vmap:VMAP xmlns:vmap="http://www.iab.net/videosuite/vmap" version="1.0">'+a.join("")+o.join("")+s.join("")+"</vmap:VMAP>"},e.prototype.getTagMap=function(e){var t=this,i=this.player,n=i.utils,r={};return n.foreach(E(e,n,i._),function(e,a){var o=b(a.offset,n,i._);i._.isString(o)&&(o=parseFloat(o.replace("pre","0").replace("post","-1"))),i._.isNumber(o)&&(r[o]=y(a.tag,i,t.options))}),r},e.prototype.getTagList=function(e){var t=this,i=this.player,n=i.utils,r=[];return n.foreach(E(e,n,i._),function(e,a){var o=b(a.offset,n,i._);i._.isString(o)&&(o=parseFloat(o.replace("pre","0").replace("post","-1"))),r.push({offset:o,tag:y(a.tag,i,t.options)})}),r},e}(),Y=function(){function e(t){T(this,e),this.adsLoader=null,this.adDisplayContainer=null,this.displayInitialized=!1,this.adsRequest=null,this.userRequestContext=null,this.adsManager=null,this.adsManagerEvents={},this.container=t,this.adIds={},this.schedule=null,this.tagMap={},this.playerApi=null,this.videoProxy=null}return e.prototype.getVpaidMode=function(e){var t=google.ima.ImaSdkSettings.VpaidMode;return"disabled"===e||"none"===e?t.DISABLED:"enabled"===e?t.ENABLED:t.INSECURE},e.prototype.initializeDisplay=function(){this.videoProxy&&this.videoProxy.unblock(),!this.displayInitialized&&this.adDisplayContainer&&(this.adDisplayContainer.initialize(),this.displayInitialized=!0)},e.prototype.contentComplete=function(){if(null!==this.adsRequest){var e=this.adsLoader;e&&e.contentComplete(),this.adsRequest=null}},e.prototype.reset=function(){this.userRequestContext=null,this.contentComplete(),this.schedule=null,this.videoProxy&&this.videoProxy.block();var e=this.adsManager;e&&(e.destroy(),this.adsManager=null),this.adsManagerEvents={},this.adIds={},this.tagMap={}},e.prototype.prepare=function(e){google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0);var t=this.adsLoader;if(!t){var i=e.getContainer().querySelector("video");this.videoProxy=new g(i),this.adDisplayContainer=new google.ima.AdDisplayContainer(this.container,this.videoProxy),t=this.adsLoader=new google.ima.AdsLoader(this.adDisplayContainer)}return t},e.prototype.open=function(e,t,i,n){t.locale&&google.ima.settings.setLocale(t.locale);var r=this.prepare(i);this.playerApi=i;var a={requestType:e,vpaidMode:t.vpaidmode,playerVersion:i.version.split("+")[0]};this.userRequestContext=a;var o=t.getSchedule();if(!o)return Promise.reject();var s=new google.ima.AdsRequest,d=i.getSafeRegion(!1);s.linearAdSlotWidth=d.width,s.linearAdSlotHeight=d.height;var l=i.getSafeRegion(!0);s.nonLinearAdSlotWidth=l.width,s.nonLinearAdSlotHeight=l.height,s.setAdWillAutoPlay(i.getConfig().autostart&&!i.getEnvironment().OS.mobile),s.forceNonLinearFullSlot=n.forceNonLinearFullSlot,this.adsRequest=s;var u=new J(i,n);if("object"==typeof o){var h=u.getTagList(o);1===h.length&&0===h[0].offset&&(o=h[0].tag)}return"string"==typeof o?o=s.adTagUrl=a.adTagUrl=y(o,i,n):(s.adsResponse=a.adsResponse=u.getAdsResponse(o),this.tagMap=u.getTagMap(o)),this.schedule=o,new Promise(function(e,t){r.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,t,!1),r.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,e,!1)})},e.prototype.requestAds=function(){var e=this.adsLoader,t=this.userRequestContext,i=this.getVpaidMode(t.vpaidMode),n=e.getSettings();n.setPlayerType("jwplayer"),n.setPlayerVersion(t.playerVersion),n.setVpaidMode(i),e.requestAds(this.adsRequest,t)},e.prototype.getAdsManager=function(e,t,i){var n=new google.ima.AdsRenderingSettings;return n.loadVideoTimeout=i.loadVideoTimeout,n.enablePreloading=i.enablePreloading,n.uiElements=null,n.autoAlign=!0,n.useStyledNonLinearAds=!0,this.adsManager=e.getAdsManager(t,n),this.userRequestContext=e.getUserRequestContext(),this.adsManager},e.prototype.bindEvents=function(e){var t=this,i=google.ima.AdEvent.Type,n=google.ima.AdErrorEvent.Type;Object.keys(e).forEach(function(r){var a=i[r]||n[r],o=t.adsManagerEvents[a];o&&t.adsManager.removeEventListener(a,o),t.adsManager.addEventListener(a,e[r],!1),t.adsManagerEvents[a]=e[r]})},e.prototype.unbindEvents=function(e){var t=this,i=google.ima.AdEvent.Type,n=google.ima.AdErrorEvent.Type;e.forEach(function(e){var r=i[e]||n[e],a=t.adsManagerEvents[r];a&&(t.adsManager.removeEventListener(r,a),delete t.adsManagerEvents[r])})},e.prototype.getAdId=function(e){if(e){var t=e.getAdId(),i=_(e);if(i&&(t=""+i.getTimeOffset()),t)return void 0===this.adIds[t]&&(this.adIds[t]=M(12)),this.adIds[t]}return"-1"},e.prototype.getTag=function(e,t){if("string"==typeof this.schedule)return this.schedule;var i=_(e);if(i){var n=this.tagMap[i.getTimeOffset()];if(n)return n}var r=this.userRequestContext;return t&&t.getUserRequestContext&&(r=t.getUserRequestContext()||r),r?r.adTagUrl||r.adsResponse||"":(console.error("invalid request context",r),"")},e.prototype.adEventObject=function(e){var t={client:"googima",tag:this.getTag(e),ima:{ad:e,userRequestContext:this.userRequestContext}};if(!e)return t;t.id=this.getAdId(e),t.adtitle=e.getTitle(),t.adsystem=e.getAdSystem(),t.creativetype=e.getContentType(),t.linear=e.isLinear()?"linear":"nonlinear",t.viewable=this.playerApi.getViewable();var i=_(e);if(i){var n=i.getTotalAds();n>1&&(t.sequence=i.getAdPosition(),t.podcount=n);var r=i.getTimeOffset(),a="mid";0===r?a="pre":-1===r&&(a="post"),t.adposition=a}return t},e.prototype.adErrorEventObject=function(e,t){return{id:"-1",client:"googima",message:"Ad Error: "+(e.getMessage&&e.getMessage()||e.message),code:e.getVastErrorCode&&e.getVastErrorCode()||900,tag:this.getTag(t.getAd&&t.getAd(),t)}},e}();(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)("googima","8.0",function(e,t,n){function r(e,t,i,n){try{return e.getCompanionAds(t,i,n)}catch(e){return[]}}function a(e){if(e&&e.length){var t=document.getElementById(g.companiondiv.id);if(t){var i=e[0];i&&(m.isFunction(i.getContent)?t.innerHTML=i.getContent():t.innerHTML=i.resource||i.content)}}}function o(e){for(var t=[],i=0;i<e.length;i++){var n=e[i];t.push({width:n.getWidth(),height:n.getHeight(),type:"html",resource:n.getContent(),click:null})}return t}function s(t){var i=new google.ima.CompanionAdSelectionSettings;i.sizeCriteria=google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE;var n=g.companiondiv||{width:300,height:250},s=o(r(t,n.width,n.height,i)),d=s.length;if(d){var l=P.adsLoaderManager.adEventObject(t);l.companions=s,e.trigger(C,l)}if(g.companiondiv){i=new google.ima.CompanionAdSelectionSettings,g.companionResourceType&&(i.resourceType=google.ima.CompanionAdSelectionSettings.ResourceType[g.companionResourceType]);var u=r(t,g.companiondiv.width,g.companiondiv.height,i);d=Math.max(d,u.length),a(u)}return d>0}function d(){P&&!P.destroyed()&&(e.off(null,null,P),P.destroy(),P=null)}function l(t){P&&P.discardAdBreak(),A.contentComplete(),d(),t&&t.adschedule?g.adschedule=t.adschedule:g.adschedule=null,e.setCues([])}function u(t,n,r){var a=this;l(t),r.getSchedule()?(A.reset(),(P=new K(t,g,e,b,y,A)).init(n,r),P.on("all",function(t,i){return e.trigger(t,i)}),P.on(I,function(e){s(e.ima.ad)}),e.once("beforePlay",function(t){if(g.premiumAds){var n=e.getHeight(),r=e.getWidth();if(n<270||r<480)return console.log("Premium Ads: Player size is smaller than 480x270 to play an ad"),void a.destroy();i()<0&&(f=Date.now())}P.beforePlay(t)},P).on("beforeComplete",function(){return P.beforeComplete()},P).on("time",function(e){return P.time(e)},P).on("resize",function(){return P.resize()},P).on("fullscreen",function(){return P.resize()},P)):O(c).then(function(){A.prepare(e)}).catch(c.noop)}var h=this,c=e.utils,p=e.getConfig(),g=new x(t||{},c),f=void 0;if(g.premiumAds){if(e.getMute()||p.autostart)return console.log("Premium Ads: Cannot play ads in autostart or muted"),void(this.destroy&&this.destroy());if(function(){var e=(window.performance||{}).timing;if(e){var t=(e.loadEventEnd||(new Date).getTime())-e.navigationStart;if(t>0)return t}return L}()>=L)return console.log("Premium Ads: Page load took too long to start an ad"),void(this.destroy&&this.destroy())}O(c).then(function(){if(f){var e=i();e>=0&&e-f>=L&&(console.log("Premium Ads: IMA SDK load took too long to start an ad"),h.destroy&&h.destroy())}}).catch(c.noop);var m=e._,v=p.key;c.addClass(n,"jw-plugin-googima");var y=new S(n,e.id,c.style),b=new B(c,e.Events,y),A=new Y(y.getAdDiv()),P=null;this.version="8.0.0",e.utils.extend(this,e.Events),e.on("destroyPlugin",function(){h.destroy()}),e.pauseAd=function(e){P&&(e?P.pause():P.resume())},e.playAd=function(i){var n=c.extend({},t);delete n.ad,delete n.tag,delete n.schedule,e._.isArray(i)?n.tag=i[0]:n.tag=i,u({},"TYPE_API",new x(n,c)),P&&P.beforePlay(null)},e.on("playlistItem",function(e){u(e.item,"TYPE_SCHEDULE",g)},this).on("playlistComplete",function(){return l()},this).on("cast",function(e){e.active&&l()},this),N.call(this,c,v).catch(function(t){d(),e.off(null,null,h),e.playAd=c.noop,e.trigger("adError",{id:"-1",client:"googima",message:"Ad Error: "+t.message,code:900,tag:""})}),this.destroy=d})}();
