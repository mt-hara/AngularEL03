import { Component, OnInit } from "@angular/core";
import { CompanyService } from "../database/company.service";
import { ICompany } from "../model/company.model";
@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent {
  public title = "Company list";
  public dataSpurce: ICompany[];
  displayedColumns: string[];
  connectstr: string;
  repostr: string;
  liststr: string;
  constructor(companryService: CompanyService) {
    this.dataSpurce = companryService.getCommany();
    this.connectstr = companryService.connectstr;
    this.repostr = companryService.repostr;
    this.liststr = companryService.liststr;
    this.displayedColumns = ["id", "NUMDAT1", "NUMDAT2", "NUMDAT3", "NUMDAT4", "NUMDAT5", "NUMDAT6", "NUMDAT7"];
  }
}
