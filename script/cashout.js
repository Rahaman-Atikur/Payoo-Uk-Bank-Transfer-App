document.getElementById("cash-withdraw-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const pin = document.getElementById("input-pin-cashout").value;
        const convertedPin = parseInt(pin);
        const Amount = document.getElementById("amount-cashout").value;
        const convertedAmount = parseFloat(Amount);
        const mainBalance = document.getElementById("existing-amount").innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        if (convertedPin === 1234) {
            const available = convertedMainBalance - convertedAmount;
            document.getElementById("existing-amount").innerText = available;

        }
        else {
            alert("Enter Valid Pin Please");
        }
    })