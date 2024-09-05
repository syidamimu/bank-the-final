document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInputField = document.getElementById('deposit-input');
 
    const inputText = depositInputField.value;
    const newDepositAmount = parseFloat(inputText);
    // console.log(typeof newDepositAmount);
 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    // console.log(previousDepositText);
    const previousDepositAmount = parseFloat(previousDepositText);
    // console.log(typeof previousDepositAmount);
 
    const newDepositTotal = previousDepositAmount + newDepositAmount; 
   
    depositTotal.innerText = newDepositTotal;
 
 
    depositInputField.value = ''
 
 
 
    const totalBalance = document.getElementById('balance-total');
    const previousTotalBalance = totalBalance.innerText;
    const previousBalanceAmount = parseFloat(previousTotalBalance);
    const newBalance = previousBalanceAmount + newDepositAmount;

    totalBalance.innerText = newBalance;
    



    const previousBalanceTotal = document.getElementById('withdraw-total');
    const previousBalancetotaltext = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalancetotaltext);
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    previousBalanceTotal.innerText = newBalanceTotal;
 
})




document.getElementById("withdraw-button").addEventListener('click',function(){
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const newWithdrawAmount =parseFloat(withdrawInputText);
    

    const withdrawTotal = document.getElementById('balance-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(withdrawTotalText);
    

    const newWithdrawTotal = previousWithdrawTotalAmount -  newWithdrawAmount;
    withdrawTotal.innertext = newWithdrawTotal;


    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
    previousBalanceTotal.innerText = newBalanceTotal;


    withdrawInputField.value =''

    const withdrawBalance = document.getElementById('withdraw-total');
    const withdrawBalanceText = withdrawBalance.innerText;
    const withdrawBalanceNumber = parseFloat(withdrawBalanceText);
    const newWithdrawBalance = withdrawBalanceNumber - newWithdrawAmount;
    withdrawBalance.innerText = newWithdrawBalance;



})





 