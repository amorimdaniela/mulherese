//não implemetado o BD!

<<<<<<< HEAD
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

=======
>>>>>>> f2c045129cac26ccf1d8140e08b23bf54fac6f3f
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

function trilhaSE(trilha){
    if (trilha == 1){ //Marketing e Venda
        window.location.href="trilhaMarketing.html";
    }
    else if (trilha == 2){ //RH | Gestão de Equipe
        window.location.href="trilhaRH.html";
    }
    else if (trilha == 3){ //Finanças | Contabilidade | Investimento
        window.location.href="trilhaFinancas.html";
    }
    else if (trilha == 4){ //Liderança e Empreendedorismo
        window.location.href="trilhaLideranca.html";
    }
    else if (trilha == 5){ //Organização Pessoal
        window.location.href="trilhaPessoal.html";
    }
    else if (trilha == 6){ //Empoderamento | Inspiração
        window.location.href="trilhaEmpoderamento.html";
    }
}

function trilhaJornada(etapa){
    if (etapa == 1){ //DESCOBERTA
        window.location.href="descoberta.html";
    }
    else if (etapa1 == 2){ //IDEAÇÃO
        window.location.href="Ideacao.html";
    }
    else{
        document.getElementById("mensagemErro").style.display = "block";
    }
}  

function trilhasSEs(){
    window.location.href="trilhas.html";
}