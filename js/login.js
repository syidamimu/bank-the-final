const submitButton = document.getElementById('submit-button').addEventListener('click',function (){
    // console.log('event added');
    const userInput = document.getElementById("user-email");
    const userEmail = userInput.value;
    // console.log(userEmail);

    const passwordInputField = document.getElementById('user-password');
    const userPassword = passwordInputField.value;
    // console.log(userPassword);

    if (userEmail == 'admin@gmail.com' && userPassword == '123456') {
        alert("Login Successful");
        window.location.href = "../ibanking.html"
    } else if (userEmail != 'admin@gmail.com' || userPassword != '123456')
    {
        alert("username or password is not valid");
    } else if (userEmail != 'admin@gmail.com' && userPassword != '123456'){
        alert("username and password both are invalid" );
    }
})
// console.log(submitButton);

