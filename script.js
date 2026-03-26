/* =====================================================================
   BANCO DE DADOS
===================================================================== */
const BANCO = {
  quiz: [
    { pergunta: "Quem morreu pelos nossos pecados?",    opcoes: ["Jesus",            "Pedro",          "Paulo"],            correta: 0 },
    { pergunta: "A salvação vem por:",                   opcoes: ["Fé",              "Obras",           "Dinheiro"],         correta: 0 },
    { pergunta: "Quem justifica o homem?",               opcoes: ["Deus",            "O próprio homem", "A Lei"],            correta: 0 },
    { pergunta: "O pecado afeta:",                       opcoes: ["Todos",           "Alguns",          "Ninguém"],          correta: 0 },
    { pergunta: "O salário do pecado é:",                opcoes: ["Morte",           "Vida",            "Bênção"],           correta: 0 },
    { pergunta: "Cristo é o único:",                     opcoes: ["Salvador",        "Profeta",         "Rei terreno"],      correta: 0 },
    { pergunta: "A fé produz:",                          opcoes: ["Obediência",      "Medo",            "Dúvida"],           correta: 0 },
    { pergunta: "A graça é:",                            opcoes: ["Favor imerecido", "Recompensa",      "Troca"],            correta: 0 },
    { pergunta: "Israel foi escolhido por:",             opcoes: ["Deus",            "Homem",           "Seus reis"],        correta: 0 },
    { pergunta: "A santificação é:",                     opcoes: ["Um processo",     "Evento único",    "Um ritual"],        correta: 0 },
    { pergunta: "A salvação é um:",                      opcoes: ["Dom de Deus",     "Pagamento",       "Esforço"],          correta: 0 },
    { pergunta: "A Bíblia é:",                           opcoes: ["Palavra de Deus", "Livro comum",     "História humana"],  correta: 0 }
  ],
  anagrama: [
    { embaralhado: "ODAEPC",       resposta: "PECADO"       },
    { embaralhado: "EF",           resposta: "FE"           },
    { embaralhado: "ACARG",        resposta: "GRACA"        },
    { embaralhado: "SUJES",        resposta: "JESUS"        },
    { embaralhado: "AOCLVASA",     resposta: "SALVACAO"     },
    { embaralhado: "NTOCAIFICASA", resposta: "SANTIFICACAO" },
    { embaralhado: "SUED",         resposta: "DEUS"         },
    { embaralhado: "CRZU",         resposta: "CRUZ"         },
    { embaralhado: "AIVD",         resposta: "VIDA"         },
    { embaralhado: "ROAM",         resposta: "AMOR"         },
    { embaralhado: "AMLA",         resposta: "ALMA"         },
    { embaralhado: "OINER",        resposta: "REINO"        }
  ],
  vf: [
    { pergunta: "Fé é apenas emoção",             correta: false },
    { pergunta: "Deus salva o homem",             correta: true  },
    { pergunta: "A salvação depende de obras",    correta: false },
    { pergunta: "Cristo morreu pelos pecados",    correta: true  },
    { pergunta: "Todos os homens são pecadores",  correta: true  },
    { pergunta: "A graça pode ser comprada",      correta: false },
    { pergunta: "A Bíblia é inspirada por Deus",  correta: true  },
    { pergunta: "Santificação é instantânea",     correta: false },
    { pergunta: "Jesus é o único caminho",        correta: true  },
    { pergunta: "O pecado não tem consequências", correta: false },
    { pergunta: "A fé gera obediência",           correta: true  },
    { pergunta: "Deus rejeita o arrependido",     correta: false }
  ],
  forca: [
    { dica: "Quem nos salva?",                resposta: "JESUS"    },
    { dica: "Quem justifica o pecador?",      resposta: "DEUS"     },
    { dica: "Meio de salvação",               resposta: "FE"       },
    { dica: "O que Cristo trouxe",            resposta: "SALVACAO" },
    { dica: "O que vence o pecado",           resposta: "GRACA"    },
    { dica: "O que Cristo oferece",           resposta: "VIDA"     },
    { dica: "Instrumento da morte de Cristo", resposta: "CRUZ"     },
    { dica: "Sentimento divino",              resposta: "AMOR"     },
    { dica: "Parte espiritual do homem",      resposta: "ALMA"     }
  ],
  soletrar: [
    "SALVACAO","PECADO","GRACA","FE","CRUZ",
    "DEUS","JESUS","VIDA","AMOR","ALMA","REINO","VERDADE"
  ],
  cruzadinha: [
    { dica: "Meio de salvação",               resposta: "FE"       },
    { dica: "Filho de Deus",                  resposta: "JESUS"    },
    { dica: "Favor imerecido",                resposta: "GRACA"    },
    { dica: "Erro do homem",                  resposta: "PECADO"   },
    { dica: "Instrumento de morte de Cristo", resposta: "CRUZ"     },
    { dica: "Criador de tudo",                resposta: "DEUS"     },
    { dica: "Vida eterna",                    resposta: "VIDA"     },
    { dica: "Sentimento divino",              resposta: "AMOR"     },
    { dica: "Dom de Deus",                    resposta: "SALVACAO" },
    { dica: "Caminho correto",                resposta: "VERDADE"  },
    { dica: "Lugar de Deus",                  resposta: "REINO"    }
  ],
  pares: [
    { dica: "Meio de salvação",               resposta: "FÉ"       },
    { dica: "Filho de Deus",                  resposta: "JESUS"    },
    { dica: "Favor imerecido",                resposta: "GRAÇA"    },
    { dica: "Erro do homem",                  resposta: "PECADO"   },
    { dica: "Instrumento de morte de Cristo", resposta: "CRUZ"     },
    { dica: "Criador de tudo",                resposta: "DEUS"     },
    { dica: "Vida eterna",                    resposta: "VIDA"     },
    { dica: "Sentimento divino",              resposta: "AMOR"     }
  ],
  ordem: {
    label: "Coloque na ordem certa:",
    itens:   ["Queda", "Restauração", "Criação", "Redenção"],
    corretos: ["Criação", "Queda", "Redenção", "Restauração"]
  },
  flashcard: [
    {
      pergunta: "O que é Graça?",
      // frase com lacunas marcadas como ___SLOT0___, ___SLOT1___, ___SLOT2___
      frase:    "Graça é o ___SLOT0___ de Deus dado ao ___SLOT1___ sem que ele ___SLOT2___.",
      slots:    ["favor", "homem", "mereça"],
      distratores: ["castigo", "anjo", "peça"]
    },
    {
      pergunta: "O que é Fé?",
      frase:    "Fé é a ___SLOT0___ e a certeza de ___SLOT1___ que não se ___SLOT2___.",
      slots:    ["certeza", "coisas", "veem"],
      distratores: ["dúvida", "erros", "ouvem"]
    },
    {
      pergunta: "O que é Pecado?",
      frase:    "Pecado é a ___SLOT0___ da Lei de ___SLOT1___, que ___SLOT2___ a todos.",
      slots:    ["transgressão", "Deus", "afeta"],
      distratores: ["obediência", "homem", "salva"]
    },
    {
      pergunta: "O que é Salvação?",
      frase:    "Salvação é a ___SLOT0___ do pecado por meio da ___SLOT1___ em ___SLOT2___.",
      slots:    ["libertação", "fé", "Jesus"],
      distratores: ["prisão", "obra", "Pedro"]
    },
    {
      pergunta: "O que é Santificação?",
      frase:    "Santificação é o ___SLOT0___ de ser ___SLOT1___ pela ___SLOT2___ de Deus.",
      slots:    ["processo", "santo", "graça"],
      distratores: ["instante", "perfeito", "força"]
    },
    {
      pergunta: "O que é Arrependimento?",
      frase:    "Arrependimento é a ___SLOT0___ de mente que leva a ___SLOT1___ o ___SLOT2___.",
      slots:    ["mudança", "abandonar", "pecado"],
      distratores: ["firmeza", "amar", "mundo"]
    }
  ]
};

/* =====================================================================
   SEQUÊNCIA
===================================================================== */
const SEQUENCIA = [
  "quiz", "anagrama", "vf", "pares",
  "forca", "quiz_anagrama", "cruzadinha",
  "ordem", "flashcard", "memoria", "quiz", "vf",
  "palavras_cruzadas", "anagrama", "forca", "pares"
];

/* =====================================================================
   ESTADO
===================================================================== */
let estado = {
  nome: "",
  pontos: 0,
  jogoAtual: 0,
  respondido: false,
  timer: null,
  tempo: 90
};

// Fila do quiz para não repetir até esgotar
let _quizFila = [];
let _quizIdx  = 0;

// Estado do jogo de pares
let _paresSel    = null;
let _paresAcertos = 0;
let _paresTotal   = 0;

// Estado da forca
let _forcaResposta = "";
let _forcaAcertos  = new Set();
let _forcaErros    = 0;
const FORCA_MAX_ERROS = 6;

// Estado da ordem
let _ordemAtual = [];
let _ordemQ     = null;
let _dragSrc    = null;

// Flashcard
let _flashVirou = false;

/* =====================================================================
   UTILITÁRIOS
===================================================================== */
function $(id) { return document.getElementById(id); }

function aleatorio(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function embaralhar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalizar(str) {
  return str.toUpperCase().trim()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/* =====================================================================
   LAYOUT HELPERS  (usam os IDs do HTML original)
===================================================================== */

// Renderiza dentro de #game com header de timer
function layout(tituloTxt, conteudo) {
  $("game").innerHTML = `
    <div class="bg-slate-800 p-6 rounded-2xl shadow-lg space-y-4 fade-in">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-blue-400">${tituloTxt}</h2>
        <span id="tempo" class="text-yellow-400 font-bold text-sm"></span>
      </div>
      <div class="w-full bg-slate-700 rounded-full h-1.5">
        <div class="bg-blue-500 h-1.5 rounded-full transition-all"
             style="width:${(estado.jogoAtual / SEQUENCIA.length) * 100}%"></div>
      </div>
      ${conteudo}
    </div>
  `;
}

/* =====================================================================
   TIMER
===================================================================== */
function iniciarTimer(segundos) {
  clearInterval(estado.timer);
  estado.tempo = segundos || 90;
  _atualizarTimerUI();

  estado.timer = setInterval(() => {
    estado.tempo--;
    _atualizarTimerUI();
    if (estado.tempo <= 0) {
      clearInterval(estado.timer);
      if (!estado.respondido) proximoJogo();
    }
  }, 1000);
}

function _atualizarTimerUI() {
  const el = $("tempo");
  if (!el) return;
  el.textContent = "⏱ " + estado.tempo;
  el.style.color = estado.tempo <= 15 ? "#ef4444" : "";
}

function pararTimer() {
  clearInterval(estado.timer);
}

/* =====================================================================
   START  (chamado pelo onclick do HTML)
===================================================================== */
function start() {
  const nome = $("nome").value.trim();
  if (!nome) { alert("Digite seu nome!"); return; }

  estado.nome      = nome;
  estado.pontos    = 0;
  estado.jogoAtual = 0;
  estado.respondido = false;
  _quizFila = [];
  _quizIdx  = 0;
  _qaRespostas     = 0;
  _qaQuizFeito     = false;
  _qaAnagramaFeito = false;
  _fcBancoOrdem    = null;
  _fcCliqueWord    = null;

  $("login").classList.add("hidden");
  $("game").classList.remove("hidden");

  carregarJogo();
}

/* =====================================================================
   FLUXO
===================================================================== */
function carregarJogo() {
  if (estado.jogoAtual >= SEQUENCIA.length) { finalizar(); return; }

  estado.respondido = false;

  const tipo = SEQUENCIA[estado.jogoAtual];

  const mapa = {
    quiz:          jogoQuiz,
    anagrama:      jogoAnagrama,
    vf:            jogoVF,
    pares:         jogoPares,
    forca:         jogoForca,
    cruzadinha:    jogoCruzadinha,
    quiz_anagrama: jogoQuizAnagrama,
    ordem:         jogoOrdem,
    flashcard:     jogoFlashcard,
    memoria:          jogoMemoria,
    palavras_cruzadas: jogoPalavrasCruzadas
  };

  const fn = mapa[tipo];
  if (fn) fn();
  else proximoJogo();
}

function proximoJogo() {
  pararTimer();
  estado.jogoAtual++;
  setTimeout(carregarJogo, 900);
}

/* =====================================================================
   RESPOSTA
===================================================================== */
function acertar() {
  if (estado.respondido) return;
  estado.respondido = true;
  estado.pontos += 10;
  pararTimer();
  feedback(true);
}

function errar() {
  if (estado.respondido) return;
  estado.respondido = true;
  pararTimer();
  feedback(false);
}

// Verifica input de texto
function check(resposta) {
  if (estado.respondido) return;
  const el = $("resp");
  if (!el) return;
  const val = normalizar(el.value);
  if (!val) { alert("Digite uma resposta!"); return; }
  normalizar(resposta) === val ? acertar() : errar();
}

/* =====================================================================
   FEEDBACK  (usa a classe .feedback do CSS original)
===================================================================== */
function feedback(ok) {
  // Remove feedbacks anteriores
  document.querySelectorAll(".feedback").forEach(f => f.remove());

  const el = document.createElement("div");
  el.className = "feedback";
  el.style.background = ok ? "#22c55e" : "#ef4444";
  el.textContent = ok ? "✔ Acertou!" : "✖ Errou";
  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
    proximoJogo();
  }, 800);
}

/* =====================================================================
   JOGO: QUIZ
===================================================================== */
function jogoQuiz() {
  if (_quizFila.length === 0 || _quizIdx >= _quizFila.length) {
    _quizFila = embaralhar(BANCO.quiz);
    _quizIdx  = 0;
  }
  const q = _quizFila[_quizIdx++];

  // Embaralha as opções mantendo rastreio da resposta certa pelo texto
  const respostaCorreta = q.opcoes[q.correta];
  const opcoesEmbaralhadas = embaralhar([...q.opcoes]);
  const novoIndiceCorreto = opcoesEmbaralhadas.indexOf(respostaCorreta);

  layout("Quiz", `
    <p class="text-center font-semibold text-lg">${q.pergunta}</p>
    <div class="grid gap-3">
      ${opcoesEmbaralhadas.map((op, i) =>
        `<button class="btn" id="qopt-${i}" onclick="responderQuiz(${i}, ${novoIndiceCorreto})">${op}</button>`
      ).join("")}
    </div>
  `);
  iniciarTimer(60);
}

function responderQuiz(i, correta) {
  if (estado.respondido) return;
  for (let k = 0; k < 3; k++) {
    const b = $(`qopt-${k}`);
    if (!b) continue;
    b.disabled = true;
    if (k === correta) b.style.background = "#22c55e";
    else if (k === i)  b.style.background = "#ef4444";
  }
  i === correta ? acertar() : errar();
}

/* =====================================================================
   JOGO: ANAGRAMA
===================================================================== */
function jogoAnagrama() {
  const q = aleatorio(BANCO.anagrama);
  layout("Anagrama", `
    <p class="text-center font-semibold">Desembaralhe a palavra:</p>
    <div class="text-3xl text-yellow-400 text-center tracking-widest font-bold py-4">${q.embaralhado}</div>
    <input id="resp" class="input mb-2" placeholder="Sua resposta...">
    <button class="btn" onclick="check('${q.resposta}')">Confirmar</button>
  `);
  iniciarTimer(60);
  $("resp") && $("resp").focus();
}

/* =====================================================================
   JOGO: VERDADEIRO OU FALSO
===================================================================== */
function jogoVF() {
  const q = aleatorio(BANCO.vf);
  layout("Verdadeiro ou Falso", `
    <p class="text-center font-semibold text-lg">${q.pergunta}</p>
    <div class="grid grid-cols-2 gap-3 mt-2">
      <button class="btn btn-success" onclick="responderVF(true, ${q.correta})">✔ Verdadeiro</button>
      <button class="btn btn-error"   onclick="responderVF(false, ${q.correta})">✖ Falso</button>
    </div>
  `);
  iniciarTimer(30);
}

function responderVF(escolha, correta) {
  if (estado.respondido) return;
  escolha === correta ? acertar() : errar();
}

/* =====================================================================
   JOGO: PARES  (matching clicável)
===================================================================== */
function jogoPares() {
  const amostra = embaralhar(BANCO.pares).slice(0, 4);
  _paresSel     = null;
  _paresAcertos = 0;
  _paresTotal   = amostra.length;

  // Cria cards de dica e resposta embaralhados
  const dicas     = amostra.map((p, i) => ({ texto: p.dica,     idx: i, tipo: "dica"     }));
  const respostas = amostra.map((p, i) => ({ texto: p.resposta, idx: i, tipo: "resp"     }));
  const todos     = embaralhar([...dicas, ...respostas]);

  const cards = todos.map((item, pos) =>
    `<div class="parItem" id="par-${pos}"
          data-idx="${item.idx}" data-tipo="${item.tipo}"
          onclick="selecionarPar(${pos})">
       ${item.texto}
     </div>`
  ).join("");

  layout("Pares", `
    <p class="text-center font-semibold">Conecte cada definição à palavra:</p>
    <div class="grid grid-cols-2 gap-2 mt-2">${cards}</div>
    <p class="text-center text-sm text-slate-400 mt-2">
      Acertos: <span id="pares-ok">0</span>/${_paresTotal}
    </p>
  `);
  iniciarTimer(90);
}

function selecionarPar(pos) {
  if (estado.respondido) return;
  const el = $(`par-${pos}`);
  if (!el || el.dataset.matched) return;

  if (!_paresSel) {
    _paresSel = { pos, idx: +el.dataset.idx, tipo: el.dataset.tipo };
    el.style.background = "#3b82f6";
    return;
  }

  // Clicou no mesmo: deseleciona
  if (_paresSel.pos === pos) {
    el.style.background = "";
    _paresSel = null;
    return;
  }

  const prev = $(`par-${_paresSel.pos}`);
  const tiposDif = _paresSel.tipo !== el.dataset.tipo;
  const mesmoPar = _paresSel.idx === +el.dataset.idx;

  if (tiposDif && mesmoPar) {
    // Par correto
    [el, prev].forEach(c => {
      c.style.background = "#22c55e";
      c.dataset.matched  = "1";
      c.style.opacity    = "0.6";
      c.style.cursor     = "default";
    });
    _paresAcertos++;
    const span = $("pares-ok");
    if (span) span.textContent = _paresAcertos;
    if (_paresAcertos === _paresTotal) acertar();
  } else {
    // Errado: pisca vermelho
    [el, prev].forEach(c => { c.style.background = "#ef4444"; });
    setTimeout(() => {
      if (!el.dataset.matched)   el.style.background   = "";
      if (!prev.dataset.matched) prev.style.background = "";
    }, 600);
  }

  _paresSel = null;
}

/* =====================================================================
   JOGO: FORCA
===================================================================== */
function jogoForca() {
  const q       = aleatorio(BANCO.forca);
  _forcaResposta = normalizar(q.resposta);
  _forcaAcertos  = new Set();
  _forcaErros    = 0;
  _renderForca(q.dica);
  iniciarTimer(90);
}

function _renderForca(dica) {
  // Palavra com underlines
  const palavra = _forcaResposta.split("").map((l, i) =>
    `<span id="fl-${i}" class="inline-block w-8 text-center text-2xl font-bold border-b-2 border-yellow-400 mx-1">
       ${_forcaAcertos.has(l) ? l : ""}
     </span>`
  ).join("");

  // Teclado A-Z
  const teclas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => {
    const acertou = _forcaAcertos.has(l) && _forcaResposta.includes(l);
    const errou   = _forcaAcertos.has(l) && !_forcaResposta.includes(l);
    const bg = acertou ? "background:#22c55e" : errou ? "background:#ef4444;opacity:.4" : "";
    return `<button id="key-${l}" onclick="chutar('${l}')"
              style="width:32px;height:32px;border-radius:6px;font-weight:bold;
                     font-size:.75rem;background:#475569;color:white;border:none;
                     cursor:pointer;transition:.15s;${bg}"
              ${_forcaAcertos.has(l) ? "disabled" : ""}>${l}</button>`;
  }).join("");

  layout("Forca", `
    <p class="text-center font-semibold">${dica}</p>
    <div class="flex justify-center flex-wrap gap-1 py-4">${palavra}</div>
    <p class="text-center text-sm text-red-400">Erros: <span id="forca-erros">${_forcaErros}</span> / ${FORCA_MAX_ERROS}</p>
    <div class="flex flex-wrap gap-1 justify-center mt-3">${teclas}</div>
  `);
}

function chutar(letra) {
  if (estado.respondido) return;
  const btn = $("key-" + letra);
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  _forcaAcertos.add(letra);

  if (_forcaResposta.includes(letra)) {
    btn.style.background = "#22c55e";
    // Revela letras
    _forcaResposta.split("").forEach((l, i) => {
      if (l === letra) {
        const el = $("fl-" + i);
        if (el) el.textContent = letra;
      }
    });
    // Vitória?
    if (_forcaResposta.split("").every(l => _forcaAcertos.has(l))) acertar();
  } else {
    btn.style.background = "#ef4444";
    btn.style.opacity    = "0.4";
    _forcaErros++;
    const badge = $("forca-erros");
    if (badge) badge.textContent = _forcaErros;
    if (_forcaErros >= FORCA_MAX_ERROS) errar();
  }
}

/* =====================================================================
   JOGO: CRUZADINHA
===================================================================== */
function jogoCruzadinha() {
  const q = aleatorio(BANCO.cruzadinha);
  layout("Cruzadinha", `
    <p class="text-center font-semibold text-lg">${q.dica}</p>
    <input id="resp" class="input mb-2" placeholder="Sua resposta...">
    <button class="btn" onclick="check('${q.resposta}')">Responder</button>
  `);
  iniciarTimer(45);
  $("resp") && $("resp").focus();
}


/* =====================================================================
   JOGO: ORDEM  (drag & drop)
===================================================================== */
function jogoOrdem() {
  _ordemQ     = BANCO.ordem;
  _ordemAtual = embaralhar([..._ordemQ.itens]);
  _renderOrdem();
  iniciarTimer(60);
}

function _renderOrdem() {
  const itens = _ordemAtual.map((item, i) =>
    `<div class="btn" draggable="true" data-idx="${i}"
          ondragstart="dragStart(event)"
          ondragover="dragOver(event)"
          ondrop="dragDrop(event,${i})"
          ondragleave="dragLeave(event)"
          style="cursor:grab;text-align:left;display:flex;align-items:center;gap:10px">
       <span style="opacity:.5">⠿</span> ${item}
     </div>`
  ).join("");

  layout("Ordem", `
    <p class="text-center font-semibold">${_ordemQ.label}</p>
    <div class="space-y-2 mt-2" id="ordem-list">${itens}</div>
    <button class="btn btn-success mt-3" onclick="verificarOrdem()">Confirmar Ordem</button>
  `);
}

function dragStart(e) {
  _dragSrc = e.currentTarget;
  e.dataTransfer.effectAllowed = "move";
}
function dragOver(e) {
  e.preventDefault();
  e.currentTarget.style.outline = "2px solid #3b82f6";
}
function dragLeave(e) {
  e.currentTarget.style.outline = "";
}
function dragDrop(e, toIdx) {
  e.preventDefault();
  e.currentTarget.style.outline = "";
  if (!_dragSrc || _dragSrc === e.currentTarget) return;
  const fromIdx = +_dragSrc.dataset.idx;
  [_ordemAtual[fromIdx], _ordemAtual[toIdx]] = [_ordemAtual[toIdx], _ordemAtual[fromIdx]];
  _renderOrdem();
}
function verificarOrdem() {
  if (estado.respondido) return;
  const certo = _ordemQ.corretos.every((v, i) => v === _ordemAtual[i]);
  certo ? acertar() : errar();
}

/* =====================================================================
   JOGO: FLASHCARD — Complete a frase arrastando as palavras
===================================================================== */

// Estado do flashcard
let _fcQ          = null;   // questão atual
let _fcSlots      = [];     // palavras em cada lacuna (null = vazia)
let _fcFlipped    = false;  // cartão virado?
let _fcDragWord   = null;   // palavra sendo arrastada
let _fcDragFrom   = null;   // "bank" | "slot-N"

function jogoFlashcard() {
  _fcQ       = aleatorio(BANCO.flashcard);
  _fcSlots   = [null, null, null];
  _fcFlipped = false;
  _fcDragWord = null;
  _fcDragFrom = null;

  _renderFlashcard();
  iniciarTimer(90);
}

function _renderFlashcard() {
  const q = _fcQ;

  // ── Cartão (frente = pergunta / verso = frase com lacunas) ──────
  const frente = `
    <div style="text-align:center;padding:1rem">
      <p style="font-size:1.1rem;font-weight:bold;color:#93c5fd">${q.pergunta}</p>
      <p style="font-size:.8rem;color:#94a3b8;margin-top:.5rem">Clique para ver a frase</p>
    </div>`;

  // Monta frase com lacunas clicáveis/drop
  let fraseHtml = q.frase;
  for (let s = 0; s < 3; s++) {
    const conteudo = _fcSlots[s]
      ? `<span style="color:#fbbf24;font-weight:bold">${_fcSlots[s]}</span>`
      : `<span style="color:#94a3b8;font-size:.8rem">solte aqui</span>`;

    const slotHtml = `<span
        id="fc-slot-${s}"
        ondragover="fcDragOver(event)"
        ondragleave="fcDragLeave(event)"
        ondrop="fcDrop(event,${s})"
        onclick="fcSlotClick(${s})"
        style="
          display:inline-flex;align-items:center;justify-content:center;
          min-width:80px;height:28px;
          background:${_fcSlots[s] ? '#1e3a5f' : '#1e293b'};
          border:2px dashed ${_fcSlots[s] ? '#3b82f6' : '#475569'};
          border-radius:6px;padding:0 8px;
          vertical-align:middle;margin:0 3px;
          cursor:${_fcSlots[s] ? 'pointer' : 'default'};
          transition:.2s
        ">${conteudo}</span>`;

    fraseHtml = fraseHtml.replace(`___SLOT${s}___`, slotHtml);
  }

  const verso = `
    <div style="padding:.75rem;font-size:.95rem;line-height:2;color:#e2e8f0">
      ${fraseHtml}
    </div>`;

  // ── Banco de palavras (embaralhado na primeira render) ──────────
  // Guarda ordem estável das palavras no banco para não reembaralhar a cada render
  if (!_fcBancoOrdem) {
    _fcBancoOrdem = embaralhar([...q.slots, ...q.distratores]);
  }

  // Palavras disponíveis = que não estão em nenhum slot
  const usadas = _fcSlots.filter(Boolean);
  const disponiveis = _fcBancoOrdem.filter(p => !usadas.includes(p));

  const bancoPalavras = disponiveis.map(palavra => `
    <span
      id="fc-word-${palavra}"
      draggable="true"
      ondragstart="fcDragStart(event,'${palavra}','bank')"
      ondragend="fcDragEnd(event)"
      onclick="fcWordClick('${palavra}')"
      style="
        display:inline-flex;align-items:center;justify-content:center;
        background:#334155;border:1px solid #475569;
        border-radius:20px;padding:5px 14px;
        font-size:.85rem;font-weight:bold;color:white;
        cursor:grab;transition:.2s;user-select:none;margin:3px
      ">${palavra}</span>
  `).join("");

  layout("Flashcard", `
    <!-- Cartão flip -->
    <div class="card" id="fc-card" onclick="fcVirar()" style="cursor:pointer;margin-bottom:.5rem">
      <div class="card-inner" id="fc-inner">
        <div class="card-front">${frente}</div>
        <div class="card-back"  style="padding:.5rem;overflow:auto">${verso}</div>
      </div>
    </div>
    <p class="text-center text-xs text-slate-400" id="fc-hint">
      ${_fcFlipped ? 'Arraste as palavras para as lacunas' : 'Clique no cartão para ver a frase'}
    </p>

    <!-- Banco de palavras -->
    <div id="fc-bank"
         ondragover="fcDragOver(event)"
         ondragleave="fcDragLeave(event)"
         ondrop="fcDropBank(event)"
         style="
           min-height:48px;border:2px dashed #334155;border-radius:12px;
           padding:8px;display:flex;flex-wrap:wrap;gap:4px;
           justify-content:center;margin-top:.5rem;transition:.2s
         ">
      ${bancoPalavras}
    </div>

    <button class="btn btn-success" onclick="fcVerificar()" style="margin-top:.75rem">
      ✔ Verificar resposta
    </button>
  `);

  // Reaplica estado flip sem animação de reset
  if (_fcFlipped) {
    const inner = $("fc-inner");
    if (inner) inner.style.transform = "rotateY(180deg)";
  }
}

// Variável auxiliar para ordem estável do banco
let _fcBancoOrdem = null;

function fcVirar() {
  if (estado.respondido) return;
  _fcFlipped = !_fcFlipped;
  const inner = $("fc-inner");
  if (inner) inner.style.transform = _fcFlipped ? "rotateY(180deg)" : "";
  const hint = $("fc-hint");
  if (hint) hint.textContent = _fcFlipped
    ? "Arraste as palavras para as lacunas"
    : "Clique no cartão para ver a frase";
}

// ── Drag & Drop ─────────────────────────────────────────────────────

function fcDragStart(e, palavra, origem) {
  _fcDragWord = palavra;
  _fcDragFrom = origem;
  e.dataTransfer.effectAllowed = "move";
  e.currentTarget.style.opacity = ".4";
}

function fcDragEnd(e) {
  e.currentTarget.style.opacity = "";
}

function fcDragOver(e) {
  e.preventDefault();
  e.currentTarget.style.borderColor = "#3b82f6";
}

function fcDragLeave(e) {
  e.currentTarget.style.borderColor = "";
}

function fcDrop(e, slotIdx) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.style.borderColor = "";
  if (!_fcDragWord) return;

  // Se slot já ocupado, devolve palavra ao banco (troca)
  if (_fcSlots[slotIdx]) {
    // Só libera se a origem não é esse mesmo slot
    if (_fcDragFrom !== "slot-" + slotIdx) {
      // Devolve palavra anterior ao banco (ela já está em _fcBancoOrdem)
      // não precisa fazer nada — ela some do slot e fica disponível
    }
  }

  // Remove palavra de slot anterior se veio de outro slot
  if (_fcDragFrom && _fcDragFrom.startsWith("slot-")) {
    const fromIdx = parseInt(_fcDragFrom.split("-")[1]);
    _fcSlots[fromIdx] = null;
  }

  _fcSlots[slotIdx] = _fcDragWord;
  _fcDragWord = null;
  _fcDragFrom = null;
  _renderFlashcard();
}

function fcDropBank(e) {
  e.preventDefault();
  e.currentTarget.style.borderColor = "";
  if (!_fcDragWord || !_fcDragFrom) return;

  // Só processa se veio de um slot (devolver ao banco)
  if (_fcDragFrom.startsWith("slot-")) {
    const fromIdx = parseInt(_fcDragFrom.split("-")[1]);
    _fcSlots[fromIdx] = null;
    _fcDragWord = null;
    _fcDragFrom = null;
    _renderFlashcard();
  }
}

// ── Clique alternativo (mobile / sem drag) ───────────────────────────
let _fcCliqueWord = null; // palavra selecionada via clique

function fcWordClick(palavra) {
  if (estado.respondido) return;
  // Se já tinha uma palavra selecionada, deseleciona
  if (_fcCliqueWord === palavra) {
    _fcCliqueWord = null;
    _renderFlashcard();
    return;
  }
  _fcCliqueWord = palavra;
  // Destaca visualmente
  const el = $("fc-word-" + palavra);
  if (el) el.style.background = "#1e40af";
}

function fcSlotClick(slotIdx) {
  if (estado.respondido) return;

  if (_fcCliqueWord) {
    // Temos palavra selecionada: coloca no slot
    if (_fcSlots[slotIdx]) {
      // Slot ocupado: não faz nada (usuário deve limpar primeiro)
    } else {
      _fcSlots[slotIdx] = _fcCliqueWord;
      _fcCliqueWord = null;
      _renderFlashcard();
    }
  } else if (_fcSlots[slotIdx]) {
    // Sem palavra selecionada: clique no slot devolve ao banco
    _fcSlots[slotIdx] = null;
    _renderFlashcard();
  }
}

// ── Verificação ──────────────────────────────────────────────────────
function fcVerificar() {
  if (estado.respondido) return;

  const q = _fcQ;
  const totalSlots = q.slots.length;
  let acertos = 0;

  for (let s = 0; s < totalSlots; s++) {
    if (_fcSlots[s] && _fcSlots[s].toLowerCase() === q.slots[s].toLowerCase()) {
      acertos++;
    }
  }

  // Limpa banco para próxima rodada
  _fcBancoOrdem = null;
  _fcCliqueWord = null;

  if (acertos === totalSlots) {
    acertar();
  } else if (acertos >= Math.ceil(totalSlots / 2)) {
    // Metade ou mais certa: pontua parcialmente e avança
    estado.pontos += 5;
    errar();
  } else {
    errar();
  }
}

/* =====================================================================
   JOGO: QUIZ + ANAGRAMA  (pergunta aleatória + palavra para desembaralhar)
===================================================================== */
function jogoQuizAnagrama() {
  // Quiz aleatório (fila independente)
  if (_quizFila.length === 0 || _quizIdx >= _quizFila.length) {
    _quizFila = embaralhar(BANCO.quiz);
    _quizIdx  = 0;
  }
  const q  = _quizFila[_quizIdx++];
  const an = aleatorio(BANCO.anagrama);

  // Embaralha opções do quiz dentro do quiz+anagrama também
  const qaRespostaCorreta = q.opcoes[q.correta];
  const qaOpcoesEmbaralhadas = embaralhar([...q.opcoes]);
  const qaNovoIndiceCorreto = qaOpcoesEmbaralhadas.indexOf(qaRespostaCorreta);

  layout("Quiz + Anagrama", `
    <p class="text-center text-xs text-slate-400 uppercase tracking-widest mb-1">Pergunta</p>
    <p class="text-center font-semibold text-lg">${q.pergunta}</p>
    <div class="grid gap-2 mt-1">
      ${qaOpcoesEmbaralhadas.map((op, i) =>
        `<button class="btn" id="qopt-${i}" onclick="responderQuizAnagrama(${i}, ${qaNovoIndiceCorreto})">${op}</button>`
      ).join("")}
    </div>
    <hr class="border-slate-600 my-3">
    <p class="text-center text-xs text-slate-400 uppercase tracking-widest mb-1">Desembaralhe</p>
    <div class="text-3xl text-yellow-400 text-center tracking-widest font-bold py-2">${an.embaralhado}</div>
    <input id="resp" class="input mb-2" placeholder="Sua resposta...">
    <button class="btn" onclick="checkAnagrama('${an.resposta}')">Confirmar palavra</button>
  `);
  iniciarTimer(90);
  $("resp") && $("resp").focus();
}

// Controla quantas das duas partes já foram respondidas
let _qaRespostas = 0;

// Flags separadas para cada parte do quiz+anagrama
let _qaQuizFeito     = false;
let _qaAnagramaFeito = false;

function responderQuizAnagrama(i, correta) {
  if (_qaQuizFeito) return;
  _qaQuizFeito = true;

  for (let k = 0; k < 3; k++) {
    const b = $("qopt-" + k);
    if (!b) continue;
    b.disabled = true;
    if (k === correta) b.style.background = "#22c55e";
    else if (k === i)  b.style.background = "#ef4444";
  }
  if (i === correta) estado.pontos += 10;

  _tentarFinalizarQA();
}

function checkAnagrama(resposta) {
  if (_qaAnagramaFeito) return;
  const el = $("resp");
  if (!el) return;
  const val = normalizar(el.value);
  if (!val) { alert("Digite uma resposta!"); return; }

  _qaAnagramaFeito = true;
  el.disabled = true;

  if (normalizar(resposta) === val) {
    el.style.background = "#22c55e44";
    estado.pontos += 10;
  } else {
    el.style.background = "#ef444444";
  }

  _tentarFinalizarQA();
}

function _tentarFinalizarQA() {
  if (!_qaQuizFeito || !_qaAnagramaFeito) return;

  // Ambas respondidas: avança sem chamar acertar()/errar()
  // para não sobrescrever estado.respondido nem duplicar feedback
  _qaRespostas     = 0;
  _qaQuizFeito     = false;
  _qaAnagramaFeito = false;
  _fcBancoOrdem    = null;
  _fcCliqueWord    = null;

  estado.respondido = true;
  pararTimer();

  document.querySelectorAll(".feedback").forEach(f => f.remove());
  const el = document.createElement("div");
  el.className = "feedback";
  el.style.background = "#22c55e";
  el.textContent = "✔ Concluído!";
  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
    estado.jogoAtual++;
    carregarJogo();
  }, 800);
}

/* =====================================================================
   JOGO: MEMÓRIA
===================================================================== */
let _memCartas       = [];   // [{id, par, virada, acertada}]
let _memSelecionadas = [];   // índices das cartas viradas aguardando comparação
let _memAcertos      = 0;
let _memBloqueado    = false;

const _memPares = [
  { par: 0, texto: "FÉ",       emoji: "🙏" },
  { par: 1, texto: "GRAÇA",    emoji: "✨" },
  { par: 2, texto: "CRUZ",     emoji: "✝️"  },
  { par: 3, texto: "JESUS",    emoji: "👑" },
  { par: 4, texto: "AMOR",     emoji: "❤️"  },
  { par: 5, texto: "DEUS",     emoji: "☁️"  }
];

function jogoMemoria() {
  _memAcertos      = 0;
  _memSelecionadas = [];
  _memBloqueado    = false;

  // Cria pares: cada item aparece 2 vezes (texto + emoji)
  const pares = embaralhar(_memPares).slice(0, 6);
  const cartas = embaralhar([
    ...pares.map(p => ({ par: p.par, face: p.texto   })),
    ...pares.map(p => ({ par: p.par, face: p.emoji   }))
  ]);

  _memCartas = cartas.map((c, i) => ({
    id: i, par: c.par, face: c.face, virada: false, acertada: false
  }));

  _renderMemoria();
  iniciarTimer(90);
}

function _renderMemoria() {
  const grid = _memCartas.map(c => {
    let bg    = "#334155";
    let texto = "?";
    let cursor = "pointer";

    if (c.acertada) {
      bg     = "#166534";
      texto  = c.face;
      cursor = "default";
    } else if (c.virada) {
      bg    = "#1e40af";
      texto = c.face;
    }

    return `<div id="mc-${c.id}"
      onclick="virarCarta(${c.id})"
      style="
        background:${bg};
        border-radius:10px;
        height:64px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:1.25rem;
        font-weight:bold;
        cursor:${cursor};
        transition:background .25s;
        user-select:none;
        border: 2px solid #475569;
      ">${texto}</div>`;
  }).join("");

  layout("Memória", `
    <p class="text-center font-semibold mb-2">Encontre os pares!</p>
    <p class="text-center text-sm text-slate-400 mb-3">
      Acertos: <span id="mem-acertos">${_memAcertos}</span> / ${_memCartas.length / 2}
    </p>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
      ${grid}
    </div>
  `);
}

function virarCarta(id) {
  if (estado.respondido) return;
  if (_memBloqueado) return;

  const carta = _memCartas[id];
  if (!carta || carta.virada || carta.acertada) return;

  carta.virada = true;
  _memSelecionadas.push(id);
  _atualizarCartaUI(id);

  if (_memSelecionadas.length < 2) return;

  // Duas cartas viradas — compara
  _memBloqueado = true;
  const [idA, idB] = _memSelecionadas;
  _memSelecionadas = [];

  const cA = _memCartas[idA];
  const cB = _memCartas[idB];

  if (cA.par === cB.par) {
    // Par encontrado!
    cA.acertada = true;
    cB.acertada = true;
    _memAcertos++;
    const span = document.getElementById("mem-acertos");
    if (span) span.textContent = _memAcertos;
    _atualizarCartaUI(idA);
    _atualizarCartaUI(idB);
    _memBloqueado = false;

    if (_memAcertos === _memCartas.length / 2) acertar();
  } else {
    // Par errado: vira de volta após 800ms
    setTimeout(() => {
      cA.virada = false;
      cB.virada = false;
      _atualizarCartaUI(idA);
      _atualizarCartaUI(idB);
      _memBloqueado = false;
    }, 800);
  }
}

function _atualizarCartaUI(id) {
  const el = document.getElementById("mc-" + id);
  if (!el) return;
  const c = _memCartas[id];

  if (c.acertada) {
    el.style.background = "#166534";
    el.textContent      = c.face;
    el.style.cursor     = "default";
  } else if (c.virada) {
    el.style.background = "#1e40af";
    el.textContent      = c.face;
  } else {
    el.style.background = "#334155";
    el.textContent      = "?";
  }
}

/* =====================================================================
   JOGO: PALAVRAS CRUZADAS
   Grade fixa 13×13. Cada palavra é inserida na posição hardcoded.
   O jogador clica numa célula, digita a letra e navega.
===================================================================== */

/*
  GRADE (13 colunas × 13 linhas), palavras e posições:

  #  PALAVRA       DIR   LIN  COL  DICA
  1  JESUS         H      0    0   "Filho de Deus"
  2  GRACA         H      2    0   "Favor imerecido"
  3  SALVACAO      H      4    0   "Dom de Deus ao homem"
  4  AMOR          H      6    0   "Sentimento divino"
  5  VERDADE       H      8    0   "O que liberta"
  6  REINO         H     10    0   "Lugar de Deus"
  7  DEUS          V      0    0   "Criador de tudo"       (D-lin0,E-lin1,U-lin2,S-lin3)
  8  FORCA         V      0    4   "Poder de Deus"
  9  ALMA          V      0    6   "Parte espiritual"
  10 CRUZ          V      0    8   "Instrumento de redenção"
  11 PECADO        V      4    2   "Transgressão da Lei"
*/

const _PC_PALAVRAS = [
  { id: 1,  palavra: "JESUS",    dir: "H", lin: 0,  col: 0, dica: "Filho de Deus"          },
  { id: 2,  palavra: "GRACA",    dir: "H", lin: 2,  col: 0, dica: "Favor imerecido"         },
  { id: 3,  palavra: "SALVACAO", dir: "H", lin: 4,  col: 0, dica: "Dom de Deus ao homem"    },
  { id: 4,  palavra: "AMOR",     dir: "H", lin: 6,  col: 0, dica: "Sentimento divino"        },
  { id: 5,  palavra: "VERDADE",  dir: "H", lin: 8,  col: 0, dica: "O que liberta"            },
  { id: 6,  palavra: "REINO",    dir: "H", lin: 10, col: 0, dica: "Lugar de Deus"            },
  { id: 7,  palavra: "DEUS",     dir: "V", lin: 0,  col: 0, dica: "Criador de tudo"          },
  { id: 8,  palavra: "GRACA",    dir: "V", lin: 0,  col: 4, dica: "Poder e favor"            },
  { id: 9,  palavra: "ALMA",     dir: "V", lin: 0,  col: 6, dica: "Parte espiritual"         },
  { id: 10, palavra: "CRUZ",     dir: "V", lin: 0,  col: 8, dica: "Instrumento de redenção"  },
  { id: 11, palavra: "PECADO",   dir: "V", lin: 4,  col: 2, dica: "Transgressão da Lei"      }
];

const _PC_LINHAS = 12;
const _PC_COLUNAS = 9;

// célula: { letra, editavel, numeroInicio }
let _pcGrade    = [];   // _pcGrade[lin][col]
let _pcRespostas = {};  // _pcRespostas[lin][col] = letra digitada pelo jogador
let _pcAtiva    = null; // { lin, col }
let _pcPalavraAtiva = null; // id da palavra clicada

function _pcConstruirGrade() {
  // Inicializa grade vazia
  _pcGrade = [];
  for (let l = 0; l < _PC_LINHAS; l++) {
    _pcGrade[l] = [];
    for (let c = 0; c < _PC_COLUNAS; c++) {
      _pcGrade[l][c] = { letra: null, editavel: false, num: null };
    }
  }

  // Preenche com as palavras
  _PC_PALAVRAS.forEach(p => {
    const letras = p.palavra.split("");
    letras.forEach((lt, i) => {
      const l = p.dir === "H" ? p.lin : p.lin + i;
      const c = p.dir === "H" ? p.col + i : p.col;
      if (l < _PC_LINHAS && c < _PC_COLUNAS) {
        _pcGrade[l][c].letra    = lt;
        _pcGrade[l][c].editavel = true;
      }
    });
    // Número na primeira célula
    const fl = p.dir === "H" ? p.lin : p.lin;
    const fc = p.dir === "H" ? p.col : p.col;
    if (!_pcGrade[fl][fc].num) _pcGrade[fl][fc].num = p.id;
  });

  // Inicializa respostas
  _pcRespostas = {};
  for (let l = 0; l < _PC_LINHAS; l++) {
    _pcRespostas[l] = {};
    for (let c = 0; c < _PC_COLUNAS; c++) {
      _pcRespostas[l][c] = "";
    }
  }
}

function jogoPalavrasCruzadas() {
  _pcConstruirGrade();
  _pcAtiva        = null;
  _pcPalavraAtiva = null;
  _renderPC();
  iniciarTimer(180);
}

function _pcCelulasDaPalavra(pw) {
  const cells = [];
  for (let i = 0; i < pw.palavra.length; i++) {
    const l = pw.dir === "H" ? pw.lin : pw.lin + i;
    const c = pw.dir === "H" ? pw.col + i : pw.col;
    cells.push({ l, c });
  }
  return cells;
}

function _pcPalavrasDaCelula(lin, col) {
  return _PC_PALAVRAS.filter(pw => {
    return _pcCelulasDaPalavra(pw).some(cl => cl.l === lin && cl.c === col);
  });
}

function _renderPC() {
  // Monta dicas horizontais e verticais
  const dicasH = _PC_PALAVRAS.filter(p => p.dir === "H")
    .map(p => `<li><b>${p.id}→</b> ${p.dica}</li>`).join("");
  const dicasV = _PC_PALAVRAS.filter(p => p.dir === "V")
    .map(p => `<li><b>${p.id}↓</b> ${p.dica}</li>`).join("");

  // Monta grade HTML
  let gridHtml = `<table id="pc-table" style="border-collapse:collapse;margin:0 auto">`;
  for (let l = 0; l < _PC_LINHAS; l++) {
    gridHtml += "<tr>";
    for (let c = 0; c < _PC_COLUNAS; c++) {
      const cel = _pcGrade[l][c];
      if (!cel.editavel) {
        gridHtml += `<td style="width:30px;height:30px;background:#0f172a"></td>`;
        continue;
      }

      const resp    = _pcRespostas[l][c] || "";
      const correta = cel.letra === resp;
      const isAtiva = _pcAtiva && _pcAtiva.l === l && _pcAtiva.c === c;

      // cor de fundo
      let bg = "#1e293b";
      if (resp && correta)    bg = "#14532d";
      else if (resp && !correta) bg = "#7f1d1d";
      if (isAtiva)            bg = "#1e40af";

      // célula da palavra ativa (highlight)
      if (_pcPalavraAtiva) {
        const pw = _PC_PALAVRAS.find(p => p.id === _pcPalavraAtiva);
        if (pw && _pcCelulasDaPalavra(pw).some(cl => cl.l === l && cl.c === c)) {
          if (!isAtiva) bg = "#1e3a5f";
        }
      }

      const num = cel.num
        ? `<span style="position:absolute;top:1px;left:2px;font-size:8px;color:#94a3b8;line-height:1">${cel.num}</span>`
        : "";

      gridHtml += `
        <td onclick="pcClicarCelula(${l},${c})"
            style="width:30px;height:30px;background:${bg};
                   border:1px solid #334155;cursor:pointer;
                   position:relative;text-align:center;
                   font-weight:bold;font-size:.9rem;color:white;
                   user-select:none">
          ${num}${resp}
        </td>`;
    }
    gridHtml += "</tr>";
  }
  gridHtml += "</table>";

  // Input de digitação oculto (captura teclado)
  const dicaAtual = _pcPalavraAtiva
    ? (() => {
        const pw = _PC_PALAVRAS.find(p => p.id === _pcPalavraAtiva);
        return pw ? `<p class="text-center text-blue-300 text-sm mt-2 font-semibold">
          ${pw.id}${pw.dir === "H" ? "→" : "↓"} ${pw.dica}</p>` : "";
      })()
    : `<p class="text-center text-slate-400 text-sm mt-2">Clique numa célula para começar</p>`;

  layout("Palavras Cruzadas", `
    <div style="overflow-x:auto">${gridHtml}</div>
    ${dicaAtual}
    <input id="pc-input" class="input mt-2"
           maxlength="1"
           placeholder="Digite uma letra..."
           oninput="pcDigitar(event)"
           onkeydown="pcNavegar(event)"
           style="text-transform:uppercase;text-align:center;letter-spacing:.1em">
    <button class="btn btn-success mt-2" onclick="pcVerificar()">✔ Verificar</button>
  `);

  // Foca input se célula ativa
  if (_pcAtiva) {
    const inp = document.getElementById("pc-input");
    if (inp) { inp.value = ""; inp.focus(); }
  }
}

function pcClicarCelula(lin, col) {
  if (estado.respondido) return;
  const cel = _pcGrade[lin][col];
  if (!cel.editavel) return;

  const pws = _pcPalavrasDaCelula(lin, col);
  if (!pws.length) return;

  // Alterna entre palavras se clicar na mesma célula
  if (_pcAtiva && _pcAtiva.l === lin && _pcAtiva.c === col && pws.length > 1) {
    const idx = pws.findIndex(p => p.id === _pcPalavraAtiva);
    _pcPalavraAtiva = pws[(idx + 1) % pws.length].id;
  } else {
    _pcPalavraAtiva = pws[0].id;
  }

  _pcAtiva = { l: lin, c: col };
  _renderPC();
}

function pcDigitar(e) {
  if (estado.respondido || !_pcAtiva) return;
  const letra = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
  if (!letra) return;

  _pcRespostas[_pcAtiva.l][_pcAtiva.c] = letra;
  _pcAvancarCursor();
  _renderPC();
}

function pcNavegar(e) {
  if (!_pcAtiva) return;
  if (e.key === "Backspace") {
    e.preventDefault();
    if (_pcRespostas[_pcAtiva.l][_pcAtiva.c]) {
      _pcRespostas[_pcAtiva.l][_pcAtiva.c] = "";
    } else {
      _pcRecuarCursor();
    }
    _renderPC();
  }
}

function _pcAvancarCursor() {
  if (!_pcPalavraAtiva || !_pcAtiva) return;
  const pw     = _PC_PALAVRAS.find(p => p.id === _pcPalavraAtiva);
  if (!pw) return;
  const cells  = _pcCelulasDaPalavra(pw);
  const idx    = cells.findIndex(cl => cl.l === _pcAtiva.l && cl.c === _pcAtiva.c);
  if (idx < cells.length - 1) _pcAtiva = cells[idx + 1];
}

function _pcRecuarCursor() {
  if (!_pcPalavraAtiva || !_pcAtiva) return;
  const pw    = _PC_PALAVRAS.find(p => p.id === _pcPalavraAtiva);
  if (!pw) return;
  const cells = _pcCelulasDaPalavra(pw);
  const idx   = cells.findIndex(cl => cl.l === _pcAtiva.l && cl.c === _pcAtiva.c);
  if (idx > 0) _pcAtiva = cells[idx - 1];
}

function pcVerificar() {
  if (estado.respondido) return;
  // Conta palavras completamente corretas
  let corretas = 0;
  _PC_PALAVRAS.forEach(pw => {
    const cells  = _pcCelulasDaPalavra(pw);
    const ok     = cells.every(cl => _pcRespostas[cl.l][cl.c] === _pcGrade[cl.l][cl.c].letra);
    if (ok) corretas++;
  });

  const total = _PC_PALAVRAS.length;
  if (corretas === total) {
    acertar();
  } else if (corretas >= Math.ceil(total * 0.6)) {
    // 60%+ corretas: acerta com pontuação parcial
    estado.pontos += 5;
    acertar();
  } else {
    errar();
  }
}

/* =====================================================================
   FINAL
===================================================================== */
function finalizar() {
  pararTimer();
  $("game").classList.add("hidden");
  $("final").classList.remove("hidden");
  $("resultado").textContent = `${estado.nome} — ${estado.pontos} pontos 🎉`;
  salvarRanking();
}

/* =====================================================================
   RANKING  (usa #listaRanking e #ranking do HTML original)
===================================================================== */
function salvarRanking() {
  try {
    const r = JSON.parse(localStorage.getItem("rank") || "[]");
    r.push({ nome: estado.nome, pontos: estado.pontos });
    r.sort((a, b) => b.pontos - a.pontos);
    localStorage.setItem("rank", JSON.stringify(r.slice(0, 20)));
  } catch (_) {}
}

function verRanking() {
  $("final").classList.add("hidden");
  $("ranking").classList.remove("hidden");

  try {
    const r = JSON.parse(localStorage.getItem("rank") || "[]");
    $("listaRanking").innerHTML = r.length
      ? r.map((p, i) =>
          `<li class="bg-slate-700 p-2 rounded flex justify-between">
             <span>${i + 1}. ${p.nome}</span>
             <span class="text-yellow-400 font-bold">${p.pontos} pts</span>
           </li>`
        ).join("")
      : `<li class="text-slate-400">Nenhum resultado ainda.</li>`;
  } catch (_) {
    $("listaRanking").innerHTML = "";
  }
}
