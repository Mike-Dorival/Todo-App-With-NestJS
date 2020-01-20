import { Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from "./interfaces/todo.interface";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: "Learn NestJS",
      description: "Learn NestJS with codeconcept",
      done: false
    },
    {
      id: 2,
      title: "Typescript is cool",
      description: "Typescript is the future",
      done: true
    },
    {
      id: 3,
      title: "Javascript is awesome",
      description: "Javascript is Javascript",
      done: true
    }
  ];

  findOne(id: string) {
    return this.todos.find(todo => todo.id === +id);
  }

  // Pour remplacer le any[] on créer une interface qu'on va remplacer par any[]
  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: CreateTodoDto) {
    return (this.todos = [...this.todos, todo]);
  }

  update(id: string, todo: Todo) {
    const todoToUpdate = this.todos.find(t => t.id === +id);

    if (!todoToUpdate) {
      return new NotFoundException("n'existe pas apparement");
    }

    if (todo.hasOwnProperty("done")) {
      todoToUpdate.done = todo.done;
    }

    if (todo.title) {
      todoToUpdate.title = todo.title;
    }

    if (todo.description) {
      todoToUpdate.description = todo.description;
    }

    const updatedTodos = this.todos.map(t => (t.id !== +id ? t : todoToUpdate));

    this.todos = updatedTodos;

    return { updatedTodos: 1, todo: todoToUpdate };
  }

  delete(id: string) {
    const nbOfTodosBeforeDelete = this.todos.length;
    this.todos = this.todos.filter(t => t.id !== +id);

    if (this.todos.length < nbOfTodosBeforeDelete) {
      return { deletedTodos: 1, nbTodos: this.todos.length };
    } else {
      return { deletedTodos: 0, nbTodos: this.todos.length };
    }
  }
}
