import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  subTitle: string;

  constructor() {}

  setSubTitle(param: string) {
    this.subTitle = param;
  }

  getSubTitle() {
    return this.subTitle;
  }
}
