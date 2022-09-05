const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const errorMessage = document.querySelector('.error');

const inputs = [email, phone, password, confirmPassword];

inputs.forEach((item) => {
    item.addEventListener('focusin', () => {
        errorMessage.textContent = "";
        item.classList.remove('error');
        if(item == password || item == confirmPassword){
            password.classList.remove('error');
        }
    })
}
);


//if you don't prevent default action, when you submit it will refresh the page. It prevent the page from being refreshed. 
const submit = (e) => {
    e.preventDefault();
    if(password.value != confirmPassword.value){
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.textContent = "Passwords don't match!";
        return;
    }
    if(!phone.value.match (
         /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    )
    ){
        phone.classList.add('error');
        errorMessage.textContent = "Please enter a valid Phone number!"
        return;
    }
    if(password.value.length < 8){
        password.classList.add('error');
        errorMessage.textContent = "Password needs to be atleast 8 characters long."
        return;
    }
    errorMessage.textContent = "Form added successfully!";
    errorMessage.style.color = "darkgreen";
    setTimeout(() => {
        window.location.reload()
    }, 500)
};

const form = document.querySelector('form');
form.addEventListener('submit', submit);


