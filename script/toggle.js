document.getElementById("cashout").style.display = "none";
        document.getElementById("add-money").style.display = "block";


document.getElementById("add-money-likebtn")
    .addEventListener("click", function () {
        document.getElementById("cashout").style.display = "none";
        document.getElementById("add-money").style.display = "block";

    })

document.getElementById("Cash-withdraw-likebtn")
    .addEventListener("click", function () {
        document.getElementById("cashout").style.display = "block";
        document.getElementById("add-money").style.display = "none";
    })