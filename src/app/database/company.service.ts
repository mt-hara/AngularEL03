import { Injectable } from "@angular/core";
import { getComponentRepository } from "./init";
import { Company } from "./entity/company";
@Injectable({
  providedIn: "root",
})
export class CompanyService {
  constructor() {}
}

const allcompany:Promise<Company[]> = async ()=>{{
  (await getComponentRepository()).find();
}}