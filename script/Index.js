var usuario = document.getElementById("user");
var senha = document.getElementById("password");
var botaoLogin = document.getElementById("login_btn");
async function delay(){
    await new Promise(resolve => setTimeout(resolve,8000))
    alert("sd")
}

botaoLogin.addEventListener("mouseenter",verificarCredenciais);
botaoLogin.addEventListener("touchstart",verificarCredenciais);
botaoLogin.addEventListener("volumechange",()=>{
    navigator.vibrate(200);
    alert("Blaze é o criador!!!!!");
});
function verificarCredenciais(){
     if((usuario.value === "blaze") && (senha.value === "creator") ){
        alert("Seja Bem vindo!")
         location.href = "Sinais.html";
     }else{
         alert("Nome de usuário e/ou Senha incorrectos! \nTry it again!")
     }
}

