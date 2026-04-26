// Aguarda todo o HTML carregar antes de executar o JavaScript
document.addEventListener('DOMContentLoaded', () => {

    // Captura os elementos do formulário
    const form = document.getElementById('meuFormulario');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    // Captura as mensagens de erro
    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroMensagem = document.getElementById('erro-mensagem');

    // Captura a mensagem de sucesso
    const msgSucesso = document.getElementById('sucesso');

    // Função para validar o formato do e-mail
    function validarEmail(emailDigitado) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailDigitado);
    }

    // Evento executado quando o formulário é enviado
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio real da página

        let formularioValido = true;

        // Esconde a mensagem de sucesso antes de nova validação
        msgSucesso.style.display = 'none';

        // Validação do campo nome
        if (nome.value.trim() === '') {
            erroNome.style.display = 'block';
            formularioValido = false;
        } else {
            erroNome.style.display = 'none';
        }

        // Validação do campo e-mail
        if (!validarEmail(email.value.trim())) {
            erroEmail.style.display = 'block';
            formularioValido = false;
        } else {
            erroEmail.style.display = 'none';
        }

        // Validação do campo mensagem
        if (mensagem.value.trim() === '') {
            erroMensagem.style.display = 'block';
            formularioValido = false;
        } else {
            erroMensagem.style.display = 'none';
        }

        // Se todos os campos estiverem corretos
        if (formularioValido) {
            // Exibe mensagem de sucesso
            msgSucesso.style.display = 'block';

            // Limpa todos os campos
            form.reset();
        }
    });
});

// Alterna entre tema claro e escuro
function alternarTema() {
    const btn = document.getElementById('btnTema');
    document.body.classList.toggle('dark');

    // Troca o ícone conforme o tema ativo
    if (document.body.classList.contains('dark')) {
        btn.textContent = '☀️ Tema';
        localStorage.setItem('tema', 'dark');
    } else {
        btn.textContent = '🌙 Tema';
        localStorage.setItem('tema', 'light');
    }
}

// Ao carregar a página, aplica o tema salvo anteriormente
window.addEventListener('load', function () {
    if (localStorage.getItem('tema') === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('btnTema').textContent = '☀️ Tema';
    }
});
