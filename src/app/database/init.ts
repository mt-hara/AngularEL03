import { createConnection, Connection, Repository } from "typeorm";
import { options } from "./dbconifg";
import { Company } from "./entity/company";
let connection: Connection;
export async function getConnect(): Promise<Connection> {
  return await createConnection(options);
}

export async function getComponentRepository(): Promise<Repository<Company>> {
  if (connection === undefined) {
    connection = await createConnection(options);
  }
  return connection.getRepository(Company);
}
