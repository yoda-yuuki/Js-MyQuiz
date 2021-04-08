const quiz = [
  {
    question: "Q1:依田の好きな女優は？",
    answers: ["石原さとみ", "相武紗季", "広瀬アリス", "浜辺美波"],
    correct: "相武紗季",
  },
  {
    question: "Q2:依田の嫌いな食べ物は？",
    answers: ["しいたけ", "パクチー", "納豆", "ピーマン"],
    correct: "パクチー",
  },
  {
    question: "Q3:依田の一番好きな漫画は？",
    answers: ["NARUTO", "ワンピース", "鬼滅の刃", "スラムダンク"],
    correct: "NARUTO",
  },
  {
    question: "Q4:依田の一番好きなゲームは？",
    answers: [
      "ドラクエ",
      "ファイナルファンタジー",
      "ポケモン",
      "モンスターハンター",
    ],
    correct: "ファイナルファンタジー",
  },
  {
    question: "Q5:依田の幼少期のあだ名は？",
    answers: ["よっくん", "ゆうくん", "ヨーダ", "よだっち"],
    correct: "よだっち",
  },
  {
    question: "Q6:依田の血液型は？",
    answers: ["A型", "B型", "O型", "AB型"],
    correct: "B型",
  },
  {
    question: "Q7:依田が中高所属していた部活は？",
    answers: ["テニス部", "サッカー部", "バスケ部", "帰宅部"],
    correct: "テニス部",
  },
  {
    question: "Q8:依田が一番好きなお寿司のネタは？",
    answers: ["エビ", "マグロ", "カンパチ", "サーモン"],
    correct: "エビ",
  },
  {
    question: "Q9:依田が行ったことのある国は？",
    answers: ["韓国", "オーストラリア", "ドイツ", "フランス"],
    correct: "フランス",
  },
  {
    question: "Q10:依田の座右の銘は？",
    answers: ["一期一会", "思い立ったが吉日", "有言実行", "七転び八起き"],
    correct: "七転び八起き",
  },
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById("quiz");
const $buttons = $doc.querySelectorAll(".btn");

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while (btnIndex < buttonLen) {
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if (quizCount < quizLen) {
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if (elm.textContent === quiz[quizCount].correct) {
    $window.alert("正解!");
    score++;
  } else {
    $window.alert("不正解!");
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent =
    "終了！あなたのスコアは" + score + "/" + quizLen + "です";

  const $items = $doc.getElementById("js-items");
  $items.style.visibility = "hidden";
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while (answersIndex < answersLen) {
  $buttons[answersIndex].addEventListener("click", (e) => {
    judge(e.target);
  });
  answersIndex++;
}
