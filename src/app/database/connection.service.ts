import { Injectable } from "@angular/core";
import { createConnection, Connection, ConnectionOptions, getConnection } from "typeorm";
import { Company } from "./entity/company";

const options: ConnectionOptions = {
  type: "sqlite",
  // database: "\\\\192.168.10.3/グローバル調達g/97.ACCESS/sqlite3db/testdb.sqlite",
  // database: "\\\\192.168.24.1/group/グローバル調達G/99.database/testdb.sqlite",
  database: "C:\\workspace/testdb.sqlite",
  synchronize: true,
  entities: [Company],
};

@Injectable({
  providedIn: "root",
})
export class ConnectionService {
  getConnect(): any {
    return getConnection();
  }
  constructor() {
    EstablishConnection();
  }
}

function EstablishConnection() {
  async (connection: Connection) => {
    await createConnection(options);
  };
}
