document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const accountNumber = document.getElementById('input-account-number').value;

        const pinNumber = document.getElementById('input-pin-number').value;


        const convertedPinNumber = parseInt(pinNumber);

        if (accountNumber.length === 11) {
            if (convertedPinNumber === 1234) {
                window.location.href="./main.html"
            }
            else{
                alert();
            }
        }
    })