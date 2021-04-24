const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

//追加ボタンを押した時の処理を登録
addButton.onclick=function(){
    const card=creatCard(inputElement.value)
    container.append(card)

    inputElement.value=" "
}

//createcard関数＝テキストからカードの作成
const createCard=function(text){
    const card=document.createElemen("div")
    card.className="card"

    const todo=document.createElement("div")
    todo.className="todo"
    todo.textContent=text
    card.append(todo)

    const deleteButton =document.createElement("div")
    deleteButton.className="delete"

    deleteButton.onclick=function(){
        card.remove()
    }
    card.append(deletedButton)

    return card
}