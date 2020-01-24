import { Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from "./interfaces/todo.interface";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TodosEntity } from "./todos.entity";
import { Repository } from "typeorm";

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodosEntity)
    private todosRepository: Repository<TodosEntity>
  ) {}

  async findAll() {
    return await this.todosRepository.find();
  }

  async createTodo(data: CreateTodoDto) {
    const todosList = await this.todosRepository.create(data);
    await this.todosRepository.save(todosList);
    return todosList;
  }

  async findOne(id: string) {
    return await this.todosRepository.findOne({ where: { id } });
  }

  async updateTodo(id: string, data: Partial<CreateTodoDto>) {
    await this.todosRepository.update({ id }, data);
    return await this.todosRepository.findOne({ id });
  }

  async deleteTodo(id: string) {
    await this.todosRepository.delete({ id });
    return { deleted: true };
  }
}
