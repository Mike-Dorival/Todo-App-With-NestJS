import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

// Le rôle d'un controller est d'ecouter une requete et retourner une réponse

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
