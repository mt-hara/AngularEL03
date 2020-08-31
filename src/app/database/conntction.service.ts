import { Injectable } from "@angular/core";
import { createConnection, getConnection, Connection } from "typeorm";
import { getConnect } from "./init";
@Injectable({
  providedIn: "root",
})
export class ConntctionService {
  getConnection(): Promise<Connection> {
    return getConnect();
  }
  constructor() {}
}
