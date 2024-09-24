const divPlacar = document.querySelector('.resultado');
export default function colocarPlacar(acertoJogador, acertoMaquina) {
	const placar = `
    <h2>placar</h2>
    <p>usuario ${acertoJogador}/5 || maquina ${acertoMaquina}/5</p>
    
    `;

	divPlacar.innerHTML = placar;
}
