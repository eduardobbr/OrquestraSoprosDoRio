document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close-btn');
    const sobreNosSection = document.getElementById('sobre-nos'); // Obtém a seção Sobre Nós
    let lastScrollTop = 0;

    // Alterna a navegação no menu mobile
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Esconde ou exibe a navbar ao rolar a página
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('header.navbar');
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Verifica se estamos na seção "Sobre Nós" ou abaixo dela
        if (scrollTop > sobreNosSection.offsetTop) {
            if (scrollTop > lastScrollTop) {
                navbar.style.top = '-100px'; // Esconde a navbar ao rolar para baixo
            } else {
                navbar.style.top = '0'; // Mostra a navbar ao rolar para cima
            }
        } else {
            navbar.style.top = '0'; // Mostra a navbar na seção de início
        }

        lastScrollTop = scrollTop;
    });

    // Função para rolagem suave ao clicar em links da navegação
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fecha o menu de navegação no modo de celular
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Abre o modal ao clicar na imagem
    document.querySelectorAll('.gallery-item img').forEach((img) => {
        img.addEventListener('click', () => {
            modalImage.src = img.src;
            modalTitle.textContent = img.getAttribute('data-title'); // Obtém o título do atributo data-title
            modalDescription.textContent = img.getAttribute('data-description'); // Obtém a descrição do atributo data-description
            modal.style.display = 'flex';
        });
    });

    // Fecha o modal ao clicar no botão de fechar
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
