(()=>{"use strict";const e=[{photo:"./vendor/images/richard.png",name:"Richard Hendricks",position:"Founder & CEO"},{photo:"./vendor/images/dinesh.png",name:"Dinesh Chugtai",position:"Senior Programmer"},{photo:"./vendor/images/gilfoyle.png",name:"Bertram Gilfoyle",position:"Chief Systems Architect"},{photo:"./vendor/images/jared.png",name:"Jared Dunn",position:"Chief Operating Officer"},{photo:"./vendor/images/monica.png",name:"Monica Hall",position:"Chief Financial Officer"},{photo:"./vendor/images/head.png",name:"Nelson Bighetti",position:"Majority Investor"}],t=new class{constructor(){this._teamCards=document.querySelector(".team__cards"),this._cardTemplate=document.querySelector("#team__card")}render(){this._teamCards.innerHTML="",e.forEach((e=>{this._teamCards.append(this._createCard(e))}))}_createCard(e){const t=this._cardTemplate.content.cloneNode(!0),i=t.querySelector(".team__photo");return i.src=e.photo,i.alt=e.name+" photo",t.querySelector(".team__name").textContent=e.name,t.querySelector(".team__position").textContent=e.position,t}};(new class{constructor(){this._dde=document.documentElement,this._header=document.querySelector(".header"),this._nav=this._header.querySelector(".header__nav"),this._logo=this._header.querySelector(".header__logo-wrapper"),this._burgerBtn=this._header.querySelector(".header__burger-btn"),this._closeBtn=this._header.querySelector(".header__close-btn"),this._hidingClass="header__hidden-element",this._switchToMobile=()=>{this._dde.clientWidth<810&&(this._setMobileView(),window.removeEventListener("resize",this._switchToMobile),window.addEventListener("resize",this._switchToDesktop))},this._switchToDesktop=()=>{this._dde.clientWidth>810&&(this._setDesktopView(),window.removeEventListener("resize",this._switchToDesktop),window.addEventListener("resize",this._switchToMobile))},this._openMenu=()=>{this._hideBurger(),this._hideLogo(),this._showNav(),this._showCloseBtn()},this._hideMenu=()=>{this._hideCloseBtn(),this._hideNav(),this._showLogo(),this._showBurger()}}init(){document.documentElement.clientWidth<810?(this._setMobileView(),window.addEventListener("resize",this._switchToDesktop)):window.addEventListener("resize",this._switchToMobile)}_setMobileView(){this._hideNav(),this._showBurger()}_setDesktopView(){this._hideCloseBtn(),this._showLogo(),this._showNav(),this._restoreBurgerInitialState()}_showBurger(){this._burgerBtn.classList.remove(this._hidingClass),this._burgerBtn.addEventListener("click",this._openMenu)}_hideBurger(){this._burgerBtn.classList.add(this._hidingClass),this._burgerBtn.removeEventListener("click",this._openMenu)}_restoreBurgerInitialState(){this._burgerBtn.removeEventListener("click",this._openMenu),this._burgerBtn.classList.remove(this._hidingClass)}_showNav(){this._nav.classList.remove(this._hidingClass)}_hideNav(){this._nav.classList.add(this._hidingClass)}_showLogo(){this._logo.classList.remove(this._hidingClass)}_hideLogo(){this._logo.classList.add(this._hidingClass)}_showCloseBtn(){this._closeBtn.classList.remove(this._hidingClass),this._closeBtn.addEventListener("click",this._hideMenu)}_hideCloseBtn(){this._closeBtn.classList.add(this._hidingClass),this._closeBtn.removeEventListener("click",this._hideMenu)}}).init(),t.render()})();