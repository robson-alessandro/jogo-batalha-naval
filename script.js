import gerarNumero from './funçoes/gerarNumero.js';
import colocarBarcosAdver from './gerarHtml/colocarBarcosAdversario.js';
import gerarMapa from './gerarHtml/gerarMapa.js';

gerarMapa();
const campoAdversario = document.querySelectorAll('.botao_adv');

for (let y = 0; y < 5; y++) {
	let posicao = gerarNumero();
	colocarBarcosAdver(posicao, campoAdversario);
}
