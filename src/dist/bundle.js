(() => {
  "use strict";
  const e = [
    {
      photo: "./vendor/images/richard.png",
      name: "Richard Hendricks",
      position: "Founder & CEO",
    },
    {
      photo: "./vendor/images/dinesh.png",
      name: "Dinesh Chugtai",
      position: "Senior Programmer",
    },
    {
      photo: "./vendor/images/gilfoyle.png",
      name: "Bertram Gilfoyle",
      position: "Chief Systems Architect",
    },
    {
      photo: "./vendor/images/jared.png",
      name: "Jared Dunn",
      position: "Chief Operating Officer",
    },
    {
      photo: "./vendor/images/monica.png",
      name: "Monica Hall",
      position: "Chief Financial Officer",
    },
    {
      photo: "./vendor/images/head.png",
      name: "Nelson Bighetti",
      position: "Majority Investor",
    },
  ];
  new (class {
    constructor() {
      (this._teamCards = document.querySelector(".team__cards")),
        (this._cardTemplate = document.querySelector("#team__card"));
    }
    render() {
      (this._teamCards.innerHTML = ""),
        e.forEach((e) => {
          this._teamCards.append(this._createCard(e));
        });
    }
    _createCard(e) {
      const t = this._cardTemplate.content.cloneNode(!0),
        o = t.querySelector(".team__photo");
      return (
        (o.src = e.photo),
        (o.alt = e.name + " photo"),
        (t.querySelector(".team__name").textContent = e.name),
        (t.querySelector(".team__position").textContent = e.position),
        t
      );
    }
  })().render();
})();