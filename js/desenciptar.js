var btnDesencriptar = document.querySelector("#desencriptar");
var btnCopy = document.querySelector(".btn-copy");
var img = document.querySelector(".fondo");
var msn_1 = document.querySelector(".msn_1");
var msn_2 = document.querySelector(".msn_2");
var msn_caja = document.querySelector(".cajaCopy");
var campoEncriptar = document.querySelector("#txtMensaje");

var validar = 0;

btnDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();

    if (campoEncriptar.value == "") {
        img.classList.remove("invisible");
        msn_1.classList.remove("invisible");
        msn_2.classList.remove("invisible");
        btnCopy.classList.add("invisible");
        msn_caja.classList.remove("visible");
    } else {

        validar = tiene_mayusculas(campoEncriptar.value);

        if (validar == 0) {
            img.classList.add("invisible");
            msn_1.classList.add("invisible");
            msn_2.classList.add("invisible");
            btnCopy.classList.add("visible");
            msn_caja.classList.add("visible");
            desencriptar();
        }
        else {
            alert('Solo letras minúsculas y sin acentos');
        }
    }
});

function desencriptar() {
    let txt_caja = document.querySelector("#txtMensaje").value;
    let txt_cifrado = txt_caja.replace(/enter/igm, 'e');
    txt_cifrado = txt_cifrado.replace(/imes/igm, 'i');
    txt_cifrado = txt_cifrado.replace(/ai/igm, 'a');
    txt_cifrado = txt_cifrado.replace(/ober/igm, 'o');
    txt_cifrado = txt_cifrado.replace(/ufat/igm, 'u');

    if (txt_caja == txt_cifrado) {
        img.classList.remove("invisible");
        msn_1.classList.remove("invisible");
        msn_2.classList.remove("invisible");
        btnCopy.classList.add("invisible");
        msn_caja.classList.remove("visible");
    } else {
        msn_caja.value = txt_cifrado;
    }
}