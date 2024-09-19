import gerarNumero from './funçoes/gerarNumero.js';
import colocarBarco from './gerarHtml/colocarBarco.js';
import gerarMapa from './gerarHtml/gerarMapa.js';
let barcosAdv = [];
let barcosJogador = [];

gerarMapa();
const campoJogador = document.querySelectorAll('.campo_jogador');
campoJogador.forEach((botao) => {
	botao.addEventListener('click', () => {
		if (barcosJogador.includes(botao.value)) {
			console.log('ja tem');
		} else {
			colocarBarco(botao);
			barcosJogador.push(botao.value);

			if (barcosJogador.length == 5) {
				console.log('todos');
			}
		}
	});
});

for (let y = 0; y < 5; y++) {
	barcosAdv.push(gerarNumero());
	console.log(barcosAdv);
}
