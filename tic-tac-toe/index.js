
//////////////////////////////////////////
// RESTART BUTTON 
/////////////////////////////////////////

var restart= document.getElementById('b1');

var data= document.querySelectorAll('td');


function doRestart(){
    for(var i=0;i<data.length;i++)
     data[i].textContent="";
}

restart.addEventListener('click',doRestart);


//////////////////////////////////////////
// CHANGE VALUE
/////////////////////////////////////////

for(var i=0;i<data.length;i++){
    data[i].addEventListener('click',changeValue);
}

function changeValue(){
    if(this.textContent==='')
    this.textContent='X';
    else if(this.textContent==='X')
    this.textContent='O';
    else
    this.textContent='';
}