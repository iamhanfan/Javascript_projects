  
        const guessBox=document.getElementById("guessBox");
        const checkBtn=document.getElementById("checkBtn");
        const result=document.getElementById("result");

        let minNum=1;
        let maxNum=100;
        let answer=Math.floor(Math.random()*(maxNum-minNum+1)+minNum);


        let attempt=0;
        let running=true;
        
        checkBtn.onclick = function () {
            while (running) {
                guess=guessBox.value;
                guess=Number(guess);
                
                
                    if (isNaN(guess) || guess < minNum || guess > maxNum) {
                        result.textContent = "Enter a valid number between 1 and 100.";
                    } 
                    else {
                        attempt++;

                        if (guess < answer) {
                            result.textContent = "Too Low !! Try Again!";
                        } else if (guess > answer) {
                            result.textContent = "Too High !! Try Again!";
                        } else {
                            result.textContent = `You Won!! The answer was ${answer}. It Took ${attempt} attempts`;
                            running = false;
                            
                        }
                    }
                    break;
                }
        }