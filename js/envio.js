import * as valida from './valida.js';

const form = document.getElementById("form-login");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    confirmarValidacao()
});

function confirmarValidacao(){
    valida.validaEmail();
    valida.validaSenha();
    valida.validaNome();

    const formItens = form.querySelectorAll(".inpunt-content")

    const isValid = [...formItens].every((item) => {
        return item.className === "inpunt-content"
    });

    const confirmModal = document.getElementById("verificar-modal")
    const erroModal = document.getElementById("error-modal")

    try{
        if(isValid){
            confirmModal.style.display = 'block';            
        }else{
            erroModal.style.display = 'block';
        }
    }catch(erro){
        erroModal.style.display = 'block';
    }
}

const fechaModal = document.querySelector(".fechar-modal")
const modais = document.querySelector(".modais")
const fede = document.querySelector(".fede")


fechaModal.addEventListener("click", () =>{
    modais.style.display = "none";
})