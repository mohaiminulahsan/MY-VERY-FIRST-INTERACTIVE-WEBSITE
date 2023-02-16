/*
Steps->
1. set event listener to the withdraw button
2. get the withdraw amount from the withdraw input field and turn it into number
3. clear the withdraw input field
4. get the withdraw display and turn it into number
5. get the total balance and turn it into a number
6. add the new withdraw amount in the withdraw display
7. reduce the new withdraw amount from the balance
*/

// step-1
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step-2
    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawInput.value;
    const withdrawNew = parseFloat(withdrawAmountString);

    // step-3
    withdrawInput.value = '';

    if(isNaN(withdrawNew)){
        alert('Please provide a valid amount!!!');
        return;
    }

    // step-4
    const withdrawDisplay = document.getElementById('withdraw-display');
    const withdrawPreviousTotalString = withdrawDisplay.innerText;
    const withdrawPreviousTotal = parseFloat(withdrawPreviousTotalString);

    
    // step-5
    const balanceDisplay = document.getElementById('balance');
    const balanceElementString = balanceDisplay.innerText;
    const balanceTotal = parseFloat(balanceElementString);
    
    if(balanceTotal < withdrawNew){
        alert("You don not have sufficient balance!!!")
        return;
    }
    
    // step-6
    withdrawDisplay.innerText = withdrawPreviousTotal + withdrawNew;

    // step-7
    balanceDisplay.innerText = balanceTotal - withdrawNew;

})