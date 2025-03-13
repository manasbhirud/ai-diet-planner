const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})


// redirect to question page
document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent the default form submission

    // // Get values from the form fields
    // const username = document.getElementById('username').value;
    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;

    // // Store the data in localStorage (for temporary storage)
    // localStorage.setItem('username', username);
    // localStorage.setItem('email', email);
    // localStorage.setItem('password', password);

    // Redirect to the questionnaire page
    window.location.href = 'questions.html'; 
});


document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    window.location.href = 'home.html';
});
