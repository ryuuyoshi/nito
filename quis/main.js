// 初期画面起動時
let Question = [
  ["天気予報はどれ？",
  "1.  117番",
  "2.  177番",
  "3.  118番",
  "2"],
  ["昭和64年は何日あった？",
  "1. 10日間",
  "2. そんな年はない",
  "3. 7日間",
  "3"],
  ["元々、体育の日っていつ？",
  "1. 10月15日",
  "2. 10月10日",
  "3. 9月10日",
  "2"]
  ];
  // 初期変数定義
  // 問題を表示するオブジェクトを取得する
  let Q = document.getElementById('_question');
  // 問題を表示するオブジェクトを取得する
  let A1 = document.getElementById('_ans1');
  let A2 = document.getElementById('_ans2');
  let A3 = document.getElementById('_ans3');
  // 正解数を保持する値
  let Correct = 0;
  // 現在の問題数
  let Qcnt = 0;
  // 問題を画面に表示する処理
  function Q_Set() {
  Q.textContent = Question[Qcnt][0];
  A1.textContent = Question[Qcnt][1];
  A2.textContent = Question[Qcnt][2];
  A3.textContent = Question[Qcnt][3];
  };
  // 画面に表示
  Q_Set();
  // 回答ボタンを押したときの処理
  function Answer_Check(ans) {
  if(ans == Question[Qcnt][4]) {
  alert("正解");
  Correct++;
  } else {
  alert("不正解");
  }
  Qcnt++;
  if (Qcnt == Question.length) {
  Q.textContent = "問題は以上です。正解数は" + Correct + "でした。";
  A1.textContent = "";
  A2.textContent = "";
  A3.textContent = "";
  } else {
  // 画面に表示
  Q_Set();
  }
  }

