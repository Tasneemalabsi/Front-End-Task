let loginFormEl = document.getElementById('login');
loginFormEl.addEventListener('submit', getData);

function getData(event) {
    event.preventDefault();
    let SavedData = JSON.parse(localStorage.getItem('formData'));
    console.log(SavedData);
    let pinCode = event.target.code.value;
    let email = event.target.email.value;
    console.log(pinCode);
    console.log(email);
    if (Object.values(SavedData).includes(email) && Object.values(SavedData).includes(pinCode) ){alert('Successful Login')}
    else {alert('Failed Login')}
}

