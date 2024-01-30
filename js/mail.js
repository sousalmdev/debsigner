

document.addEventListener('DOMContentLoaded', function(){
    // Inicialização do emailjs
    emailjs.init('Eku1Fdhoqs81Po5C0');

    // Obtenção dos elementos do formulário e do botão de envio
    const form = document.getElementById('meuFormulario');
    const submitButton = document.getElementById('submit');
    function showLoad(){
        let loading = document.getElementById('backgroundOverlayLoading');
        loading.style.display = 'block';
        setTimeout(function(){
            loading.style.display='none';
        },1000)
    }
    // Função para mostrar o alerta e depois de 2 segundos ocultá-lo
    function mostrarAlerta() {  
        
        let backgroundOverlay = document.getElementById('backgroundOverlay');

        setTimeout(function(){
        backgroundOverlay.style.display = 'block';
        },1000)
    

        // Oculta o alerta após 2 segundos
        setTimeout(function() {
            backgroundOverlay.style.display = 'none';
        }, 3000); // 2000 milissegundos = 2 segundos
    }
 
    // Verificação da existência do formulário e do botão de envio
    if (form && submitButton) {
        // Adiciona um evento de envio ao formulário
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Obtenção dos valores do formulário
            const meuNome = 'Debsigner';
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;

            // Envio do email usando EmailJS
            emailjs.send('service_glr8yco', 'template_pztqkr8', {
                to_name: nome,
                to_email: email,
                from_name: meuNome
            }).then(function(response) {
                console.log('Email enviado com sucesso!', response);
                showLoad();
                mostrarAlerta(); // Chama a função para mostrar o alerta
            }, function(error) {
                console.error('Erro ao enviar email:', error);
               mostrarAlertaNegativo();
            });
        });
    } else {
        console.error('Formulário ou botão de envio não encontrados.');
    }
});
