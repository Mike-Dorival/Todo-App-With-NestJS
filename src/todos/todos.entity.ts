import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("todos")
export class TodosEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("text") title: string;

  @Column("text") description: string;

  @Column() done: boolean;
}
