import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-company-top",
  templateUrl: "./company-top.component.html",
  styleUrls: ["./company-top.component.scss"],
})
export class CompanyTopComponent implements OnInit {
  public title = "訪問先リスト";
  constructor() {}

  ngOnInit(): void {}
}
