import { Injectable } from "@angular/core";
import { Connection, createConnection, ConnectionOptions } from "typeorm";
import { Company } from "./entity/company";
import { ICompany } from "../model/company.model";
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  public connection: Promise<Connection>;
  private readonly options: ConnectionOptions;
  public companys: Promise<ICompany[]>;
  constructor() {
    this.options = {
      type: "sqlite",
      // database: "\\\\192.168.10.3/グローバル調達g/97.ACCESS/sqlite3db/testdb.sqlite",
      // database:"\\\\192.168.10.3/グローバル調達g外部共有/99.database",
      // database: "\\\\192.168.24.1/group/グローバル調達G/99.database/testdb.sqlite",
      database: "C:\\workspace/testdb.sqlite",
      synchronize: false,
      entities: [Company],
    };

    this.connection = createConnection(this.options);
  }
  // getAllComanyList() {
  //   this.connection
  //     .then((connection) => connection.getRepository(Company))
  //     .then((repository) => {
  //       this.companys = repository.find();
  //     });
  // }
}
