import { Component, OnInit, AfterContentChecked } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { CommonService } from "../common.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
/* 画面の縮小、拡大を自動検知する。 */
export class NavigationComponent implements AfterContentChecked, OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );
  title: string;

  constructor(private breakpointObserver: BreakpointObserver, private commonService: CommonService) {
    this.title = "";
    // this.title = this.commonService.getSubTitle();
  }

  ngOnInit() {
    // this.commonService.setSubTitle("");
    // this.title = this.commonService.getSubTitle();
  }
  ngAfterContentChecked() {
    // this.commonService.setSubTitle("");
    this.title = this.commonService.getSubTitle();
  }
}
