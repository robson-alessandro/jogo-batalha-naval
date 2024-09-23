import gerarNumero from './funçoes/gerarNumero.js';
import colocarBarco from './gerarHtml/colocarBarco.js';
import gerarMapa from './gerarHtml/gerarMapa.js';
import colocarPlacar from './gerarHtml/colocarPlacar.js';
import colocarMensagens from './gerarHtml/colocarAvisos.js';
import jogadaMaquina from './funçoes/jogadaMaquina.js';
import verificarSeJogoAcabou from './funçoes/verificarSeJogoAcabou.js';
import posicionarBarcosMaquina from './funçoes/posicionarBarcosMaquina.js';
import jogadaUsuario from './funçoes/jogadaUsuario.js';

let barcosJogador = [];
let jogadasMaquina = [];
let acertosAdversario = 0;
let acertosJogador = 0;
let mensagemHtml;
let barcosAdv = posicionarBarcosMaquina();

gerarMapa();
posicionarBarcosUsuario();

function posicionarBarcosUsuario() {
	const campoJogador = document.querySelectorAll('.campo_jogador');
	campoJogador.forEach((botao) => {
		botao.addEventListener('click', () => {
			if (barcosJogador.includes(botao.value)) {
				mensagemHtml = `
				<h2>avisos</h2>
				<p>posição invalida, escolha outro numero</p>
				`;
				colocarMensagens(mensagemHtml);
			} else {
				colocarBarco(botao);
				barcosJogador.push(botao.value);

				if (barcosJogador.length == 5) {
					campoJogador.forEach((botao) => {
						botao.setAttribute('disabled', 'true');
					});
					comecarJogo();
				}
			}
		});
	});
}

function comecarJogo() {
	let jogadaMaq;
	let campoAdversario = document.querySelectorAll('.campo_adversario');
	campoAdversario.forEach((botao) => {
		botao.removeAttribute('disabled');
		botao.addEventListener('click', () => {
			if (jogadaUsuario(botao, barcosAdv)) {
				acertosJogador++;
			}
			colocarPlacar(acertosJogador, acertosAdversario);
			verificarSeJogoAcabou(acertosAdversario, acertosJogador);

			jogadaMaq = gerarNumero();
			while (jogadasMaquina.includes(jogadaMaq)) {
				jogadaMaq = gerarNumero();
			}
			jogadasMaquina.push(jogadaMaq);

			if (jogadaMaquina(barcosJogador, jogadaMaq)) {
				acertosAdversario++;
			}
			colocarPlacar(acertosJogador, acertosAdversario);
			verificarSeJogoAcabou(acertosAdversario, acertosJogador);
		});
	});
}
