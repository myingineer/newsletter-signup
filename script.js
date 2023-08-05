// Getting the buttons
const subscribeBtn = document.querySelector('.js-subscribe-btn');
const dismissBtn = document.querySelector('.js-dismiss-btn');

// Getting the email input field
const emailAddressInput = document.querySelector('.js-input')

// Getting the conntainers for the two displays
const emailInput = document.querySelector('.email-input-container');
const thankYou = document.querySelector('.thanks-container');

// Getting the display for the mail
const changedMail = document.querySelector('.js-dynamic-mail')

// Catching the error
const errorMessage = document.querySelector('.shown')


// Function to show the error
function runErrorMessage() {
    errorMessage.style.display = 'block' 
    emailAddressInput.classList.add('error')
    emailAddressInput.value = '';
}


// Function to remove the error
function hideErrorMessage() {
    errorMessage.style.display = 'none' 
    emailAddressInput.classList.remove('error')
}


// When the subscribe button is clicked
subscribeBtn.addEventListener('click', function(event) {
    event.preventDefault() //to prevent the form from submitting

    if (emailAddressInput.validity.valid && emailAddressInput.value.trim() !== '') {
        thankYou.style.display = 'block';
        emailInput.style.display = 'none';
        changedMail.innerText = emailAddressInput.value;
    }
    //  If the email input value is not in an email format
    else {
        runErrorMessage();
        // Removing the error message after 2 seconds
        setTimeout(hideErrorMessage, 2000);
    }
    
    // Making the dismiss button work
    dismissBtn.addEventListener('click', () => {
        thankYou.style.display = 'none';
        emailInput.style.display = 'flex';
        emailAddressInput.value = '';
        errorMessage.style.display = 'none';
        emailAddressInput.classList.remove('error');
    })
})


