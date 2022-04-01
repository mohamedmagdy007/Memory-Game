var arr = [
    "1.gif",
    "2.gif",
    "3.gif",
    "4.gif",
    "5.gif",
    "6.gif",
    "1.gif",
    "2.gif",
    "3.gif",
    "4.gif",
    "5.gif",
    "6.gif",
];
var main = document.getElementsByClassName("main")[0];
var divAll = document.getElementsByTagName("div"),
    div,
    img;
var score=document.getElementsByTagName("p");    
var audioRight = new Audio("images/assets_right.wav");
var audioWrong = new Audio("images/assets_wrong.wav");
arr.sort(() => 0.5 - Math.random());
function displayImg() {
    for (var i = 0; i < arr.length; i++) {
        div = document.createElement("div");
        main.appendChild(div);
        img = document.createElement("img");
        img.setAttribute("src", arr[i]);
        img.setAttribute("id", arr[i]);
        div.appendChild(img);
    }
}
displayImg();

var flag = true;
var arr2 = [];
var cardsWon=[];
for (var i = 0; i < divAll.length; i++) {
    divAll[i].addEventListener("click", function () {
        if (!flag) {
            return;
        }
        this.firstChild.style.opacity = "1";
        this.classList.add("disabled")
        if (arr2.length == 0) {
            arr2[0] = this;
        } else if (arr2.length == 1) {
            arr2[1] = this;
        }
        if (arr2.length == 2) {
            flag = false;
            setTimeout(check, 500);
        }
    });
}
function check() {
    if (arr2[0].firstChild.id == arr2[1].firstChild.id) {
        audioRight.play();
        console.log(arr2[0].classList.add("disabled"))
        cardsWon.push(arr2);
        arr2.forEach((li)=>{
         console.log(li.classList.add("disabled")) ;
        })
    } else {
        audioWrong.play();
        arr2[0].firstChild.style.opacity = 0;
        arr2[1].firstChild.style.opacity = 0;
        arr2[0].classList.remove("disabled")
        arr2[1].classList.remove("disabled")
    }

    arr2 = [];
    flag = true;
    score[0].textContent = "score " + cardsWon.length;
    if(cardsWon.length===arr.length/2){
        audioRight.play();
        score[0].textContent ="Congratulations";
    }
}
