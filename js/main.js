const results = {
  onyx: {
    word: "成功",
    name: "オニキス",
    image: "assets/images/characters/onyx.png",
    noteUrl: "https://note.com/fragrant_witch/n/ncf635f9f2bda",
    goodsUrl: "https://suzuri.jp/Sumine_Belltan/18676031/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share",
    message: "本物の「成功」は、<br>「失敗」を経験してはじめて見えてくるもの。<br><br>失敗を恐れず、<br>チャレンジする気持ちを忘れずに進んでいけば、<br>物事はいずれ、あなたらしい形で達成されていきます。<br><br>まずはやってみること。<br><br>その一歩が、<br>あなたらしさを掴むきっかけになるでしょう。"
  },
  emerald: {
    word: "希望",
    name: "エメラルド",
    image: "assets/images/characters/emerald.png",
    noteUrl: "",
    goodsUrl: "https://suzuri.jp/Sumine_Belltan/20059319/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share",
    message: "「希望」と「期待」は、<br>とてもよく似ています。<br><br>けれど希望とは、<br>未来の幸せを先取りすることではありません。<br><br>今この瞬間を使って、<br>未来へ繋がるビジョンを<br>少しずつ形にしていくこと。<br><br>今がなければ、<br>未来はありません。<br><br>現在で得られる小さな幸せを<br>ひとつずつ実感し続けるからこそ、<br>希望へ続く橋を架けることができます。<br><br>希望とは、<br>今を作る先に<br>結果として生まれる夢なのです。"
  },
  amethyst: {
    word: "直感",
    name: "アメジスト",
    image: "assets/images/characters/amethyst.png",
    noteUrl: "",
    goodsUrl: "https://suzuri.jp/Sumine_Belltan/20059337/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share",
    message: "「直感」とは、<br>現実を飛び越えて答えを知る力ではありません。<br><br>心が感じ取ったものを、<br>今ある現実と照らし合わせながら、<br>自分の中で再構築していく感覚です。<br><br>感じたままに進むだけでは、<br>足元を見失ってしまうことがあります。<br><br>けれど現実だけを見つめすぎれば、<br>心が本当に望んでいる道を<br>見逃してしまうこともあるでしょう。<br><br>大切なのは、<br>直感をそのまま答えにすることではなく、<br>現実の中で扱える形へと整えていくこと。<br><br>あなたの直感は、<br>逃げ道ではなく、<br>進む道を作るための光なのです。"
  },
  diamond: {
    word: "純潔",
    name: "ダイヤモンド",
    image: "assets/images/characters/diamond.png",
    noteUrl: "https://note.com/fragrant_witch/n/n4a9da13f74b2",
    goodsUrl: "https://suzuri.jp/Sumine_Belltan/18686423/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share",
    message: "人は時に、<br>他人との心の境界線に恐れを抱きます。<br><br>誰かが気にしないことを、<br>あなたは気にしてしまうかもしれない。<br><br>けれど、その「純潔」を責める必要はありません。<br><br>潔癖とは、<br>他人と分かり合えないことではなく、<br>自分らしさと他人の価値観を<br>しっかり区別できる感覚でもあります。<br><br>自分は自分の意思を持ち、<br>他人は他人の意思を持つ。<br><br>それを認められた時、<br>お互いを否定せずにいられる心が<br>少しずつ育っていきます。<br><br>あなたは、あなたのままでいい。<br><br>大切なのは、<br>その透明な価値観との付き合い方を<br>少しずつ覚えていくことです。"
  },
  lilim: {
    word: "愛情",
    name: "リリム",
    image: "assets/images/characters/lilim.png",
    noteUrl: "",
    goodsUrl: "https://suzuri.jp/Sumine_Belltan/20084759/acrylic-keychain/50x50mm/clear?utm_source=others&utm_medium=social&utm_campaign=item_detail_share",
    message: "「愛情」とは、<br>相手を思い通りにコントロールすることではありません。<br><br>好きだからこそ、<br>近づきたい。<br>分かってほしい。<br>自分だけを見てほしい。<br><br>そんな気持ちが生まれることもあるでしょう。<br><br>けれど、あなたが本当に愛しているのは、<br>目の前にいる相手でしょうか。<br><br>それとも、<br>自分の理想を被せた相手でしょうか。<br><br>愛は、相手を縛るほど強くなるものではありません。<br><br>相手の意思を認め、<br>自分の願いとも向き合えた時、<br>その想いは少しずつ、<br>支配ではなく愛情へと変わっていきます。"
  }
};

const tree = {
  start: {
    question: "今、心に一番引っかかっているのは？",
    answers: [
      { text: "過去の失敗や傷が、まだ心に残っている", next: "past" },
      { text: "今の自分の感覚や迷いを、どう扱えばいいか分からない", next: "now" },
      { text: "未来への期待や不安で、今が揺れている", next: "future" },
      { text: "誰かとの距離や愛し方で、心が揺れている", next: "relation" }
    ]
  },
  past: {
    question: "その過去に対して、今のあなたはどちらに近いですか？",
    answers: [
      { text: "失敗を越えて、もう一度進みたい", next: "past_action" },
      { text: "傷ついたことで、自分の感覚を疑っている", next: "past_sense" }
    ]
  },
  past_action: {
    question: "最後に、今のあなたへ近い言葉を選んでください。",
    answers: [
      { text: "失敗を恐れず、まず一歩踏み出したい", result: "onyx" },
      { text: "未来の結果より、今できることを積み重ねたい", result: "emerald" }
    ]
  },
  past_sense: {
    question: "最後に、今のあなたへ近い言葉を選んでください。",
    answers: [
      { text: "感じたことを、現実と照らし合わせて整えたい", result: "amethyst" },
      { text: "人と違う感覚を持つ自分を責めたくない", result: "diamond" }
    ]
  },
  now: {
    question: "その迷いは、どちらに近いですか？",
    answers: [
      { text: "現実的にどう動けばいいか迷っている", next: "now_reality" },
      { text: "自分の心が何を感じているのか分からない", next: "now_mind" }
    ]
  },
  now_reality: {
    question: "最後に、今のあなたへ近い言葉を選んでください。",
    answers: [
      { text: "まず動きながら、自分らしい形を掴みたい", result: "onyx" },
      { text: "直感をそのまま信じるのではなく、現実の中で整えたい", result: "amethyst" }
    ]
  },
  now_mind: {
    question: "最後に、今のあなたへ近い言葉を選んでください。",
    answers: [
      { text: "今の小さな幸せを感じることから始めたい", result: "emerald" },
      { text: "自分の中にある透明な価値観を責めずにいたい", result: "diamond" }
    ]
  },
  future: {
    question: "未来を思う時、どちらの揺れに近いですか？",
    answers: [
      { text: "期待しすぎて、今の自分が不安定になる", next: "future_expectation" },
      { text: "達成したい未来があるけれど、失敗が怖い", next: "future_challenge" }
    ]
  },
  future_expectation: {
    question: "最後に、今のあなたへ近い言葉を選んでください。",
    answers: [
      { text: "未来を先取りせず、今から希望を作りたい", result: "emerald" },
      { text: "自分の願いを、現実の中で扱える形に整えたい", result: "amethyst" }
    ]
  },
  future_challenge: {
    question: "最後に、今のあなたへ近い言葉を選んでください。",
    answers: [
      { text: "失敗も含めて、自分らしい成功へ進みたい", result: "onyx" },
      { text: "今できることを積み重ねて、未来へ橋を架けたい", result: "emerald" }
    ]
  },
  relation: {
    question: "その関係で苦しいのは、どちらに近いですか？",
    answers: [
      { text: "相手を思うほど、求めすぎてしまう", next: "relation_love" },
      { text: "自分と他人の価値観の違いが苦しくなる", next: "relation_boundary" }
    ]
  },
  relation_love: {
    question: "最後に、今のあなたへ近い言葉を選んでください。",
    answers: [
      { text: "好きだからこそ、相手を自分の方へ向けたくなる", result: "lilim" },
      { text: "相手の意思を認めたいのに、自分の願いも手放せない", result: "lilim" }
    ]
  },
  relation_boundary: {
    question: "最後に、今のあなたへ近い言葉を選んでください。",
    answers: [
      { text: "人と違う感覚を持つ自分を責めてしまう", result: "diamond" },
      { text: "相手に合わせようとして、自分が濁る感じがする", result: "diamond" }
    ]
  }
};

let currentNodeId = "start";
let questionStep = 1;

const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const resultScreen = document.getElementById("resultScreen");
const questionCount = document.getElementById("questionCount");
const questionTitle = document.getElementById("questionTitle");
const answers = document.getElementById("answers");

document.getElementById("startButton").addEventListener("click", startQuiz);
document.getElementById("resetButton").addEventListener("click", resetQuiz);

function startQuiz() {
  currentNodeId = "start";
  questionStep = 1;
  resultScreen.classList.remove("result-animate", "result-prep");
  showScreen(questionScreen);
  showQuestion();
}

function showQuestion() {
  const node = tree[currentNodeId];
  questionCount.textContent = `QUESTION ${questionStep} / 3`;
  questionTitle.textContent = node.question;
  answers.innerHTML = "";

  node.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer.text;
    button.addEventListener("click", () => selectAnswer(answer));
    answers.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answer.result) {
    showResult(answer.result);
    return;
  }

  currentNodeId = answer.next;
  questionStep += 1;
  showQuestion();
}

function showResult(type) {
  const data = results[type];

  resultScreen.classList.remove("result-animate");
  resultScreen.classList.add("result-prep");

  document.getElementById("resultWord").textContent = data.word;
  document.getElementById("resultImage").src = data.image;
  document.getElementById("resultImage").alt = data.name;
  document.getElementById("resultName").textContent = data.name;
  document.getElementById("resultMessage").innerHTML = data.message;

  const noteArea = document.getElementById("noteArea");
  const noteButton = document.getElementById("noteButton");

  if (data.noteUrl) {
    noteArea.classList.remove("is-hidden");
    noteButton.href = data.noteUrl;
    noteButton.textContent = "この言葉をもっと読む";
  } else {
    noteArea.classList.add("is-hidden");
    noteButton.href = "#";
  }

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
