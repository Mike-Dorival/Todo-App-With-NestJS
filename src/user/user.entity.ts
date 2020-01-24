import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  BeforeInsert
} from "typeorm";

import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { UserRO } from "./userRO.dto";

// Dans l'entité c'est ici qu'on crée notre table de différent colonne

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: "text",
    unique: true
  })
  username: string;

  @Column("text")
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toResponseObject(showToken: boolean = true): UserRO {
    const { id, created, username, token } = this;
    const responseObj: any = { id, created, username };

    if (showToken) {
      responseObj.token = token;
    }

    return responseObj;
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const { id, username } = this;
    return jwt.sign({ id, username }, process.env.SECRET_TOKEN, {
      expiresIn: "1h"
    });
  }
}
