var principle = 1000000;
var rate = 7.03;
var time = 30;

var mortgageAmount = principle; var interestRate = rate; var mortgageTerm = time;

var monthlyInterestRate = interestRate / 100 / 12; 
var numberOfPayments = mortgageTerm * 12;

var monthlyPayment = (mortgageAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments)); 
var totalPayment = monthlyPayment * numberOfPayments; 
var totalInterest = totalPayment - mortgageAmount;

console.log("Monthly Payment: " + monthlyPayment.toFixed(2)); 
console.log("Total Payment: " + totalPayment.toFixed(2)); 
console.log("Total Interest: " + totalInterest.toFixed(2));


//var w =  principle * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

//console.log(w);