document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        let erros = [];

        if (nome === "") {
            erros.push("O campo nome não pode estar vazio.");
        }

        if (!email.includes("@")) {
            erros.push("O email deve conter o caractere '@'.");
        }

        if (erros.length > 0) {
            alert("Erros encontrados:\n\n" + erros.join("\n"));
        } else {
            alert("Formulário enviado com sucesso!\nObrigado pelo contato.");
            form.reset(); // limpa os campos
        }
    });
});
