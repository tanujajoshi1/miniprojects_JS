var dt=new Date();


function RenderDate(){
 
//for setting 1 date of every month below its day
dt.setDate(1);
var day=dt.getDay(); //1 taarik ka day nikal lo

//console.log(dt.getMonth()); gives number pertaining to that month
//dt.setDate('22') will set date to 22
var months=['January','February','March','April','May','June','July','August','September','October','November','December'];

/*iss month ka last date */
var endDate=new Date(dt.getFullYear(), dt.getMonth()+1, 0 ).getDate(); 

/*previous month ka last date */
var prevDate=new Date(dt.getFullYear(), dt.getMonth(), 0 ).getDate();

/*give today's date */
var today=new Date();

document.getElementById('date_str').innerHTML=dt.toDateString();
document.getElementById('month').innerHTML= months[dt.getMonth()];

var cells="";

//1 tarik se pehle wale days me pichle month ki date aa jayegi
for(var i=day;i>0;i--){
    cells+="<div class='prev_date'>"+(prevDate-i+1)+"</div>";
}

for(var i=1;i<=endDate;i++){
    if(i===today.getDate()&&dt.getMonth()==today.getMonth()){
        cells+="<div class='today'>"+i+"</div>"; 
    }else
    cells+="<div>"+i+"</div>";
}

document.getElementsByClassName('days')[0].innerHTML=cells;


}



function moveDate(para){
   if(para==='prev'){
       dt.setMonth(dt.getMonth()-1);      
   }else if(para==='next'){
       dt.setMonth(dt.getMonth()+1);      
   }
   RenderDate();
}