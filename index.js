document.getElementById('email-form').addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm()
})

function validateForm() {

    const email = document.getElementById('email');
    const emailError=document.getElementById('error');
    emailError.textContent='';




    let isValid = true;

    // Email validation
    if (!validator.isEmail(email.value)) {
        emailError.textContent = 'Valid email required';

        isValid = false;
    }

    if (isValid){

        const hideForm=document.getElementById('gilbert')
        hideForm.style.display='none'
        
        
        const successMessage =document.getElementById('demo');
        successMessage.style.display='block'


        

        
        
        
        
    }


    
}

function dismissal() {

    const hideForm=document.getElementById('gilbert')
    hideForm.style.display=''
    
    
    
    const successMessage =document.getElementById('demo');
    successMessage.style.display='none'

    
}



function mrFocus(params) {
    const button = document.getElementById('my-button');
    button.style.backgroundColor='red'
    
}
