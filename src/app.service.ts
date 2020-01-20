import { Injectable } from "@nestjs/common";

// Le but d'un service est de fournir les fonctionalités à notre controller (srp : single responsibility principle)
@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
