function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value1) {
    document.getElementById("result").value += value1;
}
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function deletenumber() {
    document.getElementById("result").value -= result;
}
function deleteLastDigit() {
   currentValue= document.getElementById("result").value;
   newValue=currentValue.slice(0, -1);
   document.getElementById("result").value = newValue;
}