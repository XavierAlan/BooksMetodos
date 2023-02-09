const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoLivro = document.getElementById(this.id);
    const categoria = elementoLivro.value;
    let livrosFiltrados = categoria === 'disponivel' ? filtrarDisponibilidade() : filtrarCategoria(categoria);
    exibirLivros(livrosFiltrados);
    if (categoria == 'disponivel') {
        const totalValorLivros = calcularValorDisponivel(livrosFiltrados);
        exibirValorLivrosDisponiveis(totalValorLivros);
    }
}

function calcularValorDisponivel (livros){
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}
function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorLivrosDisponiveis(valorTotal) {
    valorLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `;
}
