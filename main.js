const inputEmail = document.querySelector("#input-email");
const inputSenha = document.querySelector("#input-senha");
const inputCpf = document.querySelector("#input-cpf");
const inputTelefone = document.querySelector("#input-telefone");
const inputEndereco = document.querySelector("#input-endereco");
const inputCadastrar = document.querySelector("#input-cadastrar");
const inputLogar = document.querySelector("#input-logar");

let email = ["arara"];
let senha = ["arara"];
let endereco = [];
let cpf = [];
let telefone = [];

inputCadastrar.addEventListener("click", () => {
    email.push(inputEmail.value);
    senha.push(inputSenha.value);
    endereco.push(inputEndereco.value);
    cpf.push(inputCpf.value);
    telefone.push(inputTelefone.vale);

    console.log(email[0], senha[0], endereco[0], cpf[0], telefone[0]);
})

inputLogar.addEventListener("click", () => {
        if(email[0].equals(inputEmail.value)){
            if(inputSenha.value == senha[0]){
                console.log("logado com sucesso")
            }
            else{
                console.log("tente novamente")
            }
        }
})



