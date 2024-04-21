document.addEventListener("DOMContentLoaded", function() {
    // Selecionando elementos HTML
    var userMessageInput = document.getElementById("user-message");
    var sendMessageButton = document.getElementById("send-message-btn");
    var messageList = document.querySelector(".message-list");

    // Adicionando evento de clique no botão de enviar mensagem
    sendMessageButton.addEventListener("click", function(event) {
        event.preventDefault(); // Impedir o comportamento padrão do formulário

        // Obtendo o valor da mensagem do usuário
        var userMessage = userMessageInput.value;

        // Verificando se a mensagem não está vazia
        if (userMessage.trim() !== "") {
            // Criando elementos HTML para a nova mensagem
            var newMessageBox = document.createElement("div");
            newMessageBox.classList.add("message-box", "user-message");
            var msgUser = document.createElement("div");
            msgUser.classList.add("msg-user");
            msgUser.innerHTML = "<strong>Você diz:</strong>";
            var msgChat = document.createElement("div");
            msgChat.classList.add("msg-chat");
            msgChat.textContent = userMessage;

            // Adicionando os elementos criados à lista de mensagens
            newMessageBox.appendChild(msgUser);
            newMessageBox.appendChild(msgChat);
            messageList.appendChild(newMessageBox);

            // Limpar o campo de entrada após o envio da mensagem
            userMessageInput.value = "";
        }
    });
});