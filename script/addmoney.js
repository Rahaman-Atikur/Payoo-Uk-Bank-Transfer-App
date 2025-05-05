document.getElementById("add-money-btn")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById("amount").value;
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById("input-pin-number").value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById("existing-amount").innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        if (convertedPin === 1234) {
            const sum = convertedAmount + convertedMainBalance;

            document.getElementById("existing-amount").innerText = sum;
        }


    })