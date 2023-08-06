import TodosDAO from "../dao/todosDAO.js";

export default class TodosController {
  static async apiGetTodos(req, res, next) {
    const { todosList, totalNumTodos } = await TodosDAO.getTodos();

    let response = {
      count: totalNumTodos,
      results: todosList,
    };
    res.json(response);
  }
}
