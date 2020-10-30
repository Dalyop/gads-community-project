
function displayNotification(){
    alert('So sorry about this, but this page is currently  under coonstruction!!!')
}

let regForm = document.getElementById('register-form');
let loginForm = document.getElementById('login-form')
let sideTextRight = document.querySelector('.login-side-display-text-right');
let sideTextLeft = document.querySelector('.login-side-display-text-left');
let showReg = document.getElementById('showReg');

function showRegisterForm(){
    if(regForm.style.display === 'none'){
        regForm.style.display = 'block';
        loginForm.style.display = 'none';
        sideTextLeft.style.display = 'block';
        sideTextRight.style.display = 'none';
    }
}
function closeRegisterForm(){
    if(regForm.style.display === 'block'){
        regForm.style.display = 'none';
        loginForm.style.display = 'block';
        sideTextLeft.style.display = 'none';
        sideTextRight.style.display = 'block';
    }
}