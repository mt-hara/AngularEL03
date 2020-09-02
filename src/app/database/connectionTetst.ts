// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
//   { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
//   { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
//   { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
//   { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
//   { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
//   { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
//   { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
//   { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
//   { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
// ];

// const dataSuroce = ELEMENT_DATA;

// console.log(dataSuroce);

// type: "sqlite",
// database: "C:\\workspace/testdb.sqlite",
// synchronize: false,
// entities: [Company],
// logging: false,

// import "reflect-metadata";
// import { createConnection, Connection, ConnectionOptions } from "typeorm";
// import { Company } from "./entity/company";

// export class TestConnet {
//   // public connnection: Connection;
//   public repository: any;
//   private options: ConnectionOptions;
//   // public repository:Repository;
//   constructor() {
//     this.options = {
//       type: "sqlite",
//       database: "C:\\workspace/testdb.sqlite",
//       synchronize: true,
//       entities: [Company],
//       logging: false,
//     };
//     const connection = createConnection(this.options);
//     this.repository = connection.getRepository(Company);
//   }
// }

// const repo = new TestConnet();
// const result = repo.repository.find();

// type: "sqlite",
// database: "\\\\192.168.10.3/グローバル調達g/97.ACCESS/sqlite3db/testdb.sqlite",
// database:"\\\\192.168.10.3/グローバル調達g外部共有/99.database",
// database: "\\\\192.168.24.1/group/グローバル調達G/99.database/testdb.sqlite",
// database: "C:\\workspace/testdb.sqlite",
// synchronize: false,
// entities: [Company],
