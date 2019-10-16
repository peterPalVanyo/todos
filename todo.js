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
    todosEl.innerHTML = ''
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
    renderTodos(todos, filters)
})


button.addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    e.target.elements.text.value = ''
    renderTodos(todos, filters)
})


