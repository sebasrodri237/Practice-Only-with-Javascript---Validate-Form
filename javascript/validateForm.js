const myform = document.getElementById('myform');
const input = document.getElementsByClassName('input');
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
        this.inputOrder = {

            name: 0,
            age: 1,
            email: 2,
            password: 3,
            checkbox: 4
        }
        this.validateName(e);
        this.validateAge(e);
        this.validateEmail(e);
        this.validatePassword(e);
        this.validateCheckbox(e);
    }
    validateName(e){

        if(this.data.name.value == ""){

            alert('The name field cannot be empty.');
            e.preventDefault();
            input[this.dataInput.name].style.boxShadow = "0 0 1.5px 1px red";
        }
    }
    validateAge(e){

        if(Number.isNaN(this.data.age.value) || this.data.age.value == "" ){
            alert('The age field cannot be empty or must be a integer number.');
            e.preventDefault();
            input[this.dataInput.age].style.boxShadow = "0 0 1.5px 1px red";
        }
    }
    validateEmail(e){
///////////////////// Regular expression to mail format is from: https://www.w3resource.com/javascript/form/email-validation.php //////////////////////////
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (!mailformat.test(this.data.email.value) || this.data.email.value == "" ){
            alert('The email field cannot be empty or you have entered an invalid email address.');
            e.preventDefault();
            input[this.dataInput.email].style.boxShadow = "0 0 1.5px 1px red";
        } 
    }
    validatePassword(e){

        if(this.numberOfCharacters(this.data.password.value.length) || this.data.password.value == ""){

            alert('The password field cannot be empty or the password have to contain  only 7-16 characters.');
            e.preventDefault();
            input[this.dataInput.password].style.boxShadow = "0 0 1.5px 1px red";
        }
    }
    numberOfCharacters(passwordLength){

        const MIN_CHARACTERES = 7;
        const MAX_CHARACTERES = 16;

        if(MIN_CHARACTERES > passwordLength || MAX_CHARACTERES < passwordLength){

            return true;
        }else{

            return false;
        }
    }
    validateCheckbox(e){

        if(!this.data.checkbox.checked){

            alert('You must accept the terms and conditions to continue.');
            e.preventDefault();
        }
    }

}

myform.addEventListener('submit', validateForm);

function validateForm(e){

    this.form = new form(e);
}