let input=document.getElementById('input')
let addButton=document.getElementById('button')
let todoList = document.getElementById('todolist')

let storage=[]
addButton.onclick=click

function click(){
    storage.push(input.value)
    console.log(storage)
    input.value=''
    showTodos()
}

    
    function showTodos(){
        todoList.innerHTML=''
        storage.forEach(function(todo,index){
            todoList.innerHTML +=
            "<li>"
                +todo+
                "<a onclick='edithandle("+index+")'>Edit</a>"+
                "<a onclick='deletehandle("+index+")'>&times</a>"+
            "</li>"
     })

}

function edithandle(index){
    let newValue=prompt("Enter new Todo")
    if (newValue.length>0){
    storage.splice(index,1,newValue)
    showTodos()}
}

function deletehandle(index){
    storage.splice(index,1)
    showTodos()

}



