const choice1=document.getElementById("choice-1")
const choice2=document.getElementById("choice-2")
const choice3=document.getElementById("choice-3")
const feedback=document.getElementById("feedback")

const feedbacks = [
    "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    "正解！ガニメデは、木星の第三惑星だよ！",
  ]

//関数chooseの作成
const choose = function(choiceNumber) {
    feedback.textContent = feedbacks[choiceNumber]
  }
  
  //番号
  choice1.onclick = function() {
    // 0 番目の選択肢を選択
    choose(0)
  }
  choice2.onclick = function() {
    // 1 番目の選択肢を選択
    choose(1)
  }
  choice3.onclick = function() {
    // 2 番目の選択肢を選択
    choose(2)
  }
choise1.onclick=function(){
    choose("ゴリアテ")
}
choice2.onclick = function() {
    // ゼニガメを選択
    choose("ゼニガメ")
  }
  choice3.onclick = function() {
    // ガニメデを選択
    choose("ガニメデ")
  }