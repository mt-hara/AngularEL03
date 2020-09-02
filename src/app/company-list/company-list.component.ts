import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database/database.service";
import { Company } from "../database/entity/company";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent {
  public title = "Company list";
  companys: Company[];
  displayedColumns: string[] = ["id", "NUMDAT1", "NUMDAT2", "NUMDAT3", "NUMDAT4", "NUMDAT5", "NUMDAT6", "NUMDAT7"];

  constructor(private databaseService: DatabaseService) {
    this.getCompanrys();
  }

  getCompanrys() {
    this.databaseService.connection
      .then(() => Company.find())
      .then((companys) => {
        this.companys = companys;
      });
  }
}
