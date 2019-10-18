const getSavedTodos =  () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []        
    }
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const renderTodos = (todos, filters) => {
    todosEl.innerHTML = ''
    const filteredTodos = todos.filter((todo) => {
        const searchMatched = todo.text.toLocaleLowerCase().includes(filters.searchText)
        const hideMatched = !filters.hideCompleted || !todo.completed
        return searchMatched && hideMatched
    })
    filteredTodos.forEach((todo) => {
        todosEl.appendChild(generateTodoDOM(todo)) 
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    
    todosEl.appendChild(generateSummaryDOM(incompleteTodos))

}

const generateTodoDOM = (todo) => {
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
    checkbox.checked = todo.completed
    checkbox.addEventListener('change', function() {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    todoText.textContent = todo.text
    todoEl.appendChild(checkbox)
    todoEl.appendChild(todoText)
    todoEl.appendChild(removeButton)
    return todoEl
}

const generateSummaryDOM = (todos) => {
    const h2 = document.createElement('h2')
    h2.textContent = `You have ${todos.length} todos left`
    todosEl.appendChild(h2)
    return h2
}

const removeTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id)
}

const toggleTodo = function(id) {
    const todo = todos.find((todo) => todo.id === id)
    if(todo) todo.completed = !todo.completed
    console.log(todo)
}