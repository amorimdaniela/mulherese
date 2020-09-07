//não implemetado o BD!

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

    if(cpf != '' && senha == '123456'){
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

function trilhaJornada(etapa){
    if (etapa == 1){ //DESCOBERTA
        window.location.href="descoberta.html";
    }
    else if (etapa == 2){ //IDEAÇÃO
        window.location.href="Ideacao.html";
    }
    else{
        document.getElementById("mensagemErro").style.display = "block";
    }
}  

function trilhasSEs(){
    window.location.href="trilhas.html";
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
