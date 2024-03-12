function diceRoll(){
    const diceBox=document.getElementById('diceBox').value;
    const diceResult=document.getElementById('diceResult');
    const imgResult=document.getElementById('imgResult');

    const values=[];
    const images=[];

    if(diceBox>6){
        diceResult.textContent="Enter a number between 1-6";
    }
    else{
        for(let i=0;i<diceBox;i++){

            const value=Math.floor(Math.random()*6)+1;
            values.push(value);
            images.push(`<img src="${value}.png">`);
            }

            diceResult.textContent=`Dice :${values.join(", ")}`;
            imgResult.innerHTML=images.join('');
    }
    
}