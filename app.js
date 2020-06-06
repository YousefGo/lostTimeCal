var h =1 ;
var resitem=1;
var listTime =[];
var listReslut = [];
$("#cal").click(function () {
   var year =$("#year").val();
   for(var t = 0 ; t < h ;t++)
   {
    var temp = $(".input:eq("+t+")");
       listTime[t]=temp.val();
   }
  for( var ss= 0 ; ss<h;ss++)   
  {
  var temp1 =$(".res:eq("+ss+")");
  listReslut[ss]=(year*listTime[ss]*365)/24;

  }
    
   // for loop for calutiong  keep it with array ;  
// for loop to print reslt 

  //  $(".res:eq(0)").text(Math.floor( listReslut[0]));
for (var ll =0 ; ll<h ;ll++)
{
var temp33= $("res:eq("+ll+")");

temp33.text(Math.floor(listReslut[ll]));
$(".res:eq("+ll+")").text(Math.floor(listReslut[ll]));
}
  
   
 


})
$("#add").click(function()
{
    myFunction();
    h++;
}
)
// var time=[];
// $("#cal").click(function()
// {
// for ( var c =0;c<h;c++)
// {
// time[c].push();
// }


// }

// )







function myFunction() {
     var res1="<tr><td><input type='text' name='' require value=''placeholder='ادخل اسم الحدث'></td>"
     var res2 ="<td> <input type='Number' name='' value='' required class='input' placeholder='ادخل الفترة بالساعات'></td>"
     var res3="<td class='res' > </td>"
     var resfinal=res1+res2+res3;
    $('#tab tr:last').after(resfinal);

    
    
  }
