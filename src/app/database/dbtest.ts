// import { DbConnection } from "./connection";
// import { Company } from "./entity/company.entity";
import { Company } from "../dao/entity/company.entity";
import { createConnection, Connection, Repository } from "typeorm";
import { DbConnection } from "./connection";

async function getCompanyRepository() {
  // if (connection === undefined) {
  // const connection = await createConnection({
  //   type: "sqlite",
  //   database: DB_PATH,
  //   synchronize: false,
  //   entities: [Company],
  // });
  const connection = new DbConnection(Company).connection;
  const result = connection.getRepository(Company);
  const result2 = await result.find();
  console.log(result2);
  // return connection.getRepository(Company);
}
getCompanyRepository();
// const res = getCompanyRepository();
// console.log(res);

// import { Company } from "../dto/company.dto";
// companys = [];

// async function get() {
//   console.log("start");
//   const con = await new DbConnection(Company);
//   con.connection
//     .then(() => Company.find())
//     .then((companys) => {
//       this.companys = companys;
//     });
//   console.log(this.companys);
// }

// get();
// console.log(this.companys);
