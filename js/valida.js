export {validaEmail, validaSenha, validaNome};
export {email, senha, nome};

const email = document.getElementById("email");
const senha = document.getElementById("senha");
const nome = document.getElementById("nome");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener("input", validaEmail);
senha.addEventListener("input", validaSenha);
nome.addEventListener("input", validaNome);

// mostrar senha
const iconolho = document.getElementById("icon-olho-aberto");
iconolho.addEventListener("click", () => {
    senha.type = senha.type == 'text' ? 'password' : 'text';
})


// funções de validação

function validaNome() {
  if (nome.value === "") {
    erroMsg(nome, "Digite seu nome.")
  } else {
    const formItem = nome.parentElement;
    formItem.className = "inpunt-content";   
  }
}

function validaEmail() {
  if (!emailRegex.test(email.value) || email.value === "") {
    erroMsg(email, "Digite um E-mail válido")
  } else {
    const formItem = email.parentElement;
    formItem.className = "inpunt-content";
  }
}

function validaSenha() {
  if (senha.value === "" || senha.value.length < 8) {
    erroMsg(senha, "A senha deve ter 8 digítos")
  
  } else {
    const formItem = senha.parentElement;
    formItem.className = "inpunt-content";
  }
}

// função de exibição de mensagem de erros
function erroMsg(input, msg){
    const formItem = input.parentElement;
    const textmsg = formItem.querySelector("span");
    textmsg.innerText = msg;
    formItem.className = "inpunt-content error"
}