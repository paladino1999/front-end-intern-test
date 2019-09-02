(function() {
	// Elemento principal do formulário
	const contactForm = document.getElementById('contact');

	// Campos do formulário
	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('email');
	const messageInput = document.getElementById('message');

	// "addEventListener" instrui o navegador a executar uma função sempre
	// que um evento específico acontece. Nesse caso, a função abaixo será
	// executada toda vez que o botão de envio for pressionado.

	contactForm.addEventListener('submit', function() {
	// A propriedade "value" contém o valor atual de um input ou textarea
	const nameValue = nameInput.value;
	const emailValue = emailInput.value;
	const messageValue = messageInput.value;

	// A propriedade "length" contém o tamanho (em caracteres) de uma
	// uma string. Toda string contém essa propriedade.
	const nameLength = nameValue.length;
	const emailLength = emailValue.length;
	const messageLength = messageValue.length;

	// "window" é um objeto global que representa a janela (ou aba) do
	// navegador que está executando o código do seu site. O método
	// "alert" simplesmente mostra um aviso para o usuário contendo a
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
    		window.alert("Botão enviar clicado! Conteúdo do campo nome: " + nameValue +" (" + nameLength +" caracteres)");
	}
	// Altere e complete essa função para validar os campos do formulário
	// de acordo com as especificações do teste. Boa sorte!
  });
})();