console.log('connected');


// This is for Call Function 
const callBtns = document.getElementsByClassName('call-btn');
// console.log(callBtns);

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


// This is for heart click function 

const heartLikes = document.getElementsByClassName('box-heart-like');
// console.log(heartLikes);

    for(const heartLike of heartLikes){
        heartLike.addEventListener('click', function(event){
            const demoNumber = 1;
            let heartIncrease = document.getElementById('heart-increase-show');
            let heartIncreaseConverted = parseInt((heartIncrease.innerText));
            let totalClickedHeart = heartIncreaseConverted + demoNumber;
            heartIncrease.innerText = totalClickedHeart;
            console.log(heartIncrease);
            
        })
    }
