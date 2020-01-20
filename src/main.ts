import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// Mon endpoint equivalent d'un index.js dans express
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
