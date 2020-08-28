import { Injectable, OnInit } from "@angular/core";
import { createConnection, Connection, Repository } from "typeorm";
import { Company } from "./entity/company.entity";
import { DB_PATH } from "./db-config";
let connection: Connection;

@Injectable({
  providedIn: "root",
})
export class DaoService {
  constructor() {
    async (): Promise<Repository<Company>> => {
      if (connection === undefined) {
        connection = await createConnection({
          type: "sqlite",
          database: DB_PATH,
          synchronize: true,
          entities: [Company],
        });
      }
      return connection.getRepository(Company);
    };
  }
}
