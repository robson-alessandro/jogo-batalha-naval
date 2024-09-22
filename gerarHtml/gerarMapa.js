const tabela1 = document.querySelector('.tabela1');
const tabela2 = document.querySelector('.tabela2');
export default function gerarMapa() {
	let contador = 0;
	for (let y = 0; y < 5; y++) {
		let linhaTabela1 = document.createElement('tr');
		let linhaTabela2 = document.createElement('tr');

		for (let j = 0; j < 5; j++) {
			let coluna1 = document.createElement('td');
			let coluna2 = document.createElement('td');
			coluna1.innerHTML = `<button class="botao campo_adversario" disabled value="${contador}">${contador}</button>`;
			coluna2.innerHTML = `<button class="botao campo_jogador" value="${contador}">${contador}</button>`;
			linhaTabela1.appendChild(coluna1);
			linhaTabela2.appendChild(coluna2);
			contador++;
		}
		tabela2.appendChild(linhaTabela2);
		tabela1.appendChild(linhaTabela1);
	}
}
