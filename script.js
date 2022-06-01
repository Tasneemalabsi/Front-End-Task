'use strict';
let registerFormEl= document.getElementById("newForm");
registerFormEl.addEventListener('submit', SaveToLocalStorage);
let cities = {'jordan': ['amman','zarqa', 'madaba'], 'saudiArabia':['riyadh', 'jeddah', 'madina'], 'turkey': ['istanbul', 'antalya', 'ankara']};

const cityEl = document.getElementById('city');
const cityOpts = [...cityEl.children];
let resetEl = document.getElementById('resetButton')
resetEl.addEventListener('click', ResetForm);

function ResetForm (event) {
    event.preventDefault();
    registerFormEl.reset();
}
document.getElementById('state').addEventListener(
    'change',
    (event) => {
        console.log('hello');
      cityEl.innerHTML = cityOpts.filter(
        city => cities[event.target.value].includes(city.value)
      ).map(city => city.outerHTML).join('')
    })

function SaveToLocalStorage (event) {
    event.preventDefault();
    let firstNameValue = event.target.firstName.value;
    let lastNameValue = event.target.lastName.value;
    let addressValue = event.target.address.value;
    let gender = event.target.gender.value;
    let stateValue = event.target.state.value;
    let cityValue = event.target.city.value;
    let pinCodeValue = event.target.pinCode.value;
    let courseValue = event.target.course.value;
    let emailValue = event.target.emailID.value;
    let formData = {'firstName': firstNameValue, 'lastName':lastNameValue, 'address':addressValue,'gender':gender, 'state':stateValue, 'city': cityValue, 'pinCode':pinCodeValue, 'course':courseValue, 'email':emailValue}
    let dataString = JSON.stringify(formData)
    localStorage.setItem("formData", dataString);
    return formData
}






