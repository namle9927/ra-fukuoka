let total;
let packet = 5;
function renderCart() {

    let checkLogin = localStorage.getItem("userId");
    let users = JSON.parse(localStorage.getItem("users"));
    if (checkLogin!=null){
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                //cart user[i].cart
                total=0;
                let text="";
                for (let j = 0; j<users[i].cart.length;j ++) {
                    total += users[i].cart[j].price * users[i].cart[j].quantity;
                    text+=
                        `
                        <hr class="my-4">
      
                        <div class="row mb-4 d-flex justify-content-between align-items-center">
                          <div class="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src="${users[i].cart[j].src}"
                              class="img-fluid rounded-3" alt="Cotton T-shirt">
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-3">
                            <h6 class="text-muted">Biệt thự ven biển</h6>
                            <h6 class="text-black mb-0"> ${users[i].cart[j].name}</h6>
                          </div>
                          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button class="btn btn-link px-2"
                            onclick="decrease(${users[i].cart[j].id})">
                              <i class="fas fa-minus"></i>
                            </button>
      
                            ${users[i].cart[j].quantity}
      
                            <button class="btn btn-link px-2"
                            onclick="increase(${users[i].cart[j].id})">
                              <i class="fas fa-plus"></i>
                            </button>
                          </div>
                          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 class="mb-0">${users[i].cart[j].price * users[i].cart[j].quantity} tỷ</h6>
                          </div>
                          <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-muted"><i class="fas fa-times" onclick="delete_btn(${j})" ></i></a>
                          </div>
                        </div>
                        `
                }
                document.getElementById("render__cart").innerHTML=
                `
                    ${text}
                `;
                document.getElementById("total").innerHTML=
                `
                <div class="col-lg-4 bg-grey">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">Giỏ hàng của bạn <span class = "count"> 3</span></h5>
                    <h5>${total} tỷ </h5>
                  </div>

                  <h5 class="text-uppercase mb-3">Lựa chọn nội thất</h5>

                  <div class="mb-4 pb-2">
                    <select class="select" id= "noiThat" onchange = "myFunction()">
                      <option value="5">Gói 5 Tỷ</option>
                      <option value="4">Gói 4 Tỷ</option>
                      <option value="3">Gói 3 Tỷ</option>
                      <option value="2">Gói 2 Tỷ</option>
                    </select>
                  </div>

                  <h5 class="text-uppercase mb-3">Give code</h5>

                  <div class="mb-5">
                    <div class="form-outline">
                      <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                      <label class="form-label" for="form3Examplea2">Enter your code</label>
                    </div>
                  </div>

                  <hr class="my-4">

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total price</h5>
                    <h5 id = "totalPrice">${total + packet} tỷ</h5>
                  </div>

                  <button type="button" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark" onclick = "register()">Register</button>

                </div>
              </div>
                `
            }
        }

    }
}
renderCart();
function showCount() {
    let checkLogin = localStorage.getItem("userId");
    let users = JSON.parse(localStorage.getItem("users"));
    if (checkLogin) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                //users[i].cart
                let count=0;
                for (let j = 0; j < users[i].cart.length; j++) {
                    count += users[i].cart[j].quantity;  
                }
                document.getElementsByClassName("count")[0].innerHTML=count;
            }
        }

    }
}
showCount();
function register(params) {
  alert("đặt hàng thành công, bạn hãy chờ nhân viên của chúng tôi liên hệ với bạn qua email!");
  window.location.href = "http://127.0.0.1:5502/projectModule1/page/homepage.html"
}
function increase(productId) {
  let checkLogin = localStorage.getItem("userId");
  let users = JSON.parse(localStorage.getItem("users"));
  if (checkLogin != null) {
      for (let i = 0; i < users.length; i++) {
          if (users[i].id == checkLogin) {
              for (let j = 0; j < users[i].cart.length; j++) {
                  if(users[i].cart[j].id==productId){
                      users[i].cart[j].quantity == ++users[i].cart[j].quantity;
                      localStorage.setItem("users",JSON.stringify(users));
                      renderCart();
                  }
                  
              }
          }
      }
  }

}
function decrease(productId) {
  let checkLogin = localStorage.getItem("userId");
  let users = JSON.parse(localStorage.getItem("users"));
  if (checkLogin != null) {
      for (let i = 0; i < users.length; i++) {
          if (users[i].id == checkLogin) {
              for (let j = 0; j < users[i].cart.length; j++) {
                  if(users[i].cart[j].id==productId){
                      users[i].cart[j].quantity == --users[i].cart[j].quantity;
                      if (users[i].cart[j].quantity == 0) {
                        delete_btn();
                      }
                      localStorage.setItem("users",JSON.stringify(users));
                      renderCart();
                  }
                  
                  
              }
          }
      }
  }

}
function delete_btn(index) {
  let checkLogin = localStorage.getItem("userId");
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
  users[i].cart.splice(index,1);
  localStorage.setItem("users",JSON.stringify(users));
  renderCart();
}
}
}
function myFunction() {
  packet = +document.getElementById("noiThat").value;
  document.getElementById("totalPrice").innerHTML = (total + packet) + ' tỷ';
  
}