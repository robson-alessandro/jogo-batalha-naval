export default function gerarNumero() {
	let min = Math.ceil(0);
	let max = Math.floor(80);
	return Math.floor(Math.random() * (max - min) + min);
}
