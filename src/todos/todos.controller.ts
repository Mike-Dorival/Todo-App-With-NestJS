import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put
} from "@nestjs/common";
import { TodosService } from "./todos.service";
import { Todo } from "./interfaces/todo.interface";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller("api/todos") // c'est ici qu'on définit la route ex : http://localhost:3000/todos
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.todosService.findOne(id);
  }

  @Post()
  // Le décorator @Body sert à récupérer le body de la requete
  createTodo(@Body() data: CreateTodoDto) {
    return this.todosService.createTodo(data);
  }

  @Put(":id")
  updateTodo(@Param("id") id: string, @Body() data: Partial<CreateTodoDto>) {
    return this.todosService.updateTodo(id, data);
  }

  @Delete(":id")
  deleteTodo(@Param("id") id: string) {
    return this.todosService.deleteTodo(id);
  }
}
