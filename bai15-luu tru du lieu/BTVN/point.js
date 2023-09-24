var inputNumbers = document.getElementsByTagName("li");
var pickedNumber = -1;
for (let i = 0; i < 10; i++) {
    inputNumbers[i].onclick = function () {
        for (let item of inputNumbers)  {
                item.classList.remove('pick');
            };
            inputNumbers[i].classList.add('pick');
            pickedNumber = inputNumbers[i].innerText;
    }
let outPut = document.getElementById('output');
let send = document.getElementById('btn');
send.onclick = function () {
    let value = document.getElementById('text').value;
    outPut.innerHTML = ` <p id="feed-back">${pickedNumber}</p>
    <div class="icon">
        <span class="material-symbols-outlined">
            edit_square
        </span>
        <span class="material-symbols-outlined">
            close
        </span>
    </div>
    <p>${value}</p>`;

}
}

