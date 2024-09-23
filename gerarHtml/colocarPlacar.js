const divPlacar = document.querySelector('.resultado');
export default function colocarPlacar(acertoJogador, acertoMaquina) {
	const placar = `
    <h2>placar</h2>
    <p>jogardor ${acertoJogador}/5</p>
    <p>maquina ${acertoMaquina}/5</p>
    `;

	divPlacar.innerHTML = placar;
}
