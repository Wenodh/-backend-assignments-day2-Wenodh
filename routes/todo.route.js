const controller = require('../controllers/todo.controller');

module.exports = function (app) {
    app.get('/api/todos', controller.getAllTodo);
    app.post('/api/todos', controller.createTodo);
    app.delete('/api/todos/:id', controller.deleteTodoById);
    app.put('/api/todos/:id', controller.updateTodoById);
};
