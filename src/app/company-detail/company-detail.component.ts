import { Component, OnInit, Input } from "@angular/core";
import { ICompany } from "../model/company.model";
@Component({
  selector: "app-company-detail",
  templateUrl: "./company-detail.component.html",
  styleUrls: ["./company-detail.component.scss"],
})
export class CompanyDetailComponent implements OnInit {
  @Input() compacy: ICompany;
  constructor() {}

  ngOnInit(): void {}
}
