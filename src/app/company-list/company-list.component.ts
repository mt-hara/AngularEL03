import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database/database.service";
import { Company } from "../database/entity/company";
import { ICompany } from "../model/company.model";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent {
  public title = "訪問先リスト";
  datasource: ICompany[];

  displayedColumns: string[] = ["id", "NUMDAT1", "NUMDAT2", "NUMDAT3", "NUMDAT4", "NUMDAT5", "NUMDAT6", "NUMDAT7"];

  constructor(private databaseService: DatabaseService) {
    // this.getCompanrys();
    this.getcompanyRepository();
  }

  getCompanrys() {
    this.databaseService.connection
      .then(() => Company.find())
      .then((companys) => {
        this.datasource = companys;
      });
  }
  getcompanyRepository() {
    this.databaseService.connection
      .then((connection) => connection.getRepository(Company))
      .then((repostitory) => repostitory.find())
      .then((result) => {
        this.datasource = result;
      });
  }
}
