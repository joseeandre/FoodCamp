function selecionar(id_clicado, refeicao) {
    let pai = document.getElementById(refeicao);
    let elemento_selecionado = pai.getElementsByClassName("selecionado");
    let elemento_clicado = document.getElementById(id_clicado);

    if (elemento_selecionado.length == 0) {
        elemento_clicado.classList.add("selecionado");
    } else {
        elemento_selecionado[0].classList.remove("selecionado");
        elemento_clicado.classList.add("selecionado");
    }

    let total_selecionado = document.getElementsByClassName("selecionado");
    let botao_concluir = document.getElementsByClassName("concluir-pedido");
    let fechar_pedido = botao_concluir[0].getElementsByClassName("texto");

    if (total_selecionado.length == 3) {
        botao_concluir[0].style["background-color"] = "#32B72F";
        fechar_pedido[0].innerHTML = "Fechar pedido"
    }
}

function fechar() {
    let total_selecionado = document.getElementsByClassName("selecionado");
    let confirmar_pedido = document.getElementsByClassName("confirme");
    let total_filhos = document.body.children;

    if (total_selecionado.length == 3) {
        for (var i = 0; i < total_filhos.length; i++) {
            total_filhos[i].style.filter = "opacity(20%)";
        }
        confirmar_pedido[0].style.display = "flex";
        confirmar_pedido[0].style.filter = "opacity(100%)";
    }

    let prato = total_selecionado[0].id;
    let bebida = total_selecionado[1].id;
    let sobremesa = total_selecionado[2].id;
    let price = Number(total_selecionado[0].value) + Number(total_selecionado[1].value) + Number(total_selecionado[2].value);

    let pratos_pedido = confirmar_pedido[0].getElementsByClassName("texto-confirme");
    pratos_pedido[0].innerHTML = prato;
    pratos_pedido[1].innerHTML = total_selecionado[0].value;
    pratos_pedido[2].innerHTML = bebida;
    pratos_pedido[3].innerHTML = total_selecionado[1].value;
    pratos_pedido[4].innerHTML = sobremesa;
    pratos_pedido[5].innerHTML = total_selecionado[2].value;
    pratos_pedido[7].innerHTML = price.toFixed(2);
}

function cancelar() {
    let total_selecionado = document.getElementsByClassName("selecionado");
    let confirmar_pedido = document.getElementsByClassName("confirme");
    let total_filhos = document.body.children;

    if (total_selecionado.length == 3) {
        for (var i = 0; i < total_filhos.length; i++) {
            total_filhos[i].style.filter = "opacity(100%)";
        }
        confirmar_pedido[0].style.display = "none";
    }
}

function abreLink() {
    const nome = prompt("Digite seu nome:");
    const endereco = prompt("Digite seu endereco:");
    let total_selecionado = document.getElementsByClassName("selecionado");
    let url = "https://wa.me/5500000000000?text="
    let prato = total_selecionado[0].id;
    let bebida = total_selecionado[1].id;
    let sobremesa = total_selecionado[2].id;
    let price = Number(total_selecionado[0].value) + Number(total_selecionado[1].value) + Number(total_selecionado[2].value);

    let texto = encodeURIComponent("Olá, gostaria de fazer um pedido: \n - Prato: " + prato + "\n - Bebida: " + bebida + "\n - Sobremesa: " + sobremesa + "\n Total: " + price.toFixed(2) + "\n \n Nome: " + nome + "\n Endereço: " + endereco);
    let url_zap = url + texto;

    window.open(url_zap);
}