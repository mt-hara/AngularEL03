import { Component, OnInit } from "@angular/core";
import { Company } from "../dao/entity/company.entity";
import { DaoService } from "../dao/dao.service";
import { ICompany } from "../dto/company.dto";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
