import "reflect-metadata";
import { Injectable } from "@angular/core";
import { Company } from "./entity/company";
import { createConnection, Connection, Repository } from "typeorm";
import { options } from "./dbconifg";

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  public connection: Connection;
  // public connection: Connection;
  // public companyRepository: Repository<Company>;
  // public CompanyList: Company[];
  // public connectstr: string;
  // public repostr: string;
  // public liststr: string;
  constructor() {
    //   this.getConnection();
    //   this.getCompanyRepository();
    //   this.getAllCompanyList();
    //   if (this.connection === undefined) {
    //     this.connectstr = "connection is undefined";
    //   } else {
    //     this.connectstr = "connection is ok";
    //   }
    //   if (this.companyRepository === undefined) {
    //     this.repostr = "reopsitory is undefined";
    //   } else {
    //     this.repostr = "reopsitory is ok";
    //   }
    //   if (this.CompanyList === undefined) {
    //     this.liststr = "complist is undefined";
    //   } else {
    //     this.liststr = "complist is ok";
    //   }
    // }
    // getCommany(): Company[] {
    //   return this.CompanyList;
    // }
    // private async getCompanyRepository() {
    //   this.companyRepository = await this.connection.getRepository(Company);
    // }
    // private async getAllCompanyList() {
    //   this.CompanyList = await this.companyRepository.find();
    // }
    // private async getConnection() {
    //   this.connection = await createConnection(options);
    // }
  }
}
