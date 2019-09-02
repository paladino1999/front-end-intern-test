(function() {
	// Elemento principal do formul�rio
	const contactForm = document.getElementById('contact');

	// Campos do formul�rio
	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('email');
	const messageInput = document.getElementById('message');

	// "addEventListener" instrui o navegador a executar uma fun��o sempre
	// que um evento espec�fico acontece. Nesse caso, a fun��o abaixo ser�
	// executada toda vez que o bot�o de envio for pressionado.

	contactForm.addEventListener('submit', function() {
	// A propriedade "value" cont�m o valor atual de um input ou textarea
	const nameValue = nameInput.value;
	const emailValue = emailInput.value;
	const messageValue = messageInput.value;

	// A propriedade "length" cont�m o tamanho (em caracteres) de uma
	// uma string. Toda string cont�m essa propriedade.
	const nameLength = nameValue.length;
	const emailLength = emailValue.length;
	const messageLength = messageValue.length;

	// "window" � um objeto global que representa a janela (ou aba) do
	// navegador que est� executando o c�digo do seu site. O m�todo
	// "alert" simplesmente mostra um aviso para o usu�rio contendo a
	// mensagem provida.

	if(nameLength <= 2){
		window.alert('Preencha o campo nome!');
	}
	else if(emailLength >= 0){
		const usuario = emailValue.substring(0, emailValue.indexOf("@"));
		const dominio = emailValue.substring(emailValue.indexOf("@")+ 1, emailLength);
 
		if((usuario.length >=1) &&
			(dominio.length >=3) && 
			(usuario.search("@")==-1) && 
			(dominio.search("@")==-1) &&
			(usuario.search(" ")==-1) && 
			(dominio.search(" ")==-1) &&
			(dominio.search(".")!=-1) &&      
			(dominio.indexOf(".") >=1)&& 
			(dominio.lastIndexOf(".") < dominio.length - 1)){
			
			}
		else{
			window.alert('Preencha o campo email!');
		}
	}
	else  if(messageLength <= 4){
		window.alert('Insira uma messagem!');
	}
	else{
    		window.alert("Bot�o enviar clicado! Conte�do do campo nome: " + nameValue +" (" + nameLength +" caracteres)");
	}
	// Altere e complete essa fun��o para validar os campos do formul�rio
	// de acordo com as especifica��es do teste. Boa sorte!
  });
})();