import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { Company } from "./entity/company";
import { options } from "./dbconifg";

let connection: Connection;
