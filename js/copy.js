var btnCopy = document.querySelector("#copiar");

btnCopy.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("boton copiar");
    copiar();
});

function copiar() {
    let msn_caja = document.querySelector(".cajaCopy");
    msn_caja.select();
    document.execCommand("copy")
    alert("El mensaje fue copiado al portapapeles");
}