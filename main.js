const currency_one=document.getElementById("currency-one");
const currency_two=document.getElementById("currency-two");
const number_one=document.getElementById("number-one");
const number_two=document.getElementById("number-two");
const swap=document.getElementById("swap");
const dynamic=document.getElementById("rate");

function current(){
  const currencyone=currency_one.value;
  const currencytwo=currency_two.value;
  fetch(`https://v6.exchangerate-api.com/v6/b28ec33b48af26592d66906f/latest/${currencyone}`)
  .then(res=>res.json())
  .then(data=>{
   
      const rate=data.conversion_rates[currency_two.value];
    dynamic.innerHTML=`1 ${currencyone} = ${rate} ${currencytwo}`;
    
  
    number_two.value=(number_one.value*rate).toFixed(2);
});
}
currency_one.addEventListener("change",current);
number_one.addEventListener("input",current);
currency_two.addEventListener("change",current);
number_two.addEventListener("input",current);
swap.addEventListener("click",()=>{
    let newvalue=currency_one.value;
    currency_one.value=currency_two.value;
    currency_two.value=newvalue;
})
current();