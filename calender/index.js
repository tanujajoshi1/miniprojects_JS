var dt=new Date();

//console.log(dt.getMonth()); gives number pertaining to that month
//dt.setDate('22') will set date to 22
var months=['January','February','March','April','May','June','July','August','September','October','November','December'];

var endDate=new Date(dt.getFullYear(), dt.getMonth()+1, 0 ).getDate();

document.getElementById('date-str').innerHTML=dt.toDateString();
document.getElementById('month').innerHTML= month[dt.getMonth()];

var cells="";
for(var i=1;i<=30;i++){
    cells+="<div>"+1+"</div>";
}

document.getElementsByClassName('days')[0].innerHTML=cells;