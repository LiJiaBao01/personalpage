(function(window){var svgSprite='<svg><symbol id="icon-youxiang" viewBox="0 0 1024 1024"><path d="M512.01228 567.530734l465.797725-388.074549c-2.524496-0.459464-4.790096-1.512447-7.407714-1.512447L53.626361 177.943738c-2.565429 0-4.845355 1.038656-7.370875 1.512447L512.01228 567.530734 512.01228 567.530734zM1012.079506 219.623c0-4.372587-1.202385-8.42181-2.523473-12.402471L679.367869 482.420311l330.687538 330.74075c0.850367-3.333932 2.0241-6.545066 2.0241-10.149151L1012.079506 219.623 1012.079506 219.623 1012.079506 219.623zM14.483876 207.17755c-1.282203 4.00829-2.563382 8.003278-2.563382 12.444427l0 583.376631c0 3.643993 1.254573 6.842849 2.078335 10.175757l330.793962-330.767356L14.483876 207.17755 14.483876 207.17755zM647.162376 509.198188 525.320377 610.68151c-3.818979 3.252067-8.543583 4.818749-13.30912 4.818749-4.723581 0-9.474792-1.566682-13.33368-4.818749l-121.734552-101.43011L43.545772 842.625116c3.279696 0.864694 6.532787 2.065032 10.082636 2.065032L970.415594 844.690148c3.618411 0 6.869455-1.187035 10.215666-2.065032L647.162376 509.198188 647.162376 509.198188z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)