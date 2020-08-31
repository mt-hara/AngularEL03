import { createConnection, Connection, ConnectionOptions } from "typeorm";
import { Company } from "./entity/company";

const options: ConnectionOptions = {
  type: "sqlite",
  // database: "\\\\192.168.10.3/グローバル調達g/97.ACCESS/sqlite3db/testdb.sqlite",
  database: "\\\\192.168.24.1/group/グローバル調達G/99.database/testdb.sqlite",
  // database: "C:\\workspace/testdb.sqlite",
  synchronize: false,
  entities: [Company],
};

async function main() {
  const connection: Connection = await createConnection(options);
  const companyRepository = connection.getRepository(Company);
  const result = await companyRepository.find();
  console.log(result);
}

main().catch(console.error);
