const myform = document.getElementById('myform');
const name = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const button = document.getElementById('button');

class form{

    constructor(e){
        
        this.data = {

            name,
            age,
            email,
            password,
            checkbox
        }
        this.validateName(e);
        this.validateage(e);
        // this.validateemail();
        // this.validatepassword();
        // this.validatecheckbox();
    }
    validateName(e){

        if(this.data.name.value == ""){

            alert('The name field cannot be empty');
            e.preventDefault();
        }
    }
    validateage(e){

        if(Number.isNaN(this.data.age.value) || this.data.age.value == "" ){
            alert('The age field must be a integer number');
            e.preventDefault();
        }
    }
}

myform.addEventListener('submit', validateForm);

function validateForm(e){

    this.form = new form(e);
}