document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Recupera os valores dos campos do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Faça o que quiser com os dados, como enviar para o servidor via AJAX

    // Exemplo: exibir os dados na página
    var output = "Nome: " + name + "<br>Email: " + email + "<br>Mensagem: " + message;
    document.getElementById("contact-form").innerHTML = output;
});
