import { Injectable, OnInit } from "@angular/core";
import { createConnection, Connection, ConnectionOptions, Repository } from "typeorm";
import { DB_PATH } from "./db-path";
import { Company } from "./entity/company.entity";

let connection: Connection;

@Injectable({
  providedIn: "root",
})
export class DaoService {
  private readonly options: ConnectionOptions;
  constructor() {
    getRepository();
  }
}

async function getRepository(): Promise<Repository<Company>> {
  if (connection === undefined) {
    connection = await createConnection({
      type: "sqlite",
      database: DB_PATH,
      synchronize: true,
      entities: [Company],
    });
  }
  return connection.getRepository(Company);
}
