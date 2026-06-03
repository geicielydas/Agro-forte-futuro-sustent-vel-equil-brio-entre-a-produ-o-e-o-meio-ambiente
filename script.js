// Função para o Painel Dinâmico de Detalhes dos Cards
function mostrarDetalhes(tecnologia) {
    const painel = document.getElementById('painel-detalhes');
    const texto = document.getElementById('texto-detalhe');
    
    // Banco de dados simulado para o conteúdo dinâmico
    const informacoes = {
        'drones': "💡 **Drones e IA:** O uso de algoritmos inteligentes permite mapear pragas em tempo real. Isso faz com que o produtor aplique defensivos agrícolas apenas onde é necessário, gerando uma redução de até 30% nos custos e minimizando o impacto no solo.",
        'agua': "💡 **Irrigação Inteligente:** Sensores conectados à internet das coisas (IoT) medem a umidade real do solo e as previsões do tempo. A água só é liberada na quantidade exata que a planta precisa, combatendo o desperdício de recursos hídricos.",
        'carbono': "💡 **Carbono Neutro:** Através do plantio direto e da integração lavoura-pecuária-floresta (ILPF), o solo funciona como um 'esponja' de gases estufa. Estima-se que essas práticas mitiguem toneladas de CO2 anualmente."
    };

    // Atualiza o texto e remove a classe que esconde o painel
    texto.innerHTML = informacoes[tecnologia];
    painel.classList.remove('hidden');
    
    // Rola a tela suavemente até o painel de detalhes
    painel.scrollIntoView({ behavior: 'smooth' });
}

// Função para o Simulador Interativo
function calcularImpacto() {
    const selecao = document.getElementById('opcao-sustentavel').value;
    const resultadoDiv = document.getElementById('resultado-simulacao');
    
    let mensagemImpacto = "";

    switch(selecao) {
        case 'solar':
            mensagemImpacto = "<strong>Resultado Estimado:</strong><br>🌱 Redução de até <strong>85% na conta de energia</strong> da propriedade rural e eliminação da emissão de gases poluentes pelo uso de geradores a diesel.";
            break;
        case 'roatacao':
            mensagemImpacto = "<strong>Resultado Estimado:</strong><br>🌾 Aumento de <strong>20% na produtividade</strong> da próxima safra devido à quebra de ciclos de pragas e enriquecimento natural de nutrientes no solo.";
            break;
        case 'bio':
            mensagemImpacto = "<strong>Resultado Estimado:</strong><br>🐛 Substituição de defensivos químicos por biológicos reduz o custo de produção em <strong>15%</strong> e preserva os polinizadores naturais (como as abelhas).";
            break;
        default:
            mensagemImpacto = "Selecione uma opção válida.";
    }

    // Insere o resultado com animação na tela
    resultadoDiv.innerHTML = mensagemImpacto;
    resultadoDiv.style.backgroundColor = "#e9f5ed";
}