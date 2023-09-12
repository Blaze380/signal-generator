var usuario = document.getElementById("user");
var senha = document.getElementById("password");
var botaoLogin = document.getElementById("login_btn");


botaoLogin.addEventListener("mouseenter",verificarCredenciais);
botaoLogin.addEventListener("touchstart",verificarCredenciais);
botaoLogin.addEventListener("focus",verificarCredenciais);
function verificarCredenciais(){
     if((usuario.value === "blaze") && (senha.value === "creator") ){
         location.href = "Sinais.html";
     }else{
         alert("Nome de usuário e/ou Senha incorrectos! \nTry it again!")
     }
}