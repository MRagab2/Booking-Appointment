var email=document.getElementById("loginEmail")
var pass=document.getElementById("loginPass")

function done(){
if(email.value=="adminmail" && pass.value=="A4D5M6I4N"){
    window.location.href="../admin/index.html";
}else{
    console.log("no");
}

}