//declaration
var favs= Array.from(document.querySelectorAll(".fa-heart"));
var trash=Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards=Array.from(document.querySelectorAll(".card"));
var plusbtn= Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusbtn=Array.from(document.querySelectorAll(".fas fa-minus-circle"));

var coun=Array.from(document.querySelectorAll(".qute"));


//favorites
for(let fav of favs){
    fav.addEventListener("click",function(){
        if (fav.style.color == "black"){
            fav.style.color = "red";
        }
        else {
            fav.style.color = "black";
        }
    });
}
//trash
for (let i in trash){
    trash[i].addEventListener("click", function(){
        cards[i].remove();
     total();   
    });  
}

//add btn
for (let plus of plusbtn){
    plus.addEventListener("click",function(){
        plus.nextElementSibling.innerHTML++;
    console.log(count)
    total(); 
});} 


//minus btn

for (let moin in minusbtn) {
    moin.addEventListener("click",function() {
        moin.previousElementSibling.innerHTML > 0
        ?moin.previousElementSibling.innerHTML--
        : null;
        total();

    });}

//total
function total(){
var qte=Array.from(document.querySelectorAll(".qute"));
var price=Array.from(document.querySelectorAll(".unitt-price"));
let s=0;
for (i=0; i< price.length ; i++){
     s = s + qte[i].innerHTML*price[i].innerHTML;    
}
     document.getElementById("total-price").innerHTML = s;
}


















