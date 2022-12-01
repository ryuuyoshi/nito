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
  "2"],
  ["[VHS」「ベータマックス」これなんの規格？",
  "1. ビデオ",
  "2. 携帯電話",
  "3. カメラ",
  "1"],
  ["当時、快適とされていたISDNの通信速度は？",
  "1. 640k/ｓ",
  "2. 64M/s",
  "3. 64k/s",
  "3"],
  ["30年前、運動中にNGとされていた事は？",
  "1. 酸素吸引",
  "2. 着替える",
  "3. 水を飲む",
  "3"],
  ["かつて額面「100兆」のお札があった国は？",
  "1. 1ドイツ",
  "2. ジンバブエ",
  "3. マラウィ",
  "2"],
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

  function clock()
  {
    // 数字が 1ケタのとき、「0」を加えて 2ケタにする
    var twoDigit =function(num){
      　     var digit
           if( num < 10 )
            { digit = "0" + num; }
           else { digit = num; }
           return digit;
     }
    // 曜日を表す各文字列の配列
    var weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");
  
   // 現在日時を表すインスタンスを取得
    var now = new Date();
  
      var year = now.getFullYear();
      var month = twoDigit(now.getMonth() + 1)
      var day = twoDigit(now.getDate());
      var week = weeks[now.getDay()];
      var hour = twoDigit(now.getHours());
      var minute = twoDigit(now.getMinutes());
      var second = twoDigit(now.getSeconds());
   //　HTML: <div id="clock_date">(ココの日付文字列を書き換え)</div>
  document.getElementById("clock_date").textContent =  year + "/" + month + "/" + day + " (" + week + ")";
  
  //　HTML: <div id="clock_time">(ココの時刻文字列を書き換え)</div>
  document.getElementById("clock_time").textContent = hour + ":" + minute + ":" + second;
  
  }
  // 上記のclock関数を1000ミリ秒ごと(毎秒)に実行
  setInterval(clock, 1000);