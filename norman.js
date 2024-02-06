let form = document.getElementById("form");



 




form.addEventListener("submit", function (event) {
  event.preventDefault();
  //alert("here");
  //console.log(DOMSelectors.firstName.value);
  let DOMSelectors = {
   
    housepricee: document.querySelector("#houseprice").value,
    downpayment: document.querySelector("#downpayment").value,
    loanterm: document.querySelector("#loanterm").value,
    intrestrate: document.querySelector("#intrestrate").value,
    startdatey: document.querySelector("#startdatey").value,
    startdatem: document.querySelector("#startdatem").value,
    outputs: document.getElementById("outputs"),
    Mortgagem: document.querySelector("#Mortgagem"),
    Mortgaget: document.querySelector("#Mortgaget"),
    price: document.querySelector("#price"),
    downpaymento: document.querySelector("#downpaymento"),
    loanamount: document.querySelector("#loanamount"),
    totalintrest: document.querySelector("#totalintrest"),
    totalpayment: document.querySelector("#totalpayment"),
    payoffdate: document.querySelector("#payoffdate"),
    end: document.getElementById("YearlyEndBalance"),
    l: document.querySelector("#l"),
    k: document.querySelector("#k"),
  };


console.log(DOMSelectors.housepricee)

DOMSelectors.price.innerHTML = DOMSelectors.housepricee;
DOMSelectors.downpaymento.innerHTML = DOMSelectors.downpayment;
DOMSelectors.loanamount.innerHTML = DOMSelectors.housepricee - DOMSelectors.downpayment;

//convert to number DOMSelectors.startdate
DOMSelectors.startdatey = parseInt(DOMSelectors.startdatey);
DOMSelectors.loanterm = parseInt(DOMSelectors.loanterm);

DOMSelectors.payoffdate.innerHTML = DOMSelectors.startdatem + " " + (DOMSelectors.startdatey + DOMSelectors.loanterm);




let principle = DOMSelectors.housepricee - DOMSelectors.downpayment;
let rate = parseFloat(DOMSelectors.intrestrate);
let time = DOMSelectors.loanterm;

console.log(principle);
console.log(rate);

let mortgageAmount = principle; var interestRate = rate; var mortgageTerm = time;

let monthlyInterestRate = interestRate / 100 / 12; 
let numberOfPayments = mortgageTerm * 12;

let monthlyPayment = (mortgageAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)); 
let totalPayment = monthlyPayment * numberOfPayments; 
let totalInterest = totalPayment - mortgageAmount;

console.log("Monthly Payment: " + monthlyPayment.toFixed(2)); 
console.log("Total Payment: " + totalPayment.toFixed(2)); 
console.log("Total Interest: " + totalInterest.toFixed(2));

DOMSelectors.Mortgagem.innerHTML = monthlyPayment.toFixed(2);
DOMSelectors.Mortgaget.innerHTML = totalPayment.toFixed(2);
DOMSelectors.totalpayment.innerHTML = totalPayment.toFixed(2);
DOMSelectors.totalintrest.innerHTML = totalInterest.toFixed(2);


//loop to get yearly balance

let yearlyBalance = [];
let balance = mortgageAmount;
for (let i = 1; i <= numberOfPayments; i++) {
    let interestPayment = balance * monthlyInterestRate;
    let principalPayment = monthlyPayment - interestPayment;
    balance -= principalPayment;
    if (i % 12 === 0) {
        yearlyBalance.push(balance.toFixed(2));
    }    
}
console.log("Yearly End Balance: ", yearlyBalance);
for (let i = 0; i <= yearlyBalance.length; i++) {
    console.log("Yearly End Balance: ", yearlyBalance[i]);
    DOMSelectors.l.innerHTML += [i+1]+ "<br>";
    DOMSelectors.k.innerHTML += yearlyBalance[i]+ "<br>";
}




});
