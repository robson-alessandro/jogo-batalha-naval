import colocarBarco from '../gerarHtml/colocarBarco.js';
import colocarAgua from '../gerarHtml/colocarAgua.js';
import colocarMensagens from '../gerarHtml/colocarAvisos.js';
let mensagemHtml;

export default function jogadaUsuario(botao, barcosAdv) {
	if (barcosAdv.includes(botao.value)) {
		mensagemHtml = `
		<h2>avisos</h2>
		<p>acertou navio adversario!!!</p>
		`;
		colocarMensagens(mensagemHtml);
		colocarBarco(botao);
		botao.setAttribute('disabled', 'true');
		return true;
	} else {
		colocarAgua(botao);
		botao.setAttribute('disabled', 'true');
		return false;
	}
}
