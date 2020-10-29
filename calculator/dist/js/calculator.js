//////////////////////////////////
// toggle switch
//////////////////////////////////

const toggleSwitch= document.querySelector( '.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener('change',switchTheme,false);

function switchTheme(e){
if(e.target.checked)
document.documentElement.setAttribute("data-theme","dark");
else
document.documentElement.setAttribute("data-theme","light");
}




////////////////////////////////////
// calculate
///////////////////////////////////

var input=document.getElementById('input');
var output= document.getElementById('output')


function calculate(data){
    switch(data){
        case 'AC':
            input.innerHTML="";
            output.innerHTML="0";
            break;
        case 'C':
            input.innerHTML=input.innerHTML.substr(0,input.innerHTML.length-1);
            output.innerHTML=math.evaluate(input.innerHTML)=== undefined ? 0 : math.evaluate(input.innerHTML);;
            break;
        
        case '=':
            output.innerHTML=math.evaluate(input.innerHTML)=== undefined ? 0 : math.evaluate(input.innerHTML);;
        default:
    input.innerHTML+=data;
}}

