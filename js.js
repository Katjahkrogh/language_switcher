"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: "#overskrift" },
      { text: "Das Ro-Bot", location: ".content" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: "#overskrift" },
      { text: "Robotten", location: ".content" },
    ],
  },
};

// skifter const til let da vi skal kunne ændre værdien af locale
let locale = "da";

// fanger vores dropdown
let select = document.querySelector("select");

// skifter indholdet ud med dansk som default, da locale pt er "da"
changeTexts();

// lytter efter et valg i vores dropdown
select.addEventListener("change", languageSwitch);

// funktion der skifter værdien af locale til den value der er valgt
// i dropdown - altså skfiter sproget
function languageSwitch() {
  let selectedValue = select.value;

  if (selectedValue === "dansk") {
    locale = "da";
  } else {
    locale = "de";
  }
  // kalder funktionen der ændrer teksten
  changeTexts();
}

// ændrer teksten efter hvilket sprog de er valgt
function changeTexts() {
  // vi finder den tekst der passer til det valgte sprog (locale) fra 'texts' objektet
  const selectedTexts = texts[locale].texts;

  selectedTexts.forEach((item) => {
    // finder hvor i html vores tekst skal sættes ind
    let element = document.querySelector(item.location);
    // hvis den finder dette "element", sætter den teksten ind
    if (element) {
      element.textContent = item.text;
    }
  });
}
