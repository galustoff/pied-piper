(()=>{"use strict";var e=[{photo:"./vendor/images/richard.png",name:"Richard Hendricks",position:"Founder & CEO"},{photo:"./vendor/images/dinesh.png",name:"Dinesh Chugtai",position:"Senior Programmer"},{photo:"./vendor/images/gilfoyle.png",name:"Bertram Gilfoyle",position:"Chief Systems Architect"},{photo:"./vendor/images/jared.png",name:"Jared Dunn",position:"Chief Operating Officer"},{photo:"./vendor/images/monica.png",name:"Monica Hall",position:"Chief Financial Officer"},{photo:"./vendor/images/head.png",name:"Nelson Bighetti",position:"Majority Investor"}];function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._dde=document.documentElement,this._header=document.querySelector(".header"),this._cont=this._header.querySelector(".header__container"),this._nav=this._header.querySelector(".header__nav"),this._logo=this._header.querySelector(".header__logo-wrapper"),this._burgerBtn=this._header.querySelector(".header__burger-btn"),this._closeBtn=this._header.querySelector(".header__close-btn"),this._hidingClass="header__hidden-element",this._contMobileClass="header__container_mobile-view",this._switchToMobile=function(){t._dde.clientWidth<810&&(t._setMobileView(),window.removeEventListener("resize",t._switchToMobile),window.addEventListener("resize",t._switchToDesktop))},this._switchToDesktop=function(){t._dde.clientWidth>810&&(t._setDesktopView(),window.removeEventListener("resize",t._switchToDesktop),window.addEventListener("resize",t._switchToMobile))},this._openMenu=function(){t._hideElem(t._burgerBtn),t._burgerBtn.removeEventListener("click",t._openMenu),t._cont.classList.add(t._contMobileClass),t._hideElem(t._logo),t._showElem(t._nav),t._showElem(t._closeBtn),t._closeBtn.addEventListener("click",t._hideMenu)},this._hideMenu=function(){t._hideElem(t._closeBtn),t._closeBtn.removeEventListener("click",t._hideMenu),t._hideElem(t._nav),t._cont.classList.remove(t._contMobileClass),t._showElem(t._logo),t._showElem(t._burgerBtn),t._burgerBtn.addEventListener("click",t._openMenu)}}var i,n;return i=e,(n=[{key:"init",value:function(){document.documentElement.clientWidth<810?(this._setMobileView(),window.addEventListener("resize",this._switchToDesktop)):window.addEventListener("resize",this._switchToMobile)}},{key:"_setMobileView",value:function(){this._hideElem(this._nav),this._showElem(this._burgerBtn),this._burgerBtn.addEventListener("click",this._openMenu)}},{key:"_setDesktopView",value:function(){this._hideElem(this._closeBtn),this._showElem(this._logo),this._showElem(this._nav),this._cont.classList.remove(this._contMobileClass),this._restoreBurgerInitialState()}},{key:"_showElem",value:function(e){e.classList.remove(this._hidingClass)}},{key:"_hideElem",value:function(e){e.classList.add(this._hidingClass)}},{key:"_restoreBurgerInitialState",value:function(){this._burgerBtn.removeEventListener("click",this._openMenu),this._burgerBtn.classList.remove(this._hidingClass)}}])&&t(i.prototype,n),Object.defineProperty(i,"prototype",{writable:!1}),e}();function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._teamCards=document.querySelector(".team__cards"),this._cardTemplate=document.querySelector("#team__card")}var i,o;return i=t,(o=[{key:"render",value:function(){var t=this;this._teamCards.innerHTML="",e.forEach((function(e){t._teamCards.append(t._createCard(e))}))}},{key:"_createCard",value:function(e){var t=this._cardTemplate.content.cloneNode(!0),i=t.querySelector(".team__photo");return i.src=e.photo,i.alt=e.name+" photo",t.querySelector(".team__name").textContent=e.name,t.querySelector(".team__position").textContent=e.position,t}}])&&n(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}());(new i).init(),o.render()})();