/*
MIT License

Copyright (c) 2020 Vivek Verma
https://github.com/virtualvivek/Windows10-framework

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

function setDarkMode(){$("head").append('<style>input[type="date"]::-webkit-calendar-picker-indicator{filter:invert(1);}</style>'),$('meta[name="theme-color"]').remove(),$("head").append('<meta name="theme-color" content="#403E41" />'),document.documentElement.style.setProperty("--color_light_bg","#111"),document.documentElement.style.setProperty("--color_dark_text","#FFF"),document.documentElement.style.setProperty("--color_nav","#403E41"),document.documentElement.style.setProperty("--color_light_grey","#444"),document.documentElement.style.setProperty("--color_link_bg_hover","#555"),document.documentElement.style.setProperty("--color_link_bg_active","#222"),document.documentElement.style.setProperty("--color_button","#555555"),document.documentElement.style.setProperty("--color_button_hover","#999"),document.documentElement.style.setProperty("--color_button_active","#222"),document.documentElement.style.setProperty("--color_button_active_border","#EEE"),document.documentElement.style.setProperty("--color_accent_light","#FFF")}function setLightMode(){$("head").append('<style>input[type="date"]::-webkit-calendar-picker-indicator{filter:none;}</style>'),$('meta[name="theme-color"]').remove(),$("head").append('<meta name="theme-color" content="#EEE" />'),document.documentElement.style.setProperty("--color_light_bg","#FFF"),document.documentElement.style.setProperty("--color_dark_text","#222"),document.documentElement.style.setProperty("--color_nav","#EEE"),document.documentElement.style.setProperty("--color_light_grey","#EEE"),document.documentElement.style.setProperty("--color_link_bg_hover","#CFCFCF"),document.documentElement.style.setProperty("--color_link_bg_active","#B8B8B8"),document.documentElement.style.setProperty("--color_button","#D9D9D9"),document.documentElement.style.setProperty("--color_button_hover","#666"),document.documentElement.style.setProperty("--color_button_active","#999"),document.documentElement.style.setProperty("--color_button_active_border","#888"),document.documentElement.style.setProperty("--color_accent_light","var(--AppColor)")}if(function(t){"use strict";function e(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function n(t,n){this.el=t,this.options=e({},this.options),e(this.options,n),this._init()}n.prototype.options={start:0},n.prototype._init=function(){this.tabs=[].slice.call(this.el.querySelectorAll("nav > ul > li")),this.items=[].slice.call(this.el.querySelectorAll(".app-content-wrap > section")),this.current=-1,this._show(),this._initEvents()},n.prototype._initEvents=function(){var t=this;this.tabs.forEach(function(e,n){e.addEventListener("click",function(e){e.preventDefault(),t._show(n)})})},n.prototype._show=function(t){this.current>=0&&(this.tabs[this.current].className=this.items[this.current].className=""),this.current=void 0!=t?t:this.options.start>=0&&this.options.start<this.items.length?this.options.start:0,this.tabs[this.current].className="tab-current",this.items[this.current].className="content-current",jQuery.fn.scrollCenter=function(t,e){return jQuery(this).animate({scrollLeft:jQuery(this).scrollLeft()-jQuery(this).offset().left+jQuery(t).offset().left-80},void 0==e?1e3:e),this},$("nav").scrollCenter(".tab-current",300)},t.WINTabs=n}(window),[].slice.call(document.querySelectorAll(".app-container")).forEach(function(t){new WINTabs(t)}),$("#app-nav-toggle").click(function(t){t.preventDefault(),$("#app-nav-wrap").toggleClass("toggled"),$("#app-nav-wrap").hasClass("toggled")&&$(".app-section-container").css("padding-left","120px"),$("#app-nav-wrap").hasClass("toggled")||$(".app-section-container").css("padding-left","")}),jQuery("<br><br><br><br>").insertAfter("h1.fixed"),1==ShowDarkModeSwitch){let t='<label class="app-switch"><input id="DayNightSwitch" type="checkbox" autocomplete="off"/><div data-off="Day" data-on="Night"></div></label>';jQuery(t).insertAfter("#app-nav-toggle"),jQuery(t).insertAfter("#index-switch")}function changeType(t,e){if(t.prop("type")==e)return t;try{return t.prop("type",e)}catch(l){var n=$("<div>").append(t.clone()).html(),a=/type=(\")?([^\"\s]+)(\")?/,o=$(null==n.match(a)?n.replace(">",' type="'+e+'">'):n.replace(a,'type="'+e+'"'));o.data("type",t.data("type"));var r=function(t){return function(){for(i in t){var e=t[i];for(j in e)o.bind(i,e[j].handler)}}}(t.data("events"));return t.replaceWith(o),setTimeout(r,10),o}}$("#DayNightSwitch").on("change",function(){$("#DayNightSwitch").prop("checked")?(setDarkMode(),localStorage.setItem("isNight",!0)):($("body").css("transition",""),$(".app-container nav").css("transition",""),setLightMode(),localStorage.setItem("isNight",!1))}),1!=NightMode&&"true"!=localStorage.getItem("isNight")||($("body").css("transition","none"),$(".app-container nav").css("transition","none"),setDarkMode(),$("#DayNightSwitch").prop("checked",!0)),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&($("body").css("transition","none"),$(".app-container nav").css("transition","none"),setDarkMode(),$("#DayNightSwitch").prop("checked",!0)),FollowSystemTheme&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{"dark"===(t.matches?"dark":"light")?($("body").css("transition","none"),$(".app-container nav").css("transition","none"),setDarkMode(),$("#DayNightSwitch").prop("checked",!0)):($("body").css("transition",""),$(".app-container nav").css("transition",""),setLightMode())}),jQuery('<button class="unmask" type="button"></button>').insertAfter(".app-input-password"),$(".unmask").on("click",function(){return"password"==$(this).prev("input").attr("type")?changeType($(this).prev("input"),"text"):changeType($(this).prev("input"),"password"),!1});let alphaColor=window.getComputedStyle(document.documentElement).getPropertyValue("--AppColor");function setStatusBarAccent(){var t=getComputedStyle(document.body).getPropertyValue("--AppColor"),e=document.createElement("meta");e.name="theme-color",e.setAttribute("content",t),document.getElementsByTagName("head")[0].appendChild(e)}alphaColor=alphaColor.trim(),alphaColor+="9C",document.documentElement.style.setProperty("--alpha_c",alphaColor);const settings={fill:"var(--AppColor)",background:"#999999"},sliders=document.querySelectorAll(".app-range-slider");function applyFill(t){const e=100*(t.value-t.min)/(t.max-t.min),n=`linear-gradient(90deg, ${settings.fill} ${e}%, ${settings.background} ${e+.1}%)`;t.style.background=n}Array.prototype.forEach.call(sliders,t=>{t.querySelector("input").addEventListener("input",e=>{t.querySelector("span").innerHTML=e.target.value,applyFill(e.target)}),applyFill(t.querySelector("input"))});let LoaderBusyBody='<div class="w-ball-wrapper ball-1"><div class="w-ball"></div></div><div class="w-ball-wrapper ball-2"><div class="w-ball"></div></div><div class="w-ball-wrapper ball-3"><div class="w-ball"></div></div><div class="w-ball-wrapper ball-4"><div class="w-ball"></div></div><div class="w-ball-wrapper ball-5"><div class=" w-ball"></div></div>';function app_register_auto_search(t,e){$(t).each(function(t,n){if(!$(this).next().hasClass("searchAuto-select")){$(this).after('<div class="searchAuto-select wide open" tabindex="0" id="'+e+'"><div class="list"><ul></ul></div></div>');var a=$(this).next(),o=$(n).find("option");$(this).find("option:selected");1==BlurEnabled&&($(".list ul").css("backdrop-filter","blur(30px)"),$(".list ul").css("background","transparent")),o.each(function(t,e){var n=$(e).data("display-text")||"";a.find("ul").append('<li class="option '+($(e).is(":selected")?"selected":"")+'" data-display-text="'+n+'"><a href="'+$(e).val()+'">'+$(e).text()+"</a></li>")})}}),$("#"+e+" ul").before('<div class="app-search-box"><input id="'+e+'s" autocomplete="off" onkeyup="filter(`#'+e+"s`,`"+e+'`)" class="app-input-text" type="text" placeholder="Search here.."></div>'),$("#"+e+" ul > li").hide()}function filter(t,e){var n=$(t).val();$("#"+e+" ul > li").each(function(){$(this).text().toLowerCase().indexOf(n.toLowerCase())>-1?$(this).show():$(this).hide(),0==$(t).val()&&$("#"+e+" ul > li").hide()})}function searchBar(){$('input[type="search"]').on("keyup",function(){let t=$(this).val();$(".app-list li").each(function(e,n){currentName=$(this).find(".app-list-title").text(),currentName.toUpperCase().indexOf(t.toUpperCase())>-1?$(n).show("fast"):$(n).hide("fast")})})}$(".app-loader-busy").html(LoaderBusyBody),$(".app-loader-bar").html('<div class="app-loaderBar" id="first"></div><div class="app-loaderBar" id="second"></div><div class="app-loaderBar" id="third"></div><div class="app-loaderBar" id="fourth"></div>'),$(".app-progress-indeterminate").html('<div class="progress-bar"></div>'),$(".app-image.loadable").wrap("<div class=app-image-wrapper></div>"),jQuery('<div class="app-loader-busy light">'+LoaderBusyBody).insertAfter(".app-image.loadable"),jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter(".app-quantity input"),jQuery(".app-quantity").each(function(){var t=jQuery(this),e=t.find('input[type="number"]'),n=t.find(".quantity-up"),a=t.find(".quantity-down"),o=e.attr("min"),r=e.attr("max");n.click(function(){var n=parseFloat(e.val());if(n>=r)var a=n;else a=n+1;t.find("input").val(a),t.find("input").trigger("change")}),a.click(function(){var n=parseFloat(e.val());if(n<=o)var a=n;else a=n-1;t.find("input").val(a),t.find("input").trigger("change")})}),$(".app-bottomsheet-toggle").on("click",function(t){t.preventDefault();let e=$(this).attr("data-id");$("#"+e).toggleClass("is-visible")}),searchBar(),$("select.dropdown").each(function(){var t=$(this),e=$(this).children("option").length;t.addClass("app-select-hidden"),t.wrap('<div class="select-area"></div>'),t.after('<div class="app-select-styled"></div>');var n=t.next("div.app-select-styled");n.text(t.children("option").eq(0).text());for(var a=$("<ul />",{class:"app-select-options"}).insertAfter(n),o=0;o<e;o++)$("<li />",{text:t.children("option").eq(o).text(),rel:t.children("option").eq(o).val()}).appendTo(a);var r=a.children("li");n.click(function(t){t.stopPropagation(),$("div.app-select-styled.active").not(this).each(function(){$(this).removeClass("active").next("ul.app-select-options").hide()}),$(this).toggleClass("active").next("ul.app-select-options").toggle()}),r.click(function(e){e.stopPropagation(),n.text($(this).text()).removeClass("active"),t.val($(this).attr("rel")),a.hide()}),$(document).click(function(){n.removeClass("active"),a.hide()})});var ALERT_TITLE=null,IMAGE_URL=null;function doNothing(){window.status="Do Nothing function called"}function removeCustomAlert(){document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"))}function createCustomAlert(t,e,n){if(d=document,!d.getElementById("modalContainer")){mObj=d.getElementsByTagName("body")[0].appendChild(d.createElement("div")),mObj.id="modalContainer",alertObj=mObj.appendChild(d.createElement("div")),alertObj.id="alertBox",1==BlurEnabled&&($("#alertBox").css("background","var(--alpha_c)"),$("#alertBox").css("backdrop-filter","blur(30px)")),$("#alertBox").css("left","24vw"),d.all&&!window.opera&&(alertObj.style.top=document.documentElement.scrollTop+"px"),headerContainer=alertObj.appendChild(d.createElement("div")),headerContainer.id="headerContainer",h1=headerContainer.appendChild(d.createElement("h1")),h1.appendChild(d.createTextNode(ALERT_TITLE)),bodyCont=alertObj.appendChild(d.createElement("div")),bodyCont.id="bodyContainer",msgCon=d.createElement("div"),msgCon.id="msgconobj",msg=bodyCont.appendChild(msgCon),msg.innerHTML=t,btnDiva=bodyCont.appendChild(d.createElement("div")),btnDiva.id="btnDiv",btnDiva.align="center";for(var a=0;a<e.length;a++)btn=btnDiva.appendChild(d.createElement("a")),btn.id=e[a],btn.setAttribute("class","alertButtons"),btn.appendChild(d.createTextNode(e[a])),functionName=n[a],btn.href="javascript:"+functionName+";removeCustomAlert();",0==a&&btn.focus();d.onkeyup=function(t){27==((t=window.event||t).keyCode?t.keyCode:t.charCode)&&removeCustomAlert()},1==BlurEnabled&&($("#headerContainer").css("background","transparent"),$("#bodyContainer").css("background","transparent"))}}document.getElementById&&(window.alert=function(t,e,n,a,o){return t?(null==e&&null==n&&(e=["OK"],n=["doNothing()"]),null==e||null==n?(window.status="Button names length and Functions does not match.",!1):e.length!=n.length?(window.status="Button names length and Functions does not match.",!1):(ALERT_TITLE=null==a?"Alert!":a,IMAGE_URL=null==o?"src/core/img/anim_avatar.jpeg":o,void createCustomAlert(t,e,n,o))):(window.status="Enter Proper Alert Message",!1)}),1==BlurEnabled&&($(".fixed").css("backdrop-filter","blur(30px)"),$(".fixed").css("background","transparent"),$(".searchAuto-select.list.ul").css("backdrop-filter","blur(30px)"),$(".searchAuto-select.list ul").css("background","transparent"));