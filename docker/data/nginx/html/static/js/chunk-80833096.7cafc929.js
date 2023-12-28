(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80833096"],{"3abb":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoging,expression:"isLoging"}],attrs:{id:"devicePlayer"}},[i("el-dialog",{attrs:{title:"视频播放",top:"0","close-on-click-modal":!1,visible:t.showVideoDialog},on:{"update:visible":function(e){t.showVideoDialog=e},close:function(e){return t.close()}}},[i("div",{staticClass:"player-wrapper"},[i("div",{ref:"player",staticClass:"player"},[i("div",{staticClass:"container-shell"},[i("div",{ref:"container",attrs:{id:"container"}})])]),i("div",{staticClass:"player-display"})]),i("el-tabs",{staticStyle:{"padding-bottom":"15px"},on:{"tab-click":t.tabHandleClick},model:{value:t.tabActiveName,callback:function(e){t.tabActiveName=e},expression:"tabActiveName"}},[i("el-tab-pane",{attrs:{label:"设备直播",name:"media"}},[i("el-col",{attrs:{span:24}},[i("div",{staticStyle:{display:"flex","justify-content":"left"}},[i("div",{staticClass:"control-wrapper"},[i("div",{staticClass:"control-btn control-top",on:{mousedown:function(e){return t.ptzDirection(0,1)},mouseup:function(e){return t.ptzDirection(0,0)}}},[i("i",{staticClass:"el-icon-caret-top"}),i("div",{staticClass:"control-inner-btn control-inner"})]),i("div",{staticClass:"control-btn control-left",on:{mousedown:function(e){return t.ptzDirection(2,0)},mouseup:function(e){return t.ptzDirection(0,0)}}},[i("i",{staticClass:"el-icon-caret-left"}),i("div",{staticClass:"control-inner-btn control-inner"})]),i("div",{staticClass:"control-btn control-bottom",on:{mousedown:function(e){return t.ptzDirection(0,2)},mouseup:function(e){return t.ptzDirection(0,0)}}},[i("i",{staticClass:"el-icon-caret-bottom"}),i("div",{staticClass:"control-inner-btn control-inner"})]),i("div",{staticClass:"control-btn control-right",on:{mousedown:function(e){return t.ptzDirection(1,0)},mouseup:function(e){return t.ptzDirection(0,0)}}},[i("i",{staticClass:"el-icon-caret-right"}),i("div",{staticClass:"control-inner-btn control-inner"})]),i("div",{staticClass:"control-round"},[i("div",{staticClass:"control-round-inner"},[i("i",{staticClass:"fa fa-pause-circle"})])]),i("div",{staticStyle:{position:"absolute",left:"8.25rem",top:"1.1rem",cursor:"pointer",display:"flex",width:"100px"},on:{mousedown:function(e){return t.ptzScale(1)},mouseup:function(e){return t.ptzScale(0)}}},[i("svg-icon",{staticStyle:{"font-size":"30px"},attrs:{"icon-class":"big"}}),i("span",{staticStyle:{"line-height":"30px",color:"#999","margin-left":"6px"}},[t._v("放大")])],1),i("div",{staticStyle:{position:"absolute",left:"8.25rem",top:"3.3rem",cursor:"pointer",display:"flex",width:"100px"},on:{mousedown:function(e){return t.ptzScale(2)},mouseup:function(e){return t.ptzScale(0)}}},[i("svg-icon",{staticStyle:{"font-size":"30px"},attrs:{"icon-class":"small"}}),i("span",{staticStyle:{"line-height":"30px",color:"#999","margin-left":"6px"}},[t._v("缩小")])],1),i("div",{staticClass:"contro-speed",staticStyle:{position:"absolute",left:"4px",top:"7rem",width:"9rem"}},[i("el-slider",{attrs:{max:255},model:{value:t.controSpeed,callback:function(e){t.controSpeed=e},expression:"controSpeed"}})],1)])])])],1),i("el-tab-pane",{attrs:{label:"录像回放",name:"record"}},[i("div",{staticClass:"components-container"},[t.videoVod?i("div",[i("el-row",{staticStyle:{"margin-bottom":"34px"}},[i("span",{staticStyle:{overflow:"auto"}},[t._v("选择录像日期：")]),i("el-date-picker",{attrs:{type:"date",size:"small",clearable:"",placeholder:"选择日期"},on:{change:t.loadDevRecord},model:{value:t.queryDate,callback:function(e){t.queryDate=e},expression:"queryDate"}})],1)],1):t._e(),i("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.playerLoading,expression:"playerLoading"}]},[i("el-col",{attrs:{span:24}},[i("el-row",{staticClass:"ctrl ctrl-btn",attrs:{type:"flex",align:"middle"}},[i("el-col",{staticStyle:{overflow:"auto",display:"flex"},attrs:{span:24,xs:24,sm:24}},[t.playing?t._e():i("el-button",{attrs:{type:"primary",icon:"el-icon-video-play",size:"mini"},on:{click:t.preparePlay}},[t._v("播放 ")]),t.playing?i("el-button",{attrs:{type:"danger",icon:"el-icon-video-pause",size:"mini"},on:{click:t.stopPlay}},[t._v(" 停止 ")]):t._e(),t.pausing?i("el-button",{attrs:{type:"primary",icon:"el-icon-video-play",size:"mini",disabled:!t.playing},on:{click:t.resume}},[t._v("恢复 ")]):t._e(),t.pausing?t._e():i("el-button",{attrs:{type:"danger",icon:"el-icon-video-pause",size:"mini",disabled:!t.playing},on:{click:t.pause}},[t._v("暂停 ")]),i("el-slider",{staticClass:"hidden-xs-only",staticStyle:{width:"100px",margin:"0 30px 0 30px"},attrs:{disabled:t.quieting,"format-tooltip":t.formatVolumeToolTip},on:{change:t.changeVolume},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}}),i("el-button",{staticClass:"hidden-xs-only",attrs:{icon:"el-icon-full-screen",size:"mini"},on:{click:t.fullscreen}},[t._v("全屏 ")]),i("el-button",{attrs:{icon:"el-icon-camera-solid",size:"mini"},on:{click:t.screenShot}},[t._v("截图")])],1)],1)],1)],1)],1)])],1)],1)],1)},s=[],a=(i("a9e3"),i("e9c4"),i("d3b7"),i("e2de")),o=i("f5a7"),r=i("6827"),c={name:"devicePlayer",props:{},jessibuca:null,computed:{getPlayerShared:function(){return{sharedflv:this.streamInfo.flv,sharedws_flv:this.streamInfo.ws_flv,sharedts:this.streamInfo.ts,sharedws_ts:this.streamInfo.ws_ts,sharedrtmp:this.streamInfo.rtmp,sharedrtsp:this.streamInfo.rtsp}}},beforeDestroy:function(){this.cleanPlayer(!0)},data:function(){return{tabActiveName:"media",volume:100,deviceId:"",channelId:"",streamId:"",streamInfo:{},video:"",videoUrl:"",hasaudio:!1,isLoging:!1,showVideoDialog:!1,controSpeed:30,videoVod:!1,vodIndex:0,vodData:{},playerLoading:!1,url:{ssrc:"",playurl:""},hisData:[],queryDate:"",playing:!1,quieting:!0,pausing:!1,paused:!1}},methods:{initUrl:function(t){t?(this.streamId=t.ssrc,this.url.ssrc=t.ssrc,this.url.playurl=t.playurl):(this.streamId="",this.url.ssrc="",this.url.playurl="")},create:function(){var t=document.body.clientWidth<720,e=new window.Jessibuca({container:this.$refs.container,videoBuffer:Number(.2),decoder:"/js/jessibuca/decoder.js",timeout:20,debug:!0,isResize:!1,loadingText:"商用版请购买授权,加载中",isFlv:!0,showBandwidth:!0,supportDblclickFullscreen:!0,operateBtns:{fullscreen:t,screenshot:!1,play:!1,audio:!1},forceNoOffscreen:!0,isNotMute:!1,playbackForwardMaxRateDecodeIFrame:4,playbackCurrentTimeMove:!1});this.$options.jessibuca=e;var i=this;e.on("error",(function(t){console.log("error"),console.log(t),i.destroy()})),e.on("pause",(function(t){console.log("pause success!"),console.log(t)})),e.on("stats",(function(t){console.log("stats is",t)})),e.on("timeout",(function(){console.log("timeout"),i.destroy(),i.retryCount<=1&&(i.startPlay(i.url),i.retryCount++)}));var n=0,s=0;e.on("timeUpdate",(function(t){s=parseInt(t/6e4),n!==s&&n++})),this.videoVod&&(console.log("create videoVod"),e.on("playbackSeek",(function(t){i.seekPlay(t)})))},cleanPlayer:function(t){this.destroy(),t&&this.stopPlay(),this.playing=!1},destroy:function(){this.$options.jessibuca&&this.$options.jessibuca.destroy(),this.showVideoDialog&&this.create()},tabHandleClick:function(t,e){switch(this.cleanPlayer(!0),this.tabActiveName){case"media":this.videoVod=!1,this.sendDevicePush();break;case"record":this.videoVod=!0;break}},openDialog:function(t,e,i,n){var s=this;this.tabActiveName=t,this.channelId=i,this.deviceId=e,this.streamInfo=n.streamInfo,this.streamId=n.streamInfo.streamId,this.videoUrl=n.streamInfo.flv,this.hasaudio=n.hasAudio,this.showVideoDialog=!0,this.$nextTick((function(){s.preparePlay()}))},preparePlay:function(){switch(this.cleanPlayer(!1),this.tabActiveName){case"media":this.play(this.hasAudio);break;case"record":this.loadDevRecord();break}},sendDevicePush:function(){var t=this;console.log("通知设备推流1："+this.deviceId+" : "+this.channelId),Object(a["l"])(this.deviceId,this.channelId).then((function(e){console.log("开始播放："+t.deviceId+" : "+t.channelId)})),Object(a["d"])(this.deviceId,this.channelId).then((function(e){console.log("流媒体信息："+e.data);var i=JSON.parse(e.data);console.log("playurl："+i.playurl),t.isLoging=!1,t.playing=!0,t.playing=!0,t.streamId=i.streamId,t.videoUrl=i.playurl,t.$options.jessibuca.play(t.videoUrl)}))},play:function(t){this.hasaudio=t,this.isLoging=!1,this.playing=!0,this.$options.jessibuca.play(this.videoUrl)},close:function(){var t=this;this.$options.jessibuca&&(console.log("jessibuca播放器销毁"),this.$options.jessibuca.destroy()),this.streamId&&this.playing&&Object(a["m"])(this.deviceId,this.channelId,this.streamId).then((function(e){console.log("停止推流 streamId："+t.streamId)})),this.videoUrl="",this.queryDate="",this.streamId="",this.videoVod=!1,this.showVideoDialog=!1,this.url={ssrc:"",flv:""}},ptzDirection:function(t,e){console.log("云台方向控制："+t+" : "+e);var i={leftRight:t,upDown:e,moveSpeed:125};Object(o["b"])(this.deviceId,this.channelId,i).then((function(t){console.log("云台方向控制："+JSON.stringify(t))}))},ptzScale:function(t){console.log("云台缩放："+t);var e={inOut:t,scaleSpeed:30};Object(o["c"])(this.deviceId,this.channelId,e).then((function(t){console.log("云台方向控制："+JSON.stringify(t))}))},loadDevRecord:function(){var t=this;if(this.cleanPlayer(!1),this.deviceId&&this.channelId){var e=this.queryDate?new Date(this.queryDate).getTime():new Date((new Date).toLocaleDateString()).getTime(),i=e/1e3,n=Math.floor((e+864e5-1)/1e3),s={start:i,end:n};Object(r["a"])(this.deviceId,this.channelId,s).then((function(e){if(t.hisData=e.data.recordItems,e.data.recordItems){var s=t.hisData.length;s>0?(t.hisData[0].start<i?(t.vodData={start:i,end:n,base:i},t.hisData[0].start=i):t.vodData={start:t.hisData[0].start,end:n,base:i},t.playbackstart(t.hisData)):t.$message({type:"warning",message:"当前通道没有录像"})}else t.$message({type:"warning",message:"当前通道没有录像"})})).catch((function(){t.playerLoading=!1}))}},triggerPlay:function(t){var e=this;this.playing?(clearTimeout(this.timer),this.$options.jessibuca.on("play",(function(){e.quieting=e.$options.jessibuca.quieting})),this.videoVod&&(this.$options.jessibuca.playback(this.url.playurl,{playList:t,fps:20}),this.timer=setTimeout((function(){e.playerLoading=!1}),2e3))):this.playerLoading=!1},playbackstart:function(t){var e=this;if(this.deviceId&&this.channelId)if(this.playerLoading=!0,this.pausing=!1,this.url.ssrc)Object(a["k"])(this.deviceId,this.channelId,this.url.ssrc).then((function(i){var n={start:e.vodData.start,end:e.vodData.end};Object(a["f"])(e.deviceId,e.channelId,n).then((function(t){e.playing=!0,console.log(t.data),e.initUrl(t.data)})).finally((function(){e.triggerPlay(t)}))})).catch((function(){e.playerLoading=!1}));else{var i={start:this.vodData.start,end:this.vodData.end};Object(a["f"])(this.deviceId,this.channelId,i).then((function(t){console.log(t),e.playing=!0,e.initUrl(t.data)})).finally((function(){e.triggerPlay(t)}))}},stopPlay:function(){var t=this;this.streamId&&this.playing&&(this.playerLoading=!0,this.pausing=!1,this.url.playurl="",Object(a["k"])(this.deviceId,this.channelId,this.streamId).then((function(e){t.playing=!1,t.$options.jessibuca&&(t.retryCount=0,t.destroy()),t.url.ssrc="",t.streamId=""})).finally((function(){t.playerLoading=!1})))},playNext:function(t){var e=this;this.playerLoading=!0,this.url.playurl="",Object(a["k"])(this.deviceId,this.channelId).then((function(t){e.playing=!1,e.url.ssrc=""})).finally((function(){e.playerLoading=!1}))},mute:function(){this.playing&&(this.$options.jessibuca.mute(),this.quieting=!0)},cancelMute:function(){this.playing&&(this.$options.jessibuca.cancelMute(),this.quieting=!1)},formatVolumeToolTip:function(t){return"音量条: "+t},changeVolume:function(){this.$options.jessibuca.setVolume(this.volume/100)},screenShot:function(){this.playing&&this.$options.jessibuca.screenshot()},fullscreen:function(){this.playing&&(this.fullscreening=!this.fullscreening,this.$options.jessibuca.setFullscreen(this.fullscreening))},scalePlay:function(){var t=this;this.url.ssrc&&this.playing&&Object(a["j"])(this.deviceId,this.channelId,this.streamId,this.speed).then((function(e){t.$refs.player.scale(t.speed)}))},seekPlay:function(t){var e=this,i=this.vodData.base+3600*t.hour+60*t.min+t.second,n=i-this.vodData.start;if(this.url.ssrc&&this.playing){var s={seek:n};Object(a["i"])(this.deviceId,this.channelId,this.streamId,s).then((function(t){e.$options.jessibuca.setPlaybackStartTime(i)}))}},pause:function(){var t=this;this.url.ssrc&&this.playing&&(this.videoVod?Object(a["g"])(this.deviceId,this.channelId,this.streamId).then((function(e){1===e.code&&(t.pausing=!0,t.$options.jessibuca.pause())})):(this.$options.jessibuca.pause(),this.pausing=!0))},resume:function(){var t=this;this.url.ssrc&&this.pausing&&Object(a["h"])(this.deviceId,this.channelId,this.streamId).then((function(e){"no channel info"===e.data?(t.pausing=!1,t.play()):(t.$options.jessibuca.play(),t.pausing=!1)}))},isPause:function(t){this.paused=t},changeSpeed:function(){this.speed!==val&&(this.speed=val,this.scalePlay())}}},l=c,u=(i("dd2d"),i("8e03"),i("2877")),d=Object(u["a"])(l,n,s,!1,null,null,null);e["default"]=d.exports},"65ec":function(t,e,i){},6827:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i("b775");function s(t,e,i){return Object(n["a"])({url:"/sip/record/devquery/"+t+"/"+e,method:"get",params:i})}},"8e03":function(t,e,i){"use strict";i("cfd2")},cfd2:function(t,e,i){},dd2d:function(t,e,i){"use strict";i("65ec")},e2de:function(t,e,i){"use strict";i.d(e,"e",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r})),i.d(e,"l",(function(){return c})),i.d(e,"m",(function(){return l})),i.d(e,"d",(function(){return u})),i.d(e,"f",(function(){return d})),i.d(e,"k",(function(){return h})),i.d(e,"g",(function(){return p})),i.d(e,"h",(function(){return f})),i.d(e,"i",(function(){return y})),i.d(e,"j",(function(){return m}));var n=i("b775");function s(t){return Object(n["a"])({url:"/sip/channel/list",method:"get",params:t})}function a(t){return Object(n["a"])({url:"/sip/channel/"+t,method:"get"})}function o(t,e){return Object(n["a"])({url:"/sip/channel/"+t,method:"post",data:e})}function r(t){return Object(n["a"])({url:"/sip/channel/"+t,method:"delete"})}function c(t,e){return Object(n["a"])({url:"/sip/player/play/"+t+"/"+e,method:"get"})}function l(t,e,i){return Object(n["a"])({url:"/sip/player/playstop/"+t+"/"+e+"/"+i,method:"get"})}function u(t,e){return Object(n["a"])({url:"/sip/player/playstream/"+t+"/"+e,method:"get"})}function d(t,e,i){return Object(n["a"])({url:"/sip/player/playback/"+t+"/"+e,method:"get",params:i})}function h(t,e,i){return Object(n["a"])({url:"/sip/player/playbackStop/"+t+"/"+e+"/"+i,method:"get"})}function p(t,e,i){return Object(n["a"])({url:"/sip/player/playbackPause/"+t+"/"+e+"/"+i,method:"get"})}function f(t,e,i){return Object(n["a"])({url:"/sip/player/playbackReplay/"+t+"/"+e+"/"+i,method:"get"})}function y(t,e,i,s){return Object(n["a"])({url:"/sip/player/playbackSeek/"+t+"/"+e+"/"+i,method:"get",params:s})}function m(t,e,i,s){return Object(n["a"])({url:"/sip/player/playbackSpeed/"+t+"/"+e+"/"+i,method:"get",params:s})}},f5a7:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o}));var n=i("b775");function s(t){return Object(n["a"])({url:"/sip/device/sipid/"+t,method:"delete"})}function a(t,e,i){return Object(n["a"])({url:"/sip/ptz/direction/"+t+"/"+e,method:"post",data:i})}function o(t,e,i){return Object(n["a"])({url:"/sip/ptz/scale/"+t+"/"+e,method:"post",data:i})}}}]);