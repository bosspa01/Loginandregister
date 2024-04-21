const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const returnlogin = document.querySelector(".return-link");
const registerLink = document.querySelector(".register-link");
const forgorpassword = document.querySelector(".forgot-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

forgorpassword.addEventListener("click", ()=> {
    wrapper.classList.add("activeforgot");
});

registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
});

returnlogin.addEventListener("click", ()=> {
    wrapper.classList.remove("activeforgot");
});

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup");
});