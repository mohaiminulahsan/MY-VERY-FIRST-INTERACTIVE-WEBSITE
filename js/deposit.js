/*
Steps->
1. set event listener to the deposit button
2. get the deposit amount from the deposit input field and turn it into number
3. clear the input field after getting the input
4. get the previous deposit from the deposit display and turn it into number
5. sum new deposit and previous one and display it in the deposit display
6. get the balance and turn it into number
7. add the new deposit to the balance
*/

// step-1
document.getElementById('deposit-btn').addEventListener('click', function () {
    // step-2
    const depositInput = document.getElementById('deposit-field');
    const depositInputString = depositInput.value;
    const depositNew = parseFloat(depositInputString);

    // step-3
    depositInput.value = '';
    
    if(isNaN(depositNew)){
        alert('Please provide a valid amount!!!');
        return;
    }

    // step-4
    const depositDisplay = document.getElementById('deposit-display');
    const depositPreviousTotalString = depositDisplay.innerText;
    const depositPreviousTotal = parseFloat(depositPreviousTotalString);

    // step-5
    depositDisplay.innerText = depositPreviousTotal + depositNew;

    // step-6
    const balanceDisplay = document.getElementById('balance');
    const balanceElementString = balanceDisplay.innerText;
    const balanceTotal = parseFloat(balanceElementString);

    // step-7
    balanceDisplay.innerText = balanceTotal + depositNew;
})