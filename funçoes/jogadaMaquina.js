import colocarAgua from '../gerarHtml/colocarAgua.js';
import colocarMensagens from '../gerarHtml/colocarAvisos.js';
import colocarBarco from '../gerarHtml/colocarBarco.js';

export default function jogadaMaquina(barcosUsuario, jogada, campo) {
	let posicao;
	campo.forEach((botao) => {
		if (botao.value == jogada) {
			posicao = botao;
		}
	});
	if (barcosUsuario.includes(jogada)) {
		let mensagemHtml = `
        <h2>jogada maquina</h2>
        <p>adversario jogou na posição ${jogada} acertou seu navio!!!</p>
        `;
		colocarMensagens(mensagemHtml);
		colocarBarco(posicao);
		return true;
	} else {
		let mensagemHtml = `
        <h2>jogada maquina</h2>
        <p>adversario jogou na posição ${jogada}, acertou água!!!</p>
        `;
		colocarMensagens(mensagemHtml);
		colocarAgua(posicao);

		return false;
	}
}
