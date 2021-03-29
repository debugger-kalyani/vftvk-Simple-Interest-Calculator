function compute() {
    var principal = document.getElementById("principal").value;
    principal = parseInt(principal);
    if (principal == 0 || principal <= 0) {
        alert("Enter Positive Number");
        document.getElementById("principal").focus();
        document.getElementById("range").innerHTML = "";
        document.getElementById("years").value = "";
        document.getElementById("result").style.display = 'none';
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        years = parseInt(years);
        var interest = principal * years * rate / 100;
        var today = new Date();
        var thisYear = today.getFullYear();
        var actualYear = thisYear + years;
        document.getElementById("result").innerHTML = "If you deposit " + principal + ",<br>at an interest rate of " + rate + "%.<br> You will receive an amount of " + interest + ",<br> in the year " + actualYear;
    }
}
function displayRange() {
    var range = document.getElementById("rate").value;
    document.getElementById("range").innerHTML = range;
}        