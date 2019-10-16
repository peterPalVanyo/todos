const todos = [{
    text: "Do the shopping",
    completed: false
},  {
    text: "Fix the kitchen furniture",
    completed: true
},  {
    text: "Complete the code",
    completed: false
}]

const deleteTodo = function(todos, todo) {
    const index = todos.findIndex(function (item, index) {
        return item.text.toLowerCase() === todo.toLowerCase()
    })
    if(index != -1) todos.splice(index, 1)
}

const getThingsTodo = function(todos) {
    return todos.filter(function(todo) {
        return !todo.completed
    })
}

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        //or !a.completed && b.completed
        if(a.completed < b.completed) {
            return -1
        } else if(a.completed > b.completed) {
            return 1
        } else {return 0}
    })
}

const thingsTodo = getThingsTodo(todos, true)

sortTodos(todos)
console.log(todos)


/* 
todos.forEach(function(note, index) {
    console.log(`${index+1}. ${note}!`)
}) */



