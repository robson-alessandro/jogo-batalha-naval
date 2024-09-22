import gerarNumero from './funçoes/gerarNumero.js';
import colocarBarco from './gerarHtml/colocarBarco.js';
import gerarMapa from './gerarHtml/gerarMapa.js';
import fecharJogo from './funçoes/fecharJogo.js';
import { colocarPlacar } from './gerarHtml/colocarPlacar.js';
import colocarMensagens from './gerarHtml/colocarAvisos.js';

let barcosAdv = [];
let barcosJogador = [];
let jogadasMaquina = [];
let jogadasUsuario = [];
let acertosAdversario = 0;
let acertosJogador = 0;
let mensagemHtml;

gerarMapa();
posicionarBarcosAdversario();
iniciar();

function iniciar() {
	const campoJogador = document.querySelectorAll('.campo_jogador');
	campoJogador.forEach((botao) => {
		botao.addEventListener('click', () => {
			if (barcosJogador.includes(botao.value)) {
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

function posicionarBarcosAdversario() {
	for (let y = 0; y < 5; y++) {
		let posicaoBarcoAdv = gerarNumero();
		console.log(posicaoBarcoAdv);
		if (!barcosAdv.includes(posicaoBarcoAdv)) {
			barcosAdv.push(posicaoBarcoAdv);
		} else {
			y--;
		}
		console.log(barcosAdv);
	}
}

function comecarJogo() {
	let campoAdversario = document.querySelectorAll('.campo_adversario');
	let campoJogador = document.querySelectorAll('.campo_jogador');

	campoAdversario.forEach((botao) => {
		botao.removeAttribute('disabled');
		botao.addEventListener('click', () => {
			if (jogadasUsuario.includes(botao.value)) {
				console.log('você ja jogou esse numero, escolha outro');
			} else {
				jogadasUsuario.push(botao.value);
				if (barcosAdv.includes(botao.value)) {
					mensagemHtml = `
					<h2>avisos</h2>
					<p>acertou navio adversario!!!</p>
					`;
					colocarMensagens(mensagemHtml);
					colocarBarco(botao);
					acertosJogador++;
				}
				if (acertosAdversario > 4) {
					console.log('jogo terminou maquina ganhou');
					fecharJogo('maquina');
				}

				if (acertosJogador > 4) {
					console.log('jogo terminou usuario ganhou');
					fecharJogo('você');
				} else {
					jogadaMquina(campoJogador);
				}
			}
			colocarPlacar(acertosJogador, acertosAdversario);
		});
	});
}

function jogadaMquina(campoJogador) {
	let jogada = gerarNumero();
	while (jogadasMaquina.includes(jogada)) {
		jogada = gerarNumero();
	}
	jogadasMaquina.push(jogada);
	if (barcosJogador.includes(jogada)) {
		campoJogador.forEach((botao) => {
			if (botao.value == jogada) {
				mensagemHtml = `
					<h2>avisos</h2>
					<p>adversario acertou navio!!!</p>
					`;
				colocarMensagens(mensagemHtml);
				acertosAdversario++;
			}
		});
	}
	console.log(jogadasMaquina);
}
