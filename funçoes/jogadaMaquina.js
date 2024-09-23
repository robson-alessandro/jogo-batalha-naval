import colocarMensagens from '../gerarHtml/colocarAvisos.js';

export default function jogadaMaquina(barcosUsuario, jogada) {
	console.log('jogada maquina' + jogada);
	console.log('barcos usuario' + barcosUsuario);
	if (barcosUsuario.includes(jogada)) {
		let mensagemHtml = `
                    <h2>avisos</h2>
                    <p>adversario acertou navio!!!</p>
                    `;
		colocarMensagens(mensagemHtml);
		return true;
	} else {
		return false;
	}
}
