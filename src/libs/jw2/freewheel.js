!function(){"use strict";function e(e){if("true"===e)return!0;if("false"===e)return!1;var t=parseFloat(e);return isNaN(t)?e:t}function t(){var e=window.location.href.match(new RegExp(/^[^\/]*:\/\/\/?([^\/]*)/));return e&&e.length>1?e[1]:""}function i(e,t){var i=Math.pow(10,t);return Math.round(e*i)/i}function n(e){return-1!==e.indexOf("?")?"&":"?"}function r(e,r,s){if(!e)return e;var o=r.getPlaylistItem(),a=r.utils.bounds(r.container),l=e.replace("__random-number__",Math.random()*Math.pow(10,18)).replace("__timestamp__",(new Date).getTime()).replace("__page-url__",encodeURIComponent(window.location.href)).replace("__referrer__",encodeURIComponent(document.referrer)).replace("__player-height__",a.height).replace("__player-width__",a.width).replace("__item-duration__",i(r.getDuration(),3)).replace("__domain__",encodeURIComponent(t()));l=s.companiondiv&&s.companiondiv.id?l.replace("__companion-div__",s.companiondiv.id):l.replace("__companion-div__","");for(var d=l.match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g)),h=0;d&&h<d.length;h++){var u=d[h],p=u.substring(7,u.length-2);if(o.hasOwnProperty(p)&&r._.isString(o[p])){var c=o[p];c.length>1e3&&(c=c.substring(0,1e3)),l=l.replace(u,encodeURIComponent(c))}else l=l.replace(u,"")}return o.title&&-1===l.indexOf("vid_t=")&&(l+=n(l)+"vid_t="+encodeURIComponent(o.title.substring(0,100))),l}function s(e,t,i){if("start"===e||"0%"===e)return"pre";if("end"===e||"100%"===e)return"post";if("pre"===e||"post"===e||i.indexOf(e,"%")>-1)return e;var n=t.seconds(e);return!!i.isNumber(n)&&n}function o(e){var t=parseInt(e,10),i=Math.floor(t)%1e3,n=Math.floor(t/1e3)%60,r=Math.floor(t/6e4)%60,s=Math.floor(t/36e5)%24;return s=s<10?"0"+s:s,r=r<10?"0"+r:r,n=n<10?"0"+n:n,i=("000"+i).slice(-3),s+":"+r+":"+n+"."+i}function a(e,t,i){var n=s(e,t,i);return n||(n="pre"),i.isNumber(n)&&(n=o(1e3*n)),n}function l(e,t,i){var n={};return t.foreach(e,function(e,r){var s={},o=r;r.ad&&(o=r.ad),s.offset=a(o.offset||o.position||r.offset||"",t,i),s.tag=o.tag,s.type=o.type||r.type||"linear,nonlinear",o.skipoffset&&(s.skipoffset=o.skipoffset),n[e]=s}),n}var d="freewheel",h="-1",u=15e3,p="adError",c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},f=function(){function t(i,n){c(this,t),this.config=n;var r={debug:!1,admessage:"This ad will end in xx",admessagedynamickey:"xx",adcounterdynamic:"Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ",adcountercountkey:"__AD_POD_CURRENT__",adcountertotalkey:"__AD_POD_LENGTH__",skipMessage:"Skip ad in xx",skipText:"Skip",cuetext:"Advertisement",loadVideoTimeout:u};for(var s in r){var o=n[s]||n[s.toLowerCase()],a=r[s],l=typeof a;if(void 0!==o){if("boolean"!==l&&"number"!==l||(o=e(o)),typeof o!==l)throw new Error("invalid parameter: "+s+" should be a "+l);this[s]=o}else this[s]=a}this.admessagedynamic=this.admessage,this.duration=i.duration||0,this.fwassetid=i.fwassetid,this.freewheel=this.config.freewheel||{},this.adManagerURL=this.freewheel.adManagerURL,this.profileid=this.freewheel.profileid,this.sectionid=this.freewheel.sectionid,this.networkid=this.freewheel.networkid,this.serverid=this.freewheel.serverid,this.custom=this.freewheel.custom||{}}return t.prototype.getSchedule=function(){var e=this.config;return e.tag||this.adschedule||e.schedule||e.ad},t}(),g=null,y=function(e,t){if(g)return g;var i=["//","adm.fwmrm.net/p/vitest-js/AdManager.js"];return"file:"===document.location.protocol&&i.unshift("https:"),g=new Promise(function(n,r){if(window.tv&&tv.freewheel)return void n();new e.scriptloader(t||i.join("")).on("complete",function(){n(tv.freewheel)}).on("error",function(e){return r(e)}).load()})},m={},v=function(e,t){var i=this,n=m[t];return n||(function(e,t){e.jwplayerEntitlements=function(){return function(e,t,i){var n={canPlayAds:!0},r=new e.key(t);if("unlimited"===r.edition())return i(n);var s=r.token(),o=["//","entitlements.jwplayer.com","/",s,".json"];"file:"===window.location.protocol&&o.unshift("https:"),e.ajax(o.join(""),function(e){n.canPlayAds=!e||!e.response||!1!==e.response.canPlayAds,i(n)},function(){i(n)},{timeout:1e4,responseType:"json"})}}()}(this),m[t]=new Promise(function(n,r){i.jwplayerEntitlements(e,t,function(e){if(!e.canPlayAds)return void r({message:"Ad Limit Reached"});n()})}))},w=function(){function e(t,i){c(this,e),t.extend(this,i),this.vol=0,this.freewheelProxy=null}return e.prototype.setProxy=function(e){this.freewheelProxy=e},e.prototype.attachMedia=function(){},e.prototype.detachMedia=function(){},e.prototype.mute=function(e){this.freewheelProxy&&this.freewheelProxy.setVolume(e?0:this.vol)},e.prototype.volume=function(e){this.vol=e/100,this.freewheelProxy&&this.freewheelProxy.setVolume(this.vol)},e}(),_=function(){function e(t,i){c(this,e),this.player=t,this.options=i}return e.prototype.getAdsResponse=function(e){var t=this,i=this.player,n=i.utils,s=[];return n.foreach(l(e,n,i._),function(e,n){s.push('<vmap:AdBreak breakType="_type_" breakId="_adbreakname_" timeOffset="_offset_"><vmap:AdSource allowMultipleAds="true" followRedirects="true" id="_adbreakname_-ad-1"><vmap:AdTagURI><![CDATA[_url_]]></vmap:AdTagURI></vmap:AdSource></vmap:AdBreak>'.replace(/_type_/g,n.type).replace(/_adbreakname_/g,e).replace(/_offset_/g,n.offset.replace("pre","start").replace("post","end")).replace(/_url_/g,r(n.tag,i,t.options)))}),'<vmap:VMAP xmlns:vmap="http://www.iab.net/videosuite/vmap" version="1.0">'+s.join("")+"</vmap:VMAP>"},e.prototype.getTagMap=function(e){var t=this,i=this.player,n=i.utils,o={};return n.foreach(l(e,n,i._),function(e,a){var l=s(a.offset,n,i._);if(i._.isString(l)&&(l=parseFloat(l.replace("pre","0").replace("post","-1"))),i._.isNumber(l)){var d={tagName:r(a.tag,i,t.options),type:a.type};a.skipoffset&&(d.skipoffset=a.skipoffset),o[l]=d}}),o},e}(),A=function(){function e(t,i,n){c(this,e),this.adDisplayContainer=null,this.responsePromise=null,this.adsManager=new tv.freewheel.SDK.AdManager,this.adsManager.setNetwork(n.networkid),this.adsManager.setServer(n.serverid),this.adsManagerEvents={},this.options=n||{},this.video=t,this.version=i,this.adIds={},this.schedule=null,this.tagMap={}}return e.prototype.open=function(e,t,i,n){var r=this;if(this.currentAdContext)throw new Error("Request already made");var s=t.getSchedule();if(!s)return this.responsePromise=Promise.reject(),this.responsePromise;if(this.currentAdContext=this.adsManager.newContext(),this.currentAdContext.setProfile(t.profileid),this.currentAdContext.setVideoAsset(t.fwassetid,t.duration),this.currentAdContext.setSiteSection(t.sectionid),this.currentAdContext.addKeyValue("customTargetingKey","JSAMDemoPlayer"),this.schedule=s,this.responsePromise=new Promise(function(e,t){r.currentAdContext.addEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE,e),r.currentAdContext.addEventListener(tv.freewheel.SDK.EVENT_ERROR,t)}),"string"==typeof s)this.currentAdContext.addTemporalSlot(s,tv.freewheel.SDK.ADUNIT_PREROLL,0);else for(var o=new _(i,n),a=this.tagMap=o.getTagMap(s),l=Object.keys(a),d=0;d<l.length;d++){var h=parseInt(l[d]),u=a[h].tagName,p=a[h].type,c=null;if("overlay"===p){if(-1===h)continue;c=tv.freewheel.SDK.ADUNIT_OVERLAY}if(!c)switch(h){case 0:c=tv.freewheel.SDK.ADUNIT_PREROLL;break;case-1:c=tv.freewheel.SDK.ADUNIT_POSTROLL,h=this.options.duration||1;break;default:c=tv.freewheel.SDK.ADUNIT_MIDROLL}this.currentAdContext.addTemporalSlot(u,c,h)}var f=this.options.custom;for(var g in f)this.currentAdContext.addKeyValue(g,f[g]);return this.currentAdContext.registerVideoDisplayBase(i.getContainer().id),this.responsePromise},e.prototype.requestAds=function(){this.currentAdContext.submitRequest()},e.prototype.destroy=function(){var e=this.adDisplayContainer;e&&(e.destroy(),this.adDisplayContainer=null),this.userRequestContext=null,this.responsePromise=null,this.video=null,this.adIds=null},e}(),E=function(){function e(t,i,n,r){c(this,e),n.utils.extend(this,n.Events),this.item=t,this.options=i,this.player=n,this.utils=n.utils,this.style=n.utils.style,this.environment=n.getEnvironment(),this.instreamProvider=r,this.initAdsManagerPromise=null,this.adsLoadedPromise=null,this.blockingInstreamPlayer=null,this.playbackContainer=null,this.adsContainer=null,this.timeoutAdStart=-1,this.timeoutAdLoad=-1,this.progressIntervalId=-1,this.nonlinearContainerId=null,this.video=n.getContainer().querySelector("video"),this.video||this.setupVideoTag(),this.slots={prerolls:[],midrolls:[],postrolls:[]},this.playedMidrollIndex=[],this.mobileEventListeners={play:this.adResume.bind(this),pause:this.adPause.bind(this),beginFullscreen:this.startFullscreen.bind(this),endFullscreen:this.endFullscreen.bind(this)},this.playerEventListeners={play:this.contentResume.bind(this),pause:this.contentPause.bind(this)},this.addPlayerListeners(),this._qoe=new jwplayer.utils.Timer}return e.prototype.init=function(e,t){var i=this;this.initAdsManagerPromise=y().then(function(){return i.destroyed()?null:(i.adsLoaderManager=new A(i.video,i.player.version,i.options),i.player.trigger("adManager",{adManager:i.adsLoaderManager.adsManager}),i.adsLoaderManager)}).catch(function(e){return i.asyncError(e)}),this.adsLoadedPromise=this.initAdsManagerPromise.then(function(){return i.adsLoaderManager.open(e,t,i.player,i.options)}).then(function(e){if(i.destroyed())return null;if(e.success){i.trigger("adRequest",{client:d,networkid:e.response.networkId});for(var t=i.adsLoaderManager.currentAdContext,n=t.getTemporalSlots(),r=[],s=0;s<n.length;s++){var o=n[s];switch(o.getTimePositionClass()){case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:i.slots.prerolls.push(o);break;case tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY:case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:i.slots.midrolls.push(o),r.push({begin:o.getTimePosition(),text:i.options.cuetext});break;case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:i.slots.postrolls.push(o)}}i.player.setCues(r),i.registerEvents(t),t.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE,!1,tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL)}else i.asyncError(e);return i.slots.prerolls.length&&i.utils.addClass(i.player.getContainer(),"jw-flag-ads-freewheel"),e}).catch(function(e){return i.asyncError(e)})},e.prototype.setupVideoTag=function(){var e=this.player.getContainer(),t=e.id;this.playbackContainer=e.querySelector(".jw-media"),this.adsContainer=e.querySelector("#"+t+"_freewheel"),this.style(this.adsContainer,{height:"100%",width:"100%",bottom:0,cursor:"pointer",visibility:"hidden"}),this.video=document.createElement("video"),this.adsContainer.appendChild(this.video)},e.prototype.registerEvents=function(e){e.addEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED,this.adSlotComplete.bind(this)),e.addEventListener(tv.freewheel.SDK.EVENT_AD,this.allAdEvent.bind(this))},e.prototype.startFullscreen=function(e){this.sendFullscreenEvent(e,!0)},e.prototype.endFullscreen=function(e){this.sendFullscreenEvent(e,!1)},e.prototype.sendFullscreenEvent=function(e,t){this.blockingInstreamPlayer&&this.blockingInstreamPlayer.trigger("fullscreenchange",{target:e.target,jwstate:t})},e.prototype.adErrorEventObject=function(e){var t=e.adInstance,i=tv?e[tv.freewheel.SDK.INFO_KEY_ERROR_INFO]:"FreeWheel SDK unavailable";return{id:t?t.getAdId():void 0,client:d,message:"Ad Error: "+i,code:e[tv.freewheel.SDK.INFO_KEY_ERROR_CODE],module:e[tv.freewheel.SDK.INFO_KEY_ERROR_MODULE]}},e.prototype.adEventObject=function(e){var t=this.currentSlot,i={client:d};if(t&&(i.tag=t.getCustomId()),!e&&t&&(e=t.getCurrentAdInstance()),!e)return i;var n=t.getTimePositionClass(),r="OVERLAY"===n,s=e.getActiveCreativeRendition();i.freewheel={ad:{adId:e.getAdId()}},i.adposition=n.toLowerCase().replace("roll",""),i.id=e.getAdId(),i.linear=r?"nonlinear":"linear",i.creativetype="static",i.viewable=this.player.getViewable(),r||(i.creativetype="VPAID"===s.getCreativeApi()?"vpaid-js":s.getContentType());var o=t.getAdCount();return o>1&&(i.sequence=t.getAdInstances().indexOf(e),i.podcount=o),e.skipoffset&&(i.skipoffset=e.skipoffset),i},e.prototype.allAdEvent=function(e){switch(e.subType){case tv.freewheel.SDK.EVENT_AD_IMPRESSION:this.adImpression.call(this,e);break;case tv.freewheel.SDK.EVENT_AD_IMPRESSION_END:this.setTimeoutAdStart.call(this,e);break;case tv.freewheel.SDK.EVENT_AD_COMPLETE:this.adComplete.call(this,e);break;case tv.freewheel.SDK.EVENT_AD_CLICK:this.adClick.call(this,e);break;case tv.freewheel.SDK.EVENT_ERROR:this.adError.call(this,e)}},e.prototype.setupSkipButton=function(e){var t=this.options.config.skipoffset,i=e.slot,n="POSTROLL"===i.getTimePositionClass()?-1:e.slot.getTimePosition(),r=this.adsLoaderManager.tagMap;if(r){var s=r[n];s&&(t=s.skipoffset||t)}t&&this.blockingInstreamPlayer&&(this.blockingInstreamPlayer.off("adSkipped",this.adSkip,this),e.adInstance.skipoffset=t,this.blockingInstreamPlayer.setupSkipButton(t,this.options,this.utils.noop),this.blockingInstreamPlayer.on("adSkipped",this.adSkip,this))},e.prototype.adStarted=function(e){var t=this.adEventObject(e.adInstance);this.trigger("adStarted",t)},e.prototype.adImpression=function(e){clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart);var t=e.adInstance,i=this.adEventObject(t),n="VPAID"===t.getActiveCreativeRendition().getCreativeApi();if(this.utils.removeClass(this.player.getContainer(),"jw-freewheel-before-impression"),this.utils.toggleClass(this.player.getContainer(),"jw-flag-ads-vpaid",n),this.setupSkipButton(e),this.progressInterval(this.currentSlot),"pre"===i.adposition&&(void 0===i.podcount||0===i.sequence)){this._qoe.tick("adImpression");var r=this._qoe.between("adLoading","adImpression");i.timeLoading=r}if(this.trigger("adImpression",i),n&&this.trigger("adStarted",i),t.getCompanionAdInstances().length){var s=this.utils.extend({},i);s.companions=t.getCompanionAdInstances(),this.trigger("adCompanions",s)}this.triggerAdPlay(e.adInstance,"adPlay","playing","buffering"),this.updateAdPosition(t),this.setupNonlinearContainer(),this.resize()},e.prototype.setTimeoutAdStart=function(){var e=this;clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),this.timeoutAdStart=setTimeout(function(){if(!e.destroyed()){var t=e.adEventObject();t.message="Ad Error: Request timeout",e.trigger(p,t),e.currentSlot.skipCurrentAd()}},this.options.loadVideoTimeout)},e.prototype.contentResume=function(){this.adsLoaderManager&&this.adsLoaderManager.currentAdContext&&this.adsLoaderManager.currentAdContext.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PLAYING)},e.prototype.contentPause=function(){this.adsLoaderManager&&this.adsLoaderManager.currentAdContext&&this.adsLoaderManager.currentAdContext.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PAUSED)},e.prototype.adResume=function(e){var t=e?e.adInstance:null;this.triggerAdPlay(t,"adPlay","playing","paused")},e.prototype.adPause=function(e){if(!this.environment.OS.mobile||this.video.duration!==this.video.currentTime){var t=e?e.adInstance:null;this.triggerAdPlay(t,"adPlay","paused","playing")}},e.prototype.adSkip=function(){this.trigger("adSkipped",this.adEventObject()),this.currentSlot.skipCurrentAd()},e.prototype.adComplete=function(e){clearInterval(this.progressIntervalId),this.trigger("adComplete",this.adEventObject(e.adInstance))},e.prototype.adSlotComplete=function(e){var t=this,i=e.slot;i&&"POSTROLL"===i.getTimePositionClass()?setTimeout(function(){t.stopBlocking(),t.nonlinearContainerId=null,t.destroy()},0):(this.stopBlocking(),this.nonlinearContainerId=null,i&&this.adsLoaderManager.currentAdContext.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PLAYING))},e.prototype.adClick=function(e){this.trigger("adClick",this.adEventObject(e.adInstance)),this.pause(e)},e.prototype.adError=function(e){var t=this;this.options.debug&&console.error(e);var i=this.adErrorEventObject(e);900===i.code&&(this.timeoutAdStart=setTimeout(function(){return t.destroy()},0)),this.trigger(p,i)},e.prototype.updateAdPosition=function(e){this.instreamProvider&&this.instreamProvider.trigger("time",{position:Math.max(e.getPlayheadTime(),0),duration:e.getDuration()})},e.prototype.prepareToPlayAd=function(){this.destroyed()||this.blockingInstreamPlayer||(this.video&&this.environment.OS.iOS&&(this.video.controls=!1),this.startBlocking())},e.prototype.addMobileListeners=function(){for(var e in this.mobileEventListeners)this.video.addEventListener(e,this.mobileEventListeners[e])},e.prototype.removeMobileListeners=function(){for(var e in this.mobileEventListeners)this.video.removeEventListener(e,this.mobileEventListeners[e])},e.prototype.addPlayerListeners=function(){for(var e in this.playerEventListeners)this.player.on(e,this.playerEventListeners[e])},e.prototype.removePlayerListeners=function(){for(var e in this.playerEventListeners)this.player.off(e,this.playerEventListeners[e])},e.prototype.startBlocking=function(){var e=this;this.blockingInstreamPlayer||(this._qoe.tick("adLoading"),clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),this.timeoutAdLoad=setTimeout(function(){e.destroyed()||(e.currentSlot&&e.currentSlot.stop(),e.stopBlocking())},15e3),this.utils.addClass(this.player.getContainer(),"jw-flag-ads-freewheel"),this.blockingInstreamPlayer=this.player.createInstream().init(),this.blockingInstreamPlayer.setText("Loading"),this.blockingInstreamPlayer.applyProviderListeners(this.instreamProvider),this.playbackContainer&&this.showAdsContainer(),this.environment.OS.mobile&&(this.removeMobileListeners(),this.addMobileListeners()))},e.prototype.stopBlocking=function(){this.destroyed()||(this.playbackContainer&&this.hideAdsContainer(),clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),this.utils.removeClass(this.player.getContainer(),["jw-flag-ads-vpaid","jw-flag-ads-freewheel","jw-freewheel-before-impression"]),this.environment.OS.mobile&&this.removeMobileListeners(),this.blockingInstreamPlayer&&(this.instreamProvider.off(),this.blockingInstreamPlayer.destroy(),this.blockingInstreamPlayer=null))},e.prototype.setupNonlinearContainer=function(){if(this.nonlinearContainerId){var e=document.getElementById(this.nonlinearContainerId);this.utils.addClass(e,"jw-freewheel-nonlinear-container"),this.style(e,{top:"auto",height:"100%",width:"100%"})}},e.prototype.showAdsContainer=function(){this.style(this.playbackContainer,{visibility:"hidden"}),this.style(this.adsContainer,{visibility:"visible"})},e.prototype.hideAdsContainer=function(){this.style(this.playbackContainer,{visibility:"visible"}),this.style(this.adsContainer,{visibility:"hidden"})},e.prototype.getMobilePlayCallback=function(){var e=this,t=function(i){i.currentTarget.removeEventListener("play",t),i.currentTarget.__jwMobileCanPlay=!0,e.mobilePlayCallback=null,e.requestAndPlayAd()};return t},e.prototype.beforePlay=function(e){!this.video||!this.environment.OS.mobile||this.video.__jwMobileCanPlay||!this.player.isBeforePlay()&&0!==this.video.currentTime||this.utils.hasClass(this.player.getContainer(),"jw-flag-autostart")?this.requestAndPlayAd():(this.mobilePlayCallback=this.getMobilePlayCallback(),this.video.addEventListener("play",this.mobilePlayCallback))},e.prototype.requestAndPlayAd=function(){var e=this;this.video.removeEventListener("play",this.mobilePlayCallback),this.startBlocking(),this.utils.addClass(this.player.getContainer(),"jw-freewheel-before-impression"),this.initAdsManagerPromise.then(function(){e.adsLoaderManager.requestAds()}),this.adsLoadedPromise.then(function(t){!e.destroyed()&&t.success&&e.playNextAd(e.slots.prerolls)}).catch(function(t){return e.asyncError(t)})},e.prototype.playNextAd=function(e){if(e.length){var t=this.currentSlot=e.shift();"OVERLAY"!==t.getTimePositionClass()?(this.prepareToPlayAd(),this.nonlinearContainerId=null):(this.utils.addClass(this.player.getContainer(),"jw-flag-ads-freewheel"),this.nonlinearContainerId="_fw_ad_container_html_"+this.currentSlot.getCustomId()+"_"),this.setTimeoutAdStart(),t.play(),"MIDROLL"===t.getTimePositionClass()&&this.adsLoaderManager.currentAdContext.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PAUSED)}else this.stopBlocking()},e.prototype.beforeComplete=function(){this.slots.postrolls.length&&this.playNextAd(this.slots.postrolls)},e.prototype.time=function(e){if(this.slots.midrolls.length){var t=this.getNextMidRollIndex(e.position);if(t>=0){var i=[this.slots.midrolls[t]];this.playNextAd(i)}}},e.prototype.progressInterval=function(e){var t=this;if(clearInterval(this.progressIntervalId),e){var i=e.getCurrentAdInstance(),n=e.getAdInstances().indexOf(i)+1,r=i.getDuration(),s=e.getAdCount(),o=-1,a=this.options.admessage||"",l=new RegExp(this.options.admessagedynamickey,"g"),d=this.options.adcounterdynamic||"",h=new RegExp(this.options.adcountercountkey,"g"),u=new RegExp(this.options.adcountertotalkey,"g");this.progressIntervalId=setInterval(function(){var e=i.getPlayheadTime(),p=r-e;if(o!==p){if(o=p,t.blockingInstreamPlayer){var c=a.replace(l,Math.round(p)),f=void 0;s>1&&(f=d.replace(h,n),c=f.replace(u,s)+"  "+c),t.blockingInstreamPlayer.setText(c)}if(r>0){var g=t.adEventObject(i);g.position=e,g.duration=r,t.trigger("adTime",g),t.updateAdPosition(i)}}},250)}},e.prototype.getNextMidRollIndex=function(e){var t=-1;if(this.playedMidrollIndex.length>=this.slots.midrolls.length)return t;for(var i=0;i<this.slots.midrolls.length;i++){if(!(this.slots.midrolls[i].getTimePosition()<=e))break;t=i}return this.playedMidrollIndex.indexOf(t)<0&&t>=0?(this.playedMidrollIndex.push(t),t):-1},e.prototype.triggerAdPlay=function(e,t,i,n){this.instreamProvider.trigger("state",{newstate:i,oldstate:n});var r=this.adEventObject(e);r.oldstate=n,r.newstate=i,this.trigger(t,r)},e.prototype.asyncError=function(e){var t=this;this.destroyed()||(e&&this.adError(e),this.timeoutAdStart=setTimeout(function(){return t.destroy()},0))},e.prototype.pause=function(e){if(this.currentSlot){this.currentSlot.pause();var t=e?e.adInstance:null;this.triggerAdPlay(t,"adPause","paused","playing")}},e.prototype.resume=function(e){if(this.currentSlot){this.currentSlot.resume();var t=e?e.adInstance:null;this.triggerAdPlay(t,"adPlay","playing","paused")}},e.prototype.resize=function(){var e=document.getElementById(this.nonlinearContainerId);if(e){var t=e.querySelector("iframe"),i=this.player.getSafeRegion(!0);this.style(t,{left:(i.width-t.offsetWidth)/2})}},e.prototype.destroy=function(){clearInterval(this.progressIntervalId),this.off(),this.destroyed()||(this.removePlayerListeners(),this.currentSlot&&this.currentSlot.stop(),this.blockingInstreamPlayer&&(this.blockingInstreamPlayer.off(null,null,this),this.stopBlocking()),this.adsContainer&&this.adsContainer.removeChild(this.video),clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),this.nonlinearContainerId=null,this.item=null,this.options=null,this.player.off(null,null,this),this.player=null,this.instreamProvider.off(),this.instreamProvider.setProxy(null),this.instreamProvider=null,this.video=null,this.initAdsManagerPromise=null,this.adsLoadedPromise=null)},e.prototype.destroyed=function(){return!this.item},e}(),P=function(e,t,i){function n(){_&&!_.destroyed()&&(_.destroy(),_=null)}function r(t){n(),t&&t.adschedule?g.adschedule=t.adschedule:g.adschedule=null,e.setCues([])}function s(t,i,n){r(t),n.getSchedule()&&(n.fwassetid=t.fwassetid||n.fwassetid,_=new E(t,g,e,m),_.init(i,n),_.on("all",function(t,i){return e.trigger(t,i)}),e.once("beforePlay",function(e){return _.beforePlay(e)},_).on("beforeComplete",function(){return _.beforeComplete()},_).on("time",function(e){return _.time(e)},_).on("resize",function(){return _.resize()},_).on("fullscreen",function(){return _.resize()},_))}function o(t){n(),e.off(null,null,this),e.playAd=l.noop,e.trigger(p,{id:h,client:d,message:"Ad Error: "+t.message,code:900,tag:""})}var a=this,l=e.utils,u=(e._,e.getConfig()),c=u.key,g=new f(u,t||{}),m=new w(l,e.Events);y(l,g.adManagerURL).then(function(){g.debug?tv.freewheel.SDK.setLogLevel(tv.freewheel.SDK.LOG_LEVEL_DEBUG):tv.freewheel.SDK.setLogLevel(tv.freewheel.SDK.LOG_LEVEL_QUIET)}).catch(function(e){o(e)});var _=null;l.extend(this,e.Events),this.version="2.0.0",e.pauseAd=function(e){_&&(e?_.pause():_.resume())},e.on("playlistItem",function(e){s(e.item,"TYPE_SCHEDULE",g)},this).on("playlistComplete",function(){return r()},this).on("cast",function(e){e.active&&r()},this).on("destroyPlugin",function(){a.destroy()},this),v.call(this,l,c).catch(function(e){o(e)}),this.destroy=n};!function(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");t.setAttribute("media","screen"),t.innerHTML=e,document.head.appendChild(t)}}(".jwplayer.jw-flag-ads-freewheel.jw-freewheel-before-impression .jw-media video {\n  pointer-events: none;\n}\n.jwplayer.jw-flag-ads-freewheel.jw-flag-touch.jwplayer.jw-flag-ads-freewheel.jw-state-paused .jw-display-icon-container {\n  display: none;\n}\n.jwplayer.jw-flag-ads-freewheel.jw-flag-user-inactive.jw-state-playing .jw-freewheel-nonlinear-container {\n  bottom: 0.5em;\n}\n.jwplayer.jw-flag-ads-freewheel .jw-freewheel-nonlinear-container {\n  bottom: 3.5em;\n  pointer-events: none;\n}\n.jwplayer.jw-flag-ads-freewheel .jw-freewheel-nonlinear-container iframe {\n  pointer-events: all;\n}\n.jwplayer.jw-flag-ads-freewheel.jw-flag-time-slider-above .jw-freewheel-nonlinear-container {\n  bottom: 66px;\n}\n"),(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)(d,"8.0",P)}();
