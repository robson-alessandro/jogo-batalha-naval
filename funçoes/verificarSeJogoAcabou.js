import colocarMensagens from '../gerarHtml/colocarAvisos.js';
let mensagemHtml;
export default function verificarSeJogoAcabou(acertosAdv, acertosUsuarios) {
	if (acertosAdv == 5) {
		mensagemHtml = `
		<h2>avisos</h2>
		<p>jogo terminou maquina ganhou!!!</p></p>
		`;
		colocarMensagens(mensagemHtml);
	}
	if (acertosUsuarios == 5) {
		mensagemHtml = `
		h2>avisos</h2>
		<p>jogo terminou usuario ganhou!!!</p>
		`;
		colocarMensagens(mensagemHtml);
	}
}
