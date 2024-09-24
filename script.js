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
	let mensagemHtmlInicio = `
	<h2>iniciar</h2>
	<p> para iniciar a partida posicione 5 barcos em seu campo.
	para colocar os barcos precione botão onde deseja colocar.</p>
	`;
	colocarMensagens(mensagemHtmlInicio);
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
					comecarJogo(campoJogador);
					let mensagemHtmlInicioPartida = `
					<h2>começando o jogo</h2>
					<p>para dar seguencia a partida. o computador ja posicionou seus navios, comece atacando o adversario clicando na posição no campo
					adversario que deseja atacar. logo na seguencia o computador fara a jogada dele logo após a sua.
					continue atacando até que um dos dois acerte os 5 navios inimigo.</p>

					`;
					colocarMensagens(mensagemHtmlInicioPartida);
					colocarPlacar(acertosJogador, acertosAdversario);
					campoJogador.forEach((botao) => {
						if (barcosJogador.includes(botao.value)) {
							botao.innerHTML = botao.value;
						}
					});
				}
			}
		});
	});
}

function comecarJogo(campoJogador) {
	let jogadaMaq;
	let campoAdversario = document.querySelectorAll('.campo_adversario');
	campoAdversario.forEach((botao) => {
		botao.removeAttribute('disabled');
		botao.addEventListener('click', () => {
			if (jogadaUsuario(botao, barcosAdv)) {
				acertosJogador++;
			}
			colocarPlacar(acertosJogador, acertosAdversario);
			verificarSeJogoAcabou(acertosAdversario, acertosJogador, campoAdversario);

			jogadaMaq = gerarNumero();
			while (jogadasMaquina.includes(jogadaMaq)) {
				jogadaMaq = gerarNumero();
			}
			jogadasMaquina.push(jogadaMaq);

			if (jogadaMaquina(barcosJogador, jogadaMaq, campoJogador)) {
				acertosAdversario++;
			}
			colocarPlacar(acertosJogador, acertosAdversario);
			verificarSeJogoAcabou(acertosAdversario, acertosJogador, campoAdversario);
		});
	});
}
