console.log('connected');

const callBtns = document.getElementsByClassName('call-btn');
console.log(callBtns);

for(const callBtn of callBtns){
    // console.log(callBtn);
    callBtn.addEventListener('click', function(event){
        console.log('CLickd');
        const grandParent = event.currentTarget.parentNode.parentNode;
        const callingNum = grandParent.children[1].children[2].innerText;
        // console.log(callingNum);

        const aviableBalance = document.getElementById('aviable-balance');
        const aviableBalanceConvert = parseInt(aviableBalance.innerText);
        // console.log(aviableBalanceConvert);
        const chargeRate = parseInt(20);

        if(aviableBalanceConvert < 20){
            alert('Please recharge and try again');
            return;
        }
      
        totalBalance = aviableBalanceConvert - chargeRate;
        aviableBalance.innerText = totalBalance;
        alert("calling : " + callingNum)

    })
}