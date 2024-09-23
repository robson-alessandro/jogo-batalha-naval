import gerarNumero from './gerarNumero.js';
export default function posicionarBarcosMaquina() {
	let barcosAdv = [];
	for (let y = 0; y < 5; y++) {
		let posicaoBarcoAdv = gerarNumero();
		if (!barcosAdv.includes(posicaoBarcoAdv)) {
			barcosAdv.push(posicaoBarcoAdv);
		} else {
			y--;
		}
	}
	return barcosAdv;
}
