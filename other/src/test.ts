// import {Component } from "@angular/core";
import { DaoService } from "../../src/app/dao/dao.service";
import { Company } from "../../src/app/dto/company.dto";

export class main {
  companys: Company[] = [];
  constructor(daoservice: DaoService) {
    this.getAll();
  }
  getAll() {}
}
