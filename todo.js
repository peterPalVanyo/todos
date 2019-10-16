let todos = []
const filters = {
    searchText: '',
    hideCompleted: false
}

const body = document.querySelector('body')
const button = document.querySelector('#addTodo')
const inputFilter = document.querySelector('#inputFilter')
const todosEl = document.querySelector('#todos')

const todosJSON = localStorage.getItem('todos')
if(todosJSON != null) {
    todos = JSON.parse(todosJSON)
}


const renderTodos = function(todos, filters) {
    todosEl.innerHTML = ''
    const filteredTodos = todos.filter((todo) => {
        const searchMatched = todo.text.toLocaleLowerCase().includes(filters.searchText)
        const hideMatched = !filters.hideCompleted || !todo.completed
        return searchMatched && hideMatched
    })
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
    localStorage.setItem('todos', JSON.stringify(todos))
    e.target.elements.text.value = ''
    renderTodos(todos, filters)
})

document.querySelector('#hideCompleted').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters) 
})


