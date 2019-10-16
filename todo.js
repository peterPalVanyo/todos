const todos = [{
    text: "Do the shopping",
    completed: false
},  {
    text: "Fix the kitchen furniture",
    completed: false
},  {
    text: "Complete the code",
    completed: true
}]

const deleteTodo = function(todos, todo) {
    const index = todos.findIndex(function (item, index) {
        return item.text.toLowerCase() === todo.toLowerCase()
    })
    if(index != -1) todos.splice(index, 1)
}
/* 
todos.forEach(function(note, index) {
    console.log(`${index+1}. ${note}!`)
}) */
console.log(todos)
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>")
deleteTodo(todos, 'do the shopping')
console.log(todos)
