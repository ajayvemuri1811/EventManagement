const baseURL = "http://localhost:3000";


function elementUtil(tag, content = "") {
    const element = document.createElement(tag);
    if(Array.isArray(content)) content.map(ele => element.appendChild(ele));
    else element.innerHTML = content;

    return element;
}

function clearForm(form) {
    for(let element of form) element.value = '';
}

function loginuser() {
    const form = document.getElementById("login").elements;

    const data = {
        "email": form.floatingInput.value,
        "password": form.floatingPassword.value,
    }

    fetch(baseURL + "/customAPI/v1/user/login", {
        "method": "post", 
        headers: {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data),
    }).then((response) => {
        return response.json();
    }).then((response) => {
        console.log(response);
        if(response.err !== undefined) {
            alert(response.err);
        } else {
            window.location.replace("index.html");
        }
        clearForm(form);
    }).catch(err => alert(err.message))
}
