const dashboard = document.getElementById("dashboard");
const deposit = document.getElementById("Deposit");
const withdraw = document.getElementById("Withdraw");
const balance = document.getElementById("Balance");
const inputSection = document.getElementById("inputSection");
const depositInput = document.getElementById("depositInput");
const withdrawInput = document.getElementById("withdrawInput");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");


depositBtn.addEventListener('click', function(){
    const value = depositInput.value;
    const depositValue = Number(deposit.innerText)+Number(value);
    const balanceValue = Number(balance.innerText)+Number(value);
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    depositInput.value='';
});


withdrawBtn.addEventListener('click', function(){
    const value = withdrawInput.value;
    if(Number(value)===0){
        alert("you do not have any balance inside your bank you goribs");
    }else if(Number(value)>Number(balance.innerText)){
        alert("you dont have enough teka you goribs");
    }else{
        const withdrawValue = Number(withdraw.innerText)+Number(value);
        const balanceValue = Number(balance.innerText)- Number(value);
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value='';
    }
});