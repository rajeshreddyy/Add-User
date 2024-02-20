let addUserData = {
    Name : "",
    Email : ""
};

let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let addUserFormEl = document.getElementById("addUserForm");

let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");


nameEl.addEventListener("blur" , function(event){
    if(event.target.value === ""){
        nameErrMsgEl.textContent = "Required*";
    }
    else{
        nameErrMsgEl.textContent = "";
    }
    addUserData.Name = event.target.value;
});

emailEl.addEventListener("blur" , function(event){
    if(event.target.value === ""){
        emailErrMsgEl.textContent = "Required*";
    }
    else{
        emailErrMsgEl.textContent = "";
    }
    addUserData.Email = event.target.value;
});

addUserFormEl.addEventListener("submit" , function(event){
    event.preventDefault();
    
    addUserData.Name = nameEl.value;
    addUserData.Email = emailEl.value;
    
    nameEl.value  = "";
    emailEl.value = "";
});

console.log(addUserData);
