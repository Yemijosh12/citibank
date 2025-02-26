const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const options = document.querySelectorAll('.menue 1i');
const selected = document.querySelector('selected');
const flag = document.querySelector('.flag');


select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
});


options.forEach(OPTION => {
    Option.addEventListener('click', () =>{
        selected.innerText = option.innerText;
        flag.src='image/usaa.png'

        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option => {
            option.classList.remove('active');
            
        });
        option.classList.add('active');
    });
});



function togglePassword(){
    var passwordInput = 
    document.getElementById("password");
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
    }else{
        passwordInput.type = "password";
    }
}






