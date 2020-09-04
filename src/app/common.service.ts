import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  /**
   * データの変更を通史するオブジェクト
   * @private
   * @memberof CommonService
   */

  private sharedDataSource = new Subject<string>();

  /**
   * Subsrcibeをするためのプロパティ
   * コンポーネント間で共有するプロパティ
   * @memberof CommonService
   */

  public sharedDataSource$ = this.sharedDataSource.asObservable();

  constructor() {}

  /**
   * データ更新イベント
   * @param {string} updated 更新データ
   * @memberof CommonService
   */

  public onNotifySharedDataChanged(updated: string) {
    this.sharedDataSource.next(updated);
  }
}
