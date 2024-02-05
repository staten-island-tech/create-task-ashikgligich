var num = 8
var sum = 0
console.log(num);
for (let i = 0; i < num; i++) {
    const element = 1+i;
    console.log(element);
    sum += element
};
console.log(sum)


const DOMSelectors = {
    form: document.getElementById("form"),
    firstName: document.querySelector(".first-name"),
    cardTitle: document.querySelector(".card-title"),
    cardData: document.querySelector(".card-data"),
    cardPicture: document.querySelector(".card-picture"),
    h2: document.getElementById("myH2"),
    h4: document.getElementById("myH4"),
    h6: document.getElementById("myH6"),
    img: document.getElementById("imgYes"),
  };



  console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  //alert("here");
  //console.log(DOMSelectors.firstName.value);

  DOMSelectors.h2.textContent = DOMSelectors.firstName.value;
  DOMSelectors.h4.textContent = DOMSelectors.cardTitle.value;
  DOMSelectors.h6.textContent = DOMSelectors.cardData.value;
  DOMSelectors.img.textContent = DOMSelectors.cardPicture.value;


});