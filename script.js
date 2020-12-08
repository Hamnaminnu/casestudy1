// callback function to validate login
function Validate(callback){
    let psw = document.getElementById("psw");
    let uname = document.getElementById("uname");
         if(uname.value == "admin" && psw.value == "12345"){
             window.location = "main.html";
         }
         else{
             callback();
         }
    
     }
function display(){
    window.location = "index.html";
    alert("check your username and password");
}



