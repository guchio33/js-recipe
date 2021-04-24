const inputElement=document.getElementById("memo-input")
const addButton=document.getElementById("add-button")
const container=document.getElementById("memo-container")

  
  // 共通の処理：テキストからカードを作成する
  const createCard = function(text) {
    // カードの枠を作る
    const card = document.createElement("div")
    card.className = "card"
  
    // テキストを表示する部分を作る
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
    card.append(todo)
  
    return card
  }

  // 追加ボタンを押したときの処理を登録
addButton.onclick = function() {
    // カードを作成する
    const card = createCard(inputElement.value)
    container.append(card)
  
    // 入力欄を空にする
    inputElement.value = ""
  }








