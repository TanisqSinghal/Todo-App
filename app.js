let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");


btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = input.value;

    let dltBtn = document.createElement("button")
    dltBtn.innerText = "delete";
    dltBtn.classList.add("delete");
    dltBtn.classList.add("button-30");
    item.appendChild(dltBtn)

    ul.appendChild(item);
    input.value = "";


})

ul.addEventListener("click" , function (event) {       // using event delegation 
    let itemList = event.target.parentElement;
    if (event.target.nodeName == "BUTTON") {
        itemList.remove();
    } else {
        
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click" , function () {
//         let par = this.parentElement;
//         par.remove();
//     })
// }