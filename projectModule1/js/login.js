function login() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let email = document.getElementById("form3Example3cg").value;
    let password = document.getElementById("form3Example4cg").value;
    if (email == "admin" && password =='admin') {
        window.location.href = "http://127.0.0.1:5502/projectModule1/page/admin.html";
        return
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            if (users[i].active == false) {
                alert("tai khoan cua ban da bi ban");
                return;
            }
            localStorage.setItem("userId", users[i].id)
            window.location.href = "./homepage.html";
            return;
        }

    }
    alert("Email hoặc mật khẩu không đúng");
}

function logOut() {
    localStorage.removeItem("userId");
}
logOut();