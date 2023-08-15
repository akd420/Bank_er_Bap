document.getElementById("btn-login").addEventListener("click", function(){
    let emailField = document.getElementById("user-mail");
    let email = emailField.value;
    let passwordField = document.getElementById("user-pw");
    let password = passwordField.value;
    if(email == "ayanakd112@gmail.com" && password == "ayanakd212"){
        window.location.href = "bank.html";
    }
    else{
        alert('Wrong information');
    }
})