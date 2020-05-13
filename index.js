// #1
document.title = "Today we manipulate with DOM";

//#2
var answer;
var userAnswer=confirm("Do you like frontend?");
if (userAnswer == true){
    answer = "YES";
}else {
    answer = "NO";
}
document.getElementById("answer-frontend").innerHTML=answer;

//#3
var newListElement = document.createElement("li");
var insertPoduct = prompt("Add new product in shopping list");
var product = document.createTextNode(insertPoduct);
newListElement.appendChild(product);
document.querySelector('.shopping-list').appendChild(newListElement);

//#4
var ul = document.querySelector('.shopping-list');
ul.removeChild(ul.children[2]);

//#5
var productList = [{name: 'Carrot', price: 2.50 }, {name: 'Cheesse', price: 5.20}, {name: insertPoduct, price: 3.99}];
var selectedProduct = prompt('Please insert what you want to buy?','');
var userProduct;

function selectedItem() {
    for(let i=0; i < productList.length; i++){
        if (selectedProduct == productList[i].name){
            userProduct=i;
            return true;
        }
    }
}


if (selectedItem() === true){
    let userQuantity = prompt('Please insert how much you need?', '')
    document.getElementById('your-total-price').innerHTML = (userQuantity * productList[userProduct].price);
} else {
    alert('Sorry the item you are searching is not found');
    document.getElementById('your-total-price').innerHTML = ('0,00 ');
}
