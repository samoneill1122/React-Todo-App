let todos;

export default class TodosDAO {
  static async injectDB(conn) {
    if (todos) {
      return;
    }
    try {
      todos = await conn.db(process.env.TODOS_NS).collection("todos");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in todosDAO: ${e}`
      );
    }
  }

  static async getTodos() {
    let cursor;

    try {
      cursor = await todos.find();
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { todosList: [], totalNumTodos: 0 };
    }

    try {
      const todosList = await cursor.toArray();
      const totalNumTodos = await todos.countDocuments();

      return { todosList, totalNumTodos };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { todosList: [], totalNumTodos: 0 };
    }
  }
}
