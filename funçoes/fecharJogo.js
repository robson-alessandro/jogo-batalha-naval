export default function fecharJogo(ganhador) {
	const botoes = document.querySelectorAll('.botao');
	console.log(botoes);
	botoes.forEach((botao) => {
		botao.setAttribute('disable', 'true');
		console.log(`${ganhador} venceu!!`);
	});
}
