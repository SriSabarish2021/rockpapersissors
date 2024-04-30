
    const btn=document.querySelector("#button")
    console.log(btn)
    const result=document.querySelector("#whoplays")
    console.log(result)
    const text1=result.querySelector(".pla")
    console.log(text1)
    const text2=result.querySelector(".com")
    console.log(text2)
    const resultval=document.querySelector("#result")
    console.log(resultval)
    const finalresult=resultval.querySelector(".finalresult")
    console.log(finalresult)
    

    const rock1=btn.querySelector(".rock")
    console.log(rock1)
    const paper1=btn.querySelector(".paper")
    console.log(paper1)
    const sissor1=btn.querySelector(".sissor")
    console.log(sissor1) 

    const main=document.getElementById("main")
    const ani=main.querySelector(".video-container")
    console.log(ani)


                     /*    ROCK   */ 

    rock1.addEventListener("click",(action)=>{
        let playerValue1=(Math.floor(Math.random())+1)
           if (playerValue1===1){
                playerValue1="rock";
                text1.textContent="ROCK"
                text1.style.fontSize="30px"
            }
            else{
                playerValue1="off"
            }
            let computerValue1=Math.floor(Math.random()*3)+1;
            if (computerValue1===1){
                computerValue1="rock";
                text2.textContent="ROCK";
                text2.style.fontSize="30px"
            }
            else if(computerValue1===2){
                computerValue1="paper";
                text2.textContent="PAPER";
                text2.style.fontSize="30px"
            }
            else if(computerValue1===3){
                computerValue1="sissor";
                text2.textContent="SISSORS";
                text2.style.fontSize="30px"
            }
            else{
                computer="shut down"
            }
            

        switch (playerValue1){
            case computerValue1:
                finalresult.textContent="It's A TIE GAME"
                ani.style.display="none"

                break;

            case "rock":            
                if(computerValue1==="sissor"){
                    finalresult.textContent="PLAYER WIN's"
                    ani.style.display="flex"
                }
                else{
                    finalresult.textContent="COMPUTER WIN's"
                    ani.style.display="none"
                }
                break;

            case "paper":            
                if(computerValue1==="rock"){
                    finalresult.textContent="PLAYER WIN's"
                    ani.style.display="flex"
                }
                else{
                    finalresult.textContent="COMPUTER WIN's"
                    ani.style.display="none"
                }
                break;
            case "sissor":            
                if(computerValue1==="paper"){
                    finalresult.textContent="PLAYER WIN's"
                    ani.style.display="flex"
                }
                else{
                    finalresult.textContent="COMPUTER WIN's"
                    ani.style.display="none"

                }
                break; 
        }
        })

                          /*     PAPER     */ 

    paper1.addEventListener("click",(action)=>{
        let playerValue2=(Math.floor(Math.random()*1)+2)
            if (playerValue2===2){
                playerValue2="paper";
                text1.textContent="PAPER"
                text1.style.fontSize="30px"
            }
            else{
                playerValue2="off"
            }
            let computerValue2=Math.floor(Math.random()*3)+1;
            if (computerValue2===1){
                computerValue2="rock";
                text2.textContent="ROCK";
                text2.style.fontSize="30px"
            }
            else if(computerValue2===2){
                computerValue2="paper";
                text2.textContent="PAPER";
                text2.style.fontSize="30px"
            }
            else if(computerValue2===3){
                computerValue2="sissor";
                text2.textContent="SISSORS";
                text2.style.fontSize="30px"
            }
            else{
                computer="shut down"
            }

    
            switch (playerValue2){
                case computerValue2:
                    finalresult.textContent="It's A TIE GAME"
                    ani.style.display="none"

                    break;
    
                case "rock":            
                    if(computerValue2==="sissor"){
                        finalresult.textContent="PLAYER WIN's"
                        ani.style.display="flex"
                        

                    }
                    else{
                        finalresult.textContent="COMPUTER WIN's"
                        ani.style.display="none"
                    }
                    break;
    
                case "paper":            
                    if(computerValue2==="rock"){
                        finalresult.textContent="PLAYER WIN's"
                        ani.style.display="flex"
                    }
                    else{
                        finalresult.textContent="COMPUTER WIN's"
                        ani.style.display="none"
                    }
                    break;
                case "sissor":            
                    if(computerValue2==="paper"){
                        finalresult.textContent="PLAYER WIN's"
                        ani.style.display="flex"
                    }
                    else{
                        finalresult.textContent="COMPUTER WIN's"
                        ani.style.display="none"
                    }
                    break; 
            }

        })

/*  SISSOR*/ 
    sissor1.addEventListener("click",(action1)=>{
        let playerValue3=(Math.floor(Math.random()*1)+3)
        if (playerValue3===3){
            playerValue3="sissor";
            text1.textContent="SISSOR"
            text1.style.fontSize="30px"
        }
        else{
           playerValue3="off"
        }
        let computerValue3=Math.floor(Math.random()*3)+1;
        if (computerValue3===1){
            computerValue3="rock";
            text2.textContent="ROCK";
            text2.style.fontSize="30px"
        }
        else if(computerValue3===2){
            computerValue3="paper";
            text2.textContent="PAPER";
            text2.style.fontSize="30px"
        }
        else if(computerValue3===3){
            computerValue3="sissor";
            text2.textContent="SISSORS";
            text2.style.fontSize="30px"
        }
        else{
            computer3="shut down"
        }

        switch (playerValue3){
            case computerValue3:
                finalresult.textContent="It's A TIE GAME"
                ani.style.display="none"
                break;

            case "rock":            
                if(computerValue3==="sissor"){
                    finalresult.textContent="PLAYER WIN's"
                    ani.style.display="flex"
                    

                }
                else{
                    finalresult.textContent="COMPUTER WIN's"
                    ani.style.display="none"
                }
                break;

            case "paper":            
                if(computerValue3==="rock"){
                    finalresult.textContent="PLAYER WIN's"
                    ani.style.display="flex"
                }
                else{
                    finalresult.textContent="COMPUTER WIN's"
                    ani.style.display="none"
                }
                break;
            case "sissor":            
                if(computerValue3==="paper"){
                    finalresult.textContent="PLAYER WIN's"
                    ani.style.display="flex"
                }
                else{
                    finalresult.textContent="COMPUTER WIN's"
                    ani.style.display="none"
                }
                break; 
        }
    })

    

