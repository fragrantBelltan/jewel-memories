const questions = [
  {
    question: "今のあなたに近いものは？",
    answers: [
      { text: "失敗を恐れず、まず動いてみたい", type: "onyx" },
      { text: "今を大切にして、未来へ繋げたい", type: "emerald" },
      { text: "感じたことを、現実の中で形にしたい", type: "amethyst" },
      { text: "自分の価値観を責めずに守りたい", type: "diamond" }
    ]
  },
  {
    question: "今、心に残る言葉は？",
    answers: [
      { text: "挑戦する一歩", type: "onyx" },
      { text: "今から架ける橋", type: "emerald" },
      { text: "直感の再構築", type: "amethyst" },
      { text: "透明な境界線", type: "diamond" }
    ]
  },
  {
    question: "最後に、手に取りたい光は？",
    answers: [
      { text: "夜の中でも燃える、紫の光", type: "onyx" },
      { text: "未来へ芽吹いていく、緑の光", type: "emerald" },
      { text: "深い静けさの中で瞬く、紫の光", type: "amethyst" },
      { text: "濁らず澄んだ、白い光", type: "diamond" }
    ]
  }
];

const results = {
  onyx: {
    word: "成功",
    name: "オニキス",
    image: "assets/images/characters/onyx.png",
    goodsUrl: "https://suzuri.jp/Sumine_Belltan/18676031/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share",
    message: "本物の「成功」は、<br>「失敗」を経験してはじめて見えてくるもの。<br><br>失敗を恐れず、<br>チャレンジする気持ちを忘れずに進んでいけば、<br>物事はいずれ、あなたらしい形で達成されていきます。<br><br>まずはやってみること。<br><br>その一歩が、<br>あなたらしさを掴むきっかけになるでしょう。"
  },
  emerald: {
    word: "希望",
    name: "エメラルド",
    image: "assets/images/characters/emerald.png",
    goodsUrl: "https://suzuri.jp/Sumine_Belltan/20059319/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share",
    message: "「希望」と「期待」は、<br>とてもよく似ています。<br><br>けれど希望とは、<br>未来の幸せを先取りすることではありません。<br><br>今この瞬間を使って、<br>未来へ繋がるビジョンを<br>少しずつ形にしていくこと。<br><br>今がなければ、<br>未来はありません。<br><br>現在で得られる小さな幸せを<br>ひとつずつ実感し続けるからこそ、<br>希望へ続く橋を架けることができます。<br><br>希望とは、<br>今を作る先に<br>結果として生まれる夢なのです。"
  },
  amethyst: {
    word: "直感",
    name: "アメジスト",
    image: "assets/images/characters/amethyst.png",
    goodsUrl: "https://suzuri.jp/Sumine_Belltan/20059337/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share",
    message: "「直感」とは、<br>現実を飛び越えて答えを知る力ではありません。<br><br>心が感じ取ったものを、<br>今ある現実と照らし合わせながら、<br>自分の中で再構築していく感覚です。<br><br>感じたままに進むだけでは、<br>足元を見失ってしまうことがあります。<br><br>けれど現実だけを見つめすぎれば、<br>心が本当に望んでいる道を<br>見逃してしまうこともあるでしょう。<br><br>大切なのは、<br>直感をそのまま答えにすることではなく、<br>現実の中で扱える形へと整えていくこと。<br><br>あなたの直感は、<br>逃げ道ではなく、<br>進む道を作るための光なのです。"
  },
  diamond: {
    word: "純潔",
    name: "ダイヤモンド",
    image: "assets/images/characters/diamond.png",
    goodsUrl: "https://suzuri.jp/Sumine_Belltan/18686423/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share",
    message: "人は時に、<br>他人との心の境界線に恐れを抱きます。<br><br>誰かが気にしないことを、<br>あなたは気にしてしまうかもしれない。<br><br>けれど、その「純潔」を責める必要はありません。<br><br>潔癖とは、<br>他人と分かり合えないことではなく、<br>自分らしさと他人の価値観を<br>しっかり区別できる感覚でもあります。<br><br>自分は自分の意思を持ち、<br>他人は他人の意思を持つ。<br><br>それを認められた時、<br>お互いを否定せずにいられる心が<br>少しずつ育っていきます。<br><br>あなたは、あなたのままでいい。<br><br>大切なのは、<br>その透明な価値観との付き合い方を<br>少しずつ覚えていくことです。"
  }
};

let currentQuestion = 0;
let scores = {};

const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const resultScreen = document.getElementById("resultScreen");
const questionCount = document.getElementById("questionCount");
const questionTitle = document.getElementById("questionTitle");
const answers = document.getElementById("answers");

document.getElementById("startButton").addEventListener("click", startQuiz);
document.getElementById("resetButton").addEventListener("click", resetQuiz);

function startQuiz() {
  currentQuestion = 0;
  scores = { onyx: 0, emerald: 0, amethyst: 0, diamond: 0 };
  resultScreen.classList.remove("result-animate", "result-prep");
  showScreen(questionScreen);
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionCount.textContent = `QUESTION ${currentQuestion + 1} / ${questions.length}`;
  questionTitle.textContent = q.question;
  answers.innerHTML = "";

  q.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer.text;
    button.addEventListener("click", () => selectAnswer(answer.type));
    answers.appendChild(button);
  });
}

function selectAnswer(type) {
  scores[type] += 1;
  currentQuestion += 1;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function decideResult() {
  const priority = ["onyx", "emerald", "amethyst", "diamond"];
  return priority.reduce((best, key) => {
    if (scores[key] > scores[best]) return key;
    return best;
  }, priority[0]);
}

function showResult() {
  const type = decideResult();
  const data = results[type];

  resultScreen.classList.remove("result-animate");
  resultScreen.classList.add("result-prep");

  document.getElementById("resultWord").textContent = data.word;
  document.getElementById("resultImage").src = data.image;
  document.getElementById("resultImage").alt = data.name;
  document.getElementById("resultName").textContent = data.name;
  document.getElementById("resultMessage").innerHTML = data.message;

  const goodsButton = document.getElementById("goodsButton");
  goodsButton.href = data.goodsUrl;
  goodsButton.textContent = "この言葉のグッズを見る";

  renderOthers();
  showScreen(resultScreen);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      resultScreen.classList.remove("result-prep");
      resultScreen.classList.add("result-animate");
    });
  });
}

function renderOthers() {
  const otherList = document.getElementById("otherList");
  otherList.innerHTML = "";

  Object.entries(results).forEach(([type, data]) => {
    const card = document.createElement("div");
    card.className = "other-card";
    card.innerHTML = `
      <img src="${data.image}" alt="${data.name}">
      <span>${data.name}</span>
    `;
    otherList.appendChild(card);
  });
}

function showScreen(screen) {
  [startScreen, questionScreen, resultScreen].forEach((s) => {
    s.classList.remove("is-active");
  });
  screen.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetQuiz() {
  resultScreen.classList.remove("result-animate", "result-prep");
  showScreen(startScreen);
}
