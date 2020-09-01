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

import { createConnection, Connection } from "typeorm";
import { ICompany } from "../model/company.model";
import { Company } from "./entity/company";
import { options } from "./dbconifg";

async function show() {
  const connection = await createConnection(options);
  const compRepository = await connection.getRepository(Company);
  const compList = await compRepository.find();

  console.log(compList);
}

// export class TestGetter {
//   public dataSource: ICompany[];
//   constructor(companyService: CompanyService) {
//     this.dataSource = companyService.getCompanyList();
//   }
// public show(): void {
//   console.log(this.dataSource);
// }
// }

show();
