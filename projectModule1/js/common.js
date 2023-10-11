function renderIdName() {
    let checkLogin = localStorage.getItem("userId");
    let users = JSON.parse(localStorage.getItem("users"));
    if (checkLogin && checkLogin.length > 0) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                document.getElementById("renderIdName").innerHTML =
                    `
       <span> ${users[i].name}</span>
       <a href="http://127.0.0.1:5502/projectModule1/page/login_page.html" > <span
               class="material-symbols-outlined">
               logout
           </span></a> 
       `
       document.getElementById("cart").innerHTML =

      ` <a href="http://127.0.0.1:5502/projectModule1/page/cart_page.html#!">
       <span class="material-symbols-outlined">
           shopping_bag
       </span>
   </a>`

            }


        }

    } else {
        document.getElementById("renderIdName").innerHTML =
        `
        <a href="http://127.0.0.1:5502/projectModule1/page/login_page.html">
        <span class="material-symbols-outlined">
            person
        </span>
    </a>
        `

    }
}
renderIdName();