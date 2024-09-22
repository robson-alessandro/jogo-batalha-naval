const painelAvisos = document.querySelector('.avisos');
export default function colocarMensagens(mensagem) {
	painelAvisos.innerHTML = mensagem;
}
