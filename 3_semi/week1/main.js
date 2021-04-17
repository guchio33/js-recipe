const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const button3=document.getElementById("button3")
const display=document.getElementById("display")

button1.onclick=function(){
    display.textContent="残念！　押したのはくさタイプのフシギダネでした・・・"
}
button2.onclick=function(){
    display.textContent="惜しいです！！！！！　尻尾がありますが、ヒトカゲではありません・・・"
}
button3.onclick=function(){
    display.textContent="正解です。"
}

