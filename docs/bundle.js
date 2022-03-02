(()=>{"use strict";var e={91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},579:(e,t,i)=>{e.exports=i.p+"7aaeff57cf1b16b7b016.svg"},899:(e,t,i)=>{e.exports=i.p+"9fb04143afda292a0572.svg"},22:(e,t,i)=>{e.exports=i.p+"a1ac5b21e2f91f0baa1c.png"},767:(e,t,i)=>{e.exports=i.p+"aab06aca01fa84923598.png"},165:(e,t,i)=>{e.exports=i.p+"72f1877d4b233fafa6f1.png"},861:(e,t,i)=>{e.exports=i.p+"0c984eefe0c911c8f7c9.png"},103:(e,t,i)=>{e.exports=i.p+"b228189d246452da5fe4.png"},194:(e,t,i)=>{e.exports=i.p+"90533dbfe3705cf0369d.png"}},t={};function i(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,i),s.exports}i.m=e,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i.b=document.baseURI||self.location.href,(()=>{document.body.classList.add("page");var e=document.createElement("main");function t(e){var t=document.createElement("template");return t.innerHTML=e,t.content.cloneNode(!0)}e.classList.add("main"),e.id="main",document.body.append(e);var r=i(91),a=i.n(r),s=new URL(i(579),i.b);const n='<header class="header"> <div class="container header__container"> <div class="header__logo-wrapper"> <a href="#main"> <img src="'+a()(s)+'" width="184" height="45" alt="page logo"/> </a> </div> <nav class="header__nav"> <ul class="header__list"> <li class="header__list-item"> <a href="#problem" class="header__link">the problem</a> <span class="header__delimiter">|</span> </li> <li class="header__list-item"> <a href="#pipercoin" class="header__link">PiedPiperCoin</a> <span class="header__delimiter">|</span> </li> <li class="header__list-item"> <a href="#team" class="header__link">the team</a> </li> </ul> </nav> <div class="header__burger-btn"> <div class="header__burger-btn-line"></div> <div class="header__burger-btn-line"></div> <div class="header__burger-btn-line"></div> </div> <div class="header__close-btn header__hidden-element"> <div class="header__close-btn-square"></div> <div class="header__close-btn-square"></div> <div class="header__close-btn-square"></div> <div class="header__close-btn-square"></div> </div> </div> </header>';var o=".header__nav",l="header__hidden-element";function c(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._dde=document.documentElement,this._header=document.querySelector(".header"),this._cont=this._header.querySelector(".header__container"),this._nav=this._header.querySelector(o),this._logo=this._header.querySelector(".header__logo-wrapper"),this._burgerBtn=this._header.querySelector(".header__burger-btn"),this._closeBtn=this._header.querySelector(".header__close-btn"),this._hidingClass=l,this._contMobileClass="header__container_mobile-view",this._switchToMobile=function(){t._dde.clientWidth<810&&(t._setMobileView(),window.removeEventListener("resize",t._switchToMobile),window.addEventListener("resize",t._switchToDesktop))},this._switchToDesktop=function(){t._dde.clientWidth>810&&(t._setDesktopView(),window.removeEventListener("resize",t._switchToDesktop),window.addEventListener("resize",t._switchToMobile))},this._openMenu=function(){t._hideElem(t._burgerBtn),t._burgerBtn.removeEventListener("mousedown",t._openMenu),t._cont.classList.add(t._contMobileClass),t._hideElem(t._logo),t._showElem(t._nav),t._showElem(t._closeBtn),t._closeBtn.addEventListener("mousedown",t._hideMenu)},this._hideMenu=function(){t._hideElem(t._closeBtn),t._closeBtn.removeEventListener("mousedown",t._hideMenu),t._hideElem(t._nav),t._cont.classList.remove(t._contMobileClass),t._showElem(t._logo),t._showElem(t._burgerBtn),t._burgerBtn.addEventListener("mousedown",t._openMenu)}}var t,i;return t=e,(i=[{key:"init",value:function(){document.documentElement.clientWidth<810?window.addEventListener("resize",this._switchToDesktop):window.addEventListener("resize",this._switchToMobile)}},{key:"_setMobileView",value:function(){this._hideElem(this._nav),this._showElem(this._burgerBtn),this._burgerBtn.addEventListener("mousedown",this._openMenu)}},{key:"_setDesktopView",value:function(){this._hideElem(this._closeBtn),this._showElem(this._logo),this._showElem(this._nav),this._cont.classList.remove(this._contMobileClass),this._restoreBurgerInitialState()}},{key:"_showElem",value:function(e){e.classList.remove(this._hidingClass)}},{key:"_hideElem",value:function(e){e.classList.add(this._hidingClass)}},{key:"_restoreBurgerInitialState",value:function(){this._burgerBtn.removeEventListener("mousedown",this._openMenu),this._burgerBtn.classList.remove(this._hidingClass)}}])&&c(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),h=t(n);document.documentElement.clientWidth<810&&h.querySelector(o).classList.add(l),document.body.prepend(h),(new d).init(),document.querySelector(".main").append(t('<section class="jumbotron"> <div class="container jumbotron__container"> <h1 class="jumbotron__heading">PiperNet Is Here</h1> </div> </section> ')),document.querySelector(".main").append(t('<section class="problem"> <div class="label"> <div class="label__tail" id="problem"></div> </div> <div class="container problem__container"> <h2 class="h2 problem__heading">The Problem</h2> <p class="paragraph"> Beneath the flashy homepages of your favorite sites lurk Hooli™ and other evil corporations out to hoard and sell your most personal data. </p> <p class="paragraph"> What was built to be the ultimate platform for the free sharing of knowledge has turned into a money-hungry monster feasting on our privacy and &nbsp; freedom. </p> <p class="paragraph"> But fear not, for Pied Piper has the answer! And it’s simple:<br/>An autonomous peer-to-peer network featuring distributed storage powered by universal compression, accelerated scheduling allocation, and end-to-end encryption. </p> <p class="paragraph"> Put even simpler — <span class="paragraph_text-style_strong">it’s the internet, completely decentralized.</span> </p> </div> </section> ')),document.querySelector(".main").append(t('<section class="hero"> <div class="container hero__container"> <p class="hero__text"> We’re in this together! All of our computers and phones join in a network to make the strongest supercomputer the world has ever seen. </p> </div> </section> '));var p=new URL(i(899),i.b);const _='<section class="pipercoin"> <div class="label"> <div class="label__tail" id="pipercoin"></div> </div> <div class="container pipercoin__container"> <h2 class="h2 pipercoin__h2">Introducing PiedPiperCoin</h2> <div class="pipercoin__logo-wrapper"> <img width="115" height="115" src="'+a()(p)+'" alt="pipercoin logo"/> </div> <p class="paragraph"> Pied Piper\'s new internet is built <span class="paragraph_text-style_italic">for users, by users.</span><br/> You supply the storage, compute, and networking resources that power our entire decentralized web. </p> <div class="flow-cleaner"></div> <p class="paragraph"> Now there\'s a way to give credit where credit is due. Compute credit, that is! The more you share your device resources, the more PiedPiperCoin you receive. </p> <p class="paragraph"> Whether you\'re a developer with an app ready for market, or just an Average Joe with a smartphone you\'ll love all you can do with PiedPiperCoin. </p> </div> </section> ';document.querySelector(".main").append(t(_));var u=[{photo:i(194),name:"Richard Hendricks",position:"Founder & CEO"},{photo:i(22),name:"Dinesh Chugtai",position:"Senior Programmer"},{photo:i(767),name:"Bertram Gilfoyle",position:"Chief Systems Architect"},{photo:i(861),name:"Jared Dunn",position:"Chief Operating Officer"},{photo:i(103),name:"Monica Hall",position:"Chief Financial Officer"},{photo:i(165),name:"Nelson Bighetti",position:"Majority Investor"}],m=t('<section class="team"> <div class="label"> <div class="label__tail" id="team"></div> </div> <div class="container team__container"> <h2 class="h2 team__heading">The Team</h2> <ul class="team__cards"></ul> </div> </section> '),v=m.querySelector(".team__cards");u.forEach((function(e){var i=t('<li class="team__card"> <div class="team__card-container"> <img class="team__photo" src="#" alt="#" width="168" height="168"/> <span class="team__name"></span> <span class="team__position"></span> </div> </li> '),r=i.querySelector(".team__photo");r.src=e.photo,r.alt="".concat(e.name," photo"),i.querySelector(".team__name").textContent=e.name,i.querySelector(".team__position").textContent=e.position,v.append(i)})),document.querySelector(".main").append(m),document.body.append(t('<footer class="footer"> <div class="container footer__container"> <p class="footer__text"> All other trademarks and copyrights are the property of their respective owners. Use of these names, trademarks and brands does not imply endorsement. </p> </div> </footer> '))})()})();