/**
 * Agecal
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */


function agecal(name, year) {
    let date = new Date();
    


    age = date.getFullYear() - year;
    return ` <p class=" alert alert-success">Hi ${name} You are ${age} years old</p>`


}