export default function gerarNumero() {
	let min = Math.ceil(0);
	let max = Math.floor(24);
	let numero = Math.floor(Math.random() * (max - min) + min);
	return numero.toString();
}
