const transacoes = [
    { data: '30/10/2025', desc: 'Mensalidades pagas REF Outubro 2025', valor: 150.00, tipo: 'entrada' },
    { data: '30/10/2025', desc: 'Doações', valor: 15.00, tipo: 'entrada' },
    { data: '30/11/2025', desc: 'Mensalidades pagas REF Novembro 2025', valor: 510.00, tipo: 'entrada' },
    { data: '27/11/2025', desc: 'Taxas Bancárias', valor: 124.90, tipo: 'saida' }
    
];

const tabela = document.querySelector('#tabela-gastos tbody');

transacoes.forEach(t => {
    const linha = document.createElement('tr');
    const classeCor = t.tipo === 'entrada' ? 'entrada' : 'saida';
    const simbolo = t.tipo === 'entrada' ? '+' : '-';
    
    linha.innerHTML = `
        <td>${t.data}</td>
        <td>${t.desc}</td>
        <td class="${classeCor}" data-simbolo="${simbolo}">R$ ${t.valor.toFixed(2)}</td>
    `;
    tabela.appendChild(linha);
});

function toggleGastos() {
    const lista = document.getElementById('lista-gastos');
    lista.style.display = lista.style.display === 'none' ? 'block' : 'none';
}


