var titulo = document.querySelector (".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
var paciente = pacientes[i];
var tdPeso = paciente.querySelector (".info-peso");
var tdAltura = paciente.querySelector (".info-altura");
var imcTd =  paciente.querySelector (".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var alturaEhValida = true;
var pesoEhValido = true;
}

if (peso <= 0 || peso >= 1000){
    console.log("Peso Inválido");
    imcTd.textContent="Peso inválido!";
    pesoEhValido = false;

    paciente.classList.add("paciente-invalido");
}

if (altura <= 0 || altura >= 3.0) {
    console.log = ("Altura inválida");
    imcTd.textContent = "Altura inválida!";
    alturaEhValida = false;

    paciente.classList.add("paciente-invalido");
}

if (alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso,altura);
    imcTd.textContent = imc;
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
