let btnCalcular = document.querySelector("button");

btnCalcular.addEventListener("click", function () {
    let valorCantidad = Number(document.querySelector("#cantidad").value);
    let valorPrecio = Number(document.querySelector("#precio").innerHTML);
    let valorColor = document.querySelector("#color").value;

    document.querySelector("#result-total").innerHTML =
        valorCantidad * valorPrecio;
    document.querySelector("#result-cantidad").innerHTML = valorCantidad;
    document.querySelector("#result-color").style.backgroundColor = valorColor;
});
