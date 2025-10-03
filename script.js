document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona o elemento principal do dropdown (o <li> com a classe 'dropdown')
    const dropdownItem = document.querySelector('.dropdown');
    // 2. Seleciona o botão que aciona o dropdown (o <a> com a classe 'dropbtn')
    const dropdownButton = document.querySelector('.dropbtn');

    // Se o botão não existir (por segurança), a função é interrompida
    if (!dropdownButton) return; 

    // Adiciona um ouvinte de evento 'click' ao botão
    dropdownButton.addEventListener('click', function(event) {
        // Impede que o link navegue para # (evitando que a página suba)
        event.preventDefault(); 
        
        // Alterna a classe 'active' no elemento pai.
        // O CSS usa essa classe (.dropdown.active) para mostrar o menu.
        dropdownItem.classList.toggle('active');
    });

    // 3. Fecha o dropdown se o usuário clicar em qualquer lugar fora do menu
    window.addEventListener('click', function(event) {
        // Verifica se o clique não foi no botão E se o menu está atualmente aberto
        if (!event.target.matches('.dropbtn') && dropdownItem.classList.contains('active')) {
            // Remove a classe 'active', escondendo o menu
            dropdownItem.classList.remove('active');
        }
    });
});