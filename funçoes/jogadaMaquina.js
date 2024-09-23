import colocarMensagens from '../gerarHtml/colocarAvisos.js';

export default function jogadaMaquina(barcosUsuario, jogada) {
	if (barcosUsuario.includes(jogada)) {
		let mensagemHtml = `
                    <h2>avisos</h2>
                    <p>adversario jogou na posição ${jogada} acertou seu navio!!!</p>
                    `;
		colocarMensagens(mensagemHtml);
		return true;
	} else {
		return false;
	}
}
