const inputElement=document.getElementById("input-todo")
const addButton=document.getElementById("add-button")
const container=document.getElementById("input-todo")

addButton.onclick=function(){
    const text=inputElement.value
}

const card=document.createElement("div")
card.className="card"

const todo=document.createElement("todo")
todo.className="todo"
todo.textContent=text

card.append(todo)
container.append(card)

inputElement.value=" "

const deleteButton =document.createElement("div")
deleteButton.className="delete"

card.append("deleteButton")

deleteButton.onclick=function(){
    card.remove()
}