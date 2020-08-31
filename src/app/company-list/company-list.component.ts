import { Component, OnInit } from "@angular/core";
import { Company } from "../database/entity/company";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
