let todos = getSavedTodos()
const filters = {
    searchText: '',
    hideCompleted: false
}

const body = document.querySelector('body')
const button = document.querySelector('#addTodo')
const inputFilter = document.querySelector('#inputFilter')
const todosEl = document.querySelector('#todos')


renderTodos(todos, filters)

inputFilter.addEventListener('input', (e) => {
    filters.searchText = e.target.value.toLowerCase()
    renderTodos(todos, filters)
})


button.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTodoText = e.target.elements.text.value.trim()
    if (newTodoText.length) {
        todos.push({
            id: uuidv4(),
            text: newTodoText,
            completed: false
        })
    }
    saveTodos(todos)
    e.target.elements.text.value = ''
    renderTodos(todos, filters)
})

document.querySelector('#hideCompleted').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters) 
})


