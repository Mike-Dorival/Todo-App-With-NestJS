import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodosModule } from "./todos/todos.module";

// Les modules permettent d'organiser la structure d'une app NestJS
// Chaque module comporte un controller et un service

@Module({
  imports: [TodosModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
