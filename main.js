const people = document.querySelector("#people");
const amount = document.querySelector('.amount');
const tip = document.querySelector("#tip");
const submit = document.querySelector("#submit");
const total = document.querySelector(".total");

submit.addEventListener('click',function(event){
    event.preventDefault()
    // amount to pay we will to add the tip
    //100 15 = 115
    // we will divide between the people
    // and we need to show the result
    // if is more than 100$ we make it red 
    // we make it green the total
    const billAmount = parseInt(amount.value); // passing the value from the form that is string to a number
    const tipPercent = parseInt(tip.value) / 100 ; //0.3
    const tipAmount = billAmount * tipPercent;
    const totalToPay = billAmount + tipAmount;
    //great job!!

    const numberPeople = parseInt(people.value)

    const payEach = totalToPay / numberPeople
    total.innerHTML =  `$ ${payEach.toFixed(2)}` // how we can make that number short 

});