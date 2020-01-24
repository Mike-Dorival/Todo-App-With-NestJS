import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { UserEntity } from "../user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDTO } from "../user.dto";
import { UserRO } from "../userRO.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  async showAll(): Promise<UserRO[]> {
    const usersInfos = await this.userRepository.find();
    return usersInfos.map(user => user.toResponseObject(false));
  }

  async login(data: UserDTO): Promise<UserRO> {
    const { username, password } = data;
    const user = await this.userRepository.findOne({ where: { username } });

    // si je trouve pas le user ou que le mdp ne correspond pas alors msg d'erreur
    if (!user || !user.comparePassword(password)) {
      throw new HttpException(
        "invalid username/password",
        HttpStatus.BAD_REQUEST
      );
    }

    return user.toResponseObject();
  }

  async register(data: UserDTO): Promise<UserRO> {
    const { username } = data;
    let user = await this.userRepository.findOne({ where: { username } });

    if (user) {
      throw new HttpException("user already exists", HttpStatus.BAD_REQUEST);
    }

    user = await this.userRepository.create(data);

    await this.userRepository.save(user);
    return user.toResponseObject(false);
  }
}
