import colocarMensagens from '../gerarHtml/colocarAvisos.js';
let mensagemHtml;
export default function verificarSeJogoAcabou(acertosAdv, acertosUsuarios, campo) {
	if (acertosAdv == 5) {
		mensagemHtml = `
		<h2 style="color:red">fim de jogo</h2>
		<p>seus 5 navios foram afundados, maquina ganhou!!!</p>
		`;
		colocarMensagens(mensagemHtml);
		campo.forEach((botao) => {
			botao.setAttribute('disabled', 'true');
		});
	}
	if (acertosUsuarios == 5) {
		mensagemHtml = `
		<h2 style="color:red">fim de jogo</h2>
		<p>jogo terminou você ganhou acertou os 5 navios!!!</p>
		`;
		colocarMensagens(mensagemHtml);
		campo.forEach((botao) => {
			botao.setAttribute('disabled', 'true');
		});
	}
}
