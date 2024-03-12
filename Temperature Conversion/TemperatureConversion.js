
const numBox=document.getElementById('numBox');
const toFahrenheit=document.getElementById('toFahrenheit');
const toCelsius=document.getElementById('toCelsius');
const submitBtn=document.getElementById('submitBtn');
const result=document.getElementById('result');

let temp;

function tempConvert(){

    temp=numBox.value;
    temp=Number(temp);

    if(toFahrenheit.checked){
        temp=temp*9/5+32
        result.textContent=temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp=temp-32*9/5;
        result.textContent=temp.toFixed(1) + "°C";

    }
    else{
        result.textContent="Select a unit";
    }

}