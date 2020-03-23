
// let value = document.querySelectorAll('p.last');
// console.log(value);
// value.innerHTML = "<h1>indxxxxxxxxia</h1>"
// console.log(value.innerText, value.innerHTML)

// let data = document.getElementById('oppo');
// console.log(data.innerText = "Go");


// let tagA = document.querySelector('a');
// console.log(tagA)
// console.log(tagA.getAttribute("href"))

// tagA.setAttribute("href", "www.facebook.com")
// // tagA.innerText = "www.facebook.com";
// // tagA.setAttribute("style", "color:red")


// //we can use this to change value and css property based some event and 
// //find more about includes.method
// //when we use set artibute then new style is applied old style is remove;
// //when we use data.style.color="red" here new property is add with old style together

// data.style.color = "green"
// data.style.border = "blue 2px solid";
// data.style.width = "700px",
// data.style.textAlign = "center"
// data.style.marginLeft = "150px"
// data.style.fontSize = "80px"
// // data.style.border = "";


// data.classList.add("class2");
// data.classList.remove("class1")
// console.log(data.classList)



// setInterval(() => {
//     console.log(data.innerText = "Go");
//     data.style.color = "green"

//     let a = async () => {
//         await setTimeout(() => { data.innerText = "Karuna", data.style.color = "red" }, 1000)
//     }
//     a()
// }, 2000);
// let newdata = data.previousElementSibling.parentElement;

// console.log(newdata)
// let data = document.querySelector('p');

let ul = document.querySelector('ul');
console.log(ul.innerHTML)
let button = document.querySelector('button');
button.addEventListener("click", () => { ul.innerHTML += "<li> new data</li>" });


let Lis = document.querySelectorAll('li');
// console.log(Lis)


ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log("ul click func", e.target.remove())
    }
})


