const todos = [{
    text: "Do the shopping",
    completed: false
},  {
    text: "Fix the kitchen furniture",
    completed: true
},  {
    text: "Complete the code",
    completed: false
},  {
    text: "Walk with the dog",
    completed: false
},  {
    text: "Feed the cat",
    completed: true
},  {
    text: "Meeting with Samantha Fox",
    completed: false
}]
const filters = {
    searchText: ''
}

const body = document.querySelector('body')
const button = document.querySelector('#addTodo')
const inputFilter = document.querySelector('#inputFilter')
const todosEl = document.querySelector('#todos')


const renderTodos = function(todos, filters) {
    let filteredTodos = todos.filter((todo) => todo.text.toLocaleLowerCase().includes(filters.searchText))
    filteredTodos.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        todosEl.appendChild(p)
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    
    const h2 = document.createElement('h2')
    h2.textContent = `You have ${incompleteTodos.length} todos left`
    todosEl.appendChild(h2)
}

renderTodos(todos, filters)

inputFilter.addEventListener('input', function(e) {
    filters.searchText = e.target.value.toLowerCase()
    //clear the div
    todosEl.innerHTML = ''
    renderTodos(todos, filters)
})

//click
button.addEventListener('click', function(){
    console.log('hello')
})




/* todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    body.appendChild(p)
}) */




/* const deleteTodo = function(todos, todo) {
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
} */

/* 
todos.forEach(function(note, index) {
    console.log(`${index+1}. ${note}!`)
}) */



