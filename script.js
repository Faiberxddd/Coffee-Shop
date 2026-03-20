let contadorProductos = 0;

let btnadd = document.querySelectorAll(".order-btn");
let msgtoast = document.getElementById("toast");
let spancount = document.getElementById("cart-count");

function agregarProducto(){
    contadorProductos++;
    spancount.textContent = contadorProductos;
    msgtoast.classList.add("show");

    setTimeout(function(){
        msgtoast.classList.remove("show");
    }, 3000);
}

for (let i = 0; i < btnadd.length; i++) {
    btnadd[i].addEventListener("click", agregarProducto);
}