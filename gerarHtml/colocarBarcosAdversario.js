export default function colocarBarcosAdver(numero, campoAdversario) {
	let barco = '<=>';
	campoAdversario.forEach((botao) => {
		if (botao.value == numero) {
			botao.textContent = barco;
		}
	});
}
