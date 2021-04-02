function selecionar(clicked_id, refeicao) {
    let pai = document.getElementById(refeicao);
    let count = pai.getElementsByClassName("selecionado");
    let x = document.getElementById(clicked_id);

    if (count.length == 0) {
        x.classList.add("selecionado");
    } else {
        count[0].classList.remove("selecionado");
        x.classList.add("selecionado");
    }

    let y = document.getElementsByClassName("selecionado");
    let z = document.getElementsByClassName("concluir-pedido");
    let w = z[0].getElementsByClassName("texto");

    if (y.length == 3) {
        z[0].style["background-color"] = "#32B72F";
        w[0].innerHTML = "Fechar pedido"
    } else {
        z[0].style["background-color"] = "#CBCBCB";
        w[0].innerHTML = "Selecione os 3 itens para fechar o pedido"
    }
}

function fechar() {
    let y = document.getElementsByClassName("selecionado");
    let z = document.getElementsByClassName("confirme");
    x = document.body.children;

    if (y.length == 3) {
        for (var i = 0; i < x.length; i++) {
            x[i].style.filter = "opacity(20%)";
        }
        z[0].style.display = "flex";
        z[0].style.filter = "opacity(100%)";
    }

    let prato = y[0].id;
    let bebida = y[1].id;
    let sobremesa = y[2].id;
    let price = Number(y[0].value) + Number(y[1].value) + Number(y[2].value);

    let w = z[0].getElementsByClassName("texto-confirme");
    w[0].innerHTML = prato;
    w[1].innerHTML = y[0].value;
    w[2].innerHTML = bebida;
    w[3].innerHTML = y[1].value;
    w[4].innerHTML = sobremesa;
    w[5].innerHTML = y[2].value;
    w[7].innerHTML = price.toFixed(2);
}

function cancelar() {
    let y = document.getElementsByClassName("selecionado");
    let z = document.getElementsByClassName("confirme");
    let x = document.body.children;

    if (y.length == 3) {
        for (var i = 0; i < x.length; i++) {
            x[i].style.filter = "opacity(100%)";
        }
        z[0].style.display = "none";
    }
}

function abreLink() {
    const nome = prompt("Digite seu nome:");
    const endereco = prompt("Digite seu endereco:");
    let y = document.getElementsByClassName("selecionado");
    let url = "https://wa.me/5512981253244?text="
    let prato = y[0].id;
    let bebida = y[1].id;
    let sobremesa = y[2].id;
    let price = Number(y[0].value) + Number(y[1].value) + Number(y[2].value);

    let texto = encodeURIComponent("Olá, gostaria de fazer um pedido: \n - Prato: " + prato + "\n - Bebida: " + bebida + "\n - Sobremesa: " + sobremesa + "\n Total: " + price.toFixed(2) + "\n \n Nome: " + nome + "\n Endereço: " + endereco);
    let url_zap = url + texto;

    window.open(url_zap);
}