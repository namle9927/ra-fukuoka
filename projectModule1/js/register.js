function uuid() {
    return Math.floor(Math.random()*3234565566);
}
var flag = true;
let btn = document.getElementById("registerBtn");
let formMessage = document.getElementsByClassName("formMessage");
let users = JSON.parse(localStorage.getItem("users")) || [];
let mailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
function register() {
    validate();
    if (flag) {
        let name = document.getElementById("form3Example1cg").value;
        let mail = document.getElementById("form3Example3cg").value;
        let password = document.getElementById("form3Example4cg").value;
        let confirmPassword = document.getElementById("form3Example4cg").value;
      /*   let admin = {
            email: "admin@gmail.com",
            password: 'admin',
        }; */
        let obj = {
            email: mail,
            name: name,
            password: password,
            id: uuid(),
            cart: [],
            role: 'customer',
            active: true,
        }
    
        let check = users.filter((item) =>{
            return item.email == mail;
        })
        if (check.length == 0) {
            users.push(obj);
            localStorage.setItem("users",JSON.stringify(users))
            window.location.href="./login_page.html";
        } else{
            alert("tai khoan da ton tai")
        }
    }

}

function validate() {
    let checkedBtn = document.getElementById("form2Example3cg");
    let name = document.getElementById("form3Example1cg").value;
    let mail = document.getElementById("form3Example3cg").value;
    let password = document.getElementById("form3Example4cg").value;
    let confirmPassword = document.getElementById("form3Example4cdg").value;
    if (name == '') {
        formMessage[0].classList.add('error');
        formMessage[0].innerHTML = "Hay nhap ho ten cua ban";
        flag = false;
    }
    if (mail == '') {
        formMessage[1].classList.add('error');
        formMessage[1].innerHTML = "Hay nhap email cua ban";
        flag = false;
    }
    if (!mailRegex.test(mail)) {
        formMessage[1].classList.add('error');
        formMessage[1].innerHTML = "hay nhap lai email";
        flag = false;
    }
    if (password == '') {
        formMessage[2].classList.add('error');
        formMessage[2].innerHTML = "Hay nhap mat khau ";
        flag = false;
    }
    if (confirmPassword == '') {
        formMessage[3].classList.add('error');
        formMessage[3].innerHTML = "Hay nhap truong nay";
        flag = false;
    }
    if (!(password == confirmPassword) ) {
        formMessage[3].classList.add('error');
        formMessage[3].innerHTML = "Mat khau nhap lai chua dung";
        flag = false;
    }
    if (!checkedBtn.checked) {
        console.log(!checkedBtn.checked);
        formMessage[4].classList.add('error');
        formMessage[4].innerHTML = "Hay dong y cac dieu khoan";
        flag = false;
    }
    return flag
};
