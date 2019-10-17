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
    saveTodos(todos)
    e.target.elements.text.value = ''
    renderTodos(todos, filters)
})

document.querySelector('#hideCompleted').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters) 
})


