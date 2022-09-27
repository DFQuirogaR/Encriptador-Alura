var btnEncriptar = document.querySelector("#encriptar");
var btnCopy = document.querySelector(".btn-copy");
var img = document.querySelector(".fondo");
var msn_1 = document.querySelector(".msn_1");
var msn_2 = document.querySelector(".msn_2");
var msn_caja = document.querySelector(".cajaCopy");
var campoEncriptar = document.querySelector("#txtMensaje");

var validar = 0;

btnEncriptar.addEventListener("click", function (event) {
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
            encriptar();
        }
        else {
            alert('Solo letras minúsculas y sin acentos');
        }
    }
});

function tiene_mayusculas(texto) {
    console.log("texto: " + texto)
    var letras_mayusculas = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZáéíóú";
    console.log(letras_mayusculas)
    for (i = 0; i < texto.length; i++) {
        if (letras_mayusculas.indexOf(texto.charAt(i), 0) != -1) {
            console.log("1")
            return 1;
        }
    }
    return 0;
}

function encriptar() {
    let txt_caja = document.querySelector("#txtMensaje").value;
    let txt_cifrado = txt_caja.replace(/e/igm, 'enter');
    txt_cifrado = txt_cifrado.replace(/i/igm, 'imes');
    txt_cifrado = txt_cifrado.replace(/a/igm, 'ai');
    txt_cifrado = txt_cifrado.replace(/o/igm, 'ober');
    txt_cifrado = txt_cifrado.replace(/u/igm, 'ufat');
    msn_caja.value = txt_cifrado;
}