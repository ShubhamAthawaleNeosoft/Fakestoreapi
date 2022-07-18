const URL = "https://fakestoreapi.com/products";
document.getElementById("mens-clothing").onclick = function () { mens() };
document.getElementById("womens-clothing").onclick = function () { womens() };
document.getElementById("jewelery").onclick = function () { jewelery() };
document.getElementById("electronics").onclick = function () { electronics() };
var target = document.getElementById("target");




fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log("hii")
        for (i = 0; i < data.length; i++) {
            var obj_data = data[i];
            console.log(obj_data)
            var element =
                "<div class='card shadow'>" +
                "<div class='card-img'>" +
                "<img  class='img-fluid' src=" + obj_data.image + ">" +
                "</div>" +
                "<div>" +
                "<h5>" + obj_data.title + "</h5>" +
                "<h6>Price:$</h6><span>" + obj_data.price + "</span>" +
                "<button id='btn-cart' type='button' class='btn btn-outline-dark add-to-cart'>Add to Cart</button>" +
                "</div>" +
                "</div>";
            target.innerHTML += element;
        }
    })
    .catch(err => {
        console.log(err)
    })

function mens() {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            target.innerHTML = ""
            var output = data.filter(data => data.category == "men's clothing");
            for (i = 0; i < output.length; i++) {
                var obj_data = output[i];
                var element =
                    "<div class='card shadow'>" +
                    "<div class='card-img'>" +
                    "<img class='img-fluid' src=" + obj_data.image + ">" +
                    "</div>" +
                    "<div>" +
                    "<h5>" + obj_data.title + "</h5>" +
                    "<h6>Price:$</h6><span>" + obj_data.price + "</span>" +
                    "<button type='button' class='btn btn-outline-dark add-to-cart'>Add to Cart</button>" +
                    "</div>" +
                    "</div>";
                target.onclick = target.innerHTML += element;
            }
        })
        .catch(err => {
            console.log(err)
        })
}
function womens() {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            target.innerHTML = ""
            var output = data.filter(data => data.category == "women's clothing");
            for (i = 0; i < output.length; i++) {
                var obj_data = output[i];
                var element =
                    "<div class='card shadow'>" +
                    "<div class='card-img'>" +
                    "<img class='img-fluid' src=" + obj_data.image + ">" +
                    "</div>" +
                    "<div>" +
                    "<h5>" + obj_data.title + "</h5>" +
                    "<h6>Price:$</h6><span>" + obj_data.price + "</span>" +
                    "<button type='button' class='btn btn-outline-dark add-to-cart'>Add to Cart</button>" +
                    "</div>" +
                    "</div>";
                target.onclick = target.innerHTML += element;
            }
        })
        .catch(err => {
            console.log(err)
        })
}
function jewelery() {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            target.innerHTML = ""
            var output = data.filter(data => data.category == "jewelery");
            for (i = 0; i < output.length; i++) {
                var obj_data = output[i];
                var element =
                    "<div class='card shadow'>" +
                    "<div class='card-img'>" +
                    "<img class='img-fluid' src=" + obj_data.image + ">" +
                    "</div>" +
                    "<div>" +
                    "<h5>" + obj_data.title + "</h5>" +
                    "<h6>Price:$</h6><span>" + obj_data.price + "</span>" +
                    "<button type='button' class='btn btn-outline-dark add-to-cart'>Add to Cart</button>" +
                    "</div>" +
                    "</div>";
                target.onclick = target.innerHTML += element;
            }
        })
        .catch(err => {
            console.log(err)
        })
}
function electronics() {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            target.innerHTML = ""
            var output = data.filter(data => data.category == "electronics");
            for (i = 0; i < output.length; i++) {
                var obj_data = output[i];
                var element =

                    "<div class='card shadow'>" +
                    "<div class='card-img'>" +
                    "<img class='img-fluid' src=" + obj_data.image + ">" +
                    "</div>" +
                    "<div>" +
                    "<h5>" + obj_data.title + "</h5>" +
                    "<h6>Price:$</h6><span>" + obj_data.price + "</span>" +
                    "<button type='button' class='btn btn-outline-dark'>Add to Cart</button>" + 
                    "</div>" +
                    "</div>";
                target.onclick = target.innerHTML += element;
            }
        })
        .catch(err => {
            console.log(err)
        })
}

document.getElementById("cart-icon").onclick=function () { showcart() };
document.getElementById("cart-close").onclick=function () { closecart() };
var cart=document.getElementById("cart-model");

function showcart(){
      cart.classList.add("show");
}
function closecart(){
      cart.classList.remove("show");
}

// const cartBtn = document.querySelectorAll('.add-to-cart');
// cartBtn.forEach(elem => {
//   elem.addEventListener('click', function handleClickEvent() {
//     console.log("box clicked");

//     // box.setAttribute('style', 'color: red;');
//     // box.classList.toggle("text-danger")
//   });
// });

function AddCart(){
    // title.innerText="";
    console.log("clicked")
    // var a=obj_data
    // console.log(obj_data.price)
    var title=document.getElementById("title");
    console.log(title.innerText);
}

// const cartBtn=document.querySelectorAll("#btn-cart");
// const title=document.querySelectorAll("#title");
// cartBtn.forEach(elem => {
//       elem.addEventListener('click', function handleClickEvent() {
//         console.log(title);
//         console.log("saljhdsoh")
//       });
//     });
