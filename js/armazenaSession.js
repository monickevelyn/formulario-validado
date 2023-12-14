import {email, nome, senha} from './valida.js';

// caso a página atualize sem permissão do user os valores continuaram como foram escritos
if (sessionStorage.getItem("nome") || sessionStorage.getItem("email") || sessionStorage.getItem("senha")) {
    // Restaura o conteúdo da caixa de texto
    nome.value = sessionStorage.getItem("nome");
    email.value = sessionStorage.getItem("email")
    senha.value = sessionStorage.getItem("senha")
}
  
// verifica as mudanças que ocorrem na caixa de texto
nome.addEventListener("change", function () {
    // salva o resultado dentro de um objeto session storage
    sessionStorage.setItem("nome", nome.value);
});
email.addEventListener("change", function () {
    sessionStorage.setItem("email", email.value);
});
  senha.addEventListener("change", function () {
    sessionStorage.setItem("senha", senha.value);
});