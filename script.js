document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MENU RESPONSIVO MOBILE ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isOpen);
        navMenu.classList.toggle('is-active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // --- 2. ACESSIBILIDADE: ALTO CONTRASTE ---
    const btnContraste = document.getElementById('btn-contraste');
    
    if (localStorage.getItem('alto-contraste') === 'true') {
        document.body.classList.add('high-contrast');
    }

    btnContraste.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        localStorage.setItem('alto-contraste', document.body.classList.contains('high-contrast'));
    });

    // --- 3. VALIDAÇÃO SANITIZADA DO FORMULÁRIO ---
    const form = document.getElementById('form-solicitacao');
    const painelSucesso = document.getElementById('painel-sucesso');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        // Validar Nome
        const inputNome = document.getElementById('nome');
        if (inputNome.value.trim().length < 3) {
            inputNome.parentElement.classList.add('has-error');
            valid = false;
        } else {
            inputNome.parentElement.classList.remove('has-error');
        }

        // Validar Estado
        const selectEstado = document.getElementById('estado');
        if (selectEstado.value === "") {
            selectEstado.parentElement.classList.add('has-error');
            valid = false;
        } else {
            selectEstado.parentElement.classList.remove('has-error');
        }

        // Validar E-mail
        const inputEmail = document.getElementById('email');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(inputEmail.value.trim())) {
            inputEmail.parentElement.classList.add('has-error');
            valid = false;
        } else {
            inputEmail.parentElement.classList.remove('has-error');
        }

        // Validar Tecnologia
        const selectTech = document.getElementById('tecnologia');
        if (selectTech.value === "") {
            selectTech.parentElement.classList.add('has-error');
            valid = false;
        } else {
            selectTech.parentElement.classList.remove('has-error');
        }

        if (valid) {
            form.style.display = 'none';
            painelSucesso.style.display = 'block';
        }
    });
});