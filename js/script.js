"use strict";!function(){var e=!1;document.getElementById("nav-search-btn").addEventListener("click",function(){e||(e=!0,document.getElementById("search-form-wrap").classList.add("on"),setTimeout(function(){e=!1,document.getElementById("search-input").focus()},200))},!1),document.getElementById("nav-search-btn").addEventListener("focusin",function(){e||(e=!0,document.getElementById("search-form-wrap").classList.add("on"),setTimeout(function(){e=!1,document.getElementById("search-input").focus()},200))},!1),document.getElementById("search-input").addEventListener("focusout",function(){document.getElementById("search-form-wrap").classList.remove("on"),setTimeout(function(){e=!1},200)},!1);var t=!1;document.getElementById("main-nav-toggle").addEventListener("click",function(){t||(t=!0,document.getElementById("container").classList.toggle("mobile-nav-on"),setTimeout(function(){t=!1},200))},!1),document.getElementById("wrap").addEventListener("click",function(){!t&&document.getElementById("container").classList.contains("mobile-nav-on")&&document.getElementById("container").classList.remove("mobile-nav-on")}),new ClipboardJS(".article-share-link").on("success",function(){var t=document.querySelector("aside.article-share-success");"false"!=t.getAttribute("aria-hidden")&&(t.style.opacity=1,t.setAttribute("aria-hidden","false"),setTimeout(function(){!function e(){(t.style.opacity-=.1)<0?t.setAttribute("aria-hidden","true"):setTimeout(e,40)}()},4e3))}),window.goToTop=function(){var e=document.querySelector("a.gotop"),t=null;window.addEventListener("scroll",function(){null===t&&(t=setTimeout(function(){300<window.scrollY?e.classList.add("show"):e.classList.remove("show"),t=null},200))},!1)},"loading"!==document.readyState?setTimeout(function(){return window.goToTop()},1):document.addEventListener("DOMContentLoaded",function(){return window.goToTop()});var o=document.querySelector("footer#footer");!function(e){function t(e){e.offsetTop-e.offsetHeight<=window.innerHeight||e.offsetParent.scrollHeight<=window.innerHeight?e.style.cssText="position:fixed;left:0;bottom:0":e.style.cssText=""}var n=0<arguments.length&&void 0!==e?e:o;t(n),window.addEventListener("orientationchange",function(){return t(n)},!1)}();function n(e){var t=0<arguments.length&&void 0!==e?e:document.querySelector(".article-inner");if(!0===t.classList.contains("index-page"))return!1;var n=t.offsetHeight-50,o=document.createElement("STYLE");if(t.classList.contains("toc-on")){var i=document.getElementById("toc").offsetHeight+400/n*100;o.innerText=".article-inner.toc-on:before{height:"+n+"px; background: linear-gradient(#2AB8FF 0%, #fff "+i+"%, #EAEAEA 75%, #CFCFCFaf 88%, transparent 100%)}"}else o.innerText=".article-inner:before{height:"+n+"px}";return t.appendChild(o)}"complete"===document.readyState?setTimeout(function(){return n()},1):window.addEventListener("load",function(){return n()},!1)}();