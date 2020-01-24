import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodosModule } from "./todos/todos.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";

// Les modules permettent d'organiser la structure d'une app NestJS
// Chaque module comporte un controller et un service au minimum

@Module({
  imports: [TypeOrmModule.forRoot(), TodosModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
