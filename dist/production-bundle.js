/*! For license information please see production-bundle.js.LICENSE.txt */
(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n,o,l,c,r,a,s,i;(function(){var t=document.querySelectorAll("form"),n=document.querySelectorAll(".form-name"),o=document.querySelectorAll(".form-tel"),l=document.querySelectorAll('input[type="checkbox"]'),c=document.querySelectorAll(".form-text"),r=document.querySelectorAll(".check-footer"),a=document.querySelectorAll(".popup"),s=document.createElement("div");s.classList.add("status"),s.style.cssText="\n    font-size: 20px;\n    width: 90%;\n    color: #fff;\n    font-weight: 500;\n    margin-top: 30px;";var i=document.createElement("div");i.classList.add("status-cheked"),i.textContent="Не стоит галочка согласен на обработку данных",i.style.cssText="\n    color: #ffd11a;\n    display: contents;\n    margin-top: 10px;\n    font-size: 1rem;\n    text-align: center;",document.querySelectorAll(".btn-send").forEach((function(e){e.style.cssText="\n        margin-bottom: 10px;\n        height: 45px;\n        width: 160px;"})),document.getElementById("person-banner").style.cssText="\n    margin-top: 17px;\n    margin-bottom: 15px;\n    position: relative;\n    ";var d=!1,u=!1,m=!1,y=function(){c.forEach((function(e){e.value=""})),l.forEach((function(e){e.checked=!1})),s.remove(),a.forEach((function(e){e.style.display="none"}))},p=function(e,t){var n=document.getElementById("thanks"),o=document.getElementById("status");document.getElementById("modalText").textContent=e,o.textContent=t,n.style.display="block"};l.forEach((function(e){e.addEventListener("click",(function(){m=!0===e.checked}))})),n.forEach((function(e){e.addEventListener("input",(function(e){var t=e.target;t.value=t.value.replace(/[^а-яА-ЯёЁ\s\-]/g,"")})),e.addEventListener("blur",(function(e){var t=e.target;t.value=t.value.replace(/\s+/g," ").replace(/\-+/g,"-").replace(/^-+|-+$/g,"").trim(),t.value.length<=1?t.value="":(t.value=t.value.split(/\s+/).map((function(e){return e[0].toUpperCase()+e.substring(1)})).join(" "),d=!0)}))})),o.forEach((function(t){t.addEventListener("input",(function(n){var o,l=n.target;l.value=l.value.replace(/[^\d()\-+]|([()\-\+])(?=\1)/g,"").replace(/^[()]/g,"").replace(/^(\+)(\d+?)([^0-9-()])+/g,(function(e,t,n){return t+n})).trim(),(o=l.value,function(t){if(Array.isArray(t))return e(t)}(o)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e,t){"+"===e&&t>0&&(l.value=l.value.slice(0,t))})),null===/^\+?[78]+[\-\(]?(\d{3})[\-\)]?(\d{3})[-]?(\d{2})[-]?(\d{2})$/g.exec(l.value)?(u=!1,t.setCustomValidity("неверный ввод, попробуйте один из следующих форматов ввода: 81231231212 или +71231231212 или 8(123)1233265 или 8-123-123-12-12 или +7(123)123-12-12 или 8(123)123-12-12 или +7123-123-12-12")):(l.value=l.value.replace(/^\+?[78]+[\-\(]?(\d{3})[\-\)]?(\d{3})[-]?(\d{2})[-]?(\d{2})$/gm,"+7($1)$2-$3-$4").trim(),u=!0,t.setCustomValidity(""))}))})),t.forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault();var t=e.target;t===document.getElementById("footer_form")&&(m=!0,r.forEach((function(e){!0===e.checked&&(m=!0,d=!0)})));var n=document.getElementById("card_order"),o=document.querySelector(".check_club-cards");t===n&&(console.log(o.checked),!0===o.checked?m=!0:(m=!1,n.appendChild(i)));var l=document.getElementById("form2"),c=document.getElementById("check2");t===l&&(!0===c.checked?m=!0:(m=!1,l.appendChild(i)));var a=document.getElementById("form1"),v=document.getElementById("check");t===a&&(!0===v.checked?m=!0:(m=!1,a.appendChild(i)));var h=document.getElementById("banner-form"),g=document.getElementById("check1");if(t===h&&(!0===g.checked?m=!0:(m=!1,h.appendChild(i))),!0===u&&!0===m&&!0===d){i.remove(),t.appendChild(s),s.style.display="contents",s.textContent="идет отправка";var x=new FormData(t);f(x).then((function(e){if(200!==e.status)throw new Error("status network not 200.");y(),p("Ваша заявка отправлена, скоро мы с вами свяжемся","Спасибо"),setTimeout((function(){y()}),3e3)})).catch((function(e){y(),p("Упс что-то пошло не так, сервер устал и прилёг","Ошибка"),setTimeout((function(){y()}),3e3),console.error(e)}))}}))}));var f=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(e))})}})(),r=document.getElementById("changeGym"),a=document.documentElement.clientWidth,s=60,i=function e(){c=requestAnimationFrame(e),++s<110?r.style.top=s+"%":s>110?r.style.top="110%":cancelAnimationFrame(c)},a>768&&document.addEventListener("click",(function(e){e.target.matches(".clubs")&&(r.style.display="block",s=60,c=requestAnimationFrame(i)),e.target.matches(".club-select")||null===e.target.closest(".club-select")&&(r.style.display="none")})),a<768&&document.addEventListener("click",(function(e){r.style.top="50px",r.style.display="block",e.target.matches(".form-content")||null===e.target.closest(".club-select")&&(r.style.display="none")})),function(){var e,t=document.getElementById("free_visit_form"),n=document.getElementById("callback_form"),o=t.querySelector(".form-wrapper"),l=n.querySelector(".form-wrapper"),c=document.querySelector(".wrapper-present"),r=document.querySelectorAll(".form-text"),a=document.querySelectorAll('input[type="checkbox"]'),s=document.getElementById("gift"),i=document.querySelector(".present"),d=document.getElementById("thanks"),u=document.documentElement.clientWidth,m=50;document.addEventListener("click",(function(p){var f=document.querySelector(".status-cheked"),v=function(){r.forEach((function(e){e.value=""})),a.forEach((function(e){e.checked=!1})),t.style.display="none",n.style.display="none",d.style.display="none",s.style.display="none",f&&f.remove()};p.target.matches(".open-popup")&&p.target&&(u>768?(t.style.display="block",m=50,e=requestAnimationFrame(y)):u<768&&(t.style.display="block",o.style.top="11%")),p.target.matches(".callback-btn")&&p.target&&(u>768?(n.style.display="block",m=50,e=requestAnimationFrame(y)):u<768&&(n.style.display="block",l.style.top="11%")),p.target.matches(".present")&&p.target&&(u>768?(s.style.display="block",i.style.display="none",m=50,e=requestAnimationFrame(y)):u<768&&(s.style.display="block",i.style.display="none",c.style.top="11%")),p.target.matches(".close-btn")&&v(),p.target.matches(".overlay")&&v(),p.target.matches(".form-content")||p.target.closest(".close_icon")&&v()}));var y=function t(){e=requestAnimationFrame(t),--m>10?(o.style.top=m+"%",l.style.top=m+"%",c.style.top=m+"%"):cancelAnimationFrame(e)}}(),function(){var e=document.querySelector(".main-slider"),t=document.body.querySelectorAll(".slide");e.style.cssText="\n    height: 100%;\n    max-height: 541px;\n    padding-top: 23px;\n    ";var n=0,o=function(){t[n].style.display="none",++n>=5&&(n=0),t[n].style.display="block"};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(o,e)}(2e3)}(),function(){var e=document.querySelector(".services-slider"),t=document.querySelectorAll(".services_slide"),n=document.querySelector(".services_slide-active");e.style.cssText="\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n    transition: 250ms;",t.forEach((function(e){e.matches(".services_slide-active")?e.style.cssText="transition: all 0.2s linear 0s; min-width: 210px; margin-left: 0px;":e.style.cssText="min-width: 210px; margin-right: 8px; margin-left: 8px;"}));var o=0,l=-1125;document.addEventListener("click",(function(e){var t=e.target;t.closest(".prev")&&(o<0&&(o+=225,n.style.marginLeft="".concat(o,"px")),o>=0&&(o=l,n.style.cssText="transition: all 0.2s linear 0s; min-width: 210px; margin-left: 0px;")),t.closest(".next")&&(o>l&&(o-=225,n.style.marginLeft="".concat(o,"px")),o===l&&(o=0,n.style.cssText="transition: all 0.2s linear 0s; min-width: 210px; margin-left: 0px;"))}))}(),function(){var e=document.querySelector(".gallery-slider"),n=document.querySelectorAll(".slider-gallery"),o=document.querySelector(".slider-dots"),l=document.querySelector(".gallery-slider-wrapper");document.querySelectorAll(".img-slide-gallery").forEach((function(e){e.style.maxWidth="600px"})),l.style.position="relative";var c=new(function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elem=t,this.newClass=n}var n,l;return n=e,(l=[{key:"addNewClass",value:function(){this.elem=document.createElement("li"),this.elem.classList.add("dot"),o.append(this.elem)}}])&&t(n.prototype,l),e}());n.forEach((function(e){e&&c.addNewClass()})),document.querySelectorAll(".dot")[0].classList.add("slick-active");var r,a=0,s=function(e,t,n){e[t].style.display="none",e[t].classList.remove(n)},i=function(e,t,n){e[t].style.display="block",e[t].classList.add(n)},d=function(){var e=document.querySelectorAll(".dot");s(n,a,"slide"),s(e,a,"slick-active"),++a>=n.length&&(a=0),i(n,a,"slide"),i(e,a,"slick-active")},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;r=setInterval(d,e)};e.addEventListener("click",(function(e){var t=document.querySelectorAll(".dot");e.preventDefault();var o=e.target;o.matches(".fa")&&(s(n,a,"gallery-slider"),s(t,a,"slick-active"),o.closest(".next")&&a++,o.closest(".prev")?a--:o.matches(".dot")&&t.forEach((function(e,t){e===o&&(a=t)})),a>=n.length&&(a=0),a<0&&(a=n.length-1),i(n,a,"gallery-slider"),i(t,a,"slick-active"))})),e.addEventListener("mouseover",(function(e){(e.target.matches(".fa")||e.target.matches(".dot"))&&clearInterval(r)})),e.addEventListener("mouseout",(function(e){(e.target.matches(".fa")||e.target.matches(".dot"))&&u()})),u(1500)}(),function(){document.querySelector(".promocat");var e=document.getElementById("price-total");document.querySelectorAll(".m"),document.addEventListener("click",(function(t){var n=t.target;n.matches("#m1")?e.textContent=2999:n.matches("#m2")?e.textContent=14990:n.matches("#m3")?e.textContent=21990:n.matches("#m4")&&(e.textContent=24990)}))}(),n=document.querySelector(".popup-menu"),o=document.querySelector(".iconBurger"),(l=document.getElementById("totop")).style.display="none",document.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;o.style.cssText=e>=200?"position: fixed; z-index: 99999; margin-left: -40px; top: 120px;":"position: relative; top: 0px;",l.style.display=e>=300?"block":"none"})),document.addEventListener("click",(function(e){var t=e.target;t.matches(".iconBurger")&&(n.style.display="block"),t.closest(".close-menu-btn")&&t.closest(".close-menu-btn")&&(n.style.display="none"),t.matches(".hidden-large")&&(n.style.display="none"),t.matches("ul>li")||t.closest("ul>li")&&(n.style.display="none")}))})();