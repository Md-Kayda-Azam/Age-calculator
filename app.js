const check_button = document.querySelector('#agecheck')
const name = document.querySelector('#name')
const year = document.querySelector('#year')



check_button.addEventListener('click', () => {


 if( name.value == '' || year.value == ''){
    result.innerHTML = `<p class="alert alert-danger"> All fields are required!</p>`
 }
 else{
    result.innerHTML = agecal(name.value, year.value);
    name.value='';
    year.value='';
    
 }

   

})