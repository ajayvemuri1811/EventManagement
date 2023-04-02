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

function badminregis() {
    const form = document.getElementById("BadmintonRegistration").elements;
    const data = {
        "teamname": form.teamName.value,
        "enrollmentno": form.enrollno.value,
        "email": form.email.value,
        "college": form.address.value
    }
    console.log(data);
    fetch(baseURL + "/customAPI/v1/badminRoutes", {
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
            window.location.replace("asmitahome.html");
        }
        clearForm(form);
    }).catch(err => alert(err.message))
}
