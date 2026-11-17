const cases = [
  {
    title:"La canción del anuncio", category:"DERECHOS DE AUTOR", name:"Una canción", symbol:"♫",
    question:"¿Qué debes investigar antes de usar esta canción en un anuncio?",
    scenario:"Valentina encuentra una canción en Internet y quiere utilizarla como música de fondo para un anuncio de su emprendimiento. La canción fue creada por otra persona.",
    answers:["Si la canción tiene derechos de autor y qué permisos o licencia necesita","Si la canción tiene una marca registrada","Si puede patentar la melodía","Si basta con mencionar el nombre del cantante"],
    correct:0,
    explanation:"Las canciones pueden estar protegidas por derechos de autor. Para utilizarlas en publicidad normalmente se necesitan las autorizaciones o licencias correspondientes. Dar crédito no reemplaza automáticamente el permiso."
  },
  {
    title:"El logo de la cafetería", category:"MARCAS", name:"Un logotipo", symbol:"✳",
    question:"¿Qué herramienta permite identificar la cafetería y distinguirla de otras?",
    scenario:"Andrés abre una cafetería y crea un nombre y un símbolo propios. Quiere evitar que otros negocios utilicen un signo igual o confundible para productos o servicios relacionados.",
    answers:["Una patente","Una marca","Un secreto empresarial","Un derecho de obtentor"],
    correct:1,
    explanation:"La marca sirve para distinguir productos o servicios en el mercado. En Colombia, el registro de marcas se tramita ante la Superintendencia de Industria y Comercio (SIC)."
  },
  {
    title:"El invento de Camila", category:"PATENTES", name:"Un dispositivo", symbol:"⚙",
    question:"¿Qué tipo de protección podría solicitar para su solución técnica?",
    scenario:"Camila desarrolla un mecanismo nuevo que permite ahorrar energía en una máquina. La solución es técnica y podría cumplir los requisitos legales de patentabilidad.",
    answers:["Derechos de autor","Una marca","Una patente","Un nombre comercial"],
    correct:2,
    explanation:"Una patente puede proteger una invención que cumpla requisitos como novedad, nivel inventivo y aplicación industrial. No toda idea o creación obtiene una patente."
  },
  {
    title:"La fotografía compartida", category:"DERECHOS DE AUTOR", name:"Una fotografía", symbol:"▧",
    question:"¿Puede una tienda descargar la foto y usarla en su publicidad solo porque está en Internet?",
    scenario:"Una fotógrafa publica una imagen en una red social. Una tienda la descarga y la coloca en un anuncio comercial sin preguntarle ni revisar las condiciones de uso.",
    answers:["Sí, porque todo lo que está en Internet es libre","Sí, si recorta la fotografía","No necesariamente; debe revisar permisos, licencia y excepciones aplicables","Sí, si no menciona a la fotógrafa"],
    correct:2,
    explanation:"Que una obra esté disponible en Internet no significa que sea de libre utilización. Hay que revisar la licencia, obtener autorización cuando corresponda o comprobar si aplica una excepción legal."
  },
  {
    title:"El nombre parecido", category:"MARCAS", name:"Nombre comercial", symbol:"Aa",
    question:"¿Qué riesgo enfrenta el nuevo negocio?",
    scenario:"Una persona abre una tienda de ropa llamada 'Nikey Sport' y utiliza letras y elementos visuales muy parecidos a los de una marca deportiva conocida. Quiere atraer a los mismos compradores.",
    answers:["Ninguno, porque cambió una letra","Puede generar confusión o asociación con una marca ajena","Está creando automáticamente una patente","Solo hay un problema si copia también los productos"],
    correct:1,
    explanation:"Los signos idénticos o semejantes pueden generar riesgo de confusión o asociación, según los productos, servicios y circunstancias. Cambiar una letra no elimina necesariamente el problema."
  },
  {
    title:"El cuento de Daniela", category:"DERECHOS DE AUTOR", name:"Un cuento", symbol:"✎",
    question:"¿Qué protege principalmente el derecho de autor en este caso?",
    scenario:"Daniela escribe un cuento original y lo guarda en su computador. Antes de publicarlo, descubre que alguien copió el texto completo y lo publicó con otro nombre.",
    answers:["La idea general de escribir sobre dragones","La expresión original del cuento","El género de fantasía para que nadie más lo use","Todas las historias que tengan dragones"],
    correct:1,
    explanation:"El derecho de autor protege la forma original en que se expresa una creación, como el texto concreto del cuento. No monopoliza las ideas, temas o géneros en abstracto."
  },
  {
    title:"El diseño de la botella", category:"DISEÑOS INDUSTRIALES", name:"Diseño de producto", symbol:"◇",
    question:"¿Qué figura puede proteger la apariencia especial del producto?",
    scenario:"Una empresa diseña una botella con una apariencia ornamental novedosa. Su interés está en proteger la forma visual, no un mecanismo técnico interno.",
    answers:["Diseño industrial","Derecho de autor sobre una receta","Patente de marca","Secreto empresarial obligatorio"],
    correct:0,
    explanation:"El diseño industrial protege la apariencia particular de un producto, como sus líneas, contornos, forma o configuración ornamental. No protege por sí mismo la función técnica."
  },
  {
    title:"La receta secreta", category:"SECRETO EMPRESARIAL", name:"Una fórmula", symbol:"⚗",
    question:"¿Qué opción podría ayudar a proteger la fórmula que la empresa mantiene reservada?",
    scenario:"Una pequeña empresa tiene una fórmula de salsa que le da ventaja frente a sus competidores. Limita el acceso a ella y exige acuerdos de confidencialidad a quienes la conocen.",
    answers:["Publicarla para que todos la conozcan","Mantenerla como secreto empresarial y adoptar medidas razonables de reserva","Registrarla como canción","Convertirla automáticamente en una patente"],
    correct:1,
    explanation:"La información empresarial puede protegerse como secreto empresarial si cumple los requisitos legales, entre ellos ser secreta, tener valor comercial por serlo y estar sujeta a medidas razonables para mantenerla reservada."
  },
  {
    title:"El libro comprado", category:"DERECHOS DE AUTOR", name:"Un libro", symbol:"▤",
    question:"¿Comprar un ejemplar significa adquirir los derechos de autor del libro?",
    scenario:"Mateo compra una novela en una librería. Después afirma que, por ser dueño del ejemplar físico, también puede imprimir cientos de copias y venderlas.",
    answers:["Sí, porque pagó por el libro","No; ser dueño del ejemplar no equivale a ser titular de los derechos de autor","Sí, pero solo si cambia la portada","Sí, si imprime en blanco y negro"],
    correct:1,
    explanation:"Comprar un ejemplar normalmente transfiere la propiedad de ese objeto físico, no los derechos de reproducción, distribución u otros derechos de autor sobre la obra."
  },
  {
    title:"El personaje original", category:"DERECHOS DE AUTOR", name:"Un personaje", symbol:"♙",
    question:"¿Qué debería hacer el ilustrador si descubre que copiaron su dibujo?",
    scenario:"Luis crea e ilustra un personaje original para un cómic. Otra cuenta publica el mismo dibujo, sin autorización, y afirma que lo creó.",
    answers:["Aceptar la copia porque el dibujo estaba en redes","Reunir pruebas de autoría y considerar las vías de protección disponibles","Registrar el personaje como patente","Cambiar el color y asumir que deja de ser su obra"],
    correct:1,
    explanation:"Una ilustración original puede estar protegida por derecho de autor desde su creación. Conservar bocetos, archivos y fechas puede ayudar a demostrar la autoría. En Colombia, la DNDA ofrece información sobre registro de obras."
  }
];

const screens = {
  intro: document.getElementById("intro-screen"),
  game: document.getElementById("game-screen"),
  result: document.getElementById("result-screen")
};
let current = 0;
let score = 0;
let answersLog = [];

const $ = (id) => document.getElementById(id);
const showScreen = (name) => {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
};

function startGame(){
  current = 0;
  score = 0;
  answersLog = [];
  $("score").textContent = "000";
  showScreen("game");
  renderCase();
}

function renderCase(){
  const item = cases[current];
  const number = String(current + 1).padStart(2,"0");
  $("case-title").textContent = item.title;
  $("progress-text").textContent = `EXPEDIENTE ${current + 1} DE ${cases.length}`;
  $("progress-percent").textContent = `${Math.round(((current + 1) / cases.length) * 100)}%`;
  $("progress-fill").style.width = `${((current + 1) / cases.length) * 100}%`;
  $("evidence-number").textContent = `A–${number}`;
  $("evidence-art").innerHTML = `<span class="art-symbol" aria-hidden="true">${item.symbol}</span>`;
  $("evidence-name").textContent = item.name;
  $("category-tag").textContent = item.category;
  $("question").textContent = item.question;
  $("scenario").textContent = item.scenario;
  $("feedback").className = "feedback hidden";
  $("feedback").innerHTML = "";
  $("next-btn").disabled = true;
  $("next-btn").innerHTML = current === cases.length - 1 ? 'Ver informe final <span>→</span>' : 'Siguiente expediente <span>→</span>';

  const letters = ["A","B","C","D"];
  $("answers").innerHTML = "";
  item.answers.forEach((answer,index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.innerHTML = `<span class="letter">${letters[index]}.</span>${answer}`;
    button.addEventListener("click", () => selectAnswer(index));
    $("answers").appendChild(button);
  });
}

function selectAnswer(selected){
  const item = cases[current];
  const buttons = [...document.querySelectorAll(".answer-btn")];
  buttons.forEach((button,index) => {
    button.disabled = true;
    if(index === item.correct) button.classList.add("correct");
    if(index === selected && selected !== item.correct) button.classList.add("wrong");
  });
  const correct = selected === item.correct;
  if(correct){
    score += 100;
    $("score").textContent = String(score).padStart(3,"0");
  }
  answersLog.push({title:item.title, correct, selected, explanation:item.explanation});
  const feedback = $("feedback");
  feedback.className = `feedback ${correct ? "good" : "bad"}`;
  feedback.innerHTML = `<strong>${correct ? "¡Pista correcta! +100 puntos" : "Pista incorrecta. Caso aclarado."}</strong>${item.explanation}`;
  $("next-btn").disabled = false;
}

function finishGame(){
  showScreen("result");
  $("final-score").textContent = String(score).padStart(3,"0");
  const percentage = score / (cases.length * 100);
  let rank, description, message;
  if(percentage === 1){
    rank = "Detective experto";
    description = "Identificaste todas las pistas. Tienes una base excelente para seguir investigando.";
    message = "¡Caso cerrado! Tu investigación fue impecable.";
  } else if(percentage >= .7){
    rank = "Investigador destacado";
    description = "Reconoces varias formas de propiedad intelectual y sabes cuándo conviene revisar los permisos.";
    message = "Buen trabajo. Has resuelto la mayoría de los expedientes.";
  } else if(percentage >= .4){
    rank = "Detective en entrenamiento";
    description = "Ya tienes algunas pistas claras. Repasa las explicaciones para fortalecer tus conocimientos.";
    message = "La investigación avanza. Todavía hay conceptos por descubrir.";
  } else {
    rank = "Aprendiz de detective";
    description = "Todo gran investigador empieza por observar. Vuelve a jugar y presta atención a las explicaciones.";
    message = "Los expedientes eran complejos, pero ahora tienes nuevas pistas para aprender.";
  }
  $("rank-name").textContent = rank;
  $("rank-description").textContent = description;
  $("result-message").textContent = message;
  $("review-list").innerHTML = "";
  answersLog.forEach((entry,index) => {
    const row = document.createElement("div");
    row.className = "review-item";
    row.innerHTML = `<b>${String(index+1).padStart(2,"0")}. ${entry.title}</b><span class="mark ${entry.correct ? "good" : "bad"}">${entry.correct ? "✓ Correcto" : "✕ Para repasar"}</span>`;
    $("review-list").appendChild(row);
  });
}

$("start-btn").addEventListener("click", startGame);
$("next-btn").addEventListener("click", () => {
  if(current < cases.length - 1){
    current++;
    renderCase();
  } else {
    finishGame();
  }
});
$("restart-btn").addEventListener("click", startGame);
