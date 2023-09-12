//Olabet|Realize your dreams

const btnMenu = document.getElementById("btn_menu");
const btnMenuClicked = document.getElementById("btn_menu_clicked");
const navigationHeader = document.getElementById("navigation_header");
const content = document.getElementById("content");
const betOption = document.getElementById("bet_option");
const cores = document.getElementsByClassName("cor");
const header =document.getElementById("header");
const btnGerarSinais = document.getElementById("btn_gerarsinais")
const body =document.body;
const elementos = document.querySelectorAll(".cor");
const logotipo = document.getElementById("logotipo");
const divSinais = document.getElementById("sinais");
criarSinais()
/**
 * Este loop adiciona o "hover" ao botões de navegação
 */
    for (var i = 0;i<elementos.length;i++){
        // elementos[i].style.color = textColor;
        elementos[i].classList.add("header_hover");
    }

/**
 * Eventos
 */
btnGerarSinais.addEventListener("click", criarSinais);
betOption.addEventListener("change",trocarTema);
btnMenu.addEventListener("click",showSideBar)
btnMenuClicked.addEventListener("click",hideSideBar);
content.addEventListener("click",hideSideBar);
window.addEventListener("resize",resize);

/**
 * Este método verificar se largura da tela é maior que "768" para
 * esconder o menu e tirar o blur.
 */
function resize(){
    if (window.innerWidth>768){
        hideSideBar();
    }
}


/**
 * Este método troca o visual do site entrando no método
 * "temas()".
 */
function trocarTema(){
    switch (betOption.value){
        case "888bet":
            temas("888Bet Moçambique | As melhores odds e ofertas de apostas","#000000","#FFFFFF","#E1E5E0","#FC6200")
            break;
        case "elephantbet":
            temas("Casa de apostas desportivas em Moçambique","#1F72C8","#1C50C7","#FFFFFF","#FE1593")
            break;
        case  "olabet":
            temas("Ola Bet | Realize your dreams","#FFFFFF","#FFFFFF","#000000","#D00000")
            break;
        case "placard":
            temas("Oficial website | Placard","#000000","#383838","#FFFFFF","#97BB3A")
            break;
            case "premierbet":
            temas("Apostas online na PremierBet Moçambique","#009A44","#007D3C","white","#FAE100")
            break;
        default:
            temas("Signals Generator By Blaze","#272727","#1c1c1c","#b040ff","#8832c5","images/Blaze-Logo.svg")
    }
}



/**
 *Este método recebe os seguintes parâmetros:
 * @param {Cabeçalho} headerTitle
 * @param {Cor do Cabeçalho} headerColor
 * @param {Cor do corpo} bodyColor
 * @param {cor da fonte} textColor
 * @param {Cor quando passar pelos botões} hoverColor
 * @param {ìcone da logo} logo
 * e posteriormente ele faz a troca do visual do site.
 */
function temas(headerTitle,headerColor,bodyColor,textColor,hoverColor,logo){
    logotipo.scr = ".images/Premier-Bet.png"
    document.title= headerTitle;
    body.style.backgroundColor = bodyColor;
    header.style.backgroundColor = headerColor;
    for (var i = 0;i<elementos.length;i++){
        document.querySelector(".header_hover").style.backgroundColor =hoverColor;
         elementos[i].style.color = textColor;
    }
}



/**
 * As duas funções "show/hide SideBar", serve para mostrar o menu quando o site for 
 * executado em dispositivos com pouca resolução como tablets,smartphones
 * ,etc.
 */
function showSideBar(){
    navigationHeader.style.marginLeft = "0.1vw";
    content.style.filter = "blur(2px)";
}
function hideSideBar(){
    navigationHeader.style.marginLeft = "-100vw";
    content.style.filter = "blur(0)";
}



 //DAQUI PARA BAIXO NÃO É O MEU CÓDIGO!!!!!!

/**
 * Este método gera um número alatório e retorna a multiplicação dele
 * com outro número número aleatório
 * @returns
 */
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


/**
 * Este método cria duas divs:
 * A primeira div serve para colocar a hora e a segunda
 * sever para o multiplicador
 * @returns Nova div Com dados do sinal
 */
function getSignal() {
    const horas = dataAtual(); //Este método retorna a hora atual
    const minutos = Math.floor(Math.random() * 60); // Minuto aleatório entre 0 e 59
    const segundos = Math.floor(Math.random() * 60); // Segundo aleatório entre 0 e 59
    const numeroX = gerarNumeroX(); //O "numeroX" é a escala de multiplicador .
    const novoSinal = document.createElement("div"); //
    novoSinal.className = "sinal";

    //Ainda vou verificar essa condicional!!!!
    ///
    if (numeroX >= 10) {
        novoSinal.classList.add("cor_rosa"); // Adiciona a classe "rosa" para números x >= 10
    } else if (numeroX >= 5) {
        novoSinal.classList.add("cor_roxo"); // Adiciona a classe "roxo" para números 5 <= x < 10
    } else {
        novoSinal.classList.add("cor_azul"); // Adiciona a classe "azul" para números x < 5
    }
    novoSinal.textContent = `${horas}:${minutos}:${segundos}`;
    const multiplicadorX = document.createElement("div");
    multiplicadorX.className = "multiplicador";
    multiplicadorX.textContent = `${numeroX}X`;
    novoSinal.appendChild(multiplicadorX);
    return novoSinal;
}

/**
 * Este Método Cria o Sinais que são mostrados na tela do site
 */
function criarSinais() {
    divSinais.innerHTML = '';
    const totalSinais = 15;
    let horariosAzuis = 0;
    for (let i = 0; i < totalSinais; i++) {
        const sinal = getSignal();//Este retorna uma div com horário e o multiplicador
        divSinais.appendChild(sinal);
    }
}