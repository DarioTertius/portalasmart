const gastos = [
{ data: '05/01/2025', desc: 'Compra de materiais para manutenção', valor: 450.75 },
{ data: '12/01/2025', desc: 'Pagamento de serviços de jardinagem', valor: 320.00 },
{ data: '20/01/2025', desc: 'Reposição de lâmpadas da área comum', valor: 89.90 }
];
const tabela = document.getElementById('tabela-gastos');
gastos.forEach(g => {
const linha = document.createElement('tr');
linha.innerHTML = `<td>${g.data}</td><td>${g.desc}</td><td>${g.valor.toFixed(2)}</td>`;
tabela.appendChild(linha);
});
function toggleGastos() {
const lista = document.getElementById('lista-gastos');
lista.style.display = lista.style.display === 'none' ? 'block' : 'none';
}

