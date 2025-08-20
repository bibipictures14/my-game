const perguntas = [
    // Pergunta 1 - Define a abordagem inicial
    {
        enunciado: "Ao encontrar as pílulas vermelhas no seu quarto no hospício, você:",
        alternativas: [
            {
                texto: "Toma uma imediatamente, buscando escapar da realidade",
                pontos: [1, 0, 0] // [Final A, B, C]
            },
            {
                texto: "Esconde-as e investiga sua origem primeiro",
                pontos: [0, 1, 0]
            }
        ]
    },
    // Pergunta 2 - Relacionamento com o Sr. Meia-noite
    {
        enunciado: "Quando o Sr. Meia-noite aparece pela primeira vez, você:",
        alternativas: [
            {
                texto: "Segue seu conselho, confiando plenamente",
                pontos: [1, 0, 0]
            },
            {
                texto: "Questiona suas intenções, mantendo cautela",
                pontos: [0, 1, 1]
            }
        ]
    },
    // Pergunta 3 - Reação aos tratamentos
    {
        enunciado: "Durante a 'terapia' do Dr. Oswald, você:",
        alternativas: [
            {
                texto: "Finge cooperar, mas planeja fugir",
                pontos: [0, 1, 0]
            },
            {
                texto: "Resiste abertamente, causando conflito",
                pontos: [0, 0, 1]
            }
        ]
    },
    // Pergunta 4 - Descoberta da verdade
    {
        enunciado: "Ao encontrar documentos sobre seus padres, você:",
        alternativas: [
            {
                texto: "Confronta o Dr. Oswald imediatamente",
                pontos: [0, 0, 1]
            },
            {
                texto: "Reúne mais provas antes de agir",
                pontos: [1, 1, 0]
            }
        ]
    },
    // Pergunta 5 - Uso da Ultrarrealidade
    {
        enunciado: "Na Ultrarrealidade, você vê uma porta proibida. Você:",
        alternativas: [
            {
                texto: "Abre sem hesitar, custe o que custar",
                pontos: [1, 0, 0]
            },
            {
                texto: "Analisa os símbolos antes de tocar",
                pontos: [0, 1, 1]
            }
        ]
    },
    // Pergunta 6 - Alianças
    {
        enunciado: "Quando um paciente oferece ajuda, você:",
        alternativas: [
            {
                texto: "Aceita, formando uma aliança",
                pontos: [0, 1, 0]
            },
            {
                texto: "Recusa, confiando apenas em si mesma",
                pontos: [1, 0, 1]
            }
        ]
    },
    // Pergunta 7 - Momento decisivo
    {
        enunciado: "Ao descobrir a verdade sobre o assassinato, você:",
        alternativas: [
            {
                texto: "Planeja vingança meticulosamente",
                pontos: [0, 0, 1]
            },
            {
                texto: "Busca justiça através da exposição",
                pontos: [1, 1, 0]
            }
        ]
    },
    // Pergunta 8 - Relação com a medicação
    {
        enunciado: "Quando as pílulas acabam, você:",
        alternativas: [
            {
                texto: "Rouba mais, temendo perder a conexão",
                pontos: [1, 0, 0]
            },
            {
                texto: "Aprende a navegar entre realidades sem elas",
                pontos: [0, 1, 1]
            }
        ]
    },
    // Pergunta 9 - Clímax
    {
        enunciado: "No confronto final, você:",
        alternativas: [
            {
                texto: "Usa a Ultrarrealidade como arma",
                pontos: [1, 0, 1]
            },
            {
                texto: "Recorre à razão e evidências",
                pontos: [0, 1, 0]
            }
        ]
    },
    // Pergunta 10 - Desfecho
    {
        enunciado: "Após escapar, em relação ao hospício você:",
        alternativas: [
            {
                texto: "Queima-o, destruindo todos os registros",
                pontos: [1, 0, 0]
            },
            {
                texto: "Expõe seus crimes ao mundo",
                pontos: [0, 1, 1]
            }
        ]
    },
    // NOVAS PERGUNTAS ADICIONADAS
    // Pergunta 11 - Encontro com criaturas
    {
        enunciado: "Ao encontrar criaturas estranhas na Ultrarrealidade, você:",
        alternativas: [
            {
                texto: "Tenta se comunicar com elas",
                pontos: [1, 0, 0]
            },
            {
                texto: "Foge e evita qualquer contato",
                pontos: [0, 1, 1]
            }
        ]
    },
    // Pergunta 12 - Descoberta de poderes
    {
        enunciado: "Ao perceber que possui habilidades especiais, você:",
        alternativas: [
            {
                texto: "As usa sem restrições para explorar",
                pontos: [1, 0, 1]
            },
            {
                texto: "As estuda cuidadosamente antes de usar",
                pontos: [0, 1, 0]
            }
        ]
    },
    // Pergunta 13 - Encontro com o passado
    {
        enunciado: "Quando vislumbra memórias de sua infância, você:",
        alternativas: [
            {
                texto: "Mergulha fundo, mesmo que seja doloroso",
                pontos: [1, 0, 0]
            },
            {
                texto: "Tenta bloquear essas lembranças",
                pontos: [0, 1, 1]
            }
        ]
    },
    // Pergunta 14 - Decisão sobre o gato
    {
        enunciado: "Ao encontrar Mr. Midnight em perigo, você:",
        alternativas: [
            {
                texto: "Arrisca tudo para salvá-lo",
                pontos: [1, 0, 1]
            },
            {
                texto: "Pensa em uma estratégia mais segura",
                pontos: [0, 1, 0]
            }
        ]
    },
    // Pergunta 15 - Última decisão
    {
        enunciado: "No momento final, quando tudo parece perdido, você:",
        alternativas: [
            {
                texto: "Entrega-se completamente à Ultrarrealidade",
                pontos: [1, 0, 0]
            },
            {
                texto: "Luta para manter o pé na realidade",
                pontos: [0, 1, 1]
            }
        ]
    }
];

// Sistema de Pontuação
let pontosFinais = [0, 0, 0]; // [Final A, B, C]
let perguntaAtual = 0;

// Elementos DOM
const elementos = {
    caixaPerguntas: document.querySelector('.caixa-perguntas'),
    caixaAlternativas: document.querySelector('.caixa-alternativas'),
    caixaResultado: document.querySelector('.caixa-resultado'),
    textoResultado: document.querySelector('.texto-resultado'),
    tituloResultado: document.querySelector('.caixa-resultado h2'),
    botaoReiniciar: document.querySelector('.botao-reiniciar'),
    botaoIniciar: document.querySelector('.botao-iniciar'),
    barraProgresso: document.querySelector('.progresso'),
    telaInicial: document.querySelector('.tela-inicial'),
    conteudoJogo: document.querySelector('.conteudo-jogo')
};

// Função para iniciar o jogo
function iniciarJogo() {
    elementos.telaInicial.style.display = 'none';
    elementos.conteudoJogo.style.display = 'block';
    perguntaAtual = 0;
    pontosFinais = [0, 0, 0];
    atualizarBarraProgresso();
    renderizarPergunta();
}

// Função para renderizar a pergunta atual
function renderizarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    elementos.caixaPerguntas.textContent = pergunta.enunciado;
    
    // Limpar alternativas anteriores
    elementos.caixaAlternativas.innerHTML = '';
    
    // Adicionar novas alternativas
    pergunta.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa.texto;
        botao.className = 'botao-alternativa';
        botao.onclick = () => selecionarAlternativa(alternativa.pontos);
        elementos.caixaAlternativas.appendChild(botao);
    });
    
    atualizarBarraProgresso();
}

function selecionarAlternativa(pontos) {
    pontosFinais = pontosFinais.map((total, index) => total + pontos[index]);
    perguntaAtual++;
    
    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
    } else {
        renderizarPergunta();
    }
}

function mostrarResultado() {
    const finalIndex = pontosFinais.indexOf(Math.max(...pontosFinais));
    const finais = [
        // Final A: Abraço da Loucura
        "Você mergulhou fundo demais na Ultrarrealidade. As pílulas vermelhas se tornaram sua única verdade, e agora vagueia entre dimensões, incapaz de distinguir realidade e delírio. O Sr. Meia-noite observa à distância, lamentando o destino daquela que poderia ter sido sua salvadora.",
        
        // Final B: Justiça Racional
        "Com provas meticulosamente coletadas, você expôs os crimes do Dr. Oswald. O hospício foi fechado, mas a Ultrarrealidade permanece como um segredo seu. Às vezes, nas noites quietas, você vê o Sr. Meia-noite piscando em sombras familiares...",
        
        // Final C: Vingança Sombria
        "Sua busca por vingança consumiu tudo. O hospício arde em chamas com seus segredos, e o Dr. Oswald jaz morto - mas em seus sonhos, ele sempre retorna. Você e o Sr. Meia-noite agora são caçadores de monstros, eternamente presos à Ultrarrealidade."
    ];
    
    const titulosFinais = ["Abraço da Loucura", "Justiça Racional", "Vingança Sombria"];
    
    elementos.tituloResultado.textContent = titulosFinais[finalIndex];
    elementos.textoResultado.textContent = finais[finalIndex];
    
    // Ocultar elementos do jogo e mostrar resultado
    elementos.caixaPerguntas.style.display = 'none';
    elementos.caixaAlternativas.style.display = 'none';
    elementos.caixaResultado.style.display = 'block';
}

function atualizarBarraProgresso() {
    const progresso = (perguntaAtual / perguntas.length) * 100;
    elementos.barraProgresso.style.width = `${progresso}%`;
}

// Evento para reiniciar o jogo
elementos.botaoReiniciar.addEventListener('click', () => {
    elementos.caixaResultado.style.display = 'none';
    elementos.caixaPerguntas.style.display = 'block';
    elementos.caixaAlternativas.style.display = 'block';
    iniciarJogo();
});

// Evento para iniciar o jogo
elementos.botaoIniciar.addEventListener('click', iniciarJogo);

// Inicializar barra de progresso
atualizarBarraProgresso();