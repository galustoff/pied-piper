(()=>{"use strict";const e="header__hidden-element",t="header__visible-block",s=[{photo:"./vendor/images/richard.png",name:"Richard Hendricks",position:"Founder & CEO"},{photo:"./vendor/images/dinesh.png",name:"Dinesh Chugtai",position:"Senior Programmer"},{photo:"./vendor/images/gilfoyle.png",name:"Bertram Gilfoyle",position:"Chief Systems Architect"},{photo:"./vendor/images/jared.png",name:"Jared Dunn",position:"Chief Operating Officer"},{photo:"./vendor/images/monica.png",name:"Monica Hall",position:"Chief Financial Officer"},{photo:"./vendor/images/head.png",name:"Nelson Bighetti",position:"Majority Investor"}],i=new class{constructor(){this._teamCards=document.querySelector(".team__cards"),this._cardTemplate=document.querySelector("#team__card")}render(){this._teamCards.innerHTML="",s.forEach((e=>{this._teamCards.append(this._createCard(e))}))}_createCard(e){const t=this._cardTemplate.content.cloneNode(!0),s=t.querySelector(".team__photo");return s.src=e.photo,s.alt=e.name+" photo",t.querySelector(".team__name").textContent=e.name,t.querySelector(".team__position").textContent=e.position,t}};(new class{constructor(){this._header=document.querySelector(".header"),this._nav=this._header.querySelector(".header__nav"),this._logo=this._header.querySelector(".header__logo-wrapper"),this._burgerBtn=this._header.querySelector(".header__burger-btn"),this._closeBtn=this._header.querySelector(".header__close-btn")}init(){this._setHandlers()}_setHandlers(){this._burgerBtn.addEventListener("click",(()=>{this._showMenu()})),this._closeBtn.addEventListener("click",(()=>{this._hideMenu()}))}_showMenu(){this._hideBurger(),this._hideLogo(),this._showLinks(),this._showCloseBtn()}_hideMenu(){this._hideCloseBtn(),this._hideLinks(),this._showLogo(),this._showBurger()}_showBurger(){this._burgerBtn.classList.remove(e)}_hideBurger(){this._burgerBtn.classList.add(e)}_showLinks(){this._nav.classList.add(t)}_hideLinks(){this._nav.classList.remove(t)}_showLogo(){this._logo.classList.remove(e)}_hideLogo(){this._logo.classList.add(e)}_showCloseBtn(){this._closeBtn.classList.remove(e)}_hideCloseBtn(){this._closeBtn.classList.add(e)}}).init(),i.render()})();