var a = document.getElementById("small");
var b = a.getElementsByTagName("img");
var c = document.getElementById("main");
for (let i = 0; i < b.length; i++) {
    let d = b[i];
    d.addEventListener('click', function () {
        c.src = this.src;
    })
}


function check() {
    var username = document.getElementById("name");
    var password = document.getElementById("password");
    var email = document.getElementById("email");

    var isValid = true;

    if (username.value.trim() == "") {
        username.style.border = "solid 2px red";
        document.getElementById("name1").innerText = "Username should not be null!";
        document.getElementById("name1").style.visibility = "visible";
        isValid = false;
        return isValid;
    } 
    else {
        username.style.border = ""; // Reset border style if valid
        document.getElementById("name1").style.visibility = "hidden";
    }

    if (!(isNaN(username.value.trim()))) {
        username.style.border = "solid 2px red";
        document.getElementById("name1").innerText = "Username should not be a number!";
        document.getElementById("name1").style.visibility = "visible";
        isValid = false;
        return isValid;
    } else {
        username.style.border = ""; // Reset border style if valid
        document.getElementById("name1").style.visibility = "hidden";
    }

    if (password.value.trim() == "") {
        password.style.border = "solid 2px red";
        document.getElementById("pass1").innerText = "Password should not be null!";
        document.getElementById("pass1").style.visibility = "visible";
        isValid = false;
        return isValid;
    } else {
        password.style.border = ""; // Reset border style if valid
        document.getElementById("pass1").style.visibility = "hidden";
    }

    if (password.value.trim().length < 5) {
        password.style.border = "solid 2px red";
        document.getElementById("pass1").innerText = "Length of password should not be less than 5!";
        document.getElementById("pass1").style.visibility = "visible";
        isValid = false;
        return isValid;
    } else {
        password.style.border = ""; // Reset border style if valid
        document.getElementById("pass1").style.visibility = "hidden";
    }

    if (!/[&@*$%]/.test(password.value.trim())) {
        password.style.border = "solid 2px red";
        document.getElementById("pass1").innerText = "Password must contain at least one special character";
        document.getElementById("pass1").style.visibility = "visible";
        isValid = false;
        return isValid;
    } else {
        password.style.border = ""; // Reset border style if valid
        document.getElementById("pass1").style.visibility = "hidden";
    }

    if (password.value.trim() != conpass.value.trim()) {
        conpass.style.border = "solid 2px red";
        document.getElementById("conpass1").innerText = "Passwords do not match!";
        document.getElementById("conpass1").style.visibility = "visible";
        isValid = false;
        return isValid;
    } else {
        conpass.style.border = "";
        document.getElementById("conpass1").style.visibility = "hidden";    
    }

    if (email.value.trim() == "") {
        document.getElementById("email1").innerText = "Email should not be null";
        document.getElementById("email1").style.visibility = "visible";
        isValid = false;
        return isValid;
    } else {
        document.getElementById("email1").style.visibility = "hidden";
    }

    return isValid;
}
