

document.addEventListener('DOMContentLoaded', function(){
    emailjs.init('Eku1Fdhoqs81Po5C0');

    const form = document.getElementById('meuFormulario');
    const submitButton = document.getElementById('submit');
    
    function showLoad(){
        let loading = document.getElementById('backgroundOverlayLoading');
        loading.style.display = 'block';
        setTimeout(function(){
            loading.style.display='none';
        },1000)
    }

    function mostrarAlerta() {  
        let backgroundOverlay = document.getElementById('backgroundOverlay');

        setTimeout(function(){
        backgroundOverlay.style.display = 'block';
        },1000)
    
        setTimeout(function() {
            backgroundOverlay.style.display = 'none';
        }, 3000); 
    }
 

    if (form && submitButton) {

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const meuNome = 'Debsigner';
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;


            emailjs.send('service_glr8yco', 'template_pztqkr8', {
                to_name: nome,
                to_email: email,
                from_name: meuNome
            }).then(function(response) {
                console.log('Email enviado com sucesso!', response);
                showLoad();
                mostrarAlerta();
            }, function(error) {
                console.error('Erro ao enviar email:', error);
               alert('Erro! Tente novamente');
            });
        });
    } else {
        console.error('Formulário ou botão de envio não encontrados.');
    }
});
