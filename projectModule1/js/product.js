/* let productList = [
    {
        name: "nha 1",
        price: 5,
        id: 65375465,
        src: "../assets/images/spencial4.jpg",
    },
    {
        name: "nha 2",
        price: 4,
        id: 678578,
        src: "../assets/images/spencial5.jpg",
       
    },
    {
        name: "nha 3",
        price: 20,
        id: 324545346,
        src: "../assets/images/spencial2.jpg",
        
    },
    {
        name: "nha 4",
        price: 6,
        id: 676757,
        src: "../assets/images/spencial4.jpg",
        
    },
    {
        name: "nha 5",
        price: 7,
        id: 65345334,
        src: "../assets/images/spencial4.jpg",
    },
    {
        name: "nha 6",
        price: 8,
        id: 653453455,
        src: "../assets/images/spencial4.jpg",
    }
]
localStorage.setItem("productList", JSON.stringify(productList)); */

let products = JSON.parse(localStorage.getItem("productList"));
function renderProducts(productList) {
    if(productList==undefined){
        productList=[];
    }
    let text = "";
    for (let i = 0; i < productList.length; i++) {
        text +=
            `
            <div class="row spencial">
            <div class="card col-xl-4 spencial__item">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="${productList[i].src}" class="img-fluid" />
                    <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                    </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${productList[i].name} </h5>
                    <p class="card-text">Giá ${productList[i].price} tỷ</p>
                    <div class="detail__btn">
                        <a href="#!" class="btn btn-black" onclick="addToCart(${productList[i].id})">Mua ngay</a>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-black" data-bs-toggle="modal"
                            data-bs-target="#exampleModal${i}">
                            Chi tiết sản phẩm
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal${i}" tabindex="-1"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Chi tiết</h5>
                                        <button type="button" class="btn-close" data-mdb-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">Toàn nhà đẹp, hết nước chấm</div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-black"
                                            data-mdb-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   `
    }
    document.getElementsByClassName("product__list")[0].innerHTML = text
}
renderProducts(products);
function addToCart(productId) {
    // console.log("productId", productId);
    let checkLogin = localStorage.getItem("userId");
    // biến checkLogin có giá trị là id của người dùng
    // lấy toàn bộ users ra
    let users = JSON.parse(localStorage.getItem("users"));
    // lấy toàn bộ danh sách sản phẩm
    let products = JSON.parse(localStorage.getItem("productList"));
    if (checkLogin) {
        // đã đăng nhập mới cho đi mua hàng
        // đi mua hàng dựa vào userId 
        // alert("đi mua hàng bình thường!")
        // mình có nhiều user thì phải lấy ra giỏ của user có id == checkLogin
        /*   let cartUser=users.filter((item)=>{
              return item.id==checkLogin;
          })
          console.log("cartUser", cartUser); */
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == checkLogin) {
                // lấy ra giỏ hàng của user vừa đăng nhập
                //users[i].cart
                for (let j = 0; j < products.length; j++) {
                    if (products[j].id == productId) {
                        //... toán tử spread
                        // trước khi push phải xem sản phẩm đó đã có trong giỏ hàng hay chưa
                        // nếu có rồi thì tăng số lượng thôi.
                        // chưa có thì push vào bình thường
                        // users[i].cart.push({ ...products[j],quantity:1 });
                        // localStorage.setItem("users",JSON.stringify(users));
                        let result = users[i].cart.filter((item) => {
                            return item.id == productId;
                        })
                        if (result.length == 0) {
                            users[i].cart.push({ ...products[j], quantity: 1 });
                            localStorage.setItem("users", JSON.stringify(users));
                            showCount();
                        } else {
                            // users[i].cart[j].quantity == ++users[i].cart[j].quantity;
                            // localStorage.setItem("users", JSON.stringify(users));
                            for (let k = 0; k < users[i].cart.length; k++) {
                                if (users[i].cart[k].id == productId) {
                                    users[i].cart[k].quantity = ++users[i].cart[k].quantity;
                                    localStorage.setItem("users", JSON.stringify(users));
                                    // showCount();
                                    break;
                                }
                            }
                        }
                    }
                }
                alert("da them vao gio hang");
            }

        }
    } else {
        // chưa đăng nhập không thể mua hàng
        alert("bạn phải đăng nhập để đi mua hàng!")
    }
}
function searchCake() {
    let inputValue=document.getElementById("seachBar").value;
     let result=products.filter((item)=>{
         return item.name.indexOf(inputValue) !=-1;
     })
     console.log(result);
     if(result.length !=0 ){
         renderProducts(result);
     }else{
         renderProducts();
     }
 }
