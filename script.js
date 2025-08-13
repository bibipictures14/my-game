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
        enunciado: "Ao encontrar documentos sobre seus pais, você:",
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
    }
];

// Sistema de Pontuação
let pontosFinais = [0, 0, 0]; // [Final A, B, C]

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
    
    elementos.textoResultado.innerHTML = `
        <h2>${["Abraço da Loucura", "Justiça Racional", "Vingança Sombria"][finalIndex]}</h2>
        <p>${finais[finalIndex]}</p>
        <img src="${["finalA.jpeg", "finalB.jpg", "finalC.jpg"][finalIndex]}" alt="Cena final">
    `;
}