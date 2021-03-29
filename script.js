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
        document.getElementById("result").innerHTML = "If you deposit <span style='background-color:yellow'>" + principal + "</span>,<br>at an interest rate of <span style='background-color:yellow'>" + rate + "%</span>.<br> You will receive an amount of <span style='background-color:yellow'>" + interest + "</span>,<br> in the year <span style='background-color:yellow'>" + actualYear + "</span>";
    }
}
function displayRange() {
    var range = document.getElementById("rate").value;
    document.getElementById("range").innerHTML = range +"%";
}        