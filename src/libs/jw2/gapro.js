!function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([function(e,n){e.exports={version:"2.0.2",minPlayerVersion:"7.0.0"}},function(e,n,t){var i,o;i=[t(0)],void 0!==(o=function(e){var n={trackingobject:"_gaq",universalga:"ga",idstring:"file",label:"file"},t=function(e,t){function i(){var e=window[g.universalga];return e?(c||(c={push:function(n){n.splice(0,1,"send","event"),e.apply(this,n)}}),c):"string"==typeof g.trackingobject?window[g.trackingobject]:g.trackingobject}function o(e,n){return e?n&&e[n]&&e[n].length?"file"===n?p.getAbsolutePath(e[n]):e[n]:e.file?e.file:e.sources?r(e.sources):"":""}function r(e){for(var n=[],t=e.length-1;t--;)e[t].file&&n.push(e[t].file);return n.sort(),p.getAbsolutePath(n[0])}function a(e){b||(void 0!==i()._trackEvent?l("JW Player Video",e,s.label):void 0!==i().push&&u("JW Player Video",e,s.label))}function u(e,n,t){i().push(["_trackEvent",e,n,t]),v({type:"async",category:e,action:n,label:t})}function l(e,n,t){i()._trackEvent(e,n,t),v({type:"sync",category:e,action:n,label:t})}var c,s,f,p=e.utils,d=e._,g=d.extend({},n,t),y=e,b=!1,v=p.noop;if(t.debug&&d.isFunction(t.onGaTrack)&&(v=t.onGaTrack),"string"==typeof g.trackingobject&&void 0===window[g.trackingobject]&&!window[g.universalga])return void p.log("Could not setup because trackingobject is not defined.");!function(){e.on("playlistItem",function(n){s=d.extend({played:!1},y.getPlaylistItem(n.index)),s.label=o(e.getPlaylistItem(n.index),g.label),s.mediaID=o(e.getPlaylistItem(n.index),g.idstring)}),e.on("play",function(){s.played?"paused"===f&&a("Resume"):(s.played=!0,a("Play")),f="playing"}),e.on("buffer",function(){a("Buffer"),f="buffering"}),e.on("pause",function(){a("Pause"),f="paused"}),e.on("seek",function(){a("Seek")}),e.on("complete",function(){a("Complete")}),e.on("cast",function(e){b=!!e.active})}()};t.version=e.version,(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)("gapro",e.minPlayerVersion,t)}.apply(n,i))&&(e.exports=o)}]);