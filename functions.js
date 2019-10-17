const getSavedTodos =  function() {
    const todosJSON = localStorage.getItem('todos')
    let todos
    if(todosJSON != null) {
        todos = JSON.parse(todosJSON)
    } else todos = []
    return todos
}

const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const renderTodos = function(todos, filters) {
    todosEl.innerHTML = ''
    const filteredTodos = todos.filter((todo) => {
        const searchMatched = todo.text.toLocaleLowerCase().includes(filters.searchText)
        const hideMatched = !filters.hideCompleted || !todo.completed
        return searchMatched && hideMatched
    })
    filteredTodos.forEach(function(todo) {
        todosEl.appendChild(generateTodoDOM(todo)) 
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    
    todosEl.appendChild(generateSummaryDOM(incompleteTodos))

}

const generateTodoDOM = function(todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    removeButton.textContent = 'x'
    removeButton.addEventListener('click', function() {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    checkbox.setAttribute('type', 'checkbox')
    todoText.textContent = todo.text
    todoEl.appendChild(checkbox)
    todoEl.appendChild(todoText)
    todoEl.appendChild(removeButton)
    return todoEl
}

const generateSummaryDOM = function(todos) {
    const h2 = document.createElement('h2')
    h2.textContent = `You have ${todos.length} todos left`
    todosEl.appendChild(h2)
    return h2
}

const removeTodo = function(id) {
    todos = todos.filter((todo) => todo.id !== id)
}