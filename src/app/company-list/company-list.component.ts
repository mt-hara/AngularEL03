import { Component, OnInit } from "@angular/core";
import { CompanyService } from "../database/company.service";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent implements OnInit {
  constructor(companyService: CompanyService) {
    const repository = companyService.getRepository();
  }

  ngOnInit(): void {}
}
