function salvar() {
    const placa = document.getElementById('placa').value; 
    const nome = document.getElementById('nome').value; 
    const apto = document.getElementById('apto').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const vaga = document.getElementById('vaga').value;

    console.log("Placa do Veículo: " + placa 
        + "\nNome do Proprietário: " + nome 
        + "\nApartamento: " + apto 
        + "\nBloco: " + bloco 
        + "\nModelo do Veículo: " + modelo 
        + "\nCor do Veículo: " + cor 
        + "\nNúmero da Vaga: " + vaga);

    alert("Cadastro realizado com sucesso!");

}
