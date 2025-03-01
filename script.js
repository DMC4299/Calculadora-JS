let valor = "";
let primervalor = null;
let operador = null;

function ingresarValor(num) {
    valor += num;
    actualizarDisplay();
}

function operacion(op) {
    if (valor === "") return;
    primervalor = parseFloat(valor);
    operador = op;
    valor = "";
}

function total() {
    if (primervalor === null || valor === "") return;

    let segundovalor = parseFloat(valor);
    let resultado = 0;

    switch (operador) {
        case "+":
            resultado = primervalor + segundovalor;
            break;
        case "-":
            resultado = primervalor - segundovalor;
            break;
        case "*":
            resultado = primervalor * segundovalor;
            break;
        case "/":
            resultado = segundovalor !== 0 ? primervalor / segundovalor : "Error";
            break;
    }

    valor = resultado.toString();
    primervalor = null;
    operador = null;
    actualizarDisplay();
}

function borrar() {
    valor = "";
    primervalor = null;
    operador = null;
    actualizarDisplay();
}

function actualizarDisplay() {
    document.getElementById("display").value = valor;
}
