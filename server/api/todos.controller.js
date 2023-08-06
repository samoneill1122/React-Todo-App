import TodosDAO from "../dao/todosDAO.js";

export default class TodosController {
  static async apiGetTodos(req, res, next) {
    const { todosList } = await TodosDAO.getTodos();

    let response = {
      todos: todosList,
    };
    res.json(response);
  }
}
