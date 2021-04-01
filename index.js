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
        const nome = prompt("Digite seu nome:");
        const endereco = prompt("Digite seu endereco:");

        for (var i = 0; i < x.length - 3; i++) {
            x[i].style.filter = "opacity(20%)";
        }
        z[0].style.display = "flex";
    }
}

function cancelar() {
    let y = document.getElementsByClassName("selecionado");
    let z = document.getElementsByClassName("confirme");
    x = document.body.children;

    if (y.length == 3) {
        for (var i = 0; i < x.length - 3; i++) {
            x[i].style.filter = "opacity(100%)";
        }
        z[0].style.display = "none";
    }
}

function abreLink() {
    url = "https://wa.me/5512981253244?text="
    texto = "Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70";
    url_zap = url + texto;

    window.open(url_zap);
}