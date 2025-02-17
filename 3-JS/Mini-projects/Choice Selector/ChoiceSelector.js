const checkbox = document.querySelector('#subscribed');
        const creditCard = document.querySelector('#creditCard');
        const masterCard = document.querySelector('#MasterCard');
        const payPal = document.querySelector('#PayPal');
        const submitButton = document.querySelector('#send-data');

        submitButton.addEventListener('click', () => {
            let selectedChoice = '';
            let paymentChoice = '';
            if (checkbox.checked) {
                selectedChoice = 'Subscribed';
            } else {
                selectedChoice = 'Not Subscribed';
            }

            if (creditCard.checked){
                paymentChoice = 'Credit Card';
            }else if(masterCard.checked){
                paymentChoice = 'MasterCard';
            }else if(payPal.checked){
                paymentChoice = 'PayPal';
            }else{
                alert('Select A payment Method');
            }
            
            alert(`Your are ${selectedChoice} with a Payment Method ${paymentChoice}`);
            
        })
