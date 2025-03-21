function adicionar(valor) {
    document.getElementById("display").value += valor;
}

function limpar() {
    document.getElementById("display").value = "";
}

function calcular() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Erro";
    }
}

function trocarSinal() {
    let display = document.getElementById("display");
    let valor = display.value;

    if (valor !== "") {
        if (valor.startsWith("-")) {
            display.value = valor.substring(1);
        } else {
            display.value = "-" + valor;
        }
    }
}
