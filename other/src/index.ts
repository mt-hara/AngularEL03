import { Entity, PrimaryColumn, Column, createConnection, Connection, Repository } from "typeorm";
import { DB_PATH } from "./dbconfig";
@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}

let connection: Connection;

export async function getUserRepository(): Promise<Repository<User>> {
  if (connection === undefined) {
    connection = await createConnection({
      type: "sqlite",
      // database:"\\\\192.168.10.3/グローバル調達g/97.ACCESS/sqlite3db/testdb2.sqlite",
      // database:"\\\\192.168.24.1\\group\\グローバル調達G\\99.database\\testdb2.sqlite",
      database: DB_PATH,
      synchronize: true,
      entities: [User],
    });
  }
  return connection.getRepository(User);
}
