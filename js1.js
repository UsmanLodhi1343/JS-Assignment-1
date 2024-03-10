//function reverseTable(num, limit){
   // for(var i=limit; i>=1; i--){
    //    result = i * num;
     //   document.getElementById("para").innerHTML += (num+" * "+i+" = "+result+"<br/>");
//    }
//}
//function forwardTable(num, limit){
  //  for(var i=1; i<=limit; i++){
    //    result = i * num;
      //  document.getElementById("para").innerHTML += (num+" * "+i+" = "+result+"<br/>");
    //}
//}
//function myFunction() {
 //   var x = window.prompt("Please enter an integer to calculate table: ");
 //   var x = Number(x);
 //   var y = window.prompt("Please enter limit of table: ");
   // var y = Number(y);
   // if(x<20){
     //   reverseTable(x,y);
    //}
  //  else{
      //  forwardTable(x,y);
//    }
//}
 //function myFunction1(){
   // location.reload();
 //}




 function GenerateTable() {
    var number = parseInt(document.getElementById('number').value);
    var limit = parseInt(document.getElementById('limit').value);
    var resultContainer = document.getElementById('tableResult');
    var tableHTML = '<table border="4"><tr><th>Table</th></tr>' ;

    if (number < 20) {
        for (var i = limit; i >= 1; i--) {
            tableHTML += '<tr><td>' + number + ' x ' + i + ' = ' + (number * i) + '</td></tr>';
        }
    } else {
        for (var i = 1; i <= limit; i++) {
            tableHTML += '<tr><td>' + number + ' x ' + i + ' = ' + (number * i) + '</td></tr>';
        }
    }

    tableHTML += '</table>' ;
    resultContainer.innerHTML = tableHTML;
}