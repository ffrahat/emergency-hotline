console.log('connected');

// history 
let callHistoryPush = [];
// console.log(callHistoryPush );


// This is for Call Function 
const callBtns = document.getElementsByClassName('call-btn');
// console.log(callBtns);

for(const callBtn of callBtns){
    // console.log(callBtn);
    callBtn.addEventListener('click', function(event){
        // console.log('CLickd');
        const grandParent = event.currentTarget.parentNode.parentNode;
        // console.log(grandParent);
        const callingNum = grandParent.children[1].children[2].innerText;
        // console.log(callingNum);
        const callingName = grandParent.children[1].children[0].innerText;
        // console.log(callingName);

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
        alert("calling : " + callingNum + " . . .");


        // History Start hare 

        const data = {
            name: callingName,
            num: callingNum ,
            date:new Date().toLocaleTimeString()
        }
        

        callHistoryPush.push(data);

        const newHistory = document.getElementById('new-history-create')
        newHistory.innerText = "";
      
        
        for(const myData of callHistoryPush ){
            
            const div = document.createElement('div')
            div.innerHTML = `
                <div class="call-history-containar flex items-center justify-between p-4 bg-gray-100 rounded-[7px] mb-5">
                        <div class="history-containar-left">
                            <h1 class="font-bold text-[18px]">${myData.name}</h1>
                            <p class="text-gray-500" >${myData.num}</p>
                        </div>

                        <div class="history-right">
                            <p>${myData.date}</p>
                        </div>
                    </div>
                    
            `


            
            newHistory.appendChild(div)

            
        }


        
        
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


    // This is for Copy Button 

    const copyBtns = document.getElementsByClassName('copy-btn');
    // console.log(copyBtns);

        for(const copyBtn  of copyBtns){
        copyBtn.addEventListener('click', function(event){
            const demoNumberCopy = 1;
            let copyIncrease = document.getElementById('copy-increase-show');
            let copyIncreaseConverted = parseInt((copyIncrease.innerText));
            let totalClickedCopy = copyIncreaseConverted + demoNumberCopy;
            copyIncrease.innerText = totalClickedCopy;
            // console.log(copyIncrease);
            const grandParent = event.currentTarget.parentNode.parentNode;
            // console.log(grandParent);
            const copyingNum = grandParent.children[1].children[2].innerText;
            // console.log(copyingNum);

            let textArea = document.createElement('textarea');
            textArea.value = copyingNum;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Copyid Succesfully...');
    
        })
    }


    // History Clear Button
    const historyClearBtn = document.getElementById('history-clear-btn');
    const newHistory = document.getElementById('new-history-create');

    historyClearBtn.addEventListener('click', function(){
        newHistory.innerHTML = "";
    })
        



