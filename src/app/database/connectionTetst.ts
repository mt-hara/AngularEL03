import { createConnection, Connection, ConnectionOptions, getConnection } from "typeorm";
import { Company } from "./entity/company";
import { options } from "./dbconifg";

// const option: ConnectionOptions = {
//   type: "sqlite",
//   database: "\\\\192.168.10.3/グローバル調達g/97.ACCESS/sqlite3db/testdb.sqlite",
// database: "\\\\192.168.24.1/group/グローバル調達G/99.database/testdb.sqlite",
// database: "C:\\workspace/testdb.sqlite",
//   synchronize: false,
//   entities: [__dirname + "/entity/*{.js,.ts}"],
// };

const main2 = async () => {
  await createConnection(options);
};
// async function main() {
//   const connection: Connection = await createConnection(options);
// const companyRepository = connection.getRepository(Company);
// const result = await companyRepository.find();
// console.log(result);
// }

async function sub() {
  await main2();
  const compRepository = await getConnection().getRepository(Company);
  const result = await compRepository.find();
  console.log(result);
  console.log("end");
}

async function search() {
  await main2();
  const company = await getConnection()
    .getRepository(Company)
    .createQueryBuilder("company")
    .where("company.id=:id", { id: 1 })
    .getOne();
  console.log(company.NUMDAT1);
}

search().catch(console.error);
