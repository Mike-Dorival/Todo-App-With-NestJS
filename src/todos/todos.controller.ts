import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete
} from "@nestjs/common";
import { TodosService } from "./todos.service";
import { Todo } from "./interfaces/todo.interface";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller("todos") // c'est ici qu'on définit la route ex : http://localhost:3000/todos
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.todosService.findOne(id);
  }

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  // Le décorator @Body sert à récupérer le body de la requete
  createTodo(@Body() newTodo: CreateTodoDto) {
    return this.todosService.create(newTodo);
  }

  @Patch(":id") // Patch est l'équivalent d'un update ou PUT sur NestJS
  updateTodo(@Param("id") id: string, @Body() todo: CreateTodoDto) {
    return this.todosService.update(id, todo);
  }

  @Delete(":id")
  deleteTodo(@Param("id") id: string) {
    return this.todosService.delete(id);
  }
}
