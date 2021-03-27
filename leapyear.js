function checkLeapYear() {
    year = document.getElementById("year").value;
    if(year != "") {
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            document.getElementById("output").innerHTML = year + ' is a leap year';
        } else {
            document.getElementById("output").innerHTML = year + ' is a not leap year';
        }
    }
}