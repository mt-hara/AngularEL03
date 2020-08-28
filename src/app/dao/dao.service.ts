import { Injectable } from "@angular/core";
import { createConnection, Connection, ConnectionOptions, Repository } from "typeorm";
import { Company } from "./entity/company.entity";
import { DB_PATH } from "./db-path";

@Injectable({
  providedIn: "root",
})
export class DaoService {
  public connection: Promise<Connection>;
  private readonly options: ConnectionOptions;

  constructor() {
    this.options = {
      type: "sqlite",
      database: DB_PATH,
      entities: [Company],
      synchronize: true,
    };
    this.connection = createConnection(this.options);
  }
}
