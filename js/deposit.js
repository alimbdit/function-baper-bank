

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputFieldValueById('deposit-field');
    const previousDeposit = getTextElementValueById('deposit-total');

    const totalNewDeposit = depositAmount + previousDeposit;
    setTextElementValueById('deposit-total', totalNewDeposit);

    const previousBalance = getTextElementValueById('balance-total');

    const totalNewBalance = previousBalance + depositAmount;
    setTextElementValueById('balance-total', totalNewBalance);

})