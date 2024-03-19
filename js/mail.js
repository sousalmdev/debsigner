document.addEventListener('DOMContentLoaded', function(){
    emailjs.init('Eku1Fdhoqs81Po5C0');

    const form = document.getElementById('meuFormulario');
    const submitButton = document.getElementById('submit');

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

                Swal.fire({
                    title: "Email Enviado!",
                    text: "Aguarde alguns segundos!",
                    icon: "success",
                    iconColor:'#ff59ba',
                    confirmButtonText: 'Valeu!',
                    confirmButtonColor:'#ff59ba',
                    color:'white'
                       
                });

            }, function(error) {
                console.error('Erro ao enviar email:', error);
                Swal.fire({
                    title: "Error!",
                    text: "Erro ao enviar email. Por favor, tente novamente mais tarde.",
                    icon: "error"
                });
            });
        });
    } else {
        console.error('Formulário ou botão de envio não encontrados.');
    }
});