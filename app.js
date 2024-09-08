// Função para realizar a pesquisa
function pesquisar() {
    const input = document.getElementById('pesquisar').value.toLowerCase();
    const resultados = document.querySelector('.resultados-pesquisa');

    // Limpa os resultados anteriores
    resultados.innerHTML = '';

    // Verifica se o input está vazio
    if (input.trim() === '') {
        return;
    }

    // Filtra personagens com base no valor do input
    const personagensFiltrados = personagens.filter(personagem => personagem.nome.toLowerCase().includes(input));

    if (personagensFiltrados.length === 0) {
        resultados.innerHTML = '<p>Nenhum personagem encontrado.</p>';
        return;
    }

    // Exibe os personagens filtrados
    personagensFiltrados.forEach(personagem => {
        const personagemHTML = `
            <div class="card__invisivel" id="icard__invisivel">
            <a href="${personagem.link}">
                <img src="${personagem.imagem}" alt="${personagem.nome}" class="imagem-personagem">
                <h2 class="personagem__nome">${personagem.nome}</h2>
            </a>
        </div>
        `;
        resultados.innerHTML += personagemHTML;
    });
}

// Adiciona evento para monitorar alterações na barra de pesquisa
document.getElementById('pesquisar').addEventListener('input', function () {
    const inputValue = this.value.toLowerCase();

    // Se o campo for esvaziado, limpar os resultados
    if (inputValue.trim() === '') {
        document.querySelector('.resultados-pesquisa').innerHTML = '';
    } else {
        pesquisar(); // Chama a função de pesquisa se houver texto
    }
});