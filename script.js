// select ul and input tag
var ul=document.getElementById("list")
var input=document.getElementById("input")
function add(){
     var listitem=document.createElement("li")
    listitem.innerHTML=input.value +"<button onclick='remove(event)'>Remove</button>"
    ul.append(listitem)

}


function remove(event){

    event.target.parentElement.remove()

}