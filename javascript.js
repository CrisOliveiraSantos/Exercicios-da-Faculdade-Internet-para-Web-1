function minhaFuncao() {
    let idade = document.getElementById("idadeInput").value

    if (idade === "") {
        document.getElementById("mensagem").innerText = "Por favor, digite uma idade!"
    } else if (idade >= 18) {
        document.getElementById("mensagem").innerText = "A idade é maior ou igual a 18"
    } else {
        document.getElementById("mensagem").innerText = "A idade é menor que 18"
    }
}