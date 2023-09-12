function formatarHorario(hora, minuto, segundo) {
    return `${hora}:${minuto}:${segundo}`;
}

function criarHorarioAtual() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();
    const segundo = dataAtual.getSeconds();
    return formatarHorario(hora, minuto, segundo);
}

function gerarNumeroX() {
    // Gera números aleatórios entre 5 e 100 com maior probabilidade de serem mais baixos
    if (Math.random() < 0.8) {
        return Math.floor(Math.random() * (16)) + 5; // Valores mais baixos
    } else {
        return Math.floor(Math.random() * (99)) + 2; // Valores variando de 2 a 100
    }
}

/**
 * Este método server para pegar a hora atual e o retorna
 * @returns Current hour
 */
function dataAtual(){
    const data = new Date();
    return data.getHours();
}

function gerarHorarioComNumero() {

    const hora = dataAtual();
    const numeroMinuto = Math.floor(Math.random() * 60); // Minuto aleatório entre 0 e 59
    const numeroSegundo = Math.floor(Math.random() * 60); // Segundo aleatório entre 0 e 59
    const numeroX = gerarNumeroX();
    const horarioBox = document.createElement("div");
    horarioBox.className = "horario-box";
    if (numeroX >= 10) {
        horarioBox.classList.add("rosa"); // Adiciona a classe "rosa" para números x >= 10
    } else if (numeroX >= 5) {
        horarioBox.classList.add("roxo"); // Adiciona a classe "roxo" para números 5 <= x < 10
    } else {
        horarioBox.classList.add("azul"); // Adiciona a classe "azul" para números x < 5
    }
    horarioBox.textContent = `${hora}:${numeroMinuto}:${numeroSegundo}`;
    const numeroDiv = document.createElement("div");
    numeroDiv.className = "numero-x";
    numeroDiv.textContent = `${numeroX}x`;
    horarioBox.appendChild(numeroDiv);
    return horarioBox;
}

const horariosContainer = document.getElementById("horarios-container");
const atualizarButton = document.getElementById("atualizar-button");
const casaEscolhidaInput = document.getElementById("casa-escolhida-input");
const atualizarCasaButton = document.getElementById("atualizar-casa-button");
const loginContainer = document.getElementById("login-container");
const programContent = document.getElementById("program-content");

/**
 * Método 'ATUALIZAR HORÁRIOS
 */
function atualizarHorarios() {
    horariosContainer.innerHTML = '';
    const quantidadeHorarios = 10; //10
    var horariosAzuis = 0;
    for (var i = 0; i < quantidadeHorarios; i++) {
        const horarioComNumero = gerarHorarioComNumero();
        horariosContainer.appendChild(horarioComNumero);
        /**
         * O método "appendChild" serve para adicionar um elemento filho para
         * um elemento pai já existente no arquivo HTML
         */
        if (horarioComNumero.classList.contains('azul')) {
            horariosAzuis++;
        }
    }
    if (horariosAzuis >= 2) {
        const horarios = document.querySelectorAll(".horario-box.azul");
        for (let i = 0; i < 2; i++) {
            horarios[i].classList.remove('azul');
            horarios[i].classList.add('rosa');
        }
    }
}

atualizarButton.addEventListener("click", atualizarHorarios);

/**
 * Script para página de login
 */
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const validUsernames = ["g", "Mrlobo", "obrigado_8510300"];
    const validPasswords = ["senha1", "senha2", "senha3"]; // Adicione as senhas correspondentes aos nomes de usuário.

    if (validUsernames.includes(username) && validPasswords[validUsernames.indexOf(username)] === password) {
        alert("Login bem-sucedido!");
        loginContainer.style.display = "none";
        programContent.style.display = "block";
        atualizarHorarios();
    } else {
        alert("Nome de usuário ou senha incorretos. Tente novamente.");
      
  }
});
