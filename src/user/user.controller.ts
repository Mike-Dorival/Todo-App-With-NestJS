import { Controller, Post, Get, Body } from "@nestjs/common";
import { UserService } from "./user/user.service";
import { UserDTO } from "./user.dto";

// A faire gaffe dans l'url c'est bien par ex localhost:3001/user/login et pas localhost:3001/login
@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  // ici je défini les routes approprier
  @Get("api/users")
  showAllUser() {
    return this.userService.showAll();
  }

  @Post("login")
  login(@Body() data: UserDTO) {
    return this.userService.login(data);
  }

  @Post("register")
  register(@Body() data: UserDTO) {
    return this.userService.register(data);
  }
}
