const enter = document.querySelector("#js-enter"),
    greeting = document.querySelector(".js-greeting"),
    form = document.querySelector(".js-form"),
    input = document.querySelector(".js-input");

const USER_LS = "currentuser";

function saveUser(text){
    localStorage.setItem(USER_LS, text);

}

function loadUser(event){
    event.preventDefault();
    const username = input.value;
    saveUser(username);
    greetingUser(username);
}

function submitName(){
    form.addEventListener("submit", loadUser);
}

function greetingUser(text){
    enter.classList.remove("notShowing");
    enter.classList.add("showing");
    form.classList.add("notShowing");
    greeting.innerText = `안녕하세요 ${text}님!`;
}

function enterSite(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser === null){
        submitName();
    } else {
        greetingUser(currentUser);
    }
}

function init(){
    enterSite();
}

init();