var _statcounter=function(_1){var _2=false;function is_admin_project(_3){return [12225189,11548023,11878871,12214659,981359,9560334,6709687,9879613,4124138,204609,10776808,11601825].indexOf(_3)!==-1}try{var _4;var _5=1;if(typeof _1!=="undefined"&&_1.record_pageview){_4=_1;_5=_4._get_script_num()+1}else{if(typeof _1==="undefined"){_4=function(){};_4._pending_tags={}}else{if(_1.start_recording){_4=_1;if(_1._pageview_tags_in){_1=_1._pageview_tags_in}}else{_4=function(){}}if(Object.prototype.toString.call(_1)==="[object Array]"){_4._pending_tags=_1}else{_4._pending_tags={}}}_4._session_increment_calculated={};_4._returning_values={};_4._security_codes={}}_4.push=function(_6){_4._pending_tags=[_6]};var _7=true;var _8=false;if(typeof performance!=="undefined"){try{_8=Math.round(performance.now())}catch(ex){_8=false}}var _9=false;if(document.currentScript&&document.currentScript.src&&document.currentScript.src.indexOf("statcounter.com")!==-1){_9=document.currentScript.src}var _a=-1;var _b="";var _c="statcounter.com";var _d="";var _e="cookie";if(window.sc_client_storage){_e=window.sc_client_storage}if(typeof window.sc_first_party_cookie!="undefined"&&sc_first_party_cookie=="0"){_e="disabled"}if(window.sc_click_stat){_a=window.sc_click_stat}if(window.sc_local){_b=sc_local}else{if(_a==-1){_a=1}_b="https://c."+_c+"/"}if(window.sc_project){_2=parseInt(window.sc_project,10);if(window.sc_security){_4._security_codes[_2]=sc_security}else{if(_4._security_codes[_2]===undefined){_4._security_codes[_2]=""}}}function apply_new_methodology_fixes(_f){var _10=9000000;return ([4344864,4124138,204609].indexOf(_f)!==-1||_f>_10)}function use_performance_tags(_11){return [204609,4124138].indexOf(_11)!==-1}function need_project_config(_12){var ret=true;try{if(!(typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&typeof JSON.parse=="function"&&"sessionStorage" in window&&"withCredentials" in new XMLHttpRequest())){ret=false}if(_sessionStorageGetConfig("sc_project_config_"+_12)!==null&&_sessionStorageGetConfig("sc_project_time_difference_"+_12)!==null){ret=false}if(_sessionStorageGetConfig("sc_block_project_config_"+_12)!==null){ret=false}}catch(ignore){ret=false}return ret}var _14=[30,60,120,180,360,720,1440,2880,10080];function get_referrer(){var _15=""+document.referrer;try{_15=""+parent.document.referrer}catch(ex){_15=""+document.referrer}if(typeof sc_referer_scr08!=="undefined"){_15=sc_referer_scr08}return _15}_4.get_referrer=get_referrer;var _16=0;_4.inject_script=function(url,_18){if(url===undefined||!url.match(/^https?:\/\/(?:[^\/]+\.)?statcounter\.com/)){return}var scr=document.createElement("script");scr.type="text/javascript";scr.async=true;if(_18){scr.onload=_18}scr.src=url;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(scr,s)};function get_page_title(){var _1b=""+document.title;_1b=_1b.substring(0,300);if(encodeURIComponent){_1b=encodeURIComponent(_1b)}else{_1b=escape(_1b)}return _1b}function get_page_url(){var _1c=""+document.location;if(_1c=="about:srcdoc"){_1c=""+document.baseURI}_1c=_1c.substring(0,300);_1c=escape(_1c);return _1c}function get_screen_width(){return screen.width}function get_screen_height(){return screen.height}function get_performance_url_params(_1d){if(_16==0){var _1e="";var _1f="";var _20="";try{if(typeof performance!=="undefined"){var _21=Math.round(performance.now());_1e="&sc_rum_e_s="+_8+"&sc_rum_e_e="+_21;var _22=_21-_8;_1f=get_performance_tags(_1d,_22)}}catch(ex){_1e="";_1f=""}try{if(typeof performance!=="undefined"){var _23=performance.getEntriesByType("resource");for(var i=0;i<_23.length;i++){var _25=_23[i];if(_25.name.includes("statcounter.com/counter/counter.js")||_25.name.includes("statcounter.com/counter/counter_test.js")){_20="&sc_rum_f_s="+Math.round(_25.requestStart)+"&sc_rum_f_e="+Math.round(_25.responseEnd);break}}}}catch(ex){_20=""}return _1e+_1f+_20}return ""}function get_performance_tags(_26,_27){var _28="";if(use_performance_tags(_26)&&typeof performance!=="undefined"){var _29=document.getElementById("sc-ttfb-bd");var _2a="-1";if(_29){_2a=_29.textContent}var _2b=performance.timing.responseStart-performance.timing.connectStart;var _2c=document.getElementById("sc-perf-wh");var _2d=0;if(_2c){_2d=_2c.textContent}var _2e=document.getElementById("sc-perf-pn");var _2f=0;if(_2e){_2f=_2e.textContent}var _30=document.getElementById("sc-perf-db");var _31=0;if(_30){_31=_30.textContent}_28="&sc_ev_scperf_js_exec="+_27+"&sc_ev_scperf_ttfb_frontend="+_2b+"&sc_ev_scperf_ttfb_backend="+_2a+"&sc_ev_scperf_ws="+_2d+"&sc_ev_scperf_pn="+_2f+"&sc_ev_scperf_db="+_31}return _28}function strip_tags(_32,_33){_33=(((_33||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var _34=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,_35=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return _32.replace(_35,"").replace(_34,function($0,$1){return _33.indexOf("<"+$1.toLowerCase()+">")>-1?$0:""})}function sanitise_tags(_38){for(var i=0;i<_38.length;i++){_38[i]=(""+_38[i]).trim()}return _38}function validate_tags(_3a){var _3b=10;var _3c=1;var _3d=300;var _3e=[];if(!(_3a.length%2==0)){_3e.push("Every tag must have a name and value.")}else{if(_3a.length/2>_3b){_3e.push("No more than "+_3b+" tags can be passed - "+_3a.length/2+" passed.")}for(var i=0;i<_3a.length;i++){var _40=(""+_3a[i]).length;if(_40<_3c||_40>_3d){_3e.push("Tag names and values must be between "+_3c+" and "+_3d+" characters in length ('"+_3a[i]+"' is "+_3a[i].length+" characters long).")}}for(var i=0;i<_3a.length;i++){if(strip_tags(""+_3a[i])!=""+_3a[i]){_3e.push("Tag names and values may not contain HTML tags.")}}}if(_3e.length!=0){for(var i=0;i<_3e.length;i++){}return false}return true}function get_tag_qs(_41){function _42(obj,_44){var _45=obj.__proto__||obj.constructor.prototype;return (_44 in obj)&&(!(_44 in _45)||_45[_44]!==obj[_44])}if(Object.prototype.hasOwnProperty){var _42=function(obj,_47){return obj.hasOwnProperty(_47)}}var _48={};if(_42(_41,"tags")&&typeof _41.tags==="object"){var _49=[];for(var tag in _41.tags){_49[_49.length]=tag;_49[_49.length]=_41.tags[tag]}if(validate_tags(_49)){_49=sanitise_tags(_49);for(var i=0;i<_49.length;i=i+2){_48["sc_ev_"+encodeURIComponent(_49[i])]=encodeURIComponent(_49[i+1])}}}return _48}var _4c=[];var _4d=256;var _4e=6;var _4f=52;var _50=Math.pow(_4d,_4e),_51=Math.pow(2,_4f),_52=_51*2,_53=_4d-1;var _54;var _55=function(_56,_57){var key=[];var _59=mixkey(flatten(_57?[_56,tostring(_4c)]:0 in arguments?_56:autoseed(),3),key);var _5a=new ARC4(key);mixkey(tostring(_5a.S),_4c);_54=function(){var n=_5a.g(_4e),d=_50,x=0;while(n<_51){n=(n+x)*_4d;d*=_4d;x=_5a.g(1)}while(n>=_52){n/=2;d/=2;x>>>=1}return (n+x)/d};return _59};function ARC4(key){var t,_60=key.length,me=this,i=0,j=me.i=me.j=0,s=me.S=[];if(!_60){key=[_60++]}while(i<_4d){s[i]=i++}for(i=0;i<_4d;i++){s[i]=s[j=_53&(j+key[i%_60]+(t=s[i]))];s[j]=t}(me.g=function(_65){var t,r=0,i=me.i,j=me.j,s=me.S;while(_65--){t=s[i=_53&(i+1)];r=r*_4d+s[_53&((s[i]=s[j=_53&(j+t)])+(s[j]=t))]}me.i=i;me.j=j;return r})(_4d)}function flatten(obj,_69){var _6a=[],typ=(typeof obj)[0],_6c;if(_69&&typ=="o"){for(_6c in obj){try{_6a.push(flatten(obj[_6c],_69-1))}catch(e){}}}return (_6a.length?_6a:typ=="s"?obj:obj+"\x00")}function mixkey(_6d,key){var _6f=_6d+"",_70,j=0;while(j<_6f.length){key[_53&j]=_53&((_70^=key[_53&j]*19)+_6f.charCodeAt(j++))}return tostring(key)}function autoseed(_72){try{window.crypto.getRandomValues(_72=new Uint8Array(_4d));return tostring(_72)}catch(e){return [+new Date,window,window.navigator.plugins,window.screen,tostring(_4c)]}}function tostring(a){return String.fromCharCode.apply(0,a)}mixkey(Math.random(),_4c);function detectBrowserFeatures(){var _74=[];var i;var _76;var _77={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};var _78=(new RegExp("Mac OS X.*Safari/")).test(navigator.userAgent)?window.devicePixelRatio||1:1;if(!((new RegExp("MSIE")).test(navigator.userAgent))){if(navigator.mimeTypes&&navigator.mimeTypes.length){for(var i in _77){if(Object.prototype.hasOwnProperty.call(_77,i)){_76=navigator.mimeTypes[_77[i]];_74.push((_76&&_76.enabledPlugin)?"1":"0")}}}if(typeof navigator.javaEnabled!=="unknown"&&typeof navigator.javaEnabled!=="undefined"&&navigator.javaEnabled()){_74.push("java")}if(typeof window.GearsFactory==="function"){_74.push("gears")}}_74.push(screen.width*_78+"x"+screen.height*_78);return _74.join("")}function generate_uuid(_79){var now=new Date();var _7b=false;if(_79===undefined){_79=32;if(_7b){_79=36}}var _7c=Math.round(now.getTime()/1000)+now.getMilliseconds();var _7d=(navigator.userAgent||"")+(navigator.platform||"")+detectBrowserFeatures()+now.getTimezoneOffset()+window.innerWidth+window.innerHeight+window.screen.colorDepth+document.URL+_7c;_55(_7d);var _7e="0123456789ABCDEF".split(""),_7f=new Array(_79),rnd=0,r;for(var i=0;i<_79;i++){if(_7b&&(i==8||i==13||i==18||i==23)){_7f[i]="-"}else{if((i==12&&!_7b)||(i==14&&_7b)){_7f[i]="4"}else{if((i==13&&!_7b)||(i==15&&_7b)){_7f[i]="F"}else{if(rnd<=2){rnd=33554432+(_54()*16777216)|0}r=rnd&15;rnd=rnd>>4;_7f[i]=_7e[(i==19)?(r&3)|8:r]}}}}return _7f.join("")}var _83;if(typeof window.sc_cookie_domain=="undefined"){_83=document.location.host.replace(/^www\./,"")}else{_83=window.sc_cookie_domain}if(_83.substring(0,1)!="."){_83="."+_83}function _localStorageAvailable(){var _84=false;if("localStorage" in window){try{_84=window["localStorage"]!==null}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){if(!e.number||parseInt(e.number,10)!==-2147024891){throw e}}}}return _84}function _setLocalStorage(_85,_86,_87){if(_localStorageAvailable()){try{if(_85==="is_visitor_unique"){localStorage.setItem("statcounter.com/localstorage/",_86)}else{localStorage.setItem("statcounter_"+_85,_86)}}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){if(!e.number||parseInt(e.number,10)!==-2147024891){throw e}}return false}return true}return false}function setLocal(_88,_89,_8a,_8b,_8c,_8d){if(typeof _89==="string"){_89=[_89]}if(_8b===undefined){_8b=""}if(_8c===undefined){_8c=30}var _8e=false;if(_e=="localStorage"){_8e=_setLocalStorage(_88,_8b+_89.join("-"),_8a);if(!_8e){_8e=_writeCookie(_88,_8b+_89.join("-"),_8a,undefined,_8d)}else{if(_readCookie(_88)!==null){_removeCookie(_88,_8a)}}}else{var _8f=_89.slice(0,_8c).join("-");_8e=_writeCookie(_88,_8b+_8f,_8a,undefined,_8d);if(!_8e){_8e=_setLocalStorage(_88,_8b+_89.join("-"),_8a)}else{if(_89.length>_8c){_setLocalStorage(_88,"mx"+_89.slice(_8c).join("-"),_8a)}else{_removeLocalStorage(_88)}}}return _8e}function getLocal(_90,_91){var val=null;if(_localStorageAvailable()){if(_90==="is_visitor_unique"){val=localStorage.getItem("statcounter.com/localstorage/")}else{val=localStorage.getItem("statcounter_"+_90)}}if(_e=="localStorage"&&val!==null&&val.substring(0,2)=="rx"){return val}var _93=_readCookie(_90,_91);if(val!==null){if(_93===null&&val.substring(0,2)=="rx"){return val}else{if(_93!==null&&val.substring(0,2)=="mx"){_93+="-"+val.substring(2)}}}return _93}function _removeLocalStorage(_94){if(_localStorageAvailable()){if(_94==="is_visitor_unique"){localStorage.removeItem("statcounter.com/localstorage/")}localStorage.removeItem("statcounter_"+_94)}}function removeLocal(_95,_96){_removeLocalStorage(_95);if(_readCookie(_95)){_removeCookie(_95,_96)}}function _readCookie(_97,_98){var _99="sc_"+_97+"=";var ret=null;if(document.cookie){var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" "){c=c.substring(1,c.length)}if(c.indexOf(_99)==0){var _9e=c.substring(_99.length,c.length);if(ret&&_98!==undefined&&ret.indexOf(""+_98+".")!==-1&&_9e.indexOf(""+_98+".")===-1){}else{ret=_9e}}}}return ret}function _writeCookie(_9f,_a0,_a1,_a2,_a3){var _a4=false;if(_a2===undefined){_a4=1000*60*60*24*365*2}else{if(_a2!=="session"){_a4=1000*_a2}}var _a5="";if(_a4!==false){var _a6=new Date();_a6.setTime(_a6.getTime()+_a4);_a5="; expires="+_a6.toGMTString()}var _a7=3050;if(_a0.length>_a7-50&&_a0.substring(0,_a7).indexOf("-")!==-1){_a0=_a0.substring(0,_a0.substring(0,_a7).lastIndexOf("-"))}var _a8="; SameSite=Lax";document.cookie="sc_"+_9f+"="+_a0+_a5+"; domain="+_a1+"; path=/"+_a8;var rc=_readCookie(_9f,_a3);if(rc!==null&&rc===_a0){return true}else{return false}}function _removeCookie(_aa,_ab){if(document.location.host=="www"+_ab){document.cookie="sc_"+_aa+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.www"+_ab+"; path=/; SameSite=Lax"}document.cookie="sc_"+_aa+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+_ab+"; path=/; SameSite=Lax"}function _getConfigDataStructureFromSession(){var _ac={};try{if(sessionStorage.getItem("statcounter_config")!==null){_ac=JSON.parse(sessionStorage.getItem("statcounter_config"))}}catch(ignore){_ac={}}return _ac}function _sessionStorageGetConfig(key){if(!("sessionStorage" in window)){return null}var _ae=_getConfigDataStructureFromSession();if(_ae[key]!==undefined){return _ae[key]}var _af=null;try{_af=sessionStorage.getItem(key)}catch(ignore){return null}if(_af!==null){_sessionStorageSetConfig(key,_af);sessionStorage.removeItem(key);return _af}return null}function _sessionStorageSetConfig(key,_b1){if(!("sessionStorage" in window)){console.log("returning false");return false}var _b2=_getConfigDataStructureFromSession();try{_b2[key]=_b1;return sessionStorage.setItem("statcounter_config",JSON.stringify(_b2))}catch(ignore){return false}}var _b3=(function(){var _b4=false;return function(_b5){if(_b4){return}var _b6=_sessionStorageGetConfig("record_"+_b5);if(!_b6||!_b6.match(/(^on$|test$|wsdev$|^dev[0-9]*)/)){return}if(isLegacyIE()){return}if(!_4._session_increment_calculated[_b5]){return}if(!_sessionStorageGetConfig("sc_project_time_difference_"+_b5)){return}if(_4.start_recording){_4.start_recording(_b5,_b6)}else{var _b7="https://www.statcounter.com/counter/recorder.js";if(_9){_b7=_9.replace(/\/counter([^\/])/,"/recorder$1").replace("_xhtml","");_b7=_b7.replace(/^http:\/\//,"https://")}if(_b6.indexOf("test")!=-1){_b7=_b7.replace(/\/recorder(.[^t])/,"/recorder_test$1")}if(_b6.indexOf("_")!=-1){_b7=_b7.replace(/\.js/,"_"+_b6.split("_")[1]+".js")}if(_b6.substring(0,3)=="dev"&&_b6!=="dev"){_b7=_b7.replace(/\/\/(www\.|secure\.)?/,"//"+_b6.split("_")[0].replace(/\//g,"").replace("test","").replace("wsdev","")+".")}else{_b7=_b7.replace(/\/\/(secure\.)?statcounter\./,"//www.statcounter.")}_4.inject_script(_b7,function(){_statcounter.start_recording(_b5,_b6)})}_b4=true}}());_4.get_config=function(_b8,_b9){var _ba=false;if(_b8.match(/sc_project=[0-9]+/)){_ba=parseInt(_b8.match(/sc_project=([0-9]+)/)[1],10)}if(_b8.substring(0,1)=="?"){var url=_b+"t.php"+_b8}else{var url=_b8}url=url+"&get_config=true";var _bc=new XMLHttpRequest();_bc.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var _bd=JSON.parse(this.responseText);_b9(_bd)}};_bc.withCredentials=true;if(_ba!==false){_bc.addEventListener("error",function(_be){_sessionStorageSetConfig("sc_block_project_config_"+_ba,1)})}_bc.open("GET",url,true);_bc.send()};function config_ping(_bf,_c0,_c1){_4.get_config(_c0,function(_c2){_sessionStorageSetConfig("sc_project_config_"+_bf,1);_sessionStorageSetConfig("sc_project_time_difference_"+_bf,parseInt(_c2["time_difference"]));if(_c2["visitor_recording"]===1){_4.record(_bf)}else{if(_c2["visitor_recording"]===2){_4.record(_bf,"test")}}if(typeof _c1!=="undefined"){_c1(_c2)}})}var _c3={"google":null,"bing":["q"],"search.yahoo":null,"m.yahoo":null,"m2.yahoo":null,"baidu":["wd","word"],"yandex":["text"],"ya.ru":["text"],"haosou":["q"],"so.com":["q"],"360.cn":["q"],"360sou":["q"],"aol":["query","q"],"duckduckgo":null,"ask.com":["q","QUERYT"],"mail.ru":["words"],"sogou":["q","query"]};var _c4={"fb":["facebook.com","fb.me"],"pi":["pinterest.com"],"tw":["twitter.com","t.co"],"ln":["linkedin.com"],"in":["instagram.com"],"rd":["reddit.com"],"tb":["tumblr.com"],"st":["stumbleupon.com"],"yt":["youtube.com"],"gp":["plus.google.com","plus.url.google.com"]};function check_root_domains_match(a,b){var _c7=a.split(".");var _c8=b.split(".");var _c9=Math.min(_c7.length,_c8.length);var _ca=2;if(_c7.length>1&&((_c7[_c7.length-2].length<=3&&_c7[_c7.length-1] in {"at":1,"au":1,"br":1,"es":1,"hu":1,"il":1,"nz":1,"tr":1,"uk":1,"us":1,"za":1})||_c7[_c7.length-1]=="kr"||_c7[_c7.length-1]=="ru"||(_c7[_c7.length-1]=="au"&&_c7[_c7.length-2] in {"csiro":1})||(_c7[_c7.length-1]=="at"&&_c7[_c7.length-2] in {"priv":1})||(_c7[_c7.length-1]=="fr"&&_c7[_c7.length-2] in {"avocat":1,"aeroport":1,"veterinaire":1})||(_c7[_c7.length-1]=="hu"&&_c7[_c7.length-2] in {"film":1,"lakas":1,"ingatlan":1,"sport":1,"hotel":1})||(_c7[_c7.length-1]=="nz"&&_c7[_c7.length-2] in {"geek":1,"kiwi":1,"maori":1,"school":1,"govt":1,"health":1,"parliament":1})||(_c7[_c7.length-1]=="il"&&_c7[_c7.length-2] in {"muni":1})||(_c7[_c7.length-1]=="za"&&_c7[_c7.length-2] in {"school":1})||(_c7[_c7.length-1]=="tr"&&_c7[_c7.length-2] in {"name":1})||(_c7[_c7.length-1]=="uk"&&_c7[_c7.length-2] in {"police":1}))){_ca=3}for(var i=1;i<=_c9;i++){if(_c7[_c7.length-i]!=_c8[_c8.length-i]){return false}if(i>=_ca){return true}}return _c7.length==_c8.length}function classify_referrer(_cc,r){if(r==""){return "d"}var _ce=r.split("/")[2].replace(/^www\./,"");var _cf=document.location.host.replace(/^www\./,"");if(apply_new_methodology_fixes(_cc)){if(_cf==_ce){return "internal"}if(check_root_domains_match(_ce,_cf)){return "internal"}}if(r.search(/\bgoogle\..*\?.*adurl=http/)!==-1){return "p"}var _d0=["utm_source=bing","?gclid=","&gclid=","utm_medium=cpc","utm_medium=paid-media","utm_medium=ppc"];for(var i=0;i<_d0.length;i++){if(document.location.search.indexOf(_d0[i])!==-1){return "p"}}var _d2=["utm_medium=email"];for(var i=0;i<_d2.length;i++){if(document.location.search.indexOf(_d2[i])!==-1){return "e"}}if(!apply_new_methodology_fixes(_cc)){if(_cf==_ce){return "internal"}}for(var _d3 in _c3){if(_ce.replace(_d3,"#").split(".").indexOf("#")!==-1){if(_c3[_d3]===null){return _d3}for(var i=0;i<_c3[_d3].length;i++){var _d4=_c3[_d3][i];if(r.indexOf("?"+_d4+"=")!==-1||r.indexOf("&"+_d4+"=")!==-1){return _d3}}}}for(var _d5 in _c4){for(var i=0;i<_c4[_d5].length;i++){var _d3=_c4[_d5][i];if(_ce.replace(_d3,"#").split(".").indexOf("#")!==-1){return _d5}}}return _ce}function categorize_class(cls){if(cls=="d"||cls=="p"||cls=="e"||cls=="internal"){return cls}if(cls in _c3){return "o"}if(cls in _c4){return "s"}return "r"}var _d7=escape(get_referrer());_4.record_pageview=function(_d8,_d9){var _da="invisible";if(typeof _d8==="undefined"){if(_2===false){if(window.usr){_d8=999}else{console.error("Need to define a global `var sc_project` and `var security code`, or else call record_pageview with these arguments");document.writeln("Statcounter code invalid. Insert a fresh copy.");return}}else{_d8=_2}if(window.sc_invisible&&window.sc_invisible==1){_da="invisible"}else{if(window.sc_text){_da="text"}else{_da="image"}}}else{_d8=parseInt(_d8,10);if(isNaN(_d8)){console.error("Please call record_pageview with your statcounter project id");return}else{if(typeof _d9==="string"){_4._security_codes[_d8]=_d9}else{if(_4._security_codes[_d8]==="undefined"){console.error("Please include the security code for project "+_d8+" as the second argument to record_pageview");return}}}}if(_4._security_codes[_d8]===undefined){_4._security_codes[_d8]=""}var _db=0;if(_d8==4135125||_d8==6169619||_d8==6222332||_d8==5106510||_d8==6311399||_d8==6320092||_d8==5291656||_d8==7324465||_d8==6640020||_d8==4629288||_d8==1480088||_d8==2447031){if(Math.floor(Math.random()*6)!=1){_db=1}}if(_db==1){}else{if(document.webkitVisibilityState=="prerender"){if(_5==1){function delayed_send_pageview(){if(document.webkitVisibilityState!="prerender"){for(var _dc in _4._security_codes){send_pageview(parseInt(_dc,10),"invisible",{"p":2})}document.removeEventListener("webkitvisibilitychange",delayed_send_pageview,false)}}document.addEventListener("webkitvisibilitychange",delayed_send_pageview,false)}gen_counter(_d8,_da,false,{},{"p":1})}else{send_pageview(_d8,_da,{"p":0})}}};var _dd={};function send_pageview(_de,_df,_e0){var _e1={};_e1["u1"]="za";var _e2=need_project_config(_de);_dd[_de]=(new Date()).getTime();var _e3={};if(!apply_new_methodology_fixes(_de)){var _e4=classify_referrer(_de,_d7);var _e5=categorize_class(_e4);if(_e4!="internal"){_e3["rcat"]=_e5;_e3["rdom"]=_e4}}var _e6=Math.round((new Date()).getTime()/1000);if(_e!="disabled"){if(apply_new_methodology_fixes(_de)){var _e4=classify_referrer(_de,_d7);var _e5=categorize_class(_e4);if(_e4!="internal"){_e3["rcat"]=_e5;_e3["rdom"]=_e4}}try{var _e7=JSON.parse(localStorage.getItem("sc_medium_source"));if(_e7==null){_e7={}}var _e8=null;var _e9=null;var _ea=null;var msl=0;for(var k in _e7){if(_e8===null||_e7[k]>_e7[_e8]){_e8=k}var _ed=categorize_class(k);if(_e5==_ed&&(_e9===null||_e7[k]>_e7[_e9])){_e9=k}if(_ed=="r"&&(_ea===null||_e7[k]<_e7[_ea])){_ea=k}msl+=1}if(msl>30&&_ea!==null){delete _e7[_ea]}if(sessionStorage.getItem("statcounter_bounce")){sessionStorage.removeItem("statcounter_bounce");_e3["bb"]=0}var _ee=30;if(!apply_new_methodology_fixes(_de)){_ee=15}if(_e4=="d"&&_e8!==null&&_e8!="d"&&(_e6-_e7[_e8])<60*_ee){_e4="internal"}if(apply_new_methodology_fixes(_de)){if(sessionStorage.getItem("statcounter_session")&&(_e6-parseInt(sessionStorage.getItem("statcounter_session"),10))<60*30){_e4="internal"}sessionStorage.setItem("statcounter_session",_e6)}if(!apply_new_methodology_fixes(_de)){if(_e5=="r"&&sessionStorage.getItem("statcounter_exit_domain")==_e4){_e4="internal"}}if(_e4=="internal"){if(_e8!==null){_e3["rcat"]=categorize_class(_e8);if(_e3["rdom"]!==undefined){delete _e3["rdom"]}_e3["rdomo"]=_e8;_e3["rdomg"]=_e6-_e7[_e8];_e7[_e8]=_e6}}else{var _ef=false;if(_e4 in _e7){if(_e4==_e8){if(_e3["rdom"]!==undefined){_e3["rdomo"]=_e3["rdom"];delete _e3["rdom"]}}_e3["rdomg"]=_e6-_e7[_e4];if(_e6-_e7[_e4]<60*30){_ef=true}}else{_e3["rdomg"]="new"}if(_e3["bb"]===undefined&&!_ef){sessionStorage.setItem("statcounter_bounce","1");_e3["bb"]=1}if(_e9!==null&&(!(_e4 in _e7)||_e4!=_e9)){_e3["rcatg"]=_e6-_e7[_e9]}_e7[_e4]=_e6}try{localStorage.setItem("sc_medium_source",JSON.stringify(_e7))}catch(maybe_not_enough_space){if(apply_new_methodology_fixes(_de)){_e3={}}}}catch(e){if(apply_new_methodology_fixes(_de)){_e3={}}}for(var arg in _e3){_e0[arg]=_e3[arg]}if(_e3["rdom"]!==undefined){var _f1=true}else{var _f1=false}var _f2=_4.update_cookie(_de,_e6,_f1);if(_f2["session_incremented"]){var _f3=_sessionStorageGetConfig("record_"+_de);if(_f3&&!_f3.match(/(^test$|wsdev$|^dev[0-9]*)/)){_e2=true;_sessionStorageSetConfig("sc_project_time_difference_"+_de,false)}}_4._session_increment_calculated[_de]=true;_e0["jg"]=_f2["jg"];_e0["rr"]=_f2["rr"];if(_f2["u1"]!==undefined){_e1["u1"]=_f2["u1"]}}else{}if(Object.prototype.toString.call(_4._pending_tags)==="[object Array]"){var _f4=_4._pending_tags.length;if(_f4>=1){var _f5=get_tag_qs(_4._pending_tags[0]);for(var arg in _f5){_e0[arg]=_f5[arg]}}}_4._pending_tags={};gen_counter(_de,_df,_e2,_e1,_e0);_d7=get_page_url();_b3(_de)}function gen_counter(_f6,_f7,_f8,_f9,_fa){if(_f6!==999){_f9["sc_project"]=_f6}else{if(window.usr){_f9["usr"]=window.usr}}_f9["java"]=1;_f9["security"]=_4._security_codes[_f6];_f9["sc_snum"]=_5;_f9["sess"]=_4.version();var _fb=_b;if(_f7=="text"){_fb+="text.php?"}else{_fb+="t.php?"}for(var arg in _f9){_fb+="&"+arg+"="+_f9[arg]}_fb=_fb.replace("?&","?");_fa["resolution"]=get_screen_width();_fa["h"]=get_screen_height();_fa["camefrom"]=_d7.substring(0,600);_fa["u"]=get_page_url();_fa["t"]=get_page_title();if(_f7=="invisible"){_fa["invisible"]="1"}else{if(_f7=="text"){_fa["text"]=window.sc_text}}var _fd="";for(var arg in _fa){_fd+="&"+arg+"="+_fa[arg]}if(_f7=="invisible"){var _fe=false;if(_d!=""&&typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&"sessionStorage" in window){_fe=true}var _ff=false;if(_fe){try{var _100=sessionStorage.getItem("statcounter_pending");if(!_100){var _101={}}else{try{var _101=JSON.parse(_100)}catch(ignore){var _101={}}}if(_101[_f6]===undefined){_101[_f6]={}}var now=new Date().getTime();_101[_f6][now]=_fd;while(true){_100=JSON.stringify(_101);if(_100=="{}"){sessionStorage.removeItem("statcounter_pending");break}var _103=_100.split(/:.{20}/).length-1;if(_103<20){var _104=true;try{sessionStorage.setItem("statcounter_pending",_100)}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){throw e}_104=false}if(_104){break}}var _105=false;var _106=false;var _107=false;for(var _108 in _101){for(var _109 in _101[_108]){var _10a=/jg=(\d+)/.exec(_101[_108][_109]);if(_10a!==null){var _10b=parseInt(_10a[1])}else{var _10b=false}if(_105===false||(_10b!==false&&_10b<_105)){if(_10b!==false){_105=_10b}_106=_108;_107=_109}}}if(_107===false){break}delete _101[_106][_107];if(JSON.stringify(_101[_106])=="{}"){delete _101[_106]}}for(var ts in _101[_f6]){(function(_10d,_10e){var _10f=_101[_10e][_10d];function post_hit_pending_cleanup(){if(_101[_10e]!==undefined){delete _101[_10e][_10d];if(JSON.stringify(_101[_10e])=="{}"){delete _101[_10e]}}var _110=JSON.stringify(_101);if(_110=="{}"){sessionStorage.removeItem("statcounter_pending")}else{sessionStorage.setItem("statcounter_pending",_110)}}var _111=_fb+_10f;if(_10d!=now){_111+="&pg="+Math.round((now-_10d)/1000)}else{_ff=true;_111+=get_performance_url_params(_f6)}if(_f8){config_ping(_f6,_111,function(_112){post_hit_pending_cleanup()})}else{if(!navigator.sendBeacon){var _113=new Image();_113.onload=function(){post_hit_pending_cleanup()};_113.src=_111+"&sc_random="+Math.random()}else{navigator.sendBeacon(_111,"");post_hit_pending_cleanup()}}})(parseInt(ts,10),_f6)}}catch(e){}}if(!_fe||!_ff){var _114=_fb+get_performance_url_params(_f6)+_fd;if(_f8){config_ping(_f6,_114)}else{if(!navigator.sendBeacon){var _115=new Image();_115.src=_114+"&sc_random="+Math.random()}else{navigator.sendBeacon(_114,"")}}}}else{var _114=_fb+get_performance_url_params(_f6)+_fd;var _116="sc_counter_"+_f6;if(_5!=1){_116+="_"+_5}if(_f7=="text"){if(_f8){document.writeln("<span class=\"statcounter\" id=\""+_116+"\"></span>");config_ping(_f6,_114,function(_117){document.getElementById(_116).innerHTML=_117["text"]})}else{document.writeln("<scr"+"ipt"+" src=\""+_114.replace(/&/g,"&amp;")+"\"></scr"+"ipt>")}}else{if(window.sc_counter_width&&window.sc_counter_height){var _118=" width=\""+sc_counter_width+"\" height=\""+sc_counter_height+"\""}var _119="StatCounter - Free Web Tracker and Counter";if(window.sc_remove_alt){_119=""}if(window.sc_remove_link){var _11a="";var _11b=""}else{var _11a="<a id=\""+_116+"\" class=\"statcounter\" href=\"https://www."+_c+"/\" target=\"_blank\">";var _11b="</a>"}if(_f8){document.writeln("<span class=\"statcounter\">"+_11a+"Statcounter"+_11b+"</span>");config_ping(_f6,_114,function(_11c){var _11d="<img src=\""+_11c["counter_image"]+"\" alt=\""+_119+"\" border=\"0\""+_118+">";document.getElementById(_116).innerHTML=_11d})}else{_114+="&sc_random="+Math.random();document.writeln("<span class=\"statcounter\">"+_11a+"<img src=\""+_114.replace(/&/g,"&amp;")+"\" alt=\""+_119+"\" border=\"0\""+_118+">"+_11b+"</span>")}}}_16++}function sc_process_anchor(_11e){var _11f=function(){for(var _120 in _4._security_codes){sc_clickstat_call(parseInt(_120,10),this)}return true};if(_11e.addEventListener){_11e.addEventListener("mousedown",_11f)}else{if(_11e.attachEvent){_11e.attachEvent("onmousedown",_11f)}}}function sc_none(){return}function sc_delay(){if(window.sc_click_stat){var d=window.sc_click_stat}else{var d=0}var n=new Date();var t=n.getTime()+d;while(n.getTime()<t){var n=new Date()}}function sc_clickstat_call(_124,_125){var _126="7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";if(typeof (window.sc_download_type)=="string"){_126=window.sc_download_type}var _127="https?|ftp|telnet|ssh|ssl|mailto|spotify|tel";var _128="ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";var dl=new RegExp("\\.("+_126+")$","i");var lnk=new RegExp("^("+_127+"):","i");var _12b=new RegExp("^("+_128+")$","i");var _12c=location.host.replace(/^www\./i,"");var _12d=_12c.split(".");var _12e=_12d.pop();var _12f=_12d.pop();if(_12b.test(_12f)){_12e=_12f+"."+_12e;_12f=_12d.pop()}_12e=_12f+"."+_12e;var _130="^https?://(.*)("+_12e+"|webcache.googleusercontent.com)";var _131=new RegExp(_130,"i");if(_125){var _132=0;if(lnk.test(_125)){if((_131.test(_125))){if(dl.test(_125)){_132=1}else{if(window.sc_exit_link_detect&&new RegExp(sc_exit_link_detect,"i").test(_125)){_132=2}else{if(_a==2){_132=2}}}}else{_132=2}}if(_132!=0){var _133=escape(_125);if(_133.length>0){if(!apply_new_methodology_fixes(_124)){if(_132==2&&_e!="disabled"){try{sessionStorage.setItem("statcounter_exit_domain",_133.split("/")[2].replace(/^www\./,""))}catch(ignore){}}}var _134=_b+"click.gif?sc_project="+_124+"&security="+_4._security_codes[_124]+"&c="+_133+"&m="+_132+"&u="+get_page_url()+"&t="+get_page_title()+"&sess="+_4.version()+"&rand="+Math.random();var _135=Math.round((new Date()).getTime()/1000);var _136=_4.update_cookie(_124,_135);if(_136["u1"]!==undefined){_134+="&u1="+_136["u1"]}_134+="&jg="+_136["jg"];_134+="&rr="+_136["rr"];var _137=new Image();_137.onload=sc_none;_137.src=_134;if(_4._add_recording_event){_4._add_recording_event(_132==1?"download":_132==2?"exit":"unknown",{"link":unescape(_133)})}sc_delay()}}}}var _138="googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";var _139="^aswift_[0-9]+$";var _13a;var _13b;var _13c;var _13d;function sc_adsense_click(_13e,_13f){if(_13f.src.match(_138)){var _140=escape(_13f.src)}else{var _140=escape("Google Adsense "+_13f.width+"x"+_13f.height)}var _141=_b+"click.gif?sc_project="+_13e+"&security="+_4._security_codes[_13e]+"&c="+_140+"&m=2&u="+get_page_url()+"&t="+get_page_title()+"&sess="+_4.version()+"&rand="+Math.random();var _142=Math.round((new Date()).getTime()/1000);var _143=_4.update_cookie(_13e,_142);if(_143["u1"]!==undefined){_141+="&u1="+_143["u1"]}_141+="&jg="+_143["jg"];_141+="&rr="+_143["rr"];if(!navigator.sendBeacon){var i=new Image();i.src=_141;sc_delay()}else{navigator.sendBeacon(_141,"")}if(_4._add_recording_event){_4._add_recording_event("adsense",{"link":unescape(_140)})}}function sc_adsense_init(){var _145=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;var _146=/Firefox/.test(navigator.userAgent)&&/Android/.test(navigator.userAgent);if(_7&&(_145||_146)){var el=document.getElementsByTagName("iframe");for(var i=0;i<el.length;i++){if(el[i].id.substring(0,6)=="aswift"){el[i].addEventListener("mouseenter",function(e){for(var _14a in _4._security_codes){sc_adsense_click(parseInt(_14a,10),this)}})}}}else{if(document.all&&typeof window.opera=="undefined"){var el=document.getElementsByTagName("iframe");for(var i=0;i<el.length;i++){if(el[i].src.match(_138)||el[i].id.match(_139)){el[i].onfocus=function(){for(var _14b in _4._security_codes){sc_adsense_click(parseInt(_14b,10),this)}}}}}else{if(typeof window.addEventListener!=="undefined"){var _14c="unload";if(_7){_14c="beforeunload";focus();window.addEventListener("blur",function(){var _14d=document.activeElement;_13c=_14d;_13d=new Date().getTime()})}window.addEventListener(_14c,sc_exitpage,false);window.addEventListener("mousemove",sc_getmouse,true)}}}}function isLegacyIE(){var ua=navigator.userAgent;var msie=ua.indexOf("MSIE ");if(msie>0){return 10>=parseInt(ua.substring(msie+5,ua.indexOf(".",msie)),10)}var _150=ua.indexOf("Trident/");if(_150>0){var rv=ua.indexOf("rv:");return 11>=parseInt(ua.substring(rv+3,ua.indexOf(".",rv)),10)}return false}function sc_getmouse(e){if(typeof e.pageX=="number"){_13a=e.pageX;_13b=e.pageY}else{if(typeof e.clientX=="number"){_13a=e.clientX;_13b=e.clientY;if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){_13a+=document.body.scrollLeft;_13b+=document.body.scrollTop}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){_13a+=document.documentElement.scrollLeft;_13b+=document.documentElement.scrollTop}}}}}function sc_findy(obj){var y=0;while(obj){y+=obj.offsetTop;obj=obj.offsetParent}return (y)}function sc_findx(obj){var x=0;while(obj){x+=obj.offsetLeft;obj=obj.offsetParent}return (x)}function sc_exitpage(e){var ad=document.getElementsByTagName("iframe");if(typeof _13a!="undefined"){for(var i=0;i<ad.length;i++){var _15a=sc_findx(ad[i]);var _15b=sc_findy(ad[i]);var adW=parseInt(_15a,10)+parseInt(ad[i].width,10)+15;var adH=parseInt(_15b,10)+parseInt(ad[i].height,10)+10;var _15e=(_13a>(_15a-10)&&_13a<adW);var _15f=(_13b>(_15b-10)&&_13b<adH);if(_15f&&_15e){if(ad[i].src.match(_138)||ad[i].id.match(_139)){for(var _160 in _4._security_codes){sc_adsense_click(parseInt(_160,10),ad[i])}}}}}if(_7){if(typeof _13c!="undefined"&&_13c.id.substring(0,6)=="aswift"){var _161=new Date().getTime()-_13d;if(_161<300){for(var _160 in _4._security_codes){sc_adsense_click(parseInt(_160,10),_13c)}}}}}function initiate_click_detection(){var _162=document.getElementsByTagName("a");var _163=document.getElementsByTagName("area");for(var i=0;i<_162.length;i++){var _165=_162[i];sc_process_anchor(_165)}for(var i=0;i<_163.length;i++){var _165=_163[i];if(typeof _165.hasAttribute==="function"&&_165.hasAttribute("href")){sc_process_anchor(_165)}}if(typeof window.addEventListener!="undefined"){window.addEventListener("load",sc_adsense_init,false)}else{if(typeof document.addEventListener!="undefined"){document.addEventListener("load",sc_adsense_init,false)}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",sc_adsense_init)}else{if(typeof window.onload=="function"){var _166=onload;window.onload=function(){_166();sc_adsense_init()}}else{window.onload=sc_adsense_init}}}}}_4.update_cookie=function(_167,_168,_169){if(_168===undefined){_168=Math.round((new Date()).getTime()/1000)}var _16a=_sessionStorageGetConfig("sc_project_time_difference_"+_167);var ret={};var _16c="1.1.1.1.1.1.1.1.1";var _16d="is_visitor_unique";try{var _16e=getLocal(_16d,_167)}catch(e){var _16e=false;_d=".ex"}var _16f=[];var _170=[];if(_16e&&_16e.substring(0,2)=="rx"){removeLocal(_16d,_83);var _171=_16e.substring(2);_16f=_171.split("-");var _172=false;var _173=false;for(var i=0;i<_16f.length;i++){var _175=_16f[i].split(".");if(parseInt(_175[0],10)==_167){_172=true;var _176=parseInt(_175[1],10);_4._returning_values[_167]=[];var _177=2;if(_175[2].length==32){_d="."+_175[2];_177=3}else{_d=_173}for(var ir=0;ir<_14.length;ir++){var rval=parseInt(_175[ir+_177],10);if(isNaN(rval)){rval=1}_4._returning_values[_167].push(rval)}ret["jg"]=_168-_176;for(var ir=0;ir<_14.length;ir++){if(_169){_4._returning_values[_167][ir]++}else{if(_168>(_176+60*_14[ir])){if(_14[ir]*60===_16a){ret["session_incremented"]=true}_4._returning_values[_167][ir]++}}}ret["rr"]=_4._returning_values[_167].join(".");_170.push(""+_167+"."+_168+_d+"."+_4._returning_values[_167].join("."))}else{_170.push(_16f[i]);if(i==0&&_175[2].length==32&&_d==""){_d="."+_175[2]}}if(i==0){_173=_d}}if(!_172){if(_170.length==0&&_d==""){_d="."+generate_uuid()}_170.push(""+_167+"."+_168+_d+"."+_16c);_4._returning_values[_167]=_16c.split(".");ret["jg"]="new";ret["rr"]=_16c}_170.sort(function(a,b){return parseInt(b.split(".")[1],10)-parseInt(a.split(".")[1],10)});for(var iv=1;iv<_170.length;iv++){_170[iv]=_170[iv].replace("."+_170[0].split(".")[2]+".",".")}var _17d=setLocal(_16d,_170,_83,"rx",3,_167);if(!_17d){}}else{if(_d!=".ex"){_d="."+generate_uuid();_170=[""+_167+"."+_168+_d+"."+_16c];var _17e=setLocal(_16d,_170,_83,"rx",3,_167);if(_17e){_4._returning_values[_167]=_16c.split(".");ret["jg"]="new";ret["rr"]=_16c}else{_d=".na"}}}if(_d!=""){ret["u1"]=_d.substring(1)}return ret};_4.get_visitor_id=function(){if(_d.length>1){return _d.substring(1)}return "x-no-visitor"};_4.get_session_num=function(_17f){var _180=_sessionStorageGetConfig("sc_project_time_difference_"+_17f);if(_180!=false&&_4._session_increment_calculated[_17f]&&_4._returning_values[_17f].length==_14.length){for(var i=0;i<_14.length;i++){if(_14[i]*60==parseInt(_180)){return _4._returning_values[_17f][i]}}}if(_180===null){return "x-no-session-num-99"+Math.round(1000*Math.random())}else{if(!_4._session_increment_calculated[_17f]){return "x-no-session-num-98"+Math.round(1000*Math.random())}else{if(_4._returning_values[_17f].length!==_14.length){return "x-no-session-num-97"+Math.round(1000*Math.random())}else{if(_180==false){return "x-no-session-num-96"+Math.round(1000*Math.random())}}}}return "x-no-session-num-95"+_180};_4.version=function(){return "cbf91c"};_4.get_tab_session=function(){var _182=false;try{_182=sessionStorage.getItem("statcounter_tab_session");if(!_182){_182=generate_uuid(8);try{sessionStorage.setItem("statcounter_tab_session",_182)}catch(e){_182=false}}}catch(e){_182=false}if(_182===false){session_tab_id="x-no-session-storage-"+Math.round(100000*Math.random())}else{return _182}};_4.record=function(_183,_184){if(_184===undefined){_184="on"}else{}if(_183===undefined||_183==="on"||_183==="dev"){if(_2!==false){console.log("Turning on session recording for p"+_2);_183=_2}else{return}}else{if(parseInt(_183,10)+""==_183){_183=parseInt(_183,10)}else{return}}_sessionStorageSetConfig("record_"+_183,_184);_b3(_183)};_4._get_script_num=function(){return _5};if(_5==1){if(_a>0){initiate_click_detection()}try{var _185=document.getElementsByTagName("title");if(_185.length){var _186=document.title;var _187=document.location.href.split("#")[0];var _188=new MutationObserver(function(){var _189=document.location.href.split("#")[0];if(document.title!=_186&&_189!=_187){for(var _18a in _4._security_codes){var _18b=parseInt(_18a,10);if(_dd[_18b]===undefined||(new Date().getTime()-_dd[_18b]>1000)){setTimeout(function(_18c){if(_dd[_18c]===undefined||(new Date().getTime()-_dd[_18c]>1000)){_4.record_pageview(_18c)}},200,_18b)}}if(_4._add_recording_event){_4._add_recording_event("history-pageload",{"referrer":_187,"href":_189})}_186=document.title;_187=_189}});_188.observe(_185[0],{childList:true,attributes:false,subtree:false})}}catch(ei){}}return _4}catch(e){if(_2!=false&&is_admin_project(_2)){if(typeof encodeURIComponent!="function"){encodeURIComponent=function(s){return escape(s)}}var _18e="";for(var prop in e){_18e+="property: "+prop+" value: ["+e[prop]+"]\n"}_18e+="toString(): "+" value: ["+e.toString()+"]\n";var _190=new Image();_190.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(document.location.protocol+"//"+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+_2+"&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20"+encodeURIComponent(_18e)}}}(_statcounter);_statcounter.record_pageview();