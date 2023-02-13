document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getTextElementValueById('withdraw-total');

    const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;

    setTextElementValueById('withdraw-total', totalWithdraw);

    const previousBalance = getTextElementValueById("balance-total");

    const newTotalBalance = previousBalance - newWithdrawAmount;

    setTextElementValueById('balance-total', newTotalBalance);
})