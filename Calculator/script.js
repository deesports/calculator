function clcikbtn(val){
    document.getElementById("display").value += val;
}
function clearbtn(){
    document.getElementById("display").value = "";
}
function equalbtn(){
    document.getElementById("display").value = eval(document.getElementById("display").value); 
}