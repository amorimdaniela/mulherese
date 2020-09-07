//não implemetado o BD!

//Variáveis Globais
var etapa1 = true; //Descoberta
var etapa2 = false; //Ideação
var etapa3 = false; //Modalidade
var etapa4 = false; //Validação
var etapa5 = false; //Implementação
var etapa6 = false; //Formalização

function trilhaJornada(){
    if (etapa1){ //DESCOBERTA
        window.location.href="Ideacao.html";
    }
    else{
        document.getElementById("mensagemErro").style.display = "block";
    }
}  

//mostrarSenha ao clicar no olho
function mostraSenha() {
    var type = document.getElementById('senha').type;

    if(type == 'text'){
       document.getElementById('senha').type= 'password';
    }else{
       document.getElementById('senha').type = 'text';
    }
}
 
//verificar login/logar 
function verificarLogin() {
    var cpf = document.getElementById('cpf').value;
    var senha = document.getElementById('senha').value;

    if(cpf == '111.111.111-00' && senha == '123456'){
        window.location.href="principal.html";
    }else{
        document.getElementById("mensagemErro").style.display = "block";
    } 
}

//função para salvar
function salvar(){
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var email = document.getElementById('email').value;
    //var confirmarEmail = document.getElementById('confirmarEmail').value;
    var senha = document.getElementById('senha').value;
    //var confirmarSenha = document.getElementById('confirmarSenha').value;
    var termos = document.getElementById('termos').value;

    if (nome != "" && cpf != "" && email != "" && /*confirmarEmail != "" &&*/ 
        /*confirmarSenha != "" &&*/ senha != "" /*&& termos == true*/)
    {
        /*if ((confirmarEmail != email) || (confirmarSenha != senha)){
            document.getElementById("mensagemErro").style.display = "block";
        }else{*/
            window.location.href="principal.html";
        //}
    }else{
        document.getElementById("mensagemErro").style.display = "block";
    }
}

function trilhasSEs(){
    window.location.href="trilhas.html";
}