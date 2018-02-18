/*let objectsArray = ["Chocolate", "Fudge", "Gummybears", "Lollipops"]
document.getElementById("body").innerHTML = objectsArray;

*/
/*
let myArr1 = [];

myArr1[0] = new Candy("Chocolate");
myArr1[1] = new Candy("Fudge");
myArr1[2] = new Candy("Gummybear");
myArr1[3] = new Candy("Lollipop");
*/

/*
let display = document.getElementById("products");
let myArray2 = [{name:"Chocolate", price: "25", img:}, {name:"Fudge", price: "18"}];

for (let element of myArray2);
{
    console.log();
}

*/


// for (let i = 0; i < myArray2.length; i++)

let products = [
    {
        name: "Chocolate-dipped strawberries",
        price: 9,
        description: "Tasty strawberries from Spain dipped in a lovely chocolate cream",
        img: "../images/chocolatestrawies.jpg"
    },

    {
        name: "Fudge",
        price: 12,
        description: "Amazing chocolate and vanilla mixed fudge containing hazel nuts",
        img: "../images/fudge.jpg"
    },

    {
        name: "Gummy-bears",
        price: 25,
        description: "One bag containing 50 gram of your favorite gummy-bears in different tastes of fruit",
        img: "../images/gummy-bears.jpg"
    },

    {
        name: "Lollipops",
        price: 6,
        description: "Delicious lollipops in different tastes, garnished with smarties and sprinkles",
        img: "../images/klubbor.jpg"
    }
];



let body = document.getElementsByTagName("body")[0];
let section = document.createElement("section");
section.setAttribute("id", "products");
body.appendChild(section);
body.insertBefore(section, body.childNodes[1]);

for (let items of products) {
    document.getElementById("products").innerHTML += `<div>${items.name}
    <img src="${items.img}">
    <p>${items.price} kr</p>
    <p>${items.description}</p></div>`;
}