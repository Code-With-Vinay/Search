 
var data = [
    ["LetsUpgrade","3 Months","2500","Yes"],
    ["Html","3 Months","2000","Yes"],
    ["Css","3 Months","2000","No"],
    ["JavaScript","3 Months","3000","Yes"],
    
]


var searchbox = document.getElementById("searchbox")
var tableData = document.getElementById("tableData")


document.getElementById("searchbox").addEventListener("input",searchTable);

document.addEventListener("DOMContentLoaded", function(){
    
generateTable()

});
    
//--------------------------------------------------------------------------------------
   function generateTable(){

    var tbody = document.getElementById("table-body")

    data.forEach(function(r){

    var row = document.createElement("tr");
    var col1 =document.createElement("td");
    var col2 =document.createElement("td");
    var col3 =document.createElement("td");
    var col4 =document.createElement("td");
    
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    var span4 = document.createElement("span");
    
    col1.setAttribute("data-label", "Name")
    col2.setAttribute("data-label", "Duration")
    col3.setAttribute("data-label", "Amount")
    col4.setAttribute("data-label", "Certificate provided")
    
    span1.textContent = r[0] 
    span2.textContent = r[1]
    span3.textContent = r[2]
    span4.textContent = r[3]
    
    row.appendChild(col1).appendChild(span1)
    row.appendChild(col2).appendChild(span2)
    row.appendChild(col3).appendChild(span3)
    row.appendChild(col4).appendChild(span4)
    tbody.appendChild(row)
    
   });
}

//---------------------------------------------------------------------------------------

function searchTable() {

    let src, filter, tr, td, txtValue;

    filter = searchbox.value.toUpperCase();   
    tr = tableData.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        td2 = tr[i].getElementsByTagName("td")[1];
        if (td && td2){
          txtValue = td.textContent || td.innerText;
          txtValue2 = td2.textContent || td2.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
     }
  }

//---------------------------------------------------------------------------------------  


