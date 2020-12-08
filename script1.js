    // todo list
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = function() {
        if (oXHR.readyState == 4&&this.status==200) {		// Check if request is complete.
            var jsondata = JSON.parse(this.responseText);
            var tableBody = '<table><tr><td>userId</td><td>id</td><td>title</td><td>completed</td></tr>';
            jsondata.forEach(function(d)
            {
             tableBody += '<tr><td>'+d.userId+'</td><td>'+d.id+'</td><td>'+d.title+'</td>';   
             if (d.completed == true) {
                             tableBody += "<td><input type=checkbox id=chk checked='checked'disabled></td></tr>";
                         }
                         else {
                             tableBody += "<td><input type=checkbox class=chk onclick='checkedalert();' ></td></tr>";
                         }
              });
             tableBody += '<table>';
            // printing table
           var divContainer = document.getElementById("showData");
           divContainer.innerHTML = tableBody;
        }
    }
    oXHR.open("GET", "data.json", true);  // get json file.
    oXHR.send();


    // to the alert message -- promise
 function checkedalert(){
    var promise = new Promise(function(resolve,reject){
    // let count = $(".chk:checkbox:checked").length;
    var inputElems = document.getElementsByClassName("chk");
    count = 0;
    for (var i=0; i<inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
         count++;
     }
     }
       if (count==5){
            resolve("Congrats. 5 Tasks have been Successfully Completed");
       }
       else{
            reject("done a task");
       }
    });
   promise
    .then(function(s){
        alert(s);
    })
    .catch(function(e){
        console.log(e);
    })
}



